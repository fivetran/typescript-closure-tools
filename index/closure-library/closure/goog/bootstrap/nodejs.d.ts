/// <reference path="../../../globals.d.ts" />

declare module goog {

    /**
     * Bootstraps a file into the global scope.
     *
     * This is strictly for cases where normal require() won't work,
     * because the file declares global symbols with 'var' that need to
     * be added to the global scope.
     * @suppress {missingProvide}
     *
     * @param {string} file The path to the file.
     */
    function nodeGlobalRequire(file: string): void;
}
