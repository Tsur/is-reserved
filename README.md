# is it a reserved keyword ?

If your're wondering if some name is reserved in Javascript, make it sure by checking it out with is-reserved. It supports from ECMASCript 1 until ECMAScript 6 and even the ECMAScript 7 draft.

## Installation

```bash
$ npm install is-reserved
# or set it up globally
$ npm install is-reserved --global
```

## Command line tool

is-reserved was made to run right away from your terminal

```bash
$ is-reserved delete
```

You may specify the ECMAScript version with the option --es*

```bash
$ is-reserved delete --es6
```

For other options, just type $ is-reserved help

## Usage

It is also possible to use it programatically:

``` js
import isReserved from 'is-reserved';

console.log('is delete reserved on latest ECMAScript Version?', isReserved.check('delete'));
console.log('is delete reserved on ES6?', isReserved.check('delete', isReserved.ES6));
console.log('is delete reserved on ES2?', isReserved.check('delete', isReserved.ES2));

// List all reserved keywords for ES5
console.log(isReserved.keywords[isReserved.ES5]);

```

## Test

```
npm run test
```

## License

MIT