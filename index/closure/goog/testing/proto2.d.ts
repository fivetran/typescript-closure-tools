// Generated Wed Apr 30 16:39:49 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/proto2.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/testing.d.ts" />

declare module 'goog.testing.proto2' {

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

