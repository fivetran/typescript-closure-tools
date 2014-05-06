/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
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

declare module goog.module {

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
}

declare module goog.module.Loader {

    /**
     * The globally exported name of the load callback. Matches the
     * definition in the js_modular_binary() BUILD rule.
     * @type {string}
     */
    var LOAD_CALLBACK: string;
}

