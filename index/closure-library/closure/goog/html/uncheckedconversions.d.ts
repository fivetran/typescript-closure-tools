/// <reference path="../../../globals.d.ts" />
/// <reference path="../string/const.d.ts" />
/// <reference path="../i18n/bidi.d.ts" />
/// <reference path="./safehtml.d.ts" />
/// <reference path="./safestyle.d.ts" />
/// <reference path="./safeurl.d.ts" />
/// <reference path="./trustedresourceurl.d.ts" />

declare module goog.html.uncheckedconversions {

    /**
     * Performs an "unchecked conversion" to SafeHtml from a plain string that is
     * known to satisfy the SafeHtml type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of {@code html} satisfies the SafeHtml type contract in all
     * possible program states.
     *
     * TODO(user): Link to guidelines on appropriate uses.
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} html A string that is claimed to adhere to the SafeHtml
     *     contract.
     * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the
     *     SafeHtml to be constructed. A null or undefined value signifies an
     *     unknown directionality.
     * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml
     *     object.
     * @suppress {visibility} For access to SafeHtml.create...  Note that this
     *     use is appropriate since this method is intended to be "package private"
     *     withing goog.html.  DO NOT call SafeHtml.create... from outside this
     *     package; use appropriate wrappers instead.
     */
    function safeHtmlFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, html: string, opt_dir?: goog.i18n.bidi.Dir): goog.html.SafeHtml;

    /**
     * Performs an "unchecked conversion" to SafeStyle from a plain string that is
     * known to satisfy the SafeStyle type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of {@code style} satisfies the SafeUrl type contract in all
     * possible program states.
     *
     * TODO(user): Link to guidelines on appropriate uses.
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} style The string to wrap as a SafeStyle.
     *     contract.
     * @return {!goog.html.SafeStyle} The value of {@code style}, wrapped in a
     *     SafeStyle object.
     * @suppress {visibility} For access to SafeStyle.create...  Note that this
     *     use is appropriate since this method is intended to be "package private"
     *     withing goog.html.  DO NOT call SafeStyle.create... from outside this
     *     package; use appropriate wrappers instead.
     */
    function safeStyleFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, style: string): goog.html.SafeStyle;

    /**
     * Performs an "unchecked conversion" to SafeUrl from a plain string that is
     * known to satisfy the SafeUrl type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of {@code url} satisfies the SafeUrl type contract in all
     * possible program states.
     *
     * TODO(user): Link to guidelines on appropriate uses.
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} url The string to wrap as a SafeUrl.
     *     contract.
     * @return {!goog.html.SafeUrl} The value of {@code url}, wrapped in a SafeUrl
     *     object.
     * @suppress {visibility} For access to SafeUrl.create...  Note that this
     *     use is appropriate since this method is intended to be "package private"
     *     withing goog.html.  DO NOT call SafeUrl.create... from outside this
     *     package; use appropriate wrappers instead.
     */
    function safeUrlFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, url: string): goog.html.SafeUrl;

    /**
     * Performs an "unchecked conversion" to TrustedResourceUrl from a plain string
     * that is known to satisfy the TrustedResourceUrl type contract.
     *
     * IMPORTANT: Uses of this method must be carefully security-reviewed to ensure
     * that the value of {@code url} satisfies the TrustedResourceUrl type contract
     * in all possible program states.
     *
     * TODO(user): Link to guidelines on appropriate uses.
     *
     * @param {!goog.string.Const} justification A constant string explaining why
     *     this use of this method is safe. May include a security review ticket
     *     number.
     * @param {string} url The string to wrap as a TrustedResourceUrl.
     *     contract.
     * @return {!goog.html.TrustedResourceUrl} The value of {@code url}, wrapped in
     *     a TrustedResourceUrl object.
     * @suppress {visibility} For access to TrustedResourceUrl.create...  Note that
     *     this use is appropriate since this method is intended to be
     *     "package private" withing goog.html.  DO NOT call SafeUrl.create... from
     *     outside this package; use appropriate wrappers instead.
     */
    function trustedResourceUrlFromStringKnownToSatisfyTypeContract(justification: goog.string.Const, url: string): goog.html.TrustedResourceUrl;
}
