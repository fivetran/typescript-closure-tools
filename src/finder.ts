/// <reference path="../index/node.d.ts"/>

import fs = require('fs');
import parser = require('./parser');
import combine = require('./combine');
import options = require('./options');

var fileByProvide: { [key: string]: string } = {};

fs.readFileSync(options.provides, 'utf8').split('\n').forEach(line => {
    var columns = line.split('\t');
    var file = columns[0];
    var symbol = columns[1];

    fileByProvide[symbol] = file;
});

interface FileCache {
    [fileName: string]: combine.Symbols;
}

var providesByFile: FileCache = {};

/**
 * @param symbolName
 * @returns file that goog.provide's name
 */
export function file(symbolName: string): string {
    return fileByProvide[symbolName];
}

/**
 * @param fileName
 * @returns value of name
 */
export function symbols(fileName: string): combine.Symbols {
    if (!providesByFile[fileName])
        providesByFile[fileName] = combine.members(parser.jsdoc(fileName));

    if (providesByFile[fileName])
        return providesByFile[fileName];
}

export function symbol(symbolName: string): combine.Symbol {
    var fileName = file(symbolName);

    if (fileName) {
        var s = symbols(fileName);

        return s.classes[symbolName] || s.modules[symbolName];
    }
    else
        return null;
}