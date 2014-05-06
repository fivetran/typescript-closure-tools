/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../closure/goog/net/jsloader.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/module/abstractmoduleloader.d.ts" />
/// <reference path="../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/net/bulkloaderhelper.d.ts" />
/// <reference path="../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../closure/goog/net/xhrio.d.ts" />
/// <reference path="../../../closure/goog/net/bulkloader.d.ts" />

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
    
        /**
         * Loads a list of JavaScript modules.
         *
         * @param {Array.<string>} ids The module ids in dependency order.
         * @param {Object} moduleInfoMap A mapping from module id to ModuleInfo object.
         * @param {function()?=} opt_successFn The callback if module loading is a
         *     success.
         * @param {function(?number)?=} opt_errorFn The callback if module loading is an
         *     error.
         * @param {function()?=} opt_timeoutFn The callback if module loading times out.
         * @param {boolean=} opt_forceReload Whether to bypass cache while loading the
         *     module.
         */
        loadModules(ids: string[], moduleInfoMap: Object, opt_successFn?: () => any /*missing*/, opt_errorFn?: (_0: number) => any /*missing*/, opt_timeoutFn?: () => any /*missing*/, opt_forceReload?: boolean): void;
    
        /**
         * Pre-fetches a JavaScript module.
         *
         * @param {string} id The module id.
         * @param {!goog.module.ModuleInfo} moduleInfo The module info.
         */
        prefetchModule(id: string, moduleInfo: goog.module.ModuleInfo): void;
    }
}

declare module goog.module.ModuleLoader {

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
}

