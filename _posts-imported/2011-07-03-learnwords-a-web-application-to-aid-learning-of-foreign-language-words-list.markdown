---
layout: post
title: !binary |-
  bGVhcm53b3JkcyAtIGEgd2ViIGFwcGxpY2F0aW9uIHRvIGFpZCBsZWFybmlu
  ZyBvZiBmb3JlaWduIGxhbmd1YWdlIHdvcmRzJyBsaXN0
wordpress_id: 126
wordpress_url: !binary |-
  aHR0cDovL3Z5dGF1dGFzLmpha3V0aXMubmFtZS8/cD0xMjY=
date: 2011-07-03 14:49:49.000000000 +00:00
---
Save the script below as .php file and upload it to your php web server. Or use <a href="http://vytautas.jakutis.name/learnwords/">the official learnwords installation</a>.
<pre style="overflow: auto; color: #000000; background-color: khaki; font-size: 10pt; font-family: monospace;">
<span style="color:#000000">&lt;</span>?php

<span style="color:#000000; font-weight:bold">$l</span> <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">array</span><span style="color:#000000">();</span>
<span style="color:#000000; font-weight:bold">$l</span><span style="color:#000000">[</span><span style="color:#ff0000">'words'</span><span style="color:#000000">] =</span> <span style="color:#ff0000">'Words (lines of &quot;word - translation&quot;)'</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">$l</span><span style="color:#000000">[</span><span style="color:#ff0000">'next'</span><span style="color:#000000">] =</span> <span style="color:#ff0000">'Next'</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">$l</span><span style="color:#000000">[</span><span style="color:#ff0000">'reveal'</span><span style="color:#000000">] =</span> <span style="color:#ff0000">'Reveal'</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">$l</span><span style="color:#000000">[</span><span style="color:#ff0000">'learnwords'</span><span style="color:#000000">] =</span> <span style="color:#ff0000">'Learn words'</span><span style="color:#000000">;</span>

<span style="color:#000000; font-weight:bold">function</span> <span style="color:#010181">l</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$key</span><span style="color:#000000">) {</span>
  <span style="color:#000000; font-weight:bold">return</span> <span style="color:#010181">esc</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$GLOBALS</span><span style="color:#000000">[</span><span style="color:#ff0000">'l'</span><span style="color:#000000">][</span><span style="color:#000000; font-weight:bold">$key</span><span style="color:#000000">]);</span>
<span style="color:#000000">}</span>

<span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(!</span><span style="color:#000000; font-weight:bold">isset</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'words'</span><span style="color:#000000">])) {</span>
  <span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'words'</span><span style="color:#000000">] =</span> <span style="color:#ff0000">'labas - hello'</span><span style="color:#000000">.</span><span style="color:#ff0000">&quot;</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">.</span><span style="color:#ff0000">'pasaulis - world'</span><span style="color:#000000">;</span>
  <span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'next'</span><span style="color:#000000">] =</span> <span style="color:#ff0000">'Next'</span><span style="color:#000000">;</span>
<span style="color:#000000">}</span>
<span style="color:#000000; font-weight:bold">$lines</span> <span style="color:#000000">=</span> <span style="color:#010181">explode</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> <span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'words'</span><span style="color:#000000">]);</span>
<span style="color:#000000; font-weight:bold">$words</span> <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">array</span><span style="color:#000000">();</span>
<span style="color:#000000; font-weight:bold">foreach</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$lines</span> <span style="color:#000000; font-weight:bold">as</span> <span style="color:#000000; font-weight:bold">$line</span><span style="color:#000000">) {</span>
  <span style="color:#000000; font-weight:bold">$line</span> <span style="color:#000000">=</span> <span style="color:#010181">explode</span><span style="color:#000000">(</span><span style="color:#ff0000">'-'</span><span style="color:#000000">,</span> <span style="color:#000000; font-weight:bold">$line</span><span style="color:#000000">);</span>
  <span style="color:#000000; font-weight:bold">$words</span><span style="color:#000000">[</span><span style="color:#010181">trim</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$line</span><span style="color:#000000">[</span><span style="color:#2928ff">1</span><span style="color:#000000">])] =</span> <span style="color:#010181">trim</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$line</span><span style="color:#000000">[</span><span style="color:#2928ff">0</span><span style="color:#000000">]);</span>
