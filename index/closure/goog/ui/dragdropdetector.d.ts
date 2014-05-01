// Generated Wed Apr 30 22:42:05 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.ui.DragDropDetector {

    /**
     * Drag and drop event types.
     * @enum {string}
     */
    enum EventType { IMAGE_DROPPED, LINK_DROPPED } 

    /**
     * Initial value for clientX and clientY indicating that the location has
     * never been updated.
     */
    var INIT_POSITION: any /*missing*/;

    /**
     * Creates a new image drop event object.
     * @param {string} url The url of the dropped image.
     * @param {goog.math.Coordinate} position The screen position where the drop
     *     occurred.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class ImageDropEvent extends goog.events.Event {
        /**
         * Creates a new image drop event object.
         * @param {string} url The url of the dropped image.
         * @param {goog.math.Coordinate} position The screen position where the drop
         *     occurred.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(url: string, position: goog.math.Coordinate);
    
        /**
         * @return {string} The url of the image that was dropped.
         */
        getUrl(): string;
    
        /**
         * @return {goog.math.Coordinate} The screen position where the drop occurred.
         *     This may be have x and y of goog.ui.DragDropDetector.INIT_POSITION,
         *     indicating the drop position is unknown.
         */
        getPosition(): goog.math.Coordinate;
    }

    /**
     * Creates a new link drop event object.
     * @param {string} url The url of the dropped link.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class LinkDropEvent extends goog.events.Event {
        /**
         * Creates a new link drop event object.
         * @param {string} url The url of the dropped link.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(url: string);
    
        /**
         * @return {string} The url of the link that was dropped.
         */
        getUrl(): string;
    }
}

declare module goog.ui {

    /**
     * Creates a new drag and drop detector.
     * @param {string=} opt_filePath The URL of the page to use for the detector.
     *     It should contain the same contents as dragdropdetector_target.html in
     *     the demos directory.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class DragDropDetector extends goog.events.EventTarget {
        /**
         * Creates a new drag and drop detector.
         * @param {string=} opt_filePath The URL of the page to use for the detector.
         *     It should contain the same contents as dragdropdetector_target.html in
         *     the demos directory.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_filePath?: string);
    }
}

