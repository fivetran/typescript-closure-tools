/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/graphics/path.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/graphics/affinetransform.d.ts" />

declare module goog.graphics.ext {

    /**
     * Creates a path object
     * @constructor
     * @extends {goog.graphics.Path}
     * @final
     */
    class Path extends goog.graphics.Path {
        /**
         * Creates a path object
         * @constructor
         * @extends {goog.graphics.Path}
         * @final
         */
        constructor();
    
        /**
         * Modify the bounding box of the path.  This may cause the path to be
         * simplified (i.e. arcs converted to curves) as a side-effect.
         * @param {number} deltaX How far to translate the x coordinates.
         * @param {number} deltaY How far to translate the y coordinates.
         * @param {number} xFactor After translation, all x coordinates are multiplied
         *     by this number.
         * @param {number} yFactor After translation, all y coordinates are multiplied
         *     by this number.
         * @return {!goog.graphics.ext.Path} The path itself.
         */
        modifyBounds(deltaX: number, deltaY: number, xFactor: number, yFactor: number): goog.graphics.ext.Path;
    
        /**
         * Set the precomputed bounds.
         * @param {goog.math.Rect?} bounds The bounds to use, or set to null to clear
         *     and recompute on the next call to getBoundingBox.
         */
        useBoundingBox(bounds: goog.math.Rect): void;
    
        /**
         * @return {goog.math.Rect?} The bounding box of the path, or null if the
         *     path is empty.
         */
        getBoundingBox(): goog.math.Rect;
    }
}

