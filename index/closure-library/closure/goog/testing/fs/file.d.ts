/// <reference path="../../../../globals.d.ts" />
/// <reference path="./blob.d.ts" />

declare module goog.testing.fs {

    class File extends File__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class File__Class extends goog.testing.fs.Blob__Class  { 
    
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
    
            /**
             * @see http://www.w3.org/TR/FileAPI/#dfn-name
             * @type {string}
             */
            name: string;
    
            /**
             * @see http://www.w3.org/TR/FileAPI/#dfn-lastModifiedDate
             * @type {Date}
             */
            lastModifiedDate: Date;
    } 
    
}
