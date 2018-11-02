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
        var safeName = moduleName.replace(/\bstring\b/, '_string');
        var moduleValue = out.modules[moduleName];

        acc += '\ndeclare module ' + safeName + ' {\n';

        Object.keys(moduleValue).forEach(function (propertyName) {
            var member = moduleValue[propertyName];

            member = member.replace(/\n/g, '\n    ');
            acc += '\n    ' + member + '\n';
        });

        acc += '}\n';
    });

    return acc;
}