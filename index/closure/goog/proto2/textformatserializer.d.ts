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
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />

declare module goog.proto2 {

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
    }
}

declare module goog.proto2.TextFormatSerializer {

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

declare module goog.proto2.TextFormatSerializer.Parser {

    /**
     * Parse NaN, positive infinity, or negative infinity from a string.
     * @param {string} identifier An identifier string to check.
     * @return {?number} Infinity, negative infinity, NaN, or null if none
     *     of the constants could be parsed.
     * @private.
     */
    function parseNumericalConstant_(identifier: string): number;
}

