/// <reference path="../../../../globals.d.ts" />
/// <reference path="./html5webstorage.d.ts" />

declare module goog.storage.mechanism {

    class HTML5SessionStorage extends HTML5SessionStorage.__Class { }
    module HTML5SessionStorage {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.storage.mechanism.HTML5WebStorage.__Class {
    
            /**
             * Provides a storage mechanism that uses HTML5 session storage.
             *
             * @constructor
             * @extends {goog.storage.mechanism.HTML5WebStorage}
             */
            constructor();
        }
    }
}
