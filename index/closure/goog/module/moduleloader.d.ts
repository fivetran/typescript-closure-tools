// Generated Thu May  1 16:47:47 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/net/jsloader.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/module/abstractmoduleloader.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/net/bulkloaderhelper.d.ts" />
/// <reference path="../../goog/net/httpstatus.d.ts" />
/// <reference path="../../goog/net/errorcode.d.ts" />
/// <reference path="../../goog/json/json.d.ts" />
/// <reference path="../../goog/net/xhrlike.d.ts" />
/// <reference path="../../goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../goog/net/xmlhttp.d.ts" />
/// <reference path="../../goog/uri/utils.d.ts" />
/// <reference path="../../goog/net/eventtype.d.ts" />
/// <reference path="../../goog/net/xhrio.d.ts" />
/// <reference path="../../goog/net/bulkloader.d.ts" />

declare module goog.module.ModuleLoader {

    /**
     * @return {boolean} Whether sourceURL affects stack traces.
     *     Chrome is currently the only browser that does this, but
     *     we believe other browsers are working on this.
     * @see http://bugzilla.mozilla.org/show_bug.cgi?id=583083
     */
    function supportsSourceUrlStackTraces(): boolean;

    /**
     * @return {boolean} Whether sourceURL affects the debugger.
     */
    function supportsSourceUrlDebugger(): boolean;

    /**
     * @enum {string}
     */
    enum EventType { EVALUATE_CODE, REQUEST_SUCCESS, REQUEST_ERROR } 

    /**
     * @param {goog.module.ModuleLoader.EventType} type The type.
     * @param {Array.<string>} moduleIds The ids of the modules being evaluated.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
        /**
         * @param {goog.module.ModuleLoader.EventType} type The type.
         * @param {Array.<string>} moduleIds The ids of the modules being evaluated.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: goog.module.ModuleLoader.EventType, moduleIds: string[]);
    }

    /**
     * A class that keeps the state of the module during the loading process. It is
     * used to save loading information between modules download and evaluation.
     * @constructor
     * @final
     */
    class LoadStatus {
        /**
         * A class that keeps the state of the module during the loading process. It is
         * used to save loading information between modules download and evaluation.
         * @constructor
         * @final
         */
        constructor();
    }
}

declare module goog.module {

    /**
     * A class that loads Javascript modules.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @implements {goog.module.AbstractModuleLoader}
     */
    class ModuleLoader extends goog.events.EventTarget implements goog.module.AbstractModuleLoader {
        /**
         * A class that loads Javascript modules.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @implements {goog.module.AbstractModuleLoader}
         */
        constructor();
    
        /**
         * A logger.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /**
         * Gets the debug mode for the loader.
         * @return {boolean} Whether the debug mode is enabled.
         */
        getDebugMode(): boolean;
    
        /**
         * Sets the debug mode for the loader.
         * @param {boolean} debugMode Whether the debug mode is enabled.
         */
        setDebugMode(debugMode: boolean): void;
    
        /**
         * When enabled, we will add a sourceURL comment to the end of all scripts
         * to mark their origin.
         *
         * On WebKit, stack traces will refect the sourceURL comment, so this is
         * useful for debugging webkit stack traces in production.
         *
         * Notice that in debug mode, we will use source url injection + eval rather
         * then appending script nodes to the DOM, because the scripts will load far
         * faster.  (Appending script nodes is very slow, because we can't parallelize
         * the downloading and evaling of the script).
         *
         * The cost of appending sourceURL information is negligible when compared to
         * the cost of evaling the script. Almost all clients will want this on.
         *
         * TODO(nicksantos): Turn this on by default. We may want to turn this off
         * for clients that inject their own sourceURL.
         *
         * @param {boolean} enabled Whether source url injection is enabled.
         */
        setSourceUrlInjection(enabled: boolean): void;
    }
}

