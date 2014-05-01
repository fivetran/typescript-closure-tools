// Generated Wed Apr 30 16:41:17 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/i18n.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/string.d.ts" />

declare module 'goog.html.legacyconversions' {

    /**
     * Performs an "unchecked conversion" from string to SafeHtml for legacy API
     * purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} html A string to be converted to SafeHtml.
     * @return {!goog.html.SafeHtml} The value of html, wrapped in a SafeHtml
     *     object.
     */
    function safeHtmlFromString(html: string): goog.html.SafeHtml;

    /**
     * Performs an "unchecked conversion" from string to TrustedResourceUrl for
     * legacy API purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} url A string to be converted to TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} The value of url, wrapped in a
     *     TrustedResourceUrl object.
     */
    function trustedResourceUrlFromString(url: string): goog.html.TrustedResourceUrl;

    /**
     * Performs an "unchecked conversion" from string to SafeUrl for legacy API
     * purposes.
     *
     * Unchecked conversion will not proceed if ALLOW_LEGACY_CONVERSIONS is false,
     * and instead this function unconditionally throws an exception.
     *
     * @param {string} url A string to be converted to SafeUrl.
     * @return {!goog.html.SafeUrl} The value of url, wrapped in a SafeUrl
     *     object.
     */
    function safeUrlFromString(url: string): goog.html.SafeUrl;
}

declare module 'goog.html.SafeHtml' {

    /**
     * Performs a runtime check that the provided object is indeed a SafeHtml
     * object, and returns its value.
     * @param {!goog.html.SafeHtml} safeHtml The object to extract from.
     * @return {string} The SafeHtml object's contained string, unless the run-time
     *     type check fails. In that case, {@code unwrap} returns an innocuous
     *     string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(safeHtml: goog.html.SafeHtml): string;

    /**
     * Returns HTML-escaped text as a SafeHtml object.
     *
     * If text is of a type that implements
     * {@code goog.i18n.bidi.DirectionalString}, the directionality of the new
     * {@code SafeHtml} object is set to {@code text}'s directionality, if known.
     * Otherwise, the directionality of the resulting SafeHtml is unknown (i.e.,
     * {@code null}).
     *
     * @param {!goog.html.SafeHtml.StringLike_} text The string to escape.
     * @return {!goog.html.SafeHtml} The escaped string, wrapped as a SafeHtml.
     */
    function htmlEscape(text: goog.html.SafeHtml.StringLike_): goog.html.SafeHtml;

    /**
     * Coerces an arbitrary object into a SafeHtml object.
     *
     * If {@code textOrHtml} is already of type {@code goog.html.SafeHtml}, the same
     * object is returned. Otherwise, {@code textOrHtml} is coerced to string, and
     * HTML-escaped. If {@code textOrHtml} is of a type that implements
     * {@code goog.i18n.bidi.DirectionalString}, its directionality, if known, is
     * preserved.
     *
     * @param {!goog.html.SafeHtml.TextOrHtml_} textOrHtml The text or SafeHtml to
     *     coerce.
     * @return {!goog.html.SafeHtml} The resulting SafeHtml object.
     */
    function from(textOrHtml: goog.html.SafeHtml.TextOrHtml_): goog.html.SafeHtml;

    /**
     * Creates a SafeHtml content consisting of a tag with optional attributes and
     * optional content.
     * @param {string} tagName The name of the tag. Only tag names consisting of
     *     [a-zA-Z0-9-] are allowed. <link>, <script> and <style> tags are not
     *     supported.
     * @param {!Object.<string, goog.html.SafeHtml.AttributeValue_>=}
     *     opt_attributes Mapping from attribute names to their values. Only
     *     attribute names consisting of [a-zA-Z0-9-] are allowed. Attributes with
     *     a special meaning (e.g. on*) require goog.string.Const value, attributes
     *     containing URL require goog.string.Const or goog.html.SafeUrl. Value of
     *     null or undefined causes the attribute to be omitted. Values are
     *     HTML-escaped before usage.
     * @param {!goog.html.SafeHtml.TextOrHtml_|
     *     !Array.<!goog.html.SafeHtml.TextOrHtml_>=} opt_content Content to put
     *     inside the tag. This must be empty for void tags like <br>. Array
     *     elements are concatenated.
     * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
     * @throws {Error} If invalid tag name, attribute name, or attribute value is
     *     provided.
     * @throws {goog.asserts.AssertionError} If content for void tag is provided.
     */
    function create(tagName: string, opt_attributes?: { [key: string]: goog.html.SafeHtml.AttributeValue_ }): void;

