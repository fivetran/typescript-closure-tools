declare module Extern {
    interface NumberFn {
        (x: number): number
    }
    interface ArrayOfNumbers extends Array<number> { }
    enum E { a, b, c }
    function foo(e: E);
}

Extern.foo(Extern.E.a);