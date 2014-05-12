/// <reference path="../../../globals.d.ts" />
/// <reference path="./entry.d.ts" />

declare module goog.fs {

    interface FileSystem {
    
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
