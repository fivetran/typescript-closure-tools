// Generated Wed Apr 30 16:39:09 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/html.d.ts" />
/// <reference path="../../goog/i18n.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/string.d.ts" />

declare module 'goog.labs.html' {

    /**
     * The type of an attribute value.
     * <p>
     * Many HTML attributes contain structured data like URLs, CSS, or even entire
     * HTML documents, so the type is a union of several variants.
     *
     * @typedef {(string |
     *            goog.html.SafeHtml | goog.html.SafeStyle | goog.html.SafeUrl)}
     */
    var AttributeValue: any /*missing*/;

    /**
     * A function that takes an attribute value, and returns a safe value.
     * <p>
     * Since rewriters can be chained, a rewriter must be able to accept the output
     * of another rewriter, instead of just a string though a rewriter that coerces
     * its input to a string before checking its safety will fail safe.
     * <p>
     * The meaning of the result is:
     * <table>
     *   <tr><td>{@code null}</td>
     *       <td>Unsafe.  The attribute should not be output.</tr>
     *   <tr><td>a string</td>
     *       <td>The plain text (not HTML-entity encoded) of a safe attribute
     *           value.</td>
     *   <tr><td>a {@link goog.html.SafeHtml}</td>
     *       <td>A fragment that is safe to be included as embedded HTML as in
     *           {@code <iframe srchtml="...">}.</td></tr>
     *   <tr><td>a {@link goog.html.SafeUrl}</td>
     *       <td>A URL that does not need to be further checked against the URL
     *           white-list.</td></tr>
     *   <tr><td>a {@link goog.html.SafeStyle}</td>
     *       <td>A safe value for a <code>style="..."</code> attribute.</td></tr>
     * </table>
     * <p>
     * Implementations are responsible for making sure that "safe" complies with
     * the contract established by the safe string types in {@link goog.html}.
     * </p>
     *
     * @typedef {function(goog.labs.html.AttributeValue) :
     *           goog.labs.html.AttributeValue}
     */
    var AttributeRewriter: any /*missing*/;

    /**
     * g4 presubmit complains about requires of this file because its clients
     * don't use any symbols from it outside JSCompiler comment annotations.
     * genjsdeps.sh doesn't generate the right dependency graph unless this
     * file is required.
     * Clients can mention this noop.
     */
    function attributeRewriterPresubmitWorkaround(): void;

    /**
     * A sanitizer that converts untrusted, messy HTML into more regular HTML
     * that cannot abuse high-authority constructs like the ability to execute
     * arbitrary JavaScript.
     * @constructor
     */
    class Sanitizer {
        /**
         * A sanitizer that converts untrusted, messy HTML into more regular HTML
         * that cannot abuse high-authority constructs like the ability to execute
         * arbitrary JavaScript.
         * @constructor
         */
        constructor();
    
        /**
         * Yields a string of safe HTML that contains all and only the safe
         * text-nodes and elements in the input.
         *
         * <p>
         * For the purposes of this function, "safe" is defined thus:
         * <ul>
         *   <li>Contains only elements explicitly allowed via {@code this.allow*}.
         *   <li>Contains only attributes explicitly allowed via {@code this.allow*}
         *       and having had all relevant transformations applied.
         *   <li>Contains an end tag for all and only non-void open tags.
         *   <li>Tags nest per XHTML rules.
         *   <li>Tags do not nest beyond a finite but fairly large level.
         * </ul>
         *
         * @param {!string} unsafeHtml A string of HTML which need not originate with
         *    a trusted source.
         * @return {!string} A string of HTML that contains only tags and attributes
         *    explicitly allowed by this sanitizer, and with end tags for all and only
         *    non-void elements.
         */
        sanitize(unsafeHtml: string): string;
    
        /**
         * Adds the element names to the white-list of elements that are allowed
         * in the safe HTML output.
         * <p>
         * Allowing elements does not, by itself, allow any attributes on
         * those elements.
         *
         * @param {...!string} var_args element names that should be allowed in the
         *     safe HTML output.
         * @return {!goog.labs.html.Sanitizer} {@code this}.
         */
        allowElements(...var_args: string[]): goog.labs.html.Sanitizer;
    
