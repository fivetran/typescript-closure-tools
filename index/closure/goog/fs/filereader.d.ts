// Generated Fri May  2 15:02:38 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/fs/progressevent.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/fs/error.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />

declare module goog.fs.FileReader {

    /**
     * Possible states for a FileReader.
     *
     * @enum {number}
     */
    enum ReadyState { INIT, LOADING, DONE } 

    /**
     * Events emitted by a FileReader.
     *
     * @enum {string}
     */
    enum EventType { LOAD_START, PROGRESS, LOAD, ABORT, ERROR, LOAD_END } 

    /**
     * Reads a blob as a binary string.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as a binary string.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsBinaryString(blob: Blob): goog.async.Deferred;

    /**
     * Reads a blob as an array buffer.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as an array buffer.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsArrayBuffer(blob: Blob): goog.async.Deferred;

    /**
     * Reads a blob as text.
     * @param {!Blob} blob The blob to read.
     * @param {string=} opt_encoding The name of the encoding to use.
     * @return {!goog.async.Deferred} The deferred Blob contents as text.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsText(blob: Blob, opt_encoding?: string): goog.async.Deferred;

    /**
     * Reads a blob as a data URL.
     * @param {!Blob} blob The blob to read.
     * @return {!goog.async.Deferred} The deferred Blob contents as a data URL.
     *     If an error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function readAsDataUrl(blob: Blob): goog.async.Deferred;
}

declare module goog.fs {

    /**
     * An object for monitoring the reading of files. This emits ProgressEvents of
     * the types listed in {@link goog.fs.FileReader.EventType}.
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FileReader extends goog.events.EventTarget {
        /**
         * An object for monitoring the reading of files. This emits ProgressEvents of
         * the types listed in {@link goog.fs.FileReader.EventType}.
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor();
    
        /**
         * Abort the reading of the file.
         */
        abort(): void;
    
        /**
         * @return {goog.fs.FileReader.ReadyState} The current state of the FileReader.
         */
        getReadyState(): goog.fs.FileReader.ReadyState;
    
        /**
         * @return {*} The result of the file read.
         */
        getResult(): any;
    
        /**
         * @return {goog.fs.Error} The error encountered while reading, if any.
         */
        getError(): goog.fs.Error;
    
        /**
         * Starts reading a blob as a binary string.
         * @param {!Blob} blob The blob to read.
         */
        readAsBinaryString(blob: Blob): void;
    
        /**
         * Starts reading a blob as an array buffer.
         * @param {!Blob} blob The blob to read.
         */
        readAsArrayBuffer(blob: Blob): void;
    
        /**
         * Starts reading a blob as text.
         * @param {!Blob} blob The blob to read.
         * @param {string=} opt_encoding The name of the encoding to use.
         */
        readAsText(blob: Blob, opt_encoding?: string): void;
    
        /**
         * Starts reading a blob as a data URL.
         * @param {!Blob} blob The blob to read.
         */
        readAsDataUrl(blob: Blob): void;
    }
}

