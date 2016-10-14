# redirect.js

redirect to URI

## Installation

```sh
$ npm install sasaplus1-prototype/redirect.js
```

## Usage

via `require()`

```js
var redirect = require('redirect');
```

via `<script>`

```html
<script src="redirect.min.js"></script>
```

### Example

```js
location.href;
// => "https://github.com/sasaplus1-prototype/redirect.js"

redirect.generate({
  protocol: 'http:',
  pathname: '/sasaplus1'
});
// => "http://github.com/sasaplus1"

redirect.generate({
  hash: '#license'
});
// => "https://github.com/sasaplus1-prototype/redirect.js#license"

redirect.generate({
  pathname: '/sasaplus1-prototype',
  search: '?query=.js'
});
// => "https://github.com/sasaplus1-prototype?query=.js"

redirect.redirect({
  pathname: '/sasaplus1-prototype',
  search: '?query=.js'
});
// redirect to https://github.com/sasaplus1-prototype?query=.js
```

## Functions

### generate([replaces])

- `replaces`
  - `Object`

generate replaced URI.

`replaces` keys are below:

- protocol
- hostname
- port
- pathname
- search
- hash

### redirect([replaces])

- `replaces`
  - `Object`

redirect to replaced URI.

## License

The MIT license.
