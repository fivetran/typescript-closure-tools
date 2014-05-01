// Generated Wed Apr 30 16:40:10 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
/// <reference path="../../goog/crypt.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/fs.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/promise.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/testing.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />
/// <reference path="../../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.testing.fs.FileReader' {

    /**
     * The possible return types.
     * @enum {number}
     */
    enum ReturnType { TEXT, BINARY_STRING, ARRAY_BUFFER, DATA_URL } 
}

declare module 'goog.testing.fs' {

    /**
     * Get a filesystem object. Since these are mocks, there's no difference between
     * temporary and persistent filesystems.
     *
     * @param {number} size Ignored.
     * @return {!goog.async.Deferred} The deferred
     *     {@link goog.testing.fs.FileSystem}.
     */
    function getTemporary(size: number): goog.async.Deferred;

    /**
     * Get a filesystem object. Since these are mocks, there's no difference between
     * temporary and persistent filesystems.
     *
     * @param {number} size Ignored.
     * @return {!goog.async.Deferred} The deferred
     *     {@link goog.testing.fs.FileSystem}.
     */
    function getPersistent(size: number): goog.async.Deferred;

    /**
     * Create a fake object URL for a given fake blob. This can be used as a real
     * URL, and it can be created and revoked normally.
     *
     * @param {!goog.testing.fs.Blob} blob The blob for which to create the URL.
     * @return {string} The URL.
     */
    function createObjectUrl(blob: goog.testing.fs.Blob): string;

    /**
     * Remove a URL that was created for a fake blob.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: string): void;

    /**
     * Return whether or not a URL has been granted for the given blob.
     *
     * @param {!goog.testing.fs.Blob} blob The blob to check.
     * @return {boolean} Whether a URL has been granted.
     */
    function isObjectUrlGranted(blob: goog.testing.fs.Blob): boolean;

    /**
     * Concatenates one or more values together and converts them to a fake blob.
     *
     * @param {...(string|!goog.testing.fs.Blob)} var_args The values that will make
     *     up the resulting blob.
     * @return {!goog.testing.fs.Blob} The blob.
     */
    function getBlob(...var_args: any /*string|goog.testing.fs.Blob*/[]): goog.testing.fs.Blob;

    /**
     * Returns the string value of a fake blob.
     *
     * @param {!goog.testing.fs.Blob} blob The blob to convert to a string.
     * @param {string=} opt_encoding Ignored.
     * @return {!goog.async.Deferred} The deferred string value of the blob.
     */
    function blobToString(blob: goog.testing.fs.Blob, opt_encoding?: string): goog.async.Deferred;

    /**
     * Installs goog.testing.fs in place of the standard goog.fs. After calling
     * this, code that uses goog.fs should work without issue using goog.testing.fs.
     *
     * @param {!goog.testing.PropertyReplacer} stubs The property replacer for
     *     stubbing out the original goog.fs functions.
     */
    function install(stubs: goog.testing.PropertyReplacer): void;

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
         * @return {string} The string data encapsulated by the blob.
         * @override
         */
        toString(): string;
    
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

    /**
     * A mock filesystem entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry.
     * @param {string} name The name of this entry.
     * @constructor
     * @implements {goog.fs.Entry}
     */
    class Entry implements goog.fs.Entry {
        /**
         * A mock filesystem entry object.
         *
         * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
         * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
         *     containing this entry.
         * @param {string} name The name of this entry.
         * @constructor
         * @implements {goog.fs.Entry}
         */
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string);
    
        /**
         * Whether or not this entry has been deleted.
         * @type {boolean}
         */
        deleted: boolean;
    
        /** @override */
        isFile: any /*missing*/;
    
        /** @override */
        isDirectory: any /*missing*/;
    
        /** @override */
        getName(): void;
    
        /** @override */
        getFullPath(): void;
    
        /**
         * @return {!goog.testing.fs.FileSystem}
         * @override
         */
        getFileSystem(): goog.testing.fs.FileSystem;
    
        /** @override */
        getLastModified: any /*missing*/;
    
        /** @override */
        getMetadata: any /*missing*/;
    
        /** @override */
        moveTo(): void;
    
        /** @override */
        copyTo(): void;
    
        /**
         * @return {!goog.testing.fs.Entry} A shallow copy of this entry object.
         */
        clone: any /*missing*/;
    
        /** @override */
        toUrl(): void;
    
        /** @override */
        toUri: any /*missing*/;
    
        /** @override */
        wrapEntry: any /*missing*/;
    
        /** @override */
        remove(): void;
    
        /** @override */
        getParent(): void;
    
