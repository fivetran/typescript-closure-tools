/// <reference path="../../../closure/goog/base.d.ts" />

declare module goog.promise {

    /**
     * Resolver interface for promises. The resolver is a convenience interface that
     * bundles the promise and its associated resolve and reject functions together,
     * for cases where the resolver needs to be persisted internally.
     *
     * @interface
     * @template TYPE
     */
    interface Resolver<TYPE> {
    
        /**
         * The promise that created this resolver.
         * @const {!goog.Promise.<TYPE>}
         */
        promise: any /*missing*/;
    
        /**
         * Resolves this resolver with the specified value.
         * @const {function((TYPE|goog.Promise.<TYPE>|Thenable))}
         */
        resolve: any /*missing*/;
    
        /**
         * Rejects this resolver with the specified reason.
         * @const {function(*): void}
         */
        reject: any /*missing*/;
    }
}

