// Generated Wed Apr 30 16:27:54 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.proto2' {

    /**
     * @typedef {{name: (string|undefined),
     *            fullName: (string|undefined),
     *            containingType: (goog.proto2.Message|undefined)}}
     */
    var Metadata: any /*missing*/;

    /**
     * A class which describes a Protocol Buffer 2 Message.
     *
     * @param {function(new:goog.proto2.Message)} messageType Constructor for
     *      the message class that this descriptor describes.
     * @param {!goog.proto2.Metadata} metadata The metadata about the message that
     *      will be used to construct this descriptor.
     * @param {Array.<!goog.proto2.FieldDescriptor>} fields The fields of the
     *      message described by this descriptor.
     *
     * @constructor
     * @final
     */
    class Descriptor {
        /**
         * A class which describes a Protocol Buffer 2 Message.
         *
         * @param {function(new:goog.proto2.Message)} messageType Constructor for
         *      the message class that this descriptor describes.
         * @param {!goog.proto2.Metadata} metadata The metadata about the message that
         *      will be used to construct this descriptor.
         * @param {Array.<!goog.proto2.FieldDescriptor>} fields The fields of the
         *      message described by this descriptor.
         *
         * @constructor
         * @final
         */
        constructor(messageType: () => any /*missing*/, metadata: goog.proto2.Metadata, fields: goog.proto2.FieldDescriptor[]);
    
        /**
         * Returns the name of the message, if any.
         *
         * @return {?string} The name.
         */
        getName(): string;
    
        /**
         * Returns the full name of the message, if any.
         *
         * @return {?string} The name.
         */
        getFullName(): string;
    
        /**
         * Returns the descriptor of the containing message type or null if none.
         *
         * @return {goog.proto2.Descriptor} The descriptor.
         */
        getContainingType(): goog.proto2.Descriptor;
    
        /**
         * Returns the fields in the message described by this descriptor ordered by
         * tag.
         *
         * @return {!Array.<!goog.proto2.FieldDescriptor>} The array of field
         *     descriptors.
         */
        getFields(): goog.proto2.FieldDescriptor[];
    
        /**
         * Returns the fields in the message as a key/value map, where the key is
         * the tag number of the field. DO NOT MODIFY THE RETURNED OBJECT. We return
         * the actual, internal, fields map for performance reasons, and changing the
         * map can result in undefined behavior of this library.
         *
         * @return {!Object.<number, !goog.proto2.FieldDescriptor>} The field map.
         */
        getFieldsMap(): { [key: number]: goog.proto2.FieldDescriptor };
    
        /**
         * Returns the field matching the given name, if any. Note that
         * this method searches over the *original* name of the field,
         * not the camelCase version.
         *
         * @param {string} name The field name for which to search.
         *
         * @return {goog.proto2.FieldDescriptor} The field found, if any.
         */
        findFieldByName(name: string): goog.proto2.FieldDescriptor;
    
        /**
         * Returns the field matching the given tag number, if any.
         *
         * @param {number|string} tag The field tag number for which to search.
         *
         * @return {goog.proto2.FieldDescriptor} The field found, if any.
         */
        findFieldByTag(tag: any /*number|string*/): goog.proto2.FieldDescriptor;
    
        /**
         * Creates an instance of the message type that this descriptor
         * describes.
         *
         * @return {!goog.proto2.Message} The instance of the message.
         */
        createMessageInstance(): goog.proto2.Message;
    }

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
    class FieldDescriptor {
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
        constructor(messageType: Function, tag: any /*number|string*/, metadata: Object);
    
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
    
        /** @override */
        deserialize(): void;
    
        /** @override */
        deserializeTo(): void;
    
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

    /**
     * Abstract base class for all Protocol Buffer 2 messages. It will be
     * subclassed in the code generated by the Protocol Compiler. Any other
     * subclasses are prohibited.
     * @constructor
     */
    class Message {
        /**
         * Abstract base class for all Protocol Buffer 2 messages. It will be
         * subclassed in the code generated by the Protocol Compiler. Any other
         * subclasses are prohibited.
         * @constructor
         */
        constructor();
    
        /**
         * Initializes the message with a lazy deserializer and its associated data.
         * This method should be called by internal methods ONLY.
         *
         * @param {goog.proto2.LazyDeserializer} deserializer The lazy deserializer to
         *   use to decode the data on the fly.
         *
         * @param {*} data The data to decode/deserialize.
         */
        initializeForLazyDeserializer(deserializer: goog.proto2.LazyDeserializer, data: any): void;
    
        /**
         * Sets the value of an unknown field, by tag.
         *
         * @param {number} tag The tag of an unknown field (must be >= 1).
         * @param {*} value The value for that unknown field.
         */
        setUnknown(tag: number, value: any): void;
    
        /**
         * Iterates over all the unknown fields in the message.
         *
         * @param {function(number, *)} callback A callback method
         *     which gets invoked for each unknown field.
         * @param {Object=} opt_scope The scope under which to execute the callback.
         *     If not given, the current message will be used.
         */
        forEachUnknown(callback: (_0: number, _1: any) => any /*missing*/, opt_scope?: Object): void;
    
        /**
         * Returns the descriptor which describes the current message.
         *
         * This only works if we assume people never subclass protobufs.
         *
         * @return {!goog.proto2.Descriptor} The descriptor.
         */
        getDescriptor(): goog.proto2.Descriptor;
    
        /**
         * Returns whether there is a value stored at the field specified by the
         * given field descriptor.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to check
         *     if there is a value.
         *
         * @return {boolean} True if a value was found.
         */
        has(field: goog.proto2.FieldDescriptor): boolean;
    
        /**
         * Returns the array of values found for the given repeated field.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to
         *     return the values.
         *
         * @return {!Array} The values found.
         */
        arrayOf(field: goog.proto2.FieldDescriptor): any[];
    
        /**
         * Returns the number of values stored in the given field.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to count
         *     the number of values.
         *
         * @return {number} The count of the values in the given field.
         */
        countOf(field: goog.proto2.FieldDescriptor): number;
    
        /**
         * Returns the value stored at the field specified by the
         * given field descriptor.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to get the
         *     value.
         * @param {number=} opt_index If the field is repeated, the index to use when
         *     looking up the value.
         *
         * @return {*} The value found or null if none.
         */
        get(field: goog.proto2.FieldDescriptor, opt_index?: number): any;
    
        /**
         * Returns the value stored at the field specified by the
         * given field descriptor or the default value if none exists.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to get the
         *     value.
         * @param {number=} opt_index If the field is repeated, the index to use when
         *     looking up the value.
         *
         * @return {*} The value found or the default if none.
         */
        getOrDefault(field: goog.proto2.FieldDescriptor, opt_index?: number): any;
    
        /**
         * Stores the given value to the field specified by the
         * given field descriptor. Note that the field must not be repeated.
         *
         * @param {goog.proto2.FieldDescriptor} field The field for which to set
         *     the value.
         * @param {*} value The new value for the field.
         */
        set(field: goog.proto2.FieldDescriptor, value: any): void;
    
        /**
         * Adds the given value to the field specified by the
         * given field descriptor. Note that the field must be repeated.
         *
         * @param {goog.proto2.FieldDescriptor} field The field in which to add the
         *     the value.
         * @param {*} value The new value to add to the field.
         */
        add(field: goog.proto2.FieldDescriptor, value: any): void;
    
        /**
         * Clears the field specified.
         *
         * @param {goog.proto2.FieldDescriptor} field The field to clear.
         */
        clear(field: goog.proto2.FieldDescriptor): void;
    
        /**
         * Compares this message with another one ignoring the unknown fields.
         * @param {*} other The other message.
         * @return {boolean} Whether they are equal. Returns false if the {@code other}
         *     argument is a different type of message or not a message.
         */
        equals(other: any): boolean;
    
        /**
         * Recursively copies the known fields from the given message to this message.
         * Removes the fields which are not present in the source message.
         * @param {!goog.proto2.Message} message The source message.
         */
        copyFrom(message: goog.proto2.Message): void;
    
        /**
         * Merges the given message into this message.
         *
         * Singular fields will be overwritten, except for embedded messages which will
         * be merged. Repeated fields will be concatenated.
         * @param {!goog.proto2.Message} message The source message.
         */
        mergeFrom(message: goog.proto2.Message): void;
    
        /**
         * @return {!goog.proto2.Message} Recursive clone of the message only including
         *     the known fields.
         */
        clone(): goog.proto2.Message;
    
        /**
         * Fills in the protocol buffer with default values. Any fields that are
         * already set will not be overridden.
         * @param {boolean} simpleFieldsToo If true, all fields will be initialized;
         *     if false, only the nested messages and groups.
         */
        initDefaults(simpleFieldsToo: boolean): void;
    
        /**
         * Returns the whether or not the field indicated by the given tag
         * has a value.
         *
         * GENERATED CODE USE ONLY. Basis of the has{Field} methods.
         *
         * @param {number} tag The tag.
         *
         * @return {boolean} Whether the message has a value for the field.
         */
        has$Value(tag: number): boolean;
    
        /**
         * Gets the value at the field indicated by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the get{Field} methods.
         *
         * @param {number} tag The field's tag index.
         * @param {number=} opt_index If the field is a repeated field, the index
         *     at which to get the value.
         *
         * @return {*} The value found or null for none.
         * @protected
         */
        get$Value(tag: number, opt_index?: number): any;
    
        /**
         * Gets the value at the field indicated by the given tag or the default value
         * if none.
         *
         * GENERATED CODE USE ONLY. Basis of the get{Field} methods.
         *
         * @param {number} tag The field's tag index.
         * @param {number=} opt_index If the field is a repeated field, the index
         *     at which to get the value.
         *
         * @return {*} The value found or the default value if none set.
         * @protected
         */
        get$ValueOrDefault(tag: number, opt_index?: number): any;
    
        /**
         * Gets the values at the field indicated by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the {field}Array methods.
         *
         * @param {number} tag The field's tag index.
         *
         * @return {!Array} The values found. If none, returns an empty array.
         * @protected
         */
        array$Values(tag: number): any[];
    
        /**
         * Returns the number of values stored in the field by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the {field}Count methods.
         *
         * @param {number} tag The tag.
         *
         * @return {number} The number of values.
         * @protected
         */
        count$Values(tag: number): number;
    
        /**
         * Sets the value of the *non-repeating* field indicated by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the set{Field} methods.
         *
         * @param {number} tag The field's tag index.
         * @param {*} value The field's value.
         * @protected
         */
        set$Value(tag: number, value: any): void;
    
        /**
         * Adds the value to the *repeating* field indicated by the given tag.
         *
         * GENERATED CODE USE ONLY. Basis of the add{Field} methods.
         *
         * @param {number} tag The field's tag index.
         * @param {*} value The value to add.
         * @protected
         */
        add$Value(tag: number, value: any): void;
    
        /**
         * Clears the field specified by tag.
         *
         * GENERATED CODE USE ONLY. Basis of the clear{Field} methods.
         *
         * @param {number} tag The tag of the field to clear.
         * @protected
         */
        clear$Field(tag: number): void;
    }

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
    
        /**
         * Serializes a message to an object.
         *
         * @param {goog.proto2.Message} message The message to be serialized.
         * @return {!Object} The serialized form of the message.
         * @override
         */
        serialize(message: goog.proto2.Message): Object;
    
        /**
         * Deserializes a message from an object and places the
         * data in the message.
         *
         * @param {goog.proto2.Message} message The message in which to
         *     place the information.
         * @param {*} data The data of the message.
         * @override
         */
        deserializeTo(message: goog.proto2.Message, data: any): void;
    }

    /**
     * PB-Lite serializer.
     *
     * @constructor
     * @extends {goog.proto2.LazyDeserializer}
     */
    class PbLiteSerializer extends goog.proto2.LazyDeserializer {
        /**
         * PB-Lite serializer.
         *
         * @constructor
         * @extends {goog.proto2.LazyDeserializer}
         */
        constructor();
    
        /**
         * By default, the proto tag with id 1 will have index 1 in the serialized
         * array.
         *
         * If the serializer is set to use zero-indexing, the tag with id 1 will have
         * index 0.
         *
         * @param {boolean} zeroIndexing Whether this serializer should deal with
         *     0-indexed protos.
         */
        setZeroIndexed(zeroIndexing: boolean): void;
    
        /**
         * Serializes a message to a PB-Lite object.
         *
         * @param {goog.proto2.Message} message The message to be serialized.
         * @return {!Array} The serialized form of the message.
         * @override
         */
        serialize(message: goog.proto2.Message): any[];
    
        /** @override */
        deserializeField(): void;
    
        /** @override */
        getSerializedValue(): void;
    
        /** @override */
        getDeserializedValue(): void;
    
        /** @override */
        deserialize(): void;
    }

    /**
     * Abstract base class for PB2 serializers. A serializer is a class which
     * implements the serialization and deserialization of a Protocol Buffer Message
     * to/from a specific format.
     *
     * @constructor
     */
    class Serializer {
        /**
         * Abstract base class for PB2 serializers. A serializer is a class which
         * implements the serialization and deserialization of a Protocol Buffer Message
         * to/from a specific format.
         *
         * @constructor
         */
        constructor();
    
        /**
         * Serializes a message to the expected format.
         *
         * @param {goog.proto2.Message} message The message to be serialized.
         *
         * @return {*} The serialized form of the message.
         */
        serialize: any /*missing*/;
    
        /**
         * Returns the serialized form of the given value for the given field
         * if the field is a Message or Group and returns the value unchanged
         * otherwise.
         *
         * @param {goog.proto2.FieldDescriptor} field The field from which this
         *     value came.
         *
         * @param {*} value The value of the field.
         *
         * @return {*} The value.
         * @protected
         */
        getSerializedValue(field: goog.proto2.FieldDescriptor, value: any): any;
    
        /**
         * Deserializes a message from the expected format.
         *
         * @param {goog.proto2.Descriptor} descriptor The descriptor of the message
         *     to be created.
         * @param {*} data The data of the message.
         *
         * @return {goog.proto2.Message} The message created.
         */
        deserialize(descriptor: goog.proto2.Descriptor, data: any): goog.proto2.Message;
    
        /**
         * Deserializes a message from the expected format and places the
         * data in the message.
         *
         * @param {goog.proto2.Message} message The message in which to
         *     place the information.
         * @param {*} data The data of the message.
         */
        deserializeTo: any /*missing*/;
    
        /**
         * Returns the deserialized form of the given value for the given field if the
         * field is a Message or Group and returns the value, converted or unchanged,
         * for primitive field types otherwise.
         *
         * @param {goog.proto2.FieldDescriptor} field The field from which this
         *     value came.
         *
         * @param {*} value The value of the field.
         *
         * @return {*} The value.
         * @protected
         */
        getDeserializedValue(field: goog.proto2.FieldDescriptor, value: any): any;
    }

    /**
     * TextFormatSerializer, a serializer which turns Messages into the human
     * readable text format.
     * @param {boolean=} opt_ignoreMissingFields If true, then fields that cannot be
     *     found on the proto when parsing the text format will be ignored.
     * @param {boolean=} opt_useEnumValues If true, serialization code for enums
     *     will use enum integer values instead of human-readable symbolic names.
     * @constructor
     * @extends {goog.proto2.Serializer}
     * @final
     */
    class TextFormatSerializer extends goog.proto2.Serializer {
        /**
         * TextFormatSerializer, a serializer which turns Messages into the human
         * readable text format.
         * @param {boolean=} opt_ignoreMissingFields If true, then fields that cannot be
         *     found on the proto when parsing the text format will be ignored.
         * @param {boolean=} opt_useEnumValues If true, serialization code for enums
         *     will use enum integer values instead of human-readable symbolic names.
         * @constructor
         * @extends {goog.proto2.Serializer}
         * @final
         */
        constructor(opt_ignoreMissingFields?: boolean, opt_useEnumValues?: boolean);
    
        /**
         * Deserializes a message from text format and places the data in the message.
         * @param {goog.proto2.Message} message The message in which to
         *     place the information.
         * @param {*} data The text format data.
         * @return {?string} The parse error or null on success.
         * @override
         */
        deserializeTo(message: goog.proto2.Message, data: any): string;
    
        /**
         * Serializes a message to a string.
         * @param {goog.proto2.Message} message The message to be serialized.
         * @return {string} The serialized form of the message.
         * @override
         */
        serialize(message: goog.proto2.Message): string;
    }
}

