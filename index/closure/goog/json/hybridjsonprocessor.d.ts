// Generated Thu May  1 16:38:30 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/json/hybrid.d.ts" />
/// <reference path="../../goog/string/stringifier.d.ts" />
/// <reference path="../../goog/string/parser.d.ts" />
/// <reference path="../../goog/json/processor.d.ts" />

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
    }
}

