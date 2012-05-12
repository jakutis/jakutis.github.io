---
layout: post
title: !binary |-
  U3RhdGUgb2YgSmF2YVNjcmlwdCB0ZXN0aW5n
wordpress_id: 309
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0zMDk=
date: 2012-01-04 18:21:36.000000000 +00:00
---
If you are just starting your JavaScript application development, you will need to write tests for your code. To help you with that, I've filtered an ordered (better ones on top) list of consideration-worth tools from [Node.JS modules](https://github.com/joyent/node/wiki/modules) and Google. If you found a bug (there is a good tool not mentioned here, some tool is not working, etc.) in this post, please report it by writing a comment. **CLI** marks that the candidate has command line tool to run and display test results. **WIP** marks that the candidate is under heavy development.

### Browser Acceptance Testing

1.  [zombie](https://github.com/assaf/zombie) is a lightweight framework for testing client-side JavaScript code in a simulated environment.
2.  [tobi](https://github.com/LearnBoost/tobi) allows you to test your web application as if it were a browser.
3.  [soda](https://github.com/LearnBoost/soda) (and [soda-runner](https://github.com/doug-martin/soda-runner)) is a light-weight Selenium RC client for Node.JS with additional [Sauce Labs](http://saucelabs.com/) integration for acceptance testing in the cloud.
4.  [js-test-driver](http://code.google.com/p/js-test-driver/) is a test runner which easily integrates with continuous builds systems and allows running tests on multiple browsers quickly to ease TDD style development.

### Generic TDD and BDD

1.   [mocha](https://github.com/visionmedia/mocha) is a simple, flexible, fun JavaScript test framework for Node.JS and the browser. [tutorial](http://www.adomokos.com/2012/01/javascript-testing-with-mocha.html)
2.   [Vows](http://vowsjs.org/) gives you synchronous behaviour driven development for Node.JS. **CLI**
3.   [should.js](https://github.com/visionmedia/should.js) is an expressive, readable, test framework agnostic, assertion library for Node.JS.
4.   [shoulda.js](https://github.com/philc/shoulda.js) is a micro JavaScript unit testing framework inspired by Shoulda for Ruby.
5.   [Chai](http://chaijs.com/) is a BDD / TDD assertion library for node and the browser that can be delightfully paired with any javascript testing framework
6.   [Nodeunit](https://github.com/caolan/nodeunit) provides easy async unit testing for Node.JS and the browser. **CLI**
7.   [node-qunit](https://github.com/kof/node-qunit) is a port of [QUnit](http://github.com/jquery/qunit) unit testing framework to Node.JS. **CLI**
8.   [Cucumber.js](https://github.com/cucumber/cucumber-js) is the popular Behaviour-Driven Development tool, brought to your JavaScript stack. It runs on both Node.JS and modern web browsers. **CLI** **WIP**
9.   [kyuri](https://github.com/nodejitsu/kyuri) is a Node.JS Cucumber implementation with a few extra asynchronous keywords. It supports 160+ languages and exports to VowsJS stubs.
10.  [jasmine](https://github.com/pivotal/jasmine) (and [jasmine-node](https://github.com/mhevery/jasmine-node), and [jessie](https://github.com/futuresimple/jessie)) is a behavior-driven development framework for testing your JavaScript code. **CLI** (used by [jmpress.js](http://shama.github.com/jmpress.js/))
11.  [node-stories](https://github.com/tobiassvn/node-stories) gives you lightweight Given/When/Then/And/But blocks with async-support for Node.JS.
12.  [patr](https://github.com/kriszyp/patr) is a very simple, easy-to-use test runner that support asynchronous JavaScript testing with promises. Part of [Persevere](http://www.persvr.org/) project.
13.  [YUI Test](http://developer.yahoo.com/yui/yuitest/) is a testing framework for browser-based JavaScript solutions.
15.  [Buster.JS](http://busterjs.org/) is a JavaScript test framework for node and browsers.
16.  [Testosterone](https://github.com/masylum/testosterone) allows you to follow BDD or TDD on any of your projects using the same testing library. **CLI**
17.  [whiskey](https://github.com/cloudkick/whiskey) is a powerful test runner for Node.JS applications. **CLI**
18.  [Twerp](https://github.com/philjackson/twerp) is a really simple, class based testing framework for Node.JS and CoffeeScript. **CLI**

### Mocking

1.   [Sinon.JS](https://github.com/cjohansen/sinon.js) gives you standalone and test framework agnostic test spies, stubs and mocks.
2.   [Gently](https://github.com/felixge/node-gently) helps with stubbing and behavior verification. It allows you to test the most remote and nested corners of your code while keeping being fully unobtrusive.
3.   [Nock](https://github.com/pgte/nock) is an HTTP mocking and expectations library for Node.JS.
4.   [Node Mock](https://github.com/arunoda/nodemock) is a very simple to use mocking framework which can be used to mock functions in JavaScript objects. NodeMock creates mock methods in less code with more expressive manner.
5.   [Horaa](https://github.com/arunoda/horaa) mocks internal Node.JS modules.
6.   [Mockery](https://github.com/mfncooper/mockery) lets you work more easily with your framework of choice (or no framework) to get your mocks hooked in to all the right places in the code you need to test. Not a mocking framework.
7.   [Node Replay](https://github.com/assaf/node-replay) records and replays HTTP responses like a boss!!!11
8.   [httpmock](https://github.com/bbyars/httpmock) is a library for stubbing out web services without changing the system under test. It's designed for functional testing.
9.   [tbd](https://github.com/aaronpowell/tbd) allows you to generate some test data quickly and painlessly. Works with Node.JS and browser.
10.  [MaryJane](https://github.com/dhasenan/maryjane) is a mock objects library for javascript, inspired heavily by Mockito. It uses the Arrange-Act-Assert pattern.

### Continuous Integration

1.   [TestSwarm](https://github.com/jquery/testswarm) (and a plugin for Jenkins [jenkins-testswarm](https://github.com/appendto/jenkins-testswarm)) gives you distributed continuous integration (used by jQuery at [swarm.jquery.org](http://swarm.jquery.org/)).

