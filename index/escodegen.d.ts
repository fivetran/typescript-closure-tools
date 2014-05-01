/// <reference path="esprima.d.ts" />

declare module 'escodegen' {
    function generate(ast: syntax.Tree, options?: any);
}