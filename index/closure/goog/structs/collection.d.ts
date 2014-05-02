// Generated Fri May  2 11:35:59 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.structs {

    /**
     * An interface for a collection of values.
     * @interface
     * @template T
     */
    interface Collection<T> {
        add(value: T): void;
        remove(value: T): void;
        contains(value: T): boolean;
        getCount(): number;
    }
}

