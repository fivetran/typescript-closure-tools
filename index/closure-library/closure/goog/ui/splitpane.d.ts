/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="../math/size.d.ts" />

declare module goog.ui {

    class SplitPane extends SplitPane__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class SplitPane__Class extends goog.ui.Component__Class  { 
    
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
     * Z indices for iframe overlay and splitter handle.
     * @enum {number}
     * @private
     */
    enum IframeOverlayIndex_ { HIDDEN, OVERLAY, SPLITTER_HANDLE } 

    /**
    * Orientation values for the splitpane.
    * @enum {string}
    */
    enum Orientation { HORIZONTAL, VERTICAL } 
}
