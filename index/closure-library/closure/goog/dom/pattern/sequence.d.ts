/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractpattern.d.ts" />

declare module goog.dom.pattern {

    class Sequence extends Sequence.__Class { }
    module Sequence {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.dom.pattern.AbstractPattern.__Class {
    
            /**
             * Pattern object that matches a sequence of other patterns.
             *
             * @param {Array.<goog.dom.pattern.AbstractPattern>} patterns Ordered array of
             *     patterns to match.
             * @param {boolean=} opt_ignoreWhitespace Optional flag to ignore text nodes
             *     consisting entirely of whitespace.  The default is to not ignore them.
             * @constructor
             * @extends {goog.dom.pattern.AbstractPattern}
             * @final
             */
            constructor(patterns: goog.dom.pattern.AbstractPattern[], opt_ignoreWhitespace?: boolean);
    
            /**
             * Ordered array of patterns to match.
             *
             * @type {Array.<goog.dom.pattern.AbstractPattern>}
             */
            patterns: goog.dom.pattern.AbstractPattern[];
        }
    }
}
