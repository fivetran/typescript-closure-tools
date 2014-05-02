// Generated Fri May  2 10:41:59 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/fs/error.d.ts" />
/// <reference path="../../goog/fs/entry.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/fs/progressevent.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
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
/// <reference path="../../goog/fs/filewriter.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />

declare module goog.fs {

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
    }
}

