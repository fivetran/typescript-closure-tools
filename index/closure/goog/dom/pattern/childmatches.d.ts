// Generated Thu May  1 21:00:22 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../goog/dom/pattern/abstractpattern.d.ts" />
/// <reference path="../../../goog/dom/pattern/allchildren.d.ts" />

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

