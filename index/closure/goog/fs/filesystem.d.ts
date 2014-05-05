// Generated Sun May  4 18:18:20 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.fs {

    /**
     * A local filesystem.
     *
     * @interface
     */
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

