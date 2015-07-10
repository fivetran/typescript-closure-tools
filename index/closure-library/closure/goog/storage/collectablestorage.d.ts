/// <reference path="../../../globals.d.ts" />
/// <reference path="./expiringstorage.d.ts" />
/// <reference path="./mechanism/iterablemechanism.d.ts" />

declare module goog.storage {

    class CollectableStorage extends CollectableStorage__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CollectableStorage__Class extends goog.storage.ExpiringStorage__Class  { 
    
            /**
             * Provides a storage with expirning keys and a collection method.
             *
             * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
             *     storage mechanism.
             * @constructor
             * @extends {goog.storage.ExpiringStorage}
             */
            constructor(mechanism: goog.storage.mechanism.IterableMechanism);
    
            /**
             * Cleans up the storage by removing expired keys.
             *
             * @param {Array.<string>} keys List of all keys.
             * @param {boolean=} opt_strict Also remove invalid keys.
             * @return {!Array.<string>} a list of expired keys.
             * @protected
             */
            collectInternal(keys: string[], opt_strict?: boolean): string[];
    
            /**
             * Cleans up the storage by removing expired keys.
             *
             * @param {boolean=} opt_strict Also remove invalid keys.
             */
            collect(opt_strict?: boolean): void;
    } 
    
}
