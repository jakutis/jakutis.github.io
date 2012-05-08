---
layout: post
title: !binary |-
  bHogLSBhIEMgcHJvZ3JhbSB0byBjb21wcmVzcyB0ZXh0IGFuZCBnZW5lcmF0
  ZSBkZWNvbXByZXNzaW9uIHByb2dyYW0gY29udGFpbmluZyB0aGUgY29tcHJl
  c3NlZCB0ZXh0
wordpress_id: 64
wordpress_url: !binary |-
  aHR0cDovL3Z5dGF1dGFzLmpha3V0aXMubmFtZS8/cD02NA==
date: 2011-04-04 13:09:25.000000000 +00:00
---
Below is ANSI C program. After compilation, run it with two arguments - a path to an input text file and a path for the output program. Also, a file "mFunctione.c" (see bottom of this post) must be available. The input text file must contain no more than 400000 bytes, it must contain no more than 128 different bytes, no byte must be greater than 161 (decimal). The generated program will be in ANSI C language. Run it with no arguments and the bytes identical to that of the original text file will be fed into standart output.

<pre style="overflow:auto;color:#000000; background-color:khaki; font-size:10pt; font-family:monospace;">
<span style="color:#008200">#include</span> <span style="color:#818100">&quot;stdio.h&quot;</span><span style="color:#008200"></span>
<span style="color:#008200">#include</span> <span style="color:#818100">&quot;stdlib.h&quot;</span><span style="color:#008200"></span>
<span style="color:#008200">#include</span> <span style="color:#818100">&quot;string.h&quot;</span><span style="color:#008200"></span>

<span style="color:#008200">#define MAX_BLOCKS 400000</span>
<span style="color:#008200">#define MAX_LETTERS 32</span>
<span style="color:#008200">#define MAX_OFFSET 262143</span>

<span style="color:#830000">int</span> <span style="color:#010181">findSubstr</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">**</span> b<span style="color:#000000">,</span> <span style="color:#830000">int</span> n<span style="color:#000000">,</span> <span style="color:#830000">char</span><span style="color:#000000">*</span> w<span style="color:#000000">,</span> <span style="color:#830000">int</span> m<span style="color:#000000">) {</span>
    <span style="color:#830000">int</span> i<span style="color:#000000">,</span> j<span style="color:#000000">,</span> bi<span style="color:#000000">,</span> bj<span style="color:#000000">,</span> k<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> fpos<span style="color:#000000">;</span>
    fpos <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    k <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    i <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    j <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    <span style="color:#000000; font-weight:bold">while</span><span style="color:#000000">(</span><span style="color:#2928ff">1</span><span style="color:#000000">) {</span>
        <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">==</span> n<span style="color:#000000">) {</span>
            <span style="color:#000000; font-weight:bold">break</span><span style="color:#000000">;</span>
        <span style="color:#000000">}</span>
        <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(!</span>b<span style="color:#000000">[</span>i<span style="color:#000000">][</span>j<span style="color:#000000">]) {</span>
            i <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
            j <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
        <span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">else</span> <span style="color:#000000">{</span>
<span style="color:#008200">#ifdef D_COMP</span>
            <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;compare %c and %c</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> b<span style="color:#000000">[</span>i<span style="color:#000000">][</span>j<span style="color:#000000">],</span> w<span style="color:#000000">[</span>k<span style="color:#000000">]);</span>
