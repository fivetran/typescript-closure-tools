/// <reference path="../index/node.d.ts"/>

import generate = require('./generate');
import main = require('./main');
import finder = require('./finder');
import options = require('./options');

function common_prefix(x: string, y: string) {
    var n = 0;

    while (n < x.length && n < y.length && x.charAt(n) === y.charAt(n))
        n++;

    while (n > 0 && x.charAt(n - 1) !== '/')
        n--;

    return x.substring(0, n);
}

function drop_prefix(value: string, prefix: string) {
    if (value.substring(0, prefix.length) === prefix)
        return value.substring(prefix.length);
    else
        return value;
}

function unique(values: string[]): string[] {
    var acc = {};

    values.forEach(name => acc[name] = true);

    return Object.keys(acc);
}

export function pretty(out: generate.Generated): string {
    var acc = '';

    function emit_reference(filePath) {
        if (filePath && filePath !== main.currentInput) {
            var reference = drop_prefix(filePath, options.inputRoot);
            var output = drop_prefix(main.currentOutput, options.outputRoot);
            var common = common_prefix(reference, output);

            reference = drop_prefix(reference, common);
            output = drop_prefix(output, common);

            var goUp = output
                .split('/')
                .slice(1)
                .map(_ => '..')
                .join('/');

            if (goUp === '')
                goUp = '.';

            acc += '/// <reference path="' + goUp + '/' + reference + '" />\n';
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

    var files = out.references
        .map(finder.file)
        .filter(file => file !== null);
    unique(files).filter(file => file !== main.currentInput)
        .map(change_extension)
        .forEach(emit_reference);

    // TODO substitute goog.string
    // TODO break static imports

    Object.keys(out.modules).forEach(moduleName => {
        // TODO eliminate when https://typescript.codeplex.com/workitem/2490 is resolved

        function prettifyModule(moduleValue, modName: string, nesting: number, topLevel: boolean) {
            var safeName = modName.replace(/\bstring\b/, '_string');
            var smallNest = '';
            for (var i = 0; i < nesting - 1; i++)
                smallNest += '    ';

            if (moduleValue._comment)
                acc += smallNest + moduleValue._comment + '\n';

            if (topLevel)
                acc += '\ndeclare '

            acc += smallNest + 'module ' + safeName + ' {\n';
            var nest = smallNest + '    ';
            Object.keys(moduleValue).forEach(function (propertyName) {
                if (propertyName === '_comment')
                    return;

                var member = moduleValue[propertyName];
                if (member instanceof String || typeof member === 'string') {
                    member = member.replace(/\n/g, '\n' + nest);
                    acc += '\n' + nest + member + '\n';
                }
                else {
                    prettifyModule(member, propertyName, nesting + 1, false);
                }
            });
            acc += smallNest + '}\n';
        }

        prettifyModule(out.modules[moduleName], moduleName, 1, true);
    });

    return acc;
}