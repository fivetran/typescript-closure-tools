/// <reference path="../../../../globals.d.ts" />
/// <reference path="./html5webstorage.d.ts" />

declare module goog.storage.mechanism {

    class HTML5SessionStorage extends goog.storage.mechanism.HTML5WebStorage {
    
        /**
         * Provides a storage mechanism that uses HTML5 session storage.
         *
         * @constructor
         * @extends {goog.storage.mechanism.HTML5WebStorage}
         */
        constructor();
    }
}
