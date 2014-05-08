/// <reference path="../index/node.d.ts"/>
/// <reference path="../index/mkdirp.d.ts"/>

import fs = require('fs');
import finder = require('./finder');
import generate = require('./generate');
import pretty_print = require('./pretty_print');
import options = require('./options');
import mkdirp = require('mkdirp');

export var currentInput: string;
export var currentOutput: string;

options.todo.forEach(todo => {
    console.error(todo.input + ' ' + todo.output);

    currentInput = todo.input;
    currentOutput = todo.output;

    var symbols = finder.symbols(todo.input);
    var defs = generate.defs(symbols);
    var pretty = pretty_print.pretty(defs);
    var parentDir = (/^.*\//).exec(todo.output)[0];

    mkdirp.sync(parentDir);
    fs.writeFile(todo.output, pretty);
});
