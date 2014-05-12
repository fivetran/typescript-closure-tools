/// <reference path="../../../globals.d.ts" />
/// <reference path="./serializer.d.ts" />

declare module goog.proto2 {

    class ObjectSerializer extends ObjectSerializer.__Class { }
    module ObjectSerializer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.proto2.Serializer.__Class {
    
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
