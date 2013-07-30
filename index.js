var once = require('once');
var o = require('obj');

module.exports = getPosition;

function getPosition (opts, fn) {
  if (arguments.length == 1) {
    fn = opts;
    opts = {};
  }

  fn = once(fn);

  unlessDefined(opts, {
    timeout: 5000,
    maximumAge: 60000,
    enableHighAccuracy: true
  });

  navigator.geolocation.getCurrentPosition(onposition, fn, opts);

  function onposition (position) {
    fn(null, o(position.coords)
              .clone()
              .set('timestamp', position.timestamp)
              .get());
  };
}

function unlessDefined (base, xtend) {
  o(xtend).each(function (key, value) {
    if (typeof base[key] == 'undefined') base[key] = value;
  });
}

