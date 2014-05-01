// Generated Wed Apr 30 16:37:39 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/promise.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/useragent.d.ts" />
/// <reference path="../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.fs.DirectoryEntry' {

    /**
     * Behaviors for getting files and directories.
     * @enum {number}
     */
    enum Behavior { DEFAULT, CREATE, CREATE_EXCLUSIVE } 
}

declare module 'goog.fs.Error' {

    /**
     * Names of errors that may be thrown by the File API, the File System API, or
     * the File Writer API.
     *
     * @see http://dev.w3.org/2006/webapi/FileAPI/#ErrorAndException
     * @see http://www.w3.org/TR/file-system-api/#definitions
     * @see http://dev.w3.org/2009/dap/file-system/file-writer.html#definitions
     * @enum {string}
     */
    enum ErrorName { ABORT, ENCODING, INVALID_MODIFICATION, INVALID_STATE, NOT_FOUND, NOT_READABLE, NO_MODIFICATION_ALLOWED, PATH_EXISTS, QUOTA_EXCEEDED, SECURITY, SYNTAX, TYPE_MISMATCH } 

    /**
     * Error codes for file errors.
     * @see http://www.w3.org/TR/file-system-api/#idl-def-FileException
     *
     * @enum {number}
     * @deprecated Use the 'name' or 'message' attribute instead.
     */
    enum ErrorCode { NOT_FOUND, SECURITY, ABORT, NOT_READABLE, ENCODING, NO_MODIFICATION_ALLOWED, INVALID_STATE, SYNTAX, INVALID_MODIFICATION, QUOTA_EXCEEDED, TYPE_MISMATCH, PATH_EXISTS } 

    /**
     * Mapping from error names to values from the ErrorCode enum.
     * @see http://www.w3.org/TR/file-system-api/#definitions.
     * @private {!Object.<string, goog.fs.Error.ErrorCode>}
     */
    var NameToCodeMap_: any /*missing*/;
}

declare module 'goog.fs.FileReader' {

    /**
     * Possible states for a FileReader.
     *
     * @enum {number}
     */
    enum ReadyState { INIT, LOADING, DONE } 

    /**
     * Events emitted by a FileReader.
     *
     * @enum {string}
     */
    enum EventType { LOAD_START, PROGRESS, LOAD, ABORT, ERROR, LOAD_END } 

    /**
     * Reads a blob as a binary string.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as a binary string.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsBinaryString(blob: Blob): goog.async.Deferred;

    /**
     * Reads a blob as an array buffer.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as an array buffer.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsArrayBuffer(blob: Blob): goog.async.Deferred;

    /**
     * Reads a blob as text.
     * @param {!Blob} blob The blob to read.
     * @param {string=} opt_encoding The name of the encoding to use.
     * @return {!goog.async.Deferred} The deferred Blob contents as text.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsText(blob: Blob, opt_encoding?: string): goog.async.Deferred;

    /**
     * Reads a blob as a data URL.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as a data URL.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsDataUrl(blob: Blob): goog.async.Deferred;
}

declare module 'goog.fs.FileSaver' {

    /**
     * Possible states for a FileSaver.
     *
     * @enum {number}
     */
    enum ReadyState { INIT, WRITING, DONE } 

    /**
     * Events emitted by a FileSaver.
     *
     * @enum {string}
     */
    enum EventType { WRITE_START, PROGRESS, WRITE, ABORT, ERROR, WRITE_END } 

    /**
     * A wrapper for the progress events emitted by the FileSaver.
     *
     * @deprecated Use {goog.fs.ProgressEvent}.
     * @final
     */
    var ProgressEvent: any /*missing*/;
}

declare module 'goog.fs' {

    /**
     * Returns a temporary FileSystem object. A temporary filesystem may be deleted
     * by the user agent at its discretion.
     *
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function getTemporary(size: number): goog.async.Deferred;

    /**
     * Returns a persistent FileSystem object. A persistent filesystem will never be
     * deleted without the user's or application's authorization.
     *
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function getPersistent(size: number): goog.async.Deferred;

    /**
     * Creates a blob URL for a blob object.
     *
     * @param {!Blob} blob The object for which to create the URL.
     * @return {string} The URL for the object.
     */
    function createObjectUrl(blob: Blob): string;