<span style="color:#008200">#endif</span>
            <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>b<span style="color:#000000">[</span>i<span style="color:#000000">][</span>j<span style="color:#000000">] ==</span> w<span style="color:#000000">[</span>k<span style="color:#000000">]) {</span>
                 <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>k <span style="color:#000000">==</span> <span style="color:#2928ff">0</span><span style="color:#000000">) {</span>
                     bi <span style="color:#000000">=</span> i<span style="color:#000000">;</span>
                     bj <span style="color:#000000">=</span> j<span style="color:#000000">;</span>
                 <span style="color:#000000">}</span>
                 k <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                 <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>k <span style="color:#000000">==</span> m<span style="color:#000000">) {</span>
                     fpos <span style="color:#000000">=</span> fpos <span style="color:#000000">-</span> m <span style="color:#000000">+</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                     <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>fpos <span style="color:#000000">&gt;</span> MAX_OFFSET<span style="color:#000000">) {</span>
                         <span style="color:#000000; font-weight:bold">return</span> <span style="color:#000000">-</span><span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                     <span style="color:#000000">}</span>
                     <span style="color:#000000; font-weight:bold">return</span> fpos<span style="color:#000000">;</span>
                 <span style="color:#000000">}</span>
                 fpos <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                 j <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
            <span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">else</span> <span style="color:#000000">{</span>
                fpos <span style="color:#000000">=</span> fpos <span style="color:#000000">-</span> k <span style="color:#000000">+</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>k <span style="color:#000000">&gt;</span> <span style="color:#2928ff">0</span><span style="color:#000000">) {</span>
                    i <span style="color:#000000">=</span> bi<span style="color:#000000">;</span>
                    j <span style="color:#000000">=</span> bj <span style="color:#000000">+</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                <span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">else</span> <span style="color:#000000">{</span>
                    j <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                <span style="color:#000000">}</span>
                k <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
            <span style="color:#000000">}</span>
        <span style="color:#000000">}</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">return</span> <span style="color:#000000">-</span><span style="color:#2928ff">1</span><span style="color:#000000">;</span>
<span style="color:#000000">}</span>

<span style="color:#838183; font-style:italic">/* ANSI C does not welcome these bytes in her strings: 0, 10, 13, 34, 37, 92 */</span>
<span style="color:#838183; font-style:italic">/* Also, do not pass 255, as it is our special value */</span>
<span style="color:#830000">int</span> <span style="color:#010181">tr</span><span style="color:#000000">(</span><span style="color:#830000">int</span> i<span style="color:#000000">) {</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&lt;</span> <span style="color:#2928ff">0</span> <span style="color:#000000">||</span> i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">247</span><span style="color:#000000">) {</span>
        <span style="color:#010181">abort</span><span style="color:#000000">();</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;=</span> <span style="color:#2928ff">0</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;=</span> <span style="color:#2928ff">10</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;=</span> <span style="color:#2928ff">13</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;=</span> <span style="color:#2928ff">34</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;=</span> <span style="color:#2928ff">37</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;=</span> <span style="color:#2928ff">92</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">return</span> i<span style="color:#000000">;</span>
<span style="color:#000000">}</span>

<span style="color:#838183; font-style:italic">/* o has 18 bits, l has 5 bits */</span>
<span style="color:#830000">void</span> <span style="color:#010181">encode</span><span style="color:#000000">(</span><span style="color:#830000">int</span> o<span style="color:#000000">,</span> <span style="color:#830000">int</span> l<span style="color:#000000">,</span> <span style="color:#830000">int</span><span style="color:#000000">*</span> a<span style="color:#000000">,</span> <span style="color:#830000">int</span><span style="color:#000000">*</span> b<span style="color:#000000">,</span> <span style="color:#830000">int</span><span style="color:#000000">*</span> c<span style="color:#000000">) {</span>
    o <span style="color:#000000">+= (</span>l <span style="color:#000000">&lt;&lt;</span> <span style="color:#2928ff">18</span><span style="color:#000000">);</span>
    <span style="color:#000000">(*</span>c<span style="color:#000000">) =</span> o<span style="color:#000000">%</span><span style="color:#2928ff">248</span><span style="color:#000000">;</span>
    <span style="color:#000000">(*</span>b<span style="color:#000000">) = ((</span>o<span style="color:#000000">-(*</span>c<span style="color:#000000">))/</span><span style="color:#2928ff">248</span><span style="color:#000000">)%</span><span style="color:#2928ff">248</span><span style="color:#000000">;</span>
    <span style="color:#000000">(*</span>a<span style="color:#000000">) = (</span>o<span style="color:#000000">-</span><span style="color:#2928ff">248</span><span style="color:#000000">*(*</span>b<span style="color:#000000">)-(*</span>c<span style="color:#000000">))/(</span><span style="color:#2928ff">248</span><span style="color:#000000">*</span><span style="color:#2928ff">248</span><span style="color:#000000">);</span>
<span style="color:#000000">}</span>

