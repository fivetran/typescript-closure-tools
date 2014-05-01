// Generated Wed Apr 30 16:28:15 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/color.d.ts" />
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
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.fx.AbstractDragDrop' {

    /**
     * Constants for event names
     * @type {Object}
     */
    var EventType: Object;

    /**
     * Constant for distance threshold, in pixels, an element has to be moved to
     * initiate a drag operation.
     * @type {number}
     */
    var initDragDistanceThreshold: number;
}

declare module 'goog.fx.Animation' {

    /**
     * Events fired by the animation.
     * @enum {string}
     */
    enum EventType { PLAY, BEGIN, RESUME, END, STOP, FINISH, PAUSE, ANIMATE, DESTROY } 

    /**
     * @deprecated Use goog.fx.anim.TIMEOUT.
     */
    var TIMEOUT: any /*missing*/;

    /**
     * @deprecated Use goog.fx.anim.setAnimationWindow.
     * @param {Window} animationWindow The window in which to animate elements.
     */
    function setAnimationWindow(animationWindow: Window): void;
}

declare module 'goog.fx.dom' {

    /**
     * Fade elements background color from start color to the element's current
     * background color.
     *
     * Start should be a 3D array representing R,G,B
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start 3D Array for RGB of start color.
     * @param {number} time Length of animation in milliseconds.
     * @param {goog.events.EventHandler=} opt_eventHandler Optional event handler
     *     to use when listening for events.
     */
    function bgColorFadeIn(element: Element, start: number[], time: number, opt_eventHandler?: goog.events.EventHandler): void;

    /**
     * Abstract class that provides reusable functionality for predefined animations
     * that manipulate a single DOM element
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start Array for start coordinates.
     * @param {Array.<number>} end Array for end coordinates.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.Animation}
     * @constructor
     */
    class PredefinedEffect extends goog.fx.Animation {
        /**
         * Abstract class that provides reusable functionality for predefined animations
         * that manipulate a single DOM element
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {Array.<number>} start Array for start coordinates.
         * @param {Array.<number>} end Array for end coordinates.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.Animation}
         * @constructor
         */
        constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
        /**
         * Called to update the style of the element.
         * @protected
         */
        updateStyle: any /*missing*/;
    
        /**
         * Whether the DOM element being manipulated is rendered right-to-left.
         * @return {boolean} True if the DOM element is rendered right-to-left, false
         *     otherwise.
         */
        isRightToLeft(): boolean;
    
        /** @override */
        onAnimate(): void;
    
        /** @override */
        onEnd(): void;
    
        /** @override */
        onBegin(): void;
    }

    /**
     * Creates an animation object that will slide an element from A to B.  (This
     * in effect automatically sets up the onanimate event for an Animation object)
     *
     * Start and End should be 2 dimensional arrays
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start 2D array for start coordinates (X, Y).
     * @param {Array.<number>} end 2D array for end coordinates (X, Y).
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Slide extends goog.fx.dom.PredefinedEffect {
        /**
         * Creates an animation object that will slide an element from A to B.  (This
         * in effect automatically sets up the onanimate event for an Animation object)
         *
         * Start and End should be 2 dimensional arrays
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {Array.<number>} start 2D array for start coordinates (X, Y).
         * @param {Array.<number>} end 2D array for end coordinates (X, Y).
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.PredefinedEffect}
         * @constructor
         */
        constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
        /** @override */
        updateStyle(): void;
    }

    /**
     * Slides an element from its current position.
     *
     * @param {Element} element DOM node to be used in the animation.
     * @param {Array.<number>} end 2D array for end coordinates (X, Y).
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Slide}
     * @constructor
     */
    class SlideFrom extends goog.fx.dom.Slide {
        /**
         * Slides an element from its current position.
         *
         * @param {Element} element DOM node to be used in the animation.
         * @param {Array.<number>} end 2D array for end coordinates (X, Y).
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.Slide}
         * @constructor
         */
        constructor(element: Element, end: number[], time: number, opt_acc?: Function);
    
        /** @override */
        onBegin(): void;
    }

    /**
     * Creates an animation object that will slide an element into its final size.
     * Requires that the element is absolutely positioned.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start 2D array for start size (W, H).
     * @param {Array.<number>} end 2D array for end size (W, H).
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Swipe extends goog.fx.dom.PredefinedEffect {
        /**
         * Creates an animation object that will slide an element into its final size.
         * Requires that the element is absolutely positioned.
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {Array.<number>} start 2D array for start size (W, H).
         * @param {Array.<number>} end 2D array for end size (W, H).
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.PredefinedEffect}
         * @constructor
         */
        constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
        /**
         * Animation event handler that will resize an element by setting its width,
         * height and clipping.
         * @protected
         * @override
         */
        updateStyle(): void;
    }

    /**
     * Creates an animation object that will scroll an element from A to B.
     *
     * Start and End should be 2 dimensional arrays
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start 2D array for start scroll left and top.
     * @param {Array.<number>} end 2D array for end scroll left and top.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Scroll extends goog.fx.dom.PredefinedEffect {
        /**
         * Creates an animation object that will scroll an element from A to B.
         *
         * Start and End should be 2 dimensional arrays
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {Array.<number>} start 2D array for start scroll left and top.
         * @param {Array.<number>} end 2D array for end scroll left and top.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.PredefinedEffect}
         * @constructor
         */
        constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
        /**
         * Animation event handler that will set the scroll position of an element.
         * @protected
         * @override
         */
        updateStyle(): void;
    }

    /**
     * Creates an animation object that will resize an element between two widths
     * and heights.
     *
     * Start and End should be 2 dimensional arrays
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start 2D array for start width and height.
     * @param {Array.<number>} end 2D array for end width and height.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Resize extends goog.fx.dom.PredefinedEffect {
        /**
         * Creates an animation object that will resize an element between two widths
         * and heights.
         *
         * Start and End should be 2 dimensional arrays
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {Array.<number>} start 2D array for start width and height.
         * @param {Array.<number>} end 2D array for end width and height.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.PredefinedEffect}
         * @constructor
         */
        constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
        /**
         * Animation event handler that will resize an element by setting its width and
         * height.
         * @protected
         * @override
         */
        updateStyle(): void;
    }

    /**
     * Creates an animation object that will resize an element between two widths
     *
     * Start and End should be numbers
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} start Start width.
     * @param {number} end End width.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class ResizeWidth extends goog.fx.dom.PredefinedEffect {
        /**
         * Creates an animation object that will resize an element between two widths
         *
         * Start and End should be numbers
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {number} start Start width.
         * @param {number} end End width.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.PredefinedEffect}
         * @constructor
         */
        constructor(element: Element, start: number, end: number, time: number, opt_acc?: Function);
    
        /**
         * Animation event handler that will resize an element by setting its width.
         * @protected
         * @override
         */
        updateStyle(): void;
    }

    /**
     * Creates an animation object that will resize an element between two heights
     *
     * Start and End should be numbers
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} start Start height.
     * @param {number} end End height.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class ResizeHeight extends goog.fx.dom.PredefinedEffect {
        /**
         * Creates an animation object that will resize an element between two heights
         *
         * Start and End should be numbers
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {number} start Start height.
         * @param {number} end End height.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.PredefinedEffect}
         * @constructor
         */
        constructor(element: Element, start: number, end: number, time: number, opt_acc?: Function);
    
        /**
         * Animation event handler that will resize an element by setting its height.
         * @protected
         * @override
         */
        updateStyle(): void;
    }

    /**
     * Creates an animation object that fades the opacity of an element between two
     * limits.
     *
     * Start and End should be floats between 0 and 1
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>|number} start 1D Array or Number with start opacity.
     * @param {Array.<number>|number} end 1D Array or Number for end opacity.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class Fade extends goog.fx.dom.PredefinedEffect {
        /**
         * Creates an animation object that fades the opacity of an element between two
         * limits.
         *
         * Start and End should be floats between 0 and 1
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {Array.<number>|number} start 1D Array or Number with start opacity.
         * @param {Array.<number>|number} end 1D Array or Number for end opacity.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.PredefinedEffect}
         * @constructor
         */
        constructor(element: Element, start: any /*number[]|number*/, end: any /*number[]|number*/, time: number, opt_acc?: Function);
    
        /**
         * Animation event handler that will set the opacity of an element.
         * @protected
         * @override
         */
        updateStyle(): void;
    
        /**
         * Animation event handler that will show the element.
         */
        show(): void;
    
        /**
         * Animation event handler that will hide the element
         */
        hide(): void;
    }

    /**
     * Fades an element out from full opacity to completely transparent.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Fade}
     * @constructor
     */
    class FadeOut extends goog.fx.dom.Fade {
        /**
         * Fades an element out from full opacity to completely transparent.
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.Fade}
         * @constructor
         */
        constructor(element: Element, time: number, opt_acc?: Function);
    }

    /**
     * Fades an element in from completely transparent to fully opacity.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Fade}
     * @constructor
     */
    class FadeIn extends goog.fx.dom.Fade {
        /**
         * Fades an element in from completely transparent to fully opacity.
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.Fade}
         * @constructor
         */
        constructor(element: Element, time: number, opt_acc?: Function);
    }

    /**
     * Fades an element out from full opacity to completely transparent and then
     * sets the display to 'none'
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Fade}
     * @constructor
     */
    class FadeOutAndHide extends goog.fx.dom.Fade {
        /**
         * Fades an element out from full opacity to completely transparent and then
         * sets the display to 'none'
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.Fade}
         * @constructor
         */
        constructor(element: Element, time: number, opt_acc?: Function);
    
        /** @override */
        onBegin(): void;
    
        /** @override */
        onEnd(): void;
    }

    /**
     * Sets an element's display to be visible and then fades an element in from
     * completely transparent to fully opaque.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.Fade}
     * @constructor
     */
    class FadeInAndShow extends goog.fx.dom.Fade {
        /**
         * Sets an element's display to be visible and then fades an element in from
         * completely transparent to fully opaque.
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.Fade}
         * @constructor
         */
        constructor(element: Element, time: number, opt_acc?: Function);
    
        /** @override */
        onBegin(): void;
    }

    /**
     * Provides a transformation of an elements background-color.
     *
     * Start and End should be 3D arrays representing R,G,B
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start 3D Array for RGB of start color.
     * @param {Array.<number>} end 3D Array for RGB of end color.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @extends {goog.fx.dom.PredefinedEffect}
     * @constructor
     */
    class BgColorTransform extends goog.fx.dom.PredefinedEffect {
        /**
         * Provides a transformation of an elements background-color.
         *
         * Start and End should be 3D arrays representing R,G,B
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {Array.<number>} start 3D Array for RGB of start color.
         * @param {Array.<number>} end 3D Array for RGB of end color.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @extends {goog.fx.dom.PredefinedEffect}
         * @constructor
         */
        constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
        /**
         * Animation event handler that will set the background-color of an element
         */
        setColor(): void;
    
        /** @override */
        updateStyle(): void;
    }

    /**
     * Provides a transformation of an elements color.
     *
     * @param {Element} element Dom Node to be used in the animation.
     * @param {Array.<number>} start 3D Array representing R,G,B.
     * @param {Array.<number>} end 3D Array representing R,G,B.
     * @param {number} time Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @constructor
     * @extends {goog.fx.dom.PredefinedEffect}
     */
    class ColorTransform extends goog.fx.dom.PredefinedEffect {
        /**
         * Provides a transformation of an elements color.
         *
         * @param {Element} element Dom Node to be used in the animation.
         * @param {Array.<number>} start 3D Array representing R,G,B.
         * @param {Array.<number>} end 3D Array representing R,G,B.
         * @param {number} time Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @constructor
         * @extends {goog.fx.dom.PredefinedEffect}
         */
        constructor(element: Element, start: number[], end: number[], time: number, opt_acc?: Function);
    
        /**
         * Animation event handler that will set the color of an element.
         * @protected
         * @override
         */
        updateStyle(): void;
    }
}

