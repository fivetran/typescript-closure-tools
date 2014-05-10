/// <reference path="../../../../globals.d.ts" />
/// <reference path="./strokeandfillelement.d.ts" />
/// <reference path="./group.d.ts" />

declare module goog.graphics.ext {

    class Ellipse extends __Ellipse { }
    class __Ellipse extends goog.graphics.ext.__StrokeAndFillElement {
    
        /**
         * Wrapper for a graphics ellipse element.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @constructor
         * @extends {goog.graphics.ext.StrokeAndFillElement}
         * @final
         */
        constructor(group: goog.graphics.ext.Group);
    }
}
