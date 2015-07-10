/// <reference path="../../../../globals.d.ts" />

declare module goog.cssom.iframe.style {

    class CssRuleSet_ extends CssRuleSet___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CssRuleSet___Class  { 
    
            /**
             * Class representing a CSS rule set. A rule set is something like this:
             * h1, h2 { font-family: Arial; color: red; }
             * @constructor
             * @private
             */
            constructor();
    
            /**
             * Text of the declarations inside the rule set.
             * For example: 'font-family: Arial; color: red;'
             * @type {string}
             */
            declarationText: string;
    
            /**
             * Array of CssSelector objects, one for each selector.
             * Example: [h1, h2]
             * @type {Array.<goog.cssom.iframe.style.CssSelector_>}
             */
            selectors: goog.cssom.iframe.style.CssSelector_[];
    
            /**
             * Initializes the rule set from a {@code CSSRule}.
             *
             * @param {CSSRule} cssRule The {@code CSSRule} to initialize from.
             * @return {boolean} True if initialization succeeded. We only support
             *     {@code CSSStyleRule} and {@code CSSFontFaceRule} objects.
             */
            initializeFromCssRule(cssRule: CSSRule): boolean;
    
            /**
             * Parses a selectors string (which may contain multiple comma-delimited
             * selectors) and loads the results into this.selectors.
             * @param {string} selectorsString String containing selectors.
             */
            setSelectorsFromString(selectorsString: string): void;
    
            /**
             * Make a copy of this ruleset.
             * @return {!goog.cssom.iframe.style.CssRuleSet_} A new CssRuleSet containing
             *     the same data as this one.
             */
            clone(): goog.cssom.iframe.style.CssRuleSet_;
    
            /**
             * Set the declaration text with properties from a given object.
             * @param {Object} sourceObject Object whose properties and values should
             *     be used to generate the declaration text.
             * @param {boolean=} opt_important Whether !important should be added to each
             *     declaration.
             */
            setDeclarationTextFromObject(sourceObject: Object, opt_important?: boolean): void;
    
            /**
             * Serializes this CssRuleSet_ into an array as a series of strings.
             * The array can then be join()-ed to get a string representation
             * of this ruleset.
             * @param {Array.<string>} array The array to which to append strings.
             */
            writeToArray(array: string[]): void;
    } 
    

    class CssSelector_ extends CssSelector___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CssSelector___Class  { 
    
            /**
             * Represents a single CSS selector, as described in
             * http://www.w3.org/TR/REC-CSS2/selector.html
             * Currently UNSUPPORTED are the following selector features:
             * <ul>
             *   <li>pseudo-classes (:hover)
             *   <li>child selectors (div > h1)
             *   <li>adjacent sibling selectors (div + h1)
             *   <li>attribute selectors (input[type=submit])
             * </ul>
             * @param {string=} opt_selectorString String containing selectors to parse.
             * @constructor
             * @private
             */
            constructor(opt_selectorString?: string);
    
            /**
             * Tests to see what part of a DOM element hierarchy would be matched by
             * this selector, and returns the indexes of the matching element and matching
             * selector part.
             * <p>
             * For example, given this hierarchy:
             *   document > html > body > div.content > div.sidebar > p
             * and this CSS selector:
             *   body div.sidebar h1
             * This would return {elementIndex: 4, selectorPartIndex: 1},
             * indicating that the element at index 4 matched
             * the css selector at index 1.
             * </p>
             * @param {goog.cssom.iframe.style.NodeAncestry_} elementAncestry Object
             *     representing an element and its ancestors.
             * @return {Object} Object with the properties elementIndex and
             *     selectorPartIndex, or null if there was no match.
             */
            matchElementAncestry(elementAncestry: goog.cssom.iframe.style.NodeAncestry_): Object;
    } 
    

    class CssSelectorPart_ extends CssSelectorPart___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CssSelectorPart___Class  { 
    
            /**
             * Represents one part of a CSS Selector. For example in the selector
             * 'body #foo .bar', body, #foo, and .bar would be considered selector parts.
             * In the official CSS spec these are called "simple selectors".
             * @param {string} selectorPartString A string containing the selector part
             *     in css format.
             * @constructor
             * @private
             */
            constructor(selectorPartString: string);
    
            /**
             * Test whether an element matches this selector part, considered in isolation.
             * @param {Object} elementInfo Element properties to test.
             * @return {boolean} Whether the element matched.
             */
            testElement(elementInfo: Object): boolean;
    } 
    

    class NodeAncestry_ extends NodeAncestry___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class NodeAncestry___Class  { 
    
            /**
             * Represents an element and all its parent/ancestor nodes.
             * This class exists as an optimization so we run tests on an element
             * hierarchy multiple times without walking the dom each time.
             * @param {Element} el The DOM element whose ancestry should be stored.
             * @constructor
             * @private
             */
            constructor(el: Element);
    
            /**
             * Array of nodes in order of hierarchy from the top of the document
             * to the node passed to the constructor
             * @type {Array.<Node>}
             */
            nodes: Node[];
    } 
    

    /**
     * Throw away all cached dom information. Call this if you've modified
     * the structure or class/id attributes of your document and you want
     * to recalculate the currently applied CSS rules.
     */
    function resetDomCache(): void;

    /**
     * Reads the current css rules from element's document, and returns them
     * rewriting selectors so that any rules that formerly applied to element will
     * be applied to doc.body. This makes it possible to replace a block in a page
     * with an iframe and preserve the css styling of the contents.
     *
     * @param {Element} element The element for which context should be calculated.
     * @param {boolean=} opt_forceRuleSetCacheUpdate Flag to force the internal
     *     cache of rulesets to refresh itself before we read the same.
     * @param {boolean=} opt_copyBackgroundContext Flag indicating that if the
     *     {@code element} has a transparent background, background rules
     *     from the nearest ancestor element(s) that have background-color
     *     and/or background-image set should be copied.
     * @return {string} String containing all CSS rules present in the original
     *     document, with modified selectors.
     * @see goog.cssom.iframe.style.getBackgroundContext.
     */
    function getElementContext(element: Element, opt_forceRuleSetCacheUpdate?: boolean, opt_copyBackgroundContext?: boolean): string;

    /**
     * Generates a set of CSS properties that can be used to make another
     * element's background look like the background of a given element.
     * This is useful when you want to copy the CSS context of an element,
     * but the element's background is transparent. In the original context
     * you would see the ancestor's backround color/image showing through,
     * but in the new context there might be a something different underneath.
     * Note that this assumes the element you're copying context from has a
     * fairly standard positioning/layout - it assumes that when the element
     * has a transparent background what you're going to see through it is its
     * ancestors.
     * @param {Element} element The element from which to copy background styles.
     * @return {!Object} Object containing background* properties.
     */
    function getBackgroundContext(element: Element): Object;
}
