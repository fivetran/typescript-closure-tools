/// <reference path="../../../globals.d.ts" />
/// <reference path="./serializer.d.ts" />
/// <reference path="./message.d.ts" />
/// <reference path="./fielddescriptor.d.ts" />

declare module goog.proto2 {

    class LazyDeserializer extends LazyDeserializer.__Class { }
    module LazyDeserializer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.proto2.Serializer.__Class {
    
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
            deserializeField(message: goog.proto2.Message, field: goog.proto2.FieldDescriptor, data: any): any;
        }
    }
}
