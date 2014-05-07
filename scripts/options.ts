/// <reference path="../index/node.d.ts"/>

export var provides: string;
export var js: string[] = [];

var currentArgument;

process.argv.slice(2).forEach(name => {
    if (name === '--provides')
        currentArgument = 'provides';
    else if (name === '--js')
        currentArgument = 'js';
    else if (name.charAt(0) === '-')
        console.error('Usage: jsdoc2ts [--provides provides_file.tsv] --js source_file.js [more_source_files.js...]');
    else if (currentArgument === 'provides')
        provides = name;
    else if (currentArgument === 'js')
        js.push(name);
});