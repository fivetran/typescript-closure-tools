/// <reference path="../../../globals.d.ts" />

declare module goog.ui {

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
