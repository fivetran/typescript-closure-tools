/// <reference path="../../../globals.d.ts" />
/// <reference path="./collectablestorage.d.ts" />
/// <reference path="./mechanism/iterablemechanism.d.ts" />

declare module goog.storage {

    class EncryptedStorage extends EncryptedStorage__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EncryptedStorage__Class extends goog.storage.CollectableStorage__Class  { 
    
            /**
             * Provides an encrypted storage. The keys are hashed with a secret, so
             * their existence cannot be verified without the knowledge of the secret.
             * The values are encrypted using the key, a salt, and the secret, so
             * stream cipher initialization varies for each stored value.
             *
             * @param {!goog.storage.mechanism.IterableMechanism} mechanism The underlying
             *     storage mechanism.
             * @param {string} secret The secret key used to encrypt the storage.
             * @constructor
             * @extends {goog.storage.CollectableStorage}
             * @final
             */
            constructor(mechanism: goog.storage.mechanism.IterableMechanism, secret: string);
    } 
    
}

declare module goog.storage.EncryptedStorage {

    /**
     * Metadata key under which the salt is stored.
     *
     * @type {string}
     * @protected
     */
    var SALT_KEY: string;
}
