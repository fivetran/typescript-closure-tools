// Generated Thu May  1 21:07:33 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.promise {

    /**
     * Resolver interface for promises. The resolver is a convenience interface that
     * bundles the promise and its associated resolve and reject functions together,
     * for cases where the resolver needs to be persisted internally.
     *
     * @interface
     * @template TYPE
     */
    interface Resolver {
        promise: any /*missing*/;
        resolve: any /*missing*/;
        reject: any /*missing*/;
    }
}

