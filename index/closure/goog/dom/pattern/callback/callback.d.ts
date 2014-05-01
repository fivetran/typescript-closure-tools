// Generated Wed Apr 30 22:38:13 PDT 2014

/// <reference path="../../../../goog/base.d.ts" />
/// <reference path="../../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../../goog/debug/error.d.ts" />
/// <reference path="../../../../goog/string/string.d.ts" />
/// <reference path="../../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../../goog/array/array.d.ts" />
/// <reference path="../../../../goog/math/math.d.ts" />
/// <reference path="../../../../goog/functions/functions.d.ts" />
/// <reference path="../../../../goog/iter/iter.d.ts" />
/// <reference path="../../../../goog/dom/classes.d.ts" />
/// <reference path="../../../../goog/object/object.d.ts" />
/// <reference path="../../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../../goog/math/size.d.ts" />
/// <reference path="../../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../../goog/dom/dom.d.ts" />
/// <reference path="../../../../goog/dom/tagiterator.d.ts" />

declare module goog.dom.pattern.callback {

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
}

