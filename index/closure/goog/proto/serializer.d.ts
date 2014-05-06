/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />

declare module goog.proto {

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
    }
}

