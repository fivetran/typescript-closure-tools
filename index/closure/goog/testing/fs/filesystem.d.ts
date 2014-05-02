// Generated Fri May  2 11:43:04 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/fs/error.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/crypt/crypt.d.ts" />
/// <reference path="../../../goog/crypt/base64.d.ts" />
/// <reference path="../../../goog/testing/fs/blob.d.ts" />
/// <reference path="../../../goog/testing/fs/file.d.ts" />
/// <reference path="../../../goog/fs/entry.d.ts" />
/// <reference path="../../../goog/fs/progressevent.d.ts" />
/// <reference path="../../../goog/fs/filesaver.d.ts" />
/// <reference path="../../../goog/fs/filewriter.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/promise/resolver.d.ts" />
/// <reference path="../../../goog/testing/watchers.d.ts" />
/// <reference path="../../../goog/async/nexttick.d.ts" />
/// <reference path="../../../goog/async/run.d.ts" />
/// <reference path="../../../goog/promise/thenable.d.ts" />
/// <reference path="../../../goog/promise/promise.d.ts" />
/// <reference path="../../../goog/fs/entryimpl.d.ts" />
/// <reference path="../../../goog/testing/fs/progressevent.d.ts" />
/// <reference path="../../../goog/testing/fs/filewriter.d.ts" />
/// <reference path="../../../goog/testing/fs/entry.d.ts" />
/// <reference path="../../../goog/fs/filesystem.d.ts" />

declare module goog.testing.fs {

    /**
     * A mock filesystem object.
     *
     * @param {string=} opt_name The name of the filesystem.
     * @constructor
     * @implements {goog.fs.FileSystem}
     * @final
     */
    class FileSystem implements goog.fs.FileSystem {
        /**
         * A mock filesystem object.
         *
         * @param {string=} opt_name The name of the filesystem.
         * @constructor
         * @implements {goog.fs.FileSystem}
         * @final
         */
        constructor(opt_name?: string);
    }
}

