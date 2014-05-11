/// <reference path="../../../globals.d.ts" />
/// <reference path="../string/parser.d.ts" />
/// <reference path="../string/stringifier.d.ts" />

declare module goog.json {

    interface Processor extends goog.string.Parser, goog.string.Stringifier {
    }
}
