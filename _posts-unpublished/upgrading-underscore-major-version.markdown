    var __ = {
      used: {},
      backup: {},
      enable: function () {
        for (var i in _) {
          (function (i, self) {

            if (typeof _[i] === 'function') {
              self.backup[i] = _[i];
              self.used[i] = false;
              _[i] = function (a, b, c) {
                self.used[i] = true;
                if(i === 'max' || i === 'zip') {
                  try {
                    throw new Error();
                  } catch(e) {
                    console.log(e.stack);
                  }
                }
                if (i === 'find' || i === 'findIndex') {
                  a.forEach(function (item) {
                    Object.keys(item).forEach(function (key) {
                      if (!item.hasOwnProperty(key)) {
                        console.log('WARNING', i, item, key, b);
                      }
                    });
                  });
                  //console.log('find', a, b);
                }
                return self.backup[i].apply(this, arguments);
              };
            }
          })(i, this);
        }
      },
      disable: function () {
        for (var i in _) {
          if (typeof _[i] === 'function') {
            if (this.used[i]) {
              console.log('used', i);
            }
            _[i] = this.backup[i];
          }
        }
      }
    }