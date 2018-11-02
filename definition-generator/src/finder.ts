import fs = require('fs');
import parser = require('./parser');
import combine = require('./combine');
import options = require('./options');

var fileByProvide: { [key: string]: string } = {};

interface FileCache {
    [fileName: string]: combine.Symbols;
}

var providesByFile: FileCache = {};

function parent_symbol(name: string) {
    var dot = name.lastIndexOf('.');

    return name.substring(0, dot);
}

/**
 * @param symbolName
 * @returns file that goog.provide's name
 */
export function file(symbolName: string): string {
    if (symbolName)
        return fileByProvide[symbolName] || file(parent_symbol(symbolName));
    else
        return null;
}

/**
 * @param fileName
 * @returns value of name
 */
export function symbols(fileName: string): combine.Symbols {
    if (!providesByFile[fileName])
        providesByFile[fileName] = combine.members(parser.jsdoc(fs.readFileSync(fileName, 'utf8')));

    if (providesByFile[fileName])
        return providesByFile[fileName];
}

export function symbol(symbolName: string): combine.Symbol {
    var fileName = file(symbolName);

    if (fileName) {
        var s = symbols(fileName);

        return s.classes[symbolName] || s.modules[symbolName];
    } else return null;
}

export function member(symbolName: string): parser.Value {
    var fileName = file(symbolName);

    if (fileName) {
        var s = symbols(fileName);
        var dot = symbolName.lastIndexOf('.');
        var moduleName = symbolName.substring(0, dot);
        var memberName = symbolName.substring(dot + 1);
        var moduleValue = s.modules[moduleName] || {};

        return moduleValue[memberName] || null;
    } else return null;

}

// If user gives a TSV file with provided symbols, use that
if (options.provides) {
    fs.readFileSync(options.provides, 'utf8').split('\n').forEach(line => {
        var columns = line.split('\t');
        var file = columns[0];
        var symbol = columns[1];

        fileByProvide[symbol] = file;
    });
}
// Otherwise parse all inputs
else {
    options.todo.forEach(todo => {
        var found = symbols(todo.input);
        var classNames = Object.keys(found.classes);
        var moduleNames = Object.keys(found.modules);
        var names = classNames.concat(moduleNames);

        names.forEach(name => fileByProvide[name] = todo.input);
    });
}