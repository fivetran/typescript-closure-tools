/// <reference path="../../../globals.d.ts" />

declare module goog.debug {

    class Error extends Error.__Class { }
    module Error {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends _Error {
    
            /**
             * Base class for custom error objects.
             * @param {*=} opt_msg The message associated with the error.
             * @constructor
             * @extends {Error}
             */
            constructor(opt_msg?: any);
        }
    }
}
