---
layout: post
title: !binary |-
  bG93LXBvd2VyLWJlZXBlciwgZm9yIGxhcHRvcHMgd2l0aCBMaW51eA==
wordpress_id: 115
wordpress_url: !binary |-
  aHR0cDovL3Z5dGF1dGFzLmpha3V0aXMubmFtZS8/cD0xMTU=
date: 2011-06-17 22:35:16.000000000 +00:00
---
Below is a shell script that when executed goes to background mode. It will cause your laptop speekers to beep, when the battery charge is below the specified treshold and you have not plugged a charger. Save this script to an executable file and add the path to a startup script (/etc/rc.local, ~/.xinitrc, etc.) or to your <a href="http://en.wikipedia.org/wiki/Desktop_environment#Examples_of_desktop_environments">desktop environment</a> startup.

<pre style="overflow: auto; color: #000000; background-color: khaki; font-size: 10pt; font-family: monospace;">
<span style="color:#838183; font-style:italic">#!/usr/bin/env bash</span>

<span style="color:#838183; font-style:italic"># 1000 = 1mAh</span>
CHARGE_TRESHOLD<span style="color:#000000">=</span><span style="color:#ff0000">&quot;200000&quot;</span>
POLL_INTERVAL<span style="color:#000000">=</span><span style="color:#ff0000">&quot;5&quot;</span>
COMPLAIN<span style="color:#000000">=</span><span style="color:#ff0000">&quot;write a complaint to me&#64;vytautas.jakutis.name&quot;</span>

<span style="color:#000000; font-weight:bold">function</span> rl <span style="color:#000000">{</span> 
  <span style="color:#830000">local</span> TARGET_FILE<span style="color:#000000">=</span><span style="color:#830000">$1</span>
  <span style="color:#830000">cd</span> <span style="color:#ff0000">&quot;$(dirname &quot;</span><span style="color:#830000">$TARGET_FILE</span><span style="color:#ff0000">&quot;)&quot;</span>
  TARGET_FILE<span style="color:#000000">=</span>$<span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">basename</span> <span style="color:#ff0000">&quot;$TARGET_FILE&quot;</span><span style="color:#000000">)</span>
  <span style="color:#000000; font-weight:bold">while</span> <span style="color:#000000">[ -</span>L <span style="color:#ff0000">&quot;$TARGET_FILE&quot;</span> <span style="color:#000000">]</span>
  <span style="color:#000000; font-weight:bold">do</span>
    TARGET_FILE<span style="color:#000000">=</span>$<span style="color:#000000">(</span>readlink <span style="color:#ff0000">&quot;$TARGET_FILE&quot;</span><span style="color:#000000">)</span>
    <span style="color:#830000">cd</span> <span style="color:#ff0000">&quot;$(dirname &quot;</span><span style="color:#830000">$TARGET_FILE</span><span style="color:#ff0000">&quot;)&quot;</span>
    TARGET_FILE<span style="color:#000000">=</span>$<span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">basename</span> <span style="color:#ff0000">&quot;$TARGET_FILE&quot;</span><span style="color:#000000">)</span>
  <span style="color:#000000; font-weight:bold">done</span>
  <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;$(pwd -P)/$TARGET_FILE&quot;</span>
<span style="color:#000000">}</span>
SELF<span style="color:#000000">=</span><span style="color:#ff0000">&quot;$(rl &quot;</span><span style="color:#830000">$0</span><span style="color:#ff0000">&quot;)&quot;</span>

<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">! [ -</span>r <span style="color:#ff0000">&quot;/sys/class/power_supply/BAT0/status&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;Could not read your battery status, please $COMPLAIN&quot;</span>
  <span style="color:#830000">exit</span> <span style="color:#2928ff">1</span>
<span style="color:#000000; font-weight:bold">fi</span>
<span style="color:#000000; font-weight:bold">function</span> status <span style="color:#000000">{</span>
  <span style="color:#000000; font-weight:bold">cat</span> <span style="color:#000000">/</span>sys<span style="color:#000000">/</span>class<span style="color:#000000">/</span>power_supply<span style="color:#000000">/</span>BAT0<span style="color:#000000">/</span>status
<span style="color:#000000">}</span>
<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">! [ -</span>r <span style="color:#ff0000">&quot;/sys/class/power_supply/BAT0/charge_now&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;Could not read your battery charge, please $COMPLAIN&quot;</span>
  <span style="color:#830000">exit</span> <span style="color:#2928ff">1</span>