declare module 'goog.fx.Dragger' {

    /**
     * Creates copy of node being dragged.  This is a utility function to be used
     * wherever it is inappropriate for the original source to follow the mouse
     * cursor itself.
     *
     * @param {Element} sourceEl Element to copy.
     * @return {!Element} The clone of {@code sourceEl}.
     */
    function cloneNode(sourceEl: Element): Element;

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { EARLY_CANCEL, START, BEFOREDRAG, DRAG, END } 
}

declare module 'goog.fx' {

    /**
     * Enum to indicate the direction that a drag list grows.
     * @enum {number}
     */
    enum DragListDirection { DOWN, RIGHT, LEFT, RIGHT_2D, LEFT_2D } 

    /**
     * An interface for programmatic transition. Must extend
     * {@code goog.events.EventTarget}.
     * @interface
     */
    interface Transition {
        play: any /*missing*/;
        stop: any /*missing*/;
    }

    /**
     * Abstract class that provides reusable functionality for implementing drag
     * and drop functionality.
     *
     * This class also allows clients to define their own subtargeting function
     * so that drop areas can have finer granularity then a singe element. This is
     * accomplished by using a client provided function to map from element and
     * coordinates to a subregion id.
     *
     * This class can also be made aware of scrollable containers that contain
     * drop targets by calling addScrollableContainer. This will cause dnd to
     * take changing scroll positions into account while a drag is occuring.
     *
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class AbstractDragDrop extends goog.events.EventTarget {
        /**
         * Abstract class that provides reusable functionality for implementing drag
         * and drop functionality.
         *
         * This class also allows clients to define their own subtargeting function
         * so that drop areas can have finer granularity then a singe element. This is
         * accomplished by using a client provided function to map from element and
         * coordinates to a subregion id.
         *
         * This class can also be made aware of scrollable containers that contain
         * drop targets by calling addScrollableContainer. This will cause dnd to
         * take changing scroll positions into account while a drag is occuring.
         *
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor();
    
        /**
         * Set class to add to source elements being dragged.
         *
         * @param {string} className Class to be added.  Must be a single, valid
         *     classname.
         */
        setDragClass(className: string): void;
    
        /**
         * Set class to add to source elements.
         *
         * @param {string} className Class to be added.  Must be a single, valid
         *     classname.
         */
        setSourceClass(className: string): void;
    
        /**
         * Set class to add to target elements.
         *
         * @param {string} className Class to be added.  Must be a single, valid
         *     classname.
         */
        setTargetClass(className: string): void;
    
        /**
         * Whether the control has been initialized.
         *
         * @return {boolean} True if it's been initialized.
         */
        isInitialized(): boolean;
    
        /**
         * Add item to drag object.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, to be used as drag source/drop target.
         * @throws Error Thrown if called on instance of abstract class
         */
        addItem: any /*missing*/;
    
        /**
         * Associate drop target with drag element.
         *
         * @param {goog.fx.AbstractDragDrop} target Target to add.
         */
        addTarget(target: goog.fx.AbstractDragDrop): void;
    
        /**
         * Sets the SCROLL event target to make drag element follow scrolling.
         *
         * @param {EventTarget} scrollTarget The element that dispatches SCROLL events.
         */
        setScrollTarget(scrollTarget: EventTarget): void;
    
        /**
         * Initialize drag and drop functionality for sources/targets already added.
         * Sources/targets added after init has been called will initialize themselves
         * one by one.
         */
        init(): void;
    
        /**
         * Initializes a single item.
         *
         * @param {goog.fx.DragDropItem} item Item to initialize.
         * @protected
         */
        initItem(item: goog.fx.DragDropItem): void;
    