    /**
     * Creates a new SafeHtml object by concatenating the values.
     * @param {...!goog.html.SafeHtml.TextOrHtml_|
     *     !Array.<!goog.html.SafeHtml.TextOrHtml_>} var_args Elements of array
     *     arguments would be processed recursively.
     * @return {!goog.html.SafeHtml}
     */
    function concat(): void;

    /**
     * A SafeHtml instance corresponding to the empty string.
     * @const {!goog.html.SafeHtml}
     */
    var EMPTY: any /*missing*/;
}

declare module 'goog.html.SafeStyle' {

    /**
     * Creates a SafeStyle object from a compile-time constant string.
     *
     * {@code style} should be in the format
     * {@code name: value; [name: value; ...]} and must not have any < or >
     * characters in it. This is so that SafeStyle's contract is preserved,
     * allowing the SafeStyle to correctly be interpreted as a sequence of CSS
     * declarations and without affecting the syntactic structure of any
     * surrounding CSS and HTML.
     *
     * This method performs basic sanity checks on the format of {@code style}
     * but does not constrain the format of {@code name} and {@code value}, except
     * for disallowing tag characters.
     *
     * @param {!goog.string.Const} style A compile-time-constant string from which
     *     to create a SafeStyle.
     * @return {!goog.html.SafeStyle} A SafeStyle object initialized to
     *     {@code style}.
     */
    function fromConstant(style: goog.string.Const): goog.html.SafeStyle;

    /**
     * Performs a runtime check that the provided object is indeed a
     * SafeStyle object, and returns its value.
     *
     * @param {!goog.html.SafeStyle} safeStyle The object to extract from.
     * @return {string} The safeStyle object's contained string, unless
     *     the run-time type check fails. In that case, {@code unwrap} returns an
     *     innocuous string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(safeStyle: goog.html.SafeStyle): string;

    /**
     * A SafeStyle instance corresponding to the empty string.
     * @const {!goog.html.SafeStyle}
     */
    var EMPTY: any /*missing*/;
}

declare module 'goog.html.SafeUrl' {

    /**
     * The innocuous string generated by goog.html.SafeUrl.sanitize when passed
     * an unsafe URL.
     *
     * about:invalid is registered in
     * http://www.w3.org/TR/css3-values/#about-invalid.
     * http://tools.ietf.org/html/rfc6694#section-2.2.1 permits about URLs to
     * contain a fragment, which is not to be considered when determining if an
     * about URL is well-known.
     *
     * Using about:invalid seems preferable to using a fixed data URL, since
     * browsers might choose to not report CSP violations on it, as legitimate
     * CSS function calls to attr() can result in this URL being produced. It is
     * also a standard URL which matches exactly the semantics we need:
     * "The about:invalid URI references a non-existent document with a generic
     * error condition. It can be used when a URI is necessary, but the default
     * value shouldn't be resolveable as any type of document".
     *
     * @const {string}
     */
    var INNOCUOUS_STRING: any /*missing*/;

    /**
     * Performs a runtime check that the provided object is indeed a SafeUrl
     * object, and returns its value.
     *
     * IMPORTANT: The guarantees of the SafeUrl type contract only extend to the
     * behavior of  browsers when interpreting URLs. Values of SafeUrl objects MUST
     * be appropriately escaped before embedding in a HTML document. Note that the
     * required escaping is context-sensitive (e.g. a different escaping is
     * required for embedding a URL in a style property within a style
     * attribute, as opposed to embedding in a href attribute).
     *
     * Note that the returned value does not necessarily correspond to the string
     * with which the SafeUrl was constructed, since goog.html.SafeUrl.sanitize
     * will percent-encode many characters.
     *
     * @param {!goog.html.SafeUrl} safeUrl The object to extract from.
     * @return {string} The SafeUrl object's contained string, unless the run-time
     *     type check fails. In that case, {@code unwrap} returns an innocuous
     *     string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(safeUrl: goog.html.SafeUrl): string;

    /**
     * Creates a SafeUrl object from a compile-time constant string.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     *
     * @param {!goog.string.Const} url A compile-time-constant string from which to
     *         create a SafeUrl.
     * @return {!goog.html.SafeUrl} A SafeUrl object initialized to {@code url}.
     */
    function fromConstant(url: goog.string.Const): goog.html.SafeUrl;

