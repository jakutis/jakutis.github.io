---
layout: post
title: Live streaming stdout (e.g. of rtmpdump or ffmpeg) to UPnP/DLNA MediaRenderer
date: Sat Mar 26 17:15:33 EET 2016
---
First, create file `stdin-to-http.js`:

{% highlight javascript %}
require('http')
  .createServer(function (req, res) {
    res.writeHead(200, {
      'Content-Type': process.argv[2]
    });
    if (req.method === 'HEAD') {
      return res.end();
    }
    process.stdin.pipe(res);
  })
  .listen(1337);
{% endhighlight %}

Then:

1. Install [Node.js](https://nodejs.org/) and [FFmpeg](http://ffmpeg.org/).
1. Run this in terminal: `your-mpeg-video-source | node stdin-to-http.js video/mpeg`. `your-mpeg-video-source` can be for example `rtmpdump -r rtmp://tv.example.org/live/stream1?token=abcdef | ffmpeg -re -i pipe:0 -bufsize 4096k -maxrate 4096k -vcodec h264 -preset fast -b:v 500k -acodec aac -b:a 128k -strict -2 -f mpegts -` or `ffmpeg -f video4linux2 -i /dev/video0 -pix_fmt yuv420p -bufsize 4096k -maxrate 4096k -vcodec h264 -preset fast -b:v 2000k -f mpegts -` or `curl https://cdn.example.org/my-video-file | ffmpeg -i pipe:0 -bufsize 4096k -maxrate 4096k -vcodec h264 -preset fast -b:v 2000k -acodec aac -b:a 128k -strict -2 -f mpegts -`.
1. Install and run [vGet Cast (DLNA Controller)](https://chrome.google.com/webstore/detail/http-archive-viewer/ekdjofnchpbfmnfbedalmbdlhbabiapi).
1. Set url to `http://your-computer-ip-in-lan:1337/` (e.g. `http://192.168.1.42:1337`) and click on media renderer to play!

P.S. You can also start playing the stream using [upnp-mediarenderer-client](https://www.npmjs.com/package/upnp-mediarenderer-client).
