// Generated Wed Apr 30 16:41:48 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/net.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/promise.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />
/// <reference path="../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.module.Loader' {

    /**
     * The globally exported name of the load callback. Matches the
     * definition in the js_modular_binary() BUILD rule.
     * @type {string}
     */
    var LOAD_CALLBACK: string;
}

declare module 'goog.module' {

    /**
     * Wrapper of goog.module.Loader.require() for use in modules.
     * See method goog.module.Loader.require() for
     * explanation of params.
     *
     * @param {string} module The name of the module. Usually, the value
     *     is defined as a constant whose name starts with MOD_.
     * @param {number|string} symbol The ID of the symbol. Usually, the value is
     *     defined as a constant whose name starts with SYM_.
     * @param {Function} callback This function will be called with the
     *     resolved symbol as the argument once the module is loaded.
     */
    function require(module: string, symbol: any /*number|string*/, callback: Function): void;

    /**
     * Wrapper of goog.module.Loader.provide() for use in modules
     * See method goog.module.Loader.provide() for explanation of params.
     *
     * @param {string} module The name of the module. Cf. parameter module
     *     of method require().
     * @param {number|string=} opt_symbol The symbol being defined, or nothing
     *     when all symbols of the module are defined. Cf. parameter symbol of
     *     method require().
     * @param {Object=} opt_object The object bound to the symbol, or nothing when
     *     all symbols of the module are defined.
     */
    function provide(module: string, opt_symbol?: any /*number|string*/, opt_object?: Object): void;

    /**
     * Wrapper of init() so that we only need to export this single
     * identifier instead of three. See method goog.module.Loader.init() for
     * explanation of param.
     *
     * @param {string} urlBase The URL of the base library.
     * @param {Function=} opt_urlFunction Function that creates the URL for the
     *     module file. It will be passed the base URL for module files and the
     *     module name and should return the fully-formed URL to the module file to
     *     load.
     */
    function initLoader(urlBase: string, opt_urlFunction?: Function): void;

    /**
     * Produces a function that delegates all its arguments to a
     * dynamically loaded function. This is used to export dynamically
     * loaded functions.
     *
     * @param {string} module The module to load from.
     * @param {number|string} symbol The ID of the symbol to load from the module.
     *     This symbol must resolve to a function.
     * @return {!Function} A function that forwards all its arguments to
     *     the dynamically loaded function specified by module and symbol.
     */
    function loaderCall(module: string, symbol: any /*number|string*/): Function;

    /**
     * Requires symbols for multiple modules, and invokes a final callback
     * on the condition that all of them are loaded. I.e. a barrier for
     * loading of multiple symbols. If no symbols are required, the
     * final callback is called immediately.
     *
     * @param {Array.<Object>} symbolRequests A
     *     list of tuples of module, symbol, callback (analog to the arguments
     *     to require(), above). These will each be require()d
     *     individually. NOTE: This argument will be modified during execution
     *     of the function.
     * @param {Function} finalCb A function that is called when all
     *     required symbols are loaded.
     */
    function requireMultipleSymbols(symbolRequests: Object[], finalCb: Function): void;

    /**
     * An interface that loads JavaScript modules.
     * @interface
     */
    interface AbstractModuleLoader {
        loadModules(ids: string[], moduleInfoMap: Object, opt_successFn?: () => any /*missing*/, opt_errorFn?: (_0: number) => any /*missing*/, opt_timeoutFn?: () => any /*missing*/, opt_forceReload?: boolean): void;
        prefetchModule(id: string, moduleInfo: goog.module.ModuleInfo): void;
    }

    /**
     * A basic module object that represents a module of Javascript code that can
     * be dynamically loaded.
     *
     * @constructor
     * @extends {goog.Disposable}
     */
    class BaseModule extends goog.Disposable {
        /**
         * A basic module object that represents a module of Javascript code that can
         * be dynamically loaded.
         *
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor();
    
        /**
         * Performs any load-time initialization that the module requires.
         * @param {Object} context The module context.
         */
        initialize(context: Object): void;
    }

