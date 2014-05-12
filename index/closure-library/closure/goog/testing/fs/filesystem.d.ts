/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../fs/filesystem.d.ts" />
/// <reference path="../../fs/entry.d.ts" />

declare module goog.testing.fs {

    class FileSystem extends FileSystem.__Class { }
    module FileSystem {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.fs.FileSystem {
    
            /**
             * A mock filesystem object.
             *
             * @param {string=} opt_name The name of the filesystem.
             * @constructor
             * @implements {goog.fs.FileSystem}
             * @final
             */
            constructor(opt_name?: string);
    
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
