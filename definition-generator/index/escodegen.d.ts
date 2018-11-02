/// <reference path="esprima.d.ts" />

declare module 'escodegen' {
    function generate(ast: estree.Program, options?: any): string;
}