    /**
     * The dynamic loading functionality is defined as a class. The class
     * will be used as singleton. There is, however, a two step
     * initialization procedure because parameters need to be passed to
     * the goog.module.Loader instance.
     *
     * @constructor
     * @final
     */
    class Loader {
        /**
         * The dynamic loading functionality is defined as a class. The class
         * will be used as singleton. There is, however, a two step
         * initialization procedure because parameters need to be passed to
         * the goog.module.Loader instance.
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Initializes the Loader to be fully functional. Also executes load
         * requests that were received before initialization. Must be called
         * exactly once, with the URL of the base library. Module URLs are
         * derived from the URL of the base library by inserting the module
         * name, preceded by a period, before the .js prefix of the base URL.
         *
         * @param {string} baseUrl The URL of the base library.
         * @param {Function=} opt_urlFunction Function that creates the URL for the
         *     module file. It will be passed the base URL for module files and the
         *     module name and should return the fully-formed URL to the module file to
         *     load.
         */
        init(baseUrl: string, opt_urlFunction?: Function): void;
    
        /**
         * Requests the loading of a symbol from a module. When the module is
         * loaded, the requested symbol will be passed as argument to the
         * function callback.
         *
         * @param {string} module The name of the module. Usually, the value
         *     is defined as a constant whose name starts with MOD_.
         * @param {number|string} symbol The ID of the symbol. Usually, the value is
         *     defined as a constant whose name starts with SYM_.
         * @param {Function} callback This function will be called with the
         *     resolved symbol as the argument once the module is loaded.
         */
        require(module: string, symbol: any /*number|string*/, callback: Function): void;
    
        /**
         * Registers a symbol in a loaded module. When called without symbol,
         * registers the module to be fully loaded and executes all callbacks
         * from pending require() callbacks for this module.
         *
         * @param {string} module The name of the module. Cf. parameter module
         *     of method require().
         * @param {number|string=} opt_symbol The symbol being defined, or nothing when
         *     all symbols of the module are defined. Cf. parameter symbol of method
         *     require().
         * @param {Object=} opt_object The object bound to the symbol, or nothing when
         *     all symbols of the module are defined.
         */
        provide(module: string, opt_symbol?: any /*number|string*/, opt_object?: Object): void;
    }

    /**
     * A ModuleInfo object is used by the ModuleManager to hold information about a
     * module of js code that may or may not yet be loaded into the environment.
     *
     * @param {Array.<string>} deps Ids of the modules that must be loaded before
     *     this one. The ids must be in dependency order (i.e. if the ith module
     *     depends on the jth module, then i > j).
     * @param {string} id The module's ID.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class ModuleInfo extends goog.Disposable {
        /**
         * A ModuleInfo object is used by the ModuleManager to hold information about a
         * module of js code that may or may not yet be loaded into the environment.
         *
         * @param {Array.<string>} deps Ids of the modules that must be loaded before
         *     this one. The ids must be in dependency order (i.e. if the ith module
         *     depends on the jth module, then i > j).
         * @param {string} id The module's ID.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(deps: string[], id: string);
    
        /**
         * Gets the dependencies of this module.
         * @return {Array.<string>} The ids of the modules that this module depends on.
         */
        getDependencies(): string[];
    
        /**
         * Gets the ID of this module.
         * @return {string} The ID.
         */
        getId(): string;
    
        /**
         * Sets the uris of this module.
         * @param {Array.<string>} uris Uris for this module's code.
         */
        setUris(uris: string[]): void;
    
        /**
         * Gets the uris of this module.
         * @return {Array.<string>?} Uris for this module's code.
         */
        getUris(): string[];
    
        /**
         * Sets the constructor to use to instantiate the module object after the
         * module code is loaded.
         * @param {Function} constructor The constructor of a goog.module.BaseModule
         *     subclass.
         */
        setModuleConstructor(constructor: Function): void;
    
        /**
         * Registers a function that should be called after the module is loaded. These
         * early callbacks are called after {@link Module#initialize} is called but
         * before the other callbacks are called.
         * @param {Function} fn A callback function that takes a single argument which
         *    is the module context.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @return {goog.module.ModuleLoadCallback} Reference to the callback
         *     object.
         */
        registerEarlyCallback(fn: Function, opt_handler?: Object): goog.module.ModuleLoadCallback;
    
