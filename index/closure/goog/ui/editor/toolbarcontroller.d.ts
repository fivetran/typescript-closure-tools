/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/editor/defines.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../../closure/goog/editor/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/editor/icontent.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/editor/command.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/editor/style.d.ts" />
/// <reference path="../../../../closure/goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../../closure/goog/dom/iter.d.ts" />
/// <reference path="../../../../closure/goog/editor/node.d.ts" />
/// <reference path="../../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../../closure/goog/dom/abstractrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/textrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../../closure/goog/dom/controlrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/multirange.d.ts" />
/// <reference path="../../../../closure/goog/dom/range.d.ts" />
/// <reference path="../../../../closure/goog/editor/range.d.ts" />
/// <reference path="../../../../closure/goog/editor/plugin.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../../closure/goog/editor/field.d.ts" />

declare module goog.ui.editor {

    /**
     * A class for managing the editor toolbar.  Acts as a bridge between
     * a {@link goog.editor.Field} and a {@link goog.ui.Toolbar}.
     *
     * The {@code toolbar} argument must be an instance of {@link goog.ui.Toolbar}
     * or a subclass.  This class doesn't care how the toolbar was created.  As
     * long as one or more controls hosted  in the toolbar have IDs that match
     * built-in {@link goog.editor.Command}s, they will function as expected.  It is
     * the caller's responsibility to ensure that the toolbar is already rendered
     * or that it decorates an existing element.
     *
     *
     * @param {!goog.editor.Field} field Editable field to be controlled by the
     *     toolbar.
     * @param {!goog.ui.Toolbar} toolbar Toolbar to control the editable field.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ToolbarController extends goog.events.EventTarget {
        /**
         * A class for managing the editor toolbar.  Acts as a bridge between
         * a {@link goog.editor.Field} and a {@link goog.ui.Toolbar}.
         *
         * The {@code toolbar} argument must be an instance of {@link goog.ui.Toolbar}
         * or a subclass.  This class doesn't care how the toolbar was created.  As
         * long as one or more controls hosted  in the toolbar have IDs that match
         * built-in {@link goog.editor.Command}s, they will function as expected.  It is
         * the caller's responsibility to ensure that the toolbar is already rendered
         * or that it decorates an existing element.
         *
         *
         * @param {!goog.editor.Field} field Editable field to be controlled by the
         *     toolbar.
         * @param {!goog.ui.Toolbar} toolbar Toolbar to control the editable field.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(field: goog.editor.Field, toolbar: goog.ui.Toolbar);
    
        /**
         * Returns the Closure component ID of the control that corresponds to the
         * given {@link goog.editor.Command} constant.
         * Subclasses may override this method if they want to use a custom mapping
         * scheme from commands to controls.
         * @param {string} command Editor command.
         * @return {string} Closure component ID of the corresponding toolbar
         *     control, if any.
         * @protected
         */
        getComponentId(command: string): string;
    
        /**
         * Returns the {@link goog.editor.Command} constant
         * that corresponds to the given Closure component ID.  Subclasses may override
         * this method if they want to use a custom mapping scheme from controls to
         * commands.
         * @param {string} id Closure component ID of a toolbar control.
         * @return {string} Editor command or dialog constant corresponding to the
         *     toolbar control, if any.
         * @protected
         */
        getCommand(id: string): string;
    
        /**
         * Returns the event handler object for the editor toolbar.  Useful for classes
         * that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.events.EventHandler.<T>} The event handler object.
         * @protected
         * @this T
         * @template T
         */
        getHandler<T>(): goog.events.EventHandler<T>;
    
        /**
         * Returns the field instance managed by the toolbar.  Useful for
         * classes that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.editor.Field} The field managed by the toolbar.
         * @protected
         */
        getField(): goog.editor.Field;
    
        /**
         * Returns the toolbar UI component that manages the editor.  Useful for
         * classes that extend {@code goog.ui.editor.ToolbarController}.
         * @return {!goog.ui.Toolbar} The toolbar UI component.
         */
        getToolbar(): goog.ui.Toolbar;
    
        /**
         * @return {boolean} Whether the toolbar is visible.
         */
        isVisible(): boolean;
    
        /**
         * Shows or hides the toolbar.
         * @param {boolean} visible Whether to show or hide the toolbar.
         */
        setVisible(visible: boolean): void;
    
        /**
         * @return {boolean} Whether the toolbar is enabled.
         */
        isEnabled(): boolean;
    
        /**
         * Enables or disables the toolbar.
         * @param {boolean} enabled Whether to enable or disable the toolbar.
         */
        setEnabled(enabled: boolean): void;
    
        /**
         * Programmatically blurs the editor toolbar, un-highlighting the currently
         * highlighted item, and closing the currently open menu (if any).
         */
        blur(): void;
    
        /**
         * Updates the toolbar in response to editor events.  Specifically, updates
         * button states based on {@code COMMAND_VALUE_CHANGE} events, reflecting the
         * effective formatting of the selection.
         * @param {goog.events.Event} e Editor event to handle.
         * @protected
         */
        updateToolbar(e: goog.events.Event): void;
    
        /**
         * Updates the toolbar to reflect a given state.
         * @param {Object} state Object mapping editor commands to values.
         */
        updateToolbarFromState(state: Object): void;
    
        /**
         * Handles {@code ACTION} events dispatched by toolbar buttons in response to
         * user actions by executing the corresponding field command.
         * @param {goog.events.Event} e Action event to handle.
         * @protected
         */
        handleAction(e: goog.events.Event): void;
    }
}

