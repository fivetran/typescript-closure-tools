/// <reference path="../../../../globals.d.ts" />
/// <reference path="./allchildren.d.ts" />
/// <reference path="./abstractpattern.d.ts" />

declare module goog.dom.pattern {

    class ChildMatches extends ChildMatches__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ChildMatches__Class extends goog.dom.pattern.AllChildren__Class  { 
    
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
