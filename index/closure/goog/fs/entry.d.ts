// Generated Thu May  1 16:44:59 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.fs.DirectoryEntry {

    /**
     * Behaviors for getting files and directories.
     * @enum {number}
     */
    enum Behavior { DEFAULT, CREATE, CREATE_EXCLUSIVE } 
}

declare module goog.fs {

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
    interface DirectoryEntry extends goog.fs.Entry {
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
    interface FileEntry extends goog.fs.Entry {
        createWriter(): goog.async.Deferred<goog.fs.FileWriter>;
        file(): goog.async.Deferred<File>;
    }
}