        /**
         * Called when removing an item. Removes event listeners and classes.
         *
         * @param {goog.fx.DragDropItem} item Item to dispose.
         * @protected
         */
        disposeItem(item: goog.fx.DragDropItem): void;
    
        /**
         * Removes all items.
         */
        removeItems(): void;
    
        /**
         * Starts a drag event for an item if the mouse button stays pressed and the
         * cursor moves a few pixels. Allows dragging of items without first having to
         * register them with addItem.
         *
         * @param {goog.events.BrowserEvent} event Mouse down event.
         * @param {goog.fx.DragDropItem} item Item that's being dragged.
         */
        maybeStartDrag(event: goog.events.BrowserEvent, item: goog.fx.DragDropItem): void;
    
        /**
         * Event handler that's used to start drag.
         *
         * @param {goog.events.BrowserEvent} event Mouse move event.
         * @param {goog.fx.DragDropItem} item Item that's being dragged.
         */
        startDrag(event: goog.events.BrowserEvent, item: goog.fx.DragDropItem): void;
    
        /**
         * Recalculates the geometry of this source's drag targets.  Call this
         * if the position or visibility of a drag target has changed during
         * a drag, or if targets are added or removed.
         *
         * TODO(user): this is an expensive operation;  more efficient APIs
         * may be necessary.
         */
        recalculateDragTargets(): void;
    
        /**
         * Recalculates the current scroll positions of scrollable containers and
         * allocates targets. Call this if the position of a container changed or if
         * targets are added or removed.
         */
        recalculateScrollableContainers(): void;
    
        /**
         * Creates the Dragger for the drag element.
         * @param {Element} sourceEl Drag source element.
         * @param {Element} el the element created by createDragElement().
         * @param {goog.events.BrowserEvent} event Mouse down event for start of drag.
         * @return {!goog.fx.Dragger} The new Dragger.
         * @protected
         */
        createDraggerFor(sourceEl: Element, el: Element, event: goog.events.BrowserEvent): goog.fx.Dragger;
    
        /**
         * Event handler that's used to stop drag. Fires a drop event if over a valid
         * target.
         *
         * @param {goog.fx.DragEvent} event Drag event.
         */
        endDrag(event: goog.fx.DragEvent): void;
    
        /**
         * Called after a drag operation has finished.
         *
         * @param {goog.fx.DragDropItem=} opt_dropTarget Target for successful drop.
         * @protected
         */
        afterEndDrag(opt_dropTarget?: goog.fx.DragDropItem): void;
    
        /**
         * Called once a drag operation has finished. Removes event listeners and
         * elements.
         *
         * @protected
         */
        disposeDrag(): void;
    
        /**
         * Makes drag and drop aware of a target container that could scroll mid drag.
         * @param {Element} element The scroll container.
         */
        addScrollableContainer(element: Element): void;
    
        /**
         * Removes all scrollable containers.
         */
        removeAllScrollableContainers(): void;
    
        /**
         * Set a function that provides subtargets. A subtargeting function
         * returns an arbitrary identifier for each subtarget of an element.
         * DnD code will generate additional drag over / out events when
         * switching from subtarget to subtarget. This is useful for instance
         * if you are interested if you are on the top half or the bottom half
         * of the element.
         * The provided function will be given the DragDropItem, box, x, y
         * box is the current window coordinates occupied by element
         * x, y is the mouse position in window coordinates
         *
         * @param {Function} f The new subtarget function.
         */
        setSubtargetFunction(f: Function): void;
    
        /**
         * Creates an element for the item being dragged.
         *
         * @param {Element} sourceEl Drag source element.
         * @return {Element} The new drag element.
         */
        createDragElement(sourceEl: Element): Element;
    
        /**
         * Returns the position for the drag element.
         *
         * @param {Element} el Drag source element.
         * @param {Element} dragEl The dragged element created by createDragElement().
         * @param {goog.events.BrowserEvent} event Mouse down event for start of drag.
         * @return {!goog.math.Coordinate} The position for the drag element.
         */
        getDragElementPosition(el: Element, dragEl: Element, event: goog.events.BrowserEvent): goog.math.Coordinate;
    
        /**
         * Returns the dragger object.
         *
         * @return {goog.fx.Dragger} The dragger object used by this drag and drop
         *     instance.
         */
        getDragger(): goog.fx.Dragger;
    
        /**
         * Generates an element to follow the cursor during dragging, given a drag
         * source element.  The default behavior is simply to clone the source element,
         * but this may be overridden in subclasses.  This method is called by
         * {@code createDragElement()} before the drag class is added.
         *
         * @param {Element} sourceEl Drag source element.
         * @return {Element} The new drag element.
         * @protected
         * @suppress {deprecated}
         */
        createDragElementInternal(sourceEl: Element): Element;
    
        /**
         * Calculates the position and dimension of a draggable element.
         *
         * @param {goog.fx.DragDropItem} item Item that's being dragged.
         * @param {Element} element The element to calculate the box.
         *
         * @return {!goog.math.Box} Box describing the position and dimension
         *     of element.
         * @protected
         */
        getElementBox(item: goog.fx.DragDropItem, element: Element): goog.math.Box;
    
        /**
         * Checks whatever a given point is inside a given box.
         *
         * @param {number} x Cursor position on the x-axis.
         * @param {number} y Cursor position on the y-axis.
         * @param {goog.math.Box} box Box to check position against.
         * @return {boolean} Whether the given point is inside {@code box}.
         * @protected
         * @deprecated Use goog.math.Box.contains.
         */
        isInside(x: number, y: number, box: goog.math.Box): boolean;
    
        /**
         * Gets the scroll distance as a coordinate object, using
         * the window of the current drag element's dom.
         * @return {!goog.math.Coordinate} Object with scroll offsets 'x' and 'y'.
         * @protected
         */
        getScrollPos(): goog.math.Coordinate;
    
        /**
         * Get the position of a drag event.
         * @param {goog.fx.DragEvent} event Drag event.
         * @return {goog.math.Coordinate} Position of the event.
         * @protected
         */
        getEventPosition(event: goog.fx.DragEvent): goog.math.Coordinate;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Object representing a drag and drop event.
     *
     * @param {string} type Event type.
     * @param {goog.fx.AbstractDragDrop} source Source drag drop object.
     * @param {goog.fx.DragDropItem} sourceItem Source item.
     * @param {goog.fx.AbstractDragDrop=} opt_target Target drag drop object.
     * @param {goog.fx.DragDropItem=} opt_targetItem Target item.
     * @param {Element=} opt_targetElement Target element.
     * @param {number=} opt_clientX X-Position relative to the screen.
     * @param {number=} opt_clientY Y-Position relative to the screen.
     * @param {number=} opt_x X-Position relative to the viewport.
     * @param {number=} opt_y Y-Position relative to the viewport.
     * @param {Object=} opt_subtarget The currently active subtarget.
     * @extends {goog.events.Event}
     * @constructor
     */
    class DragDropEvent extends goog.events.Event {
        /**
         * Object representing a drag and drop event.
         *
         * @param {string} type Event type.
         * @param {goog.fx.AbstractDragDrop} source Source drag drop object.
         * @param {goog.fx.DragDropItem} sourceItem Source item.
         * @param {goog.fx.AbstractDragDrop=} opt_target Target drag drop object.
         * @param {goog.fx.DragDropItem=} opt_targetItem Target item.
         * @param {Element=} opt_targetElement Target element.
         * @param {number=} opt_clientX X-Position relative to the screen.
         * @param {number=} opt_clientY Y-Position relative to the screen.
         * @param {number=} opt_x X-Position relative to the viewport.
         * @param {number=} opt_y Y-Position relative to the viewport.
         * @param {Object=} opt_subtarget The currently active subtarget.
         * @extends {goog.events.Event}
         * @constructor
         */
        constructor(type: string, source: goog.fx.AbstractDragDrop, sourceItem: goog.fx.DragDropItem, opt_target?: goog.fx.AbstractDragDrop, opt_targetItem?: goog.fx.DragDropItem, opt_targetElement?: Element, opt_clientX?: number, opt_clientY?: number, opt_x?: number, opt_y?: number, opt_subtarget?: Object);
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Class representing a source or target element for drag and drop operations.
     *
     * @param {Element|string} element Dom Node, or string representation of node
     *     id, to be used as drag source/drop target.
     * @param {Object=} opt_data Data associated with the source/target.
     * @throws Error If no element argument is provided or if the type is invalid
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class DragDropItem extends goog.events.EventTarget {
        /**
         * Class representing a source or target element for drag and drop operations.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, to be used as drag source/drop target.
         * @param {Object=} opt_data Data associated with the source/target.
         * @throws Error If no element argument is provided or if the type is invalid
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor(element: any /*Element|string*/, opt_data?: Object);
    
