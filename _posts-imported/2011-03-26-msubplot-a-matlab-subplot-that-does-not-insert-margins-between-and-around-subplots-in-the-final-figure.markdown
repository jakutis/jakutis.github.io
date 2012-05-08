---
layout: post
title: !binary |-
  bXN1YnBsb3QgLSBhIE1BVExBQiAnc3VicGxvdCcgdGhhdCBkb2VzIG5vdCBp
  bnNlcnQgbWFyZ2lucyBhcm91bmQgc3VicGxvdHMgaW4gdGhlIGZpbmFsIGZp
  Z3VyZQ==
wordpress_id: 49
wordpress_url: !binary |-
  aHR0cDovL3Z5dGF1dGFzLmpha3V0aXMubmFtZS8/cD00OQ==
date: 2011-03-26 22:16:11.000000000 +00:00
---
<pre style="overflow:auto;color:#000000; background-color:khaki; font-size:10pt; font-family:monospace;"><span style="color:#000000; font-weight:bold">function</span> <span style="color:#000000">[</span> h <span style="color:#000000">] =</span> msubplot<span style="color:#000000">(</span>m<span style="color:#000000">,</span> n<span style="color:#000000">,</span> p<span style="color:#000000">)</span>
    h <span style="color:#000000">=</span> <span style="color:#830000">subplot</span><span style="color:#000000">(</span>m<span style="color:#000000">,</span> n<span style="color:#000000">,</span> p<span style="color:#000000">);</span>
    hd <span style="color:#000000">=</span> <span style="color:#2928ff">1</span> <span style="color:#000000">/</span> n<span style="color:#000000">;</span>
    vd <span style="color:#000000">=</span> <span style="color:#2928ff">1</span> <span style="color:#000000">/</span> m<span style="color:#000000">;</span>
    minc <span style="color:#000000">=</span> n<span style="color:#000000">;</span>
    minr <span style="color:#000000">=</span> m<span style="color:#000000">;</span>
    maxc <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    maxr <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    <span style="color:#000000; font-weight:bold">for</span> i <span style="color:#000000">=</span> <span style="color:#2928ff">1</span><span style="color:#000000">:</span><span style="color:#830000">prod</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">size</span><span style="color:#000000">(</span>p<span style="color:#000000">))</span>
        col <span style="color:#000000">=</span> mod<span style="color:#000000">(</span>p<span style="color:#000000">(</span>i<span style="color:#000000">),</span> n<span style="color:#000000">);</span>
        <span style="color:#000000; font-weight:bold">if</span> col <span style="color:#000000">==</span> <span style="color:#2928ff">0</span>
            col <span style="color:#000000">=</span> n<span style="color:#000000">;</span>
        <span style="color:#000000; font-weight:bold">end</span>
        
        row <span style="color:#000000">= ((</span>p<span style="color:#000000">(</span>i<span style="color:#000000">) -</span> <span style="color:#2928ff">1</span> <span style="color:#000000">-</span> mod<span style="color:#000000">(</span>p<span style="color:#000000">(</span>i<span style="color:#000000">) -</span> <span style="color:#2928ff">1</span><span style="color:#000000">,</span> n<span style="color:#000000">)) /</span> n<span style="color:#000000">) +</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
        
        <span style="color:#000000; font-weight:bold">if</span> col <span style="color:#000000">&gt;</span> maxc
            maxc <span style="color:#000000">=</span> col<span style="color:#000000">;</span>
        <span style="color:#000000; font-weight:bold">end</span>
        
        <span style="color:#000000; font-weight:bold">if</span> row <span style="color:#000000">&gt;</span> maxr
            maxr <span style="color:#000000">=</span> row<span style="color:#000000">;</span>
        <span style="color:#000000; font-weight:bold">end</span>

        <span style="color:#000000; font-weight:bold">if</span> col <span style="color:#000000">&lt;</span> minc
            minc <span style="color:#000000">=</span> col<span style="color:#000000">;</span>
        <span style="color:#000000; font-weight:bold">end</span>

        <span style="color:#000000; font-weight:bold">if</span> row <span style="color:#000000">&lt;</span> minr
            minr <span style="color:#000000">=</span> row<span style="color:#000000">;</span>
        <span style="color:#000000; font-weight:bold">end</span>

    <span style="color:#000000; font-weight:bold">end</span>
    
    height <span style="color:#000000">=</span> maxr <span style="color:#000000">-</span> minr <span style="color:#000000">+</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    width <span style="color:#000000">=</span> maxc <span style="color:#000000">-</span> minc <span style="color:#000000">+</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>

    g <span style="color:#000000">=</span> <span style="color:#830000">get</span><span style="color:#000000">(</span>h<span style="color:#000000">,</span> 'OuterPosition'<span style="color:#000000">);</span>
    g<span style="color:#000000">(</span><span style="color:#2928ff">1</span><span style="color:#000000">) = (</span>minc <span style="color:#000000">-</span> <span style="color:#2928ff">1</span><span style="color:#000000">) *</span> hd<span style="color:#000000">;</span>
    g<span style="color:#000000">(</span><span style="color:#2928ff">2</span><span style="color:#000000">) = (</span>m <span style="color:#000000">-</span> maxr<span style="color:#000000">) *</span> vd<span style="color:#000000">;</span>
    g<span style="color:#000000">(</span><span style="color:#2928ff">3</span><span style="color:#000000">) =</span> width <span style="color:#000000">*</span> hd<span style="color:#000000">;</span>
    g<span style="color:#000000">(</span><span style="color:#2928ff">4</span><span style="color:#000000">) =</span> height <span style="color:#000000">*</span> vd<span style="color:#000000">;</span>
    <span style="color:#830000">set</span><span style="color:#000000">(</span>h<span style="color:#000000">,</span> 'OuterPosition'<span style="color:#000000">,</span> g<span style="color:#000000">);</span>

<span style="color:#000000; font-weight:bold">end</span>
</pre>
