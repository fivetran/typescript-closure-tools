/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/eventtarget.d.ts" />
/// <reference path="../../fs/filereader.d.ts" />
/// <reference path="../../fs/error.d.ts" />
/// <reference path="./blob.d.ts" />

declare module goog.testing.fs {

    class FileReader extends FileReader__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FileReader__Class extends goog.events.EventTarget__Class  { 
    
            /**
             * A mock FileReader object. This emits the same events as
             * {@link goog.fs.FileReader}.
             *
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor();
    
            /**
             * @see {goog.fs.FileReader#getReadyState}
             * @return {goog.fs.FileReader.ReadyState} The current ready state.
             */
            getReadyState(): goog.fs.FileReader.ReadyState;
    
            /**
             * @see {goog.fs.FileReader#getError}
             * @return {goog.fs.Error} The current error.
             */
            getError(): goog.fs.Error;
    
            /**
             * @see {goog.fs.FileReader#abort}
             */
            abort(): void;
    
            /**
             * @see {goog.fs.FileReader#getResult}
             * @return {*} The result of the file read.
             */
            getResult(): any;
    
            /**
             * @see {goog.fs.FileReader#readAsBinaryString}
             * @param {!goog.testing.fs.Blob} blob The blob to read.
             */
            readAsBinaryString(blob: goog.testing.fs.Blob): void;
    
            /**
             * @see {goog.fs.FileReader#readAsArrayBuffer}
             * @param {!goog.testing.fs.Blob} blob The blob to read.
             */
            readAsArrayBuffer(blob: goog.testing.fs.Blob): void;
    
            /**
             * @see {goog.fs.FileReader#readAsText}
             * @param {!goog.testing.fs.Blob} blob The blob to read.
             * @param {string=} opt_encoding The name of the encoding to use.
             */
            readAsText(blob: goog.testing.fs.Blob, opt_encoding?: string): void;
    
            /**
             * @see {goog.fs.FileReader#readAsDataUrl}
             * @param {!goog.testing.fs.Blob} blob The blob to read.
             */
            readAsDataUrl(blob: goog.testing.fs.Blob): void;
    } 
    
}

declare module goog.testing.fs.FileReader {

    /**
     * The possible return types.
     * @enum {number}
     */
    enum ReturnType { TEXT, BINARY_STRING, ARRAY_BUFFER, DATA_URL } 
}
