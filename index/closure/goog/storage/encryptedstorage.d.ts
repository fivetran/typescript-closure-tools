/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/storage/mechanism/mechanism.d.ts" />
/// <reference path="../../../closure/goog/storage/mechanism/iterablemechanism.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/storage/errorcode.d.ts" />
/// <reference path="../../../closure/goog/storage/storage.d.ts" />
/// <reference path="../../../closure/goog/storage/richstorage.d.ts" />
/// <reference path="../../../closure/goog/crypt/hash.d.ts" />
/// <reference path="../../../closure/goog/crypt/sha1.d.ts" />
/// <reference path="../../../closure/goog/crypt/arc4.d.ts" />
/// <reference path="../../../closure/goog/crypt/crypt.d.ts" />
/// <reference path="../../../closure/goog/storage/expiringstorage.d.ts" />
/// <reference path="../../../closure/goog/storage/collectablestorage.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/crypt/base64.d.ts" />

declare module goog.storage {

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
    class EncryptedStorage extends goog.storage.CollectableStorage {
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

