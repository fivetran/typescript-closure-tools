/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/messaging/portnetwork.d.ts" />
/// <reference path="../../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../../closure/goog/testing/asserts.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../../closure/goog/messaging/messagechannel.d.ts" />
/// <reference path="../../../../closure/goog/messaging/abstractchannel.d.ts" />
/// <reference path="../../../../closure/goog/testing/messaging/mockmessagechannel.d.ts" />

declare module goog.testing.messaging {

    /**
     * The fake PortNetwork.
     *
     * @param {!goog.testing.MockControl} mockControl The mock control for creating
     *     the mock message channels.
     * @constructor
     * @implements {goog.messaging.PortNetwork}
     * @final
     */
    class MockPortNetwork implements goog.messaging.PortNetwork {
        /**
         * The fake PortNetwork.
         *
         * @param {!goog.testing.MockControl} mockControl The mock control for creating
         *     the mock message channels.
         * @constructor
         * @implements {goog.messaging.PortNetwork}
         * @final
         */
        constructor(mockControl: goog.testing.MockControl);
    
        /**
         * Returns a message channel that communicates with the named context. If no
         * such port exists, an error will either be thrown immediately or after a round
         * trip with the operator, depending on whether this pool is the operator or a
         * caller.
         *
         * If context A calls dial('B') and context B calls dial('A'), the two
         * ports returned will be connected to one another.
         *
         * @param {string} name The name of the context to get.
         * @return {goog.messaging.MessageChannel} The channel communicating with the
         *     given context. This is either a {@link goog.messaging.PortChannel} or a
         *     decorator around a PortChannel, so it's safe to send {@link MessagePorts}
         *     across it. This will be disposed along with the PortNetwork.
         */
        dial(name: string): goog.messaging.MessageChannel;
    }
}

