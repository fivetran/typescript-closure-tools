// Generated Wed Apr 30 22:37:50 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />

declare module goog.json.hybrid {

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

