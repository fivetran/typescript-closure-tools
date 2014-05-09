/// <reference path="../../../globals.d.ts" />
/// <reference path="../i18n/bidi.d.ts" />
/// <reference path="./safehtml.d.ts" />
/// <reference path="./safestyle.d.ts" />
/// <reference path="./safeurl.d.ts" />
/// <reference path="./trustedresourceurl.d.ts" />

declare module goog.html.testing {

    /**
     * Creates a SafeHtml wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} html The string to wrap into a SafeHtml.
     * @param {?goog.i18n.bidi.Dir=} opt_dir The optional directionality of the
     *     SafeHtml to be constructed. A null or undefined value signifies an
     *     unknown directionality.
     * @return {!goog.html.SafeHtml}
     * @suppress {visibility} For access to SafeHtml.create...  Note that this
     *     use is appropriate since this method is intended to be "package private"
     *     within goog.html.  DO NOT call SafeHtml.create... from outside this
     *     package; use appropriate wrappers instead.
     */
    function newSafeHtmlForTest(html: string, opt_dir?: goog.i18n.bidi.Dir): goog.html.SafeHtml;

    /**
     * Creates a SafeStyle wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} style String to wrap into a SafeStyle.
     * @return {!goog.html.SafeStyle}
     * @suppress {visibility} For access to SafeStyle.create...  Note that this
     *     use is appropriate since this method is intended to be "package private"
     *     within goog.html.  DO NOT call SafeStyle.create... from outside this
     *     package; use appropriate wrappers instead.
     */
    function newSafeStyleForTest(style: string): goog.html.SafeStyle;

    /**
     * Creates a SafeUrl wrapping the given value. No validation is performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} url String to wrap into a SafeUrl.
     * @return {!goog.html.SafeUrl}
     * @suppress {visibility} For access to SafeUrl.create...  Note that this
     *     use is appropriate since this method is intended to be "package private"
     *     within goog.html.  DO NOT call SafeUrl.create... from outside this
     *     package; use appropriate wrappers instead.
     */
    function newSafeUrlForTest(url: string): goog.html.SafeUrl;

    /**
     * Creates a TrustedResourceUrl wrapping the given value. No validation is
     * performed.
     *
     * This function is for use in tests only and must never be used in production
     * code.
     *
     * @param {string} url String to wrap into a TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl}
     * @suppress {visibility} For access to TrustedResourceUrl.create...  Note that
     *     this use is appropriate since this method is intended to be
     *     "package private" within goog.html.  DO NOT call
     *     TrustedResourceUrl.create... from outside this package; use appropriate
     *     wrappers instead.
     */
    function newTrustedResourceUrlForTest(url: string): goog.html.TrustedResourceUrl;
}
