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
/// <reference path="../../../closure/goog/graphics/vmlelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/path.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/graphics/fill.d.ts" />
/// <reference path="../../../closure/goog/graphics/lineargradient.d.ts" />
/// <reference path="../../../closure/goog/graphics/solidfill.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/graphics/abstractgraphics.d.ts" />

declare module goog.graphics {

    /**
     * A Graphics implementation for drawing using VML.
     * @param {string|number} width The (non-zero) width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The (non-zero) height in pixels.  Strings
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
    class VmlGraphics extends goog.graphics.AbstractGraphics {
        /**
         * A Graphics implementation for drawing using VML.
         * @param {string|number} width The (non-zero) width in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {string|number} height The (non-zero) height in pixels.  Strings
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
         * Creates a VML element. Used internally and by different VML classes.
         * @param {string} tagName The type of element to create.
         * @return {!Element} The created element.
         */
        createVmlElement(tagName: string): Element;
    
        /**
         * Returns the VML element with the given id that is a child of this graphics
         * object.
         * Should be considered package private, and not used externally.
         * @param {string} id The element id to find.
         * @return {Element} The element with the given id, or null if none is found.
         */
        getVmlElement(id: string): Element;
    
        /**
         * Removes the fill information from a dom element.
         * @param {Element} element DOM element.
         */
        removeFill(element: Element): void;
    
        /**
         * Draw an image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of image.
         * @param {number} height Height of image.
         * @param {string} src Source of the image.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.ImageElement} The newly created element.
         */
        drawImage(x: number, y: number, width: number, height: number, src: string, opt_group?: goog.graphics.GroupElement): goog.graphics.ImageElement;
    }
}

declare module goog.graphics.VmlGraphics {

    /**
     * The coordinate multiplier to allow sub-pixel rendering
     * @type {number}
     */
    var COORD_MULTIPLIER: number;

    /**
     * Converts the given size to a css size.  If it is a percentage, leaves it
     * alone.  Otherwise assumes px.
     *
     * @param {number|string} size The size to use.
     * @return {string} The position adjusted for COORD_MULTIPLIER.
     */
    function toCssSize(size: any /*number|string*/): string;

    /**
     * Multiplies positioning coordinates by COORD_MULTIPLIER to allow sub-pixel
     * coordinates.  Also adds a half pixel offset to match SVG.
     *
     * This function is internal for the VML supporting classes, and
     * should not be used externally.
     *
     * @param {number|string} number A position in pixels.
     * @return {number} The position adjusted for COORD_MULTIPLIER.
     */
    function toPosCoord(number: any /*number|string*/): number;

    /**
     * Add a "px" suffix to a number of pixels, and multiplies all coordinates by
     * COORD_MULTIPLIER to allow sub-pixel coordinates.
     *
     * This function is internal for the VML supporting classes, and
     * should not be used externally.
     *
     * @param {number|string} number A position in pixels.
     * @return {string} The position with suffix 'px'.
     */
    function toPosPx(number: any /*number|string*/): string;

    /**
     * Multiplies the width or height coordinate by COORD_MULTIPLIER to allow
     * sub-pixel coordinates.
     *
     * This function is internal for the VML supporting classes, and
     * should not be used externally.
     *
     * @param {string|number} number A size in units.
     * @return {number} The size multiplied by the correct factor.
     */
    function toSizeCoord(number: any /*string|number*/): number;

    /**
     * Add a "px" suffix to a number of pixels, and multiplies all coordinates by
     * COORD_MULTIPLIER to allow sub-pixel coordinates.
     *
     * This function is internal for the VML supporting classes, and
     * should not be used externally.
     *
     * @param {number|string} number A size in pixels.
     * @return {string} The size with suffix 'px'.
     */
    function toSizePx(number: any /*number|string*/): string;

    /**
     * Sets an attribute on the given VML element, in the way best suited to the
     * current version of IE.  Should only be used in the goog.graphics package.
     * @param {Element} element The element to set an attribute
     *     on.
     * @param {string} name The name of the attribute to set.
     * @param {string} value The value to set it to.
     */
    function setAttribute(element: Element, name: string, value: string): void;

    /**
     * Set top, left, width and height for an element.
     * This function is internal for the VML supporting classes, and
     * should not be used externally.
     *
     * @param {Element} element DOM element.
     * @param {number} left Left ccordinate in pixels.
     * @param {number} top Top ccordinate in pixels.
     * @param {number} width Width in pixels.
     * @param {number} height Height in pixels.
     */
    function setPositionAndSize(element: Element, left: number, top: number, width: number, height: number): void;

    /**
     * Returns a string representation of a logical path suitable for use in
     * a VML element.
     *
     * @param {goog.graphics.Path} path The logical path.
     * @return {string} The VML path representation.
     * @suppress {deprecated} goog.graphics is deprecated.
     */
    function getVmlPath(path: goog.graphics.Path): string;
}

