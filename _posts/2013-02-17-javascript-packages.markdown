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

| | [ender](http://ender.jit.su) | [bower](http://twitter.github.com/bower/) | [browserify](http://browserify.org/) |
| github | [103, 9](https://github.com/ender-js/Ender) | [4240, 283](https://github.com/twitter/bower) | [1566, 144](https://github.com/substack/node-browserify) |
| npmjs | [15, 129, 740](https://npmjs.org/package/ender) | [1098, 6236, -](https://npmjs.org/package/bower) | [143, 3997, 17493](https://npmjs.org/package/browserify) |
| license | MIT | MIT | MIT and 3-clause BSD |
| first commit | 2011-04-04 | 2012-09-06 | 2010-09-22 |
| last commit | 2013-02-16 | 2013-02-14 | 2013-02-16 |
| takes package list from file | arbitrary (generated script) | arbitrary (component.json) | package.json |
| name registry | [npmjs.org](https://npmjs.org) | [sindresorhus.com](http://sindresorhus.com/bower-components/) | [npmjs.org](https://npmjs.org) |
| copies from git URL | yes | yes | yes |
| copies from registry | yes | yes | yes |
| copies from local directory | yes | yes | yes |
| copies from archive URL | yes | yes | yes |
| copies to | arbitrary (default is node_modules) | arbitrary (default is components) | node_modules |
| generates a single script | yes | no | yes |
| exposes require to global scope | yes | no | optionally (default is no) |

## Conclusion

It is best to upgrade from Browserify to a combination of Bower and TODO