<span style="color:#830000">void</span> <span style="color:#010181">write</span><span style="color:#000000">(</span><span style="color:#830000">FILE</span><span style="color:#000000">*</span> f<span style="color:#000000">,</span> <span style="color:#830000">int</span> o<span style="color:#000000">,</span> <span style="color:#830000">int</span> l<span style="color:#000000">) {</span>
    <span style="color:#830000">int</span> a<span style="color:#000000">,</span> b<span style="color:#000000">,</span> c<span style="color:#000000">;</span>
    <span style="color:#010181">encode</span><span style="color:#000000">(</span>o<span style="color:#000000">,</span> l<span style="color:#000000">, &amp;</span>a<span style="color:#000000">, &amp;</span>b<span style="color:#000000">, &amp;</span>c<span style="color:#000000">);</span>
    <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>f<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;%c%c%c&quot;</span><span style="color:#000000">,</span> <span style="color:#010181">tr</span><span style="color:#000000">(</span>a<span style="color:#000000">),</span> <span style="color:#010181">tr</span><span style="color:#000000">(</span>b<span style="color:#000000">),</span> <span style="color:#010181">tr</span><span style="color:#000000">(</span>c<span style="color:#000000">));</span>
<span style="color:#000000">}</span>

<span style="color:#830000">int</span> <span style="color:#010181">main</span><span style="color:#000000">(</span><span style="color:#830000">int</span> argc<span style="color:#000000">,</span> <span style="color:#830000">char</span><span style="color:#000000">**</span> argv<span style="color:#000000">) {</span>
    <span style="color:#830000">FILE</span><span style="color:#000000">*</span> f<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> i<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> j<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> k<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> q<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> fpos<span style="color:#000000">,</span> pfpos<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> iterations<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> c<span style="color:#000000">;</span>
    <span style="color:#830000">int</span><span style="color:#000000">*</span> o<span style="color:#000000">;</span>
    <span style="color:#830000">int</span><span style="color:#000000">*</span> l<span style="color:#000000">;</span>
    <span style="color:#830000">char</span><span style="color:#000000">**</span> b<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> n<span style="color:#000000">;</span>
    <span style="color:#830000">char</span><span style="color:#000000">*</span> w<span style="color:#000000">;</span>
    <span style="color:#830000">int</span> m<span style="color:#000000">;</span>
 
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>argc <span style="color:#000000">&lt;</span> <span style="color:#2928ff">2</span><span style="color:#000000">) {</span>
        <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;Usage: lz &lt;infile&gt; &lt;outfile&gt;</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">);</span>
        <span style="color:#000000; font-weight:bold">return</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    f <span style="color:#000000">=</span> <span style="color:#010181">fopen</span><span style="color:#000000">(</span>argv<span style="color:#000000">[</span><span style="color:#2928ff">1</span><span style="color:#000000">],</span> <span style="color:#ff0000">&quot;rb&quot;</span><span style="color:#000000">);</span>
<span style="color:#008200">#ifdef D_INFO</span>
    <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;reading %s file</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> argv<span style="color:#000000">[</span><span style="color:#2928ff">1</span><span style="color:#000000">]);</span>
<span style="color:#008200">#endif</span>
    o <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span>MAX_BLOCKS <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">int</span><span style="color:#000000">));</span>
    l <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span>MAX_BLOCKS <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">int</span><span style="color:#000000">));</span>
    b <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span>MAX_BLOCKS <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">*));</span>
    n <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    w <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span>MAX_LETTERS <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">));</span>
    m <span style="color:#000000">=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    w<span style="color:#000000">[</span><span style="color:#2928ff">0</span><span style="color:#000000">] =</span> <span style="color:#010181">fgetc</span><span style="color:#000000">(</span>f<span style="color:#000000">);</span>
    iterations <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    q <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    <span style="color:#000000; font-weight:bold">while</span><span style="color:#000000">(</span><span style="color:#2928ff">1</span><span style="color:#000000">) {</span>
            iterations <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
            <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>iterations <span style="color:#000000">%</span> <span style="color:#2928ff">1000</span> <span style="color:#000000">==</span> <span style="color:#2928ff">0</span><span style="color:#000000">) {</span>
                <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;%d iterations done with %d blocks</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> iterations<span style="color:#000000">,</span> n<span style="color:#000000">);</span>
            <span style="color:#000000">}</span>
            <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>w<span style="color:#000000">[</span>m <span style="color:#000000">-</span> <span style="color:#2928ff">1</span><span style="color:#000000">] ==</span> EOF<span style="color:#000000">) {</span>
                m <span style="color:#000000">-=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                q <span style="color:#000000">=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>m <span style="color:#000000">==</span> <span style="color:#2928ff">0</span><span style="color:#000000">) {</span>
                    <span style="color:#000000; font-weight:bold">break</span><span style="color:#000000">;</span>
                <span style="color:#000000">}</span>
            <span style="color:#000000">}</span>
            pfpos <span style="color:#000000">=</span> fpos<span style="color:#000000">;</span>
            fpos <span style="color:#000000">=</span> <span style="color:#010181">findSubstr</span><span style="color:#000000">(</span>b<span style="color:#000000">,</span> n<span style="color:#000000">,</span> w<span style="color:#000000">,</span> m<span style="color:#000000">);</span>
