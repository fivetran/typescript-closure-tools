/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />

declare module goog.net {

    /**
     * Default factory to use when creating xhr objects.  You probably shouldn't be
     * instantiating this directly, but rather using it via goog.net.XmlHttp.
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     */
    class DefaultXmlHttpFactory extends goog.net.XmlHttpFactory {
        /**
         * Default factory to use when creating xhr objects.  You probably shouldn't be
         * instantiating this directly, but rather using it via goog.net.XmlHttp.
         * @extends {goog.net.XmlHttpFactory}
         * @constructor
         */
        constructor();
    }

    /**
     * Static class for creating XMLHttpRequest objects.
     * @return {!goog.net.XhrLike.OrNative} A new XMLHttpRequest object.
     */
    function XmlHttp(): goog.net.XhrLike.OrNative;

    /** @const */
    var XmlHttpDefines: any /*missing*/;
}

declare module goog.net.XmlHttp {

    /**
     * Gets the options to use with the XMLHttpRequest objects obtained using
     * the static methods.
     * @return {Object} The options.
     */
    function getOptions(): Object;

    /**
     * Type of options that an XmlHttp object can have.
     * @enum {number}
     */
    enum OptionType { USE_NULL_FUNCTION, LOCAL_REQUEST_ERROR } 

    /**
     * Status constants for XMLHTTP, matches:
     * http://msdn.microsoft.com/library/default.asp?url=/library/
     *   en-us/xmlsdk/html/0e6a34e4-f90c-489d-acff-cb44242fafc6.asp
     * @enum {number}
     */
    enum ReadyState { UNINITIALIZED, LOADING, LOADED, INTERACTIVE, COMPLETE } 

    /**
     * Sets the factories for creating XMLHttpRequest objects and their options.
     * @param {Function} factory The factory for XMLHttpRequest objects.
     * @param {Function} optionsFactory The factory for options.
     * @deprecated Use setGlobalFactory instead.
     */
    function setFactory(factory: Function, optionsFactory: Function): void;

    /**
     * Sets the global factory object.
     * @param {!goog.net.XmlHttpFactory} factory New global factory object.
     */
    function setGlobalFactory(factory: goog.net.XmlHttpFactory): void;
}

