/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
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
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/editor/plugins/undoredostate.d.ts" />

declare module goog.editor.plugins {

    /**
     * Manages undo and redo operations through a series of {@code UndoRedoState}s
     * maintained on undo and redo stacks.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class UndoRedoManager extends goog.events.EventTarget {
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

declare module goog.editor.plugins.UndoRedoManager {

    /**
     * Event types for the events dispatched by undo-redo manager.
     * @enum {string}
     */
    enum EventType { STATE_CHANGE, STATE_ADDED, BEFORE_UNDO, BEFORE_REDO } 
}

