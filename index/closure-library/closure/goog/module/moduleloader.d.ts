/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="./abstractmoduleloader.d.ts" />
/// <reference path="../log/log.d.ts" />
/// <reference path="./moduleinfo.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.module {

    class ModuleLoader extends ModuleLoader__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ModuleLoader__Class extends goog.events.EventTarget__Class implements goog.module.AbstractModuleLoader  { 
    
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
            loadModules(ids: string[], moduleInfoMap: Object, opt_successFn?: { (): any /*missing*/ }, opt_errorFn?: { (_0: number): any /*missing*/ }, opt_timeoutFn?: { (): any /*missing*/ }, opt_forceReload?: boolean): void;
    
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

    class Event extends Event__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Event__Class extends goog.events.Event__Class  { 
    
            /**
             * @param {goog.module.ModuleLoader.EventType} type The type.
             * @param {Array.<string>} moduleIds The ids of the modules being evaluated.
             * @constructor
             * @extends {goog.events.Event}
             * @final
             */
            constructor(type: goog.module.ModuleLoader.EventType, moduleIds: string[]);
    
            /**
             * @type {Array.<string>}
             */
            moduleIds: string[];
    } 
    

    class LoadStatus extends LoadStatus__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class LoadStatus__Class  { 
    
            /**
             * A class that keeps the state of the module during the loading process. It is
             * used to save loading information between modules download and evaluation.
             * @constructor
             * @final
             */
            constructor();
    
            /**
             * The request uris.
             * @type {Array.<string>}
             */
            requestUris: string[];
    
            /**
             * The response texts.
             * @type {Array.<string>}
             */
            responseTexts: string[];
    
            /**
             * Whether loadModules was called for the set of modules referred by this
             * status.
             * @type {boolean}
             */
            loadRequested: boolean;
    
            /**
             * Success callback.
             * @type {?function()}
             */
            successFn: { (): any /*missing*/ };
    
            /**
             * Error callback.
             * @type {?function(?number)}
             */
            errorFn: { (_0: number): any /*missing*/ };
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
