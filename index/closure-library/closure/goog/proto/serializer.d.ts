/// <reference path="../../../globals.d.ts" />
/// <reference path="../json/json.d.ts" />

declare module goog.proto {

    class Serializer extends goog.json.Serializer {
    
        /**
         * Object that can serialize objects or values to a protocol buffer string.
         * @constructor
         * @extends {goog.json.Serializer}
         * @final
         */
        constructor();
    }
}
