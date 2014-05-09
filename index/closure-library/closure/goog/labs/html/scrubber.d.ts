/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../html/safehtml.d.ts" />
/// <reference path="../../html/safestyle.d.ts" />
/// <reference path="../../html/safeurl.d.ts" />

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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: string) => string } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: string) => goog.html.SafeHtml } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: string) => goog.html.SafeStyle } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: string) => goog.html.SafeUrl } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeHtml) => string } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeHtml) => goog.html.SafeHtml } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeHtml) => goog.html.SafeStyle } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeHtml) => goog.html.SafeUrl } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeStyle) => string } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeStyle) => goog.html.SafeHtml } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeStyle) => goog.html.SafeStyle } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeStyle) => goog.html.SafeUrl } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeUrl) => string } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeUrl) => goog.html.SafeHtml } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeUrl) => goog.html.SafeStyle } }, html: string): string;
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
    function scrub(tagWhitelist: { [key: string]: boolean }, attrWhitelist: { [key: string]: { [key: string]: (_0: goog.html.SafeUrl) => goog.html.SafeUrl } }, html: string): string;

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
