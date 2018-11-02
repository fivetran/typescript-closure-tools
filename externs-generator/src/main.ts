/// <reference path="../index/typescript-services.d.ts" />

import fs = require('fs');
var ts = require('./typescript_services.js');

module Main {

    var fileNames = process.argv.slice(2);

    // If user gave command line arguments, they are file names to process
    if (fileNames.length > 0) {
        fileNames.forEach(fileName => {
            var sourceText = fs.readFileSync(fileName, 'utf8');

            process_source(fileName, sourceText);
        })
    }
    // Otherwise use standard input
    else {
        var sourceText = '';
        process.stdin.setEncoding('utf8');
        process.stdin.on('readable', () => {
            sourceText += process.stdin.read();
        });
        process.stdin.on('end', () => {
            process_source('stdin', sourceText);
        });
    }

    function process_source(fileName: string, sourceText: string) {
        var parsed = ts.createSourceFile(fileName, sourceText, ts.ScriptTarget.ES5);

        find_interfaces(parsed);
    }

    function find_interfaces(node: ts.Node) {
        if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
            var interfaceDeclaration = <ts.InterfaceDeclaration> node;
            var interfaceName = '$$$' + interfaceDeclaration.name.text;

            process.stdout.write('var ' + interfaceName + ';\n');

            function print_members(member) {
                if (member) {
                    if (member.name) {
                        var declaration = <ts.Declaration> member;
                        var declarationName = declaration.name.text;

                        process.stdout.write(interfaceName + '.' + declarationName + ';\n');
                    }

                    if (member.type && member.type.members) {
                        member.type.members.forEach(print_members);
                    }
                }
            }

            interfaceDeclaration.members.forEach(print_members);

            process.stdout.write('\n');
        }

        ts.forEachChild(node, find_interfaces);
    }
}