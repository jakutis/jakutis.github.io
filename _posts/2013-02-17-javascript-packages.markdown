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

| | [ender](http://ender.jit.su) | [bower](https://npmjs.org/package/bower) |
| github | [103, 9](https://github.com/ender-js/Ender) | [4240, 283](https://github.com/twitter/bower) |
| npmjs | [15, 129, 740](https://npmjs.org/package/ender) | [1098, 6236, -](https://npmjs.org/package/bower) |
| license | MIT | MIT |
| first commit | 2011-04-04 | 2012-09-06 |
| last commit | 2013-02-16 | 2013-02-14 |
| takes package list from packages.json | no | no |
| takes package list from component.json | no | yes |
| takes package list from generated script | yes | no |
| name registry | [npmjs.org](https://npmjs.org) | [sindresorhus.com](http://sindresorhus.com/bower-components/) |
| copies from git URL | no | yes |
| copies from registry | yes | yes |
| copies from local directory | yes | yes |
| copies from archive URL | no | yes |
| copies to | arbitrary (default is node_modules) | components |
| generates a single script | yes | no |
| exposes require to global scope | yes | no |

## Conclusion

It is best to upgrade from Browserify to a combination of Bower and TODO