<span style="color:#000000">}</span>

<span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">isset</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'word'</span><span style="color:#000000">])) {</span>
  <span style="color:#000000; font-weight:bold">$word</span> <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">$words</span><span style="color:#000000">[</span><span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'translation'</span><span style="color:#000000">]];</span>
  <span style="color:#000000; font-weight:bold">$translation</span> <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'translation'</span><span style="color:#000000">];</span>
<span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">else</span> <span style="color:#000000">{</span>
  <span style="color:#000000; font-weight:bold">unset</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$word</span><span style="color:#000000">);</span>
  <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">isset</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'next'</span><span style="color:#000000">])) {</span>
    <span style="color:#000000; font-weight:bold">$keys</span> <span style="color:#000000">=</span> <span style="color:#010181">array_keys</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$words</span><span style="color:#000000">);</span>
    <span style="color:#000000; font-weight:bold">$translation</span> <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">$keys</span><span style="color:#000000">[</span><span style="color:#010181">array_rand</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$keys</span><span style="color:#000000">)];</span>
  <span style="color:#000000">}</span>
<span style="color:#000000">}</span>

<span style="color:#000000; font-weight:bold">function</span> <span style="color:#010181">esc</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$str</span><span style="color:#000000">) {</span>
  <span style="color:#000000; font-weight:bold">return</span> <span style="color:#010181">htmlspecialchars</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$str</span><span style="color:#000000">);</span>
<span style="color:#000000">}</span>

?<span style="color:#000000">&gt;</span>
<span style="color:#000000">&lt;</span>html<span style="color:#000000">&gt;</span>
  <span style="color:#000000">&lt;</span>head<span style="color:#000000">&gt;</span>
    <span style="color:#000000">&lt;</span>title<span style="color:#000000">&gt;&lt;</span>?<span style="color:#000000">=</span><span style="color:#010181">l</span><span style="color:#000000">(</span><span style="color:#ff0000">'learnwords'</span><span style="color:#000000">)</span>?<span style="color:#000000">&gt;&lt;/</span>title<span style="color:#000000">&gt;</span>
    <span style="color:#000000">&lt;</span>meta http<span style="color:#000000">-</span>equiv<span style="color:#000000">=</span><span style="color:#ff0000">&quot;Content-Type&quot;</span> content<span style="color:#000000">=</span><span style="color:#ff0000">&quot;text/html; charset=utf-8&quot;</span> <span style="color:#000000">/&gt;</span> 
    <span style="color:#000000">&lt;</span>link href<span style="color:#000000">=</span><span style="color:#ff0000">'http://fonts.googleapis.com/css?family=Caudex&amp;v2'</span> rel<span style="color:#000000">=</span><span style="color:#ff0000">'stylesheet'</span> type<span style="color:#000000">=</span><span style="color:#ff0000">'text/css'</span><span style="color:#000000">&gt;</span>
    <span style="color:#000000">&lt;</span>style<span style="color:#000000">&gt;</span>
