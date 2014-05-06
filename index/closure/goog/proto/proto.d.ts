/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/proto/serializer.d.ts" />

declare module goog.proto {

    /**
     * Serializes an object or a value to a protocol buffer string.
     * @param {Object} object The object to serialize.
     * @return {string} The serialized protocol buffer string.
     */
    function serialize(object: Object): string;
}