        /**
         * Get the data associated with the source/target.
         * @return {Object|null|undefined} Data associated with the source/target.
         */
        getData(): any /*Object|any (null)|any (undefined)*/;
    
        /**
         * Gets the element that is actually draggable given that the given target was
         * attempted to be dragged. This should be overriden when the element that was
         * given actually contains many items that can be dragged. From the target, you
         * can determine what element should actually be dragged.
         *
         * @param {Element} target The target that was attempted to be dragged.
         * @return {Element} The element that is draggable given the target. If
         *     none are draggable, this will return null.
         */
        getDraggableElement(target: Element): Element;
    
        /**
         * Gets the element that is currently being dragged.
         *
         * @return {Element} The element that is currently being dragged.
         */
        getCurrentDragElement(): Element;
    
        /**
         * Gets all the elements of this item that are potentially draggable/
         *
         * @return {!Array.<Element>} The draggable elements.
         */
        getDraggableElements(): Element[];
    
        /**
         * Sets the dragdrop to which this item belongs.
         * @param {goog.fx.AbstractDragDrop} parent The parent dragdrop.
         */
        setParent(parent: goog.fx.AbstractDragDrop): void;
    }

    /**
     * Constructor for an animation object.
     * @param {Array.<number>} start Array for start coordinates.
     * @param {Array.<number>} end Array for end coordinates.
     * @param {number} duration Length of animation in milliseconds.
     * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
     * @constructor
     * @implements {goog.fx.anim.Animated}
     * @implements {goog.fx.Transition}
     * @extends {goog.fx.TransitionBase}
     */
    class Animation extends goog.fx.TransitionBase implements goog.fx.anim.Animated {
        /**
         * Constructor for an animation object.
         * @param {Array.<number>} start Array for start coordinates.
         * @param {Array.<number>} end Array for end coordinates.
         * @param {number} duration Length of animation in milliseconds.
         * @param {Function=} opt_acc Acceleration function, returns 0-1 for inputs 0-1.
         * @constructor
         * @implements {goog.fx.anim.Animated}
         * @implements {goog.fx.Transition}
         * @extends {goog.fx.TransitionBase}
         */
        constructor(start: number[], end: number[], duration: number, opt_acc?: Function);
    
        /**
         * Sets whether the animation should use "right" rather than "left" to position
         * elements.  This is a temporary flag to allow clients to transition
         * to the new component at their convenience.  At some point "right" will be
         * used for RTL elements by default.
         * @param {boolean} useRightPositioningForRtl True if "right" should be used for
         *     positioning, false if "left" should be used for positioning.
         */
        enableRightPositioningForRtl(useRightPositioningForRtl: boolean): void;
    
        /**
         * Whether the animation should use "right" rather than "left" to position
         * elements.  This is a temporary flag to allow clients to transition
         * to the new component at their convenience.  At some point "right" will be
         * used for RTL elements by default.
         * @return {boolean} True if "right" should be used for positioning, false if
         *     "left" should be used for positioning.
         */
        isRightPositioningForRtlEnabled(): boolean;
    
        /**
         * Percent of the way through the animation.
         * @type {number}
         * @protected
         */
        progress: number;
    
        /**
         * Timestamp for when last frame was run.
         * @type {?number}
         * @protected
         */
        lastFrame: number;
    
        /**
         * Starts or resumes an animation.
         * @param {boolean=} opt_restart Whether to restart the
         *     animation from the beginning if it has been paused.
         * @return {boolean} Whether animation was started.
         * @override
         */
        play(opt_restart?: boolean): boolean;
    
        /**
         * Stops the animation.
         * @param {boolean=} opt_gotoEnd If true the animation will move to the
         *     end coords.
         * @override
         */
        stop(opt_gotoEnd?: boolean): void;
    
        /**
         * Pauses the animation (iff it's playing).
         * @override
         */
        pause(): void;
    
        /**
         * @return {number} The current progress of the animation, the number
         *     is between 0 and 1 inclusive.
         */
        getProgress(): number;
    
        /**
         * Sets the progress of the animation.
         * @param {number} progress The new progress of the animation.
         */
        setProgress(progress: number): void;
    
        /**
         * Disposes of the animation.  Stops an animation, fires a 'destroy' event and
         * then removes all the event handlers to clean up memory.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /**
         * Stops an animation, fires a 'destroy' event and then removes all the event
         * handlers to clean up memory.
         * @deprecated Use dispose() instead.
         */
        destroy(): void;
    
        /** @override */
        onAnimationFrame(): void;
    
        /**
         * Handles the actual iteration of the animation in a timeout
         * @param {number} now The current time.
         */
        cycle(now: number): void;
    
        /**
         * Dispatches the ANIMATE event. Sub classes should override this instead
         * of listening to the event.
         * @protected
         */
        onAnimate(): void;
    
        /**
         * Dispatches the DESTROY event. Sub classes should override this instead
         * of listening to the event.
         * @protected
         */
        onDestroy(): void;
    
        /** @override */
        dispatchAnimationEvent(): void;
    }

    /**
     * Class for an animation event object.
     * @param {string} type Event type.
     * @param {goog.fx.Animation} anim An animation object.
     * @constructor
     * @extends {goog.events.Event}
     */
    class AnimationEvent extends goog.events.Event {
        /**
         * Class for an animation event object.
         * @param {string} type Event type.
         * @param {goog.fx.Animation} anim An animation object.
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor(type: string, anim: goog.fx.Animation);
    
        /**
         * Returns the coordinates as integers (rounded to nearest integer).
         * @return {Array.<number>} An array of the coordinates rounded to
         *     the nearest integer.
         */
        coordsAsInts(): number[];
    }

    /**
     * Constructor for AnimationQueue object.
     *
     * @constructor
     * @extends {goog.fx.TransitionBase}
     */
    class AnimationQueue extends goog.fx.TransitionBase {
        /**
         * Constructor for AnimationQueue object.
         *
         * @constructor
         * @extends {goog.fx.TransitionBase}
         */
        constructor();
    
        /**
         * Pushes an Animation to the end of the queue.
         * @param {goog.fx.TransitionBase} animation The animation to add to the queue.
         */
        add(animation: goog.fx.TransitionBase): void;
    
        /**
         * Removes an Animation from the queue.
         * @param {goog.fx.Animation} animation The animation to remove.
         */
        remove(animation: goog.fx.Animation): void;
    
        /**
         * Handles the event that an animation has finished.
         * @param {goog.events.Event} e The finishing event.
         * @protected
         */
        onAnimationFinish: any /*missing*/;
    
        /**
         * Disposes of the animations.
         * @override
         */
        disposeInternal(): void;
    }

    /**
     * Constructor for AnimationParallelQueue object.
     * @constructor
     * @extends {goog.fx.AnimationQueue}
     */
    class AnimationParallelQueue extends goog.fx.AnimationQueue {
        /**
         * Constructor for AnimationParallelQueue object.
         * @constructor
         * @extends {goog.fx.AnimationQueue}
         */
        constructor();
    
