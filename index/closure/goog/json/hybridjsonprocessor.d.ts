/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/json/hybrid.d.ts" />
/// <reference path="../../../closure/goog/string/stringifier.d.ts" />
/// <reference path="../../../closure/goog/string/parser.d.ts" />
/// <reference path="../../../closure/goog/json/processor.d.ts" />

declare module goog.json {

    /**
     * Processor form of goog.json.hybrid, which attempts to parse/serialize
     * JSON using native JSON methods, falling back to goog.json if not
     * available.
     * @constructor
     * @implements {goog.json.Processor}
     * @final
     */
    class HybridJsonProcessor implements goog.json.Processor {
        /**
         * Processor form of goog.json.hybrid, which attempts to parse/serialize
         * JSON using native JSON methods, falling back to goog.json if not
         * available.
         * @constructor
         * @implements {goog.json.Processor}
         * @final
         */
        constructor();
    
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

