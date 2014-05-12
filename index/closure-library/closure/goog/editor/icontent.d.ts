/// <reference path="../../../globals.d.ts" />

declare module goog.editor.icontent {

    class FieldFormatInfo extends FieldFormatInfo.__Class { }
    module FieldFormatInfo {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A data structure for storing simple rendering info about a field.
             *
             * @param {string} fieldId The id of the field.
             * @param {boolean} standards Whether the field should be rendered in
             *     standards mode.
             * @param {boolean} blended Whether the field is in blended mode.
             * @param {boolean} fixedHeight Whether the field is in fixedHeight mode.
             * @param {Object=} opt_extraStyles Other style attributes for the field,
             *     represented as a map of strings.
             * @constructor
             * @final
             */
            constructor(fieldId: string, standards: boolean, blended: boolean, fixedHeight: boolean, opt_extraStyles?: Object);
        }
    }

    class FieldStyleInfo extends FieldStyleInfo.__Class { }
    module FieldStyleInfo {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * A data structure for storing simple info about the styles of a field.
             * Only needed in Firefox/Blended mode.
             * @param {Element} wrapper The wrapper div around a field.
             * @param {string} css The css for a field.
             * @constructor
             * @final
             */
            constructor(wrapper: Element, css: string);
        }
    }

    /**
     * Sets up goog.editor.icontent to always use standards-mode iframes.
     */
    function forceStandardsModeIframes(): void;

    /**
     * Write the initial iframe content in normal mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     * @param {goog.editor.icontent.FieldStyleInfo?} style Style info about
     *     the field, if needed.
     * @param {HTMLIFrameElement} iframe The iframe.
     */
    function writeNormalInitialBlendedIframe(info: goog.editor.icontent.FieldFormatInfo, bodyHtml: string, style: goog.editor.icontent.FieldStyleInfo, iframe: HTMLIFrameElement): void;

    /**
     * Write the initial iframe content in normal mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     * @param {goog.editor.icontent.FieldStyleInfo?} style Style info about
     *     the field, if needed.
     * @param {HTMLIFrameElement} iframe The iframe.
     */
    function writeNormalInitialIframe(info: goog.editor.icontent.FieldFormatInfo, bodyHtml: string, style: goog.editor.icontent.FieldStyleInfo, iframe: HTMLIFrameElement): void;

    /**
     * Write the initial iframe content in IE/HTTPS mode.
     * @param {goog.editor.icontent.FieldFormatInfo} info Formatting info about
     *     the field.
     * @param {Document} doc The iframe document.
     * @param {string} bodyHtml The HTML to insert as the iframe body.
     */
    function writeHttpsInitialIframe(info: goog.editor.icontent.FieldFormatInfo, doc: Document, bodyHtml: string): void;
}
