/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />

declare module goog.dom.pattern {

    /**
     * Given a set of patterns and a root node, this class tests the patterns in
     * parallel.
     *
     * It is not (yet) a smart matcher - it doesn't do any advanced backtracking.
     * Given the pattern <code>DIV, SPAN</code> the matcher will not match
     * <code>DIV, DIV, SPAN</code> because it starts matching at the first
     * <code>DIV</code>, fails to match <code>SPAN</code> at the second, and never
     * backtracks to try again.
     *
     * It is also possible to have a set of complex patterns that when matched in
     * parallel will miss some possible matches.  Running multiple times will catch
     * all matches eventually.
     *
     * @constructor
     * @final
     */
    class Matcher {
        /**
         * Given a set of patterns and a root node, this class tests the patterns in
         * parallel.
         *
         * It is not (yet) a smart matcher - it doesn't do any advanced backtracking.
         * Given the pattern <code>DIV, SPAN</code> the matcher will not match
         * <code>DIV, DIV, SPAN</code> because it starts matching at the first
         * <code>DIV</code>, fails to match <code>SPAN</code> at the second, and never
         * backtracks to try again.
         *
         * It is also possible to have a set of complex patterns that when matched in
         * parallel will miss some possible matches.  Running multiple times will catch
         * all matches eventually.
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Adds a pattern to be matched.  The callback can return an object whose keys
         * are processing instructions.
         *
         * @param {goog.dom.pattern.AbstractPattern} pattern The pattern to add.
         * @param {Function} callback Function to call when a match is found.  Uses
         *     the above semantics.
         */
        addPattern(pattern: goog.dom.pattern.AbstractPattern, callback: Function): void;
    
        /**
         * Match the set of patterns against a match tree.
         *
         * @param {Node} node The root node of the tree to match.
         */
        match(node: Node): void;
    }
}

