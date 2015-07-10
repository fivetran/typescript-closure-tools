/// <reference path="../../../globals.d.ts" />

declare module goog.math {

    class ExponentialBackoff extends ExponentialBackoff__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ExponentialBackoff__Class  { 
    
            /**
             * @constructor
             *
             * @param {number} initialValue The initial backoff value.
             * @param {number} maxValue The maximum backoff value.
             */
            constructor(initialValue: number, maxValue: number);
    
            /**
             * Resets the backoff value to its initial value.
             */
            reset(): void;
    
            /**
             * @return {number} The current backoff value.
             */
            getValue(): number;
    
            /**
             * @return {number} The number of times this class has backed off.
             */
            getBackoffCount(): number;
    
            /**
             * Initiates a backoff.
             */
            backoff(): void;
    } 
    
}
