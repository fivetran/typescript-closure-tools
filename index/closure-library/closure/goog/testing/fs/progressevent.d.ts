/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../events/event.d.ts" />
/// <reference path="../../fs/filesaver.d.ts" />
/// <reference path="../../fs/filereader.d.ts" />

declare module goog.testing.fs {

    class ProgressEvent extends ProgressEvent__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ProgressEvent__Class extends goog.events.Event__Class  { 
    
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
            constructor(type: goog.fs.FileSaver.EventType|goog.fs.FileReader.EventType, loaded: number, total: number);
    
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
