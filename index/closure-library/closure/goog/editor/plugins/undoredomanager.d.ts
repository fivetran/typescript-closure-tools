/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/eventtarget.d.ts" />
/// <reference path="./undoredostate.d.ts" />

declare module goog.editor.plugins {

    class UndoRedoManager extends UndoRedoManager.__Class { }
    module UndoRedoManager {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.EventTarget.__Class {
    
            /**
             * Manages undo and redo operations through a series of {@code UndoRedoState}s
             * maintained on undo and redo stacks.
             *
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor();
    
            /**
             * Set the max undo stack depth (not the real memory usage).
             * @param {number} depth Depth of the stack.
             */
            setMaxUndoDepth(depth: number): void;
    
            /**
             * Add state to the undo stack. This clears the redo stack.
             *
             * @param {goog.editor.plugins.UndoRedoState} state The state to add to the undo
             *     stack.
             */
            addState(state: goog.editor.plugins.UndoRedoState): void;
    
            /**
             * Performs the undo operation of the state at the top of the undo stack, moving
             * that state to the top of the redo stack. If the undo stack is empty, does
             * nothing.
             */
            undo(): void;
    
            /**
             * Performs the redo operation of the state at the top of the redo stack, moving
             * that state to the top of the undo stack. If redo undo stack is empty, does
             * nothing.
             */
            redo(): void;
    
            /**
             * @return {boolean} Wether the undo stack has items on it, i.e., if it is
             *     possible to perform an undo operation.
             */
            hasUndoState(): boolean;
    
            /**
             * @return {boolean} Wether the redo stack has items on it, i.e., if it is
             *     possible to perform a redo operation.
             */
            hasRedoState(): boolean;
    
            /**
             * Clears the undo and redo stacks.
             */
            clearHistory(): void;
    
            /**
             * @return {goog.editor.plugins.UndoRedoState|undefined} The state at the top of
             *     the undo stack without removing it from the stack.
             */
            undoPeek(): any /*goog.editor.plugins.UndoRedoState|any (undefined)*/;
    
            /**
             * @return {goog.editor.plugins.UndoRedoState|undefined} The state at the top of
             *     the redo stack without removing it from the stack.
             */
            redoPeek(): any /*goog.editor.plugins.UndoRedoState|any (undefined)*/;
        }
    }
}

declare module goog.editor.plugins.UndoRedoManager {

    /**
     * Event types for the events dispatched by undo-redo manager.
     * @enum {string}
     */
    enum EventType { STATE_CHANGE, STATE_ADDED, BEFORE_UNDO, BEFORE_REDO } 
}
