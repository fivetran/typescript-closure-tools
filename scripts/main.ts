/// <reference path="../index/node.d.ts"/>

import finder = require('./finder');
import generate = require('./generate');

var symbols = finder.symbols('lib/closure-library/closure/goog/promise/promise.js');
var defs = generate.defs(symbols);
//console.log(symbols);
console.log(defs);