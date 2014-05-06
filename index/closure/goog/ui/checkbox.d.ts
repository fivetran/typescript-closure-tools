/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/checkboxrenderer.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />

declare module goog.ui {

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
    class Checkbox extends goog.ui.Control {
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

