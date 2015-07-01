import isReserved from './index.es6';

console.log('is let reserved on latest ECMAScript Version?', isReserved.check('let'));
console.log('is let reserved on ES6?', isReserved.check('let', isReserved.ES6));
console.log('is let reserved on ES2?', isReserved.check('let', isReserved.ES2));

// List all reserved keywords for ES5
console.log(isReserved.keywords[isReserved.ES5]);