<span style="color:#000000">* {</span>
  font<span style="color:#000000">-</span>family<span style="color:#000000">:</span> <span style="color:#ff0000">'Caudex'</span><span style="color:#000000">,</span> serif<span style="color:#000000">;</span>
<span style="color:#000000">}</span>
textarea <span style="color:#000000">{</span>
  width<span style="color:#000000">:</span> <span style="color:#2928ff">100</span>%<span style="color:#000000">;</span>
<span style="color:#000000">}</span>
    <span style="color:#000000">&lt;/</span>style<span style="color:#000000">&gt;</span>
  <span style="color:#000000">&lt;/</span>head<span style="color:#000000">&gt;</span>
  <span style="color:#000000">&lt;</span>body<span style="color:#000000">&gt;</span>
    <span style="color:#000000">&lt;</span>p<span style="color:#000000">&gt;&lt;</span>?<span style="color:#000000">=</span><span style="color:#010181">esc</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$translation</span><span style="color:#000000">)</span>?<span style="color:#000000">&gt;&lt;/</span>p<span style="color:#000000">&gt;</span>
    <span style="color:#000000">&lt;</span>p<span style="color:#000000">&gt;&lt;</span>?<span style="color:#000000">=(</span><span style="color:#000000; font-weight:bold">isset</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$word</span><span style="color:#000000">)</span> ? <span style="color:#010181">esc</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$word</span><span style="color:#000000">) :</span> <span style="color:#ff0000">'&amp;nbsp;'</span><span style="color:#000000">)</span>?<span style="color:#000000">&gt;&lt;/</span>p<span style="color:#000000">&gt;</span>
    <span style="color:#000000">&lt;</span>form method<span style="color:#000000">=</span><span style="color:#ff0000">&quot;POST&quot;</span><span style="color:#000000">&gt;</span>
      <span style="color:#000000">&lt;</span>input type<span style="color:#000000">=</span><span style="color:#ff0000">&quot;hidden&quot;</span> value<span style="color:#000000">=</span><span style="color:#ff0000">&quot;&lt;?=esc($translation)?&gt;&quot;</span> name<span style="color:#000000">=</span><span style="color:#ff0000">&quot;translation&quot;</span> <span style="color:#000000">/&gt;</span>
      <span style="color:#000000">&lt;</span>input type<span style="color:#000000">=</span><span style="color:#ff0000">&quot;submit&quot;</span> value<span style="color:#000000">=</span><span style="color:#ff0000">&quot;&lt;?=l('next')?&gt;&quot;</span> name<span style="color:#000000">=</span><span style="color:#ff0000">&quot;next&quot;</span> <span style="color:#000000">/&gt;</span>
      <span style="color:#000000">&lt;</span>input type<span style="color:#000000">=</span><span style="color:#ff0000">&quot;submit&quot;</span> value<span style="color:#000000">=</span><span style="color:#ff0000">&quot;&lt;?=l('reveal')?&gt;&quot;</span> name<span style="color:#000000">=</span><span style="color:#ff0000">&quot;word&quot;</span> <span style="color:#000000">/&gt;</span>
      <span style="color:#000000">&lt;</span>br <span style="color:#000000">/&gt;</span>
      <span style="color:#000000">&lt;</span>label <span style="color:#000000; font-weight:bold">for</span><span style="color:#000000">=</span><span style="color:#ff0000">&quot;words&quot;</span><span style="color:#000000">&gt;&lt;</span>?<span style="color:#000000">=</span><span style="color:#010181">l</span><span style="color:#000000">(</span><span style="color:#ff0000">'words'</span><span style="color:#000000">)</span>?<span style="color:#000000">&gt;&lt;/</span>label<span style="color:#000000">&gt;</span>
      <span style="color:#000000">&lt;</span>br <span style="color:#000000">/&gt;</span>
      <span style="color:#000000">&lt;</span>textarea id<span style="color:#000000">=</span><span style="color:#ff0000">&quot;words&quot;</span> name<span style="color:#000000">=</span><span style="color:#ff0000">&quot;words&quot;</span> rows<span style="color:#000000">=</span><span style="color:#ff0000">&quot;3&quot;</span><span style="color:#000000">&gt;&lt;</span>?<span style="color:#000000">=</span><span style="color:#010181">esc</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">$_POST</span><span style="color:#000000">[</span><span style="color:#ff0000">'words'</span><span style="color:#000000">])</span>?<span style="color:#000000">&gt;&lt;/</span>textarea<span style="color:#000000">&gt;</span>
    <span style="color:#000000">&lt;/</span>form<span style="color:#000000">&gt;</span>
  <span style="color:#000000">&lt;/</span>body<span style="color:#000000">&gt;</span>
<span style="color:#000000">&lt;/</span>html<span style="color:#000000">&gt;</span>

</pre>
