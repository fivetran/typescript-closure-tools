/// <reference path="../../../globals.d.ts" />
/// <reference path="./debugwindow.d.ts" />

declare module goog.debug {

    class FancyWindow extends FancyWindow.__Class { }
    module FancyWindow {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.debug.DebugWindow.__Class {
    
            /**
             * Provides a Fancy extension to the DebugWindow class.  Allows filtering based
             * on loggers and levels.
             *
             * @param {string=} opt_identifier Idenitifier for this logging class.
             * @param {string=} opt_prefix Prefix pre-pended to messages.
             * @constructor
             * @extends {goog.debug.DebugWindow}
             */
            constructor(opt_identifier?: string, opt_prefix?: string);
        }
    }
}

declare module goog.debug.FancyWindow {

    /**
     * Constant indicating if we are able to use localStorage to persist filters
     * @type {boolean}
     */
    var HAS_LOCAL_STORE: boolean;

    /**
     * Constant defining the prefix to use when storing log levels
     * @type {string}
     */
    var LOCAL_STORE_PREFIX: string;
}
