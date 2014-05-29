interface Arguments extends IArguments { }

declare module goog {
    module _string { }

    export import string = _string;
}

declare class _Error implements Error {
    name: string;
    message: string;
}

declare class _Event implements Event {
    timeStamp: number;
    defaultPrevented: boolean;
    isTrusted: boolean;
    currentTarget: EventTarget;
    cancelBubble: boolean;
    target: EventTarget;
    eventPhase: number;
    cancelable: boolean;
    type: string;
    srcElement: Element;
    bubbles: boolean;
    initEvent(eventTypeArg: string, canBubbleArg: boolean, cancelableArg: boolean): void;
    stopPropagation(): void;
    stopImmediatePropagation(): void;
    preventDefault(): void;
    CAPTURING_PHASE: number;
    AT_TARGET: number;
    BUBBLING_PHASE: number;
}

interface _File extends File { }

interface _EventTarget extends EventTarget { }

interface Image extends HTMLImageElement { }

interface IThenable<R> {
    then<U>(onFulfilled: (value: R) => IThenable<U>,  onRejected: (error: any) => IThenable<U>): IThenable<U>;
    then<U>(onFulfilled: (value: R) => IThenable<U>, onRejected?: (error: any) => U): IThenable<U>;
    then<U>(onFulfilled: (value: R) => U, onRejected: (error: any) => IThenable<U>): IThenable<U>;
    then<U>(onFulfilled?: (value: R) => U, onRejected?: (error: any) => U): IThenable<U>;
}

interface IDBKeyType { }

interface IDBDatabaseException { }