// Generated Wed Apr 30 22:38:15 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/dom/pattern/abstractpattern.d.ts" />
/// <reference path="../../../goog/dom/pattern/tag.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/pattern/starttag.d.ts" />

declare module goog.dom.pattern {

    /**
     * Pattern object that matches a full tag including all its children.
     *
     * @param {string|RegExp} tag Name of the tag.  Also will accept a regular
     *     expression to match against the tag name.
     * @param {Object=} opt_attrs Optional map of attribute names to desired values.
     *     This pattern will only match when all attributes are present and match
     *     the string or regular expression value provided here.
     * @param {Object=} opt_styles Optional map of CSS style names to desired
     *     values. This pattern will only match when all styles are present and
     *     match the string or regular expression value provided here.
     * @param {Function=} opt_test Optional function that takes the element as a
     *     parameter and returns true if this pattern should match it.
     * @constructor
     * @extends {goog.dom.pattern.StartTag}
     * @final
     */
    class FullTag extends goog.dom.pattern.StartTag {
        /**
         * Pattern object that matches a full tag including all its children.
         *
         * @param {string|RegExp} tag Name of the tag.  Also will accept a regular
         *     expression to match against the tag name.
         * @param {Object=} opt_attrs Optional map of attribute names to desired values.
         *     This pattern will only match when all attributes are present and match
         *     the string or regular expression value provided here.
         * @param {Object=} opt_styles Optional map of CSS style names to desired
         *     values. This pattern will only match when all styles are present and
         *     match the string or regular expression value provided here.
         * @param {Function=} opt_test Optional function that takes the element as a
         *     parameter and returns true if this pattern should match it.
         * @constructor
         * @extends {goog.dom.pattern.StartTag}
         * @final
         */
        constructor(tag: any /*string|RegExp*/, opt_attrs?: Object, opt_styles?: Object, opt_test?: Function);
    }
}

