/// <reference path="../../../globals.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="./result_interface.d.ts" />

declare module goog.result {

    class DeferredAdaptor extends DeferredAdaptor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DeferredAdaptor__Class extends goog.async.Deferred__Class<any>  { 
    
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
