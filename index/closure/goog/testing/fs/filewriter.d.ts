/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/fs/error.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
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
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/progressevent.d.ts" />
/// <reference path="../../../../closure/goog/fs/progressevent.d.ts" />
/// <reference path="../../../../closure/goog/fs/filesaver.d.ts" />

declare module goog.testing.fs {

    /**
     * A mock FileWriter object. This emits the same events as
     * {@link goog.fs.FileSaver} and {@link goog.fs.FileWriter}.
     *
     * @param {!goog.testing.fs.FileEntry} fileEntry The file entry to write to.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FileWriter extends goog.events.EventTarget {
        /**
         * A mock FileWriter object. This emits the same events as
         * {@link goog.fs.FileSaver} and {@link goog.fs.FileWriter}.
         *
         * @param {!goog.testing.fs.FileEntry} fileEntry The file entry to write to.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(fileEntry: goog.testing.fs.FileEntry);
    
        /**
         * @see {goog.fs.FileSaver#getReadyState}
         * @return {goog.fs.FileSaver.ReadyState} The ready state.
         */
        getReadyState(): goog.fs.FileSaver.ReadyState;
    
        /**
         * @see {goog.fs.FileSaver#getError}
         * @return {goog.fs.Error} The error.
         */
        getError(): goog.fs.Error;
    
        /**
         * @see {goog.fs.FileWriter#getPosition}
         * @return {number} The position.
         */
        getPosition(): number;
    
        /**
         * @see {goog.fs.FileWriter#getLength}
         * @return {number} The length.
         */
        getLength(): number;
    
        /**
         * @see {goog.fs.FileSaver#abort}
         */
        abort(): void;
    
        /**
         * @see {goog.fs.FileWriter#write}
         * @param {!goog.testing.fs.Blob} blob The blob to write.
         */
        write(blob: goog.testing.fs.Blob): void;
    
        /**
         * @see {goog.fs.FileWriter#truncate}
         * @param {number} size The size to truncate to.
         */
        truncate(size: number): void;
    
        /**
         * @see {goog.fs.FileWriter#seek}
         * @param {number} offset The offset to seek to.
         */
        seek(offset: number): void;
    }
}

