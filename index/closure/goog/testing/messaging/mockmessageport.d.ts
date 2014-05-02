// Generated Thu May  1 21:07:49 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />

declare module goog.testing.messaging {

    /**
     * Class for unit-testing code that uses MessagePorts.
     * @param {*} id An opaque identifier, used because message ports otherwise have
     *     no distinguishing characteristics.
     * @param {goog.testing.MockControl} mockControl The mock control used to create
     *     the method mock for #postMessage.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class MockMessagePort extends goog.events.EventTarget {
        /**
         * Class for unit-testing code that uses MessagePorts.
         * @param {*} id An opaque identifier, used because message ports otherwise have
         *     no distinguishing characteristics.
         * @param {goog.testing.MockControl} mockControl The mock control used to create
         *     the method mock for #postMessage.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(id: any, mockControl: goog.testing.MockControl);
    
        /**
         * A mock postMessage funciton. Actually an instance of
         * {@link goog.testing.FunctionMock}.
         * @param {*} message The message to send.
         * @param {Array.<MessagePort>=} opt_ports Ports to send with the message.
         */
        postMessage(message: any, opt_ports?: MessagePort[]): void;
    
        /**
         * Starts the port.
         */
        start(): void;
    
        /**
         * Closes the port.
         */
        close(): void;
    }
}

