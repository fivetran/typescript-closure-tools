/// <reference path="../../../../globals.d.ts" />

declare module goog.crypt {

    class JpegEncoder {
    
        /**
         * Initializes the JpegEncoder.
         *
         * @constructor
         * @param {number=} opt_quality The compression quality. Default 50.
         */
        constructor(opt_quality?: number);
    }
}
