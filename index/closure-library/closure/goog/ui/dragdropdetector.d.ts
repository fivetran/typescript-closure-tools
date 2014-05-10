/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="../events/event.d.ts" />
/// <reference path="../math/coordinate.d.ts" />

declare module goog.ui {

    class DragDropDetector extends __DragDropDetector { }
    class __DragDropDetector extends goog.events.__EventTarget {
    
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

declare module goog.ui.DragDropDetector {

    class ImageDropEvent extends __ImageDropEvent { }
    class __ImageDropEvent extends goog.events.__Event {
    
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

    class LinkDropEvent extends __LinkDropEvent { }
    class __LinkDropEvent extends goog.events.__Event {
    
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
}
