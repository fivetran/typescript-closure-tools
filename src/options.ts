/// <reference path="../index/node.d.ts"/>

export interface InputOutput {
    input: string;
    output: string;
}

export var provides: string;
export var globals: string;
export var todo: InputOutput[] = [];

var options: string[] = process.argv.slice(2);

var findProvides = options.indexOf('--provides');
if (findProvides !== -1) {
    provides = options[findProvides + 1];
    options.splice(findProvides, 2);
}

var findGlobals = options.indexOf('--globals');
if (findGlobals !== -1) {
    globals = options[findGlobals + 1];
    options.splice(findGlobals, 2);
}

for (var i = 0; i < options.length; i += 2) {
    todo.push({
        input: options[i],
        output: options[i + 1]
    });
}