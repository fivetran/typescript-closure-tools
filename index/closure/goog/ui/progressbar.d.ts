/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
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
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/rangemodel.d.ts" />

declare module goog.ui {

    /**
     * This creates a progress bar object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class ProgressBar extends goog.ui._Component {
        /**
         * This creates a progress bar object.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {number} The value.
         */
        getValue(): number;
    
        /**
         * Sets the value
         * @param {number} v The value.
         */
        setValue(v: number): void;
    
        /**
         * @return {number} The minimum value.
         */
        getMinimum(): number;
    
        /**
         * Sets the minimum number
         * @param {number} v The minimum value.
         */
        setMinimum(v: number): void;
    
        /**
         * @return {number} The maximum value.
         */
        getMaximum(): number;
    
        /**
         * Sets the maximum number
         * @param {number} v The maximum value.
         */
        setMaximum(v: number): void;
    
        /**
         * Changes the orientation
         * @param {goog.ui.ProgressBar.Orientation} orient The orientation.
         */
        setOrientation(orient: goog.ui.ProgressBar.Orientation): void;
    
        /**
         * @return {goog.ui.ProgressBar.Orientation} The orientation of the
         *     progress bar.
         */
        getOrientation(): goog.ui.ProgressBar.Orientation;
    
        /**
         * @return {?number} The step value used to determine how to round the value.
         */
        getStep(): number;
    
        /**
         * Sets the step value. The step value is used to determine how to round the
         * value.
         * @param {?number} step  The step size.
         */
        setStep(step: number): void;
    }
}

declare module goog.ui.ProgressBar {

    /**
     * Enum for representing the orientation of the progress bar.
     *
     * @enum {string}
     */
    enum Orientation { VERTICAL, HORIZONTAL } 
}

