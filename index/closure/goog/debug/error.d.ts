// Generated Thu May  1 17:25:16 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.debug {

    /**
     * Base class for custom error objects.
     * @param {*=} opt_msg The message associated with the error.
     * @constructor
     * @extends {Error}
     */
    class GoogError implements Error {
        /**
         * Base class for custom error objects.
         * @param {*=} opt_msg The message associated with the error.
         * @constructor
         * @extends {Error}
         */
        constructor(opt_msg?: any);
        name: string;
        message: string;
    }
}

