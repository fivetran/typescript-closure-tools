/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
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

declare module goog.dom {

    /**
     * A struct for holding context about saved selections.
     * This can be used to preserve the selection and restore while the DOM is
     * manipulated, or through an asynchronous call. Use goog.dom.Range factory
     * methods to obtain an {@see goog.dom.AbstractRange} instance, and use
     * {@see goog.dom.AbstractRange#saveUsingCarets} to obtain a SavedCaretRange.
     * For editor ranges under content-editable elements or design-mode iframes,
     * prefer using {@see goog.editor.range.saveUsingNormalizedCarets}.
     * @param {goog.dom.AbstractRange} range The range being saved.
     * @constructor
     * @extends {goog.dom.SavedRange}
     */
    class SavedCaretRange extends goog.dom.SavedRange {
        /**
         * A struct for holding context about saved selections.
         * This can be used to preserve the selection and restore while the DOM is
         * manipulated, or through an asynchronous call. Use goog.dom.Range factory
         * methods to obtain an {@see goog.dom.AbstractRange} instance, and use
         * {@see goog.dom.AbstractRange#saveUsingCarets} to obtain a SavedCaretRange.
         * For editor ranges under content-editable elements or design-mode iframes,
         * prefer using {@see goog.editor.range.saveUsingNormalizedCarets}.
         * @param {goog.dom.AbstractRange} range The range being saved.
         * @constructor
         * @extends {goog.dom.SavedRange}
         */
        constructor(range: goog.dom.AbstractRange);
    
        /**
         * Gets the range that this SavedCaretRage represents, without selecting it
         * or removing the carets from the DOM.
         * @return {goog.dom.AbstractRange?} An abstract range.
         */
        toAbstractRange(): goog.dom.AbstractRange;
    
        /**
         * Gets carets.
         * @param {boolean} start If true, returns the start caret. Otherwise, get the
         *     end caret.
         * @return {Element} The start or end caret in the given document.
         */
        getCaret(start: boolean): Element;
    
        /**
         * Removes the carets from the current restoration document.
         * @param {goog.dom.AbstractRange=} opt_range A range whose offsets have already
         *     been adjusted for caret removal; it will be adjusted if it is also
         *     affected by post-removal operations, such as text node normalization.
         * @return {goog.dom.AbstractRange|undefined} The adjusted range, if opt_range
         *     was provided.
         */
        removeCarets(opt_range?: goog.dom.AbstractRange): any /*goog.dom.AbstractRange|any (undefined)*/;
    
        /**
         * Sets the document where the range will be restored.
         * @param {!Document} doc An HTML document.
         */
        setRestorationDocument(doc: Document): void;
    }
}

declare module goog.dom.SavedCaretRange {

    /**
     * A regex that will match all saved range carets in a string.
     * @type {RegExp}
     */
    var CARET_REGEX: RegExp;

    /**
     * Returns whether two strings of html are equal, ignoring any saved carets.
     * Thus two strings of html whose only difference is the id of their saved
     * carets will be considered equal, since they represent html with the
     * same selection.
     * @param {string} str1 The first string.
     * @param {string} str2 The second string.
     * @return {boolean} Whether two strings of html are equal, ignoring any
     *     saved carets.
     */
    function htmlEqual(str1: string, str2: string): boolean;
}

