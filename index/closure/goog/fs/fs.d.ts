/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/fs/progressevent.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/fs/error.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/fs/filereader.d.ts" />
/// <reference path="../../../closure/goog/fs/entry.d.ts" />
/// <reference path="../../../closure/goog/fs/filesaver.d.ts" />
/// <reference path="../../../closure/goog/fs/filewriter.d.ts" />
/// <reference path="../../../closure/goog/fs/entryimpl.d.ts" />
/// <reference path="../../../closure/goog/fs/filesystem.d.ts" />
/// <reference path="../../../closure/goog/fs/filesystemimpl.d.ts" />

declare module goog.fs {

    /**
     * Returns a temporary FileSystem object. A temporary filesystem may be deleted
     * by the user agent at its discretion.
     *
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function getTemporary(size: number): goog.async.Deferred<any>;

    /**
     * Returns a persistent FileSystem object. A persistent filesystem will never be
     * deleted without the user's or application's authorization.
     *
     * @param {number} size The size requested for the filesystem, in bytes.
     * @return {!goog.async.Deferred} The deferred {@link goog.fs.FileSystem}. If an
     *     error occurs, the errback is called with a {@link goog.fs.Error}.
     */
    function getPersistent(size: number): goog.async.Deferred<any>;

    /**
     * Creates a blob URL for a blob object.
     *
     * @param {!Blob} blob The object for which to create the URL.
     * @return {string} The URL for the object.
     */
    function createObjectUrl(blob: Blob): string;

    /**
     * Revokes a URL created by {@link goog.fs.createObjectUrl}.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: string): void;

    /**
     * @typedef {!{createObjectURL: (function(!Blob): string),
     *             revokeObjectURL: function(string): void}}
     */
    interface UrlObject_ { /*{ createObjectURL: any ((_0: Blob) => string); revokeObjectURL: (_0: string) => void }*/ }

    /**
     * Concatenates one or more values together and converts them to a Blob.
     *
     * @param {...(string|!Blob|!ArrayBuffer)} var_args The values that will make up
     *     the resulting blob.
     * @return {!Blob} The blob.
     */
    function getBlob(...var_args: any /*string|Blob|ArrayBuffer*/[]): Blob;

    /**
     * Converts a Blob or a File into a string. This should only be used when the
     * blob is known to be small.
     *
     * @param {!Blob} blob The blob to convert.
     * @param {string=} opt_encoding The name of the encoding to use.
     * @return {!goog.async.Deferred} The deferred string. If an error occurrs, the
     *     errback is called with a {@link goog.fs.Error}.
     * @deprecated Use {@link goog.fs.FileReader.readAsText} instead.
     */
    function blobToString(blob: Blob, opt_encoding?: string): goog.async.Deferred<any>;

    /**
     * Slices the blob. The returned blob contains data from the start byte
     * (inclusive) till the end byte (exclusive). Negative indices can be used
     * to count bytes from the end of the blob (-1 == blob.size - 1). Indices
     * are always clamped to blob range. If end is omitted, all the data till
     * the end of the blob is taken.
     *
     * @param {!Blob} blob The blob to be sliced.
     * @param {number} start Index of the starting byte.
     * @param {number=} opt_end Index of the ending byte.
     * @return {Blob} The blob slice or null if not supported.
     */
    function sliceBlob(blob: Blob, start: number, opt_end?: number): Blob;
}

