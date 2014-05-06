/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../closure/goog/net/xhrio.d.ts" />
/// <reference path="../../../closure/goog/structs/queue.d.ts" />
/// <reference path="../../../closure/goog/structs/pool.d.ts" />
/// <reference path="../../../closure/goog/structs/node.d.ts" />
/// <reference path="../../../closure/goog/structs/heap.d.ts" />
/// <reference path="../../../closure/goog/structs/priorityqueue.d.ts" />
/// <reference path="../../../closure/goog/structs/prioritypool.d.ts" />
/// <reference path="../../../closure/goog/net/xhriopool.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/fs/progressevent.d.ts" />
/// <reference path="../../../closure/goog/fs/error.d.ts" />
/// <reference path="../../../closure/goog/fs/filesaver.d.ts" />
/// <reference path="../../../closure/goog/fs/entry.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../closure/goog/fs/filereader.d.ts" />
/// <reference path="../../../closure/goog/fs/filewriter.d.ts" />
/// <reference path="../../../closure/goog/fs/entryimpl.d.ts" />
/// <reference path="../../../closure/goog/fs/filesystem.d.ts" />
/// <reference path="../../../closure/goog/fs/filesystemimpl.d.ts" />
/// <reference path="../../../closure/goog/fs/fs.d.ts" />
/// <reference path="../../../closure/goog/crypt/crypt.d.ts" />
/// <reference path="../../../closure/goog/crypt/hash32.d.ts" />

declare module goog.net {

    /**
     * A class for downloading remote files and storing them locally using the
     * HTML5 filesystem API.
     *
     * @param {!goog.fs.DirectoryEntry} dir The directory in which the downloaded
     *     files are stored. This directory should be solely managed by
     *     FileDownloader.
     * @param {goog.net.XhrIoPool=} opt_pool The pool of XhrIo objects to use for
     *     downloading files.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class FileDownloader extends goog.Disposable {
        /**
         * A class for downloading remote files and storing them locally using the
         * HTML5 filesystem API.
         *
         * @param {!goog.fs.DirectoryEntry} dir The directory in which the downloaded
         *     files are stored. This directory should be solely managed by
         *     FileDownloader.
         * @param {goog.net.XhrIoPool=} opt_pool The pool of XhrIo objects to use for
         *     downloading files.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(dir: goog.fs.DirectoryEntry, opt_pool?: goog.net.XhrIoPool);
    
        /**
         * Download a remote file and save its contents to the filesystem. A given file
         * is uniquely identified by its URL string; this means that the relative and
         * absolute URLs for a single file are considered different for the purposes of
         * the FileDownloader.
         *
         * Returns a Deferred that will contain the downloaded blob. If there's an error
         * while downloading the URL, this Deferred will be passed the
         * {@link goog.net.FileDownloader.Error} object as an errback.
         *
         * If a download is already in progress for the given URL, this will return the
         * deferred blob for that download. If the URL has already been downloaded, this
         * will fail once it tries to save the downloaded blob.
         *
         * When a download is in progress, all Deferreds returned for that download will
         * be branches of a single parent. If all such branches are cancelled, or if one
         * is cancelled with opt_deepCancel set, then the download will be cancelled as
         * well.
         *
         * @param {string} url The URL of the file to download.
         * @return {!goog.async.Deferred} The deferred result blob.
         */
        download(url: string): goog.async.Deferred<any>;
    
        /**
         * Return a Deferred that will fire once no download is active for a given URL.
         * If there's no download active for that URL when this is called, the deferred
         * will fire immediately; otherwise, it will fire once the download is complete,
         * whether or not it succeeds.
         *
         * @param {string} url The URL of the download to wait for.
         * @return {!goog.async.Deferred} The Deferred that will fire when the download
         *     is complete.
         */
        waitForDownload(url: string): goog.async.Deferred<any>;
    
        /**
         * Returns whether or not there is an active download for a given URL.
         *
         * @param {string} url The URL of the download to check.
         * @return {boolean} Whether or not there is an active download for the URL.
         */
        isDownloading(url: string): boolean;
    
        /**
         * Load a downloaded blob from the filesystem. Will fire a deferred error if the
         * given URL has not yet been downloaded.
         *
         * @param {string} url The URL of the blob to load.
         * @return {!goog.async.Deferred} The deferred Blob object. The callback will be
         *     passed the blob. If a file API error occurs while loading the blob, that
         *     error will be passed to the errback.
         */
        getDownloadedBlob(url: string): goog.async.Deferred<any>;
    