<span style="color:#000000; font-weight:bold">fi</span>
<span style="color:#000000; font-weight:bold">function</span> charge <span style="color:#000000">{</span>
  <span style="color:#000000; font-weight:bold">cat</span> <span style="color:#000000">/</span>sys<span style="color:#000000">/</span>class<span style="color:#000000">/</span>power_supply<span style="color:#000000">/</span>BAT0<span style="color:#000000">/</span>charge_now
<span style="color:#000000">}</span>
<span style="color:#000000; font-weight:bold">function</span> vmset <span style="color:#000000">{</span>
  amixer cset name<span style="color:#000000">=</span><span style="color:#ff0000">&quot;$1 Playback Switch&quot;</span> <span style="color:#ff0000">&quot;$2&quot;</span> <span style="color:#2928ff">2</span><span style="color:#000000">&gt;/</span>dev<span style="color:#000000">/</span>null <span style="color:#000000">&gt;&amp;</span><span style="color:#2928ff">2</span>
<span style="color:#000000">}</span>
<span style="color:#000000; font-weight:bold">function</span> vmget <span style="color:#000000">{</span>
  amixer cget name<span style="color:#000000">=</span><span style="color:#ff0000">&quot;$1 Playback Switch&quot;</span><span style="color:#000000">|</span><span style="color:#000000; font-weight:bold">grep</span> <span style="color:#ff0000">&quot;: values&quot;</span><span style="color:#000000">|</span><span style="color:#000000; font-weight:bold">sed</span> <span style="color:#ff0000">'s/  : values=//ig'</span> <span style="color:#2928ff">2</span><span style="color:#000000">&gt;/</span>dev<span style="color:#000000">/</span>null
<span style="color:#000000">}</span>
<span style="color:#000000; font-weight:bold">function</span> vset <span style="color:#000000">{</span>
  amixer cset name<span style="color:#000000">=</span><span style="color:#ff0000">&quot;$1 Playback Volume&quot;</span> <span style="color:#ff0000">&quot;$2&quot;</span> <span style="color:#2928ff">2</span><span style="color:#000000">&gt;/</span>dev<span style="color:#000000">/</span>null <span style="color:#000000">&gt;&amp;</span><span style="color:#2928ff">2</span>
<span style="color:#000000">}</span>
<span style="color:#000000; font-weight:bold">function</span> vget <span style="color:#000000">{</span>
  amixer cget name<span style="color:#000000">=</span><span style="color:#ff0000">&quot;$1 Playback Volume&quot;</span><span style="color:#000000">|</span><span style="color:#000000; font-weight:bold">grep</span> <span style="color:#ff0000">&quot;: values&quot;</span><span style="color:#000000">|</span><span style="color:#000000; font-weight:bold">sed</span> <span style="color:#ff0000">'s/  : values=//ig'</span> <span style="color:#2928ff">2</span><span style="color:#000000">&gt;/</span>dev<span style="color:#000000">/</span>null
<span style="color:#000000">}</span>
<span style="color:#000000; font-weight:bold">function</span> vmax <span style="color:#000000">{</span>
  vmset <span style="color:#ff0000">&quot;$1&quot;</span> on
  amixer sset <span style="color:#ff0000">&quot;$1&quot;</span> <span style="color:#ff0000">&quot;$(amixer sget &quot;</span><span style="color:#830000">$1</span><span style="color:#ff0000">&quot;|grep Limits|sed 's/  Limits: Playback 0 - //ig')&quot;</span> <span style="color:#2928ff">2</span><span style="color:#000000">&gt;/</span>dev<span style="color:#000000">/</span>null <span style="color:#000000">&gt;&amp;</span><span style="color:#2928ff">2</span>
<span style="color:#000000">}</span>
CONTROLS<span style="color:#000000">=</span><span style="color:#ff0000">&quot;$(amixer scontrols|sed &quot;</span>s<span style="color:#000000">/</span>Simple mixer control <span style="color:#ff0000">'//gi&quot;|sed &quot;s/'</span><span style="color:#000000">,</span><span style="color:#2928ff">0</span>$<span style="color:#000000">//</span>gi<span style="color:#ff0000">&quot;)&quot;</span>
<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">[ -</span>n <span style="color:#ff0000">&quot;$(which paplay 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  PLAYWAV<span style="color:#000000">=</span><span style="color:#ff0000">&quot;paplay&quot;</span>
<span style="color:#000000; font-weight:bold">elif</span> <span style="color:#000000">[ -</span>n <span style="color:#ff0000">&quot;$(which mplayer 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  PLAYWAV<span style="color:#000000">=</span><span style="color:#ff0000">&quot;mplayer&quot;</span>
<span style="color:#000000; font-weight:bold">elif</span> <span style="color:#000000">[ -</span>n <span style="color:#ff0000">&quot;$(which aplay 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  PLAYWAV<span style="color:#000000">=</span><span style="color:#ff0000">&quot;aplay&quot;</span>
<span style="color:#000000; font-weight:bold">elif</span> <span style="color:#000000">[ -</span>n <span style="color:#ff0000">&quot;$(which cvlc 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  PLAYWAV<span style="color:#000000">=</span><span style="color:#ff0000">&quot;clvc --play-and-exit&quot;</span>
<span style="color:#000000; font-weight:bold">elif</span> <span style="color:#000000">[ -</span>n <span style="color:#ff0000">&quot;$(which artsplay 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  PLAYWAV<span style="color:#000000">=</span><span style="color:#ff0000">&quot;artsplay&quot;</span>
<span style="color:#000000; font-weight:bold">elif</span> <span style="color:#000000">[ -</span>n <span style="color:#ff0000">&quot;$(which ossplay 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  PLAYWAV<span style="color:#000000">=</span><span style="color:#ff0000">&quot;ossplay&quot;</span>
<span style="color:#000000; font-weight:bold">elif</span> <span style="color:#000000">[ -</span>n <span style="color:#ff0000">&quot;$(which esdplay 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  PLAYWAV<span style="color:#000000">=</span><span style="color:#ff0000">&quot;esdplay&quot;</span>
<span style="color:#000000; font-weight:bold">else</span>
  <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;Could not play audio file, please install package &quot;</span>beep<span style="color:#ff0000">&quot; or $COMPLAIN&quot;</span>
  <span style="color:#830000">exit</span> <span style="color:#2928ff">1</span>
<span style="color:#000000; font-weight:bold">fi</span>
<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">[ -</span>z <span style="color:#ff0000">&quot;$(which tempfile 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;Command &quot;</span>tempfile<span style="color:#ff0000">&quot; not found, please install package &quot;</span>beep<span style="color:#ff0000">&quot; or $COMPLAIN&quot;</span>
  <span style="color:#830000">exit</span> <span style="color:#2928ff">1</span>
<span style="color:#000000; font-weight:bold">fi</span>
<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">[ -</span>z <span style="color:#ff0000">&quot;$(which uudecode 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;Command &quot;</span><span style="color:#000000; font-weight:bold">uudecode</span><span style="color:#ff0000">&quot; not found, please install package &quot;</span>beep<span style="color:#ff0000">&quot; or install shar-utils package or $COMPLAIN&quot;</span>
  <span style="color:#830000">exit</span> <span style="color:#2928ff">1</span>
<span style="color:#000000; font-weight:bold">fi</span>
<span style="color:#000000; font-weight:bold">function</span> beep <span style="color:#000000">{</span>
  <span style="color:#830000">declare</span> <span style="color:#000000">-</span>A VOL
  <span style="color:#830000">declare</span> <span style="color:#000000">-</span>A VOLM
  <span style="color:#000000; font-weight:bold">for</span> C <span style="color:#000000; font-weight:bold">in</span> <span style="color:#830000">$CONTROLS</span>
  <span style="color:#000000; font-weight:bold">do</span>
    VOL<span style="color:#000000">[</span><span style="color:#830000">$C</span><span style="color:#000000">]=</span><span style="color:#ff0000">&quot;$(vget &quot;</span><span style="color:#830000">$C</span><span style="color:#ff0000">&quot;)&quot;</span>
    VOLM<span style="color:#000000">[</span><span style="color:#830000">$C</span><span style="color:#000000">]=</span><span style="color:#ff0000">&quot;$(vmget &quot;</span><span style="color:#830000">$C</span><span style="color:#ff0000">&quot;)&quot;</span>
    vmax <span style="color:#ff0000">&quot;$C&quot;</span>
  <span style="color:#000000; font-weight:bold">done</span>

  <span style="color:#830000">local</span> BEEP<span style="color:#000000">=</span><span style="color:#ff0000">&quot;$(tempfile)&quot;</span>
  <span style="color:#000000; font-weight:bold">uudecode</span> <span style="color:#000000">-</span>o <span style="color:#ff0000">&quot;$BEEP&quot;</span> <span style="color:#ff0000">&quot;$SELF&quot;</span>
  <span style="color:#ff0000">&quot;$PLAYWAV&quot;</span> <span style="color:#ff0000">&quot;$BEEP&quot;</span> <span style="color:#000000">&gt;/</span>dev<span style="color:#000000">/</span>null <span style="color:#2928ff">2</span><span style="color:#000000">&gt;&amp;</span><span style="color:#2928ff">1</span>
  <span style="color:#000000; font-weight:bold">rm</span> <span style="color:#ff0000">&quot;$BEEP&quot;</span>

  <span style="color:#000000; font-weight:bold">for</span> C <span style="color:#000000; font-weight:bold">in</span> <span style="color:#830000">$CONTROLS</span>
  <span style="color:#000000; font-weight:bold">do</span>
    vset <span style="color:#ff0000">&quot;$C&quot;</span> <span style="color:#ff0000">&quot;${VOL[$C]}&quot;</span>
    vmset <span style="color:#ff0000">&quot;$C&quot;</span> <span style="color:#ff0000">&quot;${VOLM[$C]}&quot;</span>
  <span style="color:#000000; font-weight:bold">done</span>
<span style="color:#000000">}</span>
  
<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">[</span> <span style="color:#ff0000">&quot;$1&quot;</span> <span style="color:#000000">=</span> <span style="color:#ff0000">&quot;-d&quot;</span> <span style="color:#000000">]</span>
<span style="color:#000000; font-weight:bold">then</span>
  <span style="color:#000000; font-weight:bold">while</span> true
  <span style="color:#000000; font-weight:bold">do</span>
    <span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">[</span> <span style="color:#ff0000">&quot;$(charge)&quot;</span> <span style="color:#000000">-</span>lt <span style="color:#ff0000">&quot;$CHARGE_TRESHOLD&quot;</span> <span style="color:#000000">]</span>
    <span style="color:#000000; font-weight:bold">then</span>
      <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;Below treshold&quot;</span>
      <span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">[</span> <span style="color:#ff0000">&quot;$(status)&quot;</span> <span style="color:#000000">!=</span> <span style="color:#ff0000">&quot;Charging&quot;</span> <span style="color:#000000">]</span>
      <span style="color:#000000; font-weight:bold">then</span>
        <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;Not charging&quot;</span>
        beep
      <span style="color:#000000; font-weight:bold">fi</span>
    <span style="color:#000000; font-weight:bold">fi</span>
    <span style="color:#000000; font-weight:bold">sleep</span> <span style="color:#ff0000">&quot;$POLL_INTERVAL&quot;</span>
  <span style="color:#000000; font-weight:bold">done</span>
<span style="color:#000000; font-weight:bold">else</span>
  <span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">[ -</span>z <span style="color:#ff0000">&quot;$(which nohup 2&gt;/dev/null)&quot;</span> <span style="color:#000000">]</span>
  <span style="color:#000000; font-weight:bold">then</span>
    <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;Could not execute command &quot;</span>nohup<span style="color:#ff0000">&quot;, please install package &quot;</span>coreutils<span style="color:#ff0000">&quot; or $COMPLAIN&quot;</span>
    <span style="color:#830000">exit</span> <span style="color:#2928ff">1</span>
  <span style="color:#000000; font-weight:bold">fi</span>
  nohup <span style="color:#ff0000">&quot;$SELF&quot;</span> <span style="color:#000000">-</span>d <span style="color:#000000">&gt;/</span>dev<span style="color:#000000">/</span>null <span style="color:#000000">&lt;/</span>dev<span style="color:#000000">/</span>null <span style="color:#2928ff">2</span><span style="color:#000000">&gt;/</span>dev<span style="color:#000000">/</span>null <span style="color:#000000">&amp;</span>
  <span style="color:#830000">echo</span> <span style="color:#ff0000">&quot;OK, low-power-beeper is now running in background&quot;</span>
<span style="color:#000000; font-weight:bold">fi</span>

<span style="color:#830000">exit</span> <span style="color:#2928ff">0</span>

begin<span style="color:#000000">-</span>base64 <span style="color:#2928ff">644</span> a.sh
UklGRq4PAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YYoPAACA
gIGBgYKBgoFwZ3SCsOPDd0EuO05cleDZjlhSXFtbkNnQh1RSXF1lpO7ag0ZC
UFNdoOnXg0hGVVZdm97Ngk9QX11ko<span style="color:#000000">+</span>HIfExNW1tlp<span style="color:#000000">+</span>HFekxQXVxlp9<span style="color:#000000">/</span>AdUxR
X11pq<span style="color:#000000">+</span>C9c0xTXlxqrd66cE1VYF1ssOC3bklNWVhsvO66ZT9JWFhvwvO9Z0RS
Xllut<span style="color:#000000">+</span>K0bFBcYlpvttemYEdUXlt1vdunZE1ZYl55wdynZlFdZF96wdmhYU9a
YFx5wNScXU1bYFx8yNydWUVRWlmE2<span style="color:#000000">+</span>ygU0FSWlmF2<span style="color:#000000">+</span>qfVEhbX1qBydaYW1Fg
YVyEx8uLUkpbYGCN0NCPWFFgZGOQ0s6NWVRiZGOR0MiFU1FfX2CQzsSBUlJg
YGKa3Ml8SEhZXGSn8dd<span style="color:#000000">/</span>RkZWV16j69J8SFBgXGKc18N7UVdjXmWg1LhyS1Jh
X2up2rp1UFdkYm2r2bdzUllkYW6r1bBtTlhiX26s06tpT1lkYHK846xeP0xb
W3bL9rhhQE1YVXDE7LFgR1pkXHS52adjTl1iXHi80p1dSlliYH7D1Z5gT15l
YoDE05tfUV9lYoHDz5RaUF5iYILDy5BZUF5iYIvW14tKQVNdX5Tn5pRORFVZ
WY7c241PTmJiYI3OyodTUmFgYZLOwoBQUGBiZ5rUxIJVVWNkaZzTwH5UV2Nj
aJ3RunhRVWFgaJ7QtnVRVWBga6<span style="color:#000000">/</span>mvWo<span style="color:#000000">/</span>RVdabLr2ynFES1lWZ7HnvWxKWmZf
bavVr2pMWGJdb7DTqWdMV2NhdrfXqWlRXGdkebnUpWZRXWVheLjQnmFPXGJf
ebrOm2BPWWBfgdDgmlI<span style="color:#000000">/</span>T1tdh9ztolZFVVtYgdDcmFZPYmRfhMXLjlVOXmBf
icnIilVQX2Rlkc<span style="color:#000000">/</span>Ki1lVY2Znk87FhldVYWJlk8u<span style="color:#000000">/</span>f1NUYGBkls6<span style="color:#000000">/</span>flNRXF5m
pujJdkJDVVpmrvPUfEhMWlhipd<span style="color:#000000">/</span>Cdk5aZmBoo9KzbktUYF1sqtSwbk5XY2Jy
sdewcFNcZ2R0stWqa1FbY2BzsdCjZU9aYl51ttOjZU5VXV18zOalWUBOWluA
<span style="color:#2928ff">1</span>e<span style="color:#000000">+</span>qXEdWXVl8x9ueXVFiZF5<span style="color:#000000">/</span>wMuRV0xcYGCGx8yRWlBfZWWNzM2QXVZkZ2aP
zMiKWFRhYmOOycKDVVNgYWOT0MSDU05ZXGOj6dF9RkVWWmSo79aASk5dW2Kf
<span style="color:#2928ff">2</span>sN7UlpmX2afz7NwS1NgXmyp1bRyUFhkY3Kv17NzVV1nZXSw1KxsUVpjX3Kv
z6VnUFpiX3S31qZmTFJcXHvN6qlcQk9aWn7S7atdR1deWnvD2J9gUmJkXn6<span style="color:#000000">/</span>
yZFXTFthYYfHzZJcUmBlZY3MzJFeVmRnZ4<span style="color:#000000">/</span>Lx4lYVGBiY47IwYNVU2BhY5bU
xoJQS1ZaY6Xr039IR1daZKnu035KT15bZJ<span style="color:#000000">/</span>XwHtTWmVeZ6HOsG5LU2BfbqzW
s3FRWWVjc7HXsHFVXWdkdbLTqWpRWmJfc7HOomVQWmJfd73ZpGFIUFpbf9Lr
qFxEUVtagdTppVpIWV9bfsTTm19TYWJegsHGjFVMXGFijcvLj1tUYWVmkc7J
jFtXY2Vnk83Cg1ZUYGBjk8q9flRVYGBlndrEe0tIVVllre<span style="color:#000000">/</span>Pe0hKWVlmru3K
dklSYFxnpda5dVJbY11qp86qaUpUYV9zs9eublJbZmN3t9apa1ReZmJ4t9Gh
ZFBbYV54t8ybYVFcYV5<span style="color:#000000">+</span>x9mcWkVQWVuH2<span style="color:#000000">+</span>mgWEZUW1uI2eKZVEpdYF2GyM6R
WlRhYF<span style="color:#000000">+</span>Kx8GEUk5eYWWW0caHWFZjZWia0sKDWFhkZGibz7t6U1VhX2aczbZ3
U1ZgXmmr4LxwRkhWWGy788ZxR05bWGy46rxrSVdiXG2u1a1rUFthW3GyzqBi
S1dhYHy<span style="color:#000000">+</span><span style="color:#2928ff">1</span>aNnU19mZIDA0p5kVF9lYYDAzJVdUV1gX4G<span style="color:#000000">/</span>yJFdUlxgX4vT1Y9R
RFJZXpXl4ZJRSFhbXZTf1olOTmFgYJLOxINUVWFeYpfNuXlPUmBha6PVvHxV
WWVkbqfVt3dVWmRhbafRr29RWGFebanPq21SV19ccr3jrmJCSldYd8zytmRH
U1xYdsXkqmBLXWNdebvQnV9OW2Bcfb<span style="color:#000000">/</span>LlFtNXGJiiMnPlV9VYmZljMvLj1xU
YWNijMjDhlZSX19hj8nBhFdTXV5jnuDKfUlGVFlkqu<span style="color:#000000">/</span>UgExNW1ljpuPFdktW
ZF5oo9K1ck5WYVxrqdGsbE5XYmB0tNatblRdZ2N3t9SnalNdZGB3t86eY1Bb
YV55uc6cY1FZXlyC0d<span style="color:#000000">+</span>aVEFOWFqK3<span style="color:#000000">+</span>qfV0lYXFqH09mTVlBiYl6Ix8eJVE9d
Xl<span style="color:#000000">+</span>Py8KEVFFgYmea08SEWVhlZWqd0r59VldiYGedzrV1UVZgXmii0LR1U1Rd
W2y25rhqQ0lXWHDB8b9sSFJbV2<span style="color:#000000">+</span><span style="color:#2928ff">64</span>a9mTV1kXXO10KBhTFlfW3m8z5tgTltj
YYPF0ZpiVWFmZIbGzZNeU19iYIfExYtYUl5gX4vJxolZUFlbX5ni0oJJQ1NY
YKLs2YZOTlxaYJzbxnxQV2ReZJ3PtnRNUl9caKXSs3JQV2NhcK<span style="color:#000000">/</span>XsnNVXGZj
c7HTq2xSWmJecrHOomZQWmFddbfRomVPVlxbfs<span style="color:#000000">/</span>koVhCT1lZhNnrpFpIV1tY
gszWllpSYmJdhsXGiVROXF5fj8zFh1ZSYGJml9HFhlpYZGRom9G<span style="color:#000000">+</span>flVWYWBm
m822d1JWYV5notO3dlFQWllqt<span style="color:#000000">+</span>u9bENJV1huvvDBb0tVX1lts9uvaU9cY1xy
s8<span style="color:#000000">+</span>hYktXX1x5vNGgZFFdZWKBw9KdZFVhZmOExM2VXlJeYV<span style="color:#000000">+</span>EwsaNWlJfYWCL
y8qMWE5XW1<span style="color:#000000">+</span>Y49eHTEVVWV<span style="color:#000000">+</span>f6tmHTU1cWl<span style="color:#000000">+</span>b2MV<span style="color:#000000">/</span>VFllX2SdzrVzTVJfXWqo
<span style="color:#2928ff">1L</span>RzUlhjYXCv<span style="color:#2928ff">1</span>rFyVV<span style="color:#2928ff">1</span>mY<span style="color:#2928ff">3</span>Sy<span style="color:#2928ff">06l</span>rUlpiXnOyzqFlUFpiXXe<span style="color:#2928ff">81</span>aFiS<span style="color:#2928ff">1</span>JaWYDU
<span style="color:#2928ff">6</span>KJYQ1BaWoTX6KNcTVteWoHH0ZVbUmBhXYbFxYlUTVxfYZDNx4lZVWJkZ5fS
xYZaWGRkZ5rQvX1UVWFfZZvNtndTV2JfaKXYuXVOT1lZa7jtwG5FTFlYbb7v
vmtIVF5ZbrTZrmtSXmRcc7TNnWBLWGBefMDSnmNRXWRig8XRmmNVYWZjhsXL
kVxSXmFfh8TEillTX2Bgj9LLh1NJVFhfnunYhUtIV1phoOfVhVBSX1xhmtO<span style="color:#000000">/</span>
fFJXYl1ln8<span style="color:#000000">+</span>zck1TYF5sqta1dFRaZWNysNawcVVcZWFzstKnaVFaYV1zss2g
ZVFbYl55wdmhX0hQWVmC1umjWkVSWlmF2OWdV0laXluEyNCUXFViYF6JxsKF
U05dX2OV0caGWFViZGib0sKCWmh6bmVugI6Jh5SUh4B<span style="color:#000000">/</span>e3Zzcnh<span style="color:#000000">+</span>gISHg316
eHl8fHt9fn1<span style="color:#000000">/</span>g4eLi4iGhYB9foGCgYGBgH16e318e3p5eHd4e4CCg4ODgoGB
goSFhYWEgoGBgoKBgH59fHt8fH1<span style="color:#000000">+</span>fXx8e3x9foCBgYGBgIB<span style="color:#000000">/</span>f4CAgICBgoKC
goODgYB<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>f4GCgoGAf317e3x8fHx8fX1<span style="color:#000000">+</span>f4CBgYKCgYGBgoOEhIOCgYB<span style="color:#000000">/</span>
f4CAgIB<span style="color:#000000">+</span>fXx8fH1<span style="color:#000000">+</span>f359fX1<span style="color:#000000">+</span>f4CAgoKBf39<span style="color:#000000">/</span>gIGBgoKBf3<span style="color:#000000">+</span>AgICAgIB<span style="color:#000000">/</span>fXx9
fn<span style="color:#000000">+</span>AgYKAfn1<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>f4B<span style="color:#000000">/</span>fn5<span style="color:#000000">/</span>gICAgoKBf39<span style="color:#000000">/</span>gICAgYGAfn5<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgIB<span style="color:#000000">/</span>fn5<span style="color:#000000">+</span>
f39<span style="color:#000000">/</span>gIB<span style="color:#000000">/</span>fn5<span style="color:#000000">/</span>gICBgoF<span style="color:#000000">/</span>fX19fX5<span style="color:#000000">/</span>gYGAgIGBgYGBgYF<span style="color:#000000">/</span>foCCg4KCgoF<span style="color:#000000">+</span>fHt7
fHt8fn59fX5<span style="color:#000000">/</span>gICBgoKBgIGCg4KDg4OBgICAgH9<span style="color:#000000">/</span>f399fX1<span style="color:#000000">+</span>fX1<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn<span style="color:#000000">+</span>A
gICBgYGAgICAgICBgYGAgIGBgH9<span style="color:#000000">/</span>f35<span style="color:#000000">+</span>foCAgICAgH9<span style="color:#000000">+</span>fn9<span style="color:#000000">/</span>fn5<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f4CB
gICAgYB<span style="color:#000000">/</span>gIGBgICAgIB<span style="color:#000000">/</span>f4CAf39<span style="color:#000000">/</span>f39<span style="color:#000000">+</span>f39<span style="color:#000000">/</span>f35<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gIGBgICAf359fX5<span style="color:#000000">+</span>
fn<span style="color:#000000">+</span>AgYGBgoKBgH<span style="color:#000000">+</span>AgICBgoOCgYB<span style="color:#000000">/</span>fn18fHx8fH1<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>f4CAgICBgYGBgoKC
goKCgYGAgIB<span style="color:#000000">/</span>fn5<span style="color:#000000">+</span>fn19fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>gICBgYGBgYCAgICAgICBgYCAgIB<span style="color:#000000">/</span>
f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAf39<span style="color:#000000">/</span>fn5<span style="color:#000000">+</span>f39<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgICAgICAgICAgICAgICAgICAgIB<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>
fn9<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICBgYGAf39<span style="color:#000000">+</span>fn1<span style="color:#000000">+</span>fn9<span style="color:#000000">/</span>gIGBgYGBgYB<span style="color:#000000">/</span>f4CBgoKCgoF<span style="color:#000000">/</span>
fn19fHx9fX19fn5<span style="color:#000000">/</span>f4CAgICAgYGBgoKCgoKBgYGBgIB<span style="color:#000000">/</span>f39<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>
fn9<span style="color:#000000">/</span>f4CAgYGAgICAgICAgICAgIGAgICAf39<span style="color:#000000">+</span>f3<span style="color:#000000">+</span>AgICAgH9<span style="color:#000000">/</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>
gICAgICAgICAgICAgICAgICAgIB<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f4CAgIGBgIB<span style="color:#000000">/</span>
fn59fn5<span style="color:#000000">/</span>gICBgYGBgYCAgICBgoKCgYGAf359fXx8fX5<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAgIGB
gYKBgoKCgYGBgIB<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>f4CAgIGBgICAgICAgICAgICB
gYCAf39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAgIB<span style="color:#000000">/</span>f35<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>f3<span style="color:#000000">+</span>AgICAgICAgICAgICAgICAgICAgIB<span style="color:#000000">/</span>
f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgICBgYCAf35<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>f4CAgYGBgYCAgICAgYKC
gYGAf39<span style="color:#000000">+</span>fX19fX1<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAgIGBgYGCgoKCgYGBgICAf39<span style="color:#000000">/</span>f35<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>
fn5<span style="color:#000000">+</span>fn9<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgICBgICAgH9<span style="color:#000000">/</span>gICAgICBgYCAgH9<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAgH9<span style="color:#000000">/</span>f39<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>
f39<span style="color:#000000">/</span>gICAgICAgICAgICAgICAgICAgICAf39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgICB
gYCAf39<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>f3<span style="color:#000000">+</span>AgIGBgYGAgICAgYGCgoGBgH9<span style="color:#000000">+</span>fn19fX19fn5<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f4CA
gICBgYGBgYGBgYGBgYCAf39<span style="color:#000000">/</span>f35<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAgYCAgH9<span style="color:#000000">/</span>f4CA
gICBgYCAgIB<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAgIB<span style="color:#000000">/</span>f39<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn9<span style="color:#000000">/</span>f4CAgICAgICAgICAgICAgICA
gICAf39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAgYGAgH9<span style="color:#000000">/</span>fn5<span style="color:#000000">+</span>fn9<span style="color:#000000">/</span>gICBgYGAgICA
gIGCgoGBgH9<span style="color:#000000">/</span>fn19fX19fn5<span style="color:#000000">+</span>f39<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgICAgYGBgYGBgYGBgYCAgH9<span style="color:#000000">/</span>f35<span style="color:#000000">+</span>
fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>f39<span style="color:#000000">/</span>gICAgYCAgH9<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgICAgYGAgIB<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f4CAgIB<span style="color:#000000">/</span>f39<span style="color:#000000">+</span>
fn5<span style="color:#000000">+</span>fn9<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgICAgICAgICAgICAgICAgICAgH9<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>
f4CAgIGBgIB<span style="color:#000000">/</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>gICBgYGAgIB<span style="color:#000000">/</span>gIGBgoGBgYB<span style="color:#000000">/</span>fn59fX19fn5<span style="color:#000000">+</span>f39<span style="color:#000000">/</span>
f3<span style="color:#000000">+</span>AgICAgIGBgYGBgYGBgYCAgH9<span style="color:#000000">/</span>f39<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">+</span>f39<span style="color:#000000">/</span>f4CAgICAgIB<span style="color:#000000">/</span>
f39<span style="color:#000000">/</span>gICAgIGBgICAf39<span style="color:#000000">/</span>f4CAgICAf39<span style="color:#000000">/</span>fn5<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>gICAgICAgICAgICA
gICAgICAgH9<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f39<span style="color:#000000">/</span>f3<span style="color:#000000">+</span>AgIGBgIB<span style="color:#000000">/</span>f35<span style="color:#000000">+</span>fn5<span style="color:#000000">/</span>f4CAgYGB
gICAgICBgoKBgYB<span style="color:#000000">/</span>f35<span style="color:#000000">+</span>fX0<span style="color:#000000">=</span>
<span style="color:#000000">====</span>
</pre>
