// Generated Thu May  1 16:38:31 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/string/typedstring.d.ts" />
/// <reference path="../../goog/string/const.d.ts" />
/// <reference path="../../goog/i18n/bidi.d.ts" />
/// <reference path="../../goog/html/safeurl.d.ts" />
/// <reference path="../../goog/html/safestyle.d.ts" />
/// <reference path="../../goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/dom/tags.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/html/safehtml.d.ts" />
/// <reference path="../../goog/html/uncheckedconversions.d.ts" />

declare module goog.soy.data {

    /**
     * A type of textual content.
     *
     * This is an enum of type Object so that these values are unforgeable.
     *
     * @enum {!Object}
     */
    enum SanitizedContentKind { HTML, JS, JS_STR_CHARS, URI, ATTRIBUTES, CSS, TEXT } 

    /**
     * A string-like object that carries a content-type and a content direction.
     *
     * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
     * Instead, use a trusted, centrally reviewed library as endorsed by your team
     * to generate these objects. Otherwise, you risk accidentally creating
     * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
     * templates.
     *
     * @constructor
     */
    class SanitizedContent {
        /**
         * A string-like object that carries a content-type and a content direction.
         *
         * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
         * Instead, use a trusted, centrally reviewed library as endorsed by your team
         * to generate these objects. Otherwise, you risk accidentally creating
         * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
         * templates.
         *
         * @constructor
         */
        constructor();
    
        /**
         * The context in which this content is safe from XSS attacks.
         * @type {goog.soy.data.SanitizedContentKind}
         */
        contentKind: goog.soy.data.SanitizedContentKind;
    
        /**
         * The content's direction; null if unknown and thus to be estimated when
         * necessary.
         * @type {?goog.i18n.bidi.Dir}
         */
        contentDir: goog.i18n.bidi.Dir;
    
        /**
         * The already-safe content.
         * @type {string}
         */
        content: string;
    
        /**
         * Converts sanitized content of kind TEXT or HTML into SafeHtml. HTML content
         * is converted without modification, while text content is HTML-escaped.
         * @return {!goog.html.SafeHtml}
         * @throws {Error} when the content kind is not TEXT or HTML.
         */
        toSafeHtml(): goog.html.SafeHtml;
    }
}

