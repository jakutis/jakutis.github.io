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

Since the creation of [Stitch by Sam Stephenson on 17 September 2010](https://github.com/sstephenson/stitch/commit/a734eceb99f431b37d2693e1fe64195f76e159ec) and [Browserify by James Halliday on 22 September 2010](https://github.com/substack/node-browserify/commit/b0363ae3d5749b3f7e722b21c65484fdf634acf3) ([announced in 2011](http://substack.net/posts/24ab8c/browserify-browser-side-require-for-your-node-js)),
a whole landscape of various [CommonJS](http://www.commonjs.org/) package managers has been built up.
Articles like the [Meet the New Stack, Same as the Old Stack](http://dailyjs.com/2013/02/04/stack/) and [Confused About Components](http://dailyjs.com/2013/01/28/components/) have been written.
However, the relevant new options need to be summarized.
This article should help one to decide whether there is an upgrade from Browserify.

Specifically, we will be comparing single script generators that use CommonJS module system, not loaders like [Require.js](http://requirejs.org/), [almond](https://github.com/jrburke/almond), [uRequire](https://github.com/anodynos/uRequire) or [r.js](https://github.com/jrburke/r.js).

## Comparison table

| | [Stitch](https://github.com/sstephenson/stitch) | [Ender](http://ender.jit.su) | [Bower](http://twitter.github.com/bower/) | [Browserify](http://browserify.org/) | [Component](http://component.io/) | [OneJS](https://github.com/azer/onejs) | [Grunt](http://gruntjs.com/) | [Jam](http://jamjs.org/) |
| github | [754, 66](https://github.com/sstephenson/stitch) | [103, 9](https://github.com/ender-js/Ender) | [4240, 283](https://github.com/twitter/bower) | [1566, 144](https://github.com/substack/node-browserify) | [1101, 58](https://github.com/component/component) | [325, 12](https://github.com/azer/onejs) | [5088, 491](https://github.com/gruntjs/grunt) | [1064, 66](https://github.com/caolan/jam) |
| npmjs | [5, 115, 555](https://npmjs.org/package/stitch) | [15, 129, 740](https://npmjs.org/package/ender) | [1098, 6236, -](https://npmjs.org/package/bower) | [143, 3997, 17493](https://npmjs.org/package/browserify) | [156, 724, 2647](https://npmjs.org/package/component) | [1, 178, 534](https://npmjs.org/package/one) | [302, 10790, 41316](https://npmjs.org/package/grunt) | [9, 409, -](https://npmjs.org/package/jamjs) |
| license | MIT | MIT | MIT | MIT and 3-clause BSD | MIT | WTFPL | MIT | MIT |
| first commit | 2010-09-17 | 2011-04-04 | 2012-09-06 | 2010-09-22 | 2012-08-01 | 2012-10-01 | 2011-09-21 | 2012-05-18 |
| last commit | 2012-11-02 | 2013-02-16 | 2013-02-14 | 2013-02-16 | 2013-02-15 | 2013-02-08 | 2013-02-13 | 2013-01-07 |
| supports external dependencies | no | yes | yes | yes | yes | yes | yes | yes |
| takes external dependencies list from | N/A | arbitrary (default is ender.js) | arbitrary (default is component.json) | package.json | component.json | TODO | depends on the plugin | package.json (jam namespace) |
| name registry | N/A | [npmjs.org](https://npmjs.org) | [sindresorhus.com](http://sindresorhus.com/bower-components/) | [npmjs.org](https://npmjs.org) | [github.com](https://github.com) | TODO | depends on the plugin | [jamjs.org](http://jamjs.org/) |
| copies from git URL | N/A | yes | yes | yes | no | TODO | yes, if using a plugin (Bower, etc.) | no |
| copies from registry | N/A | yes | yes | yes | yes | TODO | yes, if using a plugin (Bower, etc.) | yes |
| copies from local directory | N/A | yes | yes | yes | no | TODO | yes, if using a plugin (Bower, etc.) | no |
| copies from archive URL | N/A | yes | yes | yes | no | TODO | yes, if using a plugin (Bower, etc.) | no |
| copies to | N/A | arbitrary (default is node_modules) | arbitrary (default is components) | node_modules | components | TODO | yes, if using a plugin (Bower, etc.) | jam |
| generates a single script | yes | yes | no, needs a loader or a generator | yes | yes | TODO | yes, if using a plugin (simple concatenation, Component, Jam, Browserify, etc.) | no (generates an Asynchronous Module Definition files for using with loaders) |
| generates a single stylesheet | no | no | no | no | yes | TODO | yes, if using Component plugin | no |
| exposes `require` to global scope | yes | yes | no | optionally (default is no) | yes | TODO | depends on the plugin | no |
| entry script type | plain browser script | plain browser script | depends on a loader or a generator | arbitrary | local component | TODO | depends on the plugin | plain browser script |
| defects | none | none | none | none | home page is down,<br>`component info component/tip` is broken | `npm install -g one` is broken | none | none |

## Omissions

There is also these monolithic [brunch.io](http://brunch.io/) by Brunch team, [hem](https://github.com/spine/hem) by Spine developers and [volo](https://github.com/volojs/volo) by Dojo Foundation.
They were excluded from this analysis, mainly because they try to do too many things and in a monolithic fashion.

Brunch has a word 'lightweight' in its tagline, and it's really just the opposite - project initialization created 1365 files using 15 MB, it took 1.8s to build the empty project and the initialized source code was in CoffeeScript. Liars.

Hem failed on `npm install -g hem`; has a broken link [in their page at npm registry](https://npmjs.org/package/hem); uses 'awesome' in its documentation; was originally made to complement [the Spine framework](http://spinejs.com/); uses a file called `slug.js` for configurations; written in and endorsing CoffeeScript. ewww.

Volo is compatible solely with Asynchronous Module Definition scripts.
It should not have been even mentioned (see the last sentence of introduction).

## Conclusions

It is best to upgrade from Browserify to [the Yeoman workflow](http://yeoman.io).
Use Yo for scaffolding, Grunt for integration, Bower for package management and [grunt-component-build](https://github.com/anthonyshort/grunt-component-build) (or [grunt-commonjs](https://github.com/avos/grunt-commonjs) with [commonjs loader](https://github.com/chrisabrams/commonjs)) for concatenation.

Browserify still is most simple if just basic package management with concatenation is needed and the NodeJS polyfilling bloat is insignificant.

# Bonus

When creating a package to be used as an external dependency, use [these Universal Module Definition templates](https://github.com/umdjs/umd) to make your package usable in every type of environment - AMD, CommonJS require, simple global, etc.

Another category of weapons is being developed - scaffolding generators.
Besides [grunt-init](http://gruntjs.com/project-scaffolding), there is a new tool in development - [Yo](http://yeoman.io).
Have a look at the skeletons its backend is offering - [the Yeoman generator system](https://github.com/yeoman/generator).

Lastly, here is [my "component" skeleton for grunt-init](https://jakut.is/git/GRUNTINITCOMPONENT/about/).