declare module 'goog.proto2.FieldDescriptor' {

    /**
     * An enumeration defining the possible field types.
     * Should be a mirror of that defined in descriptor.h.
     *
     * @enum {number}
     */
    enum FieldType { DOUBLE, FLOAT, INT64, UINT64, INT32, FIXED64, FIXED32, BOOL, STRING, GROUP, MESSAGE, BYTES, UINT32, ENUM, SFIXED32, SFIXED64, SINT32, SINT64 } 
}

declare module 'goog.proto2.Message' {

    /**
     * An enumeration defining the possible field types.
     * Should be a mirror of that defined in descriptor.h.
     *
     * TODO(user): Remove this alias.  The code generator generates code that
     * references this enum, so it needs to exist until the code generator is
     * changed.  The enum was moved to from Message to FieldDescriptor to avoid a
     * dependency cycle.
     *
     * Use goog.proto2.FieldDescriptor.FieldType instead.
     *
     * @enum {number}
     */
    enum FieldType { DOUBLE, FLOAT, INT64, UINT64, INT32, FIXED64, FIXED32, BOOL, STRING, GROUP, MESSAGE, BYTES, UINT32, ENUM, SFIXED32, SFIXED64, SINT32, SINT64 } 

    /**
     * Sets the metadata that represents the definition of this message.
     *
     * GENERATED CODE USE ONLY. Called when constructing message classes.
     *
     * @param {!Function} messageType Constructor for the
     *     message type to which this metadata applies.
     * @param {Object} metadataObj The object containing the metadata.
     */
    function set$Metadata(messageType: Function, metadataObj: Object): void;
}

