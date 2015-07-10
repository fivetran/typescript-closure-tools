/// <reference path="../../../../globals.d.ts" />
/// <reference path="./html5webstorage.d.ts" />

declare module goog.storage.mechanism {

    class HTML5LocalStorage extends HTML5LocalStorage__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class HTML5LocalStorage__Class extends goog.storage.mechanism.HTML5WebStorage__Class  { 
    
            /**
             * Provides a storage mechanism that uses HTML5 local storage.
             *
             * @constructor
             * @extends {goog.storage.mechanism.HTML5WebStorage}
             */
            constructor();
    } 
    
}
