/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractmultirange.d.ts" />
/// <reference path="./savedrange.d.ts" />
/// <reference path="./abstractrange.d.ts" />

declare module goog.dom {

    class ControlRange extends ControlRange__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ControlRange__Class extends goog.dom.AbstractMultiRange__Class  { 
    
            /**
             * Create a new control selection with no properties.  Do not use this
             * constructor: use one of the goog.dom.Range.createFrom* methods instead.
             * @constructor
             * @extends {goog.dom.AbstractMultiRange}
             * @final
             */
            constructor();
    
            /**
             * @return {!Array.<Element>} Array of elements in the control range.
             */
            getElements(): Element[];
    
            /**
             * @return {!Array.<Element>} Array of elements comprising the control range,
             *     sorted by document order.
             */
            getSortedElements(): Element[];
    } 
    

    class DomSavedControlRange_ extends DomSavedControlRange___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DomSavedControlRange___Class extends goog.dom.SavedRange__Class  { 
    
            /**
             * A SavedRange implementation using DOM endpoints.
             * @param {goog.dom.ControlRange} range The range to save.
             * @constructor
             * @extends {goog.dom.SavedRange}
             * @private
             */
            constructor(range: goog.dom.ControlRange);
    } 
    

    class ControlRangeIterator extends ControlRangeIterator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ControlRangeIterator__Class extends goog.dom.RangeIterator__Class  { 
    
            /**
             * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
             * adds functions to determine the portion of each text node that is selected.
             *
             * @param {goog.dom.ControlRange?} range The range to traverse.
             * @constructor
             * @extends {goog.dom.RangeIterator}
             * @final
             */
            constructor(range: goog.dom.ControlRange);
    } 
    
}

declare module goog.dom.ControlRange {

    /**
     * Create a new range wrapper from the given browser range object.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Object} controlRange The browser range object.
     * @return {!goog.dom.ControlRange} A range wrapper object.
     */
    function createFromBrowserRange(controlRange: Object): goog.dom.ControlRange;

    /**
     * Create a new range wrapper that selects the given element.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {...Element} var_args The element(s) to select.
     * @return {!goog.dom.ControlRange} A range wrapper object.
     */
    function createFromElements(...var_args: Element[]): goog.dom.ControlRange;
}
