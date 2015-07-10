/// <reference path="../../../globals.d.ts" />

declare module goog.debug {

    class Error extends Error__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Error__Class extends _Error  { 
    
            /**
             * Base class for custom error objects.
             * @param {*=} opt_msg The message associated with the error.
             * @constructor
             * @extends {Error}
             */
            constructor(opt_msg?: any);
    } 
    
}
