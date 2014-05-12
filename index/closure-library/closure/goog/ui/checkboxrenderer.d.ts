/// <reference path="../../../globals.d.ts" />
/// <reference path="./controlrenderer.d.ts" />
/// <reference path="./checkbox.d.ts" />

declare module goog.ui {

    class CheckboxRenderer extends CheckboxRenderer.__Class { }
    module CheckboxRenderer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ControlRenderer.__Class {
    
            /**
             * Default renderer for {@link goog.ui.Checkbox}s.  Extends the superclass
             * to support checkbox states:
             * @constructor
             * @extends {goog.ui.ControlRenderer}
             */
            constructor();
    
            /**
             * Updates the appearance of the control in response to a checkbox state
             * change.
             * @param {Element} element Checkbox element.
             * @param {goog.ui.Checkbox.State} state Updated checkbox state.
             */
            setCheckboxState(element: Element, state: goog.ui.Checkbox.State): void;
    
            /**
             * Takes a single {@link goog.ui.Checkbox.State}, and returns the
             * corresponding CSS class name.
             * @param {goog.ui.Checkbox.State} state Checkbox state.
             * @return {string} CSS class representing the given state.
             * @protected
             */
            getClassForCheckboxState(state: goog.ui.Checkbox.State): string;
        }
    }
}

declare module goog.ui.CheckboxRenderer {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}
