/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/fs/error.d.ts" />
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
/// <reference path="../../../../closure/goog/crypt/crypt.d.ts" />
/// <reference path="../../../../closure/goog/crypt/base64.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/blob.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/file.d.ts" />
/// <reference path="../../../../closure/goog/fs/entry.d.ts" />
/// <reference path="../../../../closure/goog/fs/progressevent.d.ts" />
/// <reference path="../../../../closure/goog/fs/filesaver.d.ts" />
/// <reference path="../../../../closure/goog/fs/filewriter.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../../closure/goog/fs/entryimpl.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/progressevent.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/filewriter.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/entry.d.ts" />
/// <reference path="../../../../closure/goog/fs/filesystem.d.ts" />
/// <reference path="../../../../closure/goog/testing/fs/filesystem.d.ts" />
/// <reference path="../../../../closure/goog/fs/filereader.d.ts" />
/// <reference path="../../../../closure/goog/fs/filesystemimpl.d.ts" />
/// <reference path="../../../../closure/goog/fs/fs.d.ts" />

declare module goog.testing.fs {

    /**
     * Get a filesystem object. Since these are mocks, there's no difference between
     * temporary and persistent filesystems.
     *
     * @param {number} size Ignored.
     * @return {!goog.async.Deferred} The deferred
     *     {@link goog.testing.fs.FileSystem}.
     */
    function getTemporary(size: number): goog.async.Deferred<any>;

    /**
     * Get a filesystem object. Since these are mocks, there's no difference between
     * temporary and persistent filesystems.
     *
     * @param {number} size Ignored.
     * @return {!goog.async.Deferred} The deferred
     *     {@link goog.testing.fs.FileSystem}.
     */
    function getPersistent(size: number): goog.async.Deferred<any>;

    /**
     * Create a fake object URL for a given fake blob. This can be used as a real
     * URL, and it can be created and revoked normally.
     *
     * @param {!goog.testing.fs.Blob} blob The blob for which to create the URL.
     * @return {string} The URL.
     */
    function createObjectUrl(blob: goog.testing.fs.Blob): string;

    /**
     * Remove a URL that was created for a fake blob.
     *
     * @param {string} url The URL to revoke.
     */
    function revokeObjectUrl(url: string): void;

    /**
     * Return whether or not a URL has been granted for the given blob.
     *
     * @param {!goog.testing.fs.Blob} blob The blob to check.
     * @return {boolean} Whether a URL has been granted.
     */
    function isObjectUrlGranted(blob: goog.testing.fs.Blob): boolean;

    /**
     * Concatenates one or more values together and converts them to a fake blob.
     *
     * @param {...(string|!goog.testing.fs.Blob)} var_args The values that will make
     *     up the resulting blob.
     * @return {!goog.testing.fs.Blob} The blob.
     */
    function getBlob(...var_args: any /*string|goog.testing.fs.Blob*/[]): goog.testing.fs.Blob;

    /**
     * Returns the string value of a fake blob.
     *
     * @param {!goog.testing.fs.Blob} blob The blob to convert to a string.
     * @param {string=} opt_encoding Ignored.
     * @return {!goog.async.Deferred} The deferred string value of the blob.
     */
    function blobToString(blob: goog.testing.fs.Blob, opt_encoding?: string): goog.async.Deferred<any>;

    /**
     * Installs goog.testing.fs in place of the standard goog.fs. After calling
     * this, code that uses goog.fs should work without issue using goog.testing.fs.
     *
     * @param {!goog.testing.PropertyReplacer} stubs The property replacer for
     *     stubbing out the original goog.fs functions.
     */
    function install(stubs: goog.testing.PropertyReplacer): void;
}

