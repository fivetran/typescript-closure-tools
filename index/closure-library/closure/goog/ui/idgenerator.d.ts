/// <reference path="../../../globals.d.ts" />

declare module goog.ui {

    class IdGenerator extends IdGenerator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class IdGenerator__Class  { 
    
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
