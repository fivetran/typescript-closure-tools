/// <reference path="../index/node.d.ts"/>

import finder = require('./finder');
import generate = require('./generate');
import pretty_print = require('./pretty_print');

var symbols = finder.symbols('lib/closure-library/closure/goog/promise/promise.js');
var defs = generate.defs(symbols);
var pretty = pretty_print.pretty(defs);

console.log(pretty);