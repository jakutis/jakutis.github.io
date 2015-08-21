---
layout: post
title: Find all occurences of a given value deep in the object/array tree
date: Fri Aug 21 16:41:35 EEST 2015
---
This is sometimes usefull when debugging/trying to learn a complex JavaScript codebase:

{% highlight javascript linenos=table %}
function findOccurences(haystack, needle) {
    var visitedObjects = [];
    var occurences = [];
    var queue = [{
        parent: null,
        key: null,
        value: haystack
    }];
    while (queue.length) {
        haystack = queue.shift();
        if (haystack.value === needle) {
            occurences.push(haystack);
        } else if (typeof haystack.value === 'object' && visitedObjects.indexOf(haystack.value) < 0) {
            visitedObjects.push(haystack.value);
            for (var i in haystack.value) {
                queue.push({
                    parent: haystack,
                    key: i,
                    value: haystack.value[i]
                });
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