    /**
     * Revokes a URL created by {@link goog.fs.createObjectUrl}.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: string): void;

    /**
     * @typedef {!{createObjectURL: (function(!Blob): string),
     *             revokeObjectURL: function(string): void}}
     */
    var UrlObject_: any /*missing*/;

    /**
     * Concatenates one or more values together and converts them to a Blob.
     *
     * @param {...(string|!Blob|!ArrayBuffer)} var_args The values that will make up
     *     the resulting blob.
     * @return {!Blob} The blob.
     */
    function getBlob(...var_args: any /*string|Blob|ArrayBuffer*/[]): Blob;

    /**
     * Converts a Blob or a File into a string. This should only be used when the
     * blob is known to be small.
     *
     * @param {!Blob} blob The blob to convert.
     * @param {string=} opt_encoding The name of the encoding to use.
     * @return {!goog.async.Deferred} The deferred string. If an error occurrs, the
     *     errback is called with a {@link goog.fs.Error}.
     * @deprecated Use {@link goog.fs.FileReader.readAsText} instead.
     */
    function blobToString(blob: Blob, opt_encoding?: string): goog.async.Deferred;

    /**
     * Slices the blob. The returned blob contains data from the start byte
     * (inclusive) till the end byte (exclusive). Negative indices can be used
     * to count bytes from the end of the blob (-1 == blob.size - 1). Indices
     * are always clamped to blob range. If end is omitted, all the data till
     * the end of the blob is taken.
     *
     * @param {!Blob} blob The blob to be sliced.
     * @param {number} start Index of the starting byte.
     * @param {number=} opt_end Index of the ending byte.
     * @return {Blob} The blob slice or null if not supported.
     */
    function sliceBlob(blob: Blob, start: number, opt_end?: number): Blob;

    /**
     * The interface for entries in the filesystem.
     * @interface
     */
    interface Entry {
        isFile(): boolean;
        isDirectory(): boolean;
        getName(): string;
        getFullPath(): string;
        getFileSystem(): goog.fs.FileSystem;
        getLastModified(): goog.async.Deferred;
        getMetadata(): goog.async.Deferred;
        moveTo(parent: goog.fs.DirectoryEntry, opt_newName?: string): goog.async.Deferred;
        copyTo(parent: goog.fs.DirectoryEntry, opt_newName?: string): goog.async.Deferred;
        wrapEntry(entry: Entry): goog.fs.Entry;
        toUrl(opt_mimeType?: string): string;
        toUri(opt_mimeType?: string): string;
        remove(): goog.async.Deferred;
        getParent(): goog.async.Deferred;
    }

    /**
     * A directory in a local FileSystem.
     *
     * @interface
     * @extends {goog.fs.Entry}
     */
    interface DirectoryEntry {
        getFile(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior): goog.async.Deferred;
        getDirectory(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior): goog.async.Deferred;
        createPath(path: string): goog.async.Deferred;
        listDirectory(): goog.async.Deferred;
        removeRecursively(): goog.async.Deferred;
    }

    /**
     * A file in a local filesystem.
     *
     * @interface
     * @extends {goog.fs.Entry}
     */
    interface FileEntry {
        createWriter(): goog.async.Deferred<goog.fs.FileWriter>;
        file(): goog.async.Deferred<File>;
    }

    /**
     * A local filesystem.
     *
     * @interface
     */
    interface FileSystem {
        getName(): string;
        getRoot(): goog.fs.DirectoryEntry;
    }

    /**
     * Base class for concrete implementations of goog.fs.Entry.
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!Entry} entry The underlying Entry object.
     * @constructor
     * @implements {goog.fs.Entry}
     */
    class EntryImpl implements goog.fs.Entry {
        /**
         * Base class for concrete implementations of goog.fs.Entry.
         * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
         * @param {!Entry} entry The underlying Entry object.
         * @constructor
         * @implements {goog.fs.Entry}
         */
        constructor(fs: goog.fs.FileSystem, entry: Entry);
    
        /** @override */
        isFile(): void;
    
