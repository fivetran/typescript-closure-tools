/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/testing/events/events.d.ts" />

declare module goog.testing.messaging {

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
    class MockMessageEvent extends goog.testing.events.Event {
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