        /** @override */
        play(): void;
    
        /** @override */
        pause(): void;
    
        /** @override */
        stop(): void;
    
        /** @override */
        onAnimationFinish(): void;
    }

    /**
     * Constructor for AnimationSerialQueue object.
     * @constructor
     * @extends {goog.fx.AnimationQueue}
     */
    class AnimationSerialQueue extends goog.fx.AnimationQueue {
        /**
         * Constructor for AnimationSerialQueue object.
         * @constructor
         * @extends {goog.fx.AnimationQueue}
         */
        constructor();
    
        /** @override */
        play(): void;
    
        /** @override */
        pause(): void;
    
        /** @override */
        stop(): void;
    
        /** @override */
        onAnimationFinish(): void;
    }

    /**
     * This animation class is used to animate a CSS sprite (moving a background
     * image).  This moves through a series of images in a single image sprite and
     * loops the animation when done.  You should set up the
     * {@code background-image} and size in a CSS rule for the relevant element.
     *
     * @param {Element} element The HTML element to animate the background for.
     * @param {goog.math.Size} size The size of one image in the image sprite.
     * @param {goog.math.Box} box The box describing the layout of the sprites to
     *     use in the large image.  The sprites can be position horizontally or
     *     vertically and using a box here allows the implementation to know which
     *     way to go.
     * @param {number} time The duration in milliseconds for one iteration of the
     *     animation.  For example, if the sprite contains 4 images and the duration
     *     is set to 400ms then each sprite will be displayed for 100ms.
     * @param {function(number) : number=} opt_acc Acceleration function,
     *    returns 0-1 for inputs 0-1.  This can be used to make certain frames be
     *    shown for a longer period of time.
     *
     * @constructor
     * @extends {goog.fx.Animation}
     * @final
     */
    class CssSpriteAnimation extends goog.fx.Animation {
        /**
         * This animation class is used to animate a CSS sprite (moving a background
         * image).  This moves through a series of images in a single image sprite and
         * loops the animation when done.  You should set up the
         * {@code background-image} and size in a CSS rule for the relevant element.
         *
         * @param {Element} element The HTML element to animate the background for.
         * @param {goog.math.Size} size The size of one image in the image sprite.
         * @param {goog.math.Box} box The box describing the layout of the sprites to
         *     use in the large image.  The sprites can be position horizontally or
         *     vertically and using a box here allows the implementation to know which
         *     way to go.
         * @param {number} time The duration in milliseconds for one iteration of the
         *     animation.  For example, if the sprite contains 4 images and the duration
         *     is set to 400ms then each sprite will be displayed for 100ms.
         * @param {function(number) : number=} opt_acc Acceleration function,
         *    returns 0-1 for inputs 0-1.  This can be used to make certain frames be
         *    shown for a longer period of time.
         *
         * @constructor
         * @extends {goog.fx.Animation}
         * @final
         */
        constructor(element: Element, size: goog.math.Size, box: goog.math.Box, time: number, opt_acc?: (_0: number) => number);
    
        /** @override */
        onAnimate(): void;
    
        /** @override */
        onFinish(): void;
    
        /**
         * Clears the background position style set directly on the element
         * by the animation. Allows to apply CSS styling for background position on the
         * same element when the sprite animation is not runniing.
         */
        clearSpritePosition(): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Drag/drop implementation for creating drag sources/drop targets consisting of
     * multiple HTML Elements (items). All items share the same drop target(s) but
     * can be dragged individually.
     *
     * @extends {goog.fx.AbstractDragDrop}
     * @constructor
     */
    class DragDropGroup extends goog.fx.AbstractDragDrop {
        /**
         * Drag/drop implementation for creating drag sources/drop targets consisting of
         * multiple HTML Elements (items). All items share the same drop target(s) but
         * can be dragged individually.
         *
         * @extends {goog.fx.AbstractDragDrop}
         * @constructor
         */
        constructor();
    
        /**
         * Add item to drag object.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, to be used as drag source/drop target.
         * @param {Object=} opt_data Data associated with the source/target.
         * @throws Error If no element argument is provided or if the type is
         *     invalid
         * @override
         */
        addItem(element: any /*Element|string*/, opt_data?: Object): void;
    
        /**
         * Add DragDropItem to drag object.
         *
         * @param {goog.fx.DragDropItem} item DragDropItem being added to the
         *     drag object.
         * @throws Error If no element argument is provided or if the type is
         *     invalid
         */
        addDragDropItem(item: goog.fx.DragDropItem): void;
    
        /**
         * Remove item from drag object.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, that was previously added with addItem().
         */
        removeItem(element: any /*Element|string*/): void;
    
        /**
         * Marks the supplied list of items as selected. A drag operation for any of the
         * selected items will affect all of them.
         *
         * @param {Array.<goog.fx.DragDropItem>} list List of items to select or null to
         *     clear selection.
         *
         * TODO(eae): Not yet implemented.
         */
        setSelection(list: goog.fx.DragDropItem[]): void;
    }

    /**
     * Drag/drop implementation for creating drag sources/drop targets consisting of
     * a single HTML Element.
     *
     * @param {Element|string} element Dom Node, or string representation of node
     *     id, to be used as drag source/drop target.
     * @param {Object=} opt_data Data associated with the source/target.
     * @throws Error If no element argument is provided or if the type is invalid
     * @extends {goog.fx.AbstractDragDrop}
     * @constructor
     */
    class DragDrop extends goog.fx.AbstractDragDrop {
        /**
         * Drag/drop implementation for creating drag sources/drop targets consisting of
         * a single HTML Element.
         *
         * @param {Element|string} element Dom Node, or string representation of node
         *     id, to be used as drag source/drop target.
         * @param {Object=} opt_data Data associated with the source/target.
         * @throws Error If no element argument is provided or if the type is invalid
         * @extends {goog.fx.AbstractDragDrop}
         * @constructor
         */
        constructor(element: any /*Element|string*/, opt_data?: Object);
    }

    /**
     * A class that allows mouse or touch-based dragging (moving) of an element
     *
     * @param {Element} target The element that will be dragged.
     * @param {Element=} opt_handle An optional handle to control the drag, if null
     *     the target is used.
     * @param {goog.math.Rect=} opt_limits Object containing left, top, width,
     *     and height.
     *
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class Dragger extends goog.events.EventTarget {
        /**
         * A class that allows mouse or touch-based dragging (moving) of an element
         *
         * @param {Element} target The element that will be dragged.
         * @param {Element=} opt_handle An optional handle to control the drag, if null
         *     the target is used.
         * @param {goog.math.Rect=} opt_limits Object containing left, top, width,
         *     and height.
         *
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor(target: Element, opt_handle?: Element, opt_limits?: goog.math.Rect);
    
        /**
         * Reference to drag target element.
         * @type {Element}
         */
        target: Element;
    
        /**
         * Reference to the handler that initiates the drag.
         * @type {Element}
         */
        handle: Element;
    
        /**
         * Object representing the limits of the drag region.
         * @type {goog.math.Rect}
         */
        limits: goog.math.Rect;
    
        /**
         * Current x position of mouse or touch relative to viewport.
         * @type {number}
         */
        clientX: number;
    
        /**
         * Current y position of mouse or touch relative to viewport.
         * @type {number}
         */
        clientY: number;
    
        /**
         * Current x position of mouse or touch relative to screen. Deprecated because
         * it doesn't take into affect zoom level or pixel density.
         * @type {number}
         * @deprecated Consider switching to clientX instead.
         */
        screenX: number;
    
        /**
         * Current y position of mouse or touch relative to screen. Deprecated because
         * it doesn't take into affect zoom level or pixel density.
         * @type {number}
         * @deprecated Consider switching to clientY instead.
         */
        screenY: number;
    
        /**
         * The x position where the first mousedown or touchstart occurred.
         * @type {number}
         */
        startX: number;
    
