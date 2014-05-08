/// <reference path="../index/node.d.ts"/>

import fs = require('fs');
import finder = require('./finder');
import generate = require('./generate');
import pretty_print = require('./pretty_print');
import options = require('./options');

export var currentInput: string;
export var currentOutput: string;

options.todo.forEach(todo => {
    currentInput = todo.input;
    currentOutput = todo.output;

    var symbols = finder.symbols(todo.input);
    var defs = generate.defs(symbols);
    var pretty = pretty_print.pretty(defs);

    fs.writeFile(todo.output, pretty);
});