    /**
     * Creates a SafeUrl object from {@code url}. If {@code url} is a
     * goog.html.SafeUrl then it is simply returned. Otherwise the input string is
     * validated to match a pattern of commonly used safe URLs. The string is
     * converted to UTF-8 and non-whitelisted characters are percent-encoded. The
     * string wrapped by the created SafeUrl will thus contain only ASCII printable
     * characters.
     *
     * {@code url} may be a URL with the http, https, or mailto scheme,
     * or a relative URL (i.e., a URL without a scheme; specifically, a
     * scheme-relative, absolute-path-relative, or path-relative URL).
     *
     * {@code url} is converted to UTF-8 and non-whitelisted characters are
     * percent-encoded. Whitelisted characters are '%' and, from RFC 3986,
     * unreserved characters and reserved characters, with the exception of '\'',
     * '(' and ')'. This ensures the the SafeUrl contains only ASCII-printable
     * characters and reduces the chance of security bugs were it to be
     * interpolated into a specific context without the necessary escaping.
     *
     * If {@code url} fails validation or does not UTF-16 decode correctly
     * (JavaScript strings are UTF-16 encoded), this function returns a SafeUrl
     * object containing an innocuous string, goog.html.SafeUrl.INNOCUOUS_STRING.
     *
     * @see http://url.spec.whatwg.org/#concept-relative-url
     * @param {string|!goog.string.TypedString} url The URL to validate.
     * @return {!goog.html.SafeUrl} The validated URL, wrapped as a SafeUrl.
     */
    function sanitize(url: any /*string|goog.string.TypedString*/): goog.html.SafeUrl;
}

declare module 'goog.html.testing' {

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

declare module 'goog.html.TrustedResourceUrl' {

    /**
     * Performs a runtime check that the provided object is indeed a
     * TrustedResourceUrl object, and returns its value.
     *
     * @param {!goog.html.TrustedResourceUrl} trustedResourceUrl The object to
     *     extract from.
     * @return {string} The trustedResourceUrl object's contained string, unless
     *     the run-time type check fails. In that case, {@code unwrap} returns an
     *     innocuous string, or, if assertions are enabled, throws
     *     {@code goog.asserts.AssertionError}.
     */
    function unwrap(trustedResourceUrl: goog.html.TrustedResourceUrl): string;

    /**
     * Creates a TrustedResourceUrl object from a compile-time constant string.
     *
     * Compile-time constant strings are inherently program-controlled and hence
     * trusted.
     *
     * @param {!goog.string.Const} url A compile-time-constant string from which to
     *     create a TrustedResourceUrl.
     * @return {!goog.html.TrustedResourceUrl} A TrustedResourceUrl object
     *     initialized to {@code url}.
     */
    function fromConstant(url: goog.string.Const): goog.html.TrustedResourceUrl;
}

declare module 'goog.html.uncheckedconversions' {

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

declare module 'goog.html.utils' {

    /**
     * Extracts text from HTML.
     * Block-level elements such as div are surrounded with whitespace,
     * but inline elements are not. Span is treated as a block level element
     * because it is often used as a container.
     * Breaking spaces are compressed and trimmed.
     *
     * @param {string} value The input HTML to have tags removed.
     * @return {string} A representation of value without tags, HTML comments, or
     *     other non-text content.
     */
    function stripHtmlTags(value: string): string;

    /**
     * Matches all tags that do not require extra space.
     *
     * @const
     * @private {RegExp}
     */
    var INLINE_HTML_TAG_REGEX_: any /*missing*/;