<span style="color:#008200">#ifdef D_CURR</span>
            w<span style="color:#000000">[</span>m<span style="color:#000000">] =</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
            <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;%d: %s</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> m<span style="color:#000000">,</span> w<span style="color:#000000">);</span>
<span style="color:#008200">#endif</span>
            <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>fpos <span style="color:#000000">&lt;</span> <span style="color:#2928ff">0</span><span style="color:#000000">) {</span>
                <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>m <span style="color:#000000">==</span> <span style="color:#2928ff">1</span><span style="color:#000000">) {</span>
                    o<span style="color:#000000">[</span>n<span style="color:#000000">] = -</span><span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                    l<span style="color:#000000">[</span>n<span style="color:#000000">] = -</span><span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                    b<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> w<span style="color:#000000">;</span>
                    w<span style="color:#000000">[</span>m<span style="color:#000000">] =</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
                    n <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
<span style="color:#008200">#ifdef D_INS</span>
                    <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;inserted char %s</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> w<span style="color:#000000">);</span>
<span style="color:#008200">#endif</span>
                    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>q<span style="color:#000000">) {</span>
                        <span style="color:#000000; font-weight:bold">break</span><span style="color:#000000">;</span>
                    <span style="color:#000000">}</span>
                    w <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span>MAX_LETTERS <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">));</span>
                    w<span style="color:#000000">[</span><span style="color:#2928ff">0</span><span style="color:#000000">] =</span> <span style="color:#010181">fgetc</span><span style="color:#000000">(</span>f<span style="color:#000000">);</span>
                    m <span style="color:#000000">=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                <span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">else</span> <span style="color:#000000">{</span>
                    o<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> pfpos<span style="color:#000000">;</span>
                    l<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> m <span style="color:#000000">-</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                    b<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> w<span style="color:#000000">;</span>
                    c <span style="color:#000000">=</span> w<span style="color:#000000">[</span>m <span style="color:#000000">-</span> <span style="color:#2928ff">1</span><span style="color:#000000">];</span>
                    w<span style="color:#000000">[</span>m <span style="color:#000000">-</span> <span style="color:#2928ff">1</span><span style="color:#000000">] =</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
                    n <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
<span style="color:#008200">#ifdef D_INS</span>
                    <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;inserted block %s</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> w<span style="color:#000000">);</span>
<span style="color:#008200">#endif</span>
                    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>q<span style="color:#000000">) {</span>
                        <span style="color:#000000; font-weight:bold">break</span><span style="color:#000000">;</span>
                    <span style="color:#000000">}</span>
                    w <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span>MAX_LETTERS <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">));</span>
                    w<span style="color:#000000">[</span><span style="color:#2928ff">0</span><span style="color:#000000">] =</span> c<span style="color:#000000">;</span>
                    m <span style="color:#000000">=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                <span style="color:#000000">}</span>
            <span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">else</span> <span style="color:#000000">{</span>
                <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>m <span style="color:#000000">+</span> <span style="color:#2928ff">1</span> <span style="color:#000000">==</span> MAX_LETTERS<span style="color:#000000">) {</span>
                    o<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> fpos<span style="color:#000000">;</span>
                    l<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> m<span style="color:#000000">;</span>
                    b<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> w<span style="color:#000000">;</span>
                    w<span style="color:#000000">[</span>m<span style="color:#000000">] =</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
                    n <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                    <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;max %s</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> w<span style="color:#000000">);</span>
