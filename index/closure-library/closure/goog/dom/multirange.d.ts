/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractmultirange.d.ts" />
/// <reference path="./textrange.d.ts" />
/// <reference path="./savedrange.d.ts" />
/// <reference path="./abstractrange.d.ts" />

declare module goog.dom {

    class MultiRange extends MultiRange__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MultiRange__Class extends goog.dom.AbstractMultiRange__Class  { 
    
            /**
             * Creates a new multi part range with no properties.  Do not use this
             * constructor: use one of the goog.dom.Range.createFrom* methods instead.
             * @constructor
             * @extends {goog.dom.AbstractMultiRange}
             * @final
             */
            constructor();
    
            /**
             * @return {!Array.<goog.dom.TextRange>} An array of sub-ranges, sorted by start
             *     point.
             */
            getSortedRanges(): goog.dom.TextRange[];
    } 
    

    class DomSavedMultiRange_ extends DomSavedMultiRange___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class DomSavedMultiRange___Class extends goog.dom.SavedRange__Class  { 
    
            /**
             * A SavedRange implementation using DOM endpoints.
             * @param {goog.dom.MultiRange} range The range to save.
             * @constructor
             * @extends {goog.dom.SavedRange}
             * @private
             */
            constructor(range: goog.dom.MultiRange);
    } 
    

    class MultiRangeIterator extends MultiRangeIterator__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MultiRangeIterator__Class extends goog.dom.RangeIterator__Class  { 
    
            /**
             * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
             * adds functions to determine the portion of each text node that is selected.
             *
             * @param {goog.dom.MultiRange} range The range to traverse.
             * @constructor
             * @extends {goog.dom.RangeIterator}
             * @final
             */
            constructor(range: goog.dom.MultiRange);
    } 
    
}

declare module goog.dom.MultiRange {

    /**
     * Creates a new range wrapper from the given browser selection object.  Do not
     * use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Selection} selection The browser selection object.
     * @return {!goog.dom.MultiRange} A range wrapper object.
     */
    function createFromBrowserSelection(selection: Selection): goog.dom.MultiRange;

    /**
     * Creates a new range wrapper from the given browser ranges.  Do not
     * use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Array.<Range>} browserRanges The browser ranges.
     * @return {!goog.dom.MultiRange} A range wrapper object.
     */
    function createFromBrowserRanges(browserRanges: Range[]): goog.dom.MultiRange;

    /**
     * Creates a new range wrapper from the given goog.dom.TextRange objects.  Do
     * not use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Array.<goog.dom.TextRange>} textRanges The text range objects.
     * @return {!goog.dom.MultiRange} A range wrapper object.
     */
    function createFromTextRanges(textRanges: goog.dom.TextRange[]): goog.dom.MultiRange;
}
