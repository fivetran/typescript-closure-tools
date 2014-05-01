// Generated Wed Apr 30 16:28:06 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.json.hybrid' {

    /**
     * Attempts to serialize the JSON string natively, falling back to
     * {@code goog.json.serialize} if unsuccessful.
     * @param {!Object} obj JavaScript object to serialize to JSON.
     * @return {string} Resulting JSON string.
     */
    function stringify(obj: Object): string;

    /**
     * Attempts to parse the JSON string natively, falling back to
     * {@code goog.json.parse} if unsuccessful.
     * @param {string} jsonString JSON string to parse.
     * @return {!Object} Resulting JSON object.
     */
    function parse(jsonString: string): Object;

    /**
     * Attempts to parse the JSON string natively, falling back to
     * {@code goog.json.unsafeParse} if unsuccessful.
     * @param {string} jsonString JSON string to parse.
     * @return {!Object} Resulting JSON object.
     */
    function unsafeParse(jsonString: string): Object;
}

declare module 'goog.json' {

    /**
     * Parses a JSON string and returns the result. This throws an exception if
     * the string is an invalid JSON string.
     *
     * Note that this is very slow on large strings. If you trust the source of
     * the string then you should use unsafeParse instead.
     *
     * @param {*} s The JSON string to parse.
     * @throws Error if s is invalid JSON.
     * @return {Object} The object generated from the JSON string, or null.
     */
    var parse: any /*missing*/;

    /**
     * Parses a JSON string and returns the result. This uses eval so it is open
     * to security issues and it should only be used if you trust the source.
     *
     * @param {string} s The JSON string to parse.
     * @return {Object} The object generated from the JSON string.
     */
    var unsafeParse: any /*missing*/;

    /**
     * JSON replacer, as defined in Section 15.12.3 of the ES5 spec.
     * @see http://ecma-international.org/ecma-262/5.1/#sec-15.12.3
     *
     * TODO(nicksantos): Array should also be a valid replacer.
     *
     * @typedef {function(this:Object, string, *): *}
     */
    interface Replacer {
        (string, any): any
    }

    /**
     * JSON reviver, as defined in Section 15.12.2 of the ES5 spec.
     * @see http://ecma-international.org/ecma-262/5.1/#sec-15.12.3
     *
     * @typedef {function(this:Object, string, *): *}
     */
    interface Reviver {
        (string, any): any
    }

    /**
     * Serializes an object or a value to a JSON string.
     *
     * @param {*} object The object to serialize.
     * @param {?goog.json.Replacer=} opt_replacer A replacer function
     *     called for each (key, value) pair that determines how the value
     *     should be serialized. By defult, this just returns the value
     *     and allows default serialization to kick in.
     * @throws Error if there are loops in the object graph.
     * @return {string} A JSON string representation of the input.
     */
    var serialize: any /*missing*/;

    /**
     * An interface for JSON parsing and serialization.
     * @interface
     * @extends {goog.string.Parser}
     * @extends {goog.string.Stringifier}
     */
    interface Processor {
    }

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
    class EvalJsonProcessor implements goog.json.Processor {
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
    
        /** @override */
        stringify(): void;
    
        /** @override */
        parse(): void;
    }

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
    
        /** @override */
        stringify: any /*missing*/;
    
        /** @override */
        parse: any /*missing*/;
    }

    /**
     * Class that is used to serialize JSON objects to a string.
     * @param {?goog.json.Replacer=} opt_replacer Replacer.
     * @constructor
     */
    class Serializer {
        /**
         * Class that is used to serialize JSON objects to a string.
         * @param {?goog.json.Replacer=} opt_replacer Replacer.
         * @constructor
         */
        constructor(opt_replacer?: goog.json.Replacer);
    
        /**
         * Serializes an object or a value to a JSON string.
         *
         * @param {*} object The object to serialize.
         * @throws Error if there are loops in the object graph.
         * @return {string} A JSON string representation of the input.
         */
        serialize(object: any): string;
    
        /**
         * Serializes a generic value to a JSON string
         * @protected
         * @param {*} object The object to serialize.
         * @param {Array} sb Array used as a string builder.
         * @throws Error if there are loops in the object graph.
         */
        serializeInternal(object: any, sb: any[]): void;
    
        /**
         * Serializes an array to a JSON string
         * @param {Array} arr The array to serialize.
         * @param {Array} sb Array used as a string builder.
         * @protected
         */
        serializeArray(arr: any[], sb: any[]): void;
    }

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
    
        /** @override */
        stringify(): void;
    
        /** @override */
        parse(): void;
    }
}

