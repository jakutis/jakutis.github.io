---
layout: post
title: Getting full stack traces in asynchronous JavaScript code
date: Thu Aug 21 05:46:31 UTC 2014
---
If all the codebase uses the two methods `.setImmediate` and `.nextTick` from the library [async](https://www.npmjs.org/package/async),
then after we do the following monkey-patching we can call the function `global.printStack()` to get the full stack trace.

{% highlight javascript linenos=table %}
var a = require('async');

global.previousStack = [];

var s = a.setImmediate;
a.setImmediate = function(fn) {
    var stack = global.previousStack.slice();
    stack.push(new Error().stack);
    s(function() {
        global.previousStack = stack;
        fn();
    });
};

var n = a.nextTick;
a.nextTick = function(fn) {
    var stack = global.previousStack.slice();
    stack.push(new Error().stack);
    n(function() {
        global.previousStack = stack;
        fn();
    });
};

global.printStack = function() {
    global.previousStack.forEach(function(stack) {
        console.log(stack);
    });
    console.log(new Error().stack);
};
{% endhighlight %}

This hack is in the earliest stage - it needs development to avoid using `global` and also parsing and joining of the stacks to remove the repeated lines.

By the way, it is fun to know [the difference between `.setImmediate` and `.nextTick`](http://stackoverflow.com/a/20296580).
