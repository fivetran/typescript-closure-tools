/// <reference path="../../../globals.d.ts" />
/// <reference path="./popupbase.d.ts" />
/// <reference path="../positioning/abstractposition.d.ts" />
/// <reference path="../positioning/positioning.d.ts" />
/// <reference path="../math/box.d.ts" />
/// <reference path="../math/coordinate.d.ts" />

declare module goog.ui {

    class Popup extends Popup.__Class { }
    module Popup {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.PopupBase.__Class {
    
            /**
             * The Popup class provides functionality for displaying an absolutely
             * positioned element at a particular location in the window. It's designed to
             * be used as the foundation for building controls like a menu or tooltip. The
             * Popup class includes functionality for displaying a Popup near adjacent to
             * an anchor element.
             *
             * This works cross browser and thus does not use IE's createPopup feature
             * which supports extending outside the edge of the brower window.
             *
             * @param {Element=} opt_element A DOM element for the popup.
             * @param {goog.positioning.AbstractPosition=} opt_position A positioning helper
             *     object.
             * @constructor
             * @extends {goog.ui.PopupBase}
             */
            constructor(opt_element?: Element, opt_position?: goog.positioning.AbstractPosition);
    
            /**
             * Returns the corner of the popup to used in the positioning algorithm.
             *
             * @return {goog.positioning.Corner} The popup corner used for positioning.
             */
            getPinnedCorner(): goog.positioning.Corner;
    
            /**
             * Sets the corner of the popup to used in the positioning algorithm.
             *
             * @param {goog.positioning.Corner} corner The popup corner used for
             *     positioning.
             */
            setPinnedCorner(corner: goog.positioning.Corner): void;
    
            /**
             * @return {goog.positioning.AbstractPosition} The position helper object
             *     associated with the popup.
             */
            getPosition(): goog.positioning.AbstractPosition;
    
            /**
             * Sets the position helper object associated with the popup.
             *
             * @param {goog.positioning.AbstractPosition} position A position helper object.
             */
            setPosition(position: goog.positioning.AbstractPosition): void;
    
            /**
             * Returns the margin to place around the popup.
             *
             * @return {goog.math.Box?} The margin.
             */
            getMargin(): goog.math.Box;
    
            /**
             * Sets the margin to place around the popup.
             *
             * @param {goog.math.Box|number|null} arg1 Top value or Box.
             * @param {number=} opt_arg2 Right value.
             * @param {number=} opt_arg3 Bottom value.
             * @param {number=} opt_arg4 Left value.
             */
            setMargin(arg1: goog.math.Box, opt_arg2?: number, opt_arg3?: number, opt_arg4?: number): void;
            /**
             * Sets the margin to place around the popup.
             *
             * @param {goog.math.Box|number|null} arg1 Top value or Box.
             * @param {number=} opt_arg2 Right value.
             * @param {number=} opt_arg3 Bottom value.
             * @param {number=} opt_arg4 Left value.
             */
            setMargin(arg1: number, opt_arg2?: number, opt_arg3?: number, opt_arg4?: number): void;
            /**
             * Sets the margin to place around the popup.
             *
             * @param {goog.math.Box|number|null} arg1 Top value or Box.
             * @param {number=} opt_arg2 Right value.
             * @param {number=} opt_arg3 Bottom value.
             * @param {number=} opt_arg4 Left value.
             */
            setMargin(arg1: any /*null*/, opt_arg2?: number, opt_arg3?: number, opt_arg4?: number): void;
        }
    }
}

declare module goog.ui.Popup {

    class AnchoredPosition extends AnchoredPosition.__Class { }
    module AnchoredPosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.positioning.AbstractPosition.__Class {
    
