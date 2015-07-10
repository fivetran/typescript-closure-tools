/// <reference path="../../../globals.d.ts" />
/// <reference path="./groupelement.d.ts" />
/// <reference path="./vmlgraphics.d.ts" />
/// <reference path="./ellipseelement.d.ts" />
/// <reference path="./stroke.d.ts" />
/// <reference path="./fill.d.ts" />
/// <reference path="./rectelement.d.ts" />
/// <reference path="./pathelement.d.ts" />
/// <reference path="./textelement.d.ts" />
/// <reference path="./imageelement.d.ts" />

declare module goog.graphics {

    class VmlGroupElement extends VmlGroupElement__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VmlGroupElement__Class extends goog.graphics.GroupElement__Class  { 
    
            /**
             * Thin wrapper for VML group elements.
             * This is an implementation of the goog.graphics.GroupElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.VmlGraphics} graphics The graphics creating
             *     this element.
             * @constructor
             * @extends {goog.graphics.GroupElement}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.VmlGraphics);
    } 
    

    class VmlEllipseElement extends VmlEllipseElement__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VmlEllipseElement__Class extends goog.graphics.EllipseElement__Class  { 
    
            /**
             * Thin wrapper for VML ellipse elements.
             * This is an implementation of the goog.graphics.EllipseElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.VmlGraphics} graphics  The graphics creating
             *     this element.
             * @param {number} cx Center X coordinate.
             * @param {number} cy Center Y coordinate.
             * @param {number} rx Radius length for the x-axis.
             * @param {number} ry Radius length for the y-axis.
             * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill?} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.EllipseElement}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.VmlGraphics, cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
            /**
             * X coordinate of the ellipse center.
             * @type {number}
             */
            cx: number;
    
            /**
             * Y coordinate of the ellipse center.
             * @type {number}
             */
            cy: number;
    
            /**
             * Radius length for the x-axis.
             * @type {number}
             */
            rx: number;
    
            /**
             * Radius length for the y-axis.
             * @type {number}
             */
            ry: number;
    } 
    

    class VmlRectElement extends VmlRectElement__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VmlRectElement__Class extends goog.graphics.RectElement__Class  { 
    
            /**
             * Thin wrapper for VML rectangle elements.
             * This is an implementation of the goog.graphics.RectElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.VmlGraphics} graphics The graphics creating
             *     this element.
             * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill?} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.RectElement}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    } 
    

    class VmlPathElement extends VmlPathElement__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VmlPathElement__Class extends goog.graphics.PathElement__Class  { 
    
            /**
             * Thin wrapper for VML path elements.
             * This is an implementation of the goog.graphics.PathElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.VmlGraphics} graphics The graphics creating
             *     this element.
             * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill?} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.PathElement}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    } 
    

    class VmlTextElement extends VmlTextElement__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VmlTextElement__Class extends goog.graphics.TextElement__Class  { 
    
            /**
             * Thin wrapper for VML text elements.
             * This is an implementation of the goog.graphics.TextElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.VmlGraphics} graphics The graphics creating
             *     this element.
             * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill?} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.TextElement}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.VmlGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    } 
    

    class VmlImageElement extends VmlImageElement__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class VmlImageElement__Class extends goog.graphics.ImageElement__Class  { 
    
            /**
             * Thin wrapper for VML image elements.
             * This is an implementation of the goog.graphics.ImageElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.VmlGraphics} graphics The graphics creating
             *     this element.
             * @constructor
             * @extends {goog.graphics.ImageElement}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.VmlGraphics);
    } 
    
}