<span style="color:#008200">#ifdef D_INS</span>
                    <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;inserted block %s</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> w<span style="color:#000000">);</span>
<span style="color:#008200">#endif</span>
                    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>q<span style="color:#000000">) {</span>
                        <span style="color:#000000; font-weight:bold">break</span><span style="color:#000000">;</span>
                    <span style="color:#000000">}</span>
                    w <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span>MAX_LETTERS <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">));</span>
                    w<span style="color:#000000">[</span><span style="color:#2928ff">0</span><span style="color:#000000">] =</span> <span style="color:#010181">fgetc</span><span style="color:#000000">(</span>f<span style="color:#000000">);</span>
                    m <span style="color:#000000">=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                <span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">else</span> <span style="color:#000000">{</span>
                    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>q<span style="color:#000000">) {</span>
                        o<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> fpos<span style="color:#000000">;</span>
                        l<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> m<span style="color:#000000">;</span>
                        b<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> w<span style="color:#000000">;</span>
                        w<span style="color:#000000">[</span>m<span style="color:#000000">] =</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
                        n <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
<span style="color:#008200">#ifdef D_INS</span>
                        <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;inserted block %s</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> w<span style="color:#000000">);</span>
<span style="color:#008200">#endif</span>
                        <span style="color:#000000; font-weight:bold">break</span><span style="color:#000000">;</span>
                    <span style="color:#000000">}</span>
                    w<span style="color:#000000">[</span>m<span style="color:#000000">] =</span> <span style="color:#010181">fgetc</span><span style="color:#000000">(</span>f<span style="color:#000000">);</span>
                    m <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
                <span style="color:#000000">}</span>
            <span style="color:#000000">}</span>
    <span style="color:#000000">}</span>
    <span style="color:#010181">fclose</span><span style="color:#000000">(</span>f<span style="color:#000000">);</span>
<span style="color:#008200">#ifdef D_INFO</span>
    <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;last block is at %d with %d chars (%s)</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> o<span style="color:#000000">[</span>n <span style="color:#000000">-</span> <span style="color:#2928ff">1</span><span style="color:#000000">],</span> l<span style="color:#000000">[</span>n <span style="color:#000000">-</span> <span style="color:#2928ff">1</span><span style="color:#000000">],</span> b<span style="color:#000000">[</span>n <span style="color:#000000">-</span> <span style="color:#2928ff">1</span><span style="color:#000000">]);</span>
    <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;last %d char is: %d</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> m<span style="color:#000000">, (</span><span style="color:#830000">unsigned char</span><span style="color:#000000">)</span>w<span style="color:#000000">[</span>m<span style="color:#000000">-</span><span style="color:#2928ff">1</span><span style="color:#000000">]);</span>
