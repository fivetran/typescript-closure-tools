/// <reference path="../../../globals.d.ts" />
/// <reference path="./xmlhttpfactory.d.ts" />
/// <reference path="./xhrlike.d.ts" />

declare module goog.net {

    class WrapperXmlHttpFactory extends WrapperXmlHttpFactory__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class WrapperXmlHttpFactory__Class extends goog.net.XmlHttpFactory__Class  { 
    
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
            constructor(xhrFactory: { (): goog.net.XhrLike.OrNative }, optionsFactory: { (): Object });
    } 
    
}
