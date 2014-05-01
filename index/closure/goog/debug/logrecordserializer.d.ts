// Generated Wed Apr 30 22:44:42 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />

declare module goog.debug.logRecordSerializer {

    /**
     * Serializes a LogRecord to a JSON string.  Note that any associated
     * exception is likely to be lost.
     * @param {goog.debug.LogRecord} record The record to serialize.
     * @return {string} Serialized JSON string of the log message.
     */
    function serialize(record: goog.debug.LogRecord): string;

    /**
     * Deserializes a JSON-serialized LogRecord.
     * @param {string} s The JSON serialized record.
     * @return {!goog.debug.LogRecord} The deserialized record.
     */
    function parse(s: string): goog.debug.LogRecord;

    /**
     * Deserializes a JSON-serialized LogRecord.  Use this only if you're
     * naive enough to blindly trust any JSON formatted input that comes
     * your way.
     * @param {string} s The JSON serialized record.
     * @return {!goog.debug.LogRecord} The deserialized record.
     */
    function unsafeParse(s: string): goog.debug.LogRecord;
}

