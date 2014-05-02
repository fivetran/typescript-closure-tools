// Generated Fri May  2 11:43:20 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/result/result_interface.d.ts" />
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
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/result/simpleresult.d.ts" />
/// <reference path="../../goog/result/dependentresult.d.ts" />
/// <reference path="../../goog/result/resultutil.d.ts" />

declare module goog.result {

    /**
     * An adaptor from Result to a Deferred, for use with existing Deferred chains.
     *
     * @param {!goog.result.Result} result A result.
     * @constructor
     * @extends {goog.async.Deferred}
     * @final
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    class DeferredAdaptor extends goog.async.Deferred {
        /**
         * An adaptor from Result to a Deferred, for use with existing Deferred chains.
         *
         * @param {!goog.result.Result} result A result.
         * @constructor
         * @extends {goog.async.Deferred}
         * @final
         * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
         */
        constructor(result: goog.result.Result);
    }
}

