/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractspellchecker.d.ts" />
/// <reference path="../spell/spellcheck.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="../events/browserevent.d.ts" />

declare module goog.ui {

    class PlainTextSpellChecker extends PlainTextSpellChecker__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PlainTextSpellChecker__Class extends goog.ui.AbstractSpellChecker__Class  { 
    
            /**
             * Plain text spell checker implementation.
             *
             * @param {goog.spell.SpellCheck} handler Instance of the SpellCheckHandler
             *     support object to use. A single instance can be shared by multiple
             *     editor components.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
             * @constructor
             * @extends {goog.ui.AbstractSpellChecker}
             * @final
             */
            constructor(handler: goog.spell.SpellCheck, opt_domHelper?: goog.dom.DomHelper);
    
            /**
             * Class name for invalid words.
             * @type {string}
             */
            invalidWordClassName: string;
    
            /**
             * Class name for corrected words.
             * @type {string}
             */
            correctedWordClassName: string;
    
            /**
             * Class name for correction pane.
             * @type {string}
             */
            correctionPaneClassName: string;
    
            /**
             * Handles key down for overlay.
             * @param {goog.events.BrowserEvent} e The browser event.
             * @return {boolean|undefined} The handled value.
             */
            handleOverlayKeyEvent(e: goog.events.BrowserEvent): boolean|any /*undefined*/;
    } 
    
}