        /**
         * The y position where the first mousedown or touchstart occurred.
         * @type {number}
         */
        startY: number;
    
        /**
         * Current x position of drag relative to target's parent.
         * @type {number}
         */
        deltaX: number;
    
        /**
         * Current y position of drag relative to target's parent.
         * @type {number}
         */
        deltaY: number;
    
        /**
         * The current page scroll value.
         * @type {goog.math.Coordinate}
         */
        pageScroll: goog.math.Coordinate;
    
        /**
         * Turns on/off true RTL behavior.  This should be called immediately after
         * construction.  This is a temporary flag to allow clients to transition
         * to the new component at their convenience.  At some point true will be the
         * default.
         * @param {boolean} useRightPositioningForRtl True if "right" should be used for
         *     positioning, false if "left" should be used for positioning.
         */
        enableRightPositioningForRtl(useRightPositioningForRtl: boolean): void;
    
        /**
         * Returns the event handler, intended for subclass use.
         * @return {goog.events.EventHandler.<T>} The event handler.
         * @this T
         * @template T
         */
        getHandler(): goog.events.EventHandler<T>;
    
        /**
         * Sets (or reset) the Drag limits after a Dragger is created.
         * @param {goog.math.Rect?} limits Object containing left, top, width,
         *     height for new Dragger limits. If target is right-to-left and
         *     enableRightPositioningForRtl(true) is called, then rect is interpreted as
         *     right, top, width, and height.
         */
        setLimits(limits: goog.math.Rect): void;
    
        /**
         * Sets the distance the user has to drag the element before a drag operation is
         * started.
         * @param {number} distance The number of pixels after which a mousedown and
         *     move is considered a drag.
         */
        setHysteresis(distance: number): void;
    
        /**
         * Gets the distance the user has to drag the element before a drag operation is
         * started.
         * @return {number} distance The number of pixels after which a mousedown and
         *     move is considered a drag.
         */
        getHysteresis(): number;
    
        /**
         * Sets the SCROLL event target to make drag element follow scrolling.
         *
         * @param {EventTarget} scrollTarget The event target that dispatches SCROLL
         *     events.
         */
        setScrollTarget(scrollTarget: EventTarget): void;
    
        /**
         * Enables cancelling of built-in IE drag events.
         * @param {boolean} cancelIeDragStart Whether to enable cancelling of IE
         *     dragstart event.
         */
        setCancelIeDragStart(cancelIeDragStart: boolean): void;
    
        /**
         * @return {boolean} Whether the dragger is enabled.
         */
        getEnabled(): boolean;
    
        /**
         * Set whether dragger is enabled
         * @param {boolean} enabled Whether dragger is enabled.
         */
        setEnabled(enabled: boolean): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Event handler that is used to start the drag
         * @param {goog.events.BrowserEvent} e Event object.
         */
        startDrag(e: goog.events.BrowserEvent): void;
    
        /**
         * Sets up event handlers when dragging starts.
         * @protected
         */
        setupDragHandlers(): void;
    
        /**
         * Event handler that is used to end the drag.
         * @param {goog.events.BrowserEvent} e Event object.
         * @param {boolean=} opt_dragCanceled Whether the drag has been canceled.
         */
        endDrag(e: goog.events.BrowserEvent, opt_dragCanceled?: boolean): void;
    
        /**
         * Event handler that is used to end the drag by cancelling it.
         * @param {goog.events.BrowserEvent} e Event object.
         */
        endDragCancel(e: goog.events.BrowserEvent): void;
    
        /**
         * @param {goog.events.BrowserEvent} e The closure object
         *     representing the browser event that caused a drag event.
         * @param {number} x The new horizontal position for the drag element.
         * @param {number} y The new vertical position for the drag element.
         * @param {boolean} dragFromScroll Whether dragging was caused by scrolling
         *     the associated scroll target.
         * @protected
         */
        doDrag(e: goog.events.BrowserEvent, x: number, y: number, dragFromScroll: boolean): void;
    
        /**
         * Returns the 'real' x after limits are applied (allows for some
         * limits to be undefined).
         * @param {number} x X-coordinate to limit.
         * @return {number} The 'real' X-coordinate after limits are applied.
         */
        limitX(x: number): number;
    
        /**
         * Returns the 'real' y after limits are applied (allows for some
         * limits to be undefined).
         * @param {number} y Y-coordinate to limit.
         * @return {number} The 'real' Y-coordinate after limits are applied.
         */
        limitY(y: number): number;
    
        /**
         * Overridable function for computing the initial position of the target
         * before dragging begins.
         * @protected
         */
        computeInitialPosition(): void;
    
        /**
         * Overridable function for handling the default action of the drag behaviour.
         * Normally this is simply moving the element to x,y though in some cases it
         * might be used to resize the layer.  This is basically a shortcut to
         * implementing a default ondrag event handler.
         * @param {number} x X-coordinate for target element. In right-to-left, x this
         *     is the number of pixels the target should be moved to from the right.
         * @param {number} y Y-coordinate for target element.
         */
        defaultAction(x: number, y: number): void;
    
        /**
         * @return {boolean} Whether the dragger is currently in the midst of a drag.
         */
        isDragging(): boolean;
    }

    /**
     * Object representing a drag event
     * @param {string} type Event type.
     * @param {goog.fx.Dragger} dragobj Drag object initiating event.
     * @param {number} clientX X-coordinate relative to the viewport.
     * @param {number} clientY Y-coordinate relative to the viewport.
     * @param {goog.events.BrowserEvent} browserEvent The closure object
     *   representing the browser event that caused this drag event.
     * @param {number=} opt_actX Optional actual x for drag if it has been limited.
     * @param {number=} opt_actY Optional actual y for drag if it has been limited.
     * @param {boolean=} opt_dragCanceled Whether the drag has been canceled.
     * @constructor
     * @extends {goog.events.Event}
     */
    class DragEvent extends goog.events.Event {
        /**
         * Object representing a drag event
         * @param {string} type Event type.
         * @param {goog.fx.Dragger} dragobj Drag object initiating event.
         * @param {number} clientX X-coordinate relative to the viewport.
         * @param {number} clientY Y-coordinate relative to the viewport.
         * @param {goog.events.BrowserEvent} browserEvent The closure object
         *   representing the browser event that caused this drag event.
         * @param {number=} opt_actX Optional actual x for drag if it has been limited.
         * @param {number=} opt_actY Optional actual y for drag if it has been limited.
         * @param {boolean=} opt_dragCanceled Whether the drag has been canceled.
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor(type: string, dragobj: goog.fx.Dragger, clientX: number, clientY: number, browserEvent: goog.events.BrowserEvent, opt_actX?: number, opt_actY?: number, opt_dragCanceled?: boolean);
    }

    /**
     * A class representing a group of one or more "drag lists" with items that can
     * be dragged within them and between them.
     *
     * Example usage:
     *   var dragListGroup = new goog.fx.DragListGroup();
     *   dragListGroup.setDragItemHandleHoverClass(className1, className2);
     *   dragListGroup.setDraggerElClass(className3);
     *   dragListGroup.addDragList(vertList, goog.fx.DragListDirection.DOWN);
     *   dragListGroup.addDragList(horizList, goog.fx.DragListDirection.RIGHT);
     *   dragListGroup.init();
     *
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class DragListGroup extends goog.events.EventTarget {
        /**
         * A class representing a group of one or more "drag lists" with items that can
         * be dragged within them and between them.
         *
         * Example usage:
         *   var dragListGroup = new goog.fx.DragListGroup();
         *   dragListGroup.setDragItemHandleHoverClass(className1, className2);
         *   dragListGroup.setDraggerElClass(className3);
         *   dragListGroup.addDragList(vertList, goog.fx.DragListDirection.DOWN);
         *   dragListGroup.addDragList(horizList, goog.fx.DragListDirection.RIGHT);
         *   dragListGroup.init();
         *
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor();
    
        /**
         * Sets the property of the currDragItem that it is always displayed in the
         * list.
         */
        setIsCurrDragItemAlwaysDisplayed(): void;
    
