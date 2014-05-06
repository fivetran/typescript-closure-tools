/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/abstractpattern.d.ts" />

declare module goog.dom.pattern {

    /**
     * Pattern object that matches an tag.
     *
     * @param {string|RegExp} tag Name of the tag.  Also will accept a regular
     *     expression to match against the tag name.
     * @param {goog.dom.TagWalkType} type Type of token to match.
     * @param {Object=} opt_attrs Optional map of attribute names to desired values.
     *     This pattern will only match when all attributes are present and match
     *     the string or regular expression value provided here.
     * @param {Object=} opt_styles Optional map of CSS style names to desired
     *     values. This pattern will only match when all styles are present and
     *     match the string or regular expression value provided here.
     * @param {Function=} opt_test Optional function that takes the element as a
     *     parameter and returns true if this pattern should match it.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     */
    class Tag extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches an tag.
         *
         * @param {string|RegExp} tag Name of the tag.  Also will accept a regular
         *     expression to match against the tag name.
         * @param {goog.dom.TagWalkType} type Type of token to match.
         * @param {Object=} opt_attrs Optional map of attribute names to desired values.
         *     This pattern will only match when all attributes are present and match
         *     the string or regular expression value provided here.
         * @param {Object=} opt_styles Optional map of CSS style names to desired
         *     values. This pattern will only match when all styles are present and
         *     match the string or regular expression value provided here.
         * @param {Function=} opt_test Optional function that takes the element as a
         *     parameter and returns true if this pattern should match it.
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         */
        constructor(tag: any /*string|RegExp*/, type: goog.dom.TagWalkType, opt_attrs?: Object, opt_styles?: Object, opt_test?: Function);
    }
}

