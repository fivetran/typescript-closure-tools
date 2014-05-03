// Generated Sat May  3 12:11:56 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />
/// <reference path="../../goog/string/stringifier.d.ts" />
/// <reference path="../../goog/string/parser.d.ts" />
/// <reference path="../../goog/json/processor.d.ts" />

declare module goog.json {

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
    }
}

