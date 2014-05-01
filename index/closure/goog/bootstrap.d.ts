// Generated Wed Apr 30 16:30:30 PDT 2014


declare module 'global' {

    /**
     * The goog namespace in the global scope.
     */
    var goog: any /*missing*/;

    /**
     * Imports a script using Node's require() API.
     *
     * @param {string} src The script source.
     * @return {boolean} True if the script was imported, false otherwise.
     */
    function CLOSURE_IMPORT_SCRIPT(src: string): boolean;
}

declare module 'goog' {

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
    var nodeGlobalRequire: any /*missing*/;
}

