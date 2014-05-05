/// <reference path="../../../closure/goog/base.d.ts" />

declare module goog._debug {
    interface _Error extends Error { }
}

declare module goog.debug {

    /**
     * Base class for custom error objects.
     * @param {*=} opt_msg The message associated with the error.
     * @constructor
     * @extends {Error}
     */
    class Error implements goog._debug._Error {
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

