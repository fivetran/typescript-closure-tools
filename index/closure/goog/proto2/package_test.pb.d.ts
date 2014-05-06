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
/// <reference path="../../../closure/goog/proto2/test.pb.d.ts" />

declare module someprotopackage {

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

