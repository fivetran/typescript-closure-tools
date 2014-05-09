interface Arguments extends IArguments { }

declare module goog {
    module _string { }

    export import string = _string;
}

declare class _Error implements Error {
    name: string;
    message: string;
}

interface _File extends File { }

interface Image extends HTMLImageElement { }

interface IThenable<R> {
    then<U>(onFulfilled: (value: R) => IThenable<U>,  onRejected: (error: any) => IThenable<U>): IThenable<U>;
    then<U>(onFulfilled: (value: R) => IThenable<U>, onRejected?: (error: any) => U): IThenable<U>;
    then<U>(onFulfilled: (value: R) => U, onRejected: (error: any) => IThenable<U>): IThenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): IThenable<U>;
}

interface IDBKeyType { }

interface IDBDatabaseException { }