// Generated Thu May  1 12:40:49 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/fs/progressevent.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/fs/error.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.fs.FileSaver {

    /**
     * Possible states for a FileSaver.
     *
     * @enum {number}
     */
    enum ReadyState { INIT, WRITING, DONE } 

    /**
     * Events emitted by a FileSaver.
     *
     * @enum {string}
     */
    enum EventType { WRITE_START, PROGRESS, WRITE, ABORT, ERROR, WRITE_END } 

    /**
     * A wrapper for the progress events emitted by the FileSaver.
     *
     * @deprecated Use {goog.fs.ProgressEvent}.
     * @final
     */
    var ProgressEvent: any /*missing*/;
}

declare module goog.fs {

    /**
     * An object for monitoring the saving of files. This emits ProgressEvents of
     * the types listed in {@link goog.fs.FileSaver.EventType}.
     *
     * This should not be instantiated directly. Instead, its subclass
     * {@link goog.fs.FileWriter} should be accessed via
     * {@link goog.fs.FileEntry#createWriter}.
     *
     * @param {!FileSaver} fileSaver The underlying FileSaver object.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class FileSaver extends goog.events.EventTarget {
        /**
         * An object for monitoring the saving of files. This emits ProgressEvents of
         * the types listed in {@link goog.fs.FileSaver.EventType}.
         *
         * This should not be instantiated directly. Instead, its subclass
         * {@link goog.fs.FileWriter} should be accessed via
         * {@link goog.fs.FileEntry#createWriter}.
         *
         * @param {!FileSaver} fileSaver The underlying FileSaver object.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(fileSaver: FileSaver);
    
        /**
         * Abort the writing of the file.
         */
        abort(): void;
    
        /**
         * @return {goog.fs.FileSaver.ReadyState} The current state of the FileSaver.
         */
        getReadyState(): goog.fs.FileSaver.ReadyState;
    
        /**
         * @return {goog.fs.Error} The error encountered while writing, if any.
         */
        getError(): goog.fs.Error;
    }
}