    /**
     * Matches all tags, HTML comments, and DOCTYPEs in tag soup HTML.
     * By removing these, and replacing any '<' or '>' characters with
     * entities we guarantee that the result can be embedded into
     * an attribute without introducing a tag boundary.
     *
     * @private {RegExp}
     * @const
     */
    var HTML_TAG_REGEX_: any /*missing*/;
}

declare module 'goog.html' {

    /**
     * A string that is safe to use in HTML context in DOM APIs and HTML documents.
     *
     * A SafeHtml is a string-like object that carries the security type contract
     * that its value as a string will not cause untrusted script execution when
     * evaluated as HTML in a browser.
     *
     * Values of this type are guaranteed to be safe to use in HTML contexts,
     * such as, assignment to the innerHTML DOM property, or interpolation into
     * a HTML template in HTML PC_DATA context, in the sense that the use will not
     * result in a Cross-Site-Scripting vulnerability.
     *
     * Instances of this type must be created via the factory methods
     * ({@code goog.html.SafeHtml.from}, {@code goog.html.SafeHtml.htmlEscape}), etc
     * and not by invoking its constructor.  The constructor intentionally takes no
     * parameters and the type is immutable; hence only a default instance
     * corresponding to the empty string can be obtained via constructor invocation.
     *
     * @see goog.html.SafeHtml#from
     * @see goog.html.SafeHtml#htmlEscape
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    class SafeHtml implements goog.i18n.bidi.DirectionalString {
        /**
         * A string that is safe to use in HTML context in DOM APIs and HTML documents.
         *
         * A SafeHtml is a string-like object that carries the security type contract
         * that its value as a string will not cause untrusted script execution when
         * evaluated as HTML in a browser.
         *
         * Values of this type are guaranteed to be safe to use in HTML contexts,
         * such as, assignment to the innerHTML DOM property, or interpolation into
         * a HTML template in HTML PC_DATA context, in the sense that the use will not
         * result in a Cross-Site-Scripting vulnerability.
         *
         * Instances of this type must be created via the factory methods
         * ({@code goog.html.SafeHtml.from}, {@code goog.html.SafeHtml.htmlEscape}), etc
         * and not by invoking its constructor.  The constructor intentionally takes no
         * parameters and the type is immutable; hence only a default instance
         * corresponding to the empty string can be obtained via constructor invocation.
         *
         * @see goog.html.SafeHtml#from
         * @see goog.html.SafeHtml#htmlEscape
         * @constructor
         * @final
         * @struct
         * @implements {goog.i18n.bidi.DirectionalString}
         * @implements {goog.string.TypedString}
         */
        constructor();
    
        /**
         * @override
         * @const
         */
        implementsGoogI18nBidiDirectionalString: any /*missing*/;
    
        /** @override */
        getDirection(): void;
    
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: any /*missing*/;
    
        /**
         * Returns this SafeHtml's value a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code SafeHtml}, use {@code goog.html.SafeHtml.unwrap} instead of
         * this method. If in doubt, assume that it's security relevant. In particular,
         * note that goog.html functions which return a goog.html type do not guarantee
         * that the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.from(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.from() as fakeSafeHtml instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.SafeHtml#unwrap
         * @override
         */
        getTypedStringValue(): void;
    
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a SafeHtml, use
         * {@code goog.html.SafeHtml.unwrap}.
         *
         * @see goog.html.SafeHtml#unwrap
         * @override
         */
        toString(): void;
    }

