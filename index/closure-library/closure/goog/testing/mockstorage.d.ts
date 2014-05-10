/// <reference path="../../../globals.d.ts" />

declare module goog.testing {

    class MockStorage extends __MockStorage { }
    class __MockStorage implements Storage {
    
        /**
         * A JS storage instance, implementing the HMTL5 Storage interface.
         * See http://www.w3.org/TR/webstorage/ for details.
         *
         * @constructor
         * @implements {Storage}
         * @final
         */
        constructor();
    }
}
