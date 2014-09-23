/// <reference path="../../../../globals.d.ts" />
/// <reference path="./attribute_rewriter.d.ts" />

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

    /**
     * Groups of elements used to specify containment relationships.
     * @enum {number}
     * @private
     */
    enum Group_ { BLOCK_, INLINE_, INLINE_MINUS_A_, MIXED_, TABLE_CONTENT_, HEAD_CONTENT_, TOP_CONTENT_, AREA_ELEMENT_, FORM_ELEMENT_, LEGEND_ELEMENT_, LI_ELEMENT_, DL_PART_, P_ELEMENT_, OPTIONS_ELEMENT_, OPTION_ELEMENT_, PARAM_ELEMENT_, TABLE_ELEMENT_, TR_ELEMENT_, TD_ELEMENT_, COL_ELEMENT_, CHARACTER_DATA_ } 

    /**
     * Element scopes limit where close tags can have effects.
     * For example, a table cannot be implicitly closed by a {@code </p>} even if
     * the table appears inside a {@code <p>} because the {@code <table>} element
     * introduces a scope.
     *
     * @enum {number}
     * @private
     */
    enum Scope_ { COMMON_, BUTTON_, LIST_ITEM_, TABLE_ } 
}