    /**
     * A string-like object which represents a sequence of CSS declarations
     * ({@code propertyName1: propertyvalue1; propertyName2: propertyValue2; ...})
     * and that carries the security type contract that its value, as a string,
     * will not cause untrusted script execution (XSS) when evaluated as CSS in a
     * browser.
     *
     * Instances of this type must be created via the factory method,
     * ({@code goog.html.SafeStyle.fromConstant}), and not by invoking its
     * constructor. The constructor intentionally takes no parameters and the type
     * is immutable; hence only a default instance corresponding to the empty
     * string can be obtained via constructor invocation.
     *
     * A SafeStyle's string representation ({@link #getSafeStyleString()}) can
     * safely:
     * <ul>
     *   <li>Be interpolated as the entire content of a *quoted* HTML style
     *       attribute, or before already existing properties. The SafeStyle string
     *       *must be HTML-attribute-escaped* (where " and ' are escaped) before
     *       interpolation.
     *   <li>Be interpolated as the entire content of a {}-wrapped block within a
     *       stylesheet, or before already existing properties. The SafeStyle string
     *       should not be escaped before interpolation. SafeStyle's contract also
     *       guarantees that the string will not be able to introduce new properties
     *       or elide existing ones.
     *   <li>Be assigned to the style property of a DOM node. The SafeStyle string
     *       should not be escaped before being assigned to the property.
     * </ul>
     *
     * A SafeStyle may never contain literal angle brackets. Otherwise, it could
     * be unsafe to place a SafeStyle into a &lt;style&gt; tag (where it can't
     * be HTML escaped). For example, if the SafeStyle containing
     * "{@code font: 'foo &lt;style/&gt;&lt;script&gt;evil&lt;/script&gt;'}" were
     * interpolated within a &lt;style&gt; tag, this would then break out of the
     * style context into HTML.
     *
     * A SafeStyle may contain literal single or double quotes, and as such the
     * entire style string must be escaped when used in a style attribute (if
     * this were not the case, the string could contain a matching quote that
     * would escape from the style attribute).
     *
     * Values of this type must be composable, i.e. for any two values
     * {@code style1} and {@code style2} of this type,
     * {@code style1.getSafeStyleString() + style2.getSafeStyleString()} must
     * itself be a value that satisfies the SafeStyle type constraint. This
     * requirement implies that for any value {@code style} of this type,
     * {@code style.getSafeStyleString()} must not end in a "property value" or
     * "property name" context. For example, a value of {@code background:url("}
     * or {@code font-} would not satisfy the SafeStyle contract. This is because
     * concatenating such strings with a second value that itself does not contain
     * unsafe CSS can result in an overall string that does. For example, if
     * {@code javascript:evil())"} is appended to {@code background:url("}, the
     * resulting string may result in the execution of a malicious script.
     *
     * TODO(user): Consider whether we should implement UTF-8 interchange
     * validity checks and blacklisting of newlines (including Unicode ones) and
     * other whitespace characters (\t, \f). Document here if so and also update
     * SafeStyle.fromConstant().
     *
     * The following example values comply with this type's contract:
     * <ul>
     *   <li><pre>width: 1em;</pre>
     *   <li><pre>height:1em;</pre>
     *   <li><pre>width: 1em;height: 1em;</pre>
     *   <li><pre>background:url('http://url');</pre>
     * </ul>
     * In addition, the empty string is safe for use in a CSS attribute.
     *
     * The following example values do NOT comply with this type's contract:
     * <ul>
     *   <li><pre>background: red</pre> (missing a trailing semi-colon)
     *   <li><pre>background:</pre> (missing a value and a trailing semi-colon)
     *   <li><pre>1em</pre> (missing an attribute name, which provides context for
     *       the value)
     * </ul>
     *
     * @see goog.html.SafeStyle#fromConstant
     * @see http://www.w3.org/TR/css3-syntax/
     * @constructor
     * @final
     * @struct
     * @implements {goog.string.TypedString}
     */
    class SafeStyle implements goog.string.TypedString {
        /**
         * A string-like object which represents a sequence of CSS declarations
         * ({@code propertyName1: propertyvalue1; propertyName2: propertyValue2; ...})
         * and that carries the security type contract that its value, as a string,
         * will not cause untrusted script execution (XSS) when evaluated as CSS in a
         * browser.
         *
         * Instances of this type must be created via the factory method,
         * ({@code goog.html.SafeStyle.fromConstant}), and not by invoking its
         * constructor. The constructor intentionally takes no parameters and the type
         * is immutable; hence only a default instance corresponding to the empty
         * string can be obtained via constructor invocation.
         *
         * A SafeStyle's string representation ({@link #getSafeStyleString()}) can
         * safely:
         * <ul>
         *   <li>Be interpolated as the entire content of a *quoted* HTML style
         *       attribute, or before already existing properties. The SafeStyle string
         *       *must be HTML-attribute-escaped* (where " and ' are escaped) before
         *       interpolation.
         *   <li>Be interpolated as the entire content of a {}-wrapped block within a
         *       stylesheet, or before already existing properties. The SafeStyle string
         *       should not be escaped before interpolation. SafeStyle's contract also
         *       guarantees that the string will not be able to introduce new properties
         *       or elide existing ones.
         *   <li>Be assigned to the style property of a DOM node. The SafeStyle string
         *       should not be escaped before being assigned to the property.
         * </ul>
         *
         * A SafeStyle may never contain literal angle brackets. Otherwise, it could
         * be unsafe to place a SafeStyle into a &lt;style&gt; tag (where it can't
         * be HTML escaped). For example, if the SafeStyle containing
         * "{@code font: 'foo &lt;style/&gt;&lt;script&gt;evil&lt;/script&gt;'}" were
         * interpolated within a &lt;style&gt; tag, this would then break out of the
         * style context into HTML.
         *
         * A SafeStyle may contain literal single or double quotes, and as such the
         * entire style string must be escaped when used in a style attribute (if
         * this were not the case, the string could contain a matching quote that
         * would escape from the style attribute).
         *
         * Values of this type must be composable, i.e. for any two values
         * {@code style1} and {@code style2} of this type,
         * {@code style1.getSafeStyleString() + style2.getSafeStyleString()} must
         * itself be a value that satisfies the SafeStyle type constraint. This
         * requirement implies that for any value {@code style} of this type,
         * {@code style.getSafeStyleString()} must not end in a "property value" or
         * "property name" context. For example, a value of {@code background:url("}
         * or {@code font-} would not satisfy the SafeStyle contract. This is because
         * concatenating such strings with a second value that itself does not contain
         * unsafe CSS can result in an overall string that does. For example, if
         * {@code javascript:evil())"} is appended to {@code background:url("}, the
         * resulting string may result in the execution of a malicious script.
         *
         * TODO(user): Consider whether we should implement UTF-8 interchange
         * validity checks and blacklisting of newlines (including Unicode ones) and
         * other whitespace characters (\t, \f). Document here if so and also update
         * SafeStyle.fromConstant().
         *
         * The following example values comply with this type's contract:
         * <ul>
         *   <li><pre>width: 1em;</pre>
         *   <li><pre>height:1em;</pre>
         *   <li><pre>width: 1em;height: 1em;</pre>
         *   <li><pre>background:url('http://url');</pre>
         * </ul>
         * In addition, the empty string is safe for use in a CSS attribute.
         *
         * The following example values do NOT comply with this type's contract:
         * <ul>
         *   <li><pre>background: red</pre> (missing a trailing semi-colon)
         *   <li><pre>background:</pre> (missing a value and a trailing semi-colon)
         *   <li><pre>1em</pre> (missing an attribute name, which provides context for
         *       the value)
         * </ul>
         *
         * @see goog.html.SafeStyle#fromConstant
         * @see http://www.w3.org/TR/css3-syntax/
         * @constructor
         * @final
         * @struct
         * @implements {goog.string.TypedString}
         */
        constructor();
    
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: any /*missing*/;
    
