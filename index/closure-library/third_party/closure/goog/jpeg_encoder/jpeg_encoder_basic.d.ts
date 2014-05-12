/// <reference path="../../../../globals.d.ts" />

declare module goog.crypt {

    class JpegEncoder extends JpegEncoder.__Class { }
    module JpegEncoder {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Initializes the JpegEncoder.
             *
             * @constructor
             * @param {number=} opt_quality The compression quality. Default 50.
             */
            constructor(opt_quality?: number);
        }
    }
}
