/// <reference path="../../../../globals.d.ts" />
/// <reference path="./strokeandfillelement.d.ts" />
/// <reference path="./group.d.ts" />

declare module goog.graphics.ext {

    class Rectangle extends Rectangle__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Rectangle__Class extends goog.graphics.ext.StrokeAndFillElement__Class  { 
    
            /**
             * Wrapper for a graphics rectangle element.
             * @param {goog.graphics.ext.Group} group Parent for this element.
             * @constructor
             * @extends {goog.graphics.ext.StrokeAndFillElement}
             * @final
             */
            constructor(group: goog.graphics.ext.Group);
    } 
    
}
