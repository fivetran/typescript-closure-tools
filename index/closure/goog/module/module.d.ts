/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/module/loader.d.ts" />

declare module goog.module {

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
}

