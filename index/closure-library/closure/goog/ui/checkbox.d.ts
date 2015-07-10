/// <reference path="../../../globals.d.ts" />
/// <reference path="./control.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./checkboxrenderer.d.ts" />

declare module goog.ui {

    class Checkbox extends Checkbox__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Checkbox__Class extends goog.ui.Control__Class  { 
    
            /**
             * 3-state checkbox widget. Fires CHECK or UNCHECK events before toggled and
             * CHANGE event after toggled by user.
             * The checkbox can also be enabled/disabled and get focused and highlighted.
             *
             * @param {goog.ui.Checkbox.State=} opt_checked Checked state to set.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
             *     document interaction.
             * @param {goog.ui.CheckboxRenderer=} opt_renderer Renderer used to render or
             *     decorate the checkbox; defaults to {@link goog.ui.CheckboxRenderer}.
             * @constructor
             * @extends {goog.ui.Control}
             */
            constructor(opt_checked?: goog.ui.Checkbox.State, opt_domHelper?: goog.dom.DomHelper, opt_renderer?: goog.ui.CheckboxRenderer);
    
            /**
             * @return {goog.ui.Checkbox.State} Checked state of the checkbox.
             */
            getChecked(): goog.ui.Checkbox.State;
    
            /**
             * @return {boolean} Whether the checkbox is not checked.
             */
            isUnchecked(): boolean;
    
            /**
             * @return {boolean} Whether the checkbox is in partially checked state.
             */
            isUndetermined(): boolean;
    
            /**
             * Sets the checked state for the checkbox.  Unlike {@link #setChecked},
             * doesn't update the checkbox's DOM.  Considered protected; to be called
             * only by renderer code during element decoration.
             * @param {goog.ui.Checkbox.State} checked New checkbox state.
             */
            setCheckedInternal(checked: goog.ui.Checkbox.State): void;
    
            /**
             * Binds an HTML element to the checkbox which if clicked toggles the checkbox.
             * Behaves the same way as the 'label' HTML tag. The label element has to be the
             * direct or non-direct ancestor of the checkbox element because it will get the
             * focus when keyboard support is implemented.
             *
             * @param {Element} label The label control to set. If null, only the checkbox
             *     reacts to clicks.
             */
            setLabel(label: Element): void;
    
            /**
             * Toggles the checkbox. State transitions:
             * <ul>
             *   <li>unchecked -> checked
             *   <li>undetermined -> checked
             *   <li>checked -> unchecked
             * </ul>
             */
            toggle(): void;
    } 
    
}

declare module goog.ui.Checkbox {

    /**
     * Possible checkbox states.
     * @enum {?boolean}
     */
    enum State { CHECKED, UNCHECKED, UNDETERMINED } 
}
