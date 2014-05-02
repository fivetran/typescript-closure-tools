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

declare module goog.db.Transaction {

    /**
     * Event types the Transaction can dispatch. COMPLETE events are dispatched
     * when the transaction is committed. If a transaction is aborted it dispatches
     * both an ABORT event and an ERROR event with the ABORT_ERR code. Error events
     * are dispatched on any error.
     *
     * @enum {string}
     */
    enum EventTypes { COMPLETE, ABORT, ERROR } 

    /**
     * The three possible transaction modes.
     * @see http://www.w3.org/TR/IndexedDB/#idl-def-IDBTransaction
     *
     * @enum {string}
     */
    enum TransactionMode { READ_ONLY, READ_WRITE, VERSION_CHANGE } 
}

declare module goog.db {

    /**
     * Creates a new transaction. Transactions contain methods for accessing object
     * stores and are created from the database object. Should not be created
     * directly, open a database and call createTransaction on it.
     * @see goog.db.IndexedDb#createTransaction
     *
     * @param {!IDBTransaction} tx IndexedDB transaction to back this wrapper.
     * @param {!goog.db.IndexedDb} db The database that this transaction modifies.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class Transaction extends goog.events.EventTarget {
        /**
         * Creates a new transaction. Transactions contain methods for accessing object
         * stores and are created from the database object. Should not be created
         * directly, open a database and call createTransaction on it.
         * @see goog.db.IndexedDb#createTransaction
         *
         * @param {!IDBTransaction} tx IndexedDB transaction to back this wrapper.
         * @param {!goog.db.IndexedDb} db The database that this transaction modifies.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(tx: IDBTransaction, db: goog.db.IndexedDb);
    
        /**
         * @return {goog.db.Transaction.TransactionMode} The transaction's mode.
         */
        getMode(): goog.db.Transaction.TransactionMode;
    
        /**
         * @return {!goog.db.IndexedDb} The database that this transaction modifies.
         */
        getDatabase(): goog.db.IndexedDb;
    
        /**
         * Opens an object store to do operations on in this transaction. The requested
         * object store must be one that is in this transaction's scope.
         * @see goog.db.IndexedDb#createTransaction
         *
         * @param {string} name The name of the requested object store.
         * @return {!goog.db.ObjectStore} The wrapped object store.
         * @throws {goog.db.Error} In case of error getting the object store.
         */
        objectStore(name: string): goog.db.ObjectStore;
    
        /**
         * @return {!goog.async.Deferred} A deferred that will fire once the
         *     transaction is complete. It fires the errback chain if an error occurs
         *     in the transaction, or if it is aborted.
         */
        wait(): goog.async.Deferred;
    
        /**
         * Aborts this transaction. No pending operations will be applied to the
         * database. Dispatches an ABORT event.
         */
        abort(): void;
    }
}

