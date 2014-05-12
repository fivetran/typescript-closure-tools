/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="./abstractgraphics.d.ts" />
/// <reference path="./affinetransform.d.ts" />

declare module goog.graphics {

    class Element extends Element.__Class { }
    module Element {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * Base class for a thin wrapper around the DOM element returned from
             * the different draw methods of the graphics.
             * You should not construct objects from this constructor. The graphics
             * will return the object for you.
             * @param {Element} element  The DOM element to wrap.
             * @param {goog.graphics.AbstractGraphics} graphics  The graphics creating
             *     this element.
             * @constructor
             * @extends {goog.events.EventTarget}
             * @deprecated goog.graphics is deprecated. It existed to abstract over browser
             *     differences before the canvas tag was widely supported.  See
             *     http://en.wikipedia.org/wiki/Canvas_element for details.
             */
            constructor(element: Element, graphics: goog.graphics.AbstractGraphics);
    
            /**
             * Returns the underlying object.
             * @return {Element} The underlying element.
             */
            getElement(): Element;
    
            /**
             * Returns the graphics.
             * @return {goog.graphics.AbstractGraphics} The graphics that created the
             *     element.
             */
            getGraphics(): goog.graphics.AbstractGraphics;
    
            /**
             * Set the transformation of the element.
             * @param {number} x The x coordinate of the translation transform.
             * @param {number} y The y coordinate of the translation transform.
             * @param {number} rotate The angle of the rotation transform.
             * @param {number} centerX The horizontal center of the rotation transform.
             * @param {number} centerY The vertical center of the rotation transform.
             */
            setTransformation(x: number, y: number, rotate: number, centerX: number, centerY: number): void;
    
            /**
             * @return {!goog.graphics.AffineTransform} The transformation applied to
             *     this element.
             */
            getTransform(): goog.graphics.AffineTransform;
        }
    }
}
