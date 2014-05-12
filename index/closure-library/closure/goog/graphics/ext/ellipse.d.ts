/// <reference path="../../../../globals.d.ts" />
/// <reference path="./strokeandfillelement.d.ts" />
/// <reference path="./group.d.ts" />

declare module goog.graphics.ext {

    class Ellipse extends Ellipse.__Class { }
    module Ellipse {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.graphics.ext.StrokeAndFillElement.__Class {
    
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
}
