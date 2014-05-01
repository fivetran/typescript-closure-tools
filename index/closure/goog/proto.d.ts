// Generated Wed Apr 30 16:27:42 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.proto' {

    /**
     * Serializes an object or a value to a protocol buffer string.
     * @param {Object} object The object to serialize.
     * @return {string} The serialized protocol buffer string.
     */
    function serialize(object: Object): string;

    /**
     * Object that can serialize objects or values to a protocol buffer string.
     * @constructor
     * @extends {goog.json.Serializer}
     * @final
     */
    class Serializer extends goog.json.Serializer {
        /**
         * Object that can serialize objects or values to a protocol buffer string.
         * @constructor
         * @extends {goog.json.Serializer}
         * @final
         */
        constructor();
    
        /**
         * Serializes an array to a protocol buffer string. This overrides the JSON
         * method to output empty slots when the value is null or undefined.
         * @param {Array} arr The array to serialize.
         * @param {Array} sb Array used as a string builder.
         * @override
         */
        serializeArray(arr: any[], sb: any[]): void;
    }
}

