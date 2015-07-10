/// <reference path="../../../../globals.d.ts" />
/// <reference path="../plugin.d.ts" />
/// <reference path="./undoredomanager.d.ts" />
/// <reference path="../field.d.ts" />
/// <reference path="./undoredostate.d.ts" />

declare module goog.editor.plugins {

    class UndoRedo extends UndoRedo__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class UndoRedo__Class extends goog.editor.Plugin__Class  { 
    
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
            restoreState(state: goog.editor.plugins.UndoRedo.UndoState_, content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_): void;
    
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

    class UndoState_ extends UndoState___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class UndoState___Class extends goog.editor.plugins.UndoRedoState__Class  { 
    
            /**
             * This object encapsulates the state of an editable field.
             *
             * @param {string} fieldHashCode String the id of the field we're saving the
             *     content of.
             * @param {string} content String the actual text we're saving.
             * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
             *     CursorPosLite object for the cursor position in the field.
             * @param {Function} restore The function used to restore editable field state.
             * @private
             * @constructor
             * @extends {goog.editor.plugins.UndoRedoState}
             */
            constructor(fieldHashCode: string, content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_, restore: Function);
    
            /**
             * The hash code for the field whose content is being saved.
             * @type {string}
             */
            fieldHashCode: string;
    
            /**
             * Updates the undo portion of this state. Should only be used to update the
             * current state of an editable field, which is not yet on the undo stack after
             * an undo or redo operation. You should never be modifying states on the stack!
             * @param {string} content The current content.
             * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
             *     The current cursor position.
             */
            setUndoState(content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_): void;
    
            /**
             * Adds redo information to this state. This method should be called before the
             * state is added onto the undo stack.
             *
             * @param {string} content The content to restore on a redo.
             * @param {goog.editor.plugins.UndoRedo.CursorPosition_?} cursorPosition
             *     The cursor position to restore on a redo.
             */
            setRedoState(content: string, cursorPosition: goog.editor.plugins.UndoRedo.CursorPosition_): void;
    } 
    

    class CursorPosition_ extends CursorPosition___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CursorPosition___Class  { 
    
            /**
             * Stores the state of the selection in a way the survives DOM modifications
             * that don't modify the user-interactable content (e.g. making something bold
             * vs. typing a character).
             *
             * TODO(user): Completely get rid of this and use goog.dom.SavedCaretRange.
             *
             * @param {goog.editor.Field} field The field the selection is in.
             * @private
             * @constructor
             */
            constructor(field: goog.editor.Field);
    
            /**
             * @return {boolean} Whether this object is valid.
             */
            isValid(): boolean;
    
            /**
             * Makes the browser's selection match the cursor position.
             */
            select(): void;
    } 
    

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum COMMAND { UNDO, REDO } 
}
