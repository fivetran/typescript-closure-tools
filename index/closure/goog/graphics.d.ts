// Generated Wed Apr 30 16:36:38 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/ui.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.graphics.AffineTransform' {

    /**
     * Creates a transform representing a scaling transformation.
     *
     * @param {number} sx The x-axis scaling factor.
     * @param {number} sy The y-axis scaling factor.
     * @return {!goog.graphics.AffineTransform} A transform representing a scaling
     *     transformation.
     */
    function getScaleInstance(sx: number, sy: number): goog.graphics.AffineTransform;

    /**
     * Creates a transform representing a translation transformation.
     *
     * @param {number} dx The distance to translate in the x direction.
     * @param {number} dy The distance to translate in the y direction.
     * @return {!goog.graphics.AffineTransform} A transform representing a
     *     translation transformation.
     */
    function getTranslateInstance(dx: number, dy: number): goog.graphics.AffineTransform;

    /**
     * Creates a transform representing a shearing transformation.
     *
     * @param {number} shx The x-axis shear factor.
     * @param {number} shy The y-axis shear factor.
     * @return {!goog.graphics.AffineTransform} A transform representing a shearing
     *     transformation.
     */
    function getShearInstance(shx: number, shy: number): goog.graphics.AffineTransform;

    /**
     * Creates a transform representing a rotation transformation.
     *
     * @param {number} theta The angle of rotation measured in radians.
     * @param {number} x The x coordinate of the anchor point.
     * @param {number} y The y coordinate of the anchor point.
     * @return {!goog.graphics.AffineTransform} A transform representing a rotation
     *     transformation.
     */
    function getRotateInstance(theta: number, x: number, y: number): goog.graphics.AffineTransform;
}

declare module 'goog.graphics' {

    /**
     * Returns an instance of goog.graphics.AbstractGraphics that knows how to draw
     * for the current platform (A factory for the proper Graphics implementation)
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The optional coordinate width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight The optional coordinate height - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {!goog.graphics.AbstractGraphics} The created instance.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function createGraphics(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper): goog.graphics.AbstractGraphics;

    /**
     * Returns an instance of goog.graphics.AbstractGraphics that knows how to draw
     * for the current platform (A factory for the proper Graphics implementation)
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.   Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The optional coordinate width, defaults to
     *     same as width.
     * @param {?number=} opt_coordHeight The optional coordinate height, defaults to
     *     same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {goog.graphics.AbstractGraphics} The created instance.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function createSimpleGraphics(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper): goog.graphics.AbstractGraphics;

    /**
     * Static function to check if the current browser has Graphics support.
     * @return {boolean} True if the current browser has Graphics support.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function isBrowserSupported(): boolean;

    /**
     * Returns the VML element corresponding to this object.  This method is added
     * to several classes below.  Note that the return value of this method may
     * change frequently in IE8, so it should not be cached externally.
     * @return {Element} The VML element corresponding to this object.
     * @this {goog.graphics.VmlGroupElement|goog.graphics.VmlEllipseElement|
     *     goog.graphics.VmlRectElement|goog.graphics.VmlPathElement|
     *     goog.graphics.VmlTextElement|goog.graphics.VmlImageElement}
     * @private
     */
    function vmlGetElement_(): Element;

    /**
     * Base class for the different graphics. You should never construct objects
     * of this class. Instead us goog.graphics.createGraphics
     * @param {number|string} width The width in pixels or percent.
     * @param {number|string} height The height in pixels or percent.
     * @param {?number=} opt_coordWidth Optional coordinate system width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight Optional coordinate system height - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class AbstractGraphics extends goog.ui.Component {
        /**
         * Base class for the different graphics. You should never construct objects
         * of this class. Instead us goog.graphics.createGraphics
         * @param {number|string} width The width in pixels or percent.
         * @param {number|string} height The height in pixels or percent.
         * @param {?number=} opt_coordWidth Optional coordinate system width - if
         *     omitted or null, defaults to same as width.
         * @param {?number=} opt_coordHeight Optional coordinate system height - if
         *     omitted or null, defaults to same as height.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(width: any /*number|string*/, height: any /*number|string*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * The root level group element.
         * @type {goog.graphics.GroupElement?}
         * @protected
         */
        canvasElement: goog.graphics.GroupElement;
    
        /**
         * Left coordinate of the view box
         * @type {number}
         * @protected
         */
        coordLeft: number;
    
        /**
         * Top coordinate of the view box
         * @type {number}
         * @protected
         */
        coordTop: number;
    
        /**
         * @return {goog.graphics.GroupElement} The root level canvas element.
         */
        getCanvasElement(): goog.graphics.GroupElement;
    
        /**
         * Changes the coordinate size.
         * @param {number} coordWidth  The coordinate width.
         * @param {number} coordHeight  The coordinate height.
         */
        setCoordSize(coordWidth: number, coordHeight: number): void;
    
        /**
         * @return {goog.math.Size} The coordinate size.
         */
        getCoordSize(): goog.math.Size;
    
        /**
         * Changes the coordinate system position.
         * @param {number} left  The coordinate system left bound.
         * @param {number} top  The coordinate system top bound.
         */
        setCoordOrigin: any /*missing*/;
    
        /**
         * @return {!goog.math.Coordinate} The coordinate system position.
         */
        getCoordOrigin(): goog.math.Coordinate;
    
        /**
         * Change the size of the canvas.
         * @param {number} pixelWidth  The width in pixels.
         * @param {number} pixelHeight  The height in pixels.
         */
        setSize: any /*missing*/;
    
        /**
         * @return {goog.math.Size} The size of canvas.
         * @deprecated Use getPixelSize.
         */
        getSize(): goog.math.Size;
    
        /**
         * @return {goog.math.Size?} Returns the number of pixels spanned by the
         *     surface, or null if the size could not be computed due to the size being
         *     specified in percentage points and the component not being in the
         *     document.
         */
        getPixelSize(): goog.math.Size;
    
        /**
         * @return {number} Returns the number of pixels per unit in the x direction.
         */
        getPixelScaleX(): number;
    
        /**
         * @return {number} Returns the number of pixels per unit in the y direction.
         */
        getPixelScaleY(): number;
    
        /**
         * Remove all drawing elements from the graphics.
         */
        clear: any /*missing*/;
    
        /**
         * Remove a single drawing element from the surface.  The default implementation
         * assumes a DOM based drawing surface.
         * @param {goog.graphics.Element} element The element to remove.
         */
        removeElement(element: goog.graphics.Element): void;
    
        /**
         * Sets the fill for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Fill?} fill The fill object.
         */
        setElementFill: any /*missing*/;
    
        /**
         * Sets the stroke for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Stroke?} stroke The stroke object.
         */
        setElementStroke: any /*missing*/;
    
        /**
         * Set the transformation of an element.
         * @param {goog.graphics.Element} element The element wrapper.
         * @param {number} x The x coordinate of the translation transform.
         * @param {number} y The y coordinate of the translation transform.
         * @param {number} angle The angle of the rotation transform.
         * @param {number} centerX The horizontal center of the rotation transform.
         * @param {number} centerY The vertical center of the rotation transform.
         */
        setElementTransform: any /*missing*/;
    
