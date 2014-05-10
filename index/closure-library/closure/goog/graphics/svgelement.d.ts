/// <reference path="../../../globals.d.ts" />
/// <reference path="./groupelement.d.ts" />
/// <reference path="./svggraphics.d.ts" />
/// <reference path="./ellipseelement.d.ts" />
/// <reference path="./stroke.d.ts" />
/// <reference path="./fill.d.ts" />
/// <reference path="./rectelement.d.ts" />
/// <reference path="./pathelement.d.ts" />
/// <reference path="./textelement.d.ts" />
/// <reference path="./imageelement.d.ts" />

declare module goog.graphics {

    class SvgGroupElement extends __SvgGroupElement { }
    class __SvgGroupElement extends goog.graphics.__GroupElement {
    
        /**
         * Thin wrapper for SVG group elements.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.SvgGraphics} graphics The graphics creating
         *     this element.
         * @constructor
         * @extends {goog.graphics.GroupElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.SvgGraphics);
    }

    class SvgEllipseElement extends __SvgEllipseElement { }
    class __SvgEllipseElement extends goog.graphics.__EllipseElement {
    
        /**
         * Thin wrapper for SVG ellipse elements.
         * This is an implementation of the goog.graphics.EllipseElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.SvgGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.EllipseElement}
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.SvgGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    }

    class SvgRectElement extends __SvgRectElement { }
    class __SvgRectElement extends goog.graphics.__RectElement {
    
        /**
         * Thin wrapper for SVG rectangle elements.
         * This is an implementation of the goog.graphics.RectElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.SvgGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.RectElement}
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.SvgGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    }

    class SvgPathElement extends __SvgPathElement { }
    class __SvgPathElement extends goog.graphics.__PathElement {
    
        /**
         * Thin wrapper for SVG path elements.
         * This is an implementation of the goog.graphics.PathElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.SvgGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.PathElement}
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.SvgGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    }

    class SvgTextElement extends __SvgTextElement { }
    class __SvgTextElement extends goog.graphics.__TextElement {
    
        /**
         * Thin wrapper for SVG text elements.
         * This is an implementation of the goog.graphics.TextElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.SvgGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.TextElement}
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.SvgGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    }

    class SvgImageElement extends __SvgImageElement { }
    class __SvgImageElement extends goog.graphics.__ImageElement {
    
        /**
         * Thin wrapper for SVG image elements.
         * This is an implementation of the goog.graphics.ImageElement interface.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.SvgGraphics} graphics The graphics creating
         *     this element.
         * @constructor
         * @extends {goog.graphics.ImageElement}
         * @final
         */
        constructor(element: Element, graphics: goog.graphics.SvgGraphics);
    }
}
