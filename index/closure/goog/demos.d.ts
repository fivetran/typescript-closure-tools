// Generated Wed Apr 30 16:37:50 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/ui.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.demos' {

    /**
     * A simple box that changes colour when clicked. This class demonstrates the
     * goog.ui.Component API, and is keyboard accessible, as per
     * http://wiki/Main/ClosureKeyboardAccessible
     *
     * @param {string=} opt_label A label to display. Defaults to "Click Me" if none
     *     provided.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper to use.
     *
     * @extends {goog.ui.Component}
     * @constructor
     * @final
     */
    class SampleComponent extends goog.ui.Component {
        /**
         * A simple box that changes colour when clicked. This class demonstrates the
         * goog.ui.Component API, and is keyboard accessible, as per
         * http://wiki/Main/ClosureKeyboardAccessible
         *
         * @param {string=} opt_label A label to display. Defaults to "Click Me" if none
         *     provided.
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper to use.
         *
         * @extends {goog.ui.Component}
         * @constructor
         * @final
         */
        constructor(opt_label?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Creates an initial DOM representation for the component.
         * @override
         */
        createDom(): void;
    
        /**
         * Decorates an existing HTML DIV element as a SampleComponent.
         *
         * @param {Element} element The DIV element to decorate. The element's
         *    text, if any will be used as the component's label.
         * @override
         */
        decorateInternal(element: Element): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Called when component's element is known to be in the document.
         * @override
         */
        enterDocument(): void;
    
        /**
         * Called when component's element is known to have been removed from the
         * document.
         * @override
         */
        exitDocument(): void;
    
        /**
         * Gets the current label text.
         *
         * @return {string} The current text set into the label, or empty string if
         *     none set.
         */
        getLabelText(): string;
    
        /**
         * Sets the current label text. Has no effect if component is not rendered.
         *
         * @param {string} text The text to set as the label.
         */
        setLabelText(text: string): void;
    }
}