        /**
         * Draw a circle
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} r Radius length.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.EllipseElement} The newly created element.
         */
        drawCircle(cx: number, cy: number, r: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.EllipseElement;
    
        /**
         * Draw an ellipse
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.EllipseElement} The newly created element.
         */
        drawEllipse: any /*missing*/;
    
        /**
         * Draw a rectangle
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.RectElement} The newly created element.
         */
        drawRect: any /*missing*/;
    
        /**
         * Draw a text string within a rectangle (drawing is horizontal)
         *
         * @param {string} text The text to draw.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @param {string} align Horizontal alignment: left (default), center, right.
         * @param {string} vAlign Vertical alignment: top (default), center, bottom.
         * @param {goog.graphics.Font} font Font describing the font properties.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill  Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.TextElement} The newly created element.
         */
        drawText(text: string, x: number, y: number, width: number, height: number, align: string, vAlign: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.TextElement;
    
        /**
         * Draw a text string vertically centered on a given line.
         *
         * @param {string} text  The text to draw.
         * @param {number} x1 X coordinate of start of line.
         * @param {number} y1 Y coordinate of start of line.
         * @param {number} x2 X coordinate of end of line.
         * @param {number} y2 Y coordinate of end of line.
         * @param {string} align Horizontal alingnment: left (default), center, right.
         * @param {goog.graphics.Font} font Font describing the font properties.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.TextElement} The newly created element.
         */
        drawTextOnLine: any /*missing*/;
    
        /**
         * Draw a path.
         *
         * @param {!goog.graphics.Path} path The path object to draw.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.PathElement} The newly created element.
         */
        drawPath: any /*missing*/;
    
        /**
         * Create an empty group of drawing elements.
         *
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element to
         *     append to. If not specified, appends to the main canvas.
         *
         * @return {goog.graphics.GroupElement} The newly created group.
         */
        createGroup: any /*missing*/;
    
        /**
         * Create an empty path.
         *
         * @return {!goog.graphics.Path} The path.
         * @deprecated Use {@code new goog.graphics.Path()}.
         */
        createPath(): goog.graphics.Path;
    
        /**
         * Measure and return the width (in pixels) of a given text string.
         * Text measurement is needed to make sure a text can fit in the allocated
         * area. The way text length is measured is by writing it into a div that is
         * after the visible area, measure the div width, and immediatly erase the
         * written value.
         *
         * @param {string} text The text string to measure.
         * @param {goog.graphics.Font} font The font object describing the font style.
         *
         * @return {number} The width in pixels of the text strings.
         */
        getTextWidth: any /*missing*/;
    
        /**
         * @return {boolean} Whether the underlying element can be cloned resulting in
         *     an accurate reproduction of the graphics contents.
         */
        isDomClonable(): boolean;
    
        /**
         * Start preventing redraws - useful for chaining large numbers of changes
         * together.  Not guaranteed to do anything - i.e. only use this for
         * optimization of a single code path.
         */
        suspend(): void;
    
        /**
         * Stop preventing redraws.  If any redraws had been prevented, a redraw will
         * be done now.
         */
        resume(): void;
    }

    /**
     * Creates a 2D affine transform. An affine transform performs a linear
     * mapping from 2D coordinates to other 2D coordinates that preserves the
     * "straightness" and "parallelness" of lines.
     *
     * Such a coordinate transformation can be represented by a 3 row by 3 column
     * matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source
     * coordinates (x,y) into destination coordinates (x',y') by considering them
     * to be a column vector and multiplying the coordinate vector by the matrix
     * according to the following process:
     * <pre>
     *      [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
     *      [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
     *      [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
     * </pre>
     *
     * This class is optimized for speed and minimizes calculations based on its
     * knowledge of the underlying matrix (as opposed to say simply performing
     * matrix multiplication).
     *
     * @param {number=} opt_m00 The m00 coordinate of the transform.
     * @param {number=} opt_m10 The m10 coordinate of the transform.
     * @param {number=} opt_m01 The m01 coordinate of the transform.
     * @param {number=} opt_m11 The m11 coordinate of the transform.
     * @param {number=} opt_m02 The m02 coordinate of the transform.
     * @param {number=} opt_m12 The m12 coordinate of the transform.
     * @constructor
     * @final
     */
    class AffineTransform {
        /**
         * Creates a 2D affine transform. An affine transform performs a linear
         * mapping from 2D coordinates to other 2D coordinates that preserves the
         * "straightness" and "parallelness" of lines.
         *
         * Such a coordinate transformation can be represented by a 3 row by 3 column
         * matrix with an implied last row of [ 0 0 1 ]. This matrix transforms source
         * coordinates (x,y) into destination coordinates (x',y') by considering them
         * to be a column vector and multiplying the coordinate vector by the matrix
         * according to the following process:
         * <pre>
         *      [ x']   [  m00  m01  m02  ] [ x ]   [ m00x + m01y + m02 ]
         *      [ y'] = [  m10  m11  m12  ] [ y ] = [ m10x + m11y + m12 ]
         *      [ 1 ]   [   0    0    1   ] [ 1 ]   [         1         ]
         * </pre>
         *
         * This class is optimized for speed and minimizes calculations based on its
         * knowledge of the underlying matrix (as opposed to say simply performing
         * matrix multiplication).
         *
         * @param {number=} opt_m00 The m00 coordinate of the transform.
         * @param {number=} opt_m10 The m10 coordinate of the transform.
         * @param {number=} opt_m01 The m01 coordinate of the transform.
         * @param {number=} opt_m11 The m11 coordinate of the transform.
         * @param {number=} opt_m02 The m02 coordinate of the transform.
         * @param {number=} opt_m12 The m12 coordinate of the transform.
         * @constructor
         * @final
         */
        constructor(opt_m00?: number, opt_m10?: number, opt_m01?: number, opt_m11?: number, opt_m02?: number, opt_m12?: number);
    
        /**
         * @return {boolean} Whether this transform is the identity transform.
         */
        isIdentity(): boolean;
    
        /**
         * @return {!goog.graphics.AffineTransform} A copy of this transform.
         */
        clone(): goog.graphics.AffineTransform;
    
        /**
         * Sets this transform to the matrix specified by the 6 values.
         *
         * @param {number} m00 The m00 coordinate of the transform.
         * @param {number} m10 The m10 coordinate of the transform.
         * @param {number} m01 The m01 coordinate of the transform.
         * @param {number} m11 The m11 coordinate of the transform.
         * @param {number} m02 The m02 coordinate of the transform.
         * @param {number} m12 The m12 coordinate of the transform.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        setTransform(m00: number, m10: number, m01: number, m11: number, m02: number, m12: number): goog.graphics.AffineTransform;
    
        /**
         * Sets this transform to be identical to the given transform.
         *
         * @param {!goog.graphics.AffineTransform} tx The transform to copy.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        copyFrom(tx: goog.graphics.AffineTransform): goog.graphics.AffineTransform;
    
        /**
         * Concatenates this transform with a scaling transformation.
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        scale(sx: number, sy: number): goog.graphics.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a scaling transformation,
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [sx  0 0] [m00 m01 m02]
         * [ 0 sy 0] [m10 m11 m12]
         * [ 0  0 1] [  0   0   1]
         * </pre>
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        preScale(sx: number, sy: number): goog.graphics.AffineTransform;
    
        /**
         * Concatenates this transform with a translate transformation.
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        translate(dx: number, dy: number): goog.graphics.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a translate transformation,
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [1 0 dx] [m00 m01 m02]
         * [0 1 dy] [m10 m11 m12]
         * [0 0  1] [  0   0   1]
         * </pre>
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        preTranslate(dx: number, dy: number): goog.graphics.AffineTransform;
    
        /**
         * Concatenates this transform with a rotation transformation around an anchor
         * point.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        rotate(theta: number, x: number, y: number): goog.graphics.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a rotation transformation around an
         * anchor point.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        preRotate(theta: number, x: number, y: number): goog.graphics.AffineTransform;
    
        /**
         * Concatenates this transform with a shear transformation.
         *
         * @param {number} shx The x shear factor.
         * @param {number} shy The y shear factor.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        shear(shx: number, shy: number): goog.graphics.AffineTransform;
    
        /**
         * Pre-concatenates this transform with a shear transformation.
         * i.e. calculates the following matrix product:
         *
         * <pre>
         * [  1 shx 0] [m00 m01 m02]
         * [shy   1 0] [m10 m11 m12]
         * [  0   0 1] [  0   0   1]
         * </pre>
         *
         * @param {number} shx The x shear factor.
         * @param {number} shy The y shear factor.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        preShear(shx: number, shy: number): goog.graphics.AffineTransform;
    
        /**
         * @return {string} A string representation of this transform. The format of
         *     of the string is compatible with SVG matrix notation, i.e.
         *     "matrix(a,b,c,d,e,f)".
         * @override
         */
        toString(): string;
    
        /**
         * @return {number} The scaling factor in the x-direction (m00).
         */
        getScaleX(): number;
    
        /**
         * @return {number} The scaling factor in the y-direction (m11).
         */
        getScaleY(): number;
    
        /**
         * @return {number} The translation in the x-direction (m02).
         */
        getTranslateX(): number;
    
        /**
         * @return {number} The translation in the y-direction (m12).
         */
        getTranslateY(): number;
    
        /**
         * @return {number} The shear factor in the x-direction (m01).
         */
        getShearX(): number;
    
        /**
         * @return {number} The shear factor in the y-direction (m10).
         */
        getShearY(): number;
    
        /**
         * Concatenates an affine transform to this transform.
         *
         * @param {!goog.graphics.AffineTransform} tx The transform to concatenate.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        concatenate(tx: goog.graphics.AffineTransform): goog.graphics.AffineTransform;
    
        /**
         * Pre-concatenates an affine transform to this transform.
         *
         * @param {!goog.graphics.AffineTransform} tx The transform to preconcatenate.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        preConcatenate(tx: goog.graphics.AffineTransform): goog.graphics.AffineTransform;
    
        /**
         * Transforms an array of coordinates by this transform and stores the result
         * into a destination array.
         *
         * @param {!Array.<number>} src The array containing the source points
         *     as x, y value pairs.
         * @param {number} srcOff The offset to the first point to be transformed.
         * @param {!Array.<number>} dst The array into which to store the transformed
         *     point pairs.
         * @param {number} dstOff The offset of the location of the first transformed
         *     point in the destination array.
         * @param {number} numPts The number of points to tranform.
         */
        transform(src: number[], srcOff: number, dst: number[], dstOff: number, numPts: number): void;
    
        /**
         * @return {number} The determinant of this transform.
         */
        getDeterminant(): number;
    
        /**
         * Returns whether the transform is invertible. A transform is not invertible
         * if the determinant is 0 or any value is non-finite or NaN.
         *
         * @return {boolean} Whether the transform is invertible.
         */
        isInvertible(): boolean;
    
        /**
         * @return {!goog.graphics.AffineTransform} An AffineTransform object
         *     representing the inverse transformation.
         */
        createInverse(): goog.graphics.AffineTransform;
    
        /**
         * Sets this transform to a scaling transformation.
         *
         * @param {number} sx The x-axis scaling factor.
         * @param {number} sy The y-axis scaling factor.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        setToScale(sx: number, sy: number): goog.graphics.AffineTransform;
    
        /**
         * Sets this transform to a translation transformation.
         *
         * @param {number} dx The distance to translate in the x direction.
         * @param {number} dy The distance to translate in the y direction.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        setToTranslation(dx: number, dy: number): goog.graphics.AffineTransform;
    
        /**
         * Sets this transform to a shearing transformation.
         *
         * @param {number} shx The x-axis shear factor.
         * @param {number} shy The y-axis shear factor.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        setToShear(shx: number, shy: number): goog.graphics.AffineTransform;
    
        /**
         * Sets this transform to a rotation transformation.
         *
         * @param {number} theta The angle of rotation measured in radians.
         * @param {number} x The x coordinate of the anchor point.
         * @param {number} y The y coordinate of the anchor point.
         * @return {!goog.graphics.AffineTransform} This affine transform.
         */
        setToRotation(theta: number, x: number, y: number): goog.graphics.AffineTransform;
    
        /**
         * Compares two affine transforms for equality.
         *
         * @param {goog.graphics.AffineTransform} tx The other affine transform.
         * @return {boolean} whether the two transforms are equal.
         */
        equals(tx: goog.graphics.AffineTransform): boolean;
    }

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
    class CanvasGroupElement extends goog.graphics.GroupElement {
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
         * Remove all drawing elements from the group.
         * @override
         */
        clear(): void;
    
        /**
         * Set the size of the group element.
         * @param {number|string} width The width of the group element.
         * @param {number|string} height The height of the group element.
         * @override
         */
        setSize(width: any /*number|string*/, height: any /*number|string*/): void;
    
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
    class CanvasEllipseElement extends goog.graphics.EllipseElement {
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
         * Update the center point of the ellipse.
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @override
         */
        setCenter(cx: number, cy: number): void;
    
        /**
         * Update the radius of the ellipse.
         * @param {number} rx Center X coordinate.
         * @param {number} ry Center Y coordinate.
         * @override
         */
        setRadius(rx: number, ry: number): void;
    
        /**
         * Draw the ellipse.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

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
    class CanvasRectElement extends goog.graphics.RectElement {
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
         * Update the position of the rectangle.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
    
        /**
         * Update the size of the rectangle.
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @override
         */
        setSize(width: number, height: number): void;
    
        /**
         * Draw the rectangle.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

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
    class CanvasPathElement extends goog.graphics.PathElement {
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
         * Update the underlying path.
         * @param {!goog.graphics.Path} path The path object to draw.
         * @override
         */
        setPath(path: goog.graphics.Path): void;
    
        /**
         * Draw the path.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         * @suppress {deprecated} goog.graphics is deprecated.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

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
    class CanvasTextElement extends goog.graphics.TextElement {
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
         * Update the displayed text of the element.
         * @param {string} text The text to draw.
         * @override
         */
        setText(text: string): void;
    
        /**
         * Sets the fill for this element.
         * @param {goog.graphics.Fill} fill The fill object.
         * @override
         */
        setFill(fill: goog.graphics.Fill): void;
    
        /**
         * Sets the stroke for this element.
         * @param {goog.graphics.Stroke} stroke The stroke object.
         * @override
         */
        setStroke(stroke: goog.graphics.Stroke): void;
    
        /**
         * Draw the text.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

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
    class CanvasImageElement extends goog.graphics.ImageElement {
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
         * Update the position of the image.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
    
        /**
         * Update the size of the image.
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @override
         */
        setSize(width: number, height: number): void;
    
        /**
         * Update the source of the image.
         * @param {string} src Source of the image.
         * @override
         */
        setSource(src: string): void;
    
        /**
         * Draw the image.  Should be treated as package scope.
         * @param {CanvasRenderingContext2D} ctx The context to draw the element in.
         */
        draw(ctx: CanvasRenderingContext2D): void;
    }

    /**
     * A Graphics implementation for drawing using canvas.
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
     */
    class CanvasGraphics extends goog.graphics.AbstractGraphics {
        /**
         * A Graphics implementation for drawing using canvas.
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
         */
        constructor(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the fill for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element
         *     wrapper.
         * @param {goog.graphics.Fill} fill The fill object.
         * @override
         */
        setElementFill(element: goog.graphics.StrokeAndFillElement, fill: goog.graphics.Fill): void;
    
        /**
         * Sets the stroke for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element
         *     wrapper.
         * @param {goog.graphics.Stroke} stroke The stroke object.
         * @override
         */
        setElementStroke(element: goog.graphics.StrokeAndFillElement, stroke: goog.graphics.Stroke): void;
    
        /**
         * Set the transformation of an element.
         * @param {goog.graphics.Element} element The element wrapper.
         * @param {number} x The x coordinate of the translation transform.
         * @param {number} y The y coordinate of the translation transform.
         * @param {number} angle The angle of the rotation transform.
         * @param {number} centerX The horizontal center of the rotation transform.
         * @param {number} centerY The vertical center of the rotation transform.
         * @override
         */
        setElementTransform(element: goog.graphics.Element, x: number, y: number, angle: number, centerX: number, centerY: number): void;
    
        /**
         * Push an element transform on to the transform stack.
         * @param {goog.graphics.Element} element The transformed element.
         */
        pushElementTransform(element: goog.graphics.Element): void;
    
        /**
         * Pop an element transform off of the transform stack.
         */
        popElementTransform(): void;
    
        /**
         * Creates the DOM representation of the graphics area.
         * @override
         */
        createDom(): void;
    
        /**
         * Returns the drawing context.
         * @return {Object} The canvas element rendering context.
         */
        getContext(): Object;
    
        /**
         * Changes the coordinate system position.
         * @param {number} left The coordinate system left bound.
         * @param {number} top The coordinate system top bound.
         * @override
         */
        setCoordOrigin(left: number, top: number): void;
    
        /**
         * Changes the coordinate size.
         * @param {number} coordWidth The coordinate width.
         * @param {number} coordHeight The coordinate height.
         * @override
         */
        setCoordSize(coordWidth: number, coordHeight: number): void;
    
        /**
         * Change the size of the canvas.
         * @param {number} pixelWidth The width in pixels.
         * @param {number} pixelHeight The height in pixels.
         * @override
         */
        setSize(pixelWidth: number, pixelHeight: number): void;
    
        /** @override */
        getPixelSize(): void;
    
        /**
         * Update the size of the canvas.
         */
        updateSize(): void;
    
        /**
         * Reset the canvas.
         */
        reset(): void;
    
        /**
         * Remove all drawing elements from the graphics.
         * @override
         */
        clear(): void;
    
        /**
         * Redraw the entire canvas.
         */
        redraw(): void;
    
        /**
         * Draw an element, including any stroke or fill.
         * @param {goog.graphics.Element} element The element to draw.
         */
        drawElement(element: goog.graphics.Element): void;
    
        /**
         * Append an element.
         *
         * @param {goog.graphics.Element} element The element to draw.
         * @param {goog.graphics.GroupElement|undefined} group The group to draw
         *     it in. If null or undefined, defaults to the root group.
         * @protected
         */
        append(element: goog.graphics.Element, group: any /*goog.graphics.GroupElement|any (undefined)*/): void;
    
        /**
         * Draw an ellipse.
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @param {goog.graphics.Stroke} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to.  If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.EllipseElement} The newly created element.
         * @override
         */
        drawEllipse(cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.EllipseElement;
    
        /**
         * Draw a rectangle.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @param {goog.graphics.Stroke} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.RectElement} The newly created element.
         * @override
         */
        drawRect(x: number, y: number, width: number, height: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.RectElement;
    
        /**
         * Draw an image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of image.
         * @param {number} height Height of image.
         * @param {string} src Source of the image.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.ImageElement} The newly created element.
         */
        drawImage(x: number, y: number, width: number, height: number, src: string, opt_group?: goog.graphics.GroupElement): goog.graphics.ImageElement;
    
        /**
         * Draw a text string vertically centered on a given line.
         *
         * @param {string} text The text to draw.
         * @param {number} x1 X coordinate of start of line.
         * @param {number} y1 Y coordinate of start of line.
         * @param {number} x2 X coordinate of end of line.
         * @param {number} y2 Y coordinate of end of line.
         * @param {?string} align Horizontal alignment: left (default), center, right.
         * @param {goog.graphics.Font} font Font describing the font properties.
         * @param {goog.graphics.Stroke} stroke Stroke object describing the stroke.
         * @param {goog.graphics.Fill} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.TextElement} The newly created element.
         * @override
         */
        drawTextOnLine(text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.TextElement;
    
        /**
         * Draw a path.
         * @param {!goog.graphics.Path} path The path object to draw.
         * @param {goog.graphics.Stroke} stroke Stroke object describing the stroke.
         * @param {goog.graphics.Fill} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.PathElement} The newly created element.
         * @override
         */
        drawPath(path: goog.graphics.Path, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.PathElement;
    
        /**
         * @param {goog.graphics.GroupElement} group The group to possibly
         *     draw to.
         * @return {boolean} Whether drawing can occur now.
         */
        isDrawable(group: goog.graphics.GroupElement): boolean;
    
        /**
         * Returns true if drawing to the given group means a redraw is required.
         * @param {goog.graphics.GroupElement} group The group to draw to.
         * @return {boolean} Whether drawing to this group should force a redraw.
         */
        isRedrawRequired(group: goog.graphics.GroupElement): boolean;
    
        /**
         * Create an empty group of drawing elements.
         *
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper
         *     element to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.CanvasGroupElement} The newly created group.
         * @override
         */
        createGroup(opt_group?: goog.graphics.GroupElement): goog.graphics.CanvasGroupElement;
    
        /**
         * Measure and return the width (in pixels) of a given text string.
         * Text measurement is needed to make sure a text can fit in the allocated
         * area. The way text length is measured is by writing it into a div that is
         * after the visible area, measure the div width, and immediatly erase the
         * written value.
         *
         * @param {string} text The text string to measure.
         * @param {goog.graphics.Font} font The font object describing the font style.
         * @override
         */
        getTextWidth: any /*missing*/;
    
        /**
         * Disposes of the component by removing event handlers, detacing DOM nodes from
         * the document body, and removing references to them.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Start preventing redraws - useful for chaining large numbers of changes
         * together.  Not guaranteed to do anything - i.e. only use this for
         * optimization of a single code path.
         * @override
         */
        suspend(): void;
    
        /**
         * Stop preventing redraws.  If any redraws had been prevented, a redraw will
         * be done now.
         * @override
         */
        resume(): void;
    }

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
    class Element extends goog.events.EventTarget {
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
    
        /** @override */
        addEventListener(): void;
    
        /** @override */
        removeEventListener(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Interface for a graphics ellipse element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.StrokeAndFillElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class EllipseElement extends goog.graphics.StrokeAndFillElement {
        /**
         * Interface for a graphics ellipse element.
         * You should not construct objects from this constructor. The graphics
         * will return an implementation of this interface for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.StrokeAndFillElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
        /**
         * Update the center point of the ellipse.
         * @param {number} cx  Center X coordinate.
         * @param {number} cy  Center Y coordinate.
         */
        setCenter: any /*missing*/;
    
        /**
         * Update the radius of the ellipse.
         * @param {number} rx  Radius length for the x-axis.
         * @param {number} ry  Radius length for the y-axis.
         */
        setRadius: any /*missing*/;
    }

    /**
     * Creates a fill object
     * @constructor
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class Fill {
        /**
         * Creates a fill object
         * @constructor
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor();
    
        /**
         * @return {string} The start color of a gradient fill.
         */
        getColor1: any /*missing*/;
    
        /**
         * @return {string} The end color of a gradient fill.
         */
        getColor2: any /*missing*/;
    }

    /**
     * This class represents a font to be used with a renderer.
     * @param {number} size  The font size.
     * @param {string} family  The font family.
     * @constructor
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class Font {
        /**
         * This class represents a font to be used with a renderer.
         * @param {number} size  The font size.
         * @param {string} family  The font family.
         * @constructor
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(size: number, family: string);
    
        /**
         * Indication if text should be bolded
         * @type {boolean}
         */
        bold: boolean;
    
        /**
         * Indication if text should be in italics
         * @type {boolean}
         */
        italic: boolean;
    }

    /**
     * Interface for a graphics group element.
     * You should not construct objects from this constructor. The graphics
     * will return the object for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.Element}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class GroupElement extends goog.graphics.Element {
        /**
         * Interface for a graphics group element.
         * You should not construct objects from this constructor. The graphics
         * will return the object for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @constructor
         * @extends {goog.graphics.Element}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics);
    
        /**
         * Remove all drawing elements from the group.
         */
        clear: any /*missing*/;
    
        /**
         * Set the size of the group element.
         * @param {number|string} width The width of the group element.
         * @param {number|string} height The height of the group element.
         */
        setSize: any /*missing*/;
    }

    /**
     * Interface for a graphics image element.
     * You should not construct objects from this constructor. Instead,
     * you should use {@code goog.graphics.Graphics.drawImage} and it
     * will return an implementation of this interface for you.
     *
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.Element}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class ImageElement extends goog.graphics.Element {
        /**
         * Interface for a graphics image element.
         * You should not construct objects from this constructor. Instead,
         * you should use {@code goog.graphics.Graphics.drawImage} and it
         * will return an implementation of this interface for you.
         *
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @constructor
         * @extends {goog.graphics.Element}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics);
    
        /**
         * Update the position of the image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         */
        setPosition: any /*missing*/;
    
        /**
         * Update the size of the image.
         *
         * @param {number} width Width of image.
         * @param {number} height Height of image.
         */
        setSize: any /*missing*/;
    
        /**
         * Update the source of the image.
         * @param {string} src Source of the image.
         */
        setSource: any /*missing*/;
    }

    /**
     * Creates an immutable linear gradient fill object.
     *
     * @param {number} x1 Start X position of the gradient.
     * @param {number} y1 Start Y position of the gradient.
     * @param {number} x2 End X position of the gradient.
     * @param {number} y2 End Y position of the gradient.
     * @param {string} color1 Start color of the gradient.
     * @param {string} color2 End color of the gradient.
     * @param {?number=} opt_opacity1 Start opacity of the gradient, both or neither
     *     of opt_opacity1 and opt_opacity2 have to be set.
     * @param {?number=} opt_opacity2 End opacity of the gradient.
     * @constructor
     * @extends {goog.graphics.Fill}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class LinearGradient extends goog.graphics.Fill {
        /**
         * Creates an immutable linear gradient fill object.
         *
         * @param {number} x1 Start X position of the gradient.
         * @param {number} y1 Start Y position of the gradient.
         * @param {number} x2 End X position of the gradient.
         * @param {number} y2 End Y position of the gradient.
         * @param {string} color1 Start color of the gradient.
         * @param {string} color2 End color of the gradient.
         * @param {?number=} opt_opacity1 Start opacity of the gradient, both or neither
         *     of opt_opacity1 and opt_opacity2 have to be set.
         * @param {?number=} opt_opacity2 End opacity of the gradient.
         * @constructor
         * @extends {goog.graphics.Fill}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(x1: number, y1: number, x2: number, y2: number, color1: string, color2: string, opt_opacity1?: number, opt_opacity2?: number);
    
        /**
         * @return {number} The start X position of the gradient.
         */
        getX1(): number;
    
        /**
         * @return {number} The start Y position of the gradient.
         */
        getY1(): number;
    
        /**
         * @return {number} The end X position of the gradient.
         */
        getX2(): number;
    
        /**
         * @return {number} The end Y position of the gradient.
         */
        getY2(): number;
    
        /**
         * @override
         */
        getColor1(): void;
    
        /**
         * @override
         */
        getColor2(): void;
    
        /**
         * @return {?number} The start opacity of the gradient.
         */
        getOpacity1(): number;
    
        /**
         * @return {?number} The end opacity of the gradient.
         */
        getOpacity2(): number;
    }

    /**
     * Interface for a graphics path element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.StrokeAndFillElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class PathElement extends goog.graphics.StrokeAndFillElement {
        /**
         * Interface for a graphics path element.
         * You should not construct objects from this constructor. The graphics
         * will return an implementation of this interface for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.StrokeAndFillElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
        /**
         * Update the underlying path.
         * @param {!goog.graphics.Path} path The path object to draw.
         */
        setPath: any /*missing*/;
    }

    /**
     * Creates a path object. A path is a sequence of segments and may be open or
     * closed. Path uses the EVEN-ODD fill rule for determining the interior of the
     * path. A path must start with a moveTo command.
     *
     * A "simple" path does not contain any arcs and may be transformed using
     * the {@code transform} method.
     *
     * @constructor
     */
    class Path {
        /**
         * Creates a path object. A path is a sequence of segments and may be open or
         * closed. Path uses the EVEN-ODD fill rule for determining the interior of the
         * path. A path must start with a moveTo command.
         *
         * A "simple" path does not contain any arcs and may be transformed using
         * the {@code transform} method.
         *
         * @constructor
         */
        constructor();
    
        /**
         * Appends another path to the end of this path.
         *
         * @param {!goog.graphics.Path} path The path to append.
         * @return {!goog.graphics.Path} This path.
         */
        appendPath(path: goog.graphics.Path): goog.graphics.Path;
    
        /**
         * Clears the path.
         *
         * @return {!goog.graphics.Path} The path itself.
         */
        clear(): goog.graphics.Path;
    
        /**
         * Adds a point to the path by moving to the specified point. Repeated moveTo
         * commands are collapsed into a single moveTo.
         *
         * @param {number} x X coordinate of destination point.
         * @param {number} y Y coordinate of destination point.
         * @return {!goog.graphics.Path} The path itself.
         */
        moveTo(x: number, y: number): goog.graphics.Path;
    
        /**
         * Adds points to the path by drawing a straight line to each point.
         *
         * @param {...number} var_args The coordinates of each destination point as x, y
         *     value pairs.
         * @return {!goog.graphics.Path} The path itself.
         */
        lineTo(...var_args: number[]): goog.graphics.Path;
    
        /**
         * Adds points to the path by drawing cubic Bezier curves. Each curve is
         * specified using 3 points (6 coordinates) - two control points and the end
         * point of the curve.
         *
         * @param {...number} var_args The coordinates specifiying each curve in sets of
         *     6 points: {@code [x1, y1]} the first control point, {@code [x2, y2]} the
         *     second control point and {@code [x, y]} the end point.
         * @return {!goog.graphics.Path} The path itself.
         */
        curveTo(...var_args: number[]): goog.graphics.Path;
    
        /**
         * Adds a path command to close the path by connecting the
         * last point to the first point.
         *
         * @return {!goog.graphics.Path} The path itself.
         */
        close(): goog.graphics.Path;
    
        /**
         * Adds a path command to draw an arc centered at the point {@code (cx, cy)}
         * with radius {@code rx} along the x-axis and {@code ry} along the y-axis from
         * {@code startAngle} through {@code extent} degrees. Positive rotation is in
         * the direction from positive x-axis to positive y-axis.
         *
         * @param {number} cx X coordinate of center of ellipse.
         * @param {number} cy Y coordinate of center of ellipse.
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @param {boolean} connect If true, the starting point of the arc is connected
         *     to the current point.
         * @return {!goog.graphics.Path} The path itself.
         * @deprecated Use {@code arcTo} or {@code arcToAsCurves} instead.
         */
        arc(cx: number, cy: number, rx: number, ry: number, fromAngle: number, extent: number, connect: boolean): goog.graphics.Path;
    
        /**
         * Adds a path command to draw an arc starting at the path's current point,
         * with radius {@code rx} along the x-axis and {@code ry} along the y-axis from
         * {@code startAngle} through {@code extent} degrees. Positive rotation is in
         * the direction from positive x-axis to positive y-axis.
         *
         * This method makes the path non-simple.
         *
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @return {!goog.graphics.Path} The path itself.
         */
        arcTo(rx: number, ry: number, fromAngle: number, extent: number): goog.graphics.Path;
    
        /**
         * Same as {@code arcTo}, but approximates the arc using bezier curves.
    .* As a result, this method does not affect the simplified status of this path.
         * The algorithm is adapted from {@code java.awt.geom.ArcIterator}.
         *
         * @param {number} rx Radius of ellipse on x axis.
         * @param {number} ry Radius of ellipse on y axis.
         * @param {number} fromAngle Starting angle measured in degrees from the
         *     positive x-axis.
         * @param {number} extent The span of the arc in degrees.
         * @return {!goog.graphics.Path} The path itself.
         */
        arcToAsCurves(rx: number, ry: number, fromAngle: number, extent: number): goog.graphics.Path;
    
        /**
         * Iterates over the path calling the supplied callback once for each path
         * segment. The arguments to the callback function are the segment type and
         * an array of its arguments.
         *
         * The {@code LINETO} and {@code CURVETO} arrays can contain multiple
         * segments of the same type. The number of segments is the length of the
         * array divided by the segment length (2 for lines, 6 for  curves).
         *
         * As a convenience the {@code ARCTO} segment also includes the end point as the
         * last two arguments: {@code rx, ry, fromAngle, extent, x, y}.
         *
         * @param {function(number, Array)} callback The function to call with each
         *     path segment.
         */
        forEachSegment(callback: (_0: number, _1: any[]) => any /*missing*/): void;
    
        /**
         * Returns the coordinates most recently added to the end of the path.
         *
         * @return {Array.<number>?} An array containing the ending coordinates of the
         *     path of the form {@code [x, y]}.
         */
        getCurrentPoint(): number[];
    
        /**
         * @return {!goog.graphics.Path} A copy of this path.
         */
        clone(): goog.graphics.Path;
    
        /**
         * Returns true if this path contains no arcs. Simplified paths can be
         * created using {@code createSimplifiedPath}.
         *
         * @return {boolean} True if the path contains no arcs.
         */
        isSimple(): boolean;
    
        /**
         * Creates a transformed copy of this path. The path is simplified
         * {@see #createSimplifiedPath} prior to transformation.
         *
         * @param {!goog.graphics.AffineTransform} tx The transformation to perform.
         * @return {!goog.graphics.Path} A new, transformed path.
         */
        createTransformedPath(tx: goog.graphics.AffineTransform): goog.graphics.Path;
    
        /**
         * Transforms the path. Only simple paths are transformable. Attempting
         * to transform a non-simple path will throw an error.
         *
         * @param {!goog.graphics.AffineTransform} tx The transformation to perform.
         * @return {!goog.graphics.Path} The path itself.
         */
        transform(tx: goog.graphics.AffineTransform): goog.graphics.Path;
    
        /**
         * @return {boolean} Whether the path is empty.
         */
        isEmpty(): boolean;
    }

    /**
     * Interface for a graphics rectangle element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.StrokeAndFillElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class RectElement extends goog.graphics.StrokeAndFillElement {
        /**
         * Interface for a graphics rectangle element.
         * You should not construct objects from this constructor. The graphics
         * will return an implementation of this interface for you.
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.StrokeAndFillElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
        /**
         * Update the position of the rectangle.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         */
        setPosition: any /*missing*/;
    
        /**
         * Update the size of the rectangle.
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         */
        setSize: any /*missing*/;
    }

    /**
     * Creates an immutable solid color fill object.
     *
     * @param {string} color The color of the background.
     * @param {number=} opt_opacity The opacity of the background fill. The value
     *    must be greater than or equal to zero (transparent) and less than or
     *    equal to 1 (opaque).
     * @constructor
     * @extends {goog.graphics.Fill}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class SolidFill extends goog.graphics.Fill {
        /**
         * Creates an immutable solid color fill object.
         *
         * @param {string} color The color of the background.
         * @param {number=} opt_opacity The opacity of the background fill. The value
         *    must be greater than or equal to zero (transparent) and less than or
         *    equal to 1 (opaque).
         * @constructor
         * @extends {goog.graphics.Fill}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(color: string, opt_opacity?: number);
    
        /**
         * @return {string} The color of this fill.
         */
        getColor(): string;
    
        /**
         * @return {number} The opacity of this fill.
         */
        getOpacity(): number;
    }

    /**
     * Interface for a graphics element with a stroke and fill.
     * This is the base interface for ellipse, rectangle and other
     * shape interfaces.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     *
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.Element}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class StrokeAndFillElement extends goog.graphics.Element {
        /**
         * Interface for a graphics element with a stroke and fill.
         * This is the base interface for ellipse, rectangle and other
         * shape interfaces.
         * You should not construct objects from this constructor. The graphics
         * will return an implementation of this interface for you.
         *
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.Element}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
        /**
         * The latest fill applied to this element.
         * @type {goog.graphics.Fill?}
         * @protected
         */
        fill: goog.graphics.Fill;
    
        /**
         * Sets the fill for this element.
         * @param {goog.graphics.Fill?} fill The fill object.
         */
        setFill(fill: goog.graphics.Fill): void;
    
        /**
         * @return {goog.graphics.Fill?} fill The fill object.
         */
        getFill(): goog.graphics.Fill;
    
        /**
         * Sets the stroke for this element.
         * @param {goog.graphics.Stroke?} stroke The stroke object.
         */
        setStroke(stroke: goog.graphics.Stroke): void;
    
        /**
         * @return {goog.graphics.Stroke?} stroke The stroke object.
         */
        getStroke(): goog.graphics.Stroke;
    
        /**
         * Re-strokes the element to react to coordinate size changes.
         */
        reapplyStroke(): void;
    }

