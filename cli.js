#!/usr/bin/env node

'use strict';

(function() {

  var _ = require('lodash');
  var argv = require('minimist')(process.argv.slice(2));
  var isReserved = require('./index.js');

  var printHelp = function(logger, exit) {

    logger = logger || console;
    exit = exit || true;

    logger.log(

      '\n',
      'Description:\tCheck if a name is reserved in Javascript',
      '\n\n Usage:',
      '\n\tis-reserved help',
      '\n\tis-reserved <word> <version>',
      '\n\n Options:',
      '\n\t-h, --help\n\t\tDisplay this help menu and exit',
      '\n\t-w, --word\n\t\tThe word to check',
      '\n\t-v, --version\n\t\tThe ECMAScript version to use',
      '\n\n Example:',
      '\n\tis-reserved delete',
      '\n\n'
    );

    if (exit) {

      process.exit(0);

    }

  };

  // Asking for help ?
  if ((_.isEmpty(argv._) && _.keys(argv).length === 1) || (typeof argv._[0] ===
    'string' && argv._[0].toLowerCase() === 'help')) return printHelp();

  function formatVersion(version) {

    if (!version) return isReserved.LATEST;

    var v = (version + '').replace(/es/gi, '');

    return v <= isReserved.LATEST ? v : isReserved.LATEST;

  }


  function checkIfReserved(options) {

    isReserved.check(options.word, options.version) ? console.log('yep ...', options.word, 'is RESERVED in ECMAScript', options.version) : console.log('NOT RESERVED in ECMAScript', options.version);
  }

  // Run it!
  (function() {

    var options = {};

    // Word
    options.word = argv['w'] || argv['word'] || argv['_'][0];

    // Version
    if (argv['es7']) options.version = 7;
    else if (argv['es6']) options.version = 6;
    else if (argv['es5']) options.version = 5;
    else if (argv['es3']) options.version = 3;
    else if (argv['es2']) options.version = 2;
    else if (argv['es1']) options.version = 1;
    else options.version = formatVersion(argv['v'] || argv['version'] || argv['_'][1]);

    checkIfReserved(options);

  })();

})();