---
layout: post
title: !binary |-
  RmluZCB0aGUgd2lkdGggb2Ygc2Nyb2xsYmFycyBpbiBhIGNyb3NzLWJyb3dz
  ZXIgbWFubmVy
wordpress_id: 238
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0yMzg=
date: 2008-06-29 21:01:56.000000000 +00:00
---

{% highlight javascript %}
    var div = document.createElement('div');
    div.style.width = '50px';
    div.style.position = 'absolute';
    div.style.left = '-200px';
    div.style.overflow = 'hidden';
    var div2 = document.createElement('div');
    div2.style.position = 'relative';
    div2.style.width = '100%';
    div2.style.height = '100%';
    div.appendChild(div2);
    document.body.appendChild(div);
    if(div2.offsetWidth) {
        scrollBarWidth = div2.offsetWidth;
        div.style.overflow = 'scroll';
        scrollBarWidth -= div2.offsetWidth;
    } else if(window.getComputedStyle) {
        scrollBarWidth = parseInt(document.defaultView.getComputedStyle(div2, null).getPropertyValue('width'));
        div.style.overflow = 'scroll';
        scrollBarWidth -= parseInt(document.defaultView.getComputedStyle(div2, null).getPropertyValue('width'));
    }
    document.body.removeChild(div);
    alert(scrollBarWidth);
{% endhighlight %}

Tested on Internet Explorer 5, 5.5; Opera 7.50; Firefox 3.0; Mozilla 1.0; Konqueror 3.5.9; Safari 3.1
If you find a bug on some other browser, please leave a comment
