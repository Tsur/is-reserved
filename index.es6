"use strict";

import R form 'ramda';

class isReserved{

  constructor(){

    this.keywords = {};

    this.keywords[isReserved.ES1] = [ 'do', 'if', 'in', 'for', 'new', 'try', 'var', 'case', 'else', 'enum', 'null', 'this', 'true', 'void', 'with', 'break', 'catch', 'class', 'const', 'false', 'super', 'throw', 'while', 'delete', 'export', 'import', 'return', 'switch', 'typeof', 'default', 'extends', 'finally', 'continue', 'debugger', 'function'];

    this.keywords[isReserved.ES2] = R.union(['int', 'byte', 'char', 'goto', 'long', 'final', 'float', 'short', 'double', 'native', 'public', 'static', 'throws', 'boolean', 'package', 'private', 'abstract', 'volatile', 'interface', 'protected', 'transient', 'implements', 'instanceof', 'synchronized'], this.keywords[isReserved.ES1]);

    this.keywords[isReserved.ES3] = this.keywords[isReserved.ES2];

    this.keywords[isReserved.ES5] = R.union(R.difference(['int', 'byte', 'char', 'goto', 'long', 'final', 'float', 'short', 'double', 'native', 'throws', 'boolean', 'abstract', 'volatile', 'transient', 'synchronized'], this.keywords[isReserved.ES3]), ['let', 'yield']);

    this.keywords[isReserved.ES6] = R.union(['await'], this.keywords[isReserved.ES5]);

    this.keywords[isReserved.ES7] = this.keywords[isReserved.ES6];

  }

  check(word, version=isReserved.LATEST){ return R.is(String, word) && R.indexOf(word.toLowerCase(), this.keywords[version] || []); }

}

isReserved.LATEST = 7;
isReserved.ES7 = 7;
isReserved.ES6 = 6;
isReserved.ES5 = 5;
isReserved.ES3 = 3;
isReserved.ES2 = 2;
isReserved.ES1 = 1;

export default new isReserved();
