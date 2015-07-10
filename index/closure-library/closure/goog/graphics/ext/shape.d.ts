/// <reference path="../../../../globals.d.ts" />
/// <reference path="./strokeandfillelement.d.ts" />
/// <reference path="./group.d.ts" />
/// <reference path="./path.d.ts" />
/// <reference path="../path.d.ts" />

declare module goog.graphics.ext {

    class Shape extends Shape__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Shape__Class extends goog.graphics.ext.StrokeAndFillElement__Class  { 
    
            /**
             * Wrapper for a graphics shape element.
             * @param {goog.graphics.ext.Group} group Parent for this element.
             * @param {!goog.graphics.ext.Path} path  The path to draw.
             * @param {boolean=} opt_autoSize Optional flag to specify the path should
             *     automatically resize to fit the element.  Defaults to false.
             * @constructor
             * @extends {goog.graphics.ext.StrokeAndFillElement}
             * @final
             */
            constructor(group: goog.graphics.ext.Group, path: goog.graphics.ext.Path, opt_autoSize?: boolean);
    
            /**
             * Get the path drawn by this shape.
             * @return {goog.graphics.Path?} The path drawn by this shape.
             */
            getPath(): goog.graphics.Path;
    
            /**
             * Set the path to draw.
             * @param {goog.graphics.ext.Path} path The path to draw.
             */
            setPath(path: goog.graphics.ext.Path): void;
    } 
    
}