        /**
         * Sets the private property updateWhileDragging_ to false. This disables the
         * update of the position of the currDragItem while dragging. It will only be
         * placed to its new location once the drag ends.
         */
        setNoUpdateWhileDragging(): void;
    
        /**
         * Sets the distance the user has to drag the element before a drag operation
         * is started.
         * @param {number} distance The number of pixels after which a mousedown and
         *     move is considered a drag.
         */
        setHysteresis(distance: number): void;
    
        /**
         * @return {number} distance The number of pixels after which a mousedown and
         *     move is considered a drag.
         */
        getHysteresis(): number;
    
        /**
         * Adds a drag list to this DragListGroup.
         * All calls to this method must happen before the call to init().
         * Remember that all child nodes (except text nodes) will be made draggable to
         * any other drag list in this group.
         *
         * @param {Element} dragListElement Must be a container for a list of items
         *     that should all be made draggable.
         * @param {goog.fx.DragListDirection} growthDirection The direction that this
         *     drag list grows in (i.e. if an item is appended to the DOM, the list's
         *     bounding box expands in this direction).
         * @param {boolean=} opt_unused Unused argument.
         * @param {string=} opt_dragHoverClass CSS class to apply to this drag list when
         *     the draggerEl hovers over it during a drag action.  If present, must be a
         *     single, valid classname (not a string of space-separated classnames).
         */
        addDragList(dragListElement: Element, growthDirection: goog.fx.DragListDirection, opt_unused?: boolean, opt_dragHoverClass?: string): void;
    
        /**
         * Sets a user-supplied function used to get the "handle" element for a drag
         * item. The function must accept exactly one argument. The argument may be
         * any drag item element.
         *
         * If not set, the default implementation uses the whole drag item as the
         * handle.
         *
         * @param {function(Element): Element} getHandleForDragItemFn A function that,
         *     given any drag item, returns a reference to its "handle" element
         *     (which may be the drag item element itself).
         */
        setFunctionToGetHandleForDragItem(getHandleForDragItemFn: (_0: Element) => Element): void;
    
        /**
         * Sets a user-supplied CSS class to add to a drag item on hover (not during a
         * drag action).
         * @param {...!string} var_args The CSS class or classes.
         */
        setDragItemHoverClass(...var_args: string[]): void;
    
        /**
         * Sets a user-supplied CSS class to add to a drag item handle on hover (not
         * during a drag action).
         * @param {...!string} var_args The CSS class or classes.
         */
        setDragItemHandleHoverClass(...var_args: string[]): void;
    
        /**
         * Sets a user-supplied CSS class to add to the current drag item (during a
         * drag action).
         *
         * If not set, the default behavior adds visibility:hidden to the current drag
         * item so that it is a block of empty space in the hover drag list (if any).
         * If this class is set by the user, then the default behavior does not happen
         * (unless, of course, the class also contains visibility:hidden).
         *
         * @param {...!string} var_args The CSS class or classes.
         */
        setCurrDragItemClass(...var_args: string[]): void;
    
        /**
         * Sets a user-supplied CSS class to add to the clone of the current drag item
         * that's actually being dragged around (during a drag action).
         * @param {string} draggerElClass The CSS class.
         */
        setDraggerElClass(draggerElClass: string): void;
    
        /**
         * Performs the initial setup to make all items in all lists draggable.
         */
        init(): void;
    
        /**
         * Adds a single item to the given drag list and sets up the drag listeners for
         * it.
         * If opt_index is specified the item is inserted at this index, otherwise the
         * item is added as the last child of the list.
         *
         * @param {!Element} list The drag list where to add item to.
         * @param {!Element} item The new element to add.
         * @param {number=} opt_index Index where to insert the item in the list. If not
         * specified item is inserted as the last child of list.
         */
        addItemToDragList(list: Element, item: Element, opt_index?: number): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Listens for drag events on the given drag item. This method is currently used
         * to initialize drag items.
         *
         * @param {Element} dragItem the element to initialize. This element has to be
         * in one of the drag lists.
         * @protected
         */
        listenForDragEvents(dragItem: Element): void;
    
        /**
         * Generates an element to follow the cursor during dragging, given a drag
         * source element.  The default behavior is simply to clone the source element,
         * but this may be overridden in subclasses.  This method is called by
         * {@code createDragElement()} before the drag class is added.
         *
         * @param {Element} sourceEl Drag source element.
         * @return {Element} The new drag element.
         * @protected
         * @suppress {deprecated}
         */
        createDragElementInternal(sourceEl: Element): Element;
    
        /**
         * Updates the value of currHoverItem_.
         *
         * This method is used for insertion only when updateWhileDragging_ is false.
         * The below implementation is the basic one. This method can be extended by
         * a subclass to support changes to hovered item (eg: highlighting). Parametr
         * opt_draggerElCenter can be used for more sophisticated effects.
         *
         * @param {Element} hoverNextItem element of the list that is hovered over.
         * @param {goog.math.Coordinate=} opt_draggerElCenter current position of
         *     the dragged element.
         * @protected
         */
        updateCurrHoverItem(hoverNextItem: Element, opt_draggerElCenter?: goog.math.Coordinate): void;
    
        /**
         * Inserts the currently dragged item in its new place.
         *
         * This method is used for insertion only when updateWhileDragging_ is false
         * (otherwise there is no need for that). In the basic implementation
         * the element is inserted before the currently hovered over item (this can
         * be changed by overriding the method in subclasses).
         *
         * @protected
         */
        insertCurrHoverItem(): void;
    }

    /**
     * The event object dispatched by DragListGroup.
     * The fields draggerElCenter, hoverList, and hoverNextItem are only available
     * for the BEFOREDRAGMOVE and DRAGMOVE events.
     *
     * @param {string} type The event type string.
     * @param {goog.fx.DragListGroup} dragListGroup A reference to the associated
     *     DragListGroup object.
     * @param {goog.events.BrowserEvent|goog.fx.DragEvent} event The event fired
     *     by the browser or fired by the dragger.
     * @param {Element} currDragItem The current drag item being moved.
     * @param {Element} draggerEl The clone of the current drag item that's actually
     *     being dragged around.
     * @param {goog.fx.Dragger} dragger The dragger object.
     * @param {goog.math.Coordinate=} opt_draggerElCenter The current center
     *     position of the draggerEl.
     * @param {Element=} opt_hoverList The current drag list that's being hovered
     *     over, or null if the center of draggerEl is outside of any drag lists.
     *     If not null and the drag action ends right now, then currDragItem will
     *     end up in this list.
     * @param {Element=} opt_hoverNextItem The current next item in the hoverList
     *     that the draggerEl is hovering over. (I.e. If the drag action ends
     *     right now, then this item would become the next item after the new
     *     location of currDragItem.) May be null if not applicable or if
     *     currDragItem would be added to the end of hoverList.
     * @constructor
     * @extends {goog.events.Event}
     */
    class DragListGroupEvent extends goog.events.Event {
        /**
         * The event object dispatched by DragListGroup.
         * The fields draggerElCenter, hoverList, and hoverNextItem are only available
         * for the BEFOREDRAGMOVE and DRAGMOVE events.
         *
         * @param {string} type The event type string.
         * @param {goog.fx.DragListGroup} dragListGroup A reference to the associated
         *     DragListGroup object.
         * @param {goog.events.BrowserEvent|goog.fx.DragEvent} event The event fired
         *     by the browser or fired by the dragger.
         * @param {Element} currDragItem The current drag item being moved.
         * @param {Element} draggerEl The clone of the current drag item that's actually
         *     being dragged around.
         * @param {goog.fx.Dragger} dragger The dragger object.
         * @param {goog.math.Coordinate=} opt_draggerElCenter The current center
         *     position of the draggerEl.
         * @param {Element=} opt_hoverList The current drag list that's being hovered
         *     over, or null if the center of draggerEl is outside of any drag lists.
         *     If not null and the drag action ends right now, then currDragItem will
         *     end up in this list.
         * @param {Element=} opt_hoverNextItem The current next item in the hoverList
         *     that the draggerEl is hovering over. (I.e. If the drag action ends
         *     right now, then this item would become the next item after the new
         *     location of currDragItem.) May be null if not applicable or if
         *     currDragItem would be added to the end of hoverList.
         * @constructor
         * @extends {goog.events.Event}
         */
        constructor(type: string, dragListGroup: goog.fx.DragListGroup, event: any /*goog.events.BrowserEvent|goog.fx.DragEvent*/, currDragItem: Element, draggerEl: Element, dragger: goog.fx.Dragger, opt_draggerElCenter?: goog.math.Coordinate, opt_hoverList?: Element, opt_hoverNextItem?: Element);
    }

