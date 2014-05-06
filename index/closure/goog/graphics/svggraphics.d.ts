/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/graphics/affinetransform.d.ts" />
/// <reference path="../../../closure/goog/graphics/element.d.ts" />
/// <reference path="../../../closure/goog/graphics/strokeandfillelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/rectelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/pathelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/groupelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/textelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/ellipseelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/imageelement.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/graphics/svgelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/path.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/graphics/fill.d.ts" />
/// <reference path="../../../closure/goog/graphics/solidfill.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/graphics/abstractgraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/lineargradient.d.ts" />
/// <reference path="../../../closure/goog/graphics/stroke.d.ts" />

declare module goog.graphics {

    /**
     * A Graphics implementation for drawing using SVG.
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The coordinate width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight The coordinate height - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @constructor
     * @extends {goog.graphics.AbstractGraphics}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class SvgGraphics extends goog.graphics.AbstractGraphics {
        /**
         * A Graphics implementation for drawing using SVG.
         * @param {string|number} width The width in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {string|number} height The height in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {?number=} opt_coordWidth The coordinate width - if
         *     omitted or null, defaults to same as width.
         * @param {?number=} opt_coordHeight The coordinate height - if
         *     omitted or null, defaults to same as height.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @constructor
         * @extends {goog.graphics.AbstractGraphics}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets properties to an SVG element. Used internally and by different
         * SVG elements.
         * @param {Element} element The svg element.
         * @param {Object} attributes Map of name-value pairs for attributes.
         */
        setElementAttributes(element: Element, attributes: Object): void;
    
        /**
         * Draw an image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of the image.
         * @param {number} height Height of the image.
         * @param {string} src The source fo the image.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.ImageElement} The newly created image wrapped in a
         *     rectangle element.
         */
        drawImage(x: number, y: number, width: number, height: number, src: string, opt_group?: goog.graphics.GroupElement): goog.graphics.ImageElement;
    
        /**
         * Adds a defintion of an element to the global definitions.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal the should have the same key.
         * @param {Element} defElement DOM element to add as a definition. It must
         *     have an id attribute set.
         * @return {string} The assigned id of the defElement.
         */
        addDef(defKey: string, defElement: Element): string;
    
        /**
         * Returns the id of a definition element.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal the should have the same key.
         * @return {?string} The id of the found definition element or null if
         *     not found.
         */
        getDef(defKey: string): string;
    
        /**
         * Removes a definition of an elemnt from the global definitions.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal they should have the same key.
         */
        removeDef(defKey: string): void;
    }
}

declare module goog.graphics.SvgGraphics {

    /**
     * Returns a string representation of a logical path suitable for use in
     * an SVG element.
     *
     * @param {goog.graphics.Path} path The logical path.
     * @return {string} The SVG path representation.
     * @suppress {deprecated} goog.graphics is deprecated.
     */
    function getSvgPath(path: goog.graphics.Path): string;
}

