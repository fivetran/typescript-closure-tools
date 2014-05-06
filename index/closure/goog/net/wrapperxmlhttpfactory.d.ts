/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />

declare module goog.net {

    /**
     * An xhr factory subclass which can be constructed using two factory methods.
     * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()
     * with an unchanged signature.
     * @param {function():!goog.net.XhrLike.OrNative} xhrFactory
     *     A function which returns a new XHR object.
     * @param {function():!Object} optionsFactory A function which returns the
     *     options associated with xhr objects from this factory.
     * @extends {goog.net.XmlHttpFactory}
     * @constructor
     * @final
     */
    class WrapperXmlHttpFactory extends goog.net.XmlHttpFactory {
        /**
         * An xhr factory subclass which can be constructed using two factory methods.
         * This exists partly to allow the preservation of goog.net.XmlHttp.setFactory()
         * with an unchanged signature.
         * @param {function():!goog.net.XhrLike.OrNative} xhrFactory
         *     A function which returns a new XHR object.
         * @param {function():!Object} optionsFactory A function which returns the
         *     options associated with xhr objects from this factory.
         * @extends {goog.net.XmlHttpFactory}
         * @constructor
         * @final
         */
        constructor(xhrFactory: () => goog.net.XhrLike.OrNative, optionsFactory: () => Object);
    }
}