        /**
         * Registers a function that should be called after the module is loaded.
         * @param {Function} fn A callback function that takes a single argument which
         *    is the module context.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @return {goog.module.ModuleLoadCallback} Reference to the callback
         *     object.
         */
        registerCallback(fn: Function, opt_handler?: Object): goog.module.ModuleLoadCallback;
    
        /**
         * Registers a function that should be called if the module load fails.
         * @param {Function} fn A callback function that takes a single argument which
         *    is the failure type.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @return {goog.module.ModuleLoadCallback} Reference to the callback
         *     object.
         */
        registerErrback(fn: Function, opt_handler?: Object): goog.module.ModuleLoadCallback;
    
        /**
         * Determines whether the module has been loaded.
         * @return {boolean} Whether the module has been loaded.
         */
        isLoaded(): boolean;
    
        /**
         * Gets the module.
         * @return {goog.module.BaseModule?} The module if it has been loaded.
         *     Otherwise, null.
         */
        getModule(): goog.module.BaseModule;
    
        /**
         * Sets this module as loaded.
         * @param {function() : Object} contextProvider A function that provides the
         *     module context.
         * @return {boolean} Whether any errors occurred while executing the onload
         *     callbacks.
         */
        onLoad(contextProvider: () => Object): boolean;
    
        /**
         * Calls the error callbacks for the module.
         * @param {goog.module.ModuleManager.FailureType} cause What caused the error.
         */
        onError(cause: goog.module.ModuleManager.FailureType): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Class used to encapsulate the callbacks to be called when a module loads.
     * @param {Function} fn Callback function.
     * @param {Object=} opt_handler Optional handler under whose scope to execute
     *     the callback.
     * @constructor
     * @final
     */
    class ModuleLoadCallback {
        /**
         * Class used to encapsulate the callbacks to be called when a module loads.
         * @param {Function} fn Callback function.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @constructor
         * @final
         */
        constructor(fn: Function, opt_handler?: Object);
    
        /**
         * Completes the operation and calls the callback function if appropriate.
         * @param {*} context The module context.
         */
        execute(context: any): void;
    
        /**
         * Abort the callback, but not the actual module load.
         */
        abort(): void;
    }

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
    
        /** @override */
        loadModules(): void;
    