            /**
             * Encapsulates a popup position where the popup is anchored at a corner of
             * an element.
             *
             * When using AnchoredPosition, it is recommended that the popup element
             * specified in the Popup constructor or Popup.setElement be absolutely
             * positioned.
             *
             * @param {Element} element The element to anchor the popup at.
             * @param {goog.positioning.Corner} corner The corner of the element to anchor
             *     the popup at.
             * @constructor
             * @extends {goog.positioning.AbstractPosition}
             *
             * @deprecated Use {@link goog.positioning.AnchoredPosition} instead, this
             *     alias will be removed at the end of Q1 2009.
             * @final
             */
            constructor(element: Element, corner: goog.positioning.Corner);
        }
    }

    class AnchoredViewPortPosition extends AnchoredViewPortPosition.__Class { }
    module AnchoredViewPortPosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Popup.AnchoredPosition.__Class {
    
            /**
             * Encapsulates a popup position where the popup is anchored at a corner of
             * an element. The corners are swapped if dictated by the viewport. For instance
             * if a popup is anchored with its top left corner to the bottom left corner of
             * the anchor the popup is either displayed below the anchor (as specified) or
             * above it if there's not enough room to display it below.
             *
             * When using AnchoredPosition, it is recommended that the popup element
             * specified in the Popup constructor or Popup.setElement be absolutely
             * positioned.
             *
             * @param {Element} element The element to anchor the popup at.
             * @param {goog.positioning.Corner} corner The corner of the element to anchor
             *    the popup at.
             * @param {boolean=} opt_adjust Whether the positioning should be adjusted until
             *    the element fits inside the viewport even if that means that the anchored
             *    corners are ignored.
             * @constructor
             * @extends {goog.ui.Popup.AnchoredPosition}
             *
             * @deprecated Use {@link goog.positioning.AnchoredViewportPosition} instead,
             *     this alias will be removed at the end of Q1 2009.
             */
            constructor(element: Element, corner: goog.positioning.Corner, opt_adjust?: boolean);
        }
    }

    class AbsolutePosition extends AbsolutePosition.__Class { }
    module AbsolutePosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.positioning.AbstractPosition.__Class {
    
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
             *
             * @deprecated Use {@link goog.positioning.AbsolutePosition} instead, this alias
             *     will be removed at the end of Q1 2009.
             * @final
             */
            constructor(arg1: number, opt_arg2?: number);
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
             *
             * @deprecated Use {@link goog.positioning.AbsolutePosition} instead, this alias
             *     will be removed at the end of Q1 2009.
             * @final
             */
            constructor(arg1: goog.math.Coordinate, opt_arg2?: number);
        }
    }

    class ViewPortPosition extends ViewPortPosition.__Class { }
    module ViewPortPosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Popup.AbsolutePosition.__Class {
    
            /**
             * Encapsulates a popup position where the popup is positioned according to
             * coordinates relative to the  element's view port (page). This calculates the
             * correct position to use even if the element is relatively positioned to some
             * other element.
             *
             * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
             * @param {number=} opt_arg2 Top position.
             * @constructor
             * @extends {goog.ui.Popup.AbsolutePosition}
             *
             * @deprecated Use {@link goog.positioning.ViewPortPosition} instead, this alias
             *     will be removed at the end of Q1 2009.
             */
            constructor(arg1: number, opt_arg2?: number);
            /**
             * Encapsulates a popup position where the popup is positioned according to
             * coordinates relative to the  element's view port (page). This calculates the
             * correct position to use even if the element is relatively positioned to some
             * other element.
             *
             * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
             * @param {number=} opt_arg2 Top position.
             * @constructor
             * @extends {goog.ui.Popup.AbsolutePosition}
             *
             * @deprecated Use {@link goog.positioning.ViewPortPosition} instead, this alias
             *     will be removed at the end of Q1 2009.
             */
            constructor(arg1: goog.math.Coordinate, opt_arg2?: number);
        }
    }

    class ClientPosition extends ClientPosition.__Class { }
    module ClientPosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Popup.AbsolutePosition.__Class {
    
            /**
             * Encapsulates a popup position where the popup is positioned relative to the
             * window (client) coordinates. This calculates the correct position to
             * use even if the element is relatively positioned to some other element. This
             * is for trying to position an element at the spot of the mouse cursor in
             * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
             * parameters.
             *
             * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
             * @param {number=} opt_arg2 Top position.
             * @constructor
             * @extends {goog.ui.Popup.AbsolutePosition}
             *
             * @deprecated Use {@link goog.positioning.ClientPosition} instead, this alias
             *     will be removed at the end of Q1 2009.
             * @final
             */
            constructor(arg1: number, opt_arg2?: number);
            /**
             * Encapsulates a popup position where the popup is positioned relative to the
             * window (client) coordinates. This calculates the correct position to
             * use even if the element is relatively positioned to some other element. This
             * is for trying to position an element at the spot of the mouse cursor in
             * a MOUSEMOVE event. Just use the event.clientX and event.clientY as the
             * parameters.
             *
             * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
             * @param {number=} opt_arg2 Top position.
             * @constructor
             * @extends {goog.ui.Popup.AbsolutePosition}
             *
             * @deprecated Use {@link goog.positioning.ClientPosition} instead, this alias
             *     will be removed at the end of Q1 2009.
             * @final
             */
            constructor(arg1: goog.math.Coordinate, opt_arg2?: number);
        }
    }

    class ViewPortClientPosition extends ViewPortClientPosition.__Class { }
    module ViewPortClientPosition {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Popup.ClientPosition.__Class {
    
            /**
             * Encapsulates a popup position where the popup is positioned relative to the
             * window (client) coordinates, and made to stay within the viewport.
             *
             * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
             * @param {number=} opt_arg2 Top position if arg1 is a number representing the
             *     left position, ignored otherwise.
             * @constructor
             * @extends {goog.ui.Popup.ClientPosition}
             *
             * @deprecated Use {@link goog.positioning.ViewPortClientPosition} instead, this
             *     alias will be removed at the end of Q1 2009.
             */
            constructor(arg1: number, opt_arg2?: number);
            /**
             * Encapsulates a popup position where the popup is positioned relative to the
             * window (client) coordinates, and made to stay within the viewport.
             *
             * @param {number|!goog.math.Coordinate} arg1 Left position or coordinate.
             * @param {number=} opt_arg2 Top position if arg1 is a number representing the
             *     left position, ignored otherwise.
             * @constructor
             * @extends {goog.ui.Popup.ClientPosition}
             *
             * @deprecated Use {@link goog.positioning.ViewPortClientPosition} instead, this
             *     alias will be removed at the end of Q1 2009.
             */
            constructor(arg1: goog.math.Coordinate, opt_arg2?: number);
        }
    }

    /**
     * Enum for representing an element corner for positioning the popup.
     *
     * @enum {number}
     *
     * @deprecated Use {@link goog.positioning.Corner} instead, this alias will be
     *     removed at the end of Q1 2009.
     */
    enum Corner { TOP_LEFT, TOP_RIGHT, BOTTOM_LEFT, BOTTOM_RIGHT, TOP_START, TOP_END, BOTTOM_START, BOTTOM_END } 

    /**
     * Enum for representing position handling in cases where the element would be
     * positioned outside the viewport.
     *
     * @enum {number}
     *
     * @deprecated Use {@link goog.positioning.Overflow} instead, this alias will be
     *     removed at the end of Q1 2009.
     */
    enum Overflow { IGNORE, ADJUST_X, FAIL_X, ADJUST_Y, FAIL_Y, RESIZE_WIDTH, RESIZE_HEIGHT, ADJUST_X_EXCEPT_OFFSCREEN, ADJUST_Y_EXCEPT_OFFSCREEN } 
}
