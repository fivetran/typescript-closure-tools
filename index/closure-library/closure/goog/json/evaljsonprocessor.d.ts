/// <reference path="../../../globals.d.ts" />
/// <reference path="./processor.d.ts" />
/// <reference path="./json.d.ts" />

declare module goog.json {

    class EvalJsonProcessor extends EvalJsonProcessor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class EvalJsonProcessor__Class implements goog.json.Processor  { 
    
            /**
             * A class that parses and stringifies JSON using eval (as implemented in
             * goog.json).
             * Adapts {@code goog.json} to the {@code goog.json.Processor} interface.
             *
             * @param {?goog.json.Replacer=} opt_replacer An optional replacer to use during
             *     serialization.
             * @param {?boolean=} opt_useUnsafeParsing Whether to use goog.json.unsafeParse
             *     for parsing. Safe parsing is very slow on large strings. On the other
             *     hand, unsafe parsing uses eval() without checking whether the string is
             *     valid, so it should only be used if you trust the source of the string.
             * @constructor
             * @implements {goog.json.Processor}
             * @final
             */
            constructor(opt_replacer?: goog.json.Replacer, opt_useUnsafeParsing?: boolean);

            /**
             * Parses a string into an object and returns the result.
             * Agnostic to the format of string and object.
             *
             * @param {string} s The string to parse.
             * @return {*} The object generated from the string.
             */
            parse(s: string): any;

            /**
             * Serializes an object or a value to a string.
             * Agnostic to the particular format of object and string.
             *
             * @param {*} object The object to stringify.
             * @return {string} A string representation of the input.
             */
            stringify(object: any): string;
    }
}