        /**
         * Allows in the sanitized output
         * <tt>&lt;<i>element</i> <i>attr</i>="..."&gt;</tt>
         * when <i>element</i> is in {@code elementNames} and
         * <i>attrNames</i> is in {@code attrNames}.
         *
         * If specified, {@code opt_valueXform} is a function that takes the
         * HTML-entity-decoded attribute value, and can choose to disallow the
         * attribute by returning {@code null} or substitute a new value
         * by returning a string with the new value.
         *
         * @param {!Array.<string>|string} elementNames names (or name) on which the
         *     attributes are allowed.
         *
         *     Element names should be allowed via {@code allowElements(...)} prior
         *     to white-listing attributes.
         *
         *     The special element name {@code "*"} has the same meaning as in CSS
         *     selectors: it can be used to white-list attributes like {@code title}
         *     and {@code id} which are widely available with element-agnostic
         *     meanings.
         *
         *     It should not be used for attributes like {@code type} whose meaning
         *     differs based on the element on which it appears:
         *     e.g. {@code <input type=text>} vs {@code <style type=text/css>}.
         *
         * @param {!Array.<string>|string} attrNames names (or name) of the attribute
         *     that should be allowed.
         *
         * @param {goog.labs.html.AttributeRewriter=} opt_rewriteValue A function
         *     that receives the HTML-entity-decoded attribute value and can return
         *     {@code null} to disallow the attribute entirely or the value for the
         *     attribute as a string.
         *     <p>
         *     The default is the identity function ({@code function(x){return x}}),
         *     and the value rewriter is composed with an attribute specific handler:
         *     <table>
         *      <tr>
         *        <th>href, src</th>
         *        <td>Requires that the value be an absolute URL with a protocol in
         *            (http, https, mailto) or a protocol relative URL.
         *      </tr>
         *     </table>
         *
         * @return {!goog.labs.html.Sanitizer} {@code this}.
         */
        allowAttributes(elementNames: any /*string[]|string*/, attrNames: any /*string[]|string*/, opt_rewriteValue?: goog.labs.html.AttributeRewriter): goog.labs.html.Sanitizer;
    }
}

declare module 'goog.labs.html.Sanitizer' {

    /**
     * A new object that is as blank as possible.
     *
     * Using {@code Object.create} to create an object with
     * no prototype speeds up whitelist access since there's fewer prototypes
     * to fall-back to for a common case where an element is not in the
     * white-list, and reduces the chance of confusing a member of
     * {@code Object.prototype} with a whitelist entry.
     *
     * @return {!Object.<string, ?>} a reference to a newly allocated object that
     *    does not alias any reference that existed prior.
     * @private
     */
    function createBlankObject_(): void;
}

declare module 'goog.labs.html.scrubber' {

    /**
     * Replaces tags not on the white-list with empty text nodes, dropping all
     * attributes, and drops other non-text nodes such as comments.
     *
     * @param {!Object.<string, boolean>} tagWhitelist a set of lower-case tag names
     *    following the convention established by {@link goog.object.createSet}.
     * @param {!Object.<string, Object.<string, goog.labs.html.AttributeRewriter>>}
     *        attrWhitelist
     *    maps lower-case tag names and the special string {@code "*"} to functions
     *    from decoded attribute values to sanitized values or {@code null} to
     *    indicate that the attribute is not allowed with that value.
     *
     *    For example, if {@code attrWhitelist['a']['href']} is defined then it
     *    is used to sanitize the value of the link's URL.
     *
     *    If {@code attrWhitelist['*']['id']} is defined, and
     *    {@code attrWhitelist['div']['id']} is not, then the former is used to
     *    sanitize any {@code id} attribute on a {@code <div>} element.
     * @param {string} html a string of HTML
     * @return {string} the input but with potentially dangerous tokens removed.
     */
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: goog.labs.html.AttributeRewriter } }, html: string): string;

    /**
     * Balances tags in trusted HTML.
     * @param {string} html a string of HTML
     * @return {string} the input but with an end-tag for each non-void start tag
     *     and only for non-void start tags, and with start and end tags nesting
     *     properly.
     */
    function balance(html: string): string;

    /** Character code constant for {@code '<'}.  @private */
    var CC_LT_: any /*missing*/;

    /** Character code constant for {@code '!'}.  @private */
    var CC_BANG_: any /*missing*/;

    /** Character code constant for {@code '/'}.  @private */
    var CC_SLASH_: any /*missing*/;

    /** Character code constant for {@code '?'}.  @private */
    var CC_QMARK_: any /*missing*/;

    /**
     * Replaces tags not on the white-list with empty text nodes, dropping all
     * attributes, and drops other non-text nodes such as comments.
     *
     * @param {!Object.<string, boolean>} tagWhitelist a set of lower-case tag names
     *    following the convention established by {@link goog.object.createSet}.
     * @param {!Object.<string, Object.<string, goog.labs.html.AttributeRewriter>>
     *        } attrWhitelist
     *    maps lower-case tag names and the special string {@code "*"} to functions
     *    from decoded attribute values to sanitized values or {@code null} to
     *    indicate that the attribute is not allowed with that value.
     *
     *    For example, if {@code attrWhitelist['a']['href']} is defined then it is
     *    used to sanitize the value of the link's URL.
     *
     *    If {@code attrWhitelist['*']['id']} is defined, and
     *    {@code attrWhitelist['div']['id']} is not, then the former is used to
     *    sanitize any {@code id} attribute on a {@code <div>} element.
     * @param {Array.<string>} htmlTokens an array of HTML tokens as returned by
     *    {@link goog.labs.html.scrubber.lex_}.
     * @return {Array.<string>} the input array modified in place to have some
     *    tokens removed.
     * @private
     */
    function filter_(tagWhitelist: { [key: string]: boolean }): void;

    /** @const @private */
    var ALL_SCOPES_: any /*missing*/;
}

