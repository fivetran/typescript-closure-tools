// Generated Fri May  2 15:05:07 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/db/error.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/db/cursor.d.ts" />
/// <reference path="../../goog/db/index.d.ts" />
/// <reference path="../../goog/db/objectstore.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/db/transaction.d.ts" />
/// <reference path="../../goog/db/indexeddb.d.ts" />

declare module goog.db {

    /**
     * A callback that's called if a blocked event is received. When a database is
     * supposed to be deleted or upgraded (i.e. versionchange), and there are open
     * connections to this database, a block event will be fired to prevent the
     * operations from going through until all such open connections are closed.
     * This callback can be used to notify users that they should close other tabs
     * that have open connections, or to close the connections manually. Databases
     * can also listen for the {@link goog.db.IndexedDb.EventType.VERSION_CHANGE}
     * event to automatically close themselves when they're blocking such
     * operations.
     *
     * This is passed a VersionChangeEvent that has the version of the database
     * before it was deleted, and "null" as the new version.
     *
     * @typedef {function(!goog.db.IndexedDb.VersionChangeEvent)}
     */
    interface BlockedCallback {
        (_0: goog.db.IndexedDb.VersionChangeEvent): any /*missing*/
    }

    /**
     * A callback that's called when opening a database whose internal version is
     * lower than the version passed to {@link goog.db.openDatabase}.
     *
     * This callback is passed three arguments: a VersionChangeEvent with both the
     * old version and the new version of the database; the database that's being
     * opened, for which you can create and delete object stores; and the version
     * change transaction, with which you can abort the version change.
     *
     * Note that the transaction is not active, which means that it can't be used to
     * make changes to the database. However, since there is a transaction running,
     * you can't create another one via {@link goog.db.IndexedDb.createTransaction}.
     * This means that it's not possible to manipulate the database other than
     * creating or removing object stores in this callback.
     *
     * @typedef {function(!goog.db.IndexedDb.VersionChangeEvent,
     *                    !goog.db.IndexedDb,
     *                    !goog.db.Transaction)}
     */
    var UpgradeNeededCallback: any /*missing*/;

    /**
     * Opens a database connection and wraps it.
     *
     * @param {string} name The name of the database to open.
     * @param {number=} opt_version The expected version of the database. If this is
     *     larger than the actual version, opt_onUpgradeNeeded will be called
     *     (possibly after opt_onBlocked; see {@link goog.db.BlockedCallback}). If
     *     this is passed, opt_onUpgradeNeeded must be passed as well.
     * @param {goog.db.UpgradeNeededCallback=} opt_onUpgradeNeeded Called if
     *     opt_version is greater than the old version of the database. If
     *     opt_version is passed, this must be passed as well.
     * @param {goog.db.BlockedCallback=} opt_onBlocked Called if there are active
     *     connections to the database.
     * @return {!goog.async.Deferred} The deferred database object.
     */
    function openDatabase(name: string, opt_version?: number, opt_onUpgradeNeeded?: goog.db.UpgradeNeededCallback, opt_onBlocked?: goog.db.BlockedCallback): goog.async.Deferred;

    /**
     * Deletes a database once all open connections have been closed.
     *
     * @param {string} name The name of the database to delete.
     * @param {goog.db.BlockedCallback=} opt_onBlocked Called if there are active
     *     connections to the database.
     * @return {!goog.async.Deferred} A deferred object that will fire once the
     *     database is deleted.
     */
    function deleteDatabase(name: string, opt_onBlocked?: goog.db.BlockedCallback): goog.async.Deferred;
}

