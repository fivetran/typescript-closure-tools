/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/crypt/crypt.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/crypt/base64.d.ts" />

declare module goog.crypt {

    /**
     * Initializes the JpegEncoder.
     *
     * @constructor
     * @param {number=} opt_quality The compression quality. Default 50.
     */
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

