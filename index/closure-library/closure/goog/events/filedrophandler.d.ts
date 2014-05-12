/// <reference path="../../../globals.d.ts" />
/// <reference path="./eventtarget.d.ts" />

declare module goog.events {

    class FileDropHandler extends FileDropHandler.__Class { }
    module FileDropHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
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
            constructor(element: Element, opt_preventDropOutside?: boolean);
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
            constructor(element: Document, opt_preventDropOutside?: boolean);
        }
    }
}

declare module goog.events.FileDropHandler {

    /**
     * The types of events fired by this class.
     * @enum {string}
     */
    enum EventType { DROP } 
}
