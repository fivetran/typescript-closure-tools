/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
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
/// <reference path="../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/textarearenderer.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/control.d.ts" />

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

