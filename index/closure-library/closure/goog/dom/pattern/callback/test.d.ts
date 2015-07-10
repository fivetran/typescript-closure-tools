/// <reference path="../../../../../globals.d.ts" />

declare module goog.dom.pattern.callback {

    class Test extends Test__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Test__Class  { 
    
            /**
             * Callback class for testing for at least one match.
             * @constructor
             * @final
             */
            constructor();
    
            /**
             * Whether or not the pattern matched.
             *
             * @type {boolean}
             */
            matched: boolean;
    
            /**
             * Get a bound callback function that is suitable as a callback for
             * {@link goog.dom.pattern.Matcher}.
             *
             * @return {!Function} A callback function.
             */
            getCallback(): Function;
    
            /**
             * Reset the counter.
             */
            reset(): void;
    } 
    
}
