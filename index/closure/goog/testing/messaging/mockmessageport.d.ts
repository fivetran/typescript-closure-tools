/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />

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

