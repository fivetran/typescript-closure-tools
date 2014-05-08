/// <reference path="../index/node.d.ts"/>

import generate = require('./generate');
import main = require('./main');
import finder = require('./finder');

function common_prefix(x: string, y: string) {
    var n = 0;

    while (n < x.length && n < y.length && x.charAt(n) === y.charAt(n))
        n++;

    return x.substring(0, n);
}

export function pretty(out: generate.Generated): string {
    var acc = '';

    out.references.forEach(symbol => {
        var filePath = finder.file(symbol);
        if (filePath && filePath !== main.currentInput) {
            var common = common_prefix(filePath, main.currentOutput);
            var goUp = main.currentOutput
                .substring(common.length)
                .split('.')
                .slice(1)
                .map(_ => '..')
                .join('/');
            var goDown = filePath.substring(common.length);

            acc += '/// <reference path="' + goUp + '/' + goDown + '.d.ts" />\n';
        }
    });

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