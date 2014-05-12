/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />

declare module svgpan {

    class SvgPan extends SvgPan.__Class { }
    module SvgPan {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
            /**
             * Instantiates an SvgPan object.
             * @param {string=} opt_graphElementId The id of the graph element.
             * @param {Element=} opt_root An optional document root.
             * @constructor
             * @extends {goog.Disposable}
             */
            constructor(opt_graphElementId?: string, opt_root?: Element);
    
            /**
             * Enables/disables panning the entire SVG (default = true).
             * @param {boolean} enabled Whether or not to allow panning.
             */
            setPanEnabled(enabled: boolean): void;
    
            /**
             * Enables/disables zooming (default = true).
             * @param {boolean} enabled Whether or not to allow zooming (default = true).
             */
            setZoomEnabled(enabled: boolean): void;
    
            /**
             * Enables/disables dragging individual SVG objects (default = false).
             * @param {boolean} enabled Whether or not to allow dragging of objects.
             */
            setDragEnabled(enabled: boolean): void;
    
            /**
             * Sets the sensitivity of mousewheel zooming (default = 0.4).
             * @param {number} scale The new zoom scale.
             */
            setZoomScale(scale: number): void;
    
            /**
             * Handles mouse motion for the given coordinates.
             * @param {number} x The x coordinate.
             * @param {number} y The y coordinate.
             * @param {Element} svgDoc The svg document.
             */
            handleMove(x: number, y: number, svgDoc: Element): void;
    
            /**
             * Ends pan/drag mode.
             */
            endPanOrDrag(): void;
    
            /**
             * Returns the current state.
             * @return {!svgpan.SvgPan.State}
             */
            getState(): svgpan.SvgPan.State;
        }
    }
}

declare module svgpan.SvgPan {

    /**
     * @enum {string}
     */
    enum State { NONE, PAN, DRAG } 
}
