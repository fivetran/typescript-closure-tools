/// <reference path="../../../globals.d.ts" />
/// <reference path="../ui/component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.demos {

    class SampleComponent extends SampleComponent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class SampleComponent__Class extends goog.ui.Component__Class  { 
    
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
