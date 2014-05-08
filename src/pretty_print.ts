/// <reference path="../index/node.d.ts"/>

import generate = require('./generate');
import main = require('./main');
import finder = require('./finder');
import options = require('./options');

function common_prefix(x: string, y: string) {
    var n = 0;

    while (n < x.length && n < y.length && x.charAt(n) === y.charAt(n))
        n++;

    return x.substring(0, n);
}

export function pretty(out: generate.Generated): string {
    var acc = '';

    function emit_reference(filePath) {
        if (filePath && filePath !== main.currentInput) {
            var common = common_prefix(filePath, main.currentOutput);
            var goUp = main.currentOutput
                .substring(common.length)
                .split('/')
                .slice(1)
                .map(_ => '..')
                .join('/');
            var goDown = filePath.substring(common.length);

            acc += '/// <reference path="' + goUp + '/' + goDown + '" />\n';
        }
    }

    function change_extension(filePath) {
        if (filePath && filePath.substring(filePath.length - 3) === '.js')
            return filePath.substring(0, filePath.length - 3) + '.d.ts';
        else
            return filePath;
    }

    if (options.globals)
        emit_reference(options.globals);

    out.references.forEach(symbol => emit_reference(change_extension(finder.file(symbol))));

    Object.keys(out.modules).forEach(moduleName => {
        var moduleValue = out.modules[moduleName];
        acc += '\ndeclare module ' + moduleName + ' {\n';

        Object.keys(moduleValue).forEach(function (propertyName) {
            var member = moduleValue[propertyName];

            member = member.replace(/\n/g, '\n    ');
            acc += '\n    ' + member + '\n';
        });

        acc += '}\n';
    });

    return acc;
}