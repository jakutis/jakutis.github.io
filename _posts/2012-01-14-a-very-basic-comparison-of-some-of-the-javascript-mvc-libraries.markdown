---
layout: post
title: !binary |-
  QSB2ZXJ5IGJhc2ljIGNvbXBhcmlzb24gb2Ygc29tZSBvZiB0aGUgSmF2YVNj
  cmlwdCBNVkMgbGlicmFyaWVz
wordpress_id: 336
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0zMzY=
date: 2012-01-14 18:15:21.000000000 +00:00
---
The table below is not complete, but it should serve the purpose of striking out the unsuitable ones. For other comparisons please see these:

- [Client Side MVC Shootout](http://scottburton11.github.com/Client-Side-Framework-Shootout-Talk/)
- [Client-Side MVC frameworks compared](http://paulhammant.com/2012/02/13/client-side-mvc-frameworks-compared/)
- [The Top 10 Javascript MVC Frameworks Reviewed](http://codebrief.com/2012/01/the-top-10-javascript-mvc-frameworks-reviewed/)

<table><thead>
<tr><th>Name</th><th>Pros</th><th>Cons</th><th>Notes</th></tr>
</thead><tbody>
<tr><td><a href="http://documentcloud.github.com/backbone/">Backbone.js</a></td><td><ul><li>included in npm index</li><li><a href="http://www.quora.com/What-are-some-good-resources-for-Backbone-js">widely used</a></li><li>has <a href="http://kmalakoff.github.com/knockback/">Knockback for Knockout.js ideas</a></li></ul></td><td>&nbsp;</td><td><ul><li>4.6kb</li><li>started on September, 2010</li><li>has <a href="http://stackoverflow.com/questions/tagged/backbone.js">1486 tags on StackOverflow</a></li><li>depends on Underscore</li><li>optionally depends on Zepto or jQuery, json2.js</li></ul></td></tr>
<tr><td><a href="http://emberjs.com/">Ember.JS</a></td><td><ul><li>included in npm index</li><li>developed by the authors of the famous <a href="http://sproutcore.com/">SproutCore</a></li></ul></td><td><ul><li>infrastructure uses Ruby</li></ul></td><td><ul><li>35kb</li><li>no dependencies</li></ul></td></tr>
<tr><td><a href="http://knockoutjs.com/">Knockout</a></td><td>&nbsp;</td><td><ul><li>excluded from npm index</li></ul></td><td><ul><li>13kb</li><li>implements <a href="http://en.wikipedia.org/wiki/Model_View_ViewModel">Model View ViewModel</a> pattern</li><li>started on July, 2010</li><li>has <a href="http://stackoverflow.com/questions/tagged/knockoutjs">638 tags on StackOverflow</a></li><li>no dependencies</li></ul></td></tr>
<tr><td><a href="http://spinejs.com/">Spine</a></td><td><ul><li>included in npm index</li></ul></td><td><ul><li>written in CoffeeScript</li></ul></td><td><ul><li>3.2k</li><li>started on March, 2011</li><li>depends on Zepto or jQuery</li></ul></td></tr>
<tr><td><a href="http://www.sencha.com/products/extjs/">ExtJS</a></td><td><ul><li>included in npm index</li></ul></td><td><ul><li>non-free for commercial projects</li></ul></td><td><ul><li>56k, modular</li><li>no dependencies</li></ul></td></tr>
<tr><td><a href="https://github.com/jgallen23/fidel">fidel</a></td><td><ul><li>included in npm index</li><li>slim</li></ul></td><td><ul><li>only a controller</li><li>last updated on November, 2011</li></ul></td><td><ul><li>1.7k</li><li>depends on Ender or Zepto or jQuery</li></ul></td></tr>
<tr><td><a href="http://labs.adobe.com/technologies/spry/home.html">Spry</a></td><td>&nbsp;</td><td><ul><li>last updated in 2008</li><li>excluded from npm index</li></ul></td><td><ul><li>216k, modular</li><li>no dependencies</li></ul></td></tr>
<tr><td><a href="http://code.google.com/p/mdv/">MDV</a></td><td><ul><li>authored by Google and Chromium developers</li></ul></td><td><ul><li>experimental</li><li>excluded from npm index</li></ul></td><td><ul><li>108k, modular</li><li>no dependencies</li></ul></td></tr>
<tr><td><a href="http://javascriptmvc.com/">JavaScriptMVC</a></td><td>&nbsp;</td><td><ul><li>forces file system structure</li><li>excluded from npm index</li></ul></td><td><ul><li>??, modular</li><li>no dependencies</li></ul></td></tr>
<tr><td><a href="http://yuilibrary.com/">YUI Library</a></td><td><ul><li>included in npm index</li></ul></td><td>&nbsp;</td><td><ul><li>??, modular</li><li>has <a href="http://stackoverflow.com/questions/tagged/yui">1019 tags on StackOverflow</a></li><li>no dependencies</li></ul></td></tr>
<tr><td><a href="http://sammyjs.org/">Sammy.js</a></td><td>&nbsp;</td><td><ul><li>uses hashbangs for routing</li><li>excluded from npm index</li><li>infrastructure uses Ruby</li></ul></td><td><ul><li>104k, modular</li><li>started on March, 2009</li><li>depends on jQuery</li></ul></td></tr>
<tr><td><a href="http://angularjs.org/">AngularJS</a></td><td>&nbsp;</td><td><ul><li>uses xml namespaces</li><li>excluded from npm index</li></ul></td><td><ul><li>27k</li><li>no dependencies</li></ul></td></tr>
<tr><td><a href="http://agilityjs.com/">Agility.js</a></td><td><ul><li>slim</li></ul></td><td><ul><li>excluded from npm index</li></ul></td><td><ul><li>4k</li><li>depends on jQuery</li></ul></td></tr>
</tbody></table>

So the real candidates are Backbone.js, Knockout.js, YUI, Spine, Ember.js and Sammy.js. Apparently, the winner is Backbone.js. yay

But there are also countless other comparisons, for example:

- [Addy Osmani: Short Musings On JavaScript MV* Tech Stacks](http://addyosmani.com/blog/short-musings-on-javascript-mv-tech-stacks/)
- [Quora: Can we get a poweredby list of ember.js (sproutcore), javascriptmvc, backbone.js individually?](http://www.quora.com/Can-we-get-a-poweredby-list-of-ember-js-sproutcore-javascriptmvc-backbone-js-individually)
- [Knockback brings Knockout.js magic to Backbone](http://kmalakoff.github.com/knockback/)
- [Hacker News: Sproutcore vs jQuery +backbone.js](http://news.ycombinator.com/item?id=2119704)
- [Hacker News: Backbone.js 0.5.0 Released (with pushState)](http://news.ycombinator.com/item?id=2719448)
- [Hacker News: Backbone vs Knockout](http://news.ycombinator.com/item?id=3265625)
- [StackOverflow: Knockout.js vs Backbone.js (vs ?) (closed)](http://stackoverflow.com/questions/5112899/knockout-js-vs-backbone-js-vs)
- [How to use Model-View-Controller (MVC) by Steve Burbeck, Ph.D.](http://st-www.cs.illinois.edu/users/smarch/st-docs/mvc.html)
- [Understanding MVC And MVP (For JavaScript And Backbone Developers)](http://addyosmani.com/blog/understanding-mvc-and-mvp-for-javascript-and-backbone-developers/)

**UPDATES**

Frameworks that were created after writing the comparison above:

-   [Serenade.js](https://github.com/elabs/serenade.js)