        /**
         * Returns this SafeStyle's value as a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code SafeStyle}, use {@code goog.html.SafeStyle.unwrap} instead of
         * this method. If in doubt, assume that it's security relevant. In particular,
         * note that goog.html functions which return a goog.html type do not guarantee
         * the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.from(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.from() as fakeSafeHtml instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.SafeStyle#unwrap
         * @override
         */
        getTypedStringValue(): void;
    
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a SafeStyle, use
         * {@code goog.html.SafeStyle.unwrap}.
         *
         * @see goog.html.SafeStyle#unwrap
         * @override
         */
        toString(): void;
    }

    /**
     * A string that is safe to use in URL context in DOM APIs and HTML documents.
     *
     * A SafeUrl is a string-like object that carries the security type contract
     * that its value as a string will not cause untrusted script execution
     * when evaluated as a hyperlink URL in a browser.
     *
     * Values of this type are guaranteed to be safe to use in URL/hyperlink
     * contexts, such as, assignment to URL-valued DOM properties, or
     * interpolation into a HTML template in URL context (e.g., inside a href
     * attribute), in the sense that the use will not result in a
     * Cross-Site-Scripting vulnerability.
     *
     * Note that, as documented in {@code goog.html.SafeUrl.unwrap}, this type's
     * contract does not guarantee that instances are safe to interpolate into HTML
     * without appropriate escaping.
     *
     * Note also that this type's contract does not imply any guarantees regarding
     * the resource the URL refers to.  In particular, SafeUrls are <b>not<b/>
     * safe to use in a context where the referred-to resource is interpreted as
     * trusted code, e.g., as the src of a script tag.
     *
     * Instances of this type must be created via the factory methods
     * ({@code goog.html.SafeUrl.from}, {@code goog.html.SafeUrl.sanitize}), etc and
     * not by invoking its constructor.  The constructor intentionally takes no
     * parameters and the type is immutable; hence only a default instance
     * corresponding to the empty string can be obtained via constructor invocation.
     *
     * @see goog.html.SafeUrl#fromConstant
     * @see goog.html.SafeUrl#from
     * @see goog.html.SafeUrl#sanitize
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    class SafeUrl implements goog.i18n.bidi.DirectionalString {
        /**
         * A string that is safe to use in URL context in DOM APIs and HTML documents.
         *
         * A SafeUrl is a string-like object that carries the security type contract
         * that its value as a string will not cause untrusted script execution
         * when evaluated as a hyperlink URL in a browser.
         *
         * Values of this type are guaranteed to be safe to use in URL/hyperlink
         * contexts, such as, assignment to URL-valued DOM properties, or
         * interpolation into a HTML template in URL context (e.g., inside a href
         * attribute), in the sense that the use will not result in a
         * Cross-Site-Scripting vulnerability.
         *
         * Note that, as documented in {@code goog.html.SafeUrl.unwrap}, this type's
         * contract does not guarantee that instances are safe to interpolate into HTML
         * without appropriate escaping.
         *
         * Note also that this type's contract does not imply any guarantees regarding
         * the resource the URL refers to.  In particular, SafeUrls are <b>not<b/>
         * safe to use in a context where the referred-to resource is interpreted as
         * trusted code, e.g., as the src of a script tag.
         *
         * Instances of this type must be created via the factory methods
         * ({@code goog.html.SafeUrl.from}, {@code goog.html.SafeUrl.sanitize}), etc and
         * not by invoking its constructor.  The constructor intentionally takes no
         * parameters and the type is immutable; hence only a default instance
         * corresponding to the empty string can be obtained via constructor invocation.
         *
         * @see goog.html.SafeUrl#fromConstant
         * @see goog.html.SafeUrl#from
         * @see goog.html.SafeUrl#sanitize
         * @constructor
         * @final
         * @struct
         * @implements {goog.i18n.bidi.DirectionalString}
         * @implements {goog.string.TypedString}
         */
        constructor();
    
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: any /*missing*/;
    
