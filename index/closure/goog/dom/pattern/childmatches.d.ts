/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/abstractpattern.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/allchildren.d.ts" />

declare module goog.dom.pattern {

    /**
     * Pattern object that matches any nodes at or below the current tree depth.
     *
     * @param {goog.dom.pattern.AbstractPattern} childPattern Pattern to collect
     *     child matches of.
     * @param {number=} opt_minimumMatches Enforce a minimum nuber of matches.
     *     Defaults to 0.
     * @constructor
     * @extends {goog.dom.pattern.AllChildren}
     * @final
     */
    class ChildMatches extends goog.dom.pattern.AllChildren {
        /**
         * Pattern object that matches any nodes at or below the current tree depth.
         *
         * @param {goog.dom.pattern.AbstractPattern} childPattern Pattern to collect
         *     child matches of.
         * @param {number=} opt_minimumMatches Enforce a minimum nuber of matches.
         *     Defaults to 0.
         * @constructor
         * @extends {goog.dom.pattern.AllChildren}
         * @final
         */
        constructor(childPattern: goog.dom.pattern.AbstractPattern, opt_minimumMatches?: number);
    
        /**
         * Array of matched child nodes.
         *
         * @type {Array.<Node>}
         */
        matches: Node[];
    }
}

