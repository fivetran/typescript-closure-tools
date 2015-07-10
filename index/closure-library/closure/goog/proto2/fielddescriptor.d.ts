/// <reference path="../../../globals.d.ts" />
/// <reference path="./descriptor.d.ts" />

declare module goog.proto2 {

    class FieldDescriptor extends FieldDescriptor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldDescriptor__Class  { 
    
            /**
             * A class which describes a field in a Protocol Buffer 2 Message.
             *
             * @param {Function} messageType Constructor for the message
             *     class to which the field described by this class belongs.
             * @param {number|string} tag The field's tag index.
             * @param {Object} metadata The metadata about this field that will be used
             *     to construct this descriptor.
             *
             * @constructor
             * @final
             */
            constructor(messageType: Function, tag: number|string, metadata: Object);
    
            /**
             * Returns the tag of the field that this descriptor represents.
             *
             * @return {number} The tag number.
             */
            getTag(): number;
    
            /**
             * Returns the descriptor describing the message that defined this field.
             * @return {goog.proto2.Descriptor} The descriptor.
             */
            getContainingType(): goog.proto2.Descriptor;
    
            /**
             * Returns the name of the field that this descriptor represents.
             * @return {string} The name.
             */
            getName(): string;
    
            /**
             * Returns the default value of this field.
             * @return {*} The default value.
             */
            getDefaultValue(): any;
    
            /**
             * Returns the field type of the field described by this descriptor.
             * @return {goog.proto2.FieldDescriptor.FieldType} The field type.
             */
            getFieldType(): goog.proto2.FieldDescriptor.FieldType;
    
            /**
             * Returns the native (i.e. ECMAScript) type of the field described by this
             * descriptor.
             *
             * @return {Object} The native type.
             */
            getNativeType(): Object;
    
            /**
             * Returns true if simple conversions between numbers and strings are permitted
             * during deserialization for this field.
             *
             * @return {boolean} Whether conversion is permitted.
             */
            deserializationConversionPermitted(): boolean;
    
            /**
             * Returns the descriptor of the message type of this field. Only valid
             * for fields of type GROUP and MESSAGE.
             *
             * @return {goog.proto2.Descriptor} The message descriptor.
             */
            getFieldMessageType(): goog.proto2.Descriptor;
    
            /**
             * @return {boolean} True if the field stores composite data or repeated
             *     composite data (message or group).
             */
            isCompositeType(): boolean;
    
            /**
             * Returns whether the field described by this descriptor is repeating.
             * @return {boolean} Whether the field is repeated.
             */
            isRepeated(): boolean;
    
            /**
             * Returns whether the field described by this descriptor is required.
             * @return {boolean} Whether the field is required.
             */
            isRequired(): boolean;
    
            /**
             * Returns whether the field described by this descriptor is optional.
             * @return {boolean} Whether the field is optional.
             */
            isOptional(): boolean;
    } 
    
}

declare module goog.proto2.FieldDescriptor {

    /**
     * An enumeration defining the possible field types.
     * Should be a mirror of that defined in descriptor.h.
     *
     * @enum {number}
     */
    enum FieldType { DOUBLE, FLOAT, INT64, UINT64, INT32, FIXED64, FIXED32, BOOL, STRING, GROUP, MESSAGE, BYTES, UINT32, ENUM, SFIXED32, SFIXED64, SINT32, SINT64 } 
}
