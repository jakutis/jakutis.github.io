---
layout: post
title: !binary |-
  QSBiYXNoIHNjcmlwdCB0byBhaWQgdmVyYm9zZSByZXNjdWluZyBvZiBmaWxl
  cw==
wordpress_id: 257
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0yNTc=
date: 2008-07-26 00:36:30.000000000 +00:00
---
The attached shell script has these features:
<ul>
<li>needs two parameters: source directory and destination directory</li>
<li>recursively scans files from source directory and makes a list of files using destination directory path</li>
<li>copies files using <a href="http://www.gnu.org/software/ddrescue/ddrescue.html">ddrescue</a></li>
<li>creates the necessary subdirectories in the destination directory</li>
<li>tries an infinite number of times to read a file when errors occurred</li>
<li>expects a user to interrupt operation of ddrescue when errors occurred</li>
<li>deletes non error-free files</li>
<li>outputs a list of non error-free files at the end of the script operation</li>
</ul>

<code>

#!/bin/bash

MY_SRC="$1"
MY_DST="$2"
MY_LOG="`tempfile`"
MY_FAILURES="`tempfile`"

find "$1" -printf "%P\n" | while read MY_P
do
	if ! [ -d "$MY_SRC/$MY_P" ]
	then
		echo -e "\n-- Rescuing: $MY_P"
		mkdir -p "`dirname \"$MY_DST/$MY_P\"`"
		ddrescue -t -r -1 "$MY_SRC/$MY_P" "$MY_DST/$MY_P"|tee "$MY_LOG"
		if [ -z "`grep Finished \"$MY_LOG\"`" ]
		then
			echo -e "\n\n-- Failure\n\n"
			echo "$MY_P" &gt;&gt; "$MY_FAILURES"
			rm "$MY_DST/$MY_P"
		else
			echo -e "\n\n-- Success\n\n"
		fi
	fi
done

echo -e "\n-- Failures:"
cat "$MY_FAILURES"
rm "$MY_LOG"
rm "$MY_FAILURES"
</code>
