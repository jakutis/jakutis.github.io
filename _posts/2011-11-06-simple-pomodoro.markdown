---
layout: post
title: !binary |-
  U2ltcGxlIFBvbW9kb3Jv
wordpress_id: 280
wordpress_url: !binary |-
  aHR0cHM6Ly9qYWt1dC5pcy8/cD0yODA=
date: 2011-11-06 19:11:38.000000000 +00:00
---
So this Sunday, instead of working, I worked on working and came up with this productivity tool [simple-pomodoro](https://jakut.is/simple-pomodoro/).
It is inpired by [The Pomodoro Technique](http://www.pomodorotechnique.com/).
Also, [@frgtn](http://twitter.com/frgtn) contributed the idea to make it a bit more universal than just a start-stop button and a timer: activity label, customizable time and the log with local storage were implemented. The source code:

{% highlight html %}
<html>
  <head>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-1.7.min.js"></script>
    <script src="https://jakut.is/dist/kizzy.min.js"></script>
    <script>
$(function() {
  var Util, Controller, Model, View, LogModel, LogView, LogController;
  Util = {
    lead : function(num, n) {
      num = String(num);
      n -= num.length;
      while(n--) {
        num = '0' + num;
      }
      return num;
    }
  };
  LogModel = function(controller) {
    this.controller = controller;
    this.cache = kizzy('pomodoro.html');
    this.log = this.cache.get('log') || this.cache.set('log', []);
    for(var i = 0; i < this.log.length; i++) {
      this.log[i].date = new Date(this.log[i].date);
    }
  };
  LogModel.prototype = {
    controller : null,
    clear : function() {
      this.log = [];
      this.cache.set('log', this.log);
    },
    add : function(log) {
      this.log.push(log);
      this.cache.set('log', this.log);
    }
  };
  LogView = function(parentNode, controller) {
    var self = this;
    this.log = $('<code style="white-space: pre; display: none">');
    this.clear = $('<button style="display: none">').text('clear').on('click', function() {
      self.controller.clear();
    });
    this.visible = false;
    this.controller = controller;
    parentNode.append(this.log).append(this.clear);
  };
  LogView.prototype = {
    log : null,
    clear : null,
    controller : null,
    visible : null,
    setVisible : function(visible) {
      this.visible = visible;
      this.log.css('display', visible ? 'block' : 'none');
      this.clear.css('display', visible ? '' : 'none');
    },
    getVisible : function() {
      return this.visible;
    },
    update : function(log) {
      this.log.text(log);
    }
  };
  LogController = function(parentNode) {
    this.model = new LogModel(this);
    this.view = new LogView(parentNode, this);
    this.view.update(this.getLogFile());
  };
  LogController.prototype = {
    model : null,
    view : null,
    getLogFile : function() {
      var text = '';
      for(var i = 0; i < this.model.log.length; i++) {
        var date = this.model.log[i].date;
        text += Util.lead(date.getFullYear(), 4) + '-' + Util.lead(date.getMonth(), 2) + '-' + Util.lead(date.getDate(), 2) + ' ' + Util.lead(date.getHours(), 2) + ':' + Util.lead(date.getMinutes(), 2) + ':' + Util.lead(date.getSeconds(), 2);
        text += ' ' + this.model.log[i].label + '\n';
      }
      return text;
    },
    clear : function() {
      this.model.clear();
      this.view.update('');
    },
    log : function(label) {
      var log;

      log = {
        date : new Date(),
        label : label
      };
      this.model.add(log);
      this.view.update(this.getLogFile());
    }
  };

  Controller = function(length, parentNode, logController) {
    this.onstop = [];
    this.onstart = [];
    this.logController = logController;
    this.length = length;

    this.model = new Model(this);
    this.view = new View(parentNode, this);
  };
  Controller.prototype = {
    length : null,
    model : null,
    view : null,
    onstart : null,
    onstop : null,
    logController : null,
    start : function(length, label) {
      this.length = length;

      for(var i = 0; i < this.onstart.length; i++) {
        this.onstart[i]();
      }

      this.model.start(label);
      this.update();
    },
    stop : function() {
      this.model.stop();
      this.update();

      for(var i = 0; i < this.onstop.length; i++) {
        this.onstop[i]();
      }
    },
    update : function() {
      this.view.update(this.model.getDiff());
    }
  };

  View = function(parentNode, controller) {
    var self, start, stop, log;

    self = this;
    start = $('<button>').text('start');
    stop = $('<button>').text('stop');
    log = $('<button>').text('show log');

    self.time = $('<input type="text" style="font-family: monospace">');
    self.label = $('<input type="text" style="font-family: monospace">');
    self.controller = controller;

    log.on('click', function() {
      self.controller.logController.view.setVisible(!self.controller.logController.view.getVisible());
      log.text(self.controller.logController.view.getVisible() ? 'hide log' : 'show log');
    });

    start.on('click', function() {
      var length;
      length = self.time.attr('value').split(':');
      if(length.length == 2) {
        var minutes = parseInt(length[0]);
        var seconds = parseInt(length[1]);
        if(minutes >= 0 && seconds >= 0 && seconds < 60) {
          self.controller.start(minutes * 60 + seconds, self.label.attr('value'));
          return;
        }
      }
      alert('incorrect time syntax! example for 25 minutes: 25:00');
    });

    stop.on('click', function() {
      self.controller.stop();
    }).attr('disabled', true);

    self.controller.onstop.push(function() {
      self.label.attr('disabled', false);
      start.attr('disabled', false);
      stop.attr('disabled', true);
    });

    self.controller.onstart.push(function() {
      self.label.attr('disabled', true);
      start.attr('disabled', true);
      stop.attr('disabled', false);
    });

    parentNode.append(self.time).append(self.label).append(start).append(stop).append(log);
    this.update(self.controller.length);
  };
  View.prototype = {
    controller : null,
    time : null,
    label : null,
    update : function(seconds) {
      var length;

      length = String(Math.floor(this.controller.length / 60)).length;
      if(seconds === null) {
        this.time.attr('value', Util.lead(0, length) + ':00');
      } else {
        this.time.attr('value', Util.lead(Math.floor(seconds / 60), length) + ':' + Util.lead(seconds % 60, 2));
      }
    }
  };

  Model = function(controller) {
    this.controller = controller;
  };
  Model.prototype = {
    controller : null,
    timeoutID : null,
    dateStart : null,
    getDiff : function() {
      var diff, self;

      self = this;
      if(this.isGoing()) {
        diff = this.controller.length - Math.round(((new Date()).getTime() - this.dateStart.getTime()) / 1000);
        if(diff <= 0) {
          self.controller.logController.log('pomodoro');
          self.controller.stop();
          return null;
        } else {
          return diff;
        }
      } else {
        return null;
      }
    },
    stop : function() {
      if(!this.isGoing()) {
        throw 'not going';
      }
      this.dateStart = null;
      window.clearTimeout(this.timeoutID);
      this.timeoutID = null;
      this.controller.logController.log('stop');
    },
    isGoing : function() {
      return this.timeoutID !== null;
    },
    start : function(label) {
      var self = this;
      if(this.isGoing()) {
        throw 'going';
      }
      self.controller.logController.log('start ' + self.controller.length + ' seconds of activity: ' + label);

      this.dateStart = new Date();
      this.timeoutID = window.setInterval(function() {
        self.controller.update();
      }, 1000);
      self.controller.update();
    }
  };

  var ctrlNode = $('<div>');
  var logNode = $('<div>');
  $(document.body).append(ctrlNode).append(logNode);
  new Controller(25*60, ctrlNode, new LogController(logNode));
});
    </script>
  </head>
  <body>
  </body>
</html>
{% endhighlight %}
