// Generated Thu May  1 12:35:51 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/crypt/hash.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/crypt/crypt.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/fs/progressevent.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
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
/// <reference path="../../goog/fs/filereader.d.ts" />
/// <reference path="../../goog/fs/entry.d.ts" />
/// <reference path="../../goog/fs/filesaver.d.ts" />
/// <reference path="../../goog/fs/filewriter.d.ts" />
/// <reference path="../../goog/fs/entryimpl.d.ts" />
/// <reference path="../../goog/fs/filesystem.d.ts" />
/// <reference path="../../goog/fs/filesystemimpl.d.ts" />
/// <reference path="../../goog/fs/fs.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />

declare module goog.crypt.BlobHasher {

    /**
     * Event names for hash computation events
     * @enum {string}
     */
    enum EventType { STARTED, PROGRESS, THROTTLED, COMPLETE, ABORT, ERROR } 
}

declare module goog.crypt {

    /**
     * Construct the hash computer.
     *
     * @param {!goog.crypt.Hash} hashFn The hash function to use.
     * @param {number=} opt_blockSize Processing block size.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class BlobHasher extends goog.events.EventTarget {
        /**
         * Construct the hash computer.
         *
         * @param {!goog.crypt.Hash} hashFn The hash function to use.
         * @param {number=} opt_blockSize Processing block size.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(hashFn: goog.crypt.Hash, opt_blockSize?: number);
    
        /**
         * Start the hash computation.
         * @param {!Blob} blob The blob of data to compute the hash for.
         */
        hash(blob: Blob): void;
    
        /**
         * Sets the maximum number of bytes to hash or Infinity for no limit. Can be
         * called before hash() to throttle the hash computation. The hash computation
         * can then be continued by repeatedly calling setHashingLimit() with greater
         * byte offsets. This is useful if you don't need the hash until some time in
         * the future, for example when uploading a file and you don't need the hash
         * until the transfer is complete.
         * @param {number} byteOffset The byte offset to compute the hash up to.
         *     Should be a non-negative integer or Infinity for no limit. Negative
         *     values are not allowed.
         */
        setHashingLimit(byteOffset: number): void;
    
        /**
         * Abort hash computation.
         */
        abort(): void;
    
        /**
         * @return {number} Number of bytes processed so far.
         */
        getBytesProcessed(): number;
    
        /**
         * @return {Array.<number>} The computed hash value or null if not ready.
         */
        getHash(): number[];
    }
}

