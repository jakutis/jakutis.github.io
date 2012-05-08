---
layout: post
title: !binary |-
  Ym9va21hcmtsZXRzIGZvciB6aW5hIChtdXNpYyBzdHJlYW1pbmcgd2ViYXBw
  KQ==
wordpress_id: 195
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0xOTU=
date: 2008-12-09 23:37:01.000000000 +00:00
---
This is a list of my bookmarklets for <a href="http://www.pancake.org/zina">Zina</a> Is Not Andromeda:
<ul>
<li><a href="javascript:(function()%20{var%20f%20=%20window.document.createElement('form');f.setAttribute('method',%20'post');f.setAttribute('action',%20'http://example.org/zina/index.php?l=4');f.setAttribute('target',%20'_blank');var%20i;i%20=%20window.document.createElement('input');i.setAttribute('type',%20'hidden');i.setAttribute('name',%20'search');i.setAttribute('value',%20prompt('Please%20enter%20the%20query%20for%20a%20song'));f.appendChild(i);i%20=%20window.document.createElement('input');i.setAttribute('type',%20'hidden');i.setAttribute('name',%20'type');i.setAttribute('value',%20's');f.appendChild(i);window.document.body.appendChild(f);f.submit();f.parentNode.removeChild(f);})();">search for a song</a></li>
<li><a href="javascript:(function()%20{var%20l,%20i;l%20=%20window.document.getElementsByTagName('input');for(i%20=%200;%20l[i];%20i++)%20{%20%20if(l[i].getAttribute('type')%20===%20'checkbox')%20{%20%20%20%20l[i].checked%20=%20true;%20%20}}CheckIt2('sresults','&l=3&z=2',false,%20'Nothing%20to%20add%20to%20playlist.',%200,%20'add');})();">add all tracks from current view to session playlist</a></li>
<li><a href="javascript:CheckIt2('viewedit','&amp;l=8&amp;m=3&amp;lf=0',false,'No%20playlist%20selected.',%201);">play the current playlist</a></li>
</ul>
Source code:
<h3>search for a song</h3>
<code>
(function() {
var f = window.document.createElement('form');
f.setAttribute('method', 'post');
f.setAttribute('action', 'http://example.org/zina/index.php?l=4');
f.setAttribute('target', '_blank');
var i;
i = window.document.createElement('input');
i.setAttribute('type', 'hidden');
i.setAttribute('name', 'search');
i.setAttribute('value', prompt('Please enter the query for a song'));
f.appendChild(i);
i = window.document.createElement('input');
i.setAttribute('type', 'hidden');
i.setAttribute('name', 'type');
i.setAttribute('value', 's');
f.appendChild(i);
window.document.body.appendChild(f);
f.submit();
f.parentNode.removeChild(f);
})();
</code>

<h3>add all tracks from current view to session playlist</h3>
<code>
(function() {
var l, i;
l = window.document.getElementsByTagName('input');
for(i = 0; l[i]; i++) {
  if(l[i].getAttribute('type') === 'checkbox') {
    l[i].checked = true;
  }
}
CheckIt2('sresults','&l=3&z=2',false, 'Nothing to add to playlist.', 0, 'add');
})();
</code>

<h3>play the current playlist</h3>
<code>
CheckIt2('viewedit','&l=8&m=3&;lf=0',false,'No playlist selected.', 1);
</code>
