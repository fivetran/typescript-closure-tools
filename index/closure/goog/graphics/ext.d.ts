// Generated Wed Apr 30 16:37:01 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/graphics.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.graphics.ext.coordinates' {

    /**
     * Determines if the given coordinate is special - i.e. not just a number.
     * @param {string|number|null} coord The coordinate to test.
     * @return {boolean} Whether the coordinate is special.
     */
    function isSpecial(coord: any /*string|number|any (null)*/): boolean;

    /**
     * Returns the value of the given expression in the given context.
     *
     * Should be treated as package scope.
     *
     * @param {string|number} coord The coordinate to convert.
     * @param {number} size The size of the parent element.
     * @param {number} scale The ratio of pixels to units.
     * @return {number} The number of coordinate space units that corresponds to
     *     this coordinate.
     */
    function computeValue(coord: any /*string|number*/, size: number, scale: number): number;

    /**
     * Converts the given coordinate to a number value in units.
     *
     * Should be treated as package scope.
     *
     * @param {string|number} coord The coordinate to retrieve the value for.
     * @param {boolean|undefined} forMaximum Whether we are computing the largest
     *     value this coordinate would be in a parent of no size.  The container
     *     size in this case should be set to the size of the current element.
     * @param {number} containerSize The unit value of the size of the container of
     *     this element.  Should be set to the minimum width of this element if
     *     forMaximum is true.
     * @param {number} scale The ratio of pixels to units.
     * @param {Object=} opt_cache Optional (but highly recommend) object to store
     *     cached computations in.  The calling class should manage clearing out
     *     the cache when the scale or containerSize changes.
     * @return {number} The correct number of coordinate space units.
     */
    function getValue(coord: any /*string|number*/, forMaximum: any /*boolean|any (undefined)*/, containerSize: number, scale: number, opt_cache?: Object): number;
}

declare module 'goog.graphics.ext' {

    /**
     * Base class for a wrapper around the goog.graphics wrapper that enables
     * more advanced functionality.
     * @param {goog.graphics.ext.Group?} group Parent for this element.
     * @param {goog.graphics.Element} wrapper The thin wrapper to wrap.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class Element extends goog.events.EventTarget {
        /**
         * Base class for a wrapper around the goog.graphics wrapper that enables
         * more advanced functionality.
         * @param {goog.graphics.ext.Group?} group Parent for this element.
         * @param {goog.graphics.Element} wrapper The thin wrapper to wrap.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(group: goog.graphics.ext.Group, wrapper: goog.graphics.Element);
    
        /** @return {goog.graphics.Element} The underlying thin wrapper. */
        getWrapper(): goog.graphics.Element;
    
        /**
         * @return {goog.graphics.ext.Element|goog.graphics.ext.Graphics} The graphics
         *     surface the element is a part of.
         */
        getGraphics(): any /*goog.graphics.ext.Element|goog.graphics.ext.Graphics*/;
    
        /**
         * Returns the graphics implementation.
         * @return {goog.graphics.AbstractGraphics} The underlying graphics
         *     implementation drawing this element's wrapper.
         * @protected
         */
        getGraphicsImplementation(): goog.graphics.AbstractGraphics;
    
        /**
         * @return {goog.graphics.ext.Group|undefined} The parent of this element.
         */
        getParent(): any /*goog.graphics.ext.Group|any (undefined)*/;
    
        /**
         * @return {number} The distance from the left edge of this element to the left
         *     edge of its parent, specified in units of the parent's coordinate system.
         */
        getLeft(): number;
    
        /**
         * Sets the left coordinate of the element.  Overwrites any previous value of
         * left, center, or right for this element.
         * @param {string|number} left The left coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setLeft(left: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} The right coordinate of the element, in units of the
         *     parent's coordinate system.
         */
        getRight(): number;
    
        /**
         * Sets the right coordinate of the element.  Overwrites any previous value of
         * left, center, or right for this element.
         * @param {string|number} right The right coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setRight(right: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} The center coordinate of the element, in units of the
         * parent's coordinate system.
         */
        getCenter(): number;
    
