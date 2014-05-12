/// <reference path="../../../../globals.d.ts" />
/// <reference path="./editorpane.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.ui.equation {

    class TexPane extends TexPane.__Class { }
    module TexPane {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.equation.EditorPane.__Class {
    
            /**
             * User interface for TeX equation editor tab pane.
             * @param {Object} context The context this Tex editor pane runs in.
             * @param {string} helpUrl The help link URL.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.equation.EditorPane}
             * @final
             */
            constructor(context: Object, helpUrl: string, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}

declare module goog.ui.equation.TexPane {

    /**
     * The CSS class name for the preview container.
     * @type {string}
     */
    var PREVIEW_CONTAINER_CSS_CLASS: string;

    /**
     * The CSS class name for section titles.
     * @type {string}
     */
    var SECTION_TITLE_CSS_CLASS: string;

    /**
     * The CSS class name for section titles that float left.
     * @type {string}
     */
    var SECTION_TITLE_FLOAT_CSS_CLASS: string;

    /**
     * The CSS id name for the link to "Learn more".
     * @type {string}
     */
    var SECTION_LEARN_MORE_CSS_ID: string;

    /**
     * The CSS class name for the Tex editor.
     * @type {string}
     */
    var TEX_EDIT_CSS_CLASS: string;

    /**
     * The CSS class name for the preview container.
     * @type {string}
     */
    var WARNING_CLASS: string;
}
