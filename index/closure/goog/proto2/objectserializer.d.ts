/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/proto2/fielddescriptor.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/proto2/descriptor.d.ts" />
/// <reference path="../../../closure/goog/proto2/message.d.ts" />
/// <reference path="../../../closure/goog/proto2/serializer.d.ts" />

declare module goog.proto2 {

    /**
     * ObjectSerializer, a serializer which turns Messages into simplified
     * ECMAScript objects.
     *
     * @param {goog.proto2.ObjectSerializer.KeyOption=} opt_keyOption If specified,
     *     which key option to use when serializing/deserializing.
     * @constructor
     * @extends {goog.proto2.Serializer}
     */
    class ObjectSerializer extends goog.proto2.Serializer {
        /**
         * ObjectSerializer, a serializer which turns Messages into simplified
         * ECMAScript objects.
         *
         * @param {goog.proto2.ObjectSerializer.KeyOption=} opt_keyOption If specified,
         *     which key option to use when serializing/deserializing.
         * @constructor
         * @extends {goog.proto2.Serializer}
         */
        constructor(opt_keyOption?: goog.proto2.ObjectSerializer.KeyOption);
    }
}

declare module goog.proto2.ObjectSerializer {

    /**
     * An enumeration of the options for how to emit the keys in
     * the generated simplified object.
     *
     * @enum {number}
     */
    enum KeyOption { TAG, NAME } 
}

