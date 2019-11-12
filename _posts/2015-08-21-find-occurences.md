---
layout: post
title: Find all occurences of a given value deep in the object/array tree
date: Fri Aug 21 16:41:35 EEST 2015
---
This is sometimes useful when debugging/trying to learn a complex JavaScript codebase:

{% highlight javascript linenos=table %}
var findOccurences = function(haystack, needle) {
    var visitedObjects = [];
    var occurences = [];
    var queue = [{
        parent: null,
        key: '',
        value: haystack
    }];
    while (queue.length) {
        haystack = queue.shift();
        if (needle(haystack)) {
            occurences.push(haystack);
        } else if (typeof haystack.value === 'object' && !(haystack.value instanceof Error) && visitedObjects.indexOf(haystack.value) < 0) {
            visitedObjects.push(haystack.value);
            for (var i in haystack.value) {
                try {
                  queue.push({
                      parent: haystack,
                      key: i,
                      value: haystack.value[i]
                  });
                } catch(e) {
                  queue.push({
                      parent: haystack,
                      key: i,
                      value: e
                  });
                }
            }
        }
    }
    return {
        referenceList: occurences,
        pathList: occurences.map(function (occurence) {
            var elements = [];
            do {
                elements.push(occurence.key);
                occurence = occurence.parent;
            } while (occurence);
            elements.reverse();
            return elements.join('.');
        })
    };
}
{% endhighlight %}
