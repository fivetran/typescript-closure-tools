// Generated Fri May  2 10:35:48 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../goog/dom/pattern/abstractpattern.d.ts" />

declare module goog.dom.pattern {

    /**
     * Pattern object that matches text by exact matching or regular expressions.
     *
     * @param {string|RegExp} match String or regular expression to match against.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class Text extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches text by exact matching or regular expressions.
         *
         * @param {string|RegExp} match String or regular expression to match against.
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         * @final
         */
        constructor(match: any /*string|RegExp*/);
    }
}

