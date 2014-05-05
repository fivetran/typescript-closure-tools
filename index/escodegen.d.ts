/// <reference path="esprima.d.ts" />

declare module 'escodegen' {
    function generate(ast: esprima.Syntax.Program, options?: any);
}