        /**
         * Return a deferred that will call its errback if this entry has been deleted.
         * In addition, the deferred will only run after a timeout of 0, and all its
         * callbacks will run with the entry as "this".
         *
         * @param {string} action The name of the action being performed. For error
         *     reporting.
         * @return {!goog.async.Deferred} The deferred that will be called after a
         *     timeout of 0.
         * @protected
         */
        checkNotDeleted(action: string): goog.async.Deferred;
    }

    /**
     * A mock directory entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry. If this is null, that means this is the root
     *     directory and so is its own parent.
     * @param {string} name The name of this entry.
     * @param {!Object.<!goog.testing.fs.Entry>} children The map of child names to
     *     entry objects.
     * @constructor
     * @extends {goog.testing.fs.Entry}
     * @implements {goog.fs.DirectoryEntry}
     * @final
     */
    class DirectoryEntry extends goog.testing.fs.Entry implements goog.fs.DirectoryEntry {
        /**
         * A mock directory entry object.
         *
         * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
         * @param {goog.testing.fs.DirectoryEntry} parent The directory entry directly
         *     containing this entry. If this is null, that means this is the root
         *     directory and so is its own parent.
         * @param {string} name The name of this entry.
         * @param {!Object.<!goog.testing.fs.Entry>} children The map of child names to
         *     entry objects.
         * @constructor
         * @extends {goog.testing.fs.Entry}
         * @implements {goog.fs.DirectoryEntry}
         * @final
         */
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string, children: { [key: string]: any /*missing*/ });
    
        /** @override */
        isFile(): void;
    
        /** @override */
        isDirectory(): void;
    
        /** @override */
        getLastModified(): void;
    
        /** @override */
        getMetadata(): void;
    
        /** @override */
        clone(): void;
    
        /** @override */
        remove(): void;
    
        /** @override */
        getFile(): void;
    
        /** @override */
        getDirectory(): void;
    
        /**
         * Get a file entry synchronously, without waiting for a Deferred to resolve.
         *
         * @param {string} path The path to the file, relative to this directory.
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     loading the file.
         * @param {string=} opt_data The string data encapsulated by the blob.
         * @param {string=} opt_type The mime type of the blob.
         * @return {!goog.testing.fs.FileEntry} The loaded file.
         */
        getFileSync(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior, opt_data?: string, opt_type?: string): goog.testing.fs.FileEntry;
    
        /**
         * Creates a file synchronously. This is a shorthand for getFileSync, useful for
         * setting up tests.
         *
         * @param {string} path The path to the file, relative to this directory.
         * @return {!goog.testing.fs.FileEntry} The created file.
         */
        createFileSync(path: string): goog.testing.fs.FileEntry;
    
        /**
         * Get a directory synchronously, without waiting for a Deferred to resolve.
         *
         * @param {string} path The path to the directory, relative to this one.
         * @param {goog.fs.DirectoryEntry.Behavior=} opt_behavior The behavior for
         *     loading the directory.
         * @return {!goog.testing.fs.DirectoryEntry} The loaded directory.
         */
        getDirectorySync(path: string, opt_behavior?: goog.fs.DirectoryEntry.Behavior): goog.testing.fs.DirectoryEntry;
    
        /**
         * Creates a directory synchronously. This is a shorthand for getFileSync,
         * useful for setting up tests.
         *
         * @param {string} path The path to the directory, relative to this directory.
         * @return {!goog.testing.fs.DirectoryEntry} The created directory.
         */
        createDirectorySync(path: string): goog.testing.fs.DirectoryEntry;
    
        /**
         * Get a file or directory entry from a path. This handles parsing the path for
         * subdirectories and throwing appropriate errors should something go wrong.
         *
         * @param {string} path The path to the entry, relative to this directory.
         * @param {goog.fs.DirectoryEntry.Behavior} behavior The behavior for loading
         *     the entry.
         * @param {boolean} isFile Whether a file or directory is being loaded.
         * @param {function(!goog.testing.fs.DirectoryEntry, string) :
         *             !goog.testing.fs.Entry} createFn
         *     The function for creating the entry if it doesn't yet exist. This is
         *     passed the parent entry and the name of the new entry.
         * @return {!goog.testing.fs.Entry} The loaded entry.
         * @private
         */
        getEntry_(path: string, behavior: goog.fs.DirectoryEntry.Behavior, isFile: boolean): void;
    
        /**
         * Returns whether this directory has a child with the given name.
         *
         * @param {string} name The name of the entry to check for.
         * @return {boolean} Whether or not this has a child with the given name.
         */
        hasChild(name: string): boolean;
    
        /** @override */
        removeRecursively(): void;
    
        /** @override */
        listDirectory(): void;
    
        /** @override */
        createPath: any /*missing*/;
    }

    /**
     * A mock file entry object.
     *
     * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
     * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
     *     containing this entry.
     * @param {string} name The name of this entry.
     * @param {string} data The data initially contained in the file.
     * @param {string=} opt_type The mime type of the blob.
     * @constructor
     * @extends {goog.testing.fs.Entry}
     * @implements {goog.fs.FileEntry}
     * @final
     */
    class FileEntry extends goog.testing.fs.Entry implements goog.fs.FileEntry {
        /**
         * A mock file entry object.
         *
         * @param {!goog.testing.fs.FileSystem} fs The filesystem containing this entry.
         * @param {!goog.testing.fs.DirectoryEntry} parent The directory entry directly
         *     containing this entry.
         * @param {string} name The name of this entry.
         * @param {string} data The data initially contained in the file.
         * @param {string=} opt_type The mime type of the blob.
         * @constructor
         * @extends {goog.testing.fs.Entry}
         * @implements {goog.fs.FileEntry}
         * @final
         */
        constructor(fs: goog.testing.fs.FileSystem, parent: goog.testing.fs.DirectoryEntry, name: string, data: string, opt_type?: string);
    
        /** @override */
        isFile(): void;
    
        /** @override */
        isDirectory(): void;
    
        /** @override */
        clone(): void;
    
        /** @override */
        getLastModified(): void;
    
        /** @override */
        getMetadata(): void;
    
        /** @override */
        createWriter(): void;
    
        /** @override */
        file(): void;
    
        /**
         * Get the internal file representation synchronously, without waiting for a
         * Deferred to resolve.
         *
         * @return {!goog.testing.fs.File} The internal file blob referenced by this
         *     FileEntry.
         */
        fileSync(): goog.testing.fs.File;
    }

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

    /**
     * A mock FileReader object. This emits the same events as
     * {@link goog.fs.FileReader}.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class FileReader extends goog.events.EventTarget {
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

    /**
     * A mock filesystem object.
     *
     * @param {string=} opt_name The name of the filesystem.
     * @constructor
     * @implements {goog.fs.FileSystem}
     * @final
     */
    class FileSystem implements goog.fs.FileSystem {
        /**
         * A mock filesystem object.
         *
         * @param {string=} opt_name The name of the filesystem.
         * @constructor
         * @implements {goog.fs.FileSystem}
         * @final
         */
        constructor(opt_name?: string);
    
        /** @override */
        getName(): void;
    
        /**
         * @override
         * @return {!goog.testing.fs.DirectoryEntry}
         */
        getRoot(): goog.testing.fs.DirectoryEntry;
    }

    /**
     * A mock FileWriter object. This emits the same events as
     * {@link goog.fs.FileSaver} and {@link goog.fs.FileWriter}.
     *
     * @param {!goog.testing.fs.FileEntry} fileEntry The file entry to write to.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FileWriter extends goog.events.EventTarget {
        /**
         * A mock FileWriter object. This emits the same events as
         * {@link goog.fs.FileSaver} and {@link goog.fs.FileWriter}.
         *
         * @param {!goog.testing.fs.FileEntry} fileEntry The file entry to write to.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(fileEntry: goog.testing.fs.FileEntry);
    
        /**
         * @see {goog.fs.FileSaver#getReadyState}
         * @return {goog.fs.FileSaver.ReadyState} The ready state.
         */
        getReadyState(): goog.fs.FileSaver.ReadyState;
    
        /**
         * @see {goog.fs.FileSaver#getError}
         * @return {goog.fs.Error} The error.
         */
        getError(): goog.fs.Error;
    
        /**
         * @see {goog.fs.FileWriter#getPosition}
         * @return {number} The position.
         */
        getPosition(): number;
    
        /**
         * @see {goog.fs.FileWriter#getLength}
         * @return {number} The length.
         */
        getLength(): number;
    
        /**
         * @see {goog.fs.FileSaver#abort}
         */
        abort(): void;
    
        /**
         * @see {goog.fs.FileWriter#write}
         * @param {!goog.testing.fs.Blob} blob The blob to write.
         */
        write(blob: goog.testing.fs.Blob): void;
    
        /**
         * @see {goog.fs.FileWriter#truncate}
         * @param {number} size The size to truncate to.
         */
        truncate(size: number): void;
    
        /**
         * @see {goog.fs.FileWriter#seek}
         * @param {number} offset The offset to seek to.
         */
        seek(offset: number): void;
    }

    /**
     * A mock progress event.
     *
     * @param {!goog.fs.FileSaver.EventType|!goog.fs.FileReader.EventType} type
     *     Event type.
     * @param {number} loaded The number of bytes processed.
     * @param {number} total The total data that was to be processed, in bytes.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ProgressEvent extends goog.events.Event {
        /**
         * A mock progress event.
         *
         * @param {!goog.fs.FileSaver.EventType|!goog.fs.FileReader.EventType} type
         *     Event type.
         * @param {number} loaded The number of bytes processed.
         * @param {number} total The total data that was to be processed, in bytes.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: any /*goog.fs.FileSaver.EventType|goog.fs.FileReader.EventType*/, loaded: number, total: number);
    
        /**
         * @see {goog.fs.ProgressEvent#isLengthComputable}
         * @return {boolean} True if the length is known.
         */
        isLengthComputable(): boolean;
    
        /**
         * @see {goog.fs.ProgressEvent#getLoaded}
         * @return {number} The number of bytes loaded or written.
         */
        getLoaded(): number;
    
        /**
         * @see {goog.fs.ProgressEvent#getTotal}
         * @return {number} The total bytes to load or write.
         */
        getTotal(): number;
    }
}

