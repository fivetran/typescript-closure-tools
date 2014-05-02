// Generated Fri May  2 11:41:31 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/fs/progressevent.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/fs/error.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/fs/filesaver.d.ts" />

declare module goog.fs {

    /**
     * An object for monitoring the saving of files, as well as other fine-grained
     * writing operations.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.FileEntry#createWriter}.
     *
     * @param {!FileWriter} writer The underlying FileWriter object.
     * @constructor
     * @extends {goog.fs.FileSaver}
     * @final
     */
    class FileWriter extends goog.fs.FileSaver {
        /**
         * An object for monitoring the saving of files, as well as other fine-grained
         * writing operations.
         *
         * This should not be instantiated directly. Instead, it should be accessed via
         * {@link goog.fs.FileEntry#createWriter}.
         *
         * @param {!FileWriter} writer The underlying FileWriter object.
         * @constructor
         * @extends {goog.fs.FileSaver}
         * @final
         */
        constructor(writer: FileWriter);
    
        /**
         * @return {number} The byte offset at which the next write will occur.
         */
        getPosition(): number;
    
        /**
         * @return {number} The length of the file.
         */
        getLength(): number;
    
        /**
         * Write data to the file.
         *
         * @param {!Blob} blob The data to write.
         */
        write(blob: Blob): void;
    
        /**
         * Set the file position at which the next write will occur.
         *
         * @param {number} offset An absolute byte offset into the file.
         */
        seek(offset: number): void;
    
        /**
         * Changes the length of the file to that specified.
         *
         * @param {number} size The new size of the file, in bytes.
         */
        truncate(size: number): void;
    }
}

