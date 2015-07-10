/// <reference path="../../../globals.d.ts" />
/// <reference path="../i18n/bidi.d.ts" />
/// <reference path="../string/typedstring.d.ts" />
/// <reference path="../string/const.d.ts" />
/// <reference path="./safeurl.d.ts" />
/// <reference path="./safestyle.d.ts" />

declare module goog.html {

    class SafeHtml extends SafeHtml__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class SafeHtml__Class implements goog.i18n.bidi.DirectionalString, goog.string.TypedString  { 
    
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

declare module goog.html.SafeHtml {

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
     * Shorthand for union of types that can be sensibly converted to strings.
     * @private
     * @typedef {string|number|boolean|!goog.string.TypedString|
     *           !goog.i18n.bidi.DirectionalString}
     */
    type StringLike_ = string|number|boolean|goog.string.TypedString|goog.i18n.bidi.DirectionalString;

    /**
     * Shorthand for union of types that can be sensibly converted to SafeHtml.
     * @private
     * @typedef {!goog.html.SafeHtml.StringLike_|!goog.html.SafeHtml}
     */
    type TextOrHtml_ = goog.html.SafeHtml.StringLike_|goog.html.SafeHtml;

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
     * Returns HTML-escaped text as a SafeHtml object with newlines changed to <br>.
     * @param {!goog.html.SafeHtml.StringLike_} text The string to escape.
     * @return {!goog.html.SafeHtml} The escaped string, wrapped as a SafeHtml.
     */
    function htmlEscapePreservingNewlines(text: goog.html.SafeHtml.StringLike_): goog.html.SafeHtml;

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
     * @private
     * @typedef {string|goog.string.Const|goog.html.SafeUrl|goog.html.SafeStyle}
     */
    type AttributeValue_ = string|goog.string.Const|goog.html.SafeUrl|goog.html.SafeStyle;

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
    function create(tagName: string, opt_attributes?: { [key: string]: goog.html.SafeHtml.AttributeValue_ }, opt_content?: goog.html.SafeHtml.TextOrHtml_|goog.html.SafeHtml.TextOrHtml_[]): goog.html.SafeHtml;

    /**
     * Creates a SafeHtml content with known directionality consisting of a tag with
     * optional attributes and optional content.
     * @param {!goog.i18n.bidi.Dir} dir Directionality.
     * @param {string} tagName
     * @param {!Object.<string, goog.html.SafeHtml.AttributeValue_>=} opt_attributes
     * @param {!goog.html.SafeHtml.TextOrHtml_|
     *     !Array.<!goog.html.SafeHtml.TextOrHtml_>=} opt_content
     * @return {!goog.html.SafeHtml} The SafeHtml content with the tag.
     */
    function createWithDir(dir: goog.i18n.bidi.Dir, tagName: string, opt_attributes?: { [key: string]: goog.html.SafeHtml.AttributeValue_ }, opt_content?: goog.html.SafeHtml.TextOrHtml_|goog.html.SafeHtml.TextOrHtml_[]): goog.html.SafeHtml;

    /**
     * Creates a new SafeHtml object by concatenating the values.
     * @param {...!goog.html.SafeHtml.TextOrHtml_|
     *     !Array.<!goog.html.SafeHtml.TextOrHtml_>} var_args Elements of array
     *     arguments would be processed recursively.
     * @return {!goog.html.SafeHtml}
     */
    function concat(...var_args: (goog.html.SafeHtml.TextOrHtml_|goog.html.SafeHtml.TextOrHtml_[])[]): goog.html.SafeHtml;

    /**
     * Creates a new SafeHtml object with known directionality by concatenating the
     * values.
     * @param {!goog.i18n.bidi.Dir} dir Directionality.
     * @param {...!goog.html.SafeHtml.TextOrHtml_|
     *     !Array.<!goog.html.SafeHtml.TextOrHtml_>} var_args Elements of array
     *     arguments would be processed recursively.
     * @return {!goog.html.SafeHtml}
     */
    function concatWithDir(dir: goog.i18n.bidi.Dir, ...var_args: (goog.html.SafeHtml.TextOrHtml_|goog.html.SafeHtml.TextOrHtml_[])[]): goog.html.SafeHtml;

    /**
     * A SafeHtml instance corresponding to the empty string.
     * @const {!goog.html.SafeHtml}
     */
    var EMPTY: any /*missing*/;
}
