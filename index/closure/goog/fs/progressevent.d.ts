// Generated Fri May  2 11:41:34 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />

declare module goog.fs {

    /**
     * A wrapper for the progress events emitted by the File APIs.
     *
     * @param {!ProgressEvent} event The underlying event object.
     * @param {!Object} target The file access object emitting the event.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class ProgressEvent extends goog.events.Event {
        /**
         * A wrapper for the progress events emitted by the File APIs.
         *
         * @param {!ProgressEvent} event The underlying event object.
         * @param {!Object} target The file access object emitting the event.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(event: ProgressEvent, target: Object);
    
        /**
         * @return {boolean} Whether or not the total size of the of the file being
         *     saved is known.
         */
        isLengthComputable(): boolean;
    
        /**
         * @return {number} The number of bytes saved so far.
         */
        getLoaded(): number;
    
        /**
         * @return {number} The total number of bytes in the file being saved.
         */
        getTotal(): number;
    }
}

