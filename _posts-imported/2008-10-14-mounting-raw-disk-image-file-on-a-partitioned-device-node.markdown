---
layout: post
title: !binary |-
  TW91bnRpbmcgcmF3IGRpc2sgaW1hZ2UgZmlsZSBvbiBhIHBhcnRpdGlvbmVk
  IGRldmljZSBub2Rl
wordpress_id: 225
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0yMjU=
date: 2008-10-14 12:29:51.000000000 +00:00
---
If you have a virtual machine disk created with, for example 
<code>
# qemu-img create -f raw image.raw 4G
</code>
or
<code>
# kvm-img create -f raw image.raw 4G
</code>
You can mount it on your host operating system with
<code>
# rmmod loop
# modprobe loop max_part=63
# losetup -f /path/to/your/disk/image.raw
# mount /dev/loop0p1 /mnt/path
</code>

P.S. this works with Linux kernel v2.6.26 and later.
