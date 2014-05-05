// Generated Sun May  4 18:19:41 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.testing {

    /** @interface */
    interface MockInterface {
    
        /**
         * Write down all the expected functions that have been called on the
         * mock so far. From here on out, future function calls will be
         * compared against this list.
         */
        $replay(): void;
    
        /**
         * Reset the mock.
         */
        $reset(): void;
    
        /**
         * Assert that the expected function calls match the actual calls.
         */
        $verify(): void;
    }
}