        /** @override */
        isDirectory(): void;
    
        /** @override */
        getName(): void;
    
        /** @override */
        getFullPath(): void;
    
        /** @override */
        getFileSystem(): void;
    
        /** @override */
        getLastModified(): void;
    
        /** @override */
        getMetadata(): void;
    
        /** @override */
        moveTo(): void;
    
        /** @override */
        copyTo(): void;
    
        /** @override */
        wrapEntry(): void;
    
        /** @override */
        toUrl(): void;
    
        /** @override */
        toUri: any /*missing*/;
    
        /** @override */
        remove(): void;
    
        /** @override */
        getParent(): void;
    }

    /**
     * A directory in a local FileSystem.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.FileSystem#getRoot} or
     * {@link goog.fs.DirectoryEntry#getDirectoryEntry}.
     *
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!DirectoryEntry} dir The underlying DirectoryEntry object.
     * @constructor
     * @extends {goog.fs.EntryImpl}
     * @implements {goog.fs.DirectoryEntry}
     * @final
     */
    class DirectoryEntryImpl extends goog.fs.EntryImpl implements goog.fs.DirectoryEntry {
        /**
         * A directory in a local FileSystem.
         *
         * This should not be instantiated directly. Instead, it should be accessed via
         * {@link goog.fs.FileSystem#getRoot} or
         * {@link goog.fs.DirectoryEntry#getDirectoryEntry}.
         *
         * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
         * @param {!DirectoryEntry} dir The underlying DirectoryEntry object.
         * @constructor
         * @extends {goog.fs.EntryImpl}
         * @implements {goog.fs.DirectoryEntry}
         * @final
         */
        constructor(fs: goog.fs.FileSystem, dir: DirectoryEntry);
    
        /** @override */
        getFile(): void;
    
        /** @override */
        getDirectory(): void;
    
        /** @override */
        createPath(): void;
    
        /** @override */
        listDirectory(): void;
    
        /** @override */
        removeRecursively(): void;
    }

    /**
     * A file in a local filesystem.
     *
     * This should not be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.DirectoryEntry#getFile}.
     *
     * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
     * @param {!FileEntry} file The underlying FileEntry object.
     * @constructor
     * @extends {goog.fs.EntryImpl}
     * @implements {goog.fs.FileEntry}
     * @final
     */
    class FileEntryImpl extends goog.fs.EntryImpl implements goog.fs.FileEntry {
        /**
         * A file in a local filesystem.
         *
         * This should not be instantiated directly. Instead, it should be accessed via
         * {@link goog.fs.DirectoryEntry#getFile}.
         *
         * @param {!goog.fs.FileSystem} fs The wrapped filesystem.
         * @param {!FileEntry} file The underlying FileEntry object.
         * @constructor
         * @extends {goog.fs.EntryImpl}
         * @implements {goog.fs.FileEntry}
         * @final
         */
        constructor(fs: goog.fs.FileSystem, file: FileEntry);
    
        /** @override */
        createWriter(): void;
    
        /** @override */
        file(): void;
    }

    /**
     * A filesystem error. Since the filesystem API is asynchronous, stack traces
     * are less useful for identifying where errors come from, so this includes a
     * large amount of metadata in the message.
     *
     * @param {!DOMError} error
     * @param {string} action The action being undertaken when the error was raised.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        /**
         * A filesystem error. Since the filesystem API is asynchronous, stack traces
         * are less useful for identifying where errors come from, so this includes a
         * large amount of metadata in the message.
         *
         * @param {!DOMError} error
         * @param {string} action The action being undertaken when the error was raised.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(error: DOMError, action: string);
    }

    /**
     * An object for monitoring the reading of files. This emits ProgressEvents of
     * the types listed in {@link goog.fs.FileReader.EventType}.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FileReader extends goog.events.EventTarget {
        /**
         * An object for monitoring the reading of files. This emits ProgressEvents of
         * the types listed in {@link goog.fs.FileReader.EventType}.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor();
    
        /**
         * Abort the reading of the file.
         */
        abort(): void;
    
        /**
         * @return {goog.fs.FileReader.ReadyState} The current state of the FileReader.
         */
        getReadyState(): goog.fs.FileReader.ReadyState;
    