<span style="color:#008200">#endif</span>
    f <span style="color:#000000">=</span> <span style="color:#010181">fopen</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;mFunctione.c&quot;</span><span style="color:#000000">,</span> <span style="color:#ff0000">&quot;rb&quot;</span><span style="color:#000000">);</span>
    <span style="color:#830000">char</span><span style="color:#000000">*</span> mFunction<span style="color:#000000">;</span>
    mFunction <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span><span style="color:#2928ff">30000</span> <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">));</span>
    m <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    <span style="color:#000000; font-weight:bold">while</span><span style="color:#000000">((</span>j <span style="color:#000000">=</span> <span style="color:#010181">fgetc</span><span style="color:#000000">(</span>f<span style="color:#000000">)) !=</span> EOF<span style="color:#000000">) {</span>
        mFunction<span style="color:#000000">[</span>m<span style="color:#000000">] =</span> j<span style="color:#000000">;</span>
        m <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#010181">fclose</span><span style="color:#000000">(</span>f<span style="color:#000000">);</span>
    mFunction<span style="color:#000000">[</span>m<span style="color:#000000">] =</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    f <span style="color:#000000">=</span> <span style="color:#010181">fopen</span><span style="color:#000000">(</span>argv<span style="color:#000000">[</span><span style="color:#2928ff">2</span><span style="color:#000000">],</span> <span style="color:#ff0000">&quot;wb&quot;</span><span style="color:#000000">);</span>
    <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>f<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;#include</span> <span style="color:#ff00ff">\&quot;</span><span style="color:#ff0000">stdlib.h</span><span style="color:#ff00ff">\&quot;\n</span><span style="color:#ff0000">#include</span> <span style="color:#ff00ff">\&quot;</span><span style="color:#ff0000">stdio.h</span><span style="color:#ff00ff">\&quot;\n</span><span style="color:#ff0000">%sint main(){m(</span><span style="color:#ff00ff">\&quot;</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> mFunction<span style="color:#000000">);</span>
    <span style="color:#000000; font-weight:bold">for</span><span style="color:#000000">(</span>i <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span> i <span style="color:#000000">&lt;</span> n<span style="color:#000000">;</span> i<span style="color:#000000">++) {</span>
        <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>o<span style="color:#000000">[</span>i<span style="color:#000000">] &lt;</span> <span style="color:#2928ff">0</span><span style="color:#000000">) {</span>
            <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>f<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;%c%c&quot;</span><span style="color:#000000">,</span> <span style="color:#2928ff">255</span><span style="color:#000000">,</span> b<span style="color:#000000">[</span>i<span style="color:#000000">][</span><span style="color:#2928ff">0</span><span style="color:#000000">] +</span> <span style="color:#2928ff">93</span><span style="color:#000000">);</span>
            <span style="color:#000000; font-weight:bold">continue</span><span style="color:#000000">;</span>
        <span style="color:#000000">}</span>
<span style="color:#008200">#ifdef D_BLOCK</span>
        <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>stdout<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;%d - %d %d</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> i<span style="color:#000000">,</span> o<span style="color:#000000">[</span>i<span style="color:#000000">],</span> l<span style="color:#000000">[</span>i<span style="color:#000000">]);</span>
<span style="color:#008200">#endif</span>
        <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>o<span style="color:#000000">[</span>i<span style="color:#000000">] &gt;</span> MAX_OFFSET <span style="color:#000000">||</span> l<span style="color:#000000">[</span>i<span style="color:#000000">] &gt;</span> <span style="color:#2928ff">31</span><span style="color:#000000">) {</span>
            <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;fail block %d %d %d %s</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> i<span style="color:#000000">,</span> o<span style="color:#000000">[</span>i<span style="color:#000000">],</span> l<span style="color:#000000">[</span>i<span style="color:#000000">],</span> b<span style="color:#000000">[</span>i<span style="color:#000000">]);</span>
            <span style="color:#010181">abort</span><span style="color:#000000">();</span>
        <span style="color:#000000">}</span>
        <span style="color:#010181">write</span><span style="color:#000000">(</span>f<span style="color:#000000">,</span> o<span style="color:#000000">[</span>i<span style="color:#000000">],</span> l<span style="color:#000000">[</span>i<span style="color:#000000">]);</span>
    <span style="color:#000000">}</span>
    <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>f<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;</span><span style="color:#ff00ff">\&quot;</span><span style="color:#ff0000">);}&quot;</span><span style="color:#000000">);</span>
<span style="color:#008200">#ifdef D_INFO</span>
    <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;%d iterations done with %d blocks</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> iterations<span style="color:#000000">,</span> n<span style="color:#000000">);</span>
<span style="color:#008200">#endif</span>
    <span style="color:#010181">fclose</span><span style="color:#000000">(</span>f<span style="color:#000000">);</span>
    <span style="color:#000000; font-weight:bold">return</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
