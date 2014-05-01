// Generated Thu May  1 12:38:55 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/events/inputhandler.d.ts" />

declare module goog.ui.CharCounter {

    /**
     * Display mode for the char counter.
     * @enum {number}
     */
    enum Display { REMAINING, INCREMENTAL } 
}

declare module goog.ui {

    /**
     * CharCounter widget. Counts the number of characters in a input field or a
     * text box and displays the number of additional characters that may be
     * entered before the maximum length is reached.
     *
     * @extends {goog.events.EventTarget}
     * @param {HTMLInputElement|HTMLTextAreaElement} elInput Input or text area
     *     element to count the number of characters in.
     * @param {Element} elCount HTML element to display the remaining number of
     *     characters in. You can pass in null for this if you don't want to expose
     *     the number of chars remaining.
     * @param {number} maxLength The maximum length.
     * @param {goog.ui.CharCounter.Display=} opt_displayMode Display mode for this
     *     char counter. Defaults to {@link goog.ui.CharCounter.Display.REMAINING}.
     * @constructor
     * @final
     */
    class CharCounter extends goog.events.EventTarget {
        /**
         * CharCounter widget. Counts the number of characters in a input field or a
         * text box and displays the number of additional characters that may be
         * entered before the maximum length is reached.
         *
         * @extends {goog.events.EventTarget}
         * @param {HTMLInputElement|HTMLTextAreaElement} elInput Input or text area
         *     element to count the number of characters in.
         * @param {Element} elCount HTML element to display the remaining number of
         *     characters in. You can pass in null for this if you don't want to expose
         *     the number of chars remaining.
         * @param {number} maxLength The maximum length.
         * @param {goog.ui.CharCounter.Display=} opt_displayMode Display mode for this
         *     char counter. Defaults to {@link goog.ui.CharCounter.Display.REMAINING}.
         * @constructor
         * @final
         */
        constructor(elInput: any /*HTMLInputElement|HTMLTextAreaElement*/, elCount: Element, maxLength: number, opt_displayMode?: goog.ui.CharCounter.Display);
    
        /**
         * Sets the maximum length.
         *
         * @param {number} maxLength The maximum length.
         */
        setMaxLength(maxLength: number): void;
    
        /**
         * Returns the maximum length.
         *
         * @return {number} The maximum length.
         */
        getMaxLength(): number;
    
        /**
         * Sets the display mode.
         *
         * @param {!goog.ui.CharCounter.Display} displayMode The display mode.
         */
        setDisplayMode(displayMode: goog.ui.CharCounter.Display): void;
    
        /**
         * Returns the display mode.
         *
         * @return {!goog.ui.CharCounter.Display} The display mode.
         */
        getDisplayMode(): goog.ui.CharCounter.Display;
    
        /**
         * Checks length of text in input field and updates the counter. Truncates text
         * if the maximum lengths is exceeded.
         */
        checkLength(): void;
    }
}

