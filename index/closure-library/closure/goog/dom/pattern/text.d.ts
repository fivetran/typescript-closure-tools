/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractpattern.d.ts" />

declare module goog.dom.pattern {

    class Text extends __Text { }
    class __Text extends goog.dom.pattern.__AbstractPattern {
    
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
