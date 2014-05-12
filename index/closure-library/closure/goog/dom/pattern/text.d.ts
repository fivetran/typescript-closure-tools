/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractpattern.d.ts" />

declare module goog.dom.pattern {

    class Text extends Text.__Class { }
    module Text {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.dom.pattern.AbstractPattern.__Class {
    
            /**
             * Pattern object that matches text by exact matching or regular expressions.
             *
             * @param {string|RegExp} match String or regular expression to match against.
             * @constructor
             * @extends {goog.dom.pattern.AbstractPattern}
             * @final
             */
            constructor(match: string);
            /**
             * Pattern object that matches text by exact matching or regular expressions.
             *
             * @param {string|RegExp} match String or regular expression to match against.
             * @constructor
             * @extends {goog.dom.pattern.AbstractPattern}
             * @final
             */
            constructor(match: RegExp);
        }
    }
}
