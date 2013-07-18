module.exports = getPosition;

function getPosition (opts, fn) {
  if (arguments.length == 1) {
    fn = opts;
    opts = {};
  }

  if (typeof opts.timeout == 'undefined') opts.timeout = 5000;
  var unlessTimedOut = createTimeoutHandler(fn, opts.timeout);

  var onposition = unlessTimedOut(fn.bind(this, null));
  var onerror = unlessTimedOut(fn.bind(this));

  navigator.geolocation.getCurrentPosition(onposition, onerror);
}

function createTimeoutHandler (fn, timeout) {
  var timedOut = false;

  var id = setTimeout(function () {
    timedOut = true;
    fn(new Error('timed out'));
  }, timeout);

  return function unlessTimedOut (fn) {
    return function () {
      if (timedOut) return;
      clearTimeout(id);
      fn.apply(null, arguments);
    }
  }
}
