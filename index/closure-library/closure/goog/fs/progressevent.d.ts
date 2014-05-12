/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/event.d.ts" />

declare module goog.fs {

    class ProgressEvent extends ProgressEvent.__Class { }
    module ProgressEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class {
    
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
}
