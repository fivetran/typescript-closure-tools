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

declare module goog.editor.plugins {

    /**
     * Represents an undo and redo action for a particular state transition.
     *
     * @param {boolean} asynchronous Whether the undo or redo actions for this
     *     state complete asynchronously. If true, then this state must fire
     *     an ACTION_COMPLETED event when undo or redo is complete.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class UndoRedoState extends goog.events.EventTarget {
        /**
         * Represents an undo and redo action for a particular state transition.
         *
         * @param {boolean} asynchronous Whether the undo or redo actions for this
         *     state complete asynchronously. If true, then this state must fire
         *     an ACTION_COMPLETED event when undo or redo is complete.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(asynchronous: boolean);
    
        /**
         * @return {boolean} Whether or not the undo and redo actions of this state
         *     complete asynchronously. If true, the state will fire an ACTION_COMPLETED
         *     event when an undo or redo action is complete.
         */
        isAsynchronous(): boolean;
    
        /**
         * Undoes the action represented by this state.
         */
        undo: any /*missing*/;
    
        /**
         * Redoes the action represented by this state.
         */
        redo: any /*missing*/;
    
        /**
         * Checks if two undo-redo states are the same.
         * @param {goog.editor.plugins.UndoRedoState} state The state to compare.
         * @return {boolean} Wether the two states are equal.
         */
        equals(state: goog.editor.plugins.UndoRedoState): boolean;
    }
}

declare module goog.editor.plugins.UndoRedoState {

    /**
     * Event type for events indicating that this state has completed an undo or
     * redo operation.
     */
    var ACTION_COMPLETED: any /*missing*/;
}

