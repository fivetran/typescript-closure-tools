/// <reference path="../../../globals.d.ts" />
/// <reference path="./groupelement.d.ts" />
/// <reference path="./canvasgraphics.d.ts" />
/// <reference path="./element.d.ts" />
/// <reference path="./ellipseelement.d.ts" />
/// <reference path="./stroke.d.ts" />
/// <reference path="./fill.d.ts" />
/// <reference path="./rectelement.d.ts" />
/// <reference path="./pathelement.d.ts" />
/// <reference path="./path.d.ts" />
/// <reference path="./textelement.d.ts" />
/// <reference path="./font.d.ts" />
/// <reference path="./imageelement.d.ts" />

declare module goog.graphics {

    class CanvasGroupElement extends CanvasGroupElement.__Class { }
    module CanvasGroupElement {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.graphics.GroupElement.__Class {
    
            /**
             * Object representing a group of objects in a canvas.
             * This is an implementation of the goog.graphics.GroupElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {goog.graphics.CanvasGraphics} graphics The graphics creating
             *     this element.
             * @constructor
             * @extends {goog.graphics.GroupElement}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             * @final
             */
            constructor(graphics: goog.graphics.CanvasGraphics);
    
            /**
             * Append a child to the group.  Does not draw it
             * @param {goog.graphics.Element} element The child to append.
             */
            appendChild(element: goog.graphics.Element): void;
    
            /**
             * Draw the group.
             * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
             */
            draw(ctx: CanvasRenderingContext2D): void;
        }
    }

    class CanvasEllipseElement extends CanvasEllipseElement.__Class { }
    module CanvasEllipseElement {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.graphics.EllipseElement.__Class {
    
            /**
             * Thin wrapper for canvas ellipse elements.
             * This is an implementation of the goog.graphics.EllipseElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.CanvasGraphics} graphics  The graphics creating
             *     this element.
             * @param {number} cx Center X coordinate.
             * @param {number} cy Center Y coordinate.
             * @param {number} rx Radius length for the x-axis.
             * @param {number} ry Radius length for the y-axis.
             * @param {goog.graphics.Stroke} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.EllipseElement}
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.CanvasGraphics, cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
            /**
             * Draw the ellipse.  Should be treated as package scope.
             * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
             */
            draw(ctx: CanvasRenderingContext2D): void;
        }
    }

    class CanvasRectElement extends CanvasRectElement.__Class { }
    module CanvasRectElement {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.graphics.RectElement.__Class {
    
            /**
             * Thin wrapper for canvas rectangle elements.
             * This is an implementation of the goog.graphics.RectElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.CanvasGraphics} graphics The graphics creating
             *     this element.
             * @param {number} x X coordinate (left).
             * @param {number} y Y coordinate (top).
             * @param {number} w Width of rectangle.
             * @param {number} h Height of rectangle.
             * @param {goog.graphics.Stroke} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.RectElement}
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.CanvasGraphics, x: number, y: number, w: number, h: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
            /**
             * Draw the rectangle.  Should be treated as package scope.
             * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
             */
            draw(ctx: CanvasRenderingContext2D): void;
        }
    }

    class CanvasPathElement extends CanvasPathElement.__Class { }
    module CanvasPathElement {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.graphics.PathElement.__Class {
    
            /**
             * Thin wrapper for canvas path elements.
             * This is an implementation of the goog.graphics.PathElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.CanvasGraphics} graphics The graphics creating
             *     this element.
             * @param {!goog.graphics.Path} path The path object to draw.
             * @param {goog.graphics.Stroke} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.PathElement}
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.CanvasGraphics, path: goog.graphics.Path, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
            /**
             * Draw the path.  Should be treated as package scope.
             * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
             * @suppress {deprecated} goog.graphics is deprecated.
             */
            draw(ctx: CanvasRenderingContext2D): void;
        }
    }

    class CanvasTextElement extends CanvasTextElement.__Class { }
    module CanvasTextElement {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.graphics.TextElement.__Class {
    
            /**
             * Thin wrapper for canvas text elements.
             * This is an implementation of the goog.graphics.TextElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {!goog.graphics.CanvasGraphics} graphics The graphics creating
             *     this element.
             * @param {string} text The text to draw.
             * @param {number} x1 X coordinate of start of line.
             * @param {number} y1 Y coordinate of start of line.
             * @param {number} x2 X coordinate of end of line.
             * @param {number} y2 Y coordinate of end of line.
             * @param {?string} align Horizontal alignment: left (default), center, right.
             * @param {!goog.graphics.Font} font Font describing the font properties.
             * @param {goog.graphics.Stroke} stroke The stroke to use for this element.
             * @param {goog.graphics.Fill} fill The fill to use for this element.
             * @constructor
             * @extends {goog.graphics.TextElement}
             * @final
             */
            constructor(graphics: goog.graphics.CanvasGraphics, text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
            /**
             * Draw the text.  Should be treated as package scope.
             * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
             */
            draw(ctx: CanvasRenderingContext2D): void;
        }
    }

    class CanvasImageElement extends CanvasImageElement.__Class { }
    module CanvasImageElement {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.graphics.ImageElement.__Class {
    
            /**
             * Thin wrapper for canvas image elements.
             * This is an implementation of the goog.graphics.ImageElement interface.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element The DOM element to wrap.
             * @param {goog.graphics.CanvasGraphics} graphics The graphics creating
             *     this element.
             * @param {number} x X coordinate (left).
             * @param {number} y Y coordinate (top).
             * @param {number} w Width of rectangle.
             * @param {number} h Height of rectangle.
             * @param {string} src Source of the image.
             * @constructor
             * @extends {goog.graphics.ImageElement}
             * @final
             */
            constructor(element: Element, graphics: goog.graphics.CanvasGraphics, x: number, y: number, w: number, h: number, src: string);
    
            /**
             * Draw the image.  Should be treated as package scope.
             * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
             */
            draw(ctx: CanvasRenderingContext2D): void;
        }
    }
}