        /**
         * Get the local filesystem: URL for a downloaded file. This is different from
         * the blob: URL that's available from getDownloadedBlob(). If the end user
         * accesses the filesystem: URL, the resulting file's name will be determined by
         * the download filename as opposed to an arbitrary GUID. In addition, the
         * filesystem: URL is connected to a filesystem location, so if the download is
         * removed then that URL will become invalid.
         *
         * Warning: in Chrome 12, some filesystem: URLs are opened inline. This means
         * that e.g. HTML pages given to the user via filesystem: URLs will be opened
         * and processed by the browser.
         *
         * @param {string} url The URL of the file to get the URL of.
         * @return {!goog.async.Deferred} The deferred filesystem: URL. The callback
         *     will be passed the URL. If a file API error occurs while loading the
         *     blob, that error will be passed to the errback.
         */
        getLocalUrl(url: string): goog.async.Deferred<any>;
    
        /**
         * Return (deferred) whether or not a URL has been downloaded. Will fire a
         * deferred error if something goes wrong when determining this.
         *
         * @param {string} url The URL to check.
         * @return {!goog.async.Deferred} The deferred boolean. The callback will be
         *     passed the boolean. If a file API error occurs while checking the
         *     existence of the downloaded URL, that error will be passed to the
         *     errback.
         */
        isDownloaded(url: string): goog.async.Deferred<any>;
    
        /**
         * Remove a URL from the FileDownloader.
         *
         * This returns a Deferred. If the removal is completed successfully, its
         * callback will be called without any value. If the removal fails, its errback
         * will be called with the {@link goog.fs.Error}.
         *
         * @param {string} url The URL to remove.
         * @return {!goog.async.Deferred} The deferred used for registering callbacks on
         *     success or on error.
         */
        remove(url: string): goog.async.Deferred<any>;
    
        /**
         * Save a blob for a given URL. This works just as through the blob were
         * downloaded form that URL, except you specify the blob and no HTTP request is
         * made.
         *
         * If the URL is currently being downloaded, it's indeterminate whether the blob
         * being set or the blob being downloaded will end up in the filesystem.
         * Whichever one doesn't get saved will have an error. To ensure that one or the
         * other takes precedence, use {@link #waitForDownload} to allow the download to
         * complete before setting the blob.
         *
         * @param {string} url The URL at which to set the blob.
         * @param {!Blob} blob The blob to set.
         * @param {string=} opt_name The name of the file. If this isn't given, it's
         *     determined from the URL.
         * @return {!goog.async.Deferred} The deferred used for registering callbacks on
         *     success or on error. This can be cancelled just like a {@link #download}
         *     Deferred. The objects passed to the errback will be
         *     {@link goog.net.FileDownloader.Error}s.
         */
        setBlob(url: string, blob: Blob, opt_name?: string): goog.async.Deferred<any>;
    }
}

declare module goog.net.FileDownloader {

    /**
     * The error object for FileDownloader download errors.
     *
     * @param {!goog.net.FileDownloader.Download_} download The download object for
     *     the download in question.
     * @param {goog.fs.Error=} opt_fsErr The file error object, if this was a file
     *     error.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        /**
         * The error object for FileDownloader download errors.
         *
         * @param {!goog.net.FileDownloader.Download_} download The download object for
         *     the download in question.
         * @param {goog.fs.Error=} opt_fsErr The file error object, if this was a file
         *     error.
         *
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(download: any, opt_fsErr?: goog.fs.Error);
    
        /**
         * The status of the XHR. Only set if the error was caused by an XHR failure.
         * @type {number|undefined}
         */
        xhrStatus: any /*number|any (undefined)*/;
    
        /**
         * The error code of the XHR. Only set if the error was caused by an XHR
         * failure.
         * @type {goog.net.ErrorCode|undefined}
         */
        xhrErrorCode: any /*goog.net.ErrorCode|any (undefined)*/;
    
        /**
         * The file API error. Only set if the error was caused by the file API.
         * @type {goog.fs.Error|undefined}
         */
        fileError: any /*goog.fs.Error|any (undefined)*/;
    }
}

