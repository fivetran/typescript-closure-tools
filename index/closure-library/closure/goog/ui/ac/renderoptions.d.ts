/// <reference path="../../../../globals.d.ts" />

declare module goog.ui.ac {

    class RenderOptions extends RenderOptions.__Class { }
    module RenderOptions {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A simple class that contains options for rendering a set of autocomplete
             * matches.  Used as an optional argument in the callback from the matcher.
             * @constructor
             */
            constructor();
    
            /**
             * @param {boolean} flag The new value for the preserveHilited_ flag.
             */
            setPreserveHilited(flag: boolean): void;
    
            /**
             * @return {boolean} The value of the preserveHilited_ flag.
             */
            getPreserveHilited(): boolean;
    
            /**
             * @param {boolean} flag The new value for the autoHilite_ flag.
             */
            setAutoHilite(flag: boolean): void;
    
            /**
             * @return {boolean|undefined} The value of the autoHilite_ flag.
             */
            getAutoHilite(): any /*boolean|any (undefined)*/;
        }
    }
}