    /**
     * Creates an immutable stroke object.
     *
     * @param {number|string} width The width of the stroke.
     * @param {string} color The color of the stroke.
     * @constructor
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class Stroke {
        /**
         * Creates an immutable stroke object.
         *
         * @param {number|string} width The width of the stroke.
         * @param {string} color The color of the stroke.
         * @constructor
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(width: any /*number|string*/, color: string);
    
        /**
         * @return {number|string} The width of this stroke.
         */
        getWidth(): any /*number|string*/;
    
        /**
         * @return {string} The color of this stroke.
         */
        getColor(): string;
    }

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
    class SvgGroupElement extends goog.graphics.GroupElement {
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
    
        /**
         * Remove all drawing elements from the group.
         * @override
         */
        clear(): void;
    
        /**
         * Set the size of the group element.
         * @param {number|string} width The width of the group element.
         * @param {number|string} height The height of the group element.
         * @override
         */
        setSize(width: any /*number|string*/, height: any /*number|string*/): void;
    }

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
    class SvgEllipseElement extends goog.graphics.EllipseElement {
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
    
        /**
         * Update the center point of the ellipse.
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @override
         */
        setCenter(cx: number, cy: number): void;
    
        /**
         * Update the radius of the ellipse.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @override
         */
        setRadius(rx: number, ry: number): void;
    }

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
    class SvgRectElement extends goog.graphics.RectElement {
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
    
        /**
         * Update the position of the rectangle.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
    
        /**
         * Update the size of the rectangle.
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @override
         */
        setSize(width: number, height: number): void;
    }

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
    class SvgPathElement extends goog.graphics.PathElement {
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
    
        /**
         * Update the underlying path.
         * @param {!goog.graphics.Path} path The path object to draw.
         * @override
         */
        setPath(path: goog.graphics.Path): void;
    }

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
    class SvgTextElement extends goog.graphics.TextElement {
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
    
        /**
         * Update the displayed text of the element.
         * @param {string} text The text to draw.
         * @override
         */
        setText(text: string): void;
    }

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
    class SvgImageElement extends goog.graphics.ImageElement {
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
    
        /**
         * Update the position of the image.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
    
        /**
         * Update the size of the image.
         * @param {number} width Width of image.
         * @param {number} height Height of image.
         * @override
         */
        setSize(width: number, height: number): void;
    
        /**
         * Update the source of the image.
         * @param {string} src Source of the image.
         * @override
         */
        setSource(src: string): void;
    }

    /**
     * A Graphics implementation for drawing using SVG.
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.  Strings
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
    class SvgGraphics extends goog.graphics.AbstractGraphics {
        /**
         * A Graphics implementation for drawing using SVG.
         * @param {string|number} width The width in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {string|number} height The height in pixels.  Strings
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
         * Sets properties to an SVG element. Used internally and by different
         * SVG elements.
         * @param {Element} element The svg element.
         * @param {Object} attributes Map of name-value pairs for attributes.
         */
        setElementAttributes(element: Element, attributes: Object): void;
    
        /**
         * Sets the fill of the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Fill?} fill The fill object.
         * @override
         */
        setElementFill(element: goog.graphics.StrokeAndFillElement, fill: goog.graphics.Fill): void;
    
        /**
         * Sets the stroke of the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Stroke?} stroke The stroke object.
         * @override
         */
        setElementStroke(element: goog.graphics.StrokeAndFillElement, stroke: goog.graphics.Stroke): void;
    
        /**
         * Set the transformation of an element.
         * @param {goog.graphics.Element} element The element wrapper.
         * @param {number} x The x coordinate of the translation transform.
         * @param {number} y The y coordinate of the translation transform.
         * @param {number} angle The angle of the rotation transform.
         * @param {number} centerX The horizontal center of the rotation transform.
         * @param {number} centerY The vertical center of the rotation transform.
         * @override
         */
        setElementTransform(element: goog.graphics.Element, x: number, y: number, angle: number, centerX: number, centerY: number): void;
    
        /**
         * Creates the DOM representation of the graphics area.
         * @override
         */
        createDom(): void;
    
        /**
         * Changes the coordinate system position.
         * @param {number} left The coordinate system left bound.
         * @param {number} top The coordinate system top bound.
         * @override
         */
        setCoordOrigin(left: number, top: number): void;
    
        /**
         * Changes the coordinate size.
         * @param {number} coordWidth The coordinate width.
         * @param {number} coordHeight The coordinate height.
         * @override
         */
        setCoordSize(coordWidth: number, coordHeight: number): void;
    
        /**
         * Change the size of the canvas.
         * @param {number} pixelWidth The width in pixels.
         * @param {number} pixelHeight The height in pixels.
         * @override
         */
        setSize(pixelWidth: number, pixelHeight: number): void;
    
        /** @override */
        getPixelSize(): void;
    
        /**
         * Remove all drawing elements from the graphics.
         * @override
         */
        clear(): void;
    
        /**
         * Draw an ellipse.
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.EllipseElement} The newly created element.
         * @override
         */
        drawEllipse(cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.EllipseElement;
    
        /**
         * Draw a rectangle.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.RectElement} The newly created element.
         * @override
         */
        drawRect(x: number, y: number, width: number, height: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.RectElement;
    
        /**
         * Draw an image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of the image.
         * @param {number} height Height of the image.
         * @param {string} src The source fo the image.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.ImageElement} The newly created image wrapped in a
         *     rectangle element.
         */
        drawImage(x: number, y: number, width: number, height: number, src: string, opt_group?: goog.graphics.GroupElement): goog.graphics.ImageElement;
    
        /**
         * Draw a text string vertically centered on a given line.
         *
         * @param {string} text The text to draw.
         * @param {number} x1 X coordinate of start of line.
         * @param {number} y1 Y coordinate of start of line.
         * @param {number} x2 X coordinate of end of line.
         * @param {number} y2 Y coordinate of end of line.
         * @param {string} align Horizontal alignment: left (default), center, right.
         * @param {goog.graphics.Font} font Font describing the font properties.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.TextElement} The newly created element.
         * @override
         */
        drawTextOnLine(text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.TextElement;
    
        /**
         * Draw a path.
         *
         * @param {!goog.graphics.Path} path The path object to draw.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.PathElement} The newly created element.
         * @override
         */
        drawPath(path: goog.graphics.Path, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.PathElement;
    
        /**
         * Create an empty group of drawing elements.
         *
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.GroupElement} The newly created group.
         * @override
         */
        createGroup(opt_group?: goog.graphics.GroupElement): goog.graphics.GroupElement;
    
        /**
         * Measure and return the width (in pixels) of a given text string.
         * Text measurement is needed to make sure a text can fit in the allocated area.
         * The way text length is measured is by writing it into a div that is after
         * the visible area, measure the div width, and immediatly erase the written
         * value.
         *
         * @param {string} text The text string to measure.
         * @param {goog.graphics.Font} font The font object describing the font style.
         * @override
         */
        getTextWidth(text: string, font: goog.graphics.Font): void;
    
        /**
         * Adds a defintion of an element to the global definitions.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal the should have the same key.
         * @param {Element} defElement DOM element to add as a definition. It must
         *     have an id attribute set.
         * @return {string} The assigned id of the defElement.
         */
        addDef(defKey: string, defElement: Element): string;
    
        /**
         * Returns the id of a definition element.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal the should have the same key.
         * @return {?string} The id of the found definition element or null if
         *     not found.
         */
        getDef(defKey: string): string;
    
        /**
         * Removes a definition of an elemnt from the global definitions.
         * @param {string} defKey This is a key that should be unique in a way that
         *     if two definitions are equal they should have the same key.
         */
        removeDef(defKey: string): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        exitDocument(): void;
    
        /**
         * Disposes of the component by removing event handlers, detacing DOM nodes from
         * the document body, and removing references to them.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /** @override */
        isDomClonable(): void;
    }

    /**
     * Interface for a graphics text element.
     * You should not construct objects from this constructor. The graphics
     * will return an implementation of this interface for you.
     *
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
     * @param {goog.graphics.Fill?} fill The fill to use for this element.
     * @constructor
     * @extends {goog.graphics.StrokeAndFillElement}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class TextElement extends goog.graphics.StrokeAndFillElement {
        /**
         * Interface for a graphics text element.
         * You should not construct objects from this constructor. The graphics
         * will return an implementation of this interface for you.
         *
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @param {goog.graphics.Stroke?} stroke The stroke to use for this element.
         * @param {goog.graphics.Fill?} fill The fill to use for this element.
         * @constructor
         * @extends {goog.graphics.StrokeAndFillElement}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill);
    
        /**
         * Update the displayed text of the element.
         * @param {string} text The text to draw.
         */
        setText: any /*missing*/;
    }

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
    class VmlGroupElement extends goog.graphics.GroupElement {
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
    
        /** @override */
        getElement: any /*missing*/;
    
        /**
         * Remove all drawing elements from the group.
         * @override
         */
        clear(): void;
    
        /**
         * Set the size of the group element.
         * @param {number|string} width The width of the group element.
         * @param {number|string} height The height of the group element.
         * @override
         */
        setSize(width: any /*number|string*/, height: any /*number|string*/): void;
    }

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
    class VmlEllipseElement extends goog.graphics.EllipseElement {
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
    
        /** @override */
        getElement: any /*missing*/;
    
        /**
         * Update the center point of the ellipse.
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @override
         */
        setCenter(cx: number, cy: number): void;
    
        /**
         * Update the radius of the ellipse.
         * @param {number} rx Center X coordinate.
         * @param {number} ry Center Y coordinate.
         * @override
         */
        setRadius(rx: number, ry: number): void;
    }

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
    class VmlRectElement extends goog.graphics.RectElement {
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
    
        /** @override */
        getElement: any /*missing*/;
    
        /**
         * Update the position of the rectangle.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
    
        /**
         * Update the size of the rectangle.
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @override
         */
        setSize(width: number, height: number): void;
    }

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
    class VmlPathElement extends goog.graphics.PathElement {
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
    
        /** @override */
        getElement: any /*missing*/;
    
        /**
         * Update the underlying path.
         * @param {!goog.graphics.Path} path The path object to draw.
         * @override
         */
        setPath(path: goog.graphics.Path): void;
    }

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
    class VmlTextElement extends goog.graphics.TextElement {
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
    
        /** @override */
        getElement: any /*missing*/;
    
        /**
         * Update the displayed text of the element.
         * @param {string} text The text to draw.
         * @override
         */
        setText(text: string): void;
    }

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
    class VmlImageElement extends goog.graphics.ImageElement {
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
    
        /** @override */
        getElement: any /*missing*/;
    
        /**
         * Update the position of the image.
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @override
         */
        setPosition(x: number, y: number): void;
    
        /**
         * Update the size of the image.
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @override
         */
        setSize(width: number, height: number): void;
    
        /**
         * Update the source of the image.
         * @param {string} src Source of the image.
         * @override
         */
        setSource(src: string): void;
    }

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
         * Sets the fill for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Fill?} fill The fill object.
         * @override
         */
        setElementFill(element: goog.graphics.StrokeAndFillElement, fill: goog.graphics.Fill): void;
    
        /**
         * Sets the stroke for the given element.
         * @param {goog.graphics.StrokeAndFillElement} element The element wrapper.
         * @param {goog.graphics.Stroke?} stroke The stroke object.
         * @override
         */
        setElementStroke(element: goog.graphics.StrokeAndFillElement, stroke: goog.graphics.Stroke): void;
    
        /**
         * Set the transformation of an element.
         * @param {goog.graphics.Element} element The element wrapper.
         * @param {number} x The x coordinate of the translation transform.
         * @param {number} y The y coordinate of the translation transform.
         * @param {number} angle The angle of the rotation transform.
         * @param {number} centerX The horizontal center of the rotation transform.
         * @param {number} centerY The vertical center of the rotation transform.
         * @override
         */
        setElementTransform(element: goog.graphics.Element, x: number, y: number, angle: number, centerX: number, centerY: number): void;
    
        /**
         * Removes the fill information from a dom element.
         * @param {Element} element DOM element.
         */
        removeFill(element: Element): void;
    
        /**
         * Creates the DOM representation of the graphics area.
         * @override
         */
        createDom(): void;
    
        /**
         * Changes the coordinate system position.
         * @param {number} left The coordinate system left bound.
         * @param {number} top The coordinate system top bound.
         * @override
         */
        setCoordOrigin(left: number, top: number): void;
    
        /**
         * Changes the coordinate size.
         * @param {number} coordWidth The coordinate width.
         * @param {number} coordHeight The coordinate height.
         * @override
         */
        setCoordSize(coordWidth: number, coordHeight: number): void;
    
        /**
         * Change the size of the canvas.
         * @param {number} pixelWidth The width in pixels.
         * @param {number} pixelHeight The height in pixels.
         * @override
         */
        setSize(pixelWidth: number, pixelHeight: number): void;
    
        /**
         * @return {!goog.math.Size} Returns the number of pixels spanned by the
         *     surface.
         * @override
         */
        getPixelSize(): goog.math.Size;
    
        /**
         * Remove all drawing elements from the graphics.
         * @override
         */
        clear(): void;
    
        /**
         * Draw an ellipse.
         *
         * @param {number} cx Center X coordinate.
         * @param {number} cy Center Y coordinate.
         * @param {number} rx Radius length for the x-axis.
         * @param {number} ry Radius length for the y-axis.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.EllipseElement} The newly created element.
         * @override
         */
        drawEllipse(cx: number, cy: number, rx: number, ry: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.EllipseElement;
    
        /**
         * Draw a rectangle.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         * @param {number} width Width of rectangle.
         * @param {number} height Height of rectangle.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the
         *    stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.RectElement} The newly created element.
         * @override
         */
        drawRect(x: number, y: number, width: number, height: number, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.RectElement;
    
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
    
        /**
         * Draw a text string vertically centered on a given line.
         *
         * @param {string} text The text to draw.
         * @param {number} x1 X coordinate of start of line.
         * @param {number} y1 Y coordinate of start of line.
         * @param {number} x2 X coordinate of end of line.
         * @param {number} y2 Y coordinate of end of line.
         * @param {?string} align Horizontal alignment: left (default), center, right.
         * @param {goog.graphics.Font} font Font describing the font properties.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.TextElement} The newly created element.
         * @override
         */
        drawTextOnLine(text: string, x1: number, y1: number, x2: number, y2: number, align: string, font: goog.graphics.Font, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.TextElement;
    
        /**
         * Draw a path.
         *
         * @param {!goog.graphics.Path} path The path object to draw.
         * @param {goog.graphics.Stroke?} stroke Stroke object describing the stroke.
         * @param {goog.graphics.Fill?} fill Fill object describing the fill.
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.PathElement} The newly created element.
         * @override
         */
        drawPath(path: goog.graphics.Path, stroke: goog.graphics.Stroke, fill: goog.graphics.Fill, opt_group?: goog.graphics.GroupElement): goog.graphics.PathElement;
    
        /**
         * Create an empty group of drawing elements.
         *
         * @param {goog.graphics.GroupElement=} opt_group The group wrapper element
         *     to append to. If not specified, appends to the main canvas.
         *
         * @return {!goog.graphics.GroupElement} The newly created group.
         * @override
         */
        createGroup(opt_group?: goog.graphics.GroupElement): goog.graphics.GroupElement;
    
        /**
         * Measure and return the width (in pixels) of a given text string.
         * Text measurement is needed to make sure a text can fit in the allocated
         * area. The way text length is measured is by writing it into a div that is
         * after the visible area, measure the div width, and immediatly erase the
         * written value.
         *
         * @param {string} text The text string to measure.
         * @param {goog.graphics.Font} font The font object describing the font style.
         *
         * @return {number} The width in pixels of the text strings.
         * @override
         */
        getTextWidth(text: string, font: goog.graphics.Font): number;
    
        /** @override */
        enterDocument(): void;
    
        /**
         * Disposes of the component by removing event handlers, detacing DOM nodes from
         * the document body, and removing references to them.
         * @override
         * @protected
         */
        disposeInternal(): void;
    }
}

declare module 'goog.graphics.Path' {

    /**
     * Path segment types.
     * @enum {number}
     */
    enum Segment { MOVETO, LINETO, CURVETO, ARCTO, CLOSE } 

    /**
     * Returns the number of points for a segment type.
     *
     * @param {number} segment The segment type.
     * @return {number} The number of points.
     */
    function getSegmentCount(segment: number): number;

    /**
     * Creates a copy of the given path, replacing {@code arcTo} with
     * {@code arcToAsCurves}. The resulting path is simplified and can
     * be transformed.
     *
     * @param {!goog.graphics.Path} src The path to simplify.
     * @return {!goog.graphics.Path} A new simplified path.
     * @suppress {deprecated} goog.graphics is deprecated.
     */
    function createSimplifiedPath(src: goog.graphics.Path): goog.graphics.Path;
}

declare module 'goog.graphics.paths' {

    /**
     * Defines a regular n-gon by specifing the center, a vertex, and the total
     * number of vertices.
     * @param {goog.math.Coordinate} center The center point.
     * @param {goog.math.Coordinate} vertex The vertex, which implicitly defines
     *     a radius as well.
     * @param {number} n The number of vertices.
     * @return {!goog.graphics.Path} The path.
     */
    function createRegularNGon(center: goog.math.Coordinate, vertex: goog.math.Coordinate, n: number): goog.graphics.Path;

    /**
     * Defines an arrow.
     * @param {goog.math.Coordinate} a Point A.
     * @param {goog.math.Coordinate} b Point B.
     * @param {?number} aHead The size of the arrow head at point A.
     *     0 omits the head.
     * @param {?number} bHead The size of the arrow head at point B.
     *     0 omits the head.
     * @return {!goog.graphics.Path} The path.
     */
    function createArrow(a: goog.math.Coordinate, b: goog.math.Coordinate, aHead: number, bHead: number): goog.graphics.Path;
}

declare module 'goog.graphics.SvgGraphics' {

    /**
     * Returns a string representation of a logical path suitable for use in
     * an SVG element.
     *
     * @param {goog.graphics.Path} path The logical path.
     * @return {string} The SVG path representation.
     * @suppress {deprecated} goog.graphics is deprecated.
     */
    function getSvgPath(path: goog.graphics.Path): string;
}

declare module 'goog.graphics.VmlGraphics' {

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