        /** @override */
        prefetchModule(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * The ModuleManager keeps track of all modules in the environment.
     * Since modules may not have their code loaded, we must keep track of them.
     * @constructor
     * @extends {goog.Disposable}
     */
    class ModuleManager extends goog.Disposable {
        /**
         * The ModuleManager keeps track of all modules in the environment.
         * Since modules may not have their code loaded, we must keep track of them.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor();
    
        /**
         * Sets the batch mode as enabled or disabled for the module manager.
         * @param {boolean} enabled Whether the batch mode is to be enabled or not.
         */
        setBatchModeEnabled(enabled: boolean): void;
    
        /**
         * Sets the concurrent loading mode as enabled or disabled for the module
         * manager. Requires a moduleloader implementation that supports concurrent
         * loads. The default {@see goog.module.ModuleLoader} does not.
         * @param {boolean} enabled
         */
        setConcurrentLoadingEnabled(enabled: boolean): void;
    
        /**
         * Sets the module info for all modules. Should only be called once.
         *
         * @param {Object.<Array.<string>>} infoMap An object that contains a mapping
         *    from module id (String) to list of required module ids (Array).
         */
        setAllModuleInfo(infoMap: { [key: string]: any /*missing*/ }): void;
    
        /**
         * Sets the module info for all modules. Should only be called once. Also
         * marks modules that are currently being loaded.
         *
         * @param {string=} opt_info A string representation of the module dependency
         *      graph, in the form: module1:dep1,dep2/module2:dep1,dep2 etc.
         *     Where depX is the base-36 encoded position of the dep in the module list.
         * @param {Array.<string>=} opt_loadingModuleIds A list of moduleIds that
         *     are currently being loaded.
         */
        setAllModuleInfoString(opt_info?: string, opt_loadingModuleIds?: string[]): void;
    
        /**
         * Gets a module info object by id.
         * @param {string} id A module identifier.
         * @return {goog.module.ModuleInfo} The module info.
         */
        getModuleInfo(id: string): goog.module.ModuleInfo;
    
        /**
         * Sets the module uris.
         *
         * @param {Object} moduleUriMap The map of id/uris pairs for each module.
         */
        setModuleUris(moduleUriMap: Object): void;
    
        /**
         * Gets the application-specific module loader.
         * @return {goog.module.AbstractModuleLoader} An object that has a
         *     loadModules(ids, moduleInfoMap, opt_successFn, opt_errFn,
         *         opt_timeoutFn, opt_forceReload) method.
         */
        getLoader(): goog.module.AbstractModuleLoader;
    
        /**
         * Sets the application-specific module loader.
         * @param {goog.module.AbstractModuleLoader} loader An object that has a
         *     loadModules(ids, moduleInfoMap, opt_successFn, opt_errFn,
         *         opt_timeoutFn, opt_forceReload) method.
         */
        setLoader(loader: goog.module.AbstractModuleLoader): void;
    
        /**
         * Gets the module context to use to initialize the module.
         * @return {Object} The context.
         */
        getModuleContext(): Object;
    
        /**
         * Sets the module context to use to initialize the module.
         * @param {Object} context The context.
         */
        setModuleContext(context: Object): void;
    
        /**
         * Determines if the ModuleManager is active
         * @return {boolean} TRUE iff the ModuleManager is active (i.e., not idle).
         */
        isActive(): boolean;
    
        /**
         * Determines if the ModuleManager is user active
         * @return {boolean} TRUE iff the ModuleManager is user active (i.e., not idle).
         */
        isUserActive(): boolean;
    
        /**
         * Preloads a module after a short delay.
         *
         * @param {string} id The id of the module to preload.
         * @param {number=} opt_timeout The number of ms to wait before adding the
         *     module id to the loading queue (defaults to 0 ms). Note that the module
         *     will be loaded asynchronously regardless of the value of this parameter.
         * @return {!goog.async.Deferred} A deferred object.
         */
        preloadModule(id: string, opt_timeout?: number): goog.async.Deferred;
    
        /**
         * Prefetches a JavaScript module and its dependencies, which means that the
         * module will be downloaded, but not evaluated. To complete the module load,
         * the caller should also call load or execOnLoad after prefetching the module.
         *
         * @param {string} id The id of the module to prefetch.
         */
        prefetchModule(id: string): void;
    
        /**
         * Records that a module was loaded. Also initiates loading the next module if
         * any module requests are queued. This method is called by code that is
         * generated and appended to each dynamic module's code at compilation time.
         *
         * @param {string} id A module id.
         */
        setLoaded(id: string): void;
    
        /**
         * Gets whether a module is currently loading or in the queue, waiting to be
         * loaded.
         * @param {string} id A module id.
         * @return {boolean} TRUE iff the module is loading.
         */
        isModuleLoading(id: string): boolean;
    
        /**
         * Requests that a function be called once a particular module is loaded.
         * Client code can use this method to safely call into modules that may not yet
         * be loaded. For consistency, this method always calls the function
         * asynchronously -- even if the module is already loaded. Initiates loading of
         * the module if necessary, unless opt_noLoad is true.
         *
         * @param {string} moduleId A module id.
         * @param {Function} fn Function to execute when the module has loaded.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         * @param {boolean=} opt_noLoad TRUE iff not to initiate loading of the module.
         * @param {boolean=} opt_userInitiated TRUE iff the loading of the module was
         *     user initiated.
         * @param {boolean=} opt_preferSynchronous TRUE iff the function should be
         *     executed synchronously if the module has already been loaded.
         * @return {goog.module.ModuleLoadCallback} A callback wrapper that exposes
         *     an abort and execute method.
         */
        execOnLoad(moduleId: string, fn: Function, opt_handler?: Object, opt_noLoad?: boolean, opt_userInitiated?: boolean, opt_preferSynchronous?: boolean): goog.module.ModuleLoadCallback;
    
        /**
         * Loads a module, returning a goog.async.Deferred for keeping track of the
         * result.
         *
         * @param {string} moduleId A module id.
         * @param {boolean=} opt_userInitiated If the load is a result of a user action.
         * @return {goog.async.Deferred} A deferred object.
         */
        load(moduleId: string, opt_userInitiated?: boolean): goog.async.Deferred;
    
        /**
         * Loads a list of modules, returning a goog.async.Deferred for keeping track of
         * the result.
         *
         * @param {Array.<string>} moduleIds A list of module ids.
         * @param {boolean=} opt_userInitiated If the load is a result of a user action.
         * @return {Object.<!goog.async.Deferred>} A mapping from id (String) to
         *     deferred objects that will callback or errback when the load for that
         *     id is finished.
         */
        loadMultiple(moduleIds: string[], opt_userInitiated?: boolean): { [key: string]: any /*missing*/ };
    
        /**
         * Method called just before a module code is loaded.
         * @param {string} id Identifier of the module.
         */
        beforeLoadModuleCode(id: string): void;
    
        /**
         * Method called just after module code is loaded
         * @param {string} id Identifier of the module.
         */
        afterLoadModuleCode(id: string): void;
    
        /**
         * Register an initialization callback for the currently loading module. This
         * should only be called by script that is executed during the evaluation of
         * a module's javascript. This is almost equivalent to calling the function
         * inline, but ensures that all the code from the currently loading module
         * has been loaded. This makes it cleaner and more robust than calling the
         * function inline.
         *
         * If this function is called from the base module (the one that contains
         * the module manager code), the callback is held until #setAllModuleInfo
         * is called, or until #setModuleContext is called, whichever happens first.
         *
         * @param {Function} fn A callback function that takes a single argument
         *    which is the module context.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         */
        registerInitializationCallback(fn: Function, opt_handler?: Object): void;
    
        /**
         * Register a late initialization callback for the currently loading module.
         * Callbacks registered via this function are executed similar to
         * {@see registerInitializationCallback}, but they are fired after all
         * initialization callbacks are called.
         *
         * @param {Function} fn A callback function that takes a single argument
         *    which is the module context.
         * @param {Object=} opt_handler Optional handler under whose scope to execute
         *     the callback.
         */
        registerLateInitializationCallback(fn: Function, opt_handler?: Object): void;
    
        /**
         * Sets the constructor to use for the module object for the currently
         * loading module. The constructor should derive from {@see
         * goog.module.BaseModule}.
         * @param {Function} fn The constructor function.
         */
        setModuleConstructor(fn: Function): void;
    
        /**
         * The function to call if the module manager is in error.
         * @param {goog.module.ModuleManager.CallbackType|Array.<goog.module.ModuleManager.CallbackType>} types
         *  The callback type.
         * @param {Function} fn The function to register as a callback.
         */
        registerCallback(types: any /*goog.module.ModuleManager.CallbackType|goog.module.ModuleManager.CallbackType[]*/, fn: Function): void;
    
        /** @override */
        disposeInternal(): void;
    }
}

declare module 'goog.module.ModuleLoader' {

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

declare module 'goog.module.ModuleManager' {

    /**
    * The type of callbacks that can be registered with the module manager,.
    * @enum {string}
    */
    enum CallbackType { ERROR, IDLE, ACTIVE, USER_IDLE, USER_ACTIVE } 

    /**
     * A non-HTTP status code indicating a corruption in loaded module.
     * This should be used by a ModuleLoader as a replacement for the HTTP code
     * given to the error handler function to indicated that the module was
     * corrupted.
     * This will set the forceReload flag on the loadModules method when retrying
     * module loading.
     * @type {number}
     */
    var CORRUPT_RESPONSE_STATUS_CODE: number;

    /**
     * The possible reasons for a module load failure callback being fired.
     * @enum {number}
     */
    enum FailureType { UNAUTHORIZED, CONSECUTIVE_FAILURES, TIMEOUT, OLD_CODE_GONE, INIT_ERROR } 
}

