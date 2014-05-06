/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../../closure/goog/labs/html/attribute_rewriter.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />

declare module goog.labs.html.scrubber {

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

    /** @const @private */
    var ALL_SCOPES_: any /*missing*/;
}