declare module 'goog.proto2.ObjectSerializer' {

    /**
     * An enumeration of the options for how to emit the keys in
     * the generated simplified object.
     *
     * @enum {number}
     */
    enum KeyOption { TAG, NAME } 
}

declare module 'proto2.TestAllTypes' {

    /**
     * Enumeration NestedEnum.
     * @enum {number}
     */
    enum NestedEnum { FOO, BAR, BAZ } 

    /**
     * Message NestedMessage.
     * @constructor
     * @extends {goog.proto2.Message}
     * @final
     */
    class NestedMessage extends goog.proto2.Message {
        /**
         * Message NestedMessage.
         * @constructor
         * @extends {goog.proto2.Message}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
         * @return {!proto2.TestAllTypes.NestedMessage} The cloned message.
         * @override
         */
        clone: any /*missing*/;
    
        /**
         * Gets the value of the b field.
         * @return {?number} The value.
         */
        getB(): number;
    
        /**
         * Gets the value of the b field or the default value if not set.
         * @return {number} The value.
         */
        getBOrDefault(): number;
    
        /**
         * Sets the value of the b field.
         * @param {number} value The value.
         */
        setB(value: number): void;
    
        /**
         * @return {boolean} Whether the b field has a value.
         */
        hasB(): boolean;
    
        /**
         * @return {number} The number of values in the b field.
         */
        bCount(): number;
    
        /**
         * Clears the values in the b field.
         */
        clearB(): void;
    
        /**
         * Gets the value of the c field.
         * @return {?number} The value.
         */
        getC(): number;
    
        /**
         * Gets the value of the c field or the default value if not set.
         * @return {number} The value.
         */
        getCOrDefault(): number;
    
        /**
         * Sets the value of the c field.
         * @param {number} value The value.
         */
        setC(value: number): void;
    
        /**
         * @return {boolean} Whether the c field has a value.
         */
        hasC(): boolean;
    
        /**
         * @return {number} The number of values in the c field.
         */
        cCount(): number;
    
        /**
         * Clears the values in the c field.
         */
        clearC(): void;
    }

    /**
     * Message OptionalGroup.
     * @constructor
     * @extends {goog.proto2.Message}
     * @final
     */
    class OptionalGroup extends goog.proto2.Message {
        /**
         * Message OptionalGroup.
         * @constructor
         * @extends {goog.proto2.Message}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
         * @return {!proto2.TestAllTypes.OptionalGroup} The cloned message.
         * @override
         */
        clone: any /*missing*/;
    
        /**
         * Gets the value of the a field.
         * @return {?number} The value.
         */
        getA(): number;
    
        /**
         * Gets the value of the a field or the default value if not set.
         * @return {number} The value.
         */
        getAOrDefault(): number;
    
        /**
         * Sets the value of the a field.
         * @param {number} value The value.
         */
        setA(value: number): void;
    
        /**
         * @return {boolean} Whether the a field has a value.
         */
        hasA(): boolean;
    
        /**
         * @return {number} The number of values in the a field.
         */
        aCount(): number;
    
        /**
         * Clears the values in the a field.
         */
        clearA(): void;
    }

    /**
     * Message RepeatedGroup.
     * @constructor
     * @extends {goog.proto2.Message}
     * @final
     */
    class RepeatedGroup extends goog.proto2.Message {
        /**
         * Message RepeatedGroup.
         * @constructor
         * @extends {goog.proto2.Message}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
         * @return {!proto2.TestAllTypes.RepeatedGroup} The cloned message.
         * @override
         */
        clone: any /*missing*/;
    
        /**
         * Gets the value of the a field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getA(index: number): number;
    
        /**
         * Gets the value of the a field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getAOrDefault(index: number): number;
    
        /**
         * Adds a value to the a field.
         * @param {number} value The value to add.
         */
        addA(value: number): void;
    
        /**
         * Returns the array of values in the a field.
         * @return {!Array.<number>} The values in the field.
         */
        aArray(): number[];
    
        /**
         * @return {boolean} Whether the a field has a value.
         */
        hasA(): boolean;
    
        /**
         * @return {number} The number of values in the a field.
         */
        aCount(): number;
    
        /**
         * Clears the values in the a field.
         */
        clearA(): void;
    }
}

declare module 'goog.proto2.TextFormatSerializer.Parser' {

    /**
     * Parse NaN, positive infinity, or negative infinity from a string.
     * @param {string} identifier An identifier string to check.
     * @return {?number} Infinity, negative infinity, NaN, or null if none
     *     of the constants could be parsed.
     * @private.
     */
    function parseNumericalConstant_(identifier: string): number;
}

declare module 'goog.proto2.Util' {

    /**
     * Asserts that the given condition is true, if and only if the PBCHECK
     * flag is on.
     *
     * @param {*} condition The condition to check.
     * @param {string=} opt_message Error message in case of failure.
     * @throws {Error} Assertion failed, the condition evaluates to false.
     */
    function assert(condition: any, opt_message?: string): void;

    /**
     * Returns true if debug assertions (checks) are on.
     *
     * @return {boolean} The value of the PBCHECK constant.
     */
    function conductChecks(): boolean;
}

declare module 'someprotopackage' {

