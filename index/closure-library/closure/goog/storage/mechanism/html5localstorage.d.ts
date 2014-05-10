/// <reference path="../../../../globals.d.ts" />
/// <reference path="./html5webstorage.d.ts" />

declare module goog.storage.mechanism {

    class HTML5LocalStorage extends __HTML5LocalStorage { }
    class __HTML5LocalStorage extends goog.storage.mechanism.__HTML5WebStorage {
    
        /**
         * Provides a storage mechanism that uses HTML5 local storage.
         *
         * @constructor
         * @extends {goog.storage.mechanism.HTML5WebStorage}
         */
        constructor();
    }
}
