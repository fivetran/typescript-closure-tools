// Generated Wed Apr 30 22:41:47 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />

declare module goog.ui {

    /**
     * This creates the label input object.
     * @param {string=} opt_label The text to show as the label.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class LabelInput extends goog.ui.Component {
        /**
         * This creates the label input object.
         * @param {string=} opt_label The text to show as the label.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(opt_label?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * The label restore delay after leaving the input.
         * @type {number} Delay for restoring the label.
         * @protected
         */
        labelRestoreDelayMs: number;
    
        /**
         * The CSS class name to add to the input when the user has not entered a
         * value.
         */
        LABEL_CLASS_NAME: any /*missing*/;
    
        /**
         * @return {boolean} Whether the control is currently focused on.
         */
        hasFocus(): boolean;
    
        /**
         * @return {boolean} Whether the value has been changed by the user.
         */
        hasChanged(): boolean;
    
        /**
         * Clears the value of the input element without resetting the default text.
         */
        clear(): void;
    
        /**
         * Clears the value of the input element and resets the default text.
         */
        reset(): void;
    
        /**
         * Use this to set the value through script to ensure that the label state is
         * up to date
         * @param {string} s The new value for the input.
         */
        setValue(s: string): void;
    
        /**
         * Returns the current value of the text box, returning an empty string if the
         * search box is the default value
         * @return {string} The value of the input box.
         */
        getValue(): string;
    
        /**
         * Sets the label text.
         * @param {string} label The text to show as the label.
         */
        setLabel(label: string): void;
    
        /**
         * @return {string} The text to show as the label.
         */
        getLabel(): string;
    
        /**
         * This method focuses the input and selects all the text. If the value hasn't
         * changed it will set the value to the label so that the label text is
         * selected.
         */
        focusAndSelect(): void;
    
        /**
         * Enables/Disables the label input.
         * @param {boolean} enabled Whether to enable (true) or disable (false) the
         *     label input.
         */
        setEnabled(enabled: boolean): void;
    
        /**
         * @return {boolean} True if the label input is enabled, false otherwise.
         */
        isEnabled(): boolean;
    }
}

