---
layout: post
title: !binary |-
  QSBKYXZhIHByb2dyYW0gdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZHVwbGlj
  YXRlIGZpbGVzIGluIGEgZGlyZWN0b3J5
wordpress_id: 41
wordpress_url: !binary |-
  aHR0cDovL3Z5dGF1dGFzLmpha3V0aXMubmFtZS8/cD00MQ==
date: 2011-03-15 20:21:08.000000000 +00:00
---
*Edit.* This post is made obsolete by [https://jakut.is/2013/08/06/a-java-program-to-list-all-duplicates-update](A Java program to recursively find all duplicate files in a directory [revision 2]).

***

{% highlight java linenos=table %}
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;

public class FindDuplicates {
    private static MessageDigest md;
    static {
        try {
            md = MessageDigest.getInstance("SHA-512");
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("cannot initialize SHA-512 hash function", e);
        }
    }

    public static void find(Map<String, List<String>> lists, File directory) {
        for (File child : directory.listFiles()) {
            if (child.isDirectory()) {
                find(lists, child);
            } else {
                try {
                    FileInputStream fin = new FileInputStream(child);
                    byte data[] = new byte[(int) child.length()];
                    fin.read(data);
                    fin.close();
                    String hash = new BigInteger(1, md.digest(data)).toString(16);
                    List<String> list = lists.get(hash);
                    if (list == null) {
                        list = new LinkedList<String>();
                        lists.put(hash, list);
                    }
                    list.add(child.getAbsolutePath());
                } catch (IOException e) {
                    throw new RuntimeException("cannot read file " + child.getAbsolutePath(), e);
                }
            }
        }
    }

    public static void main(String[] args) {
        if (args.length < 1) {
            System.out.println("Please supply a path to directory to find duplicate files in.");
            return;
        }
        File dir = new File(args[0]);
        if (!dir.isDirectory()) {
            System.out.println("Supplied directory does not exist.");
            return;
        }
        Map<String, List<String>> lists = new HashMap<String, List<String>>();
        FindDuplicates.find(lists, dir);
        for (List<String> list : lists.values()) {
            if (list.size() > 1) {
                System.out.println("--");
                for (String file : list) {
                    System.out.println(file);
                }
            }
        }
        System.out.println("--");
    }

}
{% endhighlight %}
