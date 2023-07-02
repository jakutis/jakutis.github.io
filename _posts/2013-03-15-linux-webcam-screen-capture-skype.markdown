---
layout: post
title: Capture webcam and desktop screen into Skype video call
date: 2013-03-15
---

## Steps

1. Install [v4l2loopback](https://github.com/umlaeute/v4l2loopback) Linux kernel module (on ArchLinux it is the aur/v4l2loopback-git package) and do `sudo modprobe v4l2loopback devices=1 video_nr=10 card_label="OBS Cam" exclusive_caps=1`.
2. If you have ffmpeg:
  - Run `ffmpeg -probesize 100M -framerate 15 -f x11grab -video_size 1920x1080 -i :0.0+0,0 -vcodec rawvideo -pix_fmt yuv420p -f v4l2 -vf scale=1280:720 /dev/video10`
  - Run `gst-launch-0.10 ximagesrc use-damage=0 ! ffmpegcolorspace ! "video/x-raw-yuv,format=(fourcc)YUY2" ! v4l2sink device=/dev/video10` to capture your desktop into the `/dev/video10` loopback Video4Linux2 device.
3. Run `gst-launch-0.10 v4l2src device=/dev/video10 ! xvimagesink` to show the webcam window.
4. Run Skype and set the video device to `/dev/video10` or run `gst-launch-0.10 v4l2src device=/dev/video10 ! xvimagesink` to test how it would look in Skype.
