/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractrange.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../closure/goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../closure/goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../closure/goog/dom/textrange.d.ts" />

declare module goog.dom {

    /**
     * Creates a new multi part range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractMultiRange}
     * @final
     */
    class MultiRange extends goog.dom.AbstractMultiRange {
        /**
         * Creates a new multi part range with no properties.  Do not use this
         * constructor: use one of the goog.dom.Range.createFrom* methods instead.
         * @constructor
         * @extends {goog.dom.AbstractMultiRange}
         * @final
         */
        constructor();
    
        /**
         * @return {Array.<goog.dom.TextRange>} An array of sub-ranges, sorted by start
         *     point.
         */
        getSortedRanges(): goog.dom.TextRange[];
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {goog.dom.MultiRange} range The range to traverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    class MultiRangeIterator extends goog.dom.RangeIterator {
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
     * @return {goog.dom.MultiRange} A range wrapper object.
     */
    function createFromBrowserSelection(selection: Selection): goog.dom.MultiRange;

    /**
     * Creates a new range wrapper from the given browser ranges.  Do not
     * use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Array.<Range>} browserRanges The browser ranges.
     * @return {goog.dom.MultiRange} A range wrapper object.
     */
    function createFromBrowserRanges(browserRanges: Range[]): goog.dom.MultiRange;

    /**
     * Creates a new range wrapper from the given goog.dom.TextRange objects.  Do
     * not use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Array.<goog.dom.TextRange>} textRanges The text range objects.
     * @return {goog.dom.MultiRange} A range wrapper object.
     */
    function createFromTextRanges(textRanges: goog.dom.TextRange[]): goog.dom.MultiRange;
}

