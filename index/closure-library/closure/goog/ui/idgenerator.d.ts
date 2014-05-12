/// <reference path="../../../globals.d.ts" />

declare module goog.ui {

    class IdGenerator extends IdGenerator.__Class { }
    module IdGenerator {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
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
}
