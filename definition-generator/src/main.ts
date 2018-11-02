/// <reference path="../index/mkdirp.d.ts"/>

import fs = require('fs');
import finder = require('./finder');
import generate = require('./generate');
import pretty_print = require('./pretty_print');
import options = require('./options');
import mkdirp = require('mkdirp');
require('colors');

export var currentInput: string;
export var currentOutput: string;

function bold(s: string): string {
    let a = <any>s
    return a.bold
}

function red(s: string): string {
    let a = <any>s
    return a.red
}

function green(s: string): string {
    let a = <any>s
    return a.green
}

options.todo.forEach(todo => {
    currentInput = todo.input;
    currentOutput = todo.output;

    try {
        var symbols = finder.symbols(todo.input);
        var defs = generate.defs(symbols);
        var pretty = pretty_print.pretty(defs);
        var parentPart = (/^.*\//).exec(todo.output) || [];
        var parentDir = parentPart[0] || '';

        mkdirp.sync(parentDir);

        if (fs.existsSync(todo.output) && fs.readFileSync(todo.output, 'utf8') === pretty) {
            console.error(green('No changes\t') + todo.output);
        } else {
            fs.writeFileSync(todo.output, pretty);
            console.error(red('Wrote\t') + todo.output);
        }
    } catch (e) {
        console.error(bold(red('ERROR\t')) + todo.input + ' ' + todo.output);
        throw e;
    }
});