<span style="color:#000000">}</span> 
</pre>
mFunctione.c:
<pre style="overflow:auto;color:#000000; background-color:khaki; font-size:10pt; font-family:monospace;">
<span style="color:#830000">unsigned int</span> <span style="color:#010181">untr</span><span style="color:#000000">(</span><span style="color:#830000">unsigned int</span> i<span style="color:#000000">) {</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&lt;</span> <span style="color:#2928ff">0</span> <span style="color:#000000">||</span> i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">255</span><span style="color:#000000">) {</span>
        <span style="color:#010181">printf</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;input incorrect: %u</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">,</span> i<span style="color:#000000">);</span>
        <span style="color:#010181">abort</span><span style="color:#000000">();</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">==</span> <span style="color:#2928ff">255</span><span style="color:#000000">) {</span>
        <span style="color:#000000; font-weight:bold">return</span> i<span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">92</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">-=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">37</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">-=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">34</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">-=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">13</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">-=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">10</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">-=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">0</span><span style="color:#000000">) {</span>
        i <span style="color:#000000">-=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(</span>i <span style="color:#000000">&lt;</span> <span style="color:#2928ff">0</span> <span style="color:#000000">||</span> i <span style="color:#000000">&gt;</span> <span style="color:#2928ff">247</span><span style="color:#000000">) {</span>
        <span style="color:#010181">abort</span><span style="color:#000000">();</span>
    <span style="color:#000000">}</span>
    <span style="color:#000000; font-weight:bold">return</span> i<span style="color:#000000">;</span>
<span style="color:#000000">}</span>
<span style="color:#838183; font-style:italic">/* o has 18 bits, l has 5 bits */</span>
<span style="color:#830000">void</span> <span style="color:#010181">decode</span><span style="color:#000000">(</span><span style="color:#830000">int</span><span style="color:#000000">*</span> o<span style="color:#000000">,</span> <span style="color:#830000">int</span><span style="color:#000000">*</span> l<span style="color:#000000">,</span> <span style="color:#830000">int</span> a<span style="color:#000000">,</span> <span style="color:#830000">int</span> b<span style="color:#000000">,</span> <span style="color:#830000">int</span> c<span style="color:#000000">) {</span>
    a <span style="color:#000000">=</span> a<span style="color:#000000">*</span><span style="color:#2928ff">248</span><span style="color:#000000">*</span><span style="color:#2928ff">248</span> <span style="color:#000000">+</span> b<span style="color:#000000">*</span><span style="color:#2928ff">248</span> <span style="color:#000000">+</span> c<span style="color:#000000">;</span>
    <span style="color:#000000">(*</span>l<span style="color:#000000">) =</span> a <span style="color:#000000">&gt;&gt;</span> <span style="color:#2928ff">18</span><span style="color:#000000">;</span>
    <span style="color:#000000">(*</span>o<span style="color:#000000">) =</span> a <span style="color:#000000">- ((*</span>l<span style="color:#000000">) &lt;&lt;</span> <span style="color:#2928ff">18</span><span style="color:#000000">);</span>
<span style="color:#000000">}</span>