        /**
         * @return {*} The result of the file read.
         */
        getResult(): any;
    
        /**
         * @return {goog.fs.Error} The error encountered while reading, if any.
         */
        getError(): goog.fs.Error;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Starts reading a blob as a binary string.
         * @param {!Blob} blob The blob to read.
         */
        readAsBinaryString(blob: Blob): void;
    
        /**
         * Starts reading a blob as an array buffer.
         * @param {!Blob} blob The blob to read.
         */
        readAsArrayBuffer(blob: Blob): void;
    
        /**
         * Starts reading a blob as text.
         * @param {!Blob} blob The blob to read.
         * @param {string=} opt_encoding The name of the encoding to use.
         */
        readAsText(blob: Blob, opt_encoding?: string): void;
    
        /**
         * Starts reading a blob as a data URL.
         * @param {!Blob} blob The blob to read.
         */
        readAsDataUrl(blob: Blob): void;
    }

    /**
     * An object for monitoring the saving of files. This emits ProgressEvents of
     * the types listed in {@link goog.fs.FileSaver.EventType}.
     *
     * This should not be instantiated directly. Instead, its subclass
     * {@link goog.fs.FileWriter} should be accessed via
     * {@link goog.fs.FileEntry#createWriter}.
     *
     * @param {!FileSaver} fileSaver The underlying FileSaver object.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class FileSaver extends goog.events.EventTarget {
        /**
         * An object for monitoring the saving of files. This emits ProgressEvents of
         * the types listed in {@link goog.fs.FileSaver.EventType}.
         *
         * This should not be instantiated directly. Instead, its subclass
         * {@link goog.fs.FileWriter} should be accessed via
         * {@link goog.fs.FileEntry#createWriter}.
         *
         * @param {!FileSaver} fileSaver The underlying FileSaver object.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(fileSaver: FileSaver);
    
        /**
         * Abort the writing of the file.
         */
        abort(): void;
    
        /**
         * @return {goog.fs.FileSaver.ReadyState} The current state of the FileSaver.
         */
        getReadyState(): goog.fs.FileSaver.ReadyState;
    
        /**
         * @return {goog.fs.Error} The error encountered while writing, if any.
         */
        getError(): goog.fs.Error;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A local filesystem.
     *
     * This shouldn't be instantiated directly. Instead, it should be accessed via
     * {@link goog.fs.getTemporary} or {@link goog.fs.getPersistent}.
     *
     * @param {!FileSystem} fs The underlying FileSystem object.
     * @constructor
     * @implements {goog.fs.FileSystem}
     * @final
     */
    class FileSystemImpl implements goog.fs.FileSystem {
        /**
         * A local filesystem.
         *
         * This shouldn't be instantiated directly. Instead, it should be accessed via
         * {@link goog.fs.getTemporary} or {@link goog.fs.getPersistent}.
         *
         * @param {!FileSystem} fs The underlying FileSystem object.
         * @constructor
         * @implements {goog.fs.FileSystem}
         * @final
         */
        constructor(fs: FileSystem);
    
        /** @override */
        getName(): void;
    
        /** @override */
        getRoot(): void;
    
        /**
         * @return {!FileSystem} The underlying FileSystem object.
         */
        getBrowserFileSystem(): FileSystem;
    }

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

    /**
     * A wrapper for the progress events emitted by the File APIs.
     *
     * @param {!ProgressEvent} event The underlying event object.
     * @param {!Object} target The file access object emitting the event.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class ProgressEvent extends goog.events.Event {
        /**
         * A wrapper for the progress events emitted by the File APIs.
         *
         * @param {!ProgressEvent} event The underlying event object.
         * @param {!Object} target The file access object emitting the event.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(event: ProgressEvent, target: Object);
    
        /**
         * @return {boolean} Whether or not the total size of the of the file being
         *     saved is known.
         */
        isLengthComputable(): boolean;
    
        /**
         * @return {number} The number of bytes saved so far.
         */
        getLoaded(): number;
    
        /**
         * @return {number} The total number of bytes in the file being saved.
         */
        getTotal(): number;
    }
}