        /**
         * Sets the center coordinate of the element.  Overwrites any previous value of
         * left, center, or right for this element.
         * @param {string|number} center The center coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setCenter(center: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} The distance from the top edge of this element to the top
         *     edge of its parent, specified in units of the parent's coordinate system.
         */
        getTop(): number;
    
        /**
         * Sets the top coordinate of the element.  Overwrites any previous value of
         * top, middle, or bottom for this element.
         * @param {string|number} top The top coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setTop(top: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} The bottom coordinate of the element, in units of the
         *     parent's coordinate system.
         */
        getBottom(): number;
    
        /**
         * Sets the bottom coordinate of the element.  Overwrites any previous value of
         * top, middle, or bottom for this element.
         * @param {string|number} bottom The bottom coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setBottom(bottom: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} The middle coordinate of the element, in units of the
         *     parent's coordinate system.
         */
        getMiddle(): number;
    
        /**
         * Sets the middle coordinate of the element.  Overwrites any previous value of
         * top, middle, or bottom for this element
         * @param {string|number} middle The middle coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setMiddle(middle: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} The width of the element, in units of the parent's
         *     coordinate system.
         */
        getWidth(): number;
    
        /**
         * Sets the width of the element.
         * @param {string|number} width The new width value.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setWidth(width: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} The minimum width of the element, in units of the parent's
         *     coordinate system.
         */
        getMinWidth(): number;
    
        /**
         * Sets the minimum width of the element.
         * @param {string|number} minWidth The minimum width of the element.
         */
        setMinWidth(minWidth: any /*string|number*/): void;
    
        /**
         * @return {number} The height of the element, in units of the parent's
         *     coordinate system.
         */
        getHeight(): number;
    
        /**
         * Sets the height of the element.
         * @param {string|number} height The new height value.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setHeight(height: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} The minimum height of the element, in units of the parent's
         *     coordinate system.
         */
        getMinHeight(): number;
    
        /**
         * Sets the minimum height of the element.
         * @param {string|number} minHeight The minimum height of the element.
         */
        setMinHeight(minHeight: any /*string|number*/): void;
    
