var w = window;
w.iwc = function(lazy) {
    var ns = 'demos.iwc';
    var updateTitle = function() {
        w.document.title = (lazy ? 'lazy' : 'instant') + '. ' + getClicks();
    };
    var getClicks = function() {
        try {
            return JSON.parse(w.store.get(ns + '.clicks'));
        } catch(e) {
            return 0;
        }
    };
    w.addEventListener('mousedown', function() {
        var clicks = getClicks();
        clicks += 1;
        w.store.set(ns + '.clicks', JSON.stringify(clicks));
        updateTitle();
    }, false);

    var check = (function() {
        var pclicks = getClicks();
        return function() {
            var clicks = getClicks();
            if(clicks !== pclicks) {
                updateTitle();
            }
        };
    })();

    if(lazy) {
        var loop = function() {
            check();
            w.requestAnimationFrame(loop);
        };
        w.requestAnimationFrame(loop);
    } else {
        if('onstorage' in w) {
            w.onstorage = check;
        } else {
            w.setInterval(check, 300);
        }
    }
};
