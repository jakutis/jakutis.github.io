---
layout: post
title: JavaScript packages
date: Sun Feb 17 00:52:29 EET 2013
---
<style>
table {
    white-space: nowrap;
}
</style>

## Introduction
Since the creation of Browserify by James Halliday in 2010,
a whole landscape of various CommonJS package managers has been built up.
This post will evaluate the new options
and should help one to decide whether there is an upgrade from Browserify.

## Comparison table

| | [Ender](http://ender.jit.su) | [Bower](http://twitter.github.com/bower/) | [Browserify](http://browserify.org/) | [Component](http://component.io/) | [OneJS](https://github.com/azer/onejs) | [Grunt](http://gruntjs.com/) |
| github | [103, 9](https://github.com/ender-js/Ender) | [4240, 283](https://github.com/twitter/bower) | [1566, 144](https://github.com/substack/node-browserify) | [1101, 58](https://github.com/component/component) | [325, 12](https://github.com/azer/onejs) | [5088, 491](https://github.com/gruntjs/grunt) |
| npmjs | [15, 129, 740](https://npmjs.org/package/ender) | [1098, 6236, -](https://npmjs.org/package/bower) | [143, 3997, 17493](https://npmjs.org/package/browserify) | [156, 724, 2647](https://npmjs.org/package/component) | [1, 178, 534](https://npmjs.org/package/one) | [302, 10790, 41316](https://npmjs.org/package/grunt) |
| license | MIT | MIT | MIT and 3-clause BSD | MIT | WTFPL | MIT |
| first commit | 2011-04-04 | 2012-09-06 | 2010-09-22 | 2012-08-01 | 2012-10-01 | 2011-09-21 |
| last commit | 2013-02-16 | 2013-02-14 | 2013-02-16 | 2013-02-15 | 2013-02-08 | 2013-02-13 |
| takes package list from | arbitrary (default is ender.js) | arbitrary (default is component.json) | package.json | component.json | TODO | depends on concatenation settings |
| name registry | [npmjs.org](https://npmjs.org) | [sindresorhus.com](http://sindresorhus.com/bower-components/) | [npmjs.org](https://npmjs.org) | [github.com](https://github.com) | TODO | depends on the plugin |
| copies from git URL | yes | yes | yes | no | TODO | yes, if using a plugin (Bower, etc.) |
| copies from registry | yes | yes | yes | yes | TODO | yes, if using a plugin (Bower, etc.) |
| copies from local directory | yes | yes | yes | no | TODO | yes, if using a plugin (Bower, etc.) |
| copies from archive URL | yes | yes | yes | no | TODO | yes, if using a plugin (Bower, etc.) |
| copies to | arbitrary (default is node_modules) | arbitrary (default is components) | node_modules | components | TODO | yes, if using a plugin (Bower, etc.) |
| generates a single script | yes | no | yes | yes | TODO | yes, if using a plugin (simple concatenation, Component, Jam, Browserify, etc.) |
| generates a single stylesheet | no | no | no | yes | TODO | yes, if using Component plugin |
| exposes require to global scope | yes | no | optionally (default is no) | yes | depends on the plugin |  |
| uses an entry script | TODO | TODO | yes | TODO | TODO | depends on the plugin |
| defects | none | none | none | home page is down,<br>`component info component/tip` is broken | `npm install -g one` is broken | none |

TODO add jamjs+almond

## Conclusions

It is best to upgrade from Browserify to a combination of Bower and Component. Use Bower for package management and Component for concatenation.

Another category of weapons is being developed - scaffolding generators. Besides Grunt, [Yo](http://yeoman.io) is currently in version 1.0.0 beta 2. Have a look at it's backend - [the Yeoman generator system](https://github.com/yeoman/generator).
