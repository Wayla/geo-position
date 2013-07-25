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

  var onposition = fn.bind(null, null);
  var onerror = fn;

  navigator.geolocation.getCurrentPosition(onposition, onerror, opts);
}

function unlessDefined (base, xtend) {
  Object.keys(xtend).forEach(function (key) {
    if (typeof base[key] == 'undefined') base[key] = xtend[key];
  });
}
