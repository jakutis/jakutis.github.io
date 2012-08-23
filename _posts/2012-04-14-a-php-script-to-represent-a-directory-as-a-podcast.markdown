---
layout: post
title: a php script to represent a directory as a podcast
wordpress_id: 521
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD01MjE=
date: 2012-04-14 22:47:34.000000000 +00:00
---
This recursively finds all files in the given directory, sorts them by last modification date and generates an RSS/Atom feed for your consumption.

{% highlight php %}
<?php

$dir = 'INSERT_FILESYSTEM_DIRECTORY_HERE_WITHOUT_TRAILING_SLASH';
$urlDir = 'http://insert.url/path/here';
$link = 'http://insert.url/thisscript.php';
$limit = 20;
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 'stdout');


function date_rfc2822($time) {
  return gmdate('D, d M Y H:i:s O', $time);
}

function rss($data) {
    $body = '<?xml version="1.0" encoding="utf-8"?>';
    $body .= '<rss xmlns:media="http://search.yahoo.com/mrss/" xmlns:content="http://purl.org/rss/1.0/modules/content/" version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xml:base="' . htmlentities($data['baseurl'], ENT_COMPAT, 'utf-8') . '"><channel>';
    $body .= '<title>' . htmlentities($data['title'], ENT_COMPAT, 'utf-8') . '</title>';
    $body .= '<link>' . htmlentities($data['link'], ENT_COMPAT, 'utf-8') . '</link>';
    $body .= '<description>' . htmlentities($data['description'], ENT_COMPAT, 'utf-8') . '</description>';
    $body .= '<language>' . htmlentities($data['lang'], ENT_COMPAT, 'utf-8') . '</language>';
    $body .= '<atom:link href="' . htmlentities($data['linkfeed'], ENT_COMPAT, 'utf-8') . '" rel="self" type="application/rss+xml" />';
    foreach ($data['items'] as $i => $item) {
        $link = htmlentities($item['link'], ENT_COMPAT, 'utf-8');
        $descr = $item['description'];
        $body .= '<item>';
        $body .= '<title>' . htmlentities($item['title'], ENT_COMPAT, 'utf-8') . '</title>';
        $body .= '<link>' . $link . '</link>';
        $body .= '<guid>' . $link . '</guid>';
        foreach($item['enclosures'] as $enclosure) {
            $body .= '<enclosure length="' . $enclosure['length'] . '" type="' . $enclosure['contentType'] . '" url="' . htmlentities($enclosure['url'], ENT_COMPAT, 'utf-8') . '" />';
            $body .= '<media:content fileSize="' . $enclosure['length'] . '" type="' . $enclosure['contentType'] . '" url="' . htmlentities($enclosure['url'], ENT_COMPAT, 'utf-8') . '" />';
        }
        $body .= '<description><![CDATA[' . strip_tags($descr) . ']]></description>';
        $body .= '<content:encoded><![CDATA[' . $descr . ']]></content:encoded>';
        $body .= '<pubDate>' . date_rfc2822($item['pubdate']) . '</pubDate>';
        $body .= '</item>';
    }
    return $body . '</channel></rss>';
}

function find($dir, &$list) {
    if($handle = opendir($dir)) {
        while(false !== ($entry = readdir($handle))) {
            if($entry != '.' && $entry != '..') {
                $path = $dir . '/' . $entry;
                if(is_dir($path)) {
                    find($path, $list);
                } else {
                    $list[$path] = filemtime($path);
                }
            }
        }
        closedir($handle);
    }
}

$found = array();
find($dir, $found);
arsort($found);
$modified = current($found);
if (isset ($_SERVER['HTTP_IF_MODIFIED_SINCE']) && $modified <= strtotime($_SERVER['HTTP_IF_MODIFIED_SINCE'])) {
    header('HTTP/1.0 304 Not Modified');
} else {
    header('Content-Type: application/rss+xml; charset=UTF-8');
    header('Last-Modified: ' . date_rfc2822($modified));
    $data = array(
        'baseurl' => $link,
        'title' => 'Latest files from ' . $dir,
        'description' => 'Latest files from ' . $dir,
        'link' => $link,
        'lang' => 'en',
        'linkfeed' => $link,
        'items' => array()
    );
    $i = 0;
    foreach($found as $fullpath => $lastModified) {
        if($i === $limit) {
            break;
        }
        $i++;
        $path = substr($fullpath, strlen($dir));
        $url = $urlDir . str_replace('%2F', '/', rawurlencode($path));
        $data['items'][] = array(
            'link' => $url,
            'description' => $path,
            'title' => $path,
            'pubdate' => $lastModified,
            'enclosures' => array(
                array(
                    'length' => filesize($fullpath),
                    'contentType' => mime_content_type($fullpath),
                    'url' => $url
                )
            )
        );
    }
    echo rss($data);
}
{% endhighlight %}
