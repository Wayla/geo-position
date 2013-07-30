module.exports = getPosition;

function getPosition (opts, fn) {
  if (arguments.length == 1) {
    fn = opts;
    opts = {};
  }

  unlessDefined(opts, {
    timeout: 5000,
    maximumAge: 60000,
    enableHighAccuracy: true
  });

  var once = Once();
  var onposition = once(function (position) {
    var ret = clone(position.coords);
    ret.timestamp = position.timestamp;
    fn(null, ret);
  });
  var onerror = once(fn);

  navigator.geolocation.getCurrentPosition(onposition, onerror, opts);
}

function unlessDefined (base, xtend) {
  Object.keys(xtend).forEach(function (key) {
    if (typeof base[key] == 'undefined') base[key] = xtend[key];
  });
}

function Once () {
  var called = false;
  return function (fn) {
    return function () {
      if (called) return;
      called = true;
      fn.apply(this, arguments);
    }
  }
}

function clone (obj) {
  var ret = {};
  Object.keys(obj).forEach(function (k) {
    ret[k] = obj[k];
  });
  return ret;
}

