// Generated Fri May  2 15:04:20 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/result/result_interface.d.ts" />

declare module goog.result.SimpleResult {

    /**
     * A waiting handler entry.
     * @typedef {{
     *   callback: !function(goog.result.SimpleResult),
     *   scope: Object
     * }}
     * @private
     */
    var HandlerEntry_: any /*missing*/;

    /**
     * Creates a SimpleResult that fires when the given promise resolves.
     * Use only during migration to Promises.
     * @param {!goog.Promise.<?>} promise
     * @return {!goog.result.Result}
     */
    function fromPromise(promise: any /*missing*/): goog.result.Result;

    /**
     * Error thrown if there is an attempt to set the value or error for this result
     * more than once.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class StateError extends goog.debug.Error {
        /**
         * Error thrown if there is an attempt to set the value or error for this result
         * more than once.
         *
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
         */
        constructor();
    }
}

declare module goog.result {

    /**
     * A SimpleResult object is a basic implementation of the
     * goog.result.Result interface. This could be subclassed(e.g. XHRResult)
     * or instantiated and returned by another class as a form of result. The caller
     * receiving the result could then attach handlers to be called when the result
     * is resolved(success or error).
     *
     * @constructor
     * @implements {goog.result.Result}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class SimpleResult implements goog.result.Result {
        /**
         * A SimpleResult object is a basic implementation of the
         * goog.result.Result interface. This could be subclassed(e.g. XHRResult)
         * or instantiated and returned by another class as a form of result. The caller
         * receiving the result could then attach handlers to be called when the result
         * is resolved(success or error).
         *
         * @constructor
         * @implements {goog.result.Result}
         * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
         */
        constructor();
    
        /**
         * Sets the value of this Result, changing the state.
         *
         * @param {*} value The value to set for this Result.
         */
        setValue(value: any): void;
    
        /**
         * Sets the Result to be an error Result.
         *
         * @param {*=} opt_error Optional error slug to set for this Result.
         */
        setError(opt_error?: any): void;
    }
}

