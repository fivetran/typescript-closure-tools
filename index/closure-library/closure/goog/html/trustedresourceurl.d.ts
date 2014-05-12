/// <reference path="../../../globals.d.ts" />
/// <reference path="../i18n/bidi.d.ts" />
/// <reference path="../string/typedstring.d.ts" />
/// <reference path="../string/const.d.ts" />

declare module goog.html {

    class TrustedResourceUrl extends TrustedResourceUrl.__Class { }
    module TrustedResourceUrl {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class implements goog.i18n.bidi.DirectionalString, goog.string.TypedString {
    
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
             * Interface marker of the DirectionalString interface.
             *
             * This property can be used to determine at runtime whether or not an object
             * implements this interface.  All implementations of this interface set this
             * property to {@code true}.
             * @type {boolean}
             */
            implementsGoogI18nBidiDirectionalString: boolean;
    
            /**
             * Retrieves this object's known direction (if any).
             * @return {?goog.i18n.bidi.Dir} The known direction. Null if unknown.
             */
            getDirection(): goog.i18n.bidi.Dir;
    
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

declare module goog.html.TrustedResourceUrl {

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
