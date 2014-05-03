// Generated Sat May  3 12:19:59 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/testing/fs/progressevent.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
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
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/fs/error.d.ts" />
/// <reference path="../../../goog/fs/progressevent.d.ts" />
/// <reference path="../../../goog/promise/resolver.d.ts" />
/// <reference path="../../../goog/testing/watchers.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/async/nexttick.d.ts" />
/// <reference path="../../../goog/async/run.d.ts" />
/// <reference path="../../../goog/promise/thenable.d.ts" />
/// <reference path="../../../goog/promise/promise.d.ts" />
/// <reference path="../../../goog/fs/filereader.d.ts" />

declare module goog.testing.fs {

    /**
     * A mock FileReader object. This emits the same events as
     * {@link goog.fs.FileReader}.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class FileReader extends goog.events.EventTarget {
        /**
         * A mock FileReader object. This emits the same events as
         * {@link goog.fs.FileReader}.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor();
    
        /**
         * @see {goog.fs.FileReader#getReadyState}
         * @return {goog.fs.FileReader.ReadyState} The current ready state.
         */
        getReadyState(): goog.fs.FileReader.ReadyState;
    
        /**
         * @see {goog.fs.FileReader#getError}
         * @return {goog.fs.Error} The current error.
         */
        getError(): goog.fs.Error;
    
        /**
         * @see {goog.fs.FileReader#abort}
         */
        abort(): void;
    
        /**
         * @see {goog.fs.FileReader#getResult}
         * @return {*} The result of the file read.
         */
        getResult(): any;
    
        /**
         * @see {goog.fs.FileReader#readAsBinaryString}
         * @param {!goog.testing.fs.Blob} blob The blob to read.
         */
        readAsBinaryString(blob: goog.testing.fs.Blob): void;
    
        /**
         * @see {goog.fs.FileReader#readAsArrayBuffer}
         * @param {!goog.testing.fs.Blob} blob The blob to read.
         */
        readAsArrayBuffer(blob: goog.testing.fs.Blob): void;
    
        /**
         * @see {goog.fs.FileReader#readAsText}
         * @param {!goog.testing.fs.Blob} blob The blob to read.
         * @param {string=} opt_encoding The name of the encoding to use.
         */
        readAsText(blob: goog.testing.fs.Blob, opt_encoding?: string): void;
    
        /**
         * @see {goog.fs.FileReader#readAsDataUrl}
         * @param {!goog.testing.fs.Blob} blob The blob to read.
         */
        readAsDataUrl(blob: goog.testing.fs.Blob): void;
    }
}

declare module goog.testing.fs.FileReader {

    /**
     * The possible return types.
     * @enum {number}
     */
    enum ReturnType { TEXT, BINARY_STRING, ARRAY_BUFFER, DATA_URL } 
}

