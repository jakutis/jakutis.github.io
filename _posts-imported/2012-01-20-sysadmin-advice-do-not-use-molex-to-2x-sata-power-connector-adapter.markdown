---
layout: post
title: !binary |-
  c3lzYWRtaW4gYWR2aWNlOiBkbyBub3QgdXNlIE1vbGV4IHRvIDJ4IFNBVEEg
  cG93ZXIgY29ubmVjdG9yIGFkYXB0ZXI=
wordpress_id: 361
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0zNjE=
date: 2012-01-20 19:14:40.000000000 +00:00
---
Instead, use <a href="http://www.amazon.com/SATA-Power-Cable-4-pin-15-pin/dp/B001M68KFS/ref=sr_1_4?s=electronics&ie=UTF8&qid=1326727805&sr=1-4">Molex to 1x SATA power connector adapter</a>, or better - get a power supply unit (PSU) with enough SATA power cables.

I learned this lesson, when I switched to a decent PSU.

My server contains two HDDs in a RAID1 array. Before the switch I had them connected to the same Molex through the 2x adapter. One day a HDD was thrown away from the array as faulty. I had to replace it with a new one and resync the array. This operation causes the HDDs to become very busy, while also having them to perform the usual tasks. But the new HDD was also thrown away from the array!

I figured I should try a better PSU and that was it! The RAID1 array synced successfully. I have no problems with it for almost a week. The difference between the setups was that with the new PSU I no longer had to use the <a href="http://www.amazon.com/Syba-SY-CAB40007-Molex-Power-Inches/dp/B0027AGK3M/ref=sr_1_5?s=electronics&ie=UTF8&qid=1326727805&sr=1-5">Molex to 2x SATA power connector adapter</a>.

The hardware:
  - first disk: Samsung HD204UI (5400 rpm)
  - second disk (replacement): Seagate ST2000DL003 (5900 rpm)
  - faulty disk (replaced): Hitachi HDS5C3020ALA632 (5400 rpm)
  - the new PSU (replacement): Modecom ZAS-FEEL1-SW-520 (520W)
  - the old PSU (replaced): Foxconn ISO450PPS (350W)

P.S. it turns out the faulty disk is actually not faulty, since it is working perfectly in other machine.
