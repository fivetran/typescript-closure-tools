/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/string/stringifier.d.ts" />
/// <reference path="../../../closure/goog/string/parser.d.ts" />
/// <reference path="../../../closure/goog/json/processor.d.ts" />

declare module goog.json {

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
    class NativeJsonProcessor implements goog.json.Processor {
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
    
        /**
         * Serializes an object or a value to a string.
         * Agnostic to the particular format of object and string.
         *
         * @param {*} object The object to stringify.
         * @return {string} A string representation of the input.
         */
        stringify(object: any): string;
    
        /**
         * Parses a string into an object and returns the result.
         * Agnostic to the format of string and object.
         *
         * @param {string} s The string to parse.
         * @return {*} The object generated from the string.
         */
        parse(s: string): any;
    }
}

