
# geo-position

A more sane wrapper around browsers' position apis.

## Usage

```js
var getPosition = require('geo-position');

getPosition(function (err, pos) {
  if (err) throw err;
  console.log(pos);
  // => { longitude: 10.33334, latitude: -2.4421 ... }
});
```

## API

### getPosition([options], fn(err, pos))

Request the current geposition and call fn with the possible error - caused
e.g. by permission conflicts or hardware problems - and the current position.

`options` are passed down to the browser's geolocation api, but some sensible
defaults are set, if you don't override them:

```json
{
  "timeout": 5000,
  "maximumAge": 60000,
  "highAccuracy": true  
}
```

The result object also is changed, instead of

```json
{
  "timestamp": 1374719989787,
  "coords": { "latitude": ... }
}
```

it's just a flat object with the `timestamps` attribute on itself:

```json
{
  "accuracy": 27,
  "altitude": null,
  "altitudeAccuracy": null,
  "heading": null,
  "latitude": 40.721600300000006,
  "longitude": -74.0018673,
  "speed": null,
  "timestamp": 1374719989787  
}
```

## Installation

With [npm](http://npmjs.org) do

```bash
$ npm install geo-position
```

Then bundle for the client using [browserify](http://browserify.org/).

## License

Copyright (c) 2013 Julian Gruber &lt;julian@wayla.com&gt;

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
