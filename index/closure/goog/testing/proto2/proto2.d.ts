// Generated Wed Apr 30 22:45:26 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/proto2/fielddescriptor.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/proto2/descriptor.d.ts" />
/// <reference path="../../../goog/proto2/message.d.ts" />
/// <reference path="../../../goog/proto2/serializer.d.ts" />
/// <reference path="../../../goog/proto2/objectserializer.d.ts" />
/// <reference path="../../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../../goog/testing/asserts.d.ts" />

declare module goog.testing.proto2 {

    /**
     * Compares two goog.proto2.Message objects. Gives more readable output than
     * assertObjectEquals on mismatch.
     * @param {!goog.proto2.Message} expected Expected proto2 message.
     * @param {!goog.proto2.Message} actual Actual proto2 message.
     * @param {string=} opt_failureMessage Failure message when the values don't
     *     match.
     */
    function assertEquals(expected: goog.proto2.Message, actual: goog.proto2.Message, opt_failureMessage?: string): void;

    /**
     * Helper function to quickly build protocol buffer messages from JSON objects.
     * @param {function(new:MessageType)} messageCtor A constructor that
     *     creates a {@code goog.proto2.Message} subclass instance.
     * @param {!Object} json JSON object which uses field names as keys.
     * @return {!MessageType} The deserialized protocol buffer.
     * @template MessageType
     */
    function fromObject<MessageType>(messageCtor: () => any /*missing*/, json: Object): MessageType;
}

