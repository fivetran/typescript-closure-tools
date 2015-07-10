/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractspellchecker.d.ts" />
/// <reference path="../spell/spellcheck.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class RichTextSpellChecker extends RichTextSpellChecker__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class RichTextSpellChecker__Class extends goog.ui.AbstractSpellChecker__Class  { 
    
            /**
             * Rich text spell checker implementation.
             *
             * @param {goog.spell.SpellCheck} handler Instance of the SpellCheckHandler
             *     support object to use. A single instance can be shared by multiple editor
             *     components.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.AbstractSpellChecker}
             * @final
             */
            constructor(handler: goog.spell.SpellCheck, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Class name for word spans.
             * @type {string}
             */
            wordClassName: string;
    
            /**
             * Tag name porition of the marker for the text that does not need to be checked
             * for spelling.
             *
             * @type {Array.<string|undefined>}
             */
            excludeTags: string|any /*undefined*/[];
    
            /**
             * CSS Style text for invalid words. As it's set inside the rich edit iframe
             * classes defined in the parent document are not availble, thus the style is
             * set inline.
             * @type {string}
             */
            invalidWordCssText: string;
    } 
    
}
