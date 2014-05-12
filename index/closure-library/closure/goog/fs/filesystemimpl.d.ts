/// <reference path="../../../globals.d.ts" />
/// <reference path="./filesystem.d.ts" />
/// <reference path="./entry.d.ts" />

declare module goog.fs {

    class FileSystemImpl extends FileSystemImpl.__Class { }
    module FileSystemImpl {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.fs.FileSystem {
    
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
    
            /**
             * @return {!FileSystem} The underlying FileSystem object.
             */
            getBrowserFileSystem(): FileSystem;
    
            /**
             * @return {string} The name of the filesystem.
             */
            getName(): string;
    
            /**
             * @return {!goog.fs.DirectoryEntry} The root directory of the filesystem.
             */
            getRoot(): goog.fs.DirectoryEntry;
        }
    }
}
