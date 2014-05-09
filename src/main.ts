/// <reference path="../index/node.d.ts"/>
/// <reference path="../index/mkdirp.d.ts"/>
/// <reference path="../index/colors.d.ts"/>

import fs = require('fs');
import finder = require('./finder');
import generate = require('./generate');
import pretty_print = require('./pretty_print');
import options = require('./options');
import mkdirp = require('mkdirp');
require('colors');

export var currentInput: string;
export var currentOutput: string;

options.todo.forEach(todo => {
    currentInput = todo.input;
    currentOutput = todo.output;

    var symbols = finder.symbols(todo.input);
    var defs = generate.defs(symbols);
    var pretty = pretty_print.pretty(defs);
    var parentPart = (/^.*\//).exec(todo.output) || [];
    var parentDir = parentPart[0] || '';

    mkdirp.sync(parentDir);

    if (fs.existsSync(todo.output) && fs.readFileSync(todo.output, 'utf8') === pretty) {
        console.error('No changes\t'.green + todo.output);
    } else {
        fs.writeFile(todo.output, pretty);
        console.error('Wrote\t'.red + todo.output);
    }
});
