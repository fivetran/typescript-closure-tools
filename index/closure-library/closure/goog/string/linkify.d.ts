/// <reference path="../../../globals.d.ts" />

declare module goog._string.linkify {

    /**
     * Takes a string of plain text and linkifies URLs and email addresses. For a
     * URL (unless opt_attributes is specified), the target of the link will be
     * _blank and it will have a rel=nofollow attribute applied to it so that links
     * created by linkify will not be of interest to search engines.
     * @param {string} text Plain text.
     * @param {Object.<string, string>=} opt_attributes Attributes to add to all
     *      links created. Default are rel=nofollow and target=blank. To clear those
     *      default attributes set rel='' and target='_blank'.
     * @return {string} HTML Linkified HTML text.
     */
    function linkifyPlainText(text: string, opt_attributes?: { [key: string]: string }): string;

    /**
     * Gets the first URI in text.
     * @param {string} text Plain text.
     * @return {string} The first URL, or an empty string if not found.
     */
    function findFirstUrl(text: string): string;

    /**
     * Gets the first email address in text.
     * @param {string} text Plain text.
     * @return {string} The first email address, or an empty string if not found.
     */
    function findFirstEmail(text: string): string;
}
