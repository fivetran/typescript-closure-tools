/// <reference path="../../../closure/goog/base.d.ts" />

declare module goog.ui {

    /**
     * Creates a new id generator.
     * @constructor
     * @final
     */
    class IdGenerator {
        /**
         * Creates a new id generator.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Gets the next unique ID.
         * @return {string} The next unique identifier.
         */
        getNextUniqueId(): string;
    }
}

