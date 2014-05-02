// Generated Thu May  1 16:40:55 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.net.IframeLoadMonitor {

    /**
     * Event type dispatched by a goog.net.IframeLoadMonitor when it internal iframe
     * finishes loading for the first time after construction of the
     * goog.net.IframeLoadMonitor
     * @type {string}
     */
    var LOAD_EVENT: string;
}

declare module goog.net {

    /**
     * The correct way to determine whether a same-domain iframe has completed
     * loading is different in IE and Firefox.  This class abstracts above these
     * differences, providing a consistent interface for:
     * <ol>
     * <li> Determing if an iframe is currently loaded
     * <li> Listening for an iframe that is not currently loaded, to finish loading
     * </ol>
     *
     * @param {HTMLIFrameElement} iframe An iframe.
     * @param {boolean=} opt_hasContent Does the loaded iframe have content.
     * @extends {goog.events.EventTarget}
     * @constructor
     * @final
     */
    class IframeLoadMonitor extends goog.events.EventTarget {
        /**
         * The correct way to determine whether a same-domain iframe has completed
         * loading is different in IE and Firefox.  This class abstracts above these
         * differences, providing a consistent interface for:
         * <ol>
         * <li> Determing if an iframe is currently loaded
         * <li> Listening for an iframe that is not currently loaded, to finish loading
         * </ol>
         *
         * @param {HTMLIFrameElement} iframe An iframe.
         * @param {boolean=} opt_hasContent Does the loaded iframe have content.
         * @extends {goog.events.EventTarget}
         * @constructor
         * @final
         */
        constructor(iframe: HTMLIFrameElement, opt_hasContent?: boolean);
    
        /**
         * Returns whether or not the iframe is loaded.
         * @return {boolean} whether or not the iframe is loaded.
         */
        isLoaded(): boolean;
    
        /**
         * Returns the iframe whose load state this IframeLoader monitors.
         * @return {HTMLIFrameElement} the iframe whose load state this IframeLoader
         *     monitors.
         */
        getIframe(): HTMLIFrameElement;
    }
}

