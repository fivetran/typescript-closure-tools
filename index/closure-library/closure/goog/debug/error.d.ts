/// <reference path="../../../globals.d.ts" />

declare module goog.debug {

    class Error extends __Error { }
    class __Error extends Error {
    
        /**
         * Base class for custom error objects.
         * @param {*=} opt_msg The message associated with the error.
         * @constructor
         * @extends {Error}
         */
        constructor(opt_msg?: any);
    }
}
