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

declare module goog.ui {

    /**
     * Creates a range model
     * @extends {goog.events.EventTarget}
     * @constructor
     */
    class RangeModel extends goog.events.EventTarget {
        /**
         * Creates a range model
         * @extends {goog.events.EventTarget}
         * @constructor
         */
        constructor();
    
        /**
         * Sets the model to mute / unmute.
         * @param {boolean} muteValue Whether or not to mute the range, i.e.,
         *     suppress any CHANGE events.
         */
        setMute(muteValue: boolean): void;
    
        /**
         * Sets the value.
         * @param {number} value The new value.
         */
        setValue(value: number): void;
    
        /**
         * @return {number} the current value.
         */
        getValue(): number;
    
        /**
         * Sets the extent. The extent is the 'size' of the value.
         * @param {number} extent The new extent.
         */
        setExtent(extent: number): void;
    
        /**
         * @return {number} The extent for the range model.
         */
        getExtent(): number;
    
        /**
         * Sets the minimum
         * @param {number} minimum The new minimum.
         */
        setMinimum(minimum: number): void;
    
        /**
         * @return {number} The minimum value for the range model.
         */
        getMinimum(): number;
    
        /**
         * Sets the maximum
         * @param {number} maximum The new maximum.
         */
        setMaximum(maximum: number): void;
    
        /**
         * @return {number} The maximimum value for the range model.
         */
        getMaximum(): number;
    
        /**
         * Returns the step value. The step value is used to determine how to round the
         * value.
         * @return {?number} The maximimum value for the range model.
         */
        getStep(): number;
    
        /**
         * Sets the step. The step value is used to determine how to round the value.
         * @param {?number} step  The step size.
         */
        setStep(step: number): void;
    
        /**
         * Rounds to the closest step using the minimum value as the base.
         * @param {number} value  The number to round.
         * @return {number} The number rounded to the closest step.
         */
        roundToStepWithMin(value: number): number;
    
        /**
         * Rounds to the closest step.
         * @param {number} value  The number to round.
         * @return {number} The number rounded to the closest step.
         */
        roundToStep(value: number): number;
    }
}

