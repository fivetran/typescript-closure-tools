// Generated Thu May  1 12:37:08 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
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
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../goog/ui/textarearenderer.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />
/// <reference path="../../goog/ui/decorate.d.ts" />
/// <reference path="../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/ui/control.d.ts" />

declare module goog.ui.Textarea {

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { RESIZE } 

    /**
     * The CSS class name to add to the input when the user has not entered a
     * value.
     */
    var TEXTAREA_PLACEHOLDER_CLASS: any /*missing*/;
}

declare module goog.ui {

    /**
     * A textarea control to handle growing/shrinking with textarea.value.
     *
     * @param {string} content Text to set as the textarea's value.
     * @param {goog.ui.TextareaRenderer=} opt_renderer Renderer used to render or
     *     decorate the textarea. Defaults to {@link goog.ui.TextareaRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     */
    class Textarea extends goog.ui.Control {
        /**
         * A textarea control to handle growing/shrinking with textarea.value.
         *
         * @param {string} content Text to set as the textarea's value.
         * @param {goog.ui.TextareaRenderer=} opt_renderer Renderer used to render or
         *     decorate the textarea. Defaults to {@link goog.ui.TextareaRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         */
        constructor(content: string, opt_renderer?: goog.ui.TextareaRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the default text for the textarea.
         * @param {string} text The default text for the textarea.
         */
        setPlaceholder(text: string): void;
    
        /**
         * @return {number} The minHeight value.
         */
        getMinHeight(): number;
    
        /**
         * Sets a minimum height for the textarea, and calls resize if rendered.
         * @param {number} height New minHeight value.
         */
        setMinHeight(height: number): void;
    
        /**
         * @return {number} The maxHeight value.
         */
        getMaxHeight(): number;
    
        /**
         * Sets a maximum height for the textarea, and calls resize if rendered.
         * @param {number} height New maxHeight value.
         */
        setMaxHeight(height: number): void;
    
        /**
         * Sets the textarea's value.
         * @param {*} value The value property for the textarea, will be cast to a
         *     string by the browser when setting textarea.value.
         */
        setValue(value: any): void;
    
        /**
         * Gets the textarea's value.
         * @return {string} value The value of the textarea.
         */
        getValue(): string;
    
        /**
         * Resizes the textarea vertically.
         */
        resize(): void;
    }
}

