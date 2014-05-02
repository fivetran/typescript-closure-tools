// Generated Thu May  1 16:46:12 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/messaging/portnetwork.d.ts" />
/// <reference path="../../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../../goog/testing/asserts.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/json/json.d.ts" />
/// <reference path="../../../goog/messaging/messagechannel.d.ts" />
/// <reference path="../../../goog/messaging/abstractchannel.d.ts" />
/// <reference path="../../../goog/testing/messaging/mockmessagechannel.d.ts" />

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