<span style="color:#830000">void</span> <span style="color:#010181">m</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">*</span> e<span style="color:#000000">) {</span>
    <span style="color:#830000">unsigned int</span> i<span style="color:#000000">,</span> n<span style="color:#000000">,</span> o<span style="color:#000000">,</span> l<span style="color:#000000">;</span>
    <span style="color:#830000">char</span><span style="color:#000000">*</span> s<span style="color:#000000">;</span>
    <span style="color:#830000">FILE</span><span style="color:#000000">*</span> out<span style="color:#000000">;</span>
    <span style="color:#830000">FILE</span><span style="color:#000000">*</span> err<span style="color:#000000">;</span>
    err <span style="color:#000000">=</span> stderr<span style="color:#000000">;</span>
    out <span style="color:#000000">=</span> stdout<span style="color:#000000">;</span>
    s <span style="color:#000000">=</span> <span style="color:#010181">malloc</span><span style="color:#000000">(</span><span style="color:#2928ff">400000</span> <span style="color:#000000">*</span> <span style="color:#000000; font-weight:bold">sizeof</span><span style="color:#000000">(</span><span style="color:#830000">char</span><span style="color:#000000">));</span>
    i <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    n <span style="color:#000000">=</span> <span style="color:#2928ff">0</span><span style="color:#000000">;</span>
    <span style="color:#000000; font-weight:bold">while</span><span style="color:#000000">(</span>e<span style="color:#000000">[</span>i<span style="color:#000000">]) {</span>
       <span style="color:#000000; font-weight:bold">if</span><span style="color:#000000">(((</span><span style="color:#830000">unsigned char</span><span style="color:#000000">)</span>e<span style="color:#000000">[</span>i<span style="color:#000000">]) ==</span> <span style="color:#2928ff">255</span><span style="color:#000000">) {</span>
           <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>err<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;%04d char: &quot;</span><span style="color:#000000">,</span> n<span style="color:#000000">,</span> e<span style="color:#000000">[</span>i<span style="color:#000000">+</span><span style="color:#2928ff">1</span><span style="color:#000000">]-</span><span style="color:#2928ff">93</span><span style="color:#000000">);</span>
           s<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> e<span style="color:#000000">[</span>i <span style="color:#000000">+</span> <span style="color:#2928ff">1</span><span style="color:#000000">] -</span> <span style="color:#2928ff">93</span><span style="color:#000000">;</span>
           <span style="color:#010181">putc</span><span style="color:#000000">(</span>s<span style="color:#000000">[</span>n<span style="color:#000000">],</span> out<span style="color:#000000">);</span>
           <span style="color:#010181">fflush</span><span style="color:#000000">(</span>out<span style="color:#000000">);</span>
           <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>err<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">);</span>
           n <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
           i <span style="color:#000000">+=</span> <span style="color:#2928ff">2</span><span style="color:#000000">;</span>
           <span style="color:#000000; font-weight:bold">continue</span><span style="color:#000000">;</span>
       <span style="color:#000000">}</span>
       <span style="color:#010181">decode</span><span style="color:#000000">(&amp;</span>o<span style="color:#000000">, &amp;</span>l<span style="color:#000000">,</span> <span style="color:#010181">untr</span><span style="color:#000000">((</span><span style="color:#830000">unsigned char</span><span style="color:#000000">)</span>e<span style="color:#000000">[</span>i<span style="color:#000000">]),</span> <span style="color:#010181">untr</span><span style="color:#000000">((</span><span style="color:#830000">unsigned char</span><span style="color:#000000">)</span>e<span style="color:#000000">[</span>i<span style="color:#000000">+</span><span style="color:#2928ff">1</span><span style="color:#000000">]),</span> <span style="color:#010181">untr</span><span style="color:#000000">((</span><span style="color:#830000">unsigned char</span><span style="color:#000000">)</span>e<span style="color:#000000">[</span>i<span style="color:#000000">+</span><span style="color:#2928ff">2</span><span style="color:#000000">]));</span>
       i<span style="color:#000000">+=</span><span style="color:#2928ff">3</span><span style="color:#000000">;</span>
       <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>err<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;%04d at %d with %d: &quot;</span><span style="color:#000000">,</span> n<span style="color:#000000">,</span> o<span style="color:#000000">,</span> l<span style="color:#000000">);</span>
       l <span style="color:#000000">=</span> o <span style="color:#000000">+</span> l<span style="color:#000000">;</span>
       <span style="color:#000000; font-weight:bold">for</span><span style="color:#000000">(;</span>o <span style="color:#000000">&lt;</span> l<span style="color:#000000">;</span>o <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">) {</span>
           s<span style="color:#000000">[</span>n<span style="color:#000000">] =</span> s<span style="color:#000000">[</span>o<span style="color:#000000">];</span>
           <span style="color:#010181">putc</span><span style="color:#000000">(</span>s<span style="color:#000000">[</span>n<span style="color:#000000">],</span> out<span style="color:#000000">);</span>
           <span style="color:#010181">fflush</span><span style="color:#000000">(</span>out<span style="color:#000000">);</span>
           n <span style="color:#000000">+=</span> <span style="color:#2928ff">1</span><span style="color:#000000">;</span>
       <span style="color:#000000">}</span>
       <span style="color:#010181">fprintf</span><span style="color:#000000">(</span>err<span style="color:#000000">,</span> <span style="color:#ff0000">&quot;</span><span style="color:#ff00ff">\n</span><span style="color:#ff0000">&quot;</span><span style="color:#000000">);</span>
    <span style="color:#000000">}</span>
    <span style="color:#010181">fclose</span><span style="color:#000000">(</span>err<span style="color:#000000">);</span>
    <span style="color:#010181">fclose</span><span style="color:#000000">(</span>out<span style="color:#000000">);</span>
<span style="color:#000000">}</span>
</pre>
