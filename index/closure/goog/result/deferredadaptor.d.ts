/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/result/result_interface.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../closure/goog/result/simpleresult.d.ts" />
/// <reference path="../../../closure/goog/result/dependentresult.d.ts" />
/// <reference path="../../../closure/goog/result/resultutil.d.ts" />

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
    class DeferredAdaptor extends goog.async.Deferred<any> {
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

