import parser = require('./parser');

export interface Symbol {
    [member: string]: parser.Value
}

export interface Symbols {
    classes: { [name: string]: Symbol };
    modules: { [name: string]: Symbol };
}

function set_deep(parent, keys, value) {
    for (var i = 0; i < keys.length - 1; i++)
        parent = parent[keys[i]] || (parent[keys[i]] = {});

    parent[keys[i]] = value;
}

/**
 * Combine classes, interfaces, and modules
 *
 * @param file
 * @returns {Symbols}
 */
export function members(file: parser.File): Symbols {
    var acc: Symbols = {
        classes: {},
        modules: {}
    };

    Object.keys(file).forEach(name => {
        var symbol: parser.Value = file[name];

        // Class and constructor
        if (symbol.jsdoc.tags.some(t => t.title === 'interface') ||
            symbol.jsdoc.tags.some(t => t.title === 'constructor')) {
            acc.classes[name] = { '': symbol };
        }
        // Member of class or interface
        else if (name.indexOf('.prototype.') !== -1) {
            var parts = name.split('.prototype.');
            var className = parts[0];
            var memberName = parts[1];

            if (acc.classes[className])
                acc.classes[className][memberName] = symbol;
        }
        // Static member of module
        else {
            var dot = name.lastIndexOf('.');
            var moduleName = name.substring(0, dot);
            var memberName = name.substring(dot + 1);

            if (!acc.modules[moduleName])
                acc.modules[moduleName] = {};

            acc.modules[moduleName][memberName] = symbol;
        }
    });

    return acc;
}
