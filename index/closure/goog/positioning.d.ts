// Generated Wed Apr 30 16:27:45 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.positioning' {

    /**
     * Enum for representing an element corner for positioning the popup.
     *
     * The START constants map to LEFT if element directionality is left
     * to right and RIGHT if the directionality is right to left.
     * Likewise END maps to RIGHT or LEFT depending on the directionality.
     *
     * @enum {number}
     */
    enum Corner { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT, TOP_START, TOP_END, BOTTOM_START, BOTTOM_END } 

    /**
     * Enum for bits in the {@see goog.positioning.Corner) bitmap.
     *
     * @enum {number}
     */
    enum CornerBit { BOTTOM, RIGHT, FLIP_RTL } 

    /**
     * Enum for representing position handling in cases where the element would be
     * positioned outside the viewport.
     *
     * @enum {number}
     */
    enum Overflow { IGNORE, ADJUST_X, FAIL_X, ADJUST_Y, FAIL_Y, RESIZE_WIDTH, RESIZE_HEIGHT, ADJUST_X_EXCEPT_OFFSCREEN, ADJUST_Y_EXCEPT_OFFSCREEN } 

    /**
     * Enum for representing the outcome of a positioning call.
     *
     * @enum {number}
     */
    enum OverflowStatus { NONE, ADJUSTED_X, ADJUSTED_Y, WIDTH_ADJUSTED, HEIGHT_ADJUSTED, FAILED_LEFT, FAILED_RIGHT, FAILED_TOP, FAILED_BOTTOM, FAILED_OUTSIDE_VIEWPORT } 

    /**
     * Positions a movable element relative to an anchor element. The caller
     * specifies the corners that should touch. This functions then moves the
     * movable element accordingly.
     *
     * @param {Element} anchorElement The element that is the anchor for where
     *    the movable element should position itself.
     * @param {goog.positioning.Corner} anchorElementCorner The corner of the
     *     anchorElement for positioning the movable element.
     * @param {Element} movableElement The element to move.
     * @param {goog.positioning.Corner} movableElementCorner The corner of the
     *     movableElement that that should be positioned adjacent to the anchor
     *     element.
     * @param {goog.math.Coordinate=} opt_offset An offset specified in pixels.
     *    After the normal positioning algorithm is applied, the offset is then
     *    applied. Positive coordinates move the popup closer to the center of the
     *    anchor element. Negative coordinates move the popup away from the center
     *    of the anchor element.
     * @param {goog.math.Box=} opt_margin A margin specified in pixels.
     *    After the normal positioning algorithm is applied and any offset, the
     *    margin is then applied. Positive coordinates move the popup away from the
     *    spot it was positioned towards its center. Negative coordinates move it
     *    towards the spot it was positioned away from its center.
     * @param {?number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified. Bitmap, {@see goog.positioning.Overflow}.
     * @param {goog.math.Size=} opt_preferredSize The preferred size of the
     *     movableElement.
     * @param {goog.math.Box=} opt_viewport Box object describing the dimensions of
     *     the viewport. The viewport is specified relative to offsetParent of
     *     {@code movableElement}. In other words, the viewport can be thought of as
     *     describing a "position: absolute" element contained in the offsetParent.
     *     It defaults to visible area of nearest scrollable ancestor of
     *     {@code movableElement} (see {@code goog.style.getVisibleRectForElement}).
     * @return {goog.positioning.OverflowStatus} Status bitmap,
     *     {@see goog.positioning.OverflowStatus}.
     */
    function positionAtAnchor(anchorElement: Element, anchorElementCorner: goog.positioning.Corner, movableElement: Element, movableElementCorner: goog.positioning.Corner, opt_offset?: goog.math.Coordinate, opt_margin?: goog.math.Box, opt_overflow?: number, opt_preferredSize?: goog.math.Size, opt_viewport?: goog.math.Box): goog.positioning.OverflowStatus;

    /**
     * Calculates the page offset of the given element's
     * offsetParent. This value can be used to translate any x- and
     * y-offset relative to the page to an offset relative to the
     * offsetParent, which can then be used directly with as position
     * coordinate for {@code positionWithCoordinate}.
     * @param {!Element} movableElement The element to calculate.
     * @return {!goog.math.Coordinate} The page offset, may be (0, 0).
     */
    function getOffsetParentPageOffset(movableElement: Element): goog.math.Coordinate;

    /**
     * Positions the specified corner of the movable element at the
     * specified coordinate.
     *
     * @param {goog.math.Coordinate} absolutePos The coordinate to position the
     *     element at.
     * @param {Element} movableElement The element to be positioned.
     * @param {goog.positioning.Corner} movableElementCorner The corner of the
     *     movableElement that that should be positioned.
     * @param {goog.math.Box=} opt_margin A margin specified in pixels.
     *    After the normal positioning algorithm is applied and any offset, the
     *    margin is then applied. Positive coordinates move the popup away from the
     *    spot it was positioned towards its center. Negative coordinates move it
     *    towards the spot it was positioned away from its center.
     * @param {goog.math.Box=} opt_viewport Box object describing the dimensions of
     *     the viewport. Required if opt_overflow is specified.
     * @param {?number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified, {@see goog.positioning.Overflow}.
     * @param {goog.math.Size=} opt_preferredSize The preferred size of the
     *     movableElement. Defaults to the current size.
     * @return {goog.positioning.OverflowStatus} Status bitmap.
     */
    function positionAtCoordinate(absolutePos: goog.math.Coordinate, movableElement: Element, movableElementCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_viewport?: goog.math.Box, opt_overflow?: number, opt_preferredSize?: goog.math.Size): goog.positioning.OverflowStatus;

    /**
     * Returns an absolute corner (top/bottom left/right) given an absolute
     * or relative (top/bottom start/end) corner and the direction of an element.
     * Absolute corners remain unchanged.
     * @param {Element} element DOM element to test for RTL direction.
     * @param {goog.positioning.Corner} corner The popup corner used for
     *     positioning.
     * @return {goog.positioning.Corner} Effective corner.
     */
    function getEffectiveCorner(element: Element, corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one horizontally.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner horizontally.
     */
    function flipCornerHorizontal(corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one vertically.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner vertically.
     */
    function flipCornerVertical(corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Returns the corner opposite the given one horizontally and vertically.
     * @param {goog.positioning.Corner} corner The popup corner used to flip.
     * @return {goog.positioning.Corner} The opposite corner horizontally and
     *     vertically.
     */
    function flipCorner(corner: goog.positioning.Corner): goog.positioning.Corner;

    /**
     * Encapsulates a popup position where the popup absolutely positioned by
     * setting the left/top style elements directly to the specified values.
     * The position is generally relative to the element's offsetParent. Normally,
     * this is the document body, but can be another element if the popup element
     * is scoped by an element with relative position.
     *
     * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class AbsolutePosition extends goog.positioning.AbstractPosition {
        /**
         * Encapsulates a popup position where the popup absolutely positioned by
         * setting the left/top style elements directly to the specified values.
         * The position is generally relative to the element's offsetParent. Normally,
         * this is the document body, but can be another element if the popup element
         * is scoped by an element with relative position.
         *
         * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    
        /**
         * Repositions the popup according to the current state.
         *
         * @param {Element} movableElement The DOM element to position.
         * @param {goog.positioning.Corner} movableCorner The corner of the movable
         *     element that should be positioned at the specified position.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize Prefered size of the
         *     movableElement.
         * @override
         */
        reposition(movableElement: Element, movableCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }

    /**
     * Abstract position object. Encapsulates position and overflow handling.
     *
     * @constructor
     */
    class AbstractPosition {
        /**
         * Abstract position object. Encapsulates position and overflow handling.
         *
         * @constructor
         */
        constructor();
    
        /**
         * Repositions the element. Abstract method, should be overloaded.
         *
         * @param {Element} movableElement Element to position.
         * @param {goog.positioning.Corner} corner Corner of the movable element that
         *     should be positioned adjacent to the anchored element.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize PreferredSize of the
         *     movableElement.
         */
        reposition(movableElement: Element, corner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.
     *
     * When using AnchoredPosition, it is recommended that the popup element
     * specified in the Popup constructor or Popup.setElement be absolutely
     * positioned.
     *
     * @param {Element} anchorElement Element the movable element should be
     *     anchored against.
     * @param {goog.positioning.Corner} corner Corner of anchored element the
     *     movable element should be positioned at.
     * @param {number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
     *     not specified. Bitmap, {@see goog.positioning.Overflow}.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class AnchoredPosition extends goog.positioning.AbstractPosition {
        /**
         * Encapsulates a popup position where the popup is anchored at a corner of
         * an element.
         *
         * When using AnchoredPosition, it is recommended that the popup element
         * specified in the Popup constructor or Popup.setElement be absolutely
         * positioned.
         *
         * @param {Element} anchorElement Element the movable element should be
         *     anchored against.
         * @param {goog.positioning.Corner} corner Corner of anchored element the
         *     movable element should be positioned at.
         * @param {number=} opt_overflow Overflow handling mode. Defaults to IGNORE if
         *     not specified. Bitmap, {@see goog.positioning.Overflow}.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         */
        constructor(anchorElement: Element, corner: goog.positioning.Corner, opt_overflow?: number);
    
        /**
         * Repositions the movable element.
         *
         * @param {Element} movableElement Element to position.
         * @param {goog.positioning.Corner} movableCorner Corner of the movable element
         *     that should be positioned adjacent to the anchored element.
         * @param {goog.math.Box=} opt_margin A margin specifin pixels.
         * @param {goog.math.Size=} opt_preferredSize PreferredSize of the
         *     movableElement (unused in this class).
         * @override
         */
        reposition(movableElement: Element, movableCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element. The corners are swapped if dictated by the viewport. For instance
     * if a popup is anchored with its top left corner to the bottom left corner of
     * the anchor the popup is either displayed below the anchor (as specified) or
     * above it if there's not enough room to display it below.
     *
     * When using this positioning object it's recommended that the movable element
     * be absolutely positioned.
     *
     * @param {Element} anchorElement Element the movable element should be
     *     anchored against.
     * @param {goog.positioning.Corner} corner Corner of anchored element the
     *     movable element should be positioned at.
     * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
     *     the element fits inside the viewport even if that means that the anchored
     *     corners are ignored.
     * @param {goog.math.Box=} opt_overflowConstraint Box object describing the
     *     dimensions in which the movable element could be shown.
     * @constructor
     * @extends {goog.positioning.AnchoredPosition}
     */
    class AnchoredViewportPosition extends goog.positioning.AnchoredPosition {
        /**
         * Encapsulates a popup position where the popup is anchored at a corner of
         * an element. The corners are swapped if dictated by the viewport. For instance
         * if a popup is anchored with its top left corner to the bottom left corner of
         * the anchor the popup is either displayed below the anchor (as specified) or
         * above it if there's not enough room to display it below.
         *
         * When using this positioning object it's recommended that the movable element
         * be absolutely positioned.
         *
         * @param {Element} anchorElement Element the movable element should be
         *     anchored against.
         * @param {goog.positioning.Corner} corner Corner of anchored element the
         *     movable element should be positioned at.
         * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
         *     the element fits inside the viewport even if that means that the anchored
         *     corners are ignored.
         * @param {goog.math.Box=} opt_overflowConstraint Box object describing the
         *     dimensions in which the movable element could be shown.
         * @constructor
         * @extends {goog.positioning.AnchoredPosition}
         */
        constructor(anchorElement: Element, corner: goog.positioning.Corner, opt_adjust?: boolean, opt_overflowConstraint?: goog.math.Box);
    
        /**
         * @return {goog.math.Box|undefined} The box object describing the
         *     dimensions in which the movable element will be shown.
         */
        getOverflowConstraint(): any /*goog.math.Box|any (undefined)*/;
    
        /**
         * @param {goog.math.Box|undefined} overflowConstraint Box object describing the
         *     dimensions in which the movable element could be shown.
         */
        setOverflowConstraint(overflowConstraint: any /*goog.math.Box|any (undefined)*/): void;
    
        /**
         * @return {number} A bitmask for the "last resort" overflow.
         */
        getLastResortOverflow(): number;
    
        /**
         * @param {number} lastResortOverflow A bitmask for the "last resort" overflow,
         *     if we fail to fit the element on-screen.
         */
        setLastResortOverflow(lastResortOverflow: number): void;
    
        /**
         * Repositions the movable element.
         *
         * @param {Element} movableElement Element to position.
         * @param {goog.positioning.Corner} movableCorner Corner of the movable element
         *     that should be positioned adjacent to the anchored element.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize The preferred size of the
         *     movableElement.
         * @override
         */
        reposition(movableElement: Element, movableCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    
        /**
         * Adjusts the corner if X or Y positioning failed.
         * @param {number} status The status of the last positionAtAnchor call.
         * @param {goog.positioning.Corner} corner The corner to adjust.
         * @return {goog.positioning.Corner} The adjusted corner.
         * @protected
         */
        adjustCorner(status: number, corner: goog.positioning.Corner): goog.positioning.Corner;
    }

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates. This calculates the correct position to
     * use even if the element is relatively positioned to some other element. This
     * is for trying to position an element at the spot of the mouse cursor in
     * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
     * parameters.
     *
     * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class ClientPosition extends goog.positioning.AbstractPosition {
        /**
         * Encapsulates a popup position where the popup is positioned relative to the
         * window (client) coordinates. This calculates the correct position to
         * use even if the element is relatively positioned to some other element. This
         * is for trying to position an element at the spot of the mouse cursor in
         * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
         * parameters.
         *
         * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    
        /**
         * Repositions the popup according to the current state
         *
         * @param {Element} movableElement The DOM element of the popup.
         * @param {goog.positioning.Corner} movableElementCorner The corner of
         *     the popup element that that should be positioned adjacent to
         *     the anchorElement.  One of the goog.positioning.Corner
         *     constants.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize Preferred size of the element.
         * @override
         */
        reposition(movableElement: Element, movableElementCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }

    /**
     * Encapsulates a popup position where the popup is anchored at a corner of
     * an element.  The positioning behavior changes based on the values of
     * opt_adjust and opt_resize.
     *
     * When using this positioning object it's recommended that the movable element
     * be absolutely positioned.
     *
     * @param {Element} anchorElement Element the movable element should be
     *     anchored against.
     * @param {goog.positioning.Corner} corner Corner of anchored element the
     *     movable element should be positioned at.
     * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
     *     the element fits inside the viewport even if that means that the anchored
     *     corners are ignored.
     * @param {boolean=} opt_resize Whether the positioning should be adjusted until
     *     the element fits inside the viewport on the X axis and its height is
     *     resized so if fits in the viewport. This take precedence over opt_adjust.
     * @constructor
     * @extends {goog.positioning.AnchoredViewportPosition}
     */
    class MenuAnchoredPosition extends goog.positioning.AnchoredViewportPosition {
        /**
         * Encapsulates a popup position where the popup is anchored at a corner of
         * an element.  The positioning behavior changes based on the values of
         * opt_adjust and opt_resize.
         *
         * When using this positioning object it's recommended that the movable element
         * be absolutely positioned.
         *
         * @param {Element} anchorElement Element the movable element should be
         *     anchored against.
         * @param {goog.positioning.Corner} corner Corner of anchored element the
         *     movable element should be positioned at.
         * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
         *     the element fits inside the viewport even if that means that the anchored
         *     corners are ignored.
         * @param {boolean=} opt_resize Whether the positioning should be adjusted until
         *     the element fits inside the viewport on the X axis and its height is
         *     resized so if fits in the viewport. This take precedence over opt_adjust.
         * @constructor
         * @extends {goog.positioning.AnchoredViewportPosition}
         */
        constructor(anchorElement: Element, corner: goog.positioning.Corner, opt_adjust?: boolean, opt_resize?: boolean);
    }

    /**
     * Encapsulates a popup position where the popup is positioned relative to the
     * window (client) coordinates, and made to stay within the viewport.
     *
     * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position if arg1 is a number representing the
     *     left position, ignored otherwise.
     * @constructor
     * @extends {goog.positioning.ClientPosition}
     */
    class ViewportClientPosition extends goog.positioning.ClientPosition {
        /**
         * Encapsulates a popup position where the popup is positioned relative to the
         * window (client) coordinates, and made to stay within the viewport.
         *
         * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position if arg1 is a number representing the
         *     left position, ignored otherwise.
         * @constructor
         * @extends {goog.positioning.ClientPosition}
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    
        /**
         * Set the last-resort overflow strategy, if the popup fails to fit.
         * @param {number} overflow A bitmask of goog.positioning.Overflow strategies.
         */
        setLastResortOverflow(overflow: number): void;
    
        /**
         * Repositions the popup according to the current state.
         *
         * @param {Element} element The DOM element of the popup.
         * @param {goog.positioning.Corner} popupCorner The corner of the popup
         *     element that that should be positioned adjacent to the anchorElement.
         *     One of the goog.positioning.Corner constants.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize Preferred size fo the element.
         * @override
         */
        reposition(element: Element, popupCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }

    /**
     * Encapsulates a popup position where the popup is positioned according to
     * coordinates relative to the  element's viewport (page). This calculates the
     * correct position to use even if the element is relatively positioned to some
     * other element.
     *
     * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
     * @param {number=} opt_arg2 Top position.
     * @constructor
     * @extends {goog.positioning.AbstractPosition}
     */
    class ViewportPosition extends goog.positioning.AbstractPosition {
        /**
         * Encapsulates a popup position where the popup is positioned according to
         * coordinates relative to the  element's viewport (page). This calculates the
         * correct position to use even if the element is relatively positioned to some
         * other element.
         *
         * @param {number|goog.math.Coordinate} arg1 Left position or coordinate.
         * @param {number=} opt_arg2 Top position.
         * @constructor
         * @extends {goog.positioning.AbstractPosition}
         */
        constructor(arg1: any /*number|goog.math.Coordinate*/, opt_arg2?: number);
    
        /**
         * Repositions the popup according to the current state
         *
         * @param {Element} element The DOM element of the popup.
         * @param {goog.positioning.Corner} popupCorner The corner of the popup
         *     element that that should be positioned adjacent to the anchorElement.
         * @param {goog.math.Box=} opt_margin A margin specified in pixels.
         * @param {goog.math.Size=} opt_preferredSize Preferred size of the element.
         * @override
         */
        reposition(element: Element, popupCorner: goog.positioning.Corner, opt_margin?: goog.math.Box, opt_preferredSize?: goog.math.Size): void;
    }
}

declare module 'goog.positioning.OverflowStatus' {

    /**
     * Shorthand to check if a status code contains any fail code.
     * @type {number}
     */
    var FAILED: number;

    /**
     * Shorthand to check if horizontal positioning failed.
     * @type {number}
     */
    var FAILED_HORIZONTAL: number;

    /**
     * Shorthand to check if vertical positioning failed.
     * @type {number}
     */
    var FAILED_VERTICAL: number;
}

