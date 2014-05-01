// Generated Wed Apr 30 16:29:04 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.dom.pattern' {

    /**
     * Regular expression for breaking text nodes.
     * @type {RegExp}
     */
    var BREAKING_TEXTNODE_RE: RegExp;

    /**
     * Utility function to match a string against either a string or a regular
     * expression.
     *
     * @param {string|RegExp} obj Either a string or a regular expression.
     * @param {string} str The string to match.
     * @return {boolean} Whether the strings are equal, or if the string matches
     *     the regular expression.
     */
    function matchStringOrRegex(obj: any /*string|RegExp*/, str: string): boolean;

    /**
     * Utility function to match a DOM attribute against either a string or a
     * regular expression.  Conforms to the interface spec for
     * {@link goog.object#every}.
     *
     * @param {string|RegExp} elem Either a string or a regular expression.
     * @param {string} index The attribute name to match.
     * @param {Object} orig The original map of matches to test.
     * @return {boolean} Whether the strings are equal, or if the attribute matches
     *     the regular expression.
     * @this {Element} Called using goog.object every on an Element.
     */
    function matchStringOrRegexMap(elem: any /*string|RegExp*/, index: string, orig: Object): boolean;

    /**
     * When matched to a token, a pattern may return any of the following statuses:
     *  <ol>
     *    <li><code>NO_MATCH</code> - The pattern does not match.  This is the only
     *      value that evaluates to <code>false</code> in a boolean context.
     *    <li><code>MATCHING</code> - The token is part of an incomplete match.
     *    <li><code>MATCH</code> - The token completes a match.
     *    <li><code>BACKTRACK_MATCH</code> - The token does not match, but indicates
     *      the end of a repetitive match.  For instance, in regular expressions,
     *      the pattern <code>/a+/</code> would match <code>'aaaaaaaab'</code>.
     *      Every <code>'a'</code> token would give a status of
     *      <code>MATCHING</code> while the <code>'b'</code> token would give a
     *      status of <code>BACKTRACK_MATCH</code>.
     *  </ol>
     * @enum {number}
     */
    enum MatchType { NO_MATCH, MATCHING, MATCH, BACKTRACK_MATCH } 

    /**
     * Base pattern class for DOM matching.
     *
     * @constructor
     */
    class AbstractPattern {
        /**
         * Base pattern class for DOM matching.
         *
         * @constructor
         */
        constructor();
    
        /**
         * The first node matched by this pattern.
         * @type {Node}
         */
        matchedNode: Node;
    
        /**
         * Reset any internal state this pattern keeps.
         */
        reset(): void;
    
        /**
         * Test whether this pattern matches the given token.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} {@code MATCH} if the pattern matches.
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }

    /**
     * Pattern object that matches any nodes at or below the current tree depth.
     *
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     */
    class AllChildren extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches any nodes at or below the current tree depth.
         *
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         */
        constructor();
    
        /**
         * Test whether the given token is on the same level.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} {@code MATCHING} if the token is on the
         *     same level or deeper and {@code BACKTRACK_MATCH} if not.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    
        /**
         * Reset any internal state this pattern keeps.
         * @override
         */
        reset(): void;
    }

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
    
        /**
         * Test whether the given token is on the same level.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} {@code MATCHING} if the token is on the
         *     same level or deeper and {@code BACKTRACK_MATCH} if not.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    
        /**
         * Reset any internal state this pattern keeps.
         * @override
         */
        reset(): void;
    }

    /**
     * Pattern object that matches a closing tag.
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
     * @extends {goog.dom.pattern.Tag}
     * @final
     */
    class EndTag extends goog.dom.pattern.Tag {
        /**
         * Pattern object that matches a closing tag.
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
         * @extends {goog.dom.pattern.Tag}
         * @final
         */
        constructor(tag: any /*string|RegExp*/, opt_attrs?: Object, opt_styles?: Object, opt_test?: Function);
    }

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
    
        /**
         * Test whether the given token is a start tag token which matches the tag name,
         * style, and attributes provided in the constructor.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> at the end of our
         *    tag, <code>MATCHING</code> if we are within the tag, and
         *    <code>NO_MATCH</code> if the starting tag does not match.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }

    /**
     * Given a set of patterns and a root node, this class tests the patterns in
     * parallel.
     *
     * It is not (yet) a smart matcher - it doesn't do any advanced backtracking.
     * Given the pattern <code>DIV, SPAN</code> the matcher will not match
     * <code>DIV, DIV, SPAN</code> because it starts matching at the first
     * <code>DIV</code>, fails to match <code>SPAN</code> at the second, and never
     * backtracks to try again.
     *
     * It is also possible to have a set of complex patterns that when matched in
     * parallel will miss some possible matches.  Running multiple times will catch
     * all matches eventually.
     *
     * @constructor
     * @final
     */
    class Matcher {
        /**
         * Given a set of patterns and a root node, this class tests the patterns in
         * parallel.
         *
         * It is not (yet) a smart matcher - it doesn't do any advanced backtracking.
         * Given the pattern <code>DIV, SPAN</code> the matcher will not match
         * <code>DIV, DIV, SPAN</code> because it starts matching at the first
         * <code>DIV</code>, fails to match <code>SPAN</code> at the second, and never
         * backtracks to try again.
         *
         * It is also possible to have a set of complex patterns that when matched in
         * parallel will miss some possible matches.  Running multiple times will catch
         * all matches eventually.
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Adds a pattern to be matched.  The callback can return an object whose keys
         * are processing instructions.
         *
         * @param {goog.dom.pattern.AbstractPattern} pattern The pattern to add.
         * @param {Function} callback Function to call when a match is found.  Uses
         *     the above semantics.
         */
        addPattern(pattern: goog.dom.pattern.AbstractPattern, callback: Function): void;
    
        /**
         * Match the set of patterns against a match tree.
         *
         * @param {Node} node The root node of the tree to match.
         */
        match(node: Node): void;
    }

    /**
     * Pattern object that matches any node of the given type.
     * @param {goog.dom.NodeType} nodeType The node type to match.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class NodeType extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches any node of the given type.
         * @param {goog.dom.NodeType} nodeType The node type to match.
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         * @final
         */
        constructor(nodeType: goog.dom.NodeType);
    
        /**
         * Test whether the given token is a text token which matches the string or
         * regular expression provided in the constructor.
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>NO_MATCH</code> otherwise.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }

    /**
     * Pattern object that matches a repetition of another pattern.
     * @param {goog.dom.pattern.AbstractPattern} pattern The pattern to
     *     repetitively match.
     * @param {number=} opt_minimum The minimum number of times to match.  Defaults
     *     to 0.
     * @param {number=} opt_maximum The maximum number of times to match.  Defaults
     *     to unlimited.
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     * @final
     */
    class Repeat extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches a repetition of another pattern.
         * @param {goog.dom.pattern.AbstractPattern} pattern The pattern to
         *     repetitively match.
         * @param {number=} opt_minimum The minimum number of times to match.  Defaults
         *     to 0.
         * @param {number=} opt_maximum The maximum number of times to match.  Defaults
         *     to unlimited.
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         * @final
         */
        constructor(pattern: goog.dom.pattern.AbstractPattern, opt_minimum?: number, opt_maximum?: number);
    
        /**
         * Number of times the pattern has matched.
         *
         * @type {number}
         */
        count: number;
    
        /**
         * The matched nodes.
         *
         * @type {Array.<Node>}
         */
        matches: Node[];
    
        /**
         * Test whether the given token continues a repeated series of matches of the
         * pattern given in the constructor.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>BACKTRACK_MATCH</code> if the pattern does not match
         *     but already had accumulated matches, <code>MATCHING</code> if the pattern
         *     starts a match, and <code>NO_MATCH</code> if the pattern does not match.
         * @suppress {missingProperties} See the broken line below.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    
        /**
         * Reset any internal state this pattern keeps.
         * @override
         */
        reset(): void;
    }

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
    class Sequence extends goog.dom.pattern.AbstractPattern {
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
    
        /**
         * Test whether the given token starts, continues, or finishes the sequence
         * of patterns given in the constructor.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>MATCHING</code> if the pattern starts a match, and
         *     <code>NO_MATCH</code> if the pattern does not match.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    
        /**
         * Reset any internal state this pattern keeps.
         * @override
         */
        reset(): void;
    }

    /**
     * Pattern object that matches an opening tag.
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
     * @extends {goog.dom.pattern.Tag}
     */
    class StartTag extends goog.dom.pattern.Tag {
        /**
         * Pattern object that matches an opening tag.
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
         * @extends {goog.dom.pattern.Tag}
         */
        constructor(tag: any /*string|RegExp*/, opt_attrs?: Object, opt_styles?: Object, opt_test?: Function);
    }

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
    
        /**
         * Test whether the given token is a tag token which matches the tag name,
         * style, and attributes provided in the constructor.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>NO_MATCH</code> otherwise.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }

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
    
        /**
         * Test whether the given token is a text token which matches the string or
         * regular expression provided in the constructor.
         *
         * @param {Node} token Token to match against.
         * @param {goog.dom.TagWalkType} type The type of token.
         * @return {goog.dom.pattern.MatchType} <code>MATCH</code> if the pattern
         *     matches, <code>NO_MATCH</code> otherwise.
         * @override
         */
        matchToken(token: Node, type: goog.dom.TagWalkType): goog.dom.pattern.MatchType;
    }
}