    /**
     * Message TestPackageTypes.
     * @constructor
     * @extends {goog.proto2.Message}
     * @final
     */
    class TestPackageTypes extends goog.proto2.Message {
        /**
         * Message TestPackageTypes.
         * @constructor
         * @extends {goog.proto2.Message}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
         * @return {!someprotopackage.TestPackageTypes} The cloned message.
         * @override
         */
        clone: any /*missing*/;
    
        /**
         * Gets the value of the optional_int32 field.
         * @return {?number} The value.
         */
        getOptionalInt32(): number;
    
        /**
         * Gets the value of the optional_int32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalInt32OrDefault(): number;
    
        /**
         * Sets the value of the optional_int32 field.
         * @param {number} value The value.
         */
        setOptionalInt32(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_int32 field has a value.
         */
        hasOptionalInt32(): boolean;
    
        /**
         * @return {number} The number of values in the optional_int32 field.
         */
        optionalInt32Count(): number;
    
        /**
         * Clears the values in the optional_int32 field.
         */
        clearOptionalInt32(): void;
    
        /**
         * Gets the value of the other_all field.
         * @return {proto2.TestAllTypes} The value.
         */
        getOtherAll(): proto2.TestAllTypes;
    
        /**
         * Gets the value of the other_all field or the default value if not set.
         * @return {!proto2.TestAllTypes} The value.
         */
        getOtherAllOrDefault(): proto2.TestAllTypes;
    
        /**
         * Sets the value of the other_all field.
         * @param {!proto2.TestAllTypes} value The value.
         */
        setOtherAll(value: proto2.TestAllTypes): void;
    
        /**
         * @return {boolean} Whether the other_all field has a value.
         */
        hasOtherAll(): boolean;
    
        /**
         * @return {number} The number of values in the other_all field.
         */
        otherAllCount(): number;
    
        /**
         * Clears the values in the other_all field.
         */
        clearOtherAll(): void;
    }
}

declare module 'proto2' {

    /**
     * Message TestAllTypes.
     * @constructor
     * @extends {goog.proto2.Message}
     * @final
     */
    class TestAllTypes extends goog.proto2.Message {
        /**
         * Message TestAllTypes.
         * @constructor
         * @extends {goog.proto2.Message}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
         * @return {!proto2.TestAllTypes} The cloned message.
         * @override
         */
        clone: any /*missing*/;
    
        /**
         * Gets the value of the optional_int32 field.
         * @return {?number} The value.
         */
        getOptionalInt32(): number;
    
