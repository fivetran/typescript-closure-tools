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
/// <reference path="../../../../closure/goog/testing/fs/blob.d.ts" />

declare module goog.testing.fs {

    /**
     * A mock file object.
     *
     * @param {string} name The name of the file.
     * @param {Date=} opt_lastModified The last modified date for this file. May be
     *     null if file modification dates are not supported.
     * @param {string=} opt_data The string data encapsulated by the blob.
     * @param {string=} opt_type The mime type of the blob.
     * @constructor
     * @extends {goog.testing.fs.Blob}
     * @final
     */
    class File extends goog.testing.fs.Blob {
        /**
         * A mock file object.
         *
         * @param {string} name The name of the file.
         * @param {Date=} opt_lastModified The last modified date for this file. May be
         *     null if file modification dates are not supported.
         * @param {string=} opt_data The string data encapsulated by the blob.
         * @param {string=} opt_type The mime type of the blob.
         * @constructor
         * @extends {goog.testing.fs.Blob}
         * @final
         */
        constructor(name: string, opt_lastModified?: Date, opt_data?: string, opt_type?: string);
    }
}

