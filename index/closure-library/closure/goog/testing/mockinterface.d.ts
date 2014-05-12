/// <reference path="../../../globals.d.ts" />

declare module goog.testing {

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
