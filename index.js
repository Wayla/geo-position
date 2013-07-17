module.exports = getPosition;

function getPosition (fn) {
  navigator.geolocation.getCurrentPosition(onposition, onerror);

  function onposition (pos) {
    fn(null, pos);
  }

  function onerror (err) {
    fn(err);
  }
}