        /**
         * Returns this SafeUrl's value a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code SafeUrl}, use {@code goog.html.SafeUrl.unwrap} instead of this
         * method. If in doubt, assume that it's security relevant. In particular, note
         * that goog.html functions which return a goog.html type do not guarantee that
         * the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.from(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.from() as fakeSafeHtml instanceof goog.html.SafeHtml.
         * </pre>
         *
         * IMPORTANT: The guarantees of the SafeUrl type contract only extend to the
         * behavior of browsers when interpreting URLs. Values of SafeUrl objects MUST
         * be appropriately escaped before embedding in a HTML document. Note that the
         * required escaping is context-sensitive (e.g. a different escaping is
         * required for embedding a URL in a style property within a style
         * attribute, as opposed to embedding in a href attribute).
         *
         * @see goog.html.SafeUrl#unwrap
         * @override
         */
        getTypedStringValue(): void;
    
        /**
         * @override
         * @const
         */
        implementsGoogI18nBidiDirectionalString: any /*missing*/;
    
        /**
         * Returns this URLs directionality, which is always {@code LTR}.
         * @override
         */
        getDirection(): void;
    
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a SafeUrl, use
         * {@code goog.html.SafeUrl.unwrap}.
         *
         * @see goog.html.SafeUrl#unwrap
         * @override
         */
        toString(): void;
    }