    /**
     * A scroll support class. Currently this class will automatically scroll
     * a scrollable container node and scroll it by a fixed amount at a timed
     * interval when the mouse is moved above or below the container or in vertical
     * margin areas. Intended for use in drag and drop. This could potentially be
     * made more general and could support horizontal scrolling.
     *
     * @param {Element} containerNode A container that can be scrolled.
     * @param {number=} opt_margin Optional margin to use while scrolling.
     * @param {boolean=} opt_externalMouseMoveTracking Whether mouse move events
     *     are tracked externally by the client object which calls the mouse move
     *     event handler, useful when events are generated for more than one source
     *     element and/or are not real mousemove events.
     * @constructor
     * @extends {goog.Disposable}
     * @see ../demos/dragscrollsupport.html
     */
    class DragScrollSupport extends goog.Disposable {
        /**
         * A scroll support class. Currently this class will automatically scroll
         * a scrollable container node and scroll it by a fixed amount at a timed
         * interval when the mouse is moved above or below the container or in vertical
         * margin areas. Intended for use in drag and drop. This could potentially be
         * made more general and could support horizontal scrolling.
         *
         * @param {Element} containerNode A container that can be scrolled.
         * @param {number=} opt_margin Optional margin to use while scrolling.
         * @param {boolean=} opt_externalMouseMoveTracking Whether mouse move events
         *     are tracked externally by the client object which calls the mouse move
         *     event handler, useful when events are generated for more than one source
         *     element and/or are not real mousemove events.
         * @constructor
         * @extends {goog.Disposable}
         * @see ../demos/dragscrollsupport.html
         */
        constructor(containerNode: Element, opt_margin?: number, opt_externalMouseMoveTracking?: boolean);
    
        /**
         * Sets whether scrolling should be constrained to happen only when the cursor
         * is inside the container node.
         * NOTE: If a margin is not set, then it does not make sense to
         * contain the scroll, because in that case scroll will never be triggered.
         * @param {boolean} constrain Whether scrolling should be constrained to happen
         *     only when the cursor is inside the container node.
         */
        setConstrainScroll(constrain: boolean): void;
    
        /**
         * Sets whether horizontal scrolling is allowed.
         * @param {boolean} scrolling Whether horizontal scrolling is allowed.
         */
        setHorizontalScrolling(scrolling: boolean): void;
    
        /**
         * Handler for mouse moves events.
         * @param {goog.events.Event} event Mouse move event.
         */
        onMouseMove(event: goog.events.Event): void;
    
        /**
         * Calculates scroll delta.
         *
         * @param {number} coordinate Current mouse pointer coordinate.
         * @param {number} min The coordinate value below which scrolling up should be
         *     started.
         * @param {number} rangeLength The length of the range in which scrolling should
         *     be disabled and above which scrolling down should be started.
         * @return {number} The calculated scroll delta.
         * @protected
         */
        calculateScrollDelta(coordinate: number, min: number, rangeLength: number): number;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Constructor for a transition object.
     *
     * @constructor
     * @implements {goog.fx.Transition}
     * @extends {goog.events.EventTarget}
     */
    class TransitionBase extends goog.events.EventTarget implements goog.fx.Transition {
        /**
         * Constructor for a transition object.
         *
         * @constructor
         * @implements {goog.fx.Transition}
         * @extends {goog.events.EventTarget}
         */
        constructor();
    
        /**
         * Plays the animation.
         *
         * @param {boolean=} opt_restart Optional parameter to restart the animation.
         * @return {boolean} True iff the animation was started.
         * @override
         */
        play: any /*missing*/;
    
        /**
         * Stops the animation.
         *
         * @param {boolean=} opt_gotoEnd Optional boolean parameter to go the the end of
         *     the animation.
         * @override
         */
        stop: any /*missing*/;
    
        /**
         * Pauses the animation.
         */
        pause: any /*missing*/;
    
        /**
         * Returns the current state of the animation.
         * @return {goog.fx.TransitionBase.State} State of the animation.
         */
        getStateInternal(): goog.fx.TransitionBase.State;
    
        /**
         * Sets the current state of the animation to playing.
         * @protected
         */
        setStatePlaying(): void;
    
        /**
         * Sets the current state of the animation to paused.
         * @protected
         */
        setStatePaused(): void;
    
        /**
         * Sets the current state of the animation to stopped.
         * @protected
         */
        setStateStopped(): void;
    
        /**
         * @return {boolean} True iff the current state of the animation is playing.
         */
        isPlaying(): boolean;
    
        /**
         * @return {boolean} True iff the current state of the animation is paused.
         */
        isPaused(): boolean;
    
        /**
         * @return {boolean} True iff the current state of the animation is stopped.
         */
        isStopped(): boolean;
    
        /**
         * Dispatches the BEGIN event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onBegin(): void;
    
        /**
         * Dispatches the END event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onEnd(): void;
    
        /**
         * Dispatches the FINISH event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onFinish(): void;
    
        /**
         * Dispatches the PAUSE event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onPause(): void;
    
        /**
         * Dispatches the PLAY event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onPlay(): void;
    
        /**
         * Dispatches the RESUME event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onResume(): void;
    
        /**
         * Dispatches the STOP event. Sub classes should override this instead
         * of listening to the event, and call this instead of dispatching the event.
         * @protected
         */
        onStop(): void;
    
        /**
         * Dispatches an event object for the current animation.
         * @param {string} type Event type that will be dispatched.
         * @protected
         */
        dispatchAnimationEvent(type: string): void;
    }
}

declare module 'goog.fx.DragListGroup' {

    /**
     * Events dispatched by this class.
     * @type {Object}
     */
    var EventType: Object;
}

declare module 'goog.fx.DragScrollSupport' {

    /**
     * The suggested scrolling margin.
     * @type {number}
     */
    var MARGIN: number;
}

declare module 'goog.fx.easing' {

    /**
     * Ease in - Start slow and speed up.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     */
    function easeIn(t: number): number;

    /**
     * Ease out - Start fastest and slows to a stop.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     */
    function easeOut(t: number): number;

    /**
     * Ease out long - Start fastest and slows to a stop with a long ease.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     */
    function easeOutLong(t: number): number;

    /**
     * Ease in and out - Start slow, speed up, then slow down.
     * @param {number} t Input between 0 and 1.
     * @return {number} Output between 0 and 1.
     */
    function inAndOut(t: number): number;
}

declare module 'goog.fx.TransitionBase' {

    /**
     * Enum for the possible states of an animation.
     * @enum {number}
     */
    enum State { STOPPED, PAUSED, PLAYING } 
}

declare module 'goog.fx.Transition' {

    /**
     * Transition event types.
     * @enum {string}
     */
    enum EventType { PLAY, BEGIN, RESUME, END, STOP, FINISH, PAUSE } 
}

