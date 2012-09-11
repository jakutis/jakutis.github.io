var w = window;
w.iwc = (function() {
    var ns = 'demos.iwc', broadcast, listen, w3 = !!w.addEventListener, get, set;

    var test = function(name, obj) {
        try {
            return typeof obj[name] !== 'undefined' && obj[name];
        } catch(e) {
            return false;
        }
    };

    var storage = null;
    if(test('ActiveXObject', w)) {
        (function() {
                    var storageOwner, storageContainer;
                    // Since #userData storage applies only to specific paths, we need to
                    // somehow link our data to a specific path.  We choose /favicon.ico
                    // as a pretty safe option, since all browsers already make a request to
                    // this URL anyway and being a 404 will not hurt us here.  We wrap an
                    // iframe pointing to the favicon in an ActiveXObject(htmlfile) object
                    // (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)
                    // since the iframe access rules appear to allow direct access and
                    // manipulation of the document element, even for a 404 page.  This
                    // document can be used instead of the current document (which would
                    // have been limited to the current path) to perform #userData storage.
                    try {
                            storageContainer = new w.ActiveXObject('htmlfile');
                            storageContainer.open();
                            storageContainer.write('<s' + 'cript>document.w=window</s' + 'cript><iframe src="/favicon.ico"></frame>');
                            storageContainer.close();
                            storageOwner = storageContainer.w.frames[0].document;
                            storage = storageOwner.createElement('div');
                    } catch(e) {
                            // somehow ActiveXObject instantiation failed (perhaps some special
                            // security settings or otherwse), fall back to per-path storage
                            storage = w.document.createElement('div');
                            storageOwner = w.document.body;
                    }
                    function withIEStorage(storeFunction) {
                            return function() {
                                    var args = Array.prototype.slice.call(arguments, 0);
                                    args.unshift(storage);
                                    // See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx
                                    // and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx
                                    storageOwner.appendChild(storage);
                                    storage.addBehavior('#default#userData');
                                    storage.load('localStorage');
                                    var result = storeFunction.apply(null, args);
                                    storageOwner.removeChild(storage);
                                    return result;
                            };
                    }

                    // In IE7, keys may not contain special chars. See all of https://github.com/marcuswestin/store.js/issues/40
                    var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g");
                    function ieKeyFix(key) {
                            return key.replace(forbiddenCharsRegex, '___');
                    }
                    set = withIEStorage(function(storage, key, val) {
                            key = ieKeyFix(key);
                            storage.setAttribute(key, val);
                            storage.save('localStorage');
                    });
                    get = withIEStorage(function(storage, key) {
                            key = ieKeyFix(key);
                            var value = storage.getAttribute(key);
                            if(typeof value === 'undefined' || value === null) {
                                return '';
                            } else {
                                return value.toString();
                            }
                    });
        })();
    } else {
        if(test('localStorage', w)) {
            storage = w.localStorage;
        } else if(test('globalStorage', w) && test(w.location.hostname, w.globalStorage)) {
            storage = w.globalStorage[w.location.hostname];
        }
        if(storage !== null) {
            set = function(key, value) {
                storage.setItem(key, value);
            };
            get = function(key) {
                var value = storage.getItem(key);
                if(typeof value === 'undefined' || value === null) {
                    return '';
                } else {
                    return value.toString();
                }
            };
        } else {
            return null;
        }
    }
    /*
    //TODO remove
    w.log([get,set]);
    get = (function(get) {
        return function(key) {
            var value = get(key);
            w.log('get', key, value);
            return value;
        };
    })(get);
    set = (function(set) {
        return function(key, value) {
            set(key, value);
            w.log('set', key, value);
        };
    })(set);
    */

    if('SharedWorker' in w) {
        //w.log('sharedworker');
        (function() {
            broadcast = function(data) {
                worker.port.postMessage(data);
            };
            var worker = new w.SharedWorker('iwc-worker.js');
            listen = function(cb) {
                if(w3) {
                    worker.port.addEventListener('message', function(e) {
                        cb(e.data);
                    }, false);
                } else {
                    worker.port.attachEvent('onmessage', function(e) {
                        cb(e.data);
                    });
                }
            };
            worker.port.start();
        })();
    } else {
        (function() {
            var check, getCount, checkedCount, listeners = [];
            getCount = function() {
                var count = get(ns + '.count');
                try {
                    count = parseInt(count, 10);
                    return isNaN(count) ? 0 : count;
                } catch(e) {
                    return 0;
                }
            };
            checkedCount = getCount();
            broadcast = function(data) {
                var count = (getCount() + 1).toString();
                set(ns + '.' + count, JSON.stringify(data));
                set(ns + '.count', count);
            };
            listen = function(cb) {
                listeners.push(cb);
            };
            check = function() {
                var count = getCount();
                if(count !== checkedCount) {
                    for(var i = checkedCount + 1; i <= count; i += 1) {
                        var data = JSON.parse(get(ns + '.' + i));
                        for(var j = 0; j < listeners.length; j += 1) {
                            listeners[j](data);
                        }
                    }
                    checkedCount = count;
                }
            };
            if('onstorage' in w) {
                //w.log('onstorage');
                if(w3) {
                    w.addEventListener('storage', check, false);
                } else {
                    w.attachEvent('onstorage', check);
                }
            } else {
                //w.log('interval');
                w.setInterval(check, 300);
            }
        })();
    }
    return {
        listen : listen,
        broadcast : broadcast
    };
})();
