/// <reference path="../index/node.d.ts" />
/// <reference path="../index/typescript-services.d.ts" />

import fs = require('fs');
var ts = require('../lib/typescript-services/typescript_services.js');

module Main {

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