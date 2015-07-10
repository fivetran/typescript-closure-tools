/// <reference path="../../../globals.d.ts" />
/// <reference path="./processor.d.ts" />

declare module goog.json {

    class HybridJsonProcessor extends HybridJsonProcessor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class HybridJsonProcessor__Class implements goog.json.Processor  { 
    
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
