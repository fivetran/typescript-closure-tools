// Generated Thu May  1 16:38:25 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/proto2/fielddescriptor.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/proto2/descriptor.d.ts" />
/// <reference path="../../goog/proto2/message.d.ts" />
/// <reference path="../../goog/proto2/serializer.d.ts" />

declare module goog.proto2 {

    /**
     * Base class for all lazy deserializers.
     *
     * @constructor
     * @extends {goog.proto2.Serializer}
     */
    class LazyDeserializer extends goog.proto2.Serializer {
        /**
         * Base class for all lazy deserializers.
         *
         * @constructor
         * @extends {goog.proto2.Serializer}
         */
        constructor();
    
        /**
         * Deserializes a message field from the expected format and places the
         * data in the given message
         *
         * @param {goog.proto2.Message} message The message in which to
         *     place the information.
         * @param {goog.proto2.FieldDescriptor} field The field for which to set the
         *     message value.
         * @param {*} data The serialized data for the field.
         *
         * @return {*} The deserialized data or null for no value found.
         */
        deserializeField: any /*missing*/;
    }
}

