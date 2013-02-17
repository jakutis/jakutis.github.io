---
layout: post
title: JavaScript packages
date: Sun Feb 17 00:52:29 EET 2013
---

## Introduction
Since the creation of Browserify by James Halliday in 2010,
a whole landscape of various CommonJS package managers has been built up.
This post will evaluate the new options
and should help one to decide whether there is an upgrade from Browserify.

## Comparison table

| | [ender](http://ender.jit.su) | [bower](http://twitter.github.com/bower/) | [browserify](http://browserify.org/) | [component](http://component.io/) |
| github | [103, 9](https://github.com/ender-js/Ender) | [4240, 283](https://github.com/twitter/bower) | [1566, 144](https://github.com/substack/node-browserify) | [1101, 58](https://github.com/component/component) |
| npmjs | [15, 129, 740](https://npmjs.org/package/ender) | [1098, 6236, -](https://npmjs.org/package/bower) | [143, 3997, 17493](https://npmjs.org/package/browserify) | [156, 724, 2647](https://npmjs.org/package/component) |
| license | MIT | MIT | MIT and 3-clause BSD | MIT |
| first commit | 2011-04-04 | 2012-09-06 | 2010-09-22 | 2012-08-01 |
| last commit | 2013-02-16 | 2013-02-14 | 2013-02-16 | 2013-02-15 |
| takes package list from | arbitrary (generated script) | arbitrary (component.json) | package.json | component.json |
| name registry | [npmjs.org](https://npmjs.org) | [sindresorhus.com](http://sindresorhus.com/bower-components/) | [npmjs.org](https://npmjs.org) | [github.com](https://github.com) |
| copies from git URL | yes | yes | yes | no |
| copies from registry | yes | yes | yes | yes |
| copies from local directory | yes | yes | yes | no |
| copies from archive URL | yes | yes | yes | no |
| copies to | arbitrary (default is node_modules) | arbitrary (default is components) | node_modules | components |
| generates a single script | yes | no | yes | yes |
| generates a single stylesheet | no | no | no | yes |
| exposes require to global scope | yes | no | optionally (default is no) | yes |
| defects | none | none | none | home page is down, `component info component/tip` is broken |

## Conclusion

It is best to upgrade from Browserify to a combination of Bower and Component. Use Bower for package management and Component for concatenation.
