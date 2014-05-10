/// <reference path="../../../globals.d.ts" />

declare module goog.ui {

    class IdGenerator extends __IdGenerator { }
    class __IdGenerator {
    
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
