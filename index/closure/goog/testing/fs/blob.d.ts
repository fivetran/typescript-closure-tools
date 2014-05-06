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

declare module goog.testing.fs {

    /**
     * A mock Blob object. The data is stored as a string.
     *
     * @param {string=} opt_data The string data encapsulated by the blob.
     * @param {string=} opt_type The mime type of the blob.
     * @constructor
     */
    class Blob {
        /**
         * A mock Blob object. The data is stored as a string.
         *
         * @param {string=} opt_data The string data encapsulated by the blob.
         * @param {string=} opt_type The mime type of the blob.
         * @constructor
         */
        constructor(opt_data?: string, opt_type?: string);
    
        /**
         * @see http://www.w3.org/TR/FileAPI/#dfn-size
         * @type {number}
         */
        size: number;
    
        /**
         * Creates a blob with bytes of a blob ranging from the optional start
         * parameter up to but not including the optional end parameter, and with a type
         * attribute that is the value of the optional contentType parameter.
         * @see http://www.w3.org/TR/FileAPI/#dfn-slice
         * @param {number=} opt_start The start byte offset.
         * @param {number=} opt_end The end point of a slice.
         * @param {string=} opt_contentType The type of the resulting Blob.
         * @return {!goog.testing.fs.Blob} The result blob of the slice operation.
         */
        slice(opt_start?: number, opt_end?: number, opt_contentType?: string): goog.testing.fs.Blob;
    
        /**
         * @return {!ArrayBuffer} The string data encapsulated by the blob as an
         *     ArrayBuffer.
         */
        toArrayBuffer(): ArrayBuffer;
    
        /**
         * @return {string} The string data encapsulated by the blob as a data: URI.
         */
        toDataUrl(): string;
    
        /**
         * Sets the internal contents of the blob. This should only be called by other
         * functions inside the {@code goog.testing.fs} namespace.
         *
         * @param {string} data The data for this Blob.
         */
        setDataInternal(data: string): void;
    }
}

