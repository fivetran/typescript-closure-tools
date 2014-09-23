/// <reference path="../../../globals.d.ts" />
/// <reference path="./processor.d.ts" />
/// <reference path="./json.d.ts" />

declare module goog.json {

    class NativeJsonProcessor extends NativeJsonProcessor.__Class { }
    module NativeJsonProcessor {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.json.Processor {
    
            /**
             * A class that parses and stringifies JSON using the browser's built-in JSON
             * library, if it is avaliable.
             *
             * Note that the native JSON api has subtle differences across browsers, so
             * use this implementation with care.  See json_test#assertSerialize
             * for details on the differences from goog.json.
             *
             * This implementation is signficantly faster than goog.json, at least on
             * Chrome.  See json_perf.html for a perf test showing the difference.
             *
             * @param {?goog.json.Replacer=} opt_replacer An optional replacer to use during
             *     serialization.
             * @param {?goog.json.Reviver=} opt_reviver An optional reviver to use during
             *     parsing.
             * @constructor
             * @implements {goog.json.Processor}
             * @final
             */
            constructor(opt_replacer?: goog.json.Replacer, opt_reviver?: goog.json.Reviver);
        }
    }
}
