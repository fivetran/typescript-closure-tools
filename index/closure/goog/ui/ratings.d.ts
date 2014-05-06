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

declare module goog.ui {

    /**
     * A UI Control used for rating things, i.e. videos on Google Video.
     * @param {Array.<string>=} opt_ratings Ratings. Default: [1,2,3,4,5].
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class Ratings extends goog.ui._Component {
        /**
         * A UI Control used for rating things, i.e. videos on Google Video.
         * @param {Array.<string>=} opt_ratings Ratings. Default: [1,2,3,4,5].
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_ratings?: string[], opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the base CSS class used by subcomponents of this component.
         * @return {string} Component-specific CSS class.
         */
        getCssClass(): string;
    
        /**
         * Sets the selected index. If the provided index is greater than the number of
         * ratings then the max is set.  0 is the first item, -1 is no selection.
         * @param {number} index The index of the rating to select.
         */
        setSelectedIndex(index: number): void;
    
        /**
         * @return {number} The index of the currently selected rating.
         */
        getSelectedIndex(): number;
    
        /**
         * Returns the rating value of the currently selected rating
         * @return {?string} The value of the currently selected rating (or null).
         */
        getValue(): string;
    
        /**
         * Returns the index of the currently highlighted rating, -1 if the mouse isn't
         * currently over the widget
         * @return {number} The index of the currently highlighted rating.
         */
        getHighlightedIndex(): number;
    
        /**
         * Returns the value of the currently highlighted rating, null if the mouse
         * isn't currently over the widget
         * @return {?string} The value of the currently highlighted rating, or null.
         */
        getHighlightedValue(): string;
    
        /**
         * Sets the array of ratings that the comonent
         * @param {Array.<string>} ratings Array of value to use as ratings.
         */
        setRatings(ratings: string[]): void;
    
        /**
         * Gets the array of ratings that the component
         * @return {Array.<string>} Array of ratings.
         */
        getRatings(): string[];
    
        /**
         * Attaches an input or select element to the ratings widget. The value or
         * index of the field will be updated along with the ratings widget.
         * @param {HTMLSelectElement|HTMLInputElement} field The field to attach to.
         */
        setAttachedFormField(field: any /*HTMLSelectElement|HTMLInputElement*/): void;
    
        /**
         * Returns the attached input or select element to the ratings widget.
         * @return {HTMLSelectElement|HTMLInputElement|null} The attached form field.
         */
        getAttachedFormField(): any /*HTMLSelectElement|HTMLInputElement|any (null)*/;
    
        /**
         * Enables or disables the ratings control.
         * @param {boolean} enable Whether to enable or disable the control.
         */
        setEnabled(enable: boolean): void;
    
        /**
         * @return {boolean} Whether the ratings control is enabled.
         */
        isEnabled(): boolean;
    }
}

declare module goog.ui.Ratings {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Enums for Ratings event type.
     * @enum {string}
     */
    enum EventType { CHANGE, HIGHLIGHT_CHANGE, HIGHLIGHT, UNHIGHLIGHT } 
}

