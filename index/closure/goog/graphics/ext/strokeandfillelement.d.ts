// Generated Sun May  4 18:17:45 PDT 2014

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
     * Interface for a graphics element that has a stroke and fill.
     * This is the base interface for ellipse, rectangle and other
     * shape interfaces.
     * You should not construct objects from this constructor. Use a subclass.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @param {goog.graphics.StrokeAndFillElement} wrapper The thin wrapper to wrap.
     * @constructor
     * @extends {goog.graphics.ext.Element}
     */
    class StrokeAndFillElement extends goog.graphics.ext.Element {
        /**
         * Interface for a graphics element that has a stroke and fill.
         * This is the base interface for ellipse, rectangle and other
         * shape interfaces.
         * You should not construct objects from this constructor. Use a subclass.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @param {goog.graphics.StrokeAndFillElement} wrapper The thin wrapper to wrap.
         * @constructor
         * @extends {goog.graphics.ext.Element}
         */
        constructor(group: goog.graphics.ext.Group, wrapper: goog.graphics.StrokeAndFillElement);
    
        /**
         * Sets the fill for this element.
         * @param {goog.graphics.Fill?} fill The fill object.
         */
        setFill(fill: goog.graphics.Fill): void;
    
        /**
         * Sets the stroke for this element.
         * @param {goog.graphics.Stroke?} stroke The stroke object.
         */
        setStroke(stroke: goog.graphics.Stroke): void;
    }
}

