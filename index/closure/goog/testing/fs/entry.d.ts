// Generated Fri May  2 15:04:09 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/fs/error.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/crypt/crypt.d.ts" />
/// <reference path="../../../goog/crypt/base64.d.ts" />
/// <reference path="../../../goog/testing/fs/blob.d.ts" />
/// <reference path="../../../goog/testing/fs/file.d.ts" />
/// <reference path="../../../goog/fs/entry.d.ts" />
/// <reference path="../../../goog/fs/progressevent.d.ts" />
/// <reference path="../../../goog/fs/filesaver.d.ts" />
/// <reference path="../../../goog/fs/filewriter.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/promise/resolver.d.ts" />
/// <reference path="../../../goog/testing/watchers.d.ts" />
/// <reference path="../../../goog/async/nexttick.d.ts" />
/// <reference path="../../../goog/async/run.d.ts" />
/// <reference path="../../../goog/promise/thenable.d.ts" />
/// <reference path="../../../goog/promise/promise.d.ts" />
/// <reference path="../../../goog/fs/entryimpl.d.ts" />
/// <reference path="../../../goog/testing/fs/progressevent.d.ts" />
/// <reference path="../../../goog/testing/fs/filewriter.d.ts" />

declare module goog.testing.fs {

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
    
        /**
         * @return {!goog.testing.fs.Entry} A shallow copy of this entry object.
         */
        clone(): goog.testing.fs.Entry;
    
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
    
        /**
         * Get the internal file representation synchronously, without waiting for a
         * Deferred to resolve.
         *
         * @return {!goog.testing.fs.File} The internal file blob referenced by this
         *     FileEntry.
         */
        fileSync(): goog.testing.fs.File;
    }
}

