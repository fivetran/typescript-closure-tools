// Generated Fri May  2 15:01:37 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.events.FileDropHandler {

    /**
     * The types of events fired by this class.
     * @enum {string}
     */
    enum EventType { DROP } 
}

declare module goog.events {

    /**
     * A files drag and drop event detector. Gets an {@code element} as parameter
     * and fires {@code goog.events.FileDropHandler.EventType.DROP} event when files
     * are dropped in the {@code element}.
     *
     * @param {Element|Document} element The element or document to listen on.
     * @param {boolean=} opt_preventDropOutside Whether to prevent a drop on the
     *     area outside the {@code element}. Default false.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FileDropHandler extends goog.events.EventTarget {
        /**
         * A files drag and drop event detector. Gets an {@code element} as parameter
         * and fires {@code goog.events.FileDropHandler.EventType.DROP} event when files
         * are dropped in the {@code element}.
         *
         * @param {Element|Document} element The element or document to listen on.
         * @param {boolean=} opt_preventDropOutside Whether to prevent a drop on the
         *     area outside the {@code element}. Default false.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(element: any /*Element|Document*/, opt_preventDropOutside?: boolean);
    }
}

