/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/event.d.ts" />
/// <reference path="../../fs/filesaver.d.ts" />
/// <reference path="../../fs/filereader.d.ts" />

declare module goog.testing.fs {

    class ProgressEvent extends ProgressEvent.__Class { }
    module ProgressEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class {
    
            /**
             * A mock progress event.
             *
             * @param {!goog.fs.FileSaver.EventType|!goog.fs.FileReader.EventType} type
             *     Event type.
             * @param {number} loaded The number of bytes processed.
             * @param {number} total The total data that was to be processed, in bytes.
             * @constructor
             * @extends {goog.events.Event}
             * @final
             */
            constructor(type: goog.fs.FileSaver.EventType, loaded: number, total: number);
            /**
             * A mock progress event.
             *
             * @param {!goog.fs.FileSaver.EventType|!goog.fs.FileReader.EventType} type
             *     Event type.
             * @param {number} loaded The number of bytes processed.
             * @param {number} total The total data that was to be processed, in bytes.
             * @constructor
             * @extends {goog.events.Event}
             * @final
             */
            constructor(type: goog.fs.FileReader.EventType, loaded: number, total: number);
    
            /**
             * @see {goog.fs.ProgressEvent#isLengthComputable}
             * @return {boolean} True if the length is known.
             */
            isLengthComputable(): boolean;
    
            /**
             * @see {goog.fs.ProgressEvent#getLoaded}
             * @return {number} The number of bytes loaded or written.
             */
            getLoaded(): number;
    
            /**
             * @see {goog.fs.ProgressEvent#getTotal}
             * @return {number} The total bytes to load or write.
             */
            getTotal(): number;
        }
    }
}
