/// <reference path="../index/node.d.ts" />
/// <reference path="../index/typescript-services.d.ts" />

import ts = require('typescript-services');
import fs = require('fs');

module Main {

    function find_interfaces(node: ts.Node) {
        if (node.kind === ts.SyntaxKind.InterfaceDeclaration) {
            var interfaceDeclaration = <ts.InterfaceDeclaration> node;
            var interfaceName = interfaceDeclaration.name.text;

            interfaceDeclaration.members.forEach(member => {
                if (member.hasOwnProperty('name')) {
                    var declaration = <ts.Declaration> member;
                    var declarationName = declaration.name.text;

                    process.stdout.write(interfaceName + '.' + declarationName + ';\n');
                }
            });

            process.stdout.write('\n');
        }

        ts.forEachChild(node, find_interfaces);
    }

    var sourceText = '';
    process.stdin.setEncoding('utf8');
    process.stdin.on('readable', () => {
        sourceText += process.stdin.read();
    });
    process.stdin.on('end', () => {
        var parsed = ts.createSourceFile("stdin", sourceText, ts.ScriptTarget.ES5);

        find_interfaces(parsed);
    });
}