/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="./error.d.ts" />

declare module goog.fs {

    class FileSaver extends FileSaver__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FileSaver__Class extends goog.events.EventTarget__Class  { 
    
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
