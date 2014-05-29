/// <reference path="../../../globals.d.ts" />

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
}
