---
layout: post
title: !binary |-
  QSBKYXZhIHByb2dyYW0gdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZHVwbGlj
  YXRlIGZpbGVzIGluIGEgZGlyZWN0b3J5
wordpress_id: 41
wordpress_url: !binary |-
  aHR0cDovL3Z5dGF1dGFzLmpha3V0aXMubmFtZS8/cD00MQ==
date: 2011-03-15 20:21:08.000000000 +00:00
---
<pre style="overflow:auto;color:#000000; background-color:khaki; font-size:10pt; font-family:monospace;"><span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>io<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">File</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>io<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">FileInputStream</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>io<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">IOException</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>math<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">BigInteger</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>security<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">MessageDigest</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>security<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">NoSuchAlgorithmException</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>util<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">HashMap</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>util<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">LinkedList</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>util<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">List</span><span style="color:#000000">;</span>
<span style="color:#000000; font-weight:bold">import</span> java<span style="color:#000000">.</span>util<span style="color:#000000">.</span><span style="color:#000000; font-weight:bold">Map</span><span style="color:#000000">;</span>

<span style="color:#000000; font-weight:bold">public class</span> FindDuplicates <span style="color:#000000">{</span>
	<span style="color:#000000; font-weight:bold">private static</span> <span style="color:#000000; font-weight:bold">MessageDigest</span> md<span style="color:#000000">;</span>
	<span style="color:#000000; font-weight:bold">static</span> <span style="color:#000000">{</span>
		<span style="color:#000000; font-weight:bold">try</span> <span style="color:#000000">{</span>
			md <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">MessageDigest</span><span style="color:#000000">.</span><span style="color:#010181">getInstance</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;SHA-512&quot;</span><span style="color:#000000">);</span>
		<span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">catch</span> <span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">NoSuchAlgorithmException</span> e<span style="color:#000000">) {</span>
			<span style="color:#000000; font-weight:bold">throw new</span> <span style="color:#000000; font-weight:bold">RuntimeException</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;cannot initialize SHA-512 hash function&quot;</span><span style="color:#000000">,</span> e<span style="color:#000000">);</span>
		<span style="color:#000000">}</span>
	<span style="color:#000000">}</span>

	<span style="color:#000000; font-weight:bold">public static</span> <span style="color:#830000">void</span> <span style="color:#010181">find</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">Map</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">,</span> <span style="color:#000000; font-weight:bold">List</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">&gt;&gt;</span> lists<span style="color:#000000">,</span> <span style="color:#000000; font-weight:bold">File</span> directory<span style="color:#000000">) {</span>
		<span style="color:#000000; font-weight:bold">for</span> <span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">File</span> child <span style="color:#000000">:</span> directory<span style="color:#000000">.</span><span style="color:#010181">listFiles</span><span style="color:#000000">()) {</span>
			<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">(</span>child<span style="color:#000000">.</span><span style="color:#010181">isDirectory</span><span style="color:#000000">()) {</span>
				<span style="color:#010181">find</span><span style="color:#000000">(</span>lists<span style="color:#000000">,</span> child<span style="color:#000000">);</span>
			<span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">else</span> <span style="color:#000000">{</span>
				<span style="color:#000000; font-weight:bold">try</span> <span style="color:#000000">{</span>
					<span style="color:#000000; font-weight:bold">FileInputStream</span> fin <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">new</span> <span style="color:#000000; font-weight:bold">FileInputStream</span><span style="color:#000000">(</span>child<span style="color:#000000">);</span>
					<span style="color:#830000">byte</span> data<span style="color:#000000">[] =</span> <span style="color:#000000; font-weight:bold">new</span> <span style="color:#830000">byte</span><span style="color:#000000">[(</span><span style="color:#830000">int</span><span style="color:#000000">)</span> child<span style="color:#000000">.</span><span style="color:#010181">length</span><span style="color:#000000">()];</span>
					fin<span style="color:#000000">.</span><span style="color:#010181">read</span><span style="color:#000000">(</span>data<span style="color:#000000">);</span>
					fin<span style="color:#000000">.</span><span style="color:#010181">close</span><span style="color:#000000">();</span>
					<span style="color:#000000; font-weight:bold">String</span> hash <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">new</span> <span style="color:#000000; font-weight:bold">BigInteger</span><span style="color:#000000">(</span><span style="color:#2928ff">1</span><span style="color:#000000">,</span> md<span style="color:#000000">.</span><span style="color:#010181">digest</span><span style="color:#000000">(</span>data<span style="color:#000000">)).</span><span style="color:#010181">toString</span><span style="color:#000000">(</span><span style="color:#2928ff">16</span><span style="color:#000000">);</span>
					<span style="color:#000000; font-weight:bold">List</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">&gt;</span> list <span style="color:#000000">=</span> lists<span style="color:#000000">.</span><span style="color:#010181">get</span><span style="color:#000000">(</span>hash<span style="color:#000000">);</span>
					<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">(</span>list <span style="color:#000000">==</span> null<span style="color:#000000">) {</span>
						list <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">new</span> <span style="color:#000000; font-weight:bold">LinkedList</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">&gt;();</span>
						lists<span style="color:#000000">.</span><span style="color:#010181">put</span><span style="color:#000000">(</span>hash<span style="color:#000000">,</span> list<span style="color:#000000">);</span>
					<span style="color:#000000">}</span>
					list<span style="color:#000000">.</span><span style="color:#010181">add</span><span style="color:#000000">(</span>child<span style="color:#000000">.</span><span style="color:#010181">getAbsolutePath</span><span style="color:#000000">());</span>
				<span style="color:#000000">}</span> <span style="color:#000000; font-weight:bold">catch</span> <span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">IOException</span> e<span style="color:#000000">) {</span>
					<span style="color:#000000; font-weight:bold">throw new</span> <span style="color:#000000; font-weight:bold">RuntimeException</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;cannot read file &quot;</span> <span style="color:#000000">+</span> child<span style="color:#000000">.</span><span style="color:#010181">getAbsolutePath</span><span style="color:#000000">(),</span> e<span style="color:#000000">);</span>
				<span style="color:#000000">}</span>
			<span style="color:#000000">}</span>
		<span style="color:#000000">}</span>
	<span style="color:#000000">}</span>

	<span style="color:#000000; font-weight:bold">public static</span> <span style="color:#830000">void</span> <span style="color:#010181">main</span><span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">[]</span> args<span style="color:#000000">) {</span>
		<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">(</span>args<span style="color:#000000">.</span>length <span style="color:#000000">&lt;</span> <span style="color:#2928ff">1</span><span style="color:#000000">) {</span>
			<span style="color:#000000; font-weight:bold">System</span><span style="color:#000000">.</span>out<span style="color:#000000">.</span><span style="color:#010181">println</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;Please supply a path to directory to find duplicate files in.&quot;</span><span style="color:#000000">);</span>
			<span style="color:#000000; font-weight:bold">return</span><span style="color:#000000">;</span>
		<span style="color:#000000">}</span>
		<span style="color:#000000; font-weight:bold">File</span> dir <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">new</span> <span style="color:#000000; font-weight:bold">File</span><span style="color:#000000">(</span>args<span style="color:#000000">[</span><span style="color:#2928ff">0</span><span style="color:#000000">]);</span>
		<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">(!</span>dir<span style="color:#000000">.</span><span style="color:#010181">isDirectory</span><span style="color:#000000">()) {</span>
			<span style="color:#000000; font-weight:bold">System</span><span style="color:#000000">.</span>out<span style="color:#000000">.</span><span style="color:#010181">println</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;Supplied directory does not exist.&quot;</span><span style="color:#000000">);</span>
			<span style="color:#000000; font-weight:bold">return</span><span style="color:#000000">;</span>
		<span style="color:#000000">}</span>
		<span style="color:#000000; font-weight:bold">Map</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">,</span> <span style="color:#000000; font-weight:bold">List</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">&gt;&gt;</span> lists <span style="color:#000000">=</span> <span style="color:#000000; font-weight:bold">new</span> <span style="color:#000000; font-weight:bold">HashMap</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">,</span> <span style="color:#000000; font-weight:bold">List</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">&gt;&gt;();</span>
		FindDuplicates<span style="color:#000000">.</span><span style="color:#010181">find</span><span style="color:#000000">(</span>lists<span style="color:#000000">,</span> dir<span style="color:#000000">);</span>
		<span style="color:#000000; font-weight:bold">for</span> <span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">List</span><span style="color:#000000">&lt;</span><span style="color:#000000; font-weight:bold">String</span><span style="color:#000000">&gt;</span> list <span style="color:#000000">:</span> lists<span style="color:#000000">.</span><span style="color:#010181">values</span><span style="color:#000000">()) {</span>
			<span style="color:#000000; font-weight:bold">if</span> <span style="color:#000000">(</span>list<span style="color:#000000">.</span><span style="color:#010181">size</span><span style="color:#000000">() &gt;</span> <span style="color:#2928ff">1</span><span style="color:#000000">) {</span>
				<span style="color:#000000; font-weight:bold">System</span><span style="color:#000000">.</span>out<span style="color:#000000">.</span><span style="color:#010181">println</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;--&quot;</span><span style="color:#000000">);</span>
				<span style="color:#000000; font-weight:bold">for</span> <span style="color:#000000">(</span><span style="color:#000000; font-weight:bold">String</span> file <span style="color:#000000">:</span> list<span style="color:#000000">) {</span>
					<span style="color:#000000; font-weight:bold">System</span><span style="color:#000000">.</span>out<span style="color:#000000">.</span><span style="color:#010181">println</span><span style="color:#000000">(</span>file<span style="color:#000000">);</span>
				<span style="color:#000000">}</span>
			<span style="color:#000000">}</span>
		<span style="color:#000000">}</span>
		<span style="color:#000000; font-weight:bold">System</span><span style="color:#000000">.</span>out<span style="color:#000000">.</span><span style="color:#010181">println</span><span style="color:#000000">(</span><span style="color:#ff0000">&quot;--&quot;</span><span style="color:#000000">);</span>
	<span style="color:#000000">}</span>

<span style="color:#000000">}</span>
</pre>
