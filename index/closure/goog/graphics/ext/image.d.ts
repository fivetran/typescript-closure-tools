// Generated Wed Apr 30 22:43:48 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/graphics/ext/coordinates.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/graphics/ext/element.d.ts" />

declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics image element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @param {string} src The path to the image to display.
     * @constructor
     * @extends {goog.graphics.ext.Element}
     * @final
     */
    class Image extends goog.graphics.ext.Element {
        /**
         * Wrapper for a graphics image element.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @param {string} src The path to the image to display.
         * @constructor
         * @extends {goog.graphics.ext.Element}
         * @final
         */
        constructor(group: goog.graphics.ext.Group, src: string);
    
        /**
         * Update the source of the image.
         * @param {string} src  Source of the image.
         */
        setSource(src: string): void;
    }
}