        /**
         * Gets the value of the optional_int32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalInt32OrDefault(): number;
    
        /**
         * Sets the value of the optional_int32 field.
         * @param {number} value The value.
         */
        setOptionalInt32(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_int32 field has a value.
         */
        hasOptionalInt32(): boolean;
    
        /**
         * @return {number} The number of values in the optional_int32 field.
         */
        optionalInt32Count(): number;
    
        /**
         * Clears the values in the optional_int32 field.
         */
        clearOptionalInt32(): void;
    
        /**
         * Gets the value of the optional_int64 field.
         * @return {?string} The value.
         */
        getOptionalInt64(): string;
    
        /**
         * Gets the value of the optional_int64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalInt64OrDefault(): string;
    
        /**
         * Sets the value of the optional_int64 field.
         * @param {string} value The value.
         */
        setOptionalInt64(value: string): void;
    
        /**
         * @return {boolean} Whether the optional_int64 field has a value.
         */
        hasOptionalInt64(): boolean;
    
        /**
         * @return {number} The number of values in the optional_int64 field.
         */
        optionalInt64Count(): number;
    
        /**
         * Clears the values in the optional_int64 field.
         */
        clearOptionalInt64(): void;
    
        /**
         * Gets the value of the optional_uint32 field.
         * @return {?number} The value.
         */
        getOptionalUint32(): number;
    
        /**
         * Gets the value of the optional_uint32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalUint32OrDefault(): number;
    
        /**
         * Sets the value of the optional_uint32 field.
         * @param {number} value The value.
         */
        setOptionalUint32(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_uint32 field has a value.
         */
        hasOptionalUint32(): boolean;
    
        /**
         * @return {number} The number of values in the optional_uint32 field.
         */
        optionalUint32Count(): number;
    
        /**
         * Clears the values in the optional_uint32 field.
         */
        clearOptionalUint32(): void;
    
        /**
         * Gets the value of the optional_uint64 field.
         * @return {?string} The value.
         */
        getOptionalUint64(): string;
    
        /**
         * Gets the value of the optional_uint64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalUint64OrDefault(): string;
    
        /**
         * Sets the value of the optional_uint64 field.
         * @param {string} value The value.
         */
        setOptionalUint64(value: string): void;
    
        /**
         * @return {boolean} Whether the optional_uint64 field has a value.
         */
        hasOptionalUint64(): boolean;
    
        /**
         * @return {number} The number of values in the optional_uint64 field.
         */
        optionalUint64Count(): number;
    
        /**
         * Clears the values in the optional_uint64 field.
         */
        clearOptionalUint64(): void;
    
        /**
         * Gets the value of the optional_sint32 field.
         * @return {?number} The value.
         */
        getOptionalSint32(): number;
    
        /**
         * Gets the value of the optional_sint32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalSint32OrDefault(): number;
    
        /**
         * Sets the value of the optional_sint32 field.
         * @param {number} value The value.
         */
        setOptionalSint32(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_sint32 field has a value.
         */
        hasOptionalSint32(): boolean;
    
        /**
         * @return {number} The number of values in the optional_sint32 field.
         */
        optionalSint32Count(): number;
    
        /**
         * Clears the values in the optional_sint32 field.
         */
        clearOptionalSint32(): void;
    
        /**
         * Gets the value of the optional_sint64 field.
         * @return {?string} The value.
         */
        getOptionalSint64(): string;
    
        /**
         * Gets the value of the optional_sint64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalSint64OrDefault(): string;
    
        /**
         * Sets the value of the optional_sint64 field.
         * @param {string} value The value.
         */
        setOptionalSint64(value: string): void;
    
        /**
         * @return {boolean} Whether the optional_sint64 field has a value.
         */
        hasOptionalSint64(): boolean;
    
        /**
         * @return {number} The number of values in the optional_sint64 field.
         */
        optionalSint64Count(): number;
    
        /**
         * Clears the values in the optional_sint64 field.
         */
        clearOptionalSint64(): void;
    
        /**
         * Gets the value of the optional_fixed32 field.
         * @return {?number} The value.
         */
        getOptionalFixed32(): number;
    
        /**
         * Gets the value of the optional_fixed32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalFixed32OrDefault(): number;
    
        /**
         * Sets the value of the optional_fixed32 field.
         * @param {number} value The value.
         */
        setOptionalFixed32(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_fixed32 field has a value.
         */
        hasOptionalFixed32(): boolean;
    
        /**
         * @return {number} The number of values in the optional_fixed32 field.
         */
        optionalFixed32Count(): number;
    
        /**
         * Clears the values in the optional_fixed32 field.
         */
        clearOptionalFixed32(): void;
    
        /**
         * Gets the value of the optional_fixed64 field.
         * @return {?string} The value.
         */
        getOptionalFixed64(): string;
    
        /**
         * Gets the value of the optional_fixed64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalFixed64OrDefault(): string;
    
        /**
         * Sets the value of the optional_fixed64 field.
         * @param {string} value The value.
         */
        setOptionalFixed64(value: string): void;
    
        /**
         * @return {boolean} Whether the optional_fixed64 field has a value.
         */
        hasOptionalFixed64(): boolean;
    
        /**
         * @return {number} The number of values in the optional_fixed64 field.
         */
        optionalFixed64Count(): number;
    
        /**
         * Clears the values in the optional_fixed64 field.
         */
        clearOptionalFixed64(): void;
    
        /**
         * Gets the value of the optional_sfixed32 field.
         * @return {?number} The value.
         */
        getOptionalSfixed32(): number;
    
        /**
         * Gets the value of the optional_sfixed32 field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalSfixed32OrDefault(): number;
    
        /**
         * Sets the value of the optional_sfixed32 field.
         * @param {number} value The value.
         */
        setOptionalSfixed32(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_sfixed32 field has a value.
         */
        hasOptionalSfixed32(): boolean;
    
        /**
         * @return {number} The number of values in the optional_sfixed32 field.
         */
        optionalSfixed32Count(): number;
    
        /**
         * Clears the values in the optional_sfixed32 field.
         */
        clearOptionalSfixed32(): void;
    
        /**
         * Gets the value of the optional_sfixed64 field.
         * @return {?string} The value.
         */
        getOptionalSfixed64(): string;
    
        /**
         * Gets the value of the optional_sfixed64 field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalSfixed64OrDefault(): string;
    
        /**
         * Sets the value of the optional_sfixed64 field.
         * @param {string} value The value.
         */
        setOptionalSfixed64(value: string): void;
    
        /**
         * @return {boolean} Whether the optional_sfixed64 field has a value.
         */
        hasOptionalSfixed64(): boolean;
    
        /**
         * @return {number} The number of values in the optional_sfixed64 field.
         */
        optionalSfixed64Count(): number;
    
        /**
         * Clears the values in the optional_sfixed64 field.
         */
        clearOptionalSfixed64(): void;
    
        /**
         * Gets the value of the optional_float field.
         * @return {?number} The value.
         */
        getOptionalFloat(): number;
    
        /**
         * Gets the value of the optional_float field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalFloatOrDefault(): number;
    
        /**
         * Sets the value of the optional_float field.
         * @param {number} value The value.
         */
        setOptionalFloat(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_float field has a value.
         */
        hasOptionalFloat(): boolean;
    
        /**
         * @return {number} The number of values in the optional_float field.
         */
        optionalFloatCount(): number;
    
        /**
         * Clears the values in the optional_float field.
         */
        clearOptionalFloat(): void;
    
        /**
         * Gets the value of the optional_double field.
         * @return {?number} The value.
         */
        getOptionalDouble(): number;
    
        /**
         * Gets the value of the optional_double field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalDoubleOrDefault(): number;
    
        /**
         * Sets the value of the optional_double field.
         * @param {number} value The value.
         */
        setOptionalDouble(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_double field has a value.
         */
        hasOptionalDouble(): boolean;
    
        /**
         * @return {number} The number of values in the optional_double field.
         */
        optionalDoubleCount(): number;
    
        /**
         * Clears the values in the optional_double field.
         */
        clearOptionalDouble(): void;
    
        /**
         * Gets the value of the optional_bool field.
         * @return {?boolean} The value.
         */
        getOptionalBool(): boolean;
    
        /**
         * Gets the value of the optional_bool field or the default value if not set.
         * @return {boolean} The value.
         */
        getOptionalBoolOrDefault(): boolean;
    
        /**
         * Sets the value of the optional_bool field.
         * @param {boolean} value The value.
         */
        setOptionalBool(value: boolean): void;
    
        /**
         * @return {boolean} Whether the optional_bool field has a value.
         */
        hasOptionalBool(): boolean;
    
        /**
         * @return {number} The number of values in the optional_bool field.
         */
        optionalBoolCount(): number;
    
        /**
         * Clears the values in the optional_bool field.
         */
        clearOptionalBool(): void;
    
        /**
         * Gets the value of the optional_string field.
         * @return {?string} The value.
         */
        getOptionalString(): string;
    
        /**
         * Gets the value of the optional_string field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalStringOrDefault(): string;
    
        /**
         * Sets the value of the optional_string field.
         * @param {string} value The value.
         */
        setOptionalString(value: string): void;
    
        /**
         * @return {boolean} Whether the optional_string field has a value.
         */
        hasOptionalString(): boolean;
    
        /**
         * @return {number} The number of values in the optional_string field.
         */
        optionalStringCount(): number;
    
        /**
         * Clears the values in the optional_string field.
         */
        clearOptionalString(): void;
    
        /**
         * Gets the value of the optional_bytes field.
         * @return {?string} The value.
         */
        getOptionalBytes(): string;
    
        /**
         * Gets the value of the optional_bytes field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalBytesOrDefault(): string;
    
        /**
         * Sets the value of the optional_bytes field.
         * @param {string} value The value.
         */
        setOptionalBytes(value: string): void;
    
        /**
         * @return {boolean} Whether the optional_bytes field has a value.
         */
        hasOptionalBytes(): boolean;
    
        /**
         * @return {number} The number of values in the optional_bytes field.
         */
        optionalBytesCount(): number;
    
        /**
         * Clears the values in the optional_bytes field.
         */
        clearOptionalBytes(): void;
    
        /**
         * Gets the value of the optionalgroup field.
         * @return {proto2.TestAllTypes.OptionalGroup} The value.
         */
        getOptionalgroup(): proto2.TestAllTypes.OptionalGroup;
    
        /**
         * Gets the value of the optionalgroup field or the default value if not set.
         * @return {!proto2.TestAllTypes.OptionalGroup} The value.
         */
        getOptionalgroupOrDefault(): proto2.TestAllTypes.OptionalGroup;
    
        /**
         * Sets the value of the optionalgroup field.
         * @param {!proto2.TestAllTypes.OptionalGroup} value The value.
         */
        setOptionalgroup(value: proto2.TestAllTypes.OptionalGroup): void;
    
        /**
         * @return {boolean} Whether the optionalgroup field has a value.
         */
        hasOptionalgroup(): boolean;
    
        /**
         * @return {number} The number of values in the optionalgroup field.
         */
        optionalgroupCount(): number;
    
        /**
         * Clears the values in the optionalgroup field.
         */
        clearOptionalgroup(): void;
    
        /**
         * Gets the value of the optional_nested_message field.
         * @return {proto2.TestAllTypes.NestedMessage} The value.
         */
        getOptionalNestedMessage(): proto2.TestAllTypes.NestedMessage;
    
        /**
         * Gets the value of the optional_nested_message field or the default value if not set.
         * @return {!proto2.TestAllTypes.NestedMessage} The value.
         */
        getOptionalNestedMessageOrDefault(): proto2.TestAllTypes.NestedMessage;
    
        /**
         * Sets the value of the optional_nested_message field.
         * @param {!proto2.TestAllTypes.NestedMessage} value The value.
         */
        setOptionalNestedMessage(value: proto2.TestAllTypes.NestedMessage): void;
    
        /**
         * @return {boolean} Whether the optional_nested_message field has a value.
         */
        hasOptionalNestedMessage(): boolean;
    
        /**
         * @return {number} The number of values in the optional_nested_message field.
         */
        optionalNestedMessageCount(): number;
    
        /**
         * Clears the values in the optional_nested_message field.
         */
        clearOptionalNestedMessage(): void;
    
        /**
         * Gets the value of the optional_nested_enum field.
         * @return {?proto2.TestAllTypes.NestedEnum} The value.
         */
        getOptionalNestedEnum(): proto2.TestAllTypes.NestedEnum;
    
        /**
         * Gets the value of the optional_nested_enum field or the default value if not set.
         * @return {proto2.TestAllTypes.NestedEnum} The value.
         */
        getOptionalNestedEnumOrDefault(): proto2.TestAllTypes.NestedEnum;
    
        /**
         * Sets the value of the optional_nested_enum field.
         * @param {proto2.TestAllTypes.NestedEnum} value The value.
         */
        setOptionalNestedEnum(value: proto2.TestAllTypes.NestedEnum): void;
    
        /**
         * @return {boolean} Whether the optional_nested_enum field has a value.
         */
        hasOptionalNestedEnum(): boolean;
    
        /**
         * @return {number} The number of values in the optional_nested_enum field.
         */
        optionalNestedEnumCount(): number;
    
        /**
         * Clears the values in the optional_nested_enum field.
         */
        clearOptionalNestedEnum(): void;
    
        /**
         * Gets the value of the optional_int64_number field.
         * @return {?number} The value.
         */
        getOptionalInt64Number(): number;
    
        /**
         * Gets the value of the optional_int64_number field or the default value if not set.
         * @return {number} The value.
         */
        getOptionalInt64NumberOrDefault(): number;
    
        /**
         * Sets the value of the optional_int64_number field.
         * @param {number} value The value.
         */
        setOptionalInt64Number(value: number): void;
    
        /**
         * @return {boolean} Whether the optional_int64_number field has a value.
         */
        hasOptionalInt64Number(): boolean;
    
        /**
         * @return {number} The number of values in the optional_int64_number field.
         */
        optionalInt64NumberCount(): number;
    
        /**
         * Clears the values in the optional_int64_number field.
         */
        clearOptionalInt64Number(): void;
    
        /**
         * Gets the value of the optional_int64_string field.
         * @return {?string} The value.
         */
        getOptionalInt64String(): string;
    
        /**
         * Gets the value of the optional_int64_string field or the default value if not set.
         * @return {string} The value.
         */
        getOptionalInt64StringOrDefault(): string;
    
        /**
         * Sets the value of the optional_int64_string field.
         * @param {string} value The value.
         */
        setOptionalInt64String(value: string): void;
    
        /**
         * @return {boolean} Whether the optional_int64_string field has a value.
         */
        hasOptionalInt64String(): boolean;
    
        /**
         * @return {number} The number of values in the optional_int64_string field.
         */
        optionalInt64StringCount(): number;
    
        /**
         * Clears the values in the optional_int64_string field.
         */
        clearOptionalInt64String(): void;
    
        /**
         * Gets the value of the repeated_int32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedInt32(index: number): number;
    
        /**
         * Gets the value of the repeated_int32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedInt32OrDefault(index: number): number;
    
        /**
         * Adds a value to the repeated_int32 field.
         * @param {number} value The value to add.
         */
        addRepeatedInt32(value: number): void;
    
        /**
         * Returns the array of values in the repeated_int32 field.
         * @return {!Array.<number>} The values in the field.
         */
        repeatedInt32Array(): number[];
    
        /**
         * @return {boolean} Whether the repeated_int32 field has a value.
         */
        hasRepeatedInt32(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_int32 field.
         */
        repeatedInt32Count(): number;
    
        /**
         * Clears the values in the repeated_int32 field.
         */
        clearRepeatedInt32(): void;
    
        /**
         * Gets the value of the repeated_int64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedInt64(index: number): string;
    
        /**
         * Gets the value of the repeated_int64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedInt64OrDefault(index: number): string;
    
        /**
         * Adds a value to the repeated_int64 field.
         * @param {string} value The value to add.
         */
        addRepeatedInt64(value: string): void;
    
        /**
         * Returns the array of values in the repeated_int64 field.
         * @return {!Array.<string>} The values in the field.
         */
        repeatedInt64Array(): string[];
    
        /**
         * @return {boolean} Whether the repeated_int64 field has a value.
         */
        hasRepeatedInt64(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_int64 field.
         */
        repeatedInt64Count(): number;
    
        /**
         * Clears the values in the repeated_int64 field.
         */
        clearRepeatedInt64(): void;
    
        /**
         * Gets the value of the repeated_uint32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedUint32(index: number): number;
    
        /**
         * Gets the value of the repeated_uint32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedUint32OrDefault(index: number): number;
    
        /**
         * Adds a value to the repeated_uint32 field.
         * @param {number} value The value to add.
         */
        addRepeatedUint32(value: number): void;
    
        /**
         * Returns the array of values in the repeated_uint32 field.
         * @return {!Array.<number>} The values in the field.
         */
        repeatedUint32Array(): number[];
    
        /**
         * @return {boolean} Whether the repeated_uint32 field has a value.
         */
        hasRepeatedUint32(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_uint32 field.
         */
        repeatedUint32Count(): number;
    
        /**
         * Clears the values in the repeated_uint32 field.
         */
        clearRepeatedUint32(): void;
    
        /**
         * Gets the value of the repeated_uint64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedUint64(index: number): string;
    
        /**
         * Gets the value of the repeated_uint64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedUint64OrDefault(index: number): string;
    
        /**
         * Adds a value to the repeated_uint64 field.
         * @param {string} value The value to add.
         */
        addRepeatedUint64(value: string): void;
    
        /**
         * Returns the array of values in the repeated_uint64 field.
         * @return {!Array.<string>} The values in the field.
         */
        repeatedUint64Array(): string[];
    
        /**
         * @return {boolean} Whether the repeated_uint64 field has a value.
         */
        hasRepeatedUint64(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_uint64 field.
         */
        repeatedUint64Count(): number;
    
        /**
         * Clears the values in the repeated_uint64 field.
         */
        clearRepeatedUint64(): void;
    
        /**
         * Gets the value of the repeated_sint32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedSint32(index: number): number;
    
        /**
         * Gets the value of the repeated_sint32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedSint32OrDefault(index: number): number;
    
        /**
         * Adds a value to the repeated_sint32 field.
         * @param {number} value The value to add.
         */
        addRepeatedSint32(value: number): void;
    
        /**
         * Returns the array of values in the repeated_sint32 field.
         * @return {!Array.<number>} The values in the field.
         */
        repeatedSint32Array(): number[];
    
        /**
         * @return {boolean} Whether the repeated_sint32 field has a value.
         */
        hasRepeatedSint32(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_sint32 field.
         */
        repeatedSint32Count(): number;
    
        /**
         * Clears the values in the repeated_sint32 field.
         */
        clearRepeatedSint32(): void;
    
        /**
         * Gets the value of the repeated_sint64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedSint64(index: number): string;
    
        /**
         * Gets the value of the repeated_sint64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedSint64OrDefault(index: number): string;
    
        /**
         * Adds a value to the repeated_sint64 field.
         * @param {string} value The value to add.
         */
        addRepeatedSint64(value: string): void;
    
        /**
         * Returns the array of values in the repeated_sint64 field.
         * @return {!Array.<string>} The values in the field.
         */
        repeatedSint64Array(): string[];
    
        /**
         * @return {boolean} Whether the repeated_sint64 field has a value.
         */
        hasRepeatedSint64(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_sint64 field.
         */
        repeatedSint64Count(): number;
    
        /**
         * Clears the values in the repeated_sint64 field.
         */
        clearRepeatedSint64(): void;
    
        /**
         * Gets the value of the repeated_fixed32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedFixed32(index: number): number;
    
        /**
         * Gets the value of the repeated_fixed32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedFixed32OrDefault(index: number): number;
    
        /**
         * Adds a value to the repeated_fixed32 field.
         * @param {number} value The value to add.
         */
        addRepeatedFixed32(value: number): void;
    
        /**
         * Returns the array of values in the repeated_fixed32 field.
         * @return {!Array.<number>} The values in the field.
         */
        repeatedFixed32Array(): number[];
    
        /**
         * @return {boolean} Whether the repeated_fixed32 field has a value.
         */
        hasRepeatedFixed32(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_fixed32 field.
         */
        repeatedFixed32Count(): number;
    
        /**
         * Clears the values in the repeated_fixed32 field.
         */
        clearRepeatedFixed32(): void;
    
        /**
         * Gets the value of the repeated_fixed64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedFixed64(index: number): string;
    
        /**
         * Gets the value of the repeated_fixed64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedFixed64OrDefault(index: number): string;
    
        /**
         * Adds a value to the repeated_fixed64 field.
         * @param {string} value The value to add.
         */
        addRepeatedFixed64(value: string): void;
    
        /**
         * Returns the array of values in the repeated_fixed64 field.
         * @return {!Array.<string>} The values in the field.
         */
        repeatedFixed64Array(): string[];
    
        /**
         * @return {boolean} Whether the repeated_fixed64 field has a value.
         */
        hasRepeatedFixed64(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_fixed64 field.
         */
        repeatedFixed64Count(): number;
    
        /**
         * Clears the values in the repeated_fixed64 field.
         */
        clearRepeatedFixed64(): void;
    
        /**
         * Gets the value of the repeated_sfixed32 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedSfixed32(index: number): number;
    
        /**
         * Gets the value of the repeated_sfixed32 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedSfixed32OrDefault(index: number): number;
    
        /**
         * Adds a value to the repeated_sfixed32 field.
         * @param {number} value The value to add.
         */
        addRepeatedSfixed32(value: number): void;
    
        /**
         * Returns the array of values in the repeated_sfixed32 field.
         * @return {!Array.<number>} The values in the field.
         */
        repeatedSfixed32Array(): number[];
    
        /**
         * @return {boolean} Whether the repeated_sfixed32 field has a value.
         */
        hasRepeatedSfixed32(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_sfixed32 field.
         */
        repeatedSfixed32Count(): number;
    
        /**
         * Clears the values in the repeated_sfixed32 field.
         */
        clearRepeatedSfixed32(): void;
    
        /**
         * Gets the value of the repeated_sfixed64 field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedSfixed64(index: number): string;
    
        /**
         * Gets the value of the repeated_sfixed64 field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedSfixed64OrDefault(index: number): string;
    
        /**
         * Adds a value to the repeated_sfixed64 field.
         * @param {string} value The value to add.
         */
        addRepeatedSfixed64(value: string): void;
    
        /**
         * Returns the array of values in the repeated_sfixed64 field.
         * @return {!Array.<string>} The values in the field.
         */
        repeatedSfixed64Array(): string[];
    
        /**
         * @return {boolean} Whether the repeated_sfixed64 field has a value.
         */
        hasRepeatedSfixed64(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_sfixed64 field.
         */
        repeatedSfixed64Count(): number;
    
        /**
         * Clears the values in the repeated_sfixed64 field.
         */
        clearRepeatedSfixed64(): void;
    
        /**
         * Gets the value of the repeated_float field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedFloat(index: number): number;
    
        /**
         * Gets the value of the repeated_float field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedFloatOrDefault(index: number): number;
    
        /**
         * Adds a value to the repeated_float field.
         * @param {number} value The value to add.
         */
        addRepeatedFloat(value: number): void;
    
        /**
         * Returns the array of values in the repeated_float field.
         * @return {!Array.<number>} The values in the field.
         */
        repeatedFloatArray(): number[];
    
        /**
         * @return {boolean} Whether the repeated_float field has a value.
         */
        hasRepeatedFloat(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_float field.
         */
        repeatedFloatCount(): number;
    
        /**
         * Clears the values in the repeated_float field.
         */
        clearRepeatedFloat(): void;
    
        /**
         * Gets the value of the repeated_double field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedDouble(index: number): number;
    
        /**
         * Gets the value of the repeated_double field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedDoubleOrDefault(index: number): number;
    
        /**
         * Adds a value to the repeated_double field.
         * @param {number} value The value to add.
         */
        addRepeatedDouble(value: number): void;
    
        /**
         * Returns the array of values in the repeated_double field.
         * @return {!Array.<number>} The values in the field.
         */
        repeatedDoubleArray(): number[];
    
        /**
         * @return {boolean} Whether the repeated_double field has a value.
         */
        hasRepeatedDouble(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_double field.
         */
        repeatedDoubleCount(): number;
    
        /**
         * Clears the values in the repeated_double field.
         */
        clearRepeatedDouble(): void;
    
        /**
         * Gets the value of the repeated_bool field at the index given.
         * @param {number} index The index to lookup.
         * @return {?boolean} The value.
         */
        getRepeatedBool(index: number): boolean;
    
        /**
         * Gets the value of the repeated_bool field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {boolean} The value.
         */
        getRepeatedBoolOrDefault(index: number): boolean;
    
        /**
         * Adds a value to the repeated_bool field.
         * @param {boolean} value The value to add.
         */
        addRepeatedBool(value: boolean): void;
    
        /**
         * Returns the array of values in the repeated_bool field.
         * @return {!Array.<boolean>} The values in the field.
         */
        repeatedBoolArray(): boolean[];
    
        /**
         * @return {boolean} Whether the repeated_bool field has a value.
         */
        hasRepeatedBool(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_bool field.
         */
        repeatedBoolCount(): number;
    
        /**
         * Clears the values in the repeated_bool field.
         */
        clearRepeatedBool(): void;
    
        /**
         * Gets the value of the repeated_string field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedString(index: number): string;
    
        /**
         * Gets the value of the repeated_string field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedStringOrDefault(index: number): string;
    
        /**
         * Adds a value to the repeated_string field.
         * @param {string} value The value to add.
         */
        addRepeatedString(value: string): void;
    
        /**
         * Returns the array of values in the repeated_string field.
         * @return {!Array.<string>} The values in the field.
         */
        repeatedStringArray(): string[];
    
        /**
         * @return {boolean} Whether the repeated_string field has a value.
         */
        hasRepeatedString(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_string field.
         */
        repeatedStringCount(): number;
    
        /**
         * Clears the values in the repeated_string field.
         */
        clearRepeatedString(): void;
    
        /**
         * Gets the value of the repeated_bytes field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedBytes(index: number): string;
    
        /**
         * Gets the value of the repeated_bytes field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedBytesOrDefault(index: number): string;
    
        /**
         * Adds a value to the repeated_bytes field.
         * @param {string} value The value to add.
         */
        addRepeatedBytes(value: string): void;
    
        /**
         * Returns the array of values in the repeated_bytes field.
         * @return {!Array.<string>} The values in the field.
         */
        repeatedBytesArray(): string[];
    
        /**
         * @return {boolean} Whether the repeated_bytes field has a value.
         */
        hasRepeatedBytes(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_bytes field.
         */
        repeatedBytesCount(): number;
    
        /**
         * Clears the values in the repeated_bytes field.
         */
        clearRepeatedBytes(): void;
    
        /**
         * Gets the value of the repeatedgroup field at the index given.
         * @param {number} index The index to lookup.
         * @return {proto2.TestAllTypes.RepeatedGroup} The value.
         */
        getRepeatedgroup(index: number): proto2.TestAllTypes.RepeatedGroup;
    
        /**
         * Gets the value of the repeatedgroup field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {!proto2.TestAllTypes.RepeatedGroup} The value.
         */
        getRepeatedgroupOrDefault(index: number): proto2.TestAllTypes.RepeatedGroup;
    
        /**
         * Adds a value to the repeatedgroup field.
         * @param {!proto2.TestAllTypes.RepeatedGroup} value The value to add.
         */
        addRepeatedgroup(value: proto2.TestAllTypes.RepeatedGroup): void;
    
        /**
         * Returns the array of values in the repeatedgroup field.
         * @return {!Array.<!proto2.TestAllTypes.RepeatedGroup>} The values in the field.
         */
        repeatedgroupArray(): proto2.TestAllTypes.RepeatedGroup[];
    
        /**
         * @return {boolean} Whether the repeatedgroup field has a value.
         */
        hasRepeatedgroup(): boolean;
    
        /**
         * @return {number} The number of values in the repeatedgroup field.
         */
        repeatedgroupCount(): number;
    
        /**
         * Clears the values in the repeatedgroup field.
         */
        clearRepeatedgroup(): void;
    
        /**
         * Gets the value of the repeated_nested_message field at the index given.
         * @param {number} index The index to lookup.
         * @return {proto2.TestAllTypes.NestedMessage} The value.
         */
        getRepeatedNestedMessage(index: number): proto2.TestAllTypes.NestedMessage;
    
        /**
         * Gets the value of the repeated_nested_message field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {!proto2.TestAllTypes.NestedMessage} The value.
         */
        getRepeatedNestedMessageOrDefault(index: number): proto2.TestAllTypes.NestedMessage;
    
        /**
         * Adds a value to the repeated_nested_message field.
         * @param {!proto2.TestAllTypes.NestedMessage} value The value to add.
         */
        addRepeatedNestedMessage(value: proto2.TestAllTypes.NestedMessage): void;
    
        /**
         * Returns the array of values in the repeated_nested_message field.
         * @return {!Array.<!proto2.TestAllTypes.NestedMessage>} The values in the field.
         */
        repeatedNestedMessageArray(): proto2.TestAllTypes.NestedMessage[];
    
        /**
         * @return {boolean} Whether the repeated_nested_message field has a value.
         */
        hasRepeatedNestedMessage(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_nested_message field.
         */
        repeatedNestedMessageCount(): number;
    
        /**
         * Clears the values in the repeated_nested_message field.
         */
        clearRepeatedNestedMessage(): void;
    
        /**
         * Gets the value of the repeated_nested_enum field at the index given.
         * @param {number} index The index to lookup.
         * @return {?proto2.TestAllTypes.NestedEnum} The value.
         */
        getRepeatedNestedEnum(index: number): proto2.TestAllTypes.NestedEnum;
    
        /**
         * Gets the value of the repeated_nested_enum field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {proto2.TestAllTypes.NestedEnum} The value.
         */
        getRepeatedNestedEnumOrDefault(index: number): proto2.TestAllTypes.NestedEnum;
    
        /**
         * Adds a value to the repeated_nested_enum field.
         * @param {proto2.TestAllTypes.NestedEnum} value The value to add.
         */
        addRepeatedNestedEnum(value: proto2.TestAllTypes.NestedEnum): void;
    
        /**
         * Returns the array of values in the repeated_nested_enum field.
         * @return {!Array.<proto2.TestAllTypes.NestedEnum>} The values in the field.
         */
        repeatedNestedEnumArray(): proto2.TestAllTypes.NestedEnum[];
    
        /**
         * @return {boolean} Whether the repeated_nested_enum field has a value.
         */
        hasRepeatedNestedEnum(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_nested_enum field.
         */
        repeatedNestedEnumCount(): number;
    
        /**
         * Clears the values in the repeated_nested_enum field.
         */
        clearRepeatedNestedEnum(): void;
    
        /**
         * Gets the value of the repeated_int64_number field at the index given.
         * @param {number} index The index to lookup.
         * @return {?number} The value.
         */
        getRepeatedInt64Number(index: number): number;
    
        /**
         * Gets the value of the repeated_int64_number field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {number} The value.
         */
        getRepeatedInt64NumberOrDefault(index: number): number;
    
        /**
         * Adds a value to the repeated_int64_number field.
         * @param {number} value The value to add.
         */
        addRepeatedInt64Number(value: number): void;
    
        /**
         * Returns the array of values in the repeated_int64_number field.
         * @return {!Array.<number>} The values in the field.
         */
        repeatedInt64NumberArray(): number[];
    
        /**
         * @return {boolean} Whether the repeated_int64_number field has a value.
         */
        hasRepeatedInt64Number(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_int64_number field.
         */
        repeatedInt64NumberCount(): number;
    
        /**
         * Clears the values in the repeated_int64_number field.
         */
        clearRepeatedInt64Number(): void;
    
        /**
         * Gets the value of the repeated_int64_string field at the index given.
         * @param {number} index The index to lookup.
         * @return {?string} The value.
         */
        getRepeatedInt64String(index: number): string;
    
        /**
         * Gets the value of the repeated_int64_string field at the index given or the default value if not set.
         * @param {number} index The index to lookup.
         * @return {string} The value.
         */
        getRepeatedInt64StringOrDefault(index: number): string;
    
        /**
         * Adds a value to the repeated_int64_string field.
         * @param {string} value The value to add.
         */
        addRepeatedInt64String(value: string): void;
    
        /**
         * Returns the array of values in the repeated_int64_string field.
         * @return {!Array.<string>} The values in the field.
         */
        repeatedInt64StringArray(): string[];
    
        /**
         * @return {boolean} Whether the repeated_int64_string field has a value.
         */
        hasRepeatedInt64String(): boolean;
    
        /**
         * @return {number} The number of values in the repeated_int64_string field.
         */
        repeatedInt64StringCount(): number;
    
        /**
         * Clears the values in the repeated_int64_string field.
         */
        clearRepeatedInt64String(): void;
    }

    /**
     * Message TestDefaultParent.
     * @constructor
     * @extends {goog.proto2.Message}
     * @final
     */
    class TestDefaultParent extends goog.proto2.Message {
        /**
         * Message TestDefaultParent.
         * @constructor
         * @extends {goog.proto2.Message}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
         * @return {!proto2.TestDefaultParent} The cloned message.
         * @override
         */
        clone: any /*missing*/;
    
        /**
         * Gets the value of the child field.
         * @return {proto2.TestDefaultChild} The value.
         */
        getChild(): proto2.TestDefaultChild;
    
        /**
         * Gets the value of the child field or the default value if not set.
         * @return {!proto2.TestDefaultChild} The value.
         */
        getChildOrDefault(): proto2.TestDefaultChild;
    
        /**
         * Sets the value of the child field.
         * @param {!proto2.TestDefaultChild} value The value.
         */
        setChild(value: proto2.TestDefaultChild): void;
    
        /**
         * @return {boolean} Whether the child field has a value.
         */
        hasChild(): boolean;
    
        /**
         * @return {number} The number of values in the child field.
         */
        childCount(): number;
    
        /**
         * Clears the values in the child field.
         */
        clearChild(): void;
    }

    /**
     * Message TestDefaultChild.
     * @constructor
     * @extends {goog.proto2.Message}
     * @final
     */
    class TestDefaultChild extends goog.proto2.Message {
        /**
         * Message TestDefaultChild.
         * @constructor
         * @extends {goog.proto2.Message}
         * @final
         */
        constructor();
    
        /**
         * Overrides {@link goog.proto2.Message#clone} to specify its exact return type.
         * @return {!proto2.TestDefaultChild} The cloned message.
         * @override
         */
        clone: any /*missing*/;
    
        /**
         * Gets the value of the foo field.
         * @return {?boolean} The value.
         */
        getFoo(): boolean;
    
        /**
         * Gets the value of the foo field or the default value if not set.
         * @return {boolean} The value.
         */
        getFooOrDefault(): boolean;
    
        /**
         * Sets the value of the foo field.
         * @param {boolean} value The value.
         */
        setFoo(value: boolean): void;
    
        /**
         * @return {boolean} Whether the foo field has a value.
         */
        hasFoo(): boolean;
    
        /**
         * @return {number} The number of values in the foo field.
         */
        fooCount(): number;
    
        /**
         * Clears the values in the foo field.
         */
        clearFoo(): void;
    }
}

declare module 'goog.proto2.TextFormatSerializer' {

    /**
     * Helper class for parsing the text format.
     * @constructor
     * @final
     */
    class Parser {
        /**
         * Helper class for parsing the text format.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Parses the given data, filling the message as it goes.
         * @param {goog.proto2.Message} message The message to fill.
         * @param {string} data The text format data.
         * @param {boolean=} opt_ignoreMissingFields If true, fields missing in the
         *     proto will be ignored.
         * @return {boolean} True on success, false on failure. On failure, the
         *     getError method can be called to get the reason for failure.
         */
        parse(message: goog.proto2.Message, data: string, opt_ignoreMissingFields?: boolean): boolean;
    
        /**
         * @return {?string} The parse error, if any.
         */
        getError(): string;
    }
}

