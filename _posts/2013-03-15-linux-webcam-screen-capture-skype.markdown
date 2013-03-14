---
layout: post
title: Capture webcam and desktop screen into Skype video call
date: 2013-03-15
---

## Steps

1. Install [v4l2loopback](https://github.com/umlaeute/v4l2loopback) Linux kernel module (on ArchLinux it is the aur/v4l2loopback-git package) and do `sudo modprobe v4l2loopback`.
2. Run `gst-launch-0.10 ximagesrc use-damage=0 ! ffmpegcolorspace ! "video/x-raw-yuv,format=(fourcc)YUY2" ! v4l2sink device=/dev/video1` to capture your desktop into the `/dev/video1` loopback Video4Linux2 device.
3. Run `gst-launch-0.10 v4l2src device=/dev/video0 ! xvimagesink` to show the webcam window.
4. Run Skype and set the video device to `/dev/video1` or run `gst-launch-0.10 v4l2src device=/dev/video1 ! xvimagesink` to test how it would look in Skype.
