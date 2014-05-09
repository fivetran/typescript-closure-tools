/// <reference path="../../../globals.d.ts" />
/// <reference path="./processor.d.ts" />

declare module goog.json {

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
