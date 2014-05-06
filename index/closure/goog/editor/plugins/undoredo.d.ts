/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodeoffset.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/dom/iter.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/editor/node.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/editor/defines.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../../closure/goog/editor/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/editor/icontent.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/editor/command.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/editor/style.d.ts" />
/// <reference path="../../../../closure/goog/dom/rangeendpoint.d.ts" />
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
/// <reference path="../../../../closure/goog/editor/plugins/undoredostate.d.ts" />
/// <reference path="../../../../closure/goog/editor/plugins/undoredomanager.d.ts" />

declare module goog.editor.plugins {

    /**
     * Encapsulates undo/redo logic using a custom undo stack (i.e. not browser
     * built-in). Browser built-in undo stacks are too flaky (e.g. IE's gets
     * clobbered on DOM modifications). Also, this allows interleaving non-editing
     * commands into the undo stack via the UndoRedoManager.
     *
     * @param {goog.editor.plugins.UndoRedoManager=} opt_manager An undo redo
     *    manager to be used by this plugin. If none is provided one is created.
     * @constructor
     * @extends {goog.editor.Plugin}
     */
    class UndoRedo extends goog.editor.Plugin {
        /**
         * Encapsulates undo/redo logic using a custom undo stack (i.e. not browser
         * built-in). Browser built-in undo stacks are too flaky (e.g. IE's gets
         * clobbered on DOM modifications). Also, this allows interleaving non-editing
         * commands into the undo stack via the UndoRedoManager.
         *
         * @param {goog.editor.plugins.UndoRedoManager=} opt_manager An undo redo
         *    manager to be used by this plugin. If none is provided one is created.
         * @constructor
         * @extends {goog.editor.Plugin}
         */
        constructor(opt_manager?: goog.editor.plugins.UndoRedoManager);
    
        /**
         * Set the max undo stack depth (not the real memory usage).
         * @param {number} depth Depth of the stack.
         */
        setMaxUndoDepth(depth: number): void;
    
        /**
         * Set the undo-redo manager used by this plugin. Any state on a previous
         * undo-redo manager is lost.
         * @param {goog.editor.plugins.UndoRedoManager} manager The undo-redo manager.
         */
        setUndoRedoManager(manager: goog.editor.plugins.UndoRedoManager): void;
    
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @return {goog.editor.Field} The active field object for this field. This is
         *     the one registered field object for the single-plugin case and the
         *     focused field for the multi-field plugin case.
         */
        getCurrentFieldObject(): goog.editor.Field;
    
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @param {string} fieldHashCode The Field's hashcode.
         * @return {goog.editor.Field} The field object with the hashcode.
         */
        getFieldObjectForHash(fieldHashCode: string): goog.editor.Field;
    
        /**
         * This is so subclasses can deal with multifield undo-redo.
         * @return {goog.editor.Field} Target for COMMAND_VALUE_CHANGE events.
         */
        getCurrentEventTarget(): goog.editor.Field;
    
        /**
         * Restores the state of the editable field.
         * @param {goog.editor.plugins.UndoRedo.UndoState_} state The state initiating
         *    the restore.
         * @param {string} content The content to restore.
         * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
         *     The cursor position within the content.
         */
        restoreState(state: any, content: string, cursorPosition: any): void;
    
        /**
         * Clear the undo/redo stack.
         */
        clearHistory(): void;
    
        /**
         * Refreshes the current state of the editable field as maintained by undo-redo,
         * without adding any undo-redo states to the stack.
         * @param {goog.editor.Field} fieldObject The editable field.
         */
        refreshCurrentState(fieldObject: goog.editor.Field): void;
    }
}

declare module goog.editor.plugins.UndoRedo {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum COMMAND { UNDO, REDO } 
}

