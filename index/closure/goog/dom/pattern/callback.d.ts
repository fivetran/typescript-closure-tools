// Generated Wed Apr 30 16:29:16 PDT 2014

/// <reference path="../../../goog.d.ts" />
/// <reference path="../../../goog/array.d.ts" />
/// <reference path="../../../goog/asserts.d.ts" />
/// <reference path="../../../goog/debug.d.ts" />
/// <reference path="../../../goog/dom.d.ts" />
/// <reference path="../../../goog/functions.d.ts" />
/// <reference path="../../../goog/iter.d.ts" />
/// <reference path="../../../goog/labs/useragent.d.ts" />
/// <reference path="../../../goog/math.d.ts" />
/// <reference path="../../../goog/object.d.ts" />
/// <reference path="../../../goog/string.d.ts" />
/// <reference path="../../../goog/useragent.d.ts" />

declare module 'goog.dom.pattern.callback' {

    /**
     * Callback function for use in {@link goog.dom.pattern.Matcher.addPattern}
     * that removes the matched node from the tree.  Should be used in conjunciton
     * with a {@link goog.dom.pattern.StartTag} pattern.
     *
     * @param {Node} node The node matched by the pattern.
     * @param {goog.dom.TagIterator} position The position where the match
     *     finished.
     * @return {boolean} Returns true to indicate tree changes were made.
     */
    function removeNode(node: Node, position: goog.dom.TagIterator): boolean;

    /**
     * Callback function for use in {@link goog.dom.pattern.Matcher.addPattern}
     * that removes the matched node from the tree and replaces it with its
     * children.  Should be used in conjunction with a
     * {@link goog.dom.pattern.StartTag} pattern.
     *
     * @param {Element} node The node matched by the pattern.
     * @param {goog.dom.TagIterator} position The position where the match
     *     finished.
     * @return {boolean} Returns true to indicate tree changes were made.
     */
    function flattenElement(node: Element, position: goog.dom.TagIterator): boolean;

    /**
     * Callback class for counting matches.
     * @constructor
     * @final
     */
    class Counter {
        /**
         * Callback class for counting matches.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * The count of objects matched so far.
         *
         * @type {number}
         */
        count: number;
    
        /**
         * Get a bound callback function that is suitable as a callback for
         * {@link goog.dom.pattern.Matcher}.
         *
         * @return {Function} A callback function.
         */
        getCallback(): Function;
    
        /**
         * Reset the counter.
         */
        reset(): void;
    }

    /**
     * Callback class for testing for at least one match.
     * @constructor
     * @final
     */
    class Test {
        /**
         * Callback class for testing for at least one match.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Whether or not the pattern matched.
         *
         * @type {boolean}
         */
        matched: boolean;
    
        /**
         * Get a bound callback function that is suitable as a callback for
         * {@link goog.dom.pattern.Matcher}.
         *
         * @return {Function} A callback function.
         */
        getCallback(): Function;
    
        /**
         * Reset the counter.
         */
        reset(): void;
    }
}

