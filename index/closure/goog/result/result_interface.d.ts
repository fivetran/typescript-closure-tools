// Generated Thu May  1 17:26:38 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />

declare module goog.result.Result {

    /**
     * The States this object can be in.
     *
     * @enum {string}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    enum State { SUCCESS, ERROR, PENDING } 

    /**
     * The value to be passed to the error handlers invoked upon cancellation.
     * @constructor
     * @extends {Error}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class CancelError extends Error {
        /**
         * The value to be passed to the error handlers invoked upon cancellation.
         * @constructor
         * @extends {Error}
         * @final
         * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
         */
        constructor();
    }
}

declare module goog.result {

    /**
     * A Result object represents a value returned by an asynchronous
     * operation at some point in the future (e.g. a network fetch). This is akin
     * to a 'Promise' or a 'Future' in other languages and frameworks.
     *
     * @interface
     * @extends {goog.Thenable}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    interface Result extends goog.Thenable {
        wait<T>(handler: (_0: goog.result.Result) => any /*missing*/, opt_scope?: T): void;
        getState(): goog.result.Result.State;
        getValue(): any;
        getError(): any;
        cancel(): boolean;
        isCanceled(): boolean;
    }
}

