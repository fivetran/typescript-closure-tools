/// <reference path="../index/node.d.ts"/>

export interface InputOutput {
    input: string;
    output: string;
}

export var provides: string;
export var todo: InputOutput[] = [];

var options = process.argv.slice(2);

if (options[0] === '--provides') {
    provides = options[1];
    options = options.slice(2);
}

for (var i = 0; i < options.length; i += 2) {
    todo.push({
        input: options[i],
        output: options[i + 1]
    });
}