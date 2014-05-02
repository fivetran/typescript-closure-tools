// Generated Thu May  1 16:39:45 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />

declare module goog.editor.plugins.UndoRedoState {

    /**
     * Event type for events indicating that this state has completed an undo or
     * redo operation.
     */
    var ACTION_COMPLETED: any /*missing*/;
}

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
        equals: any /*missing*/;
    }
}

