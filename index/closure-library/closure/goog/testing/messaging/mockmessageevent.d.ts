/// <reference path="../../../../globals.d.ts" />
/// <reference path="../events/events.d.ts" />
/// <reference path="../../events/browserevent.d.ts" />

declare module goog.testing.messaging {

    class MockMessageEvent extends MockMessageEvent.__Class { }
    module MockMessageEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.testing.events.Event.__Class {
    
            /**
             * Creates a new fake MessageEvent.
             *
             * @param {*} data The data of the message.
             * @param {string=} opt_origin The origin of the message, for server-sent and
             *     cross-document events.
             * @param {string=} opt_lastEventId The last event ID, for server-sent events.
             * @param {Window=} opt_source The proxy for the source window, for
             *     cross-document events.
             * @param {Array.<MessagePort>=} opt_ports The Array of ports sent with the
             *     message, for cross-document and channel events.
             * @extends {goog.testing.events.Event}
             * @constructor
             * @final
             */
            constructor(data: any, opt_origin?: string, opt_lastEventId?: string, opt_source?: Window, opt_ports?: MessagePort[]);
        }
    }
}

declare module goog.testing.messaging.MockMessageEvent {

    /**
     * Wraps a new fake MessageEvent in a BrowserEvent, like how a real MessageEvent
     * would be wrapped.
     *
     * @param {*} data The data of the message.
     * @param {string=} opt_origin The origin of the message, for server-sent and
     *     cross-document events.
     * @param {string=} opt_lastEventId The last event ID, for server-sent events.
     * @param {Window=} opt_source The proxy for the source window, for
     *     cross-document events.
     * @param {Array.<MessagePort>=} opt_ports The Array of ports sent with the
     *     message, for cross-document and channel events.
     * @return {!goog.events.BrowserEvent} The wrapping event.
     */
    function wrap(data: any, opt_origin?: string, opt_lastEventId?: string, opt_source?: Window, opt_ports?: MessagePort[]): goog.events.BrowserEvent;
}
