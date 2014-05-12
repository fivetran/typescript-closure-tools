/// <reference path="../../../globals.d.ts" />
/// <reference path="../string/typedstring.d.ts" />
/// <reference path="../string/const.d.ts" />

declare module goog.html {

    class SafeStyle extends SafeStyle.__Class { }
    module SafeStyle {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.string.TypedString {
    
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
             * Interface marker of the TypedString interface.
             *
             * This property can be used to determine at runtime whether or not an object
             * implements this interface.  All implementations of this interface set this
             * property to {@code true}.
             * @type {boolean}
             */
            implementsGoogStringTypedString: boolean;
    
            /**
             * Retrieves this wrapped string's value.
             * @return {!string} The wrapped string's value.
             */
            getTypedStringValue(): string;
        }
    }
}

declare module goog.html.SafeStyle {

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
