/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/fx/dragger.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />

declare module goog.ui {

    /**
     * A left/right up/down Container SplitPane.
     * Create SplitPane with two goog.ui.Component opjects to split.
     * TODO(user): Support minimum splitpane size.
     * TODO(user): Allow component change/orientation after init.
     * TODO(user): Support hiding either side of handle (plus handle).
     * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
     *
     * @param {goog.ui.Component} firstComponent Left or Top component.
     * @param {goog.ui.Component} secondComponent Right or Bottom component.
     * @param {goog.ui.SplitPane.Orientation} orientation SplitPane orientation.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class SplitPane extends goog.ui._Component {
        /**
         * A left/right up/down Container SplitPane.
         * Create SplitPane with two goog.ui.Component opjects to split.
         * TODO(user): Support minimum splitpane size.
         * TODO(user): Allow component change/orientation after init.
         * TODO(user): Support hiding either side of handle (plus handle).
         * TODO(user): Look at setBorderBoxSize fixes and revist borderwidth code.
         *
         * @param {goog.ui.Component} firstComponent Left or Top component.
         * @param {goog.ui.Component} secondComponent Right or Bottom component.
         * @param {goog.ui.SplitPane.Orientation} orientation SplitPane orientation.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(firstComponent: goog.ui.Component, secondComponent: goog.ui.Component, orientation: goog.ui.SplitPane.Orientation, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the initial size of the left or top component.
         * @param {number} size The size in Pixels of the container.
         */
        setInitialSize(size: number): void;
    
        /**
         * Sets the SplitPane handle size.
         * TODO(user): Make sure this works after initialization.
         * @param {number} size The size of the handle in pixels.
         */
        setHandleSize(size: number): void;
    
        /**
         * Sets whether we resize on handle drag.
         * @param {boolean} continuous The continuous resize value.
         */
        setContinuousResize(continuous: boolean): void;
    
        /**
         * Returns whether the orientation for the split pane is vertical
         * or not.
         * @return {boolean} True if the orientation is vertical, false otherwise.
         */
        isVertical(): boolean;
    
        /**
         * Sets the orientation class for the split pane handle.
         * @protected
         */
        setOrientationClassForHandle(): void;
    
        /**
         * Sets the orientation of the split pane.
         * @param {goog.ui.SplitPane.Orientation} orientation SplitPane orientation.
         */
        setOrientation(orientation: goog.ui.SplitPane.Orientation): void;
    
        /**
         * Gets the orientation of the split pane.
         * @return {goog.ui.SplitPane.Orientation} The orientation.
         */
        getOrientation(): goog.ui.SplitPane.Orientation;
    
        /**
         * @return {?number} The size of the left/top component.
         */
        getFirstComponentSize(): number;
    
        /**
         * Set the size of the left/top component, and resize the other component based
         * on that size and handle size.
         * @param {?number=} opt_size The size of the top or left, in pixels.
         */
        setFirstComponentSize(opt_size?: number): void;
    
        /**
         * Set the size of the splitpane.  This is usually called by the controlling
         * application.  This will set the SplitPane BorderBoxSize.
         * @param {goog.math.Size} size The size to set the splitpane.
         */
        setSize(size: goog.math.Size): void;
    }
}

declare module goog.ui.SplitPane {

    /**
     * Events.
     * @enum {string}
     */
    enum EventType { HANDLE_DRAG, HANDLE_DRAG_END, HANDLE_SNAP } 

    /**
    * Orientation values for the splitpane.
    * @enum {string}
    */
    enum Orientation { HORIZONTAL, VERTICAL } 
}

