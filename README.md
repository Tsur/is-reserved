# is it a reserved keyword ?

If your're wondering if some keyword is reserved in Javascript, check it out with is-reserved. It supports from ECMASCript 1 until ECMAScript 6 and even the ECMAScript 7 draft.

## Installation

```bash
npm install is-reserved
# or set it up globally
npm install is-reserved --global
```

## Command line

is-reserved was made to run right away from your terminal

```bash
is-reserved delete
```

You may specifica the ECMAScript version with the option --es

```bash
is-reserved delete --es 6
```

## Usage

It is also possible to use it programatically:

``` js
import isReserved from 'is-reserved';

const isDeleteReserved = isReserved.check('delete', isReserved.ES6);

```

## Test

```
npm run test
```

## License

MIT