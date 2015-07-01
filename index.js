'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var isReserved = {};

isReserved.LATEST = 7;
isReserved.ES7 = 7;
isReserved.ES6 = 6;
isReserved.ES5 = 5;
isReserved.ES3 = 3;
isReserved.ES2 = 2;
isReserved.ES1 = 1;

isReserved.keywords = {};

isReserved.keywords[isReserved.ES1] = ['do', 'if', 'in', 'for', 'new', 'try', 'var', 'case', 'else', 'enum', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'delete', 'export', 'import', 'return', 'switch', 'typeof', 'default', 'extends', 'finally', 'continue', 'debugger', 'function'];

isReserved.keywords[isReserved.ES2] = _ramda2['default'].union(['int', 'byte', 'char', 'goto', 'long', 'final', 'float', 'short', 'double', 'native', 'public', 'static', 'throws', 'boolean', 'package', 'private', 'abstract', 'volatile', 'interface', 'protected', 'transient', 'implements', 'instanceof', 'synchronized'], isReserved.keywords[isReserved.ES1]);

isReserved.keywords[isReserved.ES3] = isReserved.keywords[isReserved.ES2];

isReserved.keywords[isReserved.ES5] = _ramda2['default'].union(_ramda2['default'].difference(isReserved.keywords[isReserved.ES3], ['int', 'byte', 'char', 'goto', 'long', 'final', 'float', 'short', 'double', 'native', 'throws', 'boolean', 'abstract', 'volatile', 'transient', 'synchronized']), ['let', 'yield']);

isReserved.keywords[isReserved.ES6] = _ramda2['default'].union(['await'], isReserved.keywords[isReserved.ES5]);

isReserved.keywords[isReserved.ES7] = isReserved.keywords[isReserved.ES6];

isReserved.check = function (word) {
  var version = arguments[1] === undefined ? isReserved.LATEST : arguments[1];
  return _ramda2['default'].is(String, word) && _ramda2['default'].indexOf(word, isReserved.keywords[version] || []) >= 0;
};

exports['default'] = isReserved;
module.exports = exports['default'];

