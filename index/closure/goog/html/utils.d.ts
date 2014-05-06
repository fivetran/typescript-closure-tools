/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />

declare module goog.html.utils {

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

