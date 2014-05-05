// Generated Mon May  5 11:04:28 PDT 2014

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
    }
}

