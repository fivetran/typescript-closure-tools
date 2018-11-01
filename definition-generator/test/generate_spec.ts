/// <reference path="../index/node.d.ts"/>
/// <reference path="../index/jasmine.d.ts"/>

import fs = require('fs');
import options = require('../src/options');

options.provides = 'test/symbols.tsv';

import parser = require('../src/parser');
import combine = require('../src/combine');
import generate = require('../src/generate');

function parse(fileName: string): generate.Modules {
    var file = parser.jsdoc(fs.readFileSync(fileName, 'utf8'));
    var symbols = combine.members(file);
    var result = generate.defs(symbols).modules;

    Object.keys(result).forEach(moduleName => {
        function get_text(mod : any) :any{
            var parsed = {};
            Object.keys(mod).forEach(memberName => {
                var text = mod[memberName];
                if(text instanceof String || typeof text === 'string'){
                    var noComments = text.replace(/\/\*\*[^]*?\*\//g, '');
                    var simpleSpace = noComments.replace(/\s+/g, ' ').trim();

                    parsed[memberName] = simpleSpace;
                }
                else{
                    parsed[memberName] = get_text(text);
                }
            });         

            return parsed;   
        }

        result[moduleName] = get_text(result[moduleName]);
    });

    return result;
}

describe('generate', () => {

    it('class', () => {
        expect(parse('test/class.js')).toEqual({
            "example": {
                "Class": "class Class extends Class__Class { } class Class__Class implements example.Interface { constructor(x: number|string); thisAssignment: string; thisDeclaration: number; overloadedMethod(x: number|string): void; interfaceMethod(x: number|string): void; }"
            }
        });
    });

    it('interface', () => {
        expect(parse('test/interface.js')).toEqual({
            "example": {
                "Interface": "interface Interface { interfaceMethod(x: number|string): void; }"
            }
        });
    });

    it('function with missing @param', () => {
        expect(parse('test/missing_params.js')).toEqual({
            "example": {
                "missingParams": "function missingParams(x: any /* jsdoc error */, y: any /* jsdoc error */): void;",
                '_comment': ''
            }
        });
    });

    it('function with no arguments', () => {
        expect(parse('test/no_params.js')).toEqual({
            "example": {
                "noParams": "function noParams(): void;",
                '_comment': ''
            }
        });
    });

    it('nested modules', () => {
        expect(parse('test/nested_modules.js')).toEqual({
            "nested": {
                "submodule": {"_comment": ''},
                '_comment': ''
            }
        });
    });

    it('overloaded function', () => {
        expect(parse('test/overloaded_function.js')).toEqual({
            "example": {
                "overloadedFunction": "function overloadedFunction(x: number|string): void;",
                '_comment': ''
            }
        });
    });

    it('subclass', () => {
        expect(parse('test/subclass.js')).toEqual({
            "example": {
                "SubClass": "class SubClass extends SubClass__Class { } class SubClass__Class extends example.Class__Class { constructor(); }"
            }
        });
    });

    it('subinterface', () => {
        expect(parse('test/subinterface.js')).toEqual({
            "example": {
                "SubInterface": "interface SubInterface extends example.Interface { }"
            }
        });
    });

    it('typedef array', () => {
        expect(parse('test/typedef_array.js')).toEqual({
            "example": {
                "ArrayType": "interface ArrayType extends Array<string> { }",
                '_comment': ''
            }
        });
    });

    it('typedef bang', () => {
        expect(parse('test/typedef_bang.js')).toEqual({
            "example": {
                "BangType": "interface BangType extends Array<string> { }",
                '_comment': ''
            }
        });
    });

    it('typedef union', () => {
        expect(parse('test/typedef_union.js')).toEqual({
            "example": {
                "UnionType": 'type UnionType = string|number;',
                "unionFunction" : 'function unionFunction(x: example.UnionType): void;',
                "genericUnionFunction" : 'function genericUnionFunction(x: example.UnionType<any>): void;',
                '_comment': ''
            }
        });
    });

    describe('requirejs', () => {
        it('function declaration', () => {
            expect(parse('test/requirejs_function_declaration.js')).toEqual({
                MODULE : {
                    functionDeclaration : 'function functionDeclaration(x: number): void;',
                    '_comment': ''
                }
            });
        });

        it('function expression', () => {
            expect(parse('test/requirejs_function_expression.js')).toEqual({
                MODULE : {
                    functionExpression : 'function functionExpression(x: number): void;',
                    '_comment': ''
                }
            });
        });

        it('local class', () => {
            expect(parse('test/requirejs_local_class.js')).toEqual({
                MODULE : {
                    LocalClass : 'class LocalClass extends LocalClass__Class { } class LocalClass__Class { constructor(x: number); memberFunction(x: number): void; }'
                }
            });
        });

        it('local variable', () => {
            expect(parse('test/requirejs_local_variable.js')).toEqual({
                MODULE: {
                    localVariable: 'var localVariable: number;',
                    '_comment': ''
                }
            });
        });
    });

});
