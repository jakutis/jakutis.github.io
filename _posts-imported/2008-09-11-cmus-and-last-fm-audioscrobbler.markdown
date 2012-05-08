---
layout: post
title: !binary |-
  Q01VUyBhbmQgbGFzdC5mbSAoYXVkaW9zY3JvYmJsZXIp
wordpress_id: 252
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0yNTI=
date: 2008-09-11 01:34:18.000000000 +00:00
---
<a href="http://cmus.sourceforge.net/">CMUS</a> is a cross platform command line audio player. I've found <a href="http://www.hci-matters.com/blog/2008/05/06/c-music-player-audioscrobblerlastfm-patch/">a blog post about patching CMUS to support submitting played tracks to last.fm</a>.

The original source of the patch is <a href="http://www.bewatermyfriend.org/posts/2007/02-02.13-23-34-computer.html">here</a> and <a href="http://www.bewatermyfriend.org/posts/2007/04-10.11-08-33-computer.html">here</a>.

Following is my list of simplified installation instructions.


<ol>

<li>
<p>download a <a href="http://repo.or.cz/w/cmus.git?a=snapshot;h=9190c49aab76735a119de24830c274f273f70b5d;sf=tgz">snapshot from 2008-04-29</a> from <a href="http://repo.or.cz/w/cmus.git?a=tree;h=9190c49aab76735a119de24830c274f273f70b5d;hb=9190c49aab76735a119de24830c274f273f70b5d">this tree</a> (this particular snapshot is required for the following patch to succeed) and extract it</p>
<pre>
wget "http://repo.or.cz/w/cmus.git?a=snapshot;h=9190c49aab76735a119de24830c274f273f70b5d;sf=tgz"
tar xf cmus-9190c49aab76735a119de24830c274f273f70b5d.tar.gz
</pre>
</li>

<li>
<p>download <a href="http://www.hci-matters.com/blog/wp-content/uploads/2008/05/06/cmus_audioscrobblerBETA41-githead.diff">the patch (cmus_audioscrobblerBETA41-githead.diff)</a> and apply it over the extracted snapshot</p>
<pre>
wget "http://www.hci-matters.com/blog/wp-content/uploads/2008/05/06/cmus_audioscrobblerBETA41-githead.diff"
cd cmus
patch &lt; ../cmus_audioscrobblerBETA41-githead.diff
</pre>
</li>

<li>
<p>configure, make and make install (I had to disable ffmpeg on my box, because compilation failed)</p>
<pre>
./configure prefix=&lt;your_prefix&gt; CONFIG_FFMPEG=n <your_other_options>
make
make install
</pre>
</li>

<li>
<p>run your compiled cmus and enter the following commands:</p>
<pre>
:set as_enable=true
:set as_user=&lt;your_last.fm_username&gt;
:set as_pass=&lt;your_last.fm_password&gt;
</pre>
</li>

</ol>
