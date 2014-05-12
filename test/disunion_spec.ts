/// <reference path="../index/node.d.ts"/>
/// <reference path="../index/doctrine.d.ts"/>
/// <reference path="../index/jasmine.d.ts"/>

import disunion = require('../src/disunion');

describe('disunion', () => {
    describe('outer', () => {
        it('should combine two arrays', () => {
            expect(disunion.outer([
                [1,2],
                [3,4]
            ])).toEqual([
                [1,3],
                [1,4],
                [2,3],
                [2,4]
            ]);
        });
        
        it('should combine three arrays', () => {
            expect(disunion.outer([
                [1,2],
                ['a','b'],
                ['x','y']
            ])).toEqual([
                [1,'a', 'x'],
                [1,'a', 'y'],
                [1,'b', 'x'],
                [1,'b', 'y'],
                [2,'a', 'x'],
                [2,'a', 'y'],
                [2,'b', 'x'],
                [2,'b', 'y']
            ]);
        });
    });

    describe('unload', () => {
        var a = {
            type: 'NameExpression',
            name: 'A'
        };
        var b = {
            type: 'NameExpression',
            name: 'B'
        };
        var c = {
            type: 'NameExpression',
            name: 'C'
        };
        var union = <doctrine.AnyType> {
            type: 'UnionType',
            elements: [a, b]
        };
        var unionUnion = <doctrine.AnyType> {
            type: 'UnionType',
            elements: [union, c]
        };

        it('should unload a union', () => {
            expect(disunion.unload(union)).toEqual([a, b]);
        });

        it('should unload a union of unions', () => {
            expect(disunion.unload(unionUnion)).toEqual([c, a, b]);
        });

        it('should unload an optional', () => {
            var unionOption = <doctrine.AnyType> {
                type: 'OptionalType',
                expression: union
            };
            var aOption = {
                type: 'OptionalType',
                expression: a
            };
            var bOption = {
                type: 'OptionalType',
                expression: b
            };
            expect(disunion.unload(unionOption)).toEqual([aOption, bOption]);
        });

        it('should unload a function', () => {
            var unionFunction = <doctrine.AnyType> {
                type: 'FunctionType',
                params: [union, a],
                result: b
            };
            var aFunction = {
                type: 'FunctionType',
                params: [a, a],
                result: b
            };
            var bFunction = {
                type: 'FunctionType',
                params: [b, a],
                result: b
            };
            expect(disunion.unload(unionFunction)).toEqual([aFunction, bFunction]);
        });

        it('should not unload a generic', () => {
            var genericUnion = <doctrine.AnyType> {
                type: 'TypeApplication',
                expression: a,
                applications: [union]
            };

            expect(disunion.unload(genericUnion)).toEqual([genericUnion]);
        });
    });
});