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
Here's the source code for matlab:

{% highlight matlab linenos=table %}
function [ h ] = msubplot(m, n, p)
    h = subplot(m, n, p);
    hd = 1 / n;
    vd = 1 / m;
    minc = n;
    minr = m;
    maxc = 0;
    maxr = 0;
    for i = 1:prod(size(p))
        col = mod(p(i), n);
        if col == 0
            col = n;
        end

        row = ((p(i) - 1 - mod(p(i) - 1, n)) / n) + 1;

        if col > maxc
            maxc = col;
        end

        if row > maxr
            maxr = row;
        end

        if col < minc
            minc = col;
        end

        if row < minr
            minr = row;
        end

    end

    height = maxr - minr + 1;
    width = maxc - minc + 1;

    g = get(h, 'OuterPosition');
    g(1) = (minc - 1) * hd;
    g(2) = (m - maxr) * vd;
    g(3) = width * hd;
    g(4) = height * vd;
    set(h, 'OuterPosition', g);

end
{% endhighlight %}
