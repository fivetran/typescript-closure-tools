// Generated Fri May  2 10:40:39 PDT 2014

/// <reference path="../../../goog/base.d.ts" />

declare module goog.storage.mechanism {

    /**
     * Basic interface for all storage mechanisms.
     *
     * @constructor
     */
    class Mechanism {
        /**
         * Basic interface for all storage mechanisms.
         *
         * @constructor
         */
        constructor();
    
        /**
         * Set a value for a key.
         *
         * @param {string} key The key to set.
         * @param {string} value The string to save.
         */
        set: any /*missing*/;
    
        /**
         * Get the value stored under a key.
         *
         * @param {string} key The key to get.
         * @return {?string} The corresponding value, null if not found.
         */
        get: any /*missing*/;
    
        /**
         * Remove a key and its value.
         *
         * @param {string} key The key to remove.
         */
        remove: any /*missing*/;
    }
}