        /**
         * Shortcut for setting the left and top position.
         * @param {string|number} left The left coordinate.
         * @param {string|number} top The top coordinate.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setPosition(left: any /*string|number*/, top: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * Shortcut for setting the width and height.
         * @param {string|number} width The new width value.
         * @param {string|number} height The new height value.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setSize(width: any /*string|number*/, height: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * Shortcut for setting the left, top, width, and height.
         * @param {string|number} left The left coordinate.
         * @param {string|number} top The top coordinate.
         * @param {string|number} width The new width value.
         * @param {string|number} height The new height value.
         * @param {boolean=} opt_chain Optional flag to specify this function is part
         *     of a chain of calls and therefore transformations should be set as
         *     pending but not yet performed.
         */
        setBounds(left: any /*string|number*/, top: any /*string|number*/, width: any /*string|number*/, height: any /*string|number*/, opt_chain?: boolean): void;
    
        /**
         * @return {number} An estimate of the maximum x extent this element would have
         *     in a parent of no width.
         */
        getMaxX(): number;
    
        /**
         * @return {number} An estimate of the maximum y extent this element would have
         *     in a parent of no height.
         */
        getMaxY(): number;
    
        /**
         * Reset the element.  This is called when the element changes size, or when
         * the coordinate system changes in a way that would affect pixel based
         * rendering
         */
        reset(): void;
    
        /**
         * Overridable function for subclass specific reset.
         * @protected
         */
        redraw: any /*missing*/;
    
        /**
         * Returns whether this element's bounds depend on its parents.
         *
         * This function should be treated as if it has package scope.
         * @return {boolean} Whether this element's bounds depend on its parents.
         */
        isParentDependent(): boolean;
    
        /**
         * Overridable function for subclass specific parent dependency.
         * @return {boolean} Whether this shape's bounds depends on its parent's.
         * @protected
         */
        checkParentDependent: any /*missing*/;
    
        /**
         * Set the rotation of this element.
         * @param {number} angle The angle of rotation, in degrees.
         */
        setRotation(angle: number): void;
    
        /**
         * @return {number} The angle of rotation of this element, in degrees.
         */
        getRotation(): number;
    
        /**
         * Called by the parent when the parent has transformed.
         *
         * Should be treated as package scope.
         */
        parentTransform(): void;
    
        /**
         * @return {boolean} Whether this element has pending transforms.
         */
        isPendingTransform(): boolean;
    
        /**
         * Performs a pending transform.
         * @protected
         */
        transform(): void;
    
        /**
         * @return {number} Returns the number of pixels per unit in the x direction.
         */
        getPixelScaleX(): number;
    
        /**
         * @return {number} Returns the number of pixels per unit in the y direction.
         */
        getPixelScaleY(): number;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Wrapper for a graphics ellipse element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @constructor
     * @extends {goog.graphics.ext.StrokeAndFillElement}
     * @final
     */
    class Ellipse extends goog.graphics.ext.StrokeAndFillElement {
        /**
         * Wrapper for a graphics ellipse element.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @constructor
         * @extends {goog.graphics.ext.StrokeAndFillElement}
         * @final
         */
        constructor(group: goog.graphics.ext.Group);
    
        /**
         * Redraw the ellipse.  Called when the coordinate system is changed.
         * @protected
         * @override
         */
        redraw(): void;
    }

    /**
     * Wrapper for a graphics surface.
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The coordinate width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight The coordinate height. - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @param {boolean=} opt_isSimple Flag used to indicate the graphics object will
     *     be drawn to in a single pass, and the fastest implementation for this
     *     scenario should be favored.  NOTE: Setting to true may result in
     *     degradation of text support.
     * @constructor
     * @extends {goog.graphics.ext.Group}
     * @final
     */
    class Graphics extends goog.graphics.ext.Group {
        /**
         * Wrapper for a graphics surface.
         * @param {string|number} width The width in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {string|number} height The height in pixels.  Strings
         *     expressing percentages of parent with (e.g. '80%') are also accepted.
         * @param {?number=} opt_coordWidth The coordinate width - if
         *     omitted or null, defaults to same as width.
         * @param {?number=} opt_coordHeight The coordinate height. - if
         *     omitted or null, defaults to same as height.
         * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
         *     document we want to render in.
         * @param {boolean=} opt_isSimple Flag used to indicate the graphics object will
         *     be drawn to in a single pass, and the fastest implementation for this
         *     scenario should be favored.  NOTE: Setting to true may result in
         *     degradation of text support.
         * @constructor
         * @extends {goog.graphics.ext.Group}
         * @final
         */
        constructor(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper, opt_isSimple?: boolean);
    
        /**
         * @return {goog.graphics.AbstractGraphics} The graphics implementation layer.
         */
        getImplementation(): goog.graphics.AbstractGraphics;
    
        /**
         * Changes the coordinate size.
         * @param {number} coordWidth The coordinate width.
         * @param {number} coordHeight The coordinate height.
         */
        setCoordSize(coordWidth: number, coordHeight: number): void;
    
        /**
         * @return {goog.math.Size} The coordinate size.
         */
        getCoordSize(): goog.math.Size;
    
        /**
         * Changes the coordinate system position.
         * @param {number} left The coordinate system left bound.
         * @param {number} top The coordinate system top bound.
         */
        setCoordOrigin(left: number, top: number): void;
    
        /**
         * @return {goog.math.Coordinate} The coordinate system position.
         */
        getCoordOrigin(): goog.math.Coordinate;
    
        /**
         * Change the size of the canvas.
         * @param {number} pixelWidth The width in pixels.
         * @param {number} pixelHeight The height in pixels.
         */
        setPixelSize(pixelWidth: number, pixelHeight: number): void;
    
        /**
         * @return {goog.math.Size?} Returns the number of pixels spanned by the
         *     surface, or null if the size could not be computed due to the size being
         *     specified in percentage points and the component not being in the
         *     document.
         */
        getPixelSize(): goog.math.Size;
    
        /**
         * @return {number} The coordinate width of the canvas.
         * @override
         */
        getWidth(): number;
    
        /**
         * @return {number} The coordinate width of the canvas.
         * @override
         */
        getHeight(): number;
    
        /**
         * @return {number} Returns the number of pixels per unit in the x direction.
         * @override
         */
        getPixelScaleX(): number;
    
        /**
         * @return {number} Returns the number of pixels per unit in the y direction.
         * @override
         */
        getPixelScaleY(): number;
    
        /**
         * @return {Element} The root element of the graphics surface.
         */
        getElement(): Element;
    
        /**
         * Renders the underlying graphics.
         *
         * @param {Element} parentElement Parent element to render the component into.
         */
        render(parentElement: Element): void;
    
        /**
         * Never transform a surface.
         * @override
         */
        transform: any /*missing*/;
    
        /**
         * Called from the parent class, this method resets any pre-computed positions
         * and sizes.
         * @protected
         * @override
         */
        redraw(): void;
    }

    /**
     * Wrapper for a graphics group.
     * @param {goog.graphics.ext.Group} group Parent for this element. Can
     *     be null if this is a Graphics instance.
     * @param {goog.graphics.GroupElement=} opt_wrapper The thin wrapper
     *     to wrap. If omitted, a new group will be created. Must be included
     *     when group is null.
     * @constructor
     * @extends {goog.graphics.ext.Element}
     */
    class Group extends goog.graphics.ext.Element {
        /**
         * Wrapper for a graphics group.
         * @param {goog.graphics.ext.Group} group Parent for this element. Can
         *     be null if this is a Graphics instance.
         * @param {goog.graphics.GroupElement=} opt_wrapper The thin wrapper
         *     to wrap. If omitted, a new group will be created. Must be included
         *     when group is null.
         * @constructor
         * @extends {goog.graphics.ext.Element}
         */
        constructor(group: goog.graphics.ext.Group, opt_wrapper?: goog.graphics.GroupElement);
    
        /**
         * Add an element to the group.  This should be treated as package local, as
         * it is called by the draw* methods.
         * @param {!goog.graphics.ext.Element} element The element to add.
         * @param {boolean=} opt_chain Whether this addition is part of a longer set
         *     of element additions.
         */
        addChild(element: goog.graphics.ext.Element, opt_chain?: boolean): void;
    
        /**
         * Remove an element from the group.
         * @param {goog.graphics.ext.Element} element The element to remove.
         */
        removeChild(element: goog.graphics.ext.Element): void;
    
        /**
         * Calls the given function on each of this component's children in order.  If
         * {@code opt_obj} is provided, it will be used as the 'this' object in the
         * function when called.  The function should take two arguments:  the child
         * component and its 0-based index.  The return value is ignored.
         * @param {Function} f The function to call for every child component; should
         *    take 2 arguments (the child and its index).
         * @param {Object=} opt_obj Used as the 'this' object in f when called.
         */
        forEachChild(f: Function, opt_obj?: Object): void;
    
        /**
         * @return {goog.graphics.GroupElement} The underlying thin wrapper.
         * @override
         */
        getWrapper: any /*missing*/;
    
        /**
         * Reset the element.
         * @override
         */
        reset(): void;
    
        /**
         * Called from the parent class, this method resets any pre-computed positions
         * and sizes.
         * @protected
         * @override
         */
        redraw(): void;
    
        /**
         * Transform the children that need to be transformed.
         * @protected
         */
        transformChildren(): void;
    
        /**
         * As part of the reset process, update child elements.
         */
        updateChildren(): void;
    
        /**
         * @return {number} The width of the element's coordinate space.
         */
        getCoordinateWidth(): number;
    
        /**
         * @return {number} The height of the element's coordinate space.
         */
        getCoordinateHeight(): number;
    
        /**
         * Remove all drawing elements from the group.
         */
        clear(): void;
    }

    /**
     * Wrapper for a graphics image element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @param {string} src The path to the image to display.
     * @constructor
     * @extends {goog.graphics.ext.Element}
     * @final
     */
    class Image extends goog.graphics.ext.Element {
        /**
         * Wrapper for a graphics image element.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @param {string} src The path to the image to display.
         * @constructor
         * @extends {goog.graphics.ext.Element}
         * @final
         */
        constructor(group: goog.graphics.ext.Group, src: string);
    
        /**
         * Redraw the image.  Called when the coordinate system is changed.
         * @protected
         * @override
         */
        redraw(): void;
    
        /**
         * Update the source of the image.
         * @param {string} src  Source of the image.
         */
        setSource(src: string): void;
    }

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
         * Clones the path.
         * @return {!goog.graphics.ext.Path} A clone of this path.
         * @override
         */
        clone(): goog.graphics.ext.Path;
    
        /**
         * Transforms the path. Only simple paths are transformable. Attempting
         * to transform a non-simple path will throw an error.
         * @param {!goog.graphics.AffineTransform} tx The transformation to perform.
         * @return {!goog.graphics.ext.Path} The path itself.
         * @override
         */
        transform(tx: goog.graphics.AffineTransform): goog.graphics.ext.Path;
    
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

    /**
     * Wrapper for a graphics rectangle element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @constructor
     * @extends {goog.graphics.ext.StrokeAndFillElement}
     * @final
     */
    class Rectangle extends goog.graphics.ext.StrokeAndFillElement {
        /**
         * Wrapper for a graphics rectangle element.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @constructor
         * @extends {goog.graphics.ext.StrokeAndFillElement}
         * @final
         */
        constructor(group: goog.graphics.ext.Group);
    
        /**
         * Redraw the rectangle.  Called when the coordinate system is changed.
         * @protected
         * @override
         */
        redraw(): void;
    }

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
    class Shape extends goog.graphics.ext.StrokeAndFillElement {
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
    
        /**
         * Redraw the ellipse.  Called when the coordinate system is changed.
         * @protected
         * @override
         */
        redraw(): void;
    
        /**
         * @return {boolean} Whether the shape is parent dependent.
         * @protected
         * @override
         */
        checkParentDependent(): boolean;
    }

    /**
     * Interface for a graphics element that has a stroke and fill.
     * This is the base interface for ellipse, rectangle and other
     * shape interfaces.
     * You should not construct objects from this constructor. Use a subclass.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @param {goog.graphics.StrokeAndFillElement} wrapper The thin wrapper to wrap.
     * @constructor
     * @extends {goog.graphics.ext.Element}
     */
    class StrokeAndFillElement extends goog.graphics.ext.Element {
        /**
         * Interface for a graphics element that has a stroke and fill.
         * This is the base interface for ellipse, rectangle and other
         * shape interfaces.
         * You should not construct objects from this constructor. Use a subclass.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @param {goog.graphics.StrokeAndFillElement} wrapper The thin wrapper to wrap.
         * @constructor
         * @extends {goog.graphics.ext.Element}
         */
        constructor(group: goog.graphics.ext.Group, wrapper: goog.graphics.StrokeAndFillElement);
    
        /**
         * Sets the fill for this element.
         * @param {goog.graphics.Fill?} fill The fill object.
         */
        setFill(fill: goog.graphics.Fill): void;
    
        /**
         * Sets the stroke for this element.
         * @param {goog.graphics.Stroke?} stroke The stroke object.
         */
        setStroke(stroke: goog.graphics.Stroke): void;
    
        /**
         * Redraw the rectangle.  Called when the coordinate system is changed.
         * @protected
         * @override
         */
        redraw(): void;
    }
}