    /**
     * A URL which is under application control and from which script, CSS, and
     * other resources that represent executable code, can be fetched.
     *
     * Given that the URL can only be constructed from strings under application
     * control and is used to load resources, bugs resulting in a malformed URL
     * should not have a security impact and are likely to be easily detectable
     * during testing. Given the wide number of non-RFC compliant URLs in use,
     * stricter validation could prevent some applications from being able to use
     * this type.
     *
     * Instances of this type must be created via the factory method,
     * ({@code goog.html.TrustedResourceUrl.fromConstant}), and not by invoking its
     * constructor. The constructor intentionally takes no parameters and the type
     * is immutable; hence only a default instance corresponding to the empty
     * string can be obtained via constructor invocation.
     *
     * @see goog.html.TrustedResourceUrl#fromConstant
     * @constructor
     * @final
     * @struct
     * @implements {goog.i18n.bidi.DirectionalString}
     * @implements {goog.string.TypedString}
     */
    class TrustedResourceUrl implements goog.i18n.bidi.DirectionalString {
        /**
         * A URL which is under application control and from which script, CSS, and
         * other resources that represent executable code, can be fetched.
         *
         * Given that the URL can only be constructed from strings under application
         * control and is used to load resources, bugs resulting in a malformed URL
         * should not have a security impact and are likely to be easily detectable
         * during testing. Given the wide number of non-RFC compliant URLs in use,
         * stricter validation could prevent some applications from being able to use
         * this type.
         *
         * Instances of this type must be created via the factory method,
         * ({@code goog.html.TrustedResourceUrl.fromConstant}), and not by invoking its
         * constructor. The constructor intentionally takes no parameters and the type
         * is immutable; hence only a default instance corresponding to the empty
         * string can be obtained via constructor invocation.
         *
         * @see goog.html.TrustedResourceUrl#fromConstant
         * @constructor
         * @final
         * @struct
         * @implements {goog.i18n.bidi.DirectionalString}
         * @implements {goog.string.TypedString}
         */
        constructor();
    
        /**
         * @override
         * @const
         */
        implementsGoogStringTypedString: any /*missing*/;
    
        /**
         * Returns this TrustedResourceUrl's value as a string.
         *
         * IMPORTANT: In code where it is security relevant that an object's type is
         * indeed {@code TrustedResourceUrl}, use
         * {@code goog.html.TrustedResourceUrl.unwrap} instead of this method. If in
         * doubt, assume that it's security relevant. In particular, note that
         * goog.html functions which return a goog.html type do not guarantee that
         * the returned instance is of the right type. For example:
         *
         * <pre>
         * var fakeSafeHtml = new String('fake');
         * fakeSafeHtml.__proto__ = goog.html.SafeHtml.prototype;
         * var newSafeHtml = goog.html.SafeHtml.from(fakeSafeHtml);
         * // newSafeHtml is just an alias for fakeSafeHtml, it's passed through by
         * // goog.html.SafeHtml.from() as fakeSafeHtml instanceof goog.html.SafeHtml.
         * </pre>
         *
         * @see goog.html.TrustedResourceUrl#unwrap
         * @override
         */
        getTypedStringValue(): void;
    
        /**
         * @override
         * @const
         */
        implementsGoogI18nBidiDirectionalString: any /*missing*/;
    
        /**
         * Returns this URLs directionality, which is always {@code LTR}.
         * @override
         */
        getDirection(): void;
    
        /**
         * Returns a debug string-representation of this value.
         *
         * To obtain the actual string value wrapped in a TrustedResourceUrl, use
         * {@code goog.html.TrustedResourceUrl.unwrap}.
         *
         * @see goog.html.TrustedResourceUrl#unwrap
         * @override
         */
        toString(): void;
    }
}

