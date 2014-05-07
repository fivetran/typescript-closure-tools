/// <reference path="../index/node.d.ts"/>

import generate = require('./generate');

export function pretty(modules: generate.Generated): string {
    var acc = '';

    Object.keys(modules).forEach(moduleName => {
        var moduleValue = modules[moduleName];
        acc += '\ndeclare module ' + moduleName + ' {\n';

        Object.keys(moduleValue).forEach(function (propertyName) {
            var member = moduleValue[propertyName];

            member = member.replace(/\n/g, '\n    ');
            acc += '    ' + member + '\n';
        });

        acc += '}\n';
    });

    return acc;
}