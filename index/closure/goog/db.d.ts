// Generated Wed Apr 30 16:41:25 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/promise.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/useragent.d.ts" />
/// <reference path="../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.db.Cursor' {

    /**
     * Opens a value cursor from IDBObjectStore or IDBIndex over the specified key
     * range. Returns a cursor object which is able to iterate over the given range.
     * @param {!(IDBObjectStore|IDBIndex)} source Data source to open cursor.
     * @param {!goog.db.KeyRange=} opt_range The key range. If undefined iterates
     *     over the whole data source.
     * @param {!goog.db.Cursor.Direction=} opt_direction The direction. If undefined
     *     moves in a forward direction with duplicates.
     * @return {!goog.db.Cursor} The cursor.
     * @throws {goog.db.Error} If there was a problem opening the cursor.
     */
    function openCursor(source: any /*IDBObjectStore|IDBIndex*/, opt_range?: goog.db.KeyRange, opt_direction?: goog.db.Cursor.Direction): goog.db.Cursor;

    /**
     * Possible cursor directions.
     * @see http://www.w3.org/TR/IndexedDB/#idl-def-IDBCursor
     *
     * @enum {string}
     */
    enum Direction { NEXT, NEXT_NO_DUPLICATE, PREV, PREV_NO_DUPLICATE } 

    /**
     * Event types that the cursor can dispatch. COMPLETE events are dispatched when
     * a cursor is depleted of values, a NEW_DATA event if there is new data
     * available, and ERROR if an error occurred.
     *
     * @enum {string}
     */
    enum EventType { COMPLETE, ERROR, NEW_DATA } 
}

declare module 'goog.db' {

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
        (goog.db.IndexedDb.VersionChangeEvent): any /*missing*/
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

    /**
     * Creates an IDBObjectStore wrapper object. Object stores have methods for
     * storing and retrieving records, and are accessed through a transaction
     * object. They also have methods for creating indexes associated with the
     * object store. They can only be created when setting the version of the
     * database. Should not be created directly, access object stores through
     * transactions.
     * @see goog.db.IndexedDb#setVersion
     * @see goog.db.Transaction#objectStore
     *
     * @param {!IDBObjectStore} store The backing IndexedDb object.
     * @constructor
     *
     * TODO(user): revisit msg in exception and errors in this class. In newer
     *     Chrome (v22+) the error/request come with a DOM error string that is
     *     already very descriptive.
     * @final
     */
    function ObjectStore(store: IDBObjectStore): void;

    /**
     * Creates a new IDBCursor wrapper object. Should not be created directly,
     * access cursor through object store.
     * @see goog.db.ObjectStore#openCursor
     *
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class Cursor extends goog.events.EventTarget {
        /**
         * Creates a new IDBCursor wrapper object. Should not be created directly,
         * access cursor through object store.
         * @see goog.db.ObjectStore#openCursor
         *
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor();
    
        /**
         * Advances the cursor to the next position along its direction. When new data
         * is available, the NEW_DATA event will be fired. If the cursor has reached the
         * end of the range it will fire the COMPLETE event. If opt_key is specified it
         * will advance to the key it matches in its direction.
         *
         * This wraps the native #continue method on the underlying object.
         *
         * @param {IDBKeyType=} opt_key The optional key to advance to.
         */
        next(opt_key?: IDBKeyType): void;
    
        /**
         * Updates the value at the current position of the cursor in the object store.
         * If the cursor points to a value that has just been deleted, a new value is
         * created.
         *
         * @param {*} value The value to be stored.
         * @return {!goog.async.Deferred} The resulting deferred request.
         */
        update(value: any): goog.async.Deferred;
    
        /**
         * Deletes the value at the cursor's position, without changing the cursor's
         * position. Once the value is deleted, the cursor's value is set to null.
         *
         * @return {!goog.async.Deferred} The resulting deferred request.
         */
        remove(): goog.async.Deferred;
    
        /**
         * @return {*} The value for the value at the cursor's position. Undefined
         *     if no current value, or null if value has just been deleted.
         */
        getValue(): any;
    
        /**
         * @return {IDBKeyType} The key for the value at the cursor's position. If
         *     the cursor is outside its range, this is undefined.
         */
        getKey(): IDBKeyType;
    }

    /**
     * A database error. Since the stack trace can be unhelpful in an asynchronous
     * context, the error provides a message about where it was produced.
     *
     * @param {number|!DOMError} error The DOMError instance returned by the
     *     browser for Chrome22+, or an error code for previous versions.
     * @param {string} context A description of where the error occured.
     * @param {string=} opt_message Additional message.
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class Error extends goog.debug.Error {
        /**
         * A database error. Since the stack trace can be unhelpful in an asynchronous
         * context, the error provides a message about where it was produced.
         *
         * @param {number|!DOMError} error The DOMError instance returned by the
         *     browser for Chrome22+, or an error code for previous versions.
         * @param {string} context A description of where the error occured.
         * @param {string=} opt_message Additional message.
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor(error: any /*number|DOMError*/, context: string, opt_message?: string);
    
        /**
         * @return {string} The name of the error.
         */
        getName(): string;
    }

    /**
     * Creates an IDBDatabase wrapper object. The database object has methods for
     * setting the version to change the structure of the database and for creating
     * transactions to get or modify the stored records. Should not be created
     * directly, call {@link goog.db.openDatabase} to set up the connection.
     *
     * @param {!IDBDatabase} db Underlying IndexedDB database object.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class IndexedDb extends goog.events.EventTarget {
        /**
         * Creates an IDBDatabase wrapper object. The database object has methods for
         * setting the version to change the structure of the database and for creating
         * transactions to get or modify the stored records. Should not be created
         * directly, call {@link goog.db.openDatabase} to set up the connection.
         *
         * @param {!IDBDatabase} db Underlying IndexedDB database object.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(db: IDBDatabase);
    
        /**
         * Closes the database connection. Metadata queries can still be made after this
         * method is called, but otherwise this wrapper should not be used further.
         */
        close(): void;
    
        /**
         * @return {boolean} Whether a connection is open and the database can be used.
         */
        isOpen(): boolean;
    
        /**
         * @return {string} The name of this database.
         */
        getName(): string;
    
        /**
         * @return {string} The current database version.
         */
        getVersion(): string;
    
        /**
         * @return {DOMStringList} List of object stores in this database.
         */
        getObjectStoreNames(): DOMStringList;
    
        /**
         * Creates an object store in this database. Can only be called inside a
         * {@link goog.db.UpgradeNeededCallback} or the callback for the Deferred
         * returned from #setVersion.
         *
         * @param {string} name Name for the new object store.
         * @param {Object=} opt_params Options object. The available options are:
         *     keyPath, which is a string and determines what object attribute
         *     to use as the key when storing objects in this object store; and
         *     autoIncrement, which is a boolean, which defaults to false and determines
         *     whether the object store should automatically generate keys for stored
         *     objects. If keyPath is not provided and autoIncrement is false, then all
         *     insert operations must provide a key as a parameter.
         * @return {!goog.db.ObjectStore} The newly created object store.
         * @throws {goog.db.Error} If there's a problem creating the object store.
         */
        createObjectStore(name: string, opt_params?: Object): goog.db.ObjectStore;
    
        /**
         * Deletes an object store. Can only be called inside a
         * {@link goog.db.UpgradeNeededCallback} or the callback for the Deferred
         * returned from #setVersion.
         *
         * @param {string} name Name of the object store to delete.
         * @throws {goog.db.Error} If there's a problem deleting the object store.
         */
        deleteObjectStore(name: string): void;
    
        /**
         * Updates the version of the database and returns a Deferred transaction.
         * The database's structure can be changed inside this Deferred's callback, but
         * nowhere else. This means adding or deleting object stores, and adding or
         * deleting indexes. The version change will not succeed unless there are no
         * other connections active for this database anywhere. A new database
         * connection should be opened after the version change is finished to pick
         * up changes.
         *
         * This is deprecated, and only supported on Chrome prior to version 25. New
         * applications should use the version parameter to {@link goog.db.openDatabase}
         * instead.
         *
         * @param {string} version The new version of the database.
         * @return {!goog.async.Deferred} The deferred transaction for changing the
         *     version.
         */
        setVersion(version: string): goog.async.Deferred;
    
        /**
         * Creates a new transaction.
         *
         * @param {!Array.<string>} storeNames A list of strings that contains the
         *     transaction's scope, the object stores that this transaction can operate
         *     on.
         * @param {goog.db.Transaction.TransactionMode=} opt_mode The mode of the
         *     transaction. If not present, the default is READ_ONLY. For VERSION_CHANGE
         *     transactions call {@link goog.db.IndexedDB#setVersion} instead.
         * @return {!goog.db.Transaction} The wrapper for the newly created transaction.
         * @throws {goog.db.Error} If there's a problem creating the transaction.
         */
        createTransaction(storeNames: string[], opt_mode?: goog.db.Transaction.TransactionMode): goog.db.Transaction;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates an IDBIndex wrapper object. Indexes are associated with object
     * stores and provide methods for looking up objects based on their non-key
     * properties. Should not be created directly, access through the object store
     * it belongs to.
     * @see goog.db.ObjectStore#getIndex
     *
     * @param {!IDBIndex} index Underlying IDBIndex object.
     * @constructor
     * @final
     */
    class Index {
        /**
         * Creates an IDBIndex wrapper object. Indexes are associated with object
         * stores and provide methods for looking up objects based on their non-key
         * properties. Should not be created directly, access through the object store
         * it belongs to.
         * @see goog.db.ObjectStore#getIndex
         *
         * @param {!IDBIndex} index Underlying IDBIndex object.
         * @constructor
         * @final
         */
        constructor(index: IDBIndex);
    
        /**
         * @return {string} Name of the index.
         */
        getName(): string;
    
        /**
         * @return {string} Key path of the index.
         */
        getKeyPath(): string;
    
        /**
         * @return {boolean} True if the index enforces that there is only one object
         *     for each unique value it indexes on.
         */
        isUnique(): boolean;
    
        /**
         * Fetches a single object from the object store. Even if there are multiple
         * objects that match the given key, this method will get only one of them.
         *
         * @param {IDBKeyType} key Key to look up in the index.
         * @return {!goog.async.Deferred} The deferred object for the given record.
         */
        get(key: IDBKeyType): goog.async.Deferred;
    
        /**
         * Looks up a single object from the object store and gives back the key that
         * it's listed under in the object store. Even if there are multiple records
         * that match the given key, this method returns the first.
         *
         * @param {IDBKeyType} key Key to look up in the index.
         * @return {!goog.async.Deferred} The deferred key for the record that matches
         *     the key.
         */
        getKey(key: IDBKeyType): goog.async.Deferred;
    
        /**
         * Gets all indexed objects. If the key is provided, gets all indexed objects
         * that match the key instead.
         *
         * @param {IDBKeyType=} opt_key Key to look up in the index.
         * @return {!goog.async.Deferred} A deferred array of objects that match the
         *     key.
         */
        getAll(opt_key?: IDBKeyType): goog.async.Deferred;
    
        /**
         * Gets the keys to look up all the indexed objects. If the key is provided,
         * gets all records for objects that match the key instead.
         *
         * @param {IDBKeyType=} opt_key Key to look up in the index.
         * @return {!goog.async.Deferred} A deferred array of keys for objects that
         *     match the key.
         */
        getAllKeys(opt_key?: IDBKeyType): goog.async.Deferred;
    
        /**
         * Opens a cursor over the specified key range. Returns a cursor object which is
         * able to iterate over the given range.
         *
         * Example usage:
         *
         * <code>
         *  var cursor = index.openCursor(goog.db.Range.bound('a', 'c'));
         *
         *  var key = goog.events.listen(
         *      cursor, goog.db.Cursor.EventType.NEW_DATA,
         *      function() {
         *        // Do something with data.
         *        cursor.next();
         *      });
         *
         *  goog.events.listenOnce(
         *      cursor, goog.db.Cursor.EventType.COMPLETE,
         *      function() {
         *        // Clean up listener, and perform a finishing operation on the data.
         *        goog.events.unlistenByKey(key);
         *      });
         * </code>
         *
         * @param {!goog.db.KeyRange=} opt_range The key range. If undefined iterates
         *     over the whole object store.
         * @param {!goog.db.Cursor.Direction=} opt_direction The direction. If undefined
         *     moves in a forward direction with duplicates.
         * @return {!goog.db.Cursor} The cursor.
         * @throws {goog.db.Error} If there was a problem opening the cursor.
         */
        openCursor(opt_range?: goog.db.KeyRange, opt_direction?: goog.db.Cursor.Direction): goog.db.Cursor;
    }

    /**
     * Creates a new IDBKeyRange wrapper object. Should not be created directly,
     * instead use one of the static factory methods. For example:
     * @see goog.db.KeyRange.bound
     * @see goog.db.KeyRange.lowerBound
     *
     * @param {!IDBKeyRange} range Underlying IDBKeyRange object.
     * @constructor
     * @final
     */
    class KeyRange {
        /**
         * Creates a new IDBKeyRange wrapper object. Should not be created directly,
         * instead use one of the static factory methods. For example:
         * @see goog.db.KeyRange.bound
         * @see goog.db.KeyRange.lowerBound
         *
         * @param {!IDBKeyRange} range Underlying IDBKeyRange object.
         * @constructor
         * @final
         */
        constructor(range: IDBKeyRange);
    
        /**
         * Returns underlying key range object. This is used in ObjectStore's openCursor
         * and count methods.
         * @return {!IDBKeyRange}
         */
        range(): IDBKeyRange;
    }

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
    
        /** @override */
        disposeInternal(): void;
    }
}

declare module 'goog.db.Error' {

    /**
     * Error codes for database errors.
     * @see http://www.w3.org/TR/IndexedDB/#idl-def-IDBDatabaseException
     *
     * @enum {number}
     */
    enum ErrorCode { UNKNOWN_ERR, NON_TRANSIENT_ERR, NOT_FOUND_ERR, CONSTRAINT_ERR, DATA_ERR, NOT_ALLOWED_ERR, TRANSACTION_INACTIVE_ERR, ABORT_ERR, READ_ONLY_ERR, TIMEOUT_ERR, QUOTA_ERR, INVALID_ACCESS_ERR, INVALID_STATE_ERR } 

    /**
     * Translates an error code into a more useful message.
     *
     * @param {number} code Error code.
     * @return {string} A debug message.
     */
    function getMessage(code: number): string;

    /**
     * Names of all possible errors as returned from the browser.
     * @see http://www.w3.org/TR/IndexedDB/#exceptions
     * @enum {string}
     */
    enum ErrorName { ABORT_ERR, CONSTRAINT_ERR, DATA_CLONE_ERR, DATA_ERR, INVALID_ACCESS_ERR, INVALID_STATE_ERR, NOT_FOUND_ERR, QUOTA_EXCEEDED_ERR, READ_ONLY_ERR, SYNTAX_ERROR, TIMEOUT_ERR, TRANSACTION_INACTIVE_ERR, UNKNOWN_ERR, VERSION_ERR } 

    /**
     * Translates an error name to an error code. This is purely kept for backwards
     * compatibility with Chrome21.
     *
     * @param {string} name The name of the erorr.
     * @return {number} The error code corresponding to the error.
     */
    function getCode(name: string): number;

    /**
     * Converts an error code used by the old spec, to an error name used by the
     * latest spec.
     * @see http://www.w3.org/TR/IndexedDB/#exceptions
     *
     * @param {!goog.db.Error.ErrorCode|number} code The error code to convert.
     * @return {!goog.db.Error.ErrorName} The corresponding name of the error.
     */
    function getName(code: any /*goog.db.Error.ErrorCode|number*/): goog.db.Error.ErrorName;

    /**
     * Constructs an goog.db.Error instance from an IDBRequest. This abstraction is
     * necessary to provide backwards compatibility with Chrome21.
     *
     * @param {!IDBRequest} request The request that failed.
     * @param {string} message The error message to add to err if it's wrapped.
     * @return {!goog.db.Error} The error that caused the failure.
     */
    function fromRequest(request: IDBRequest, message: string): goog.db.Error;

    /**
     * Constructs an goog.db.Error instance from an DOMException. This abstraction
     * is necessary to provide backwards compatibility with Chrome21.
     *
     * @param {!IDBDatabaseException} ex The exception that was thrown.
     * @param {string} message The error message to add to err if it's wrapped.
     * @return {!goog.db.Error} The error that caused the failure.
     * @suppress {invalidCasts} The cast from IDBDatabaseException to DOMError
     *     is invalid and will not compile.
     */
    function fromException(ex: IDBDatabaseException, message: string): goog.db.Error;

    /**
     * A specific kind of database error. If a Version Change is unable to proceed
     * due to other open database connections, it will block and this error will be
     * thrown.
     *
     * @constructor
     * @extends {goog.debug.Error}
     * @final
     */
    class VersionChangeBlockedError extends goog.debug.Error {
        /**
         * A specific kind of database error. If a Version Change is unable to proceed
         * due to other open database connections, it will block and this error will be
         * thrown.
         *
         * @constructor
         * @extends {goog.debug.Error}
         * @final
         */
        constructor();
    }
}

declare module 'goog.db.IndexedDb' {

    /**
     * Event types fired by a database.
     *
     * @enum {string} The event types for the web socket.
     */
    enum EventType { ABORT, CLOSE, ERROR, VERSION_CHANGE } 

    /**
     * Event representing a (possibly attempted) change in the database structure.
     *
     * At time of writing, no Chrome versions support oldVersion or newVersion. See
     * http://crbug.com/153122.
     *
     * @param {number} oldVersion The previous version of the database.
     * @param {number} newVersion The version the database is being or has been
     *     updated to.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class VersionChangeEvent extends goog.events.Event {
        /**
         * Event representing a (possibly attempted) change in the database structure.
         *
         * At time of writing, no Chrome versions support oldVersion or newVersion. See
         * http://crbug.com/153122.
         *
         * @param {number} oldVersion The previous version of the database.
         * @param {number} newVersion The version the database is being or has been
         *     updated to.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(oldVersion: number, newVersion: number);
    }
}

declare module 'goog.db.KeyRange' {

    /**
     * Creates a new key range for a single value.
     *
     * @param {IDBKeyType} key The single value in the range.
     * @return {!goog.db.KeyRange} The key range.
     */
    function only(key: IDBKeyType): goog.db.KeyRange;

    /**
     * Creates a key range with upper and lower bounds.
     *
     * @param {IDBKeyType} lower The value of the lower bound.
     * @param {IDBKeyType} upper The value of the upper bound.
     * @param {boolean=} opt_lowerOpen If true, the range excludes the lower bound
     *     value.
     * @param {boolean=} opt_upperOpen If true, the range excludes the upper bound
     *     value.
     * @return {!goog.db.KeyRange} The key range.
     */
    function bound(lower: IDBKeyType, upper: IDBKeyType, opt_lowerOpen?: boolean, opt_upperOpen?: boolean): goog.db.KeyRange;

    /**
     * Creates a key range with a lower bound only, finishes at the last record.
     *
     * @param {IDBKeyType} lower The value of the lower bound.
     * @param {boolean=} opt_lowerOpen If true, the range excludes the lower bound
     *     value.
     * @return {!goog.db.KeyRange} The key range.
     */
    function lowerBound(lower: IDBKeyType, opt_lowerOpen?: boolean): goog.db.KeyRange;

    /**
     * Creates a key range with a upper bound only, starts at the first record.
     *
     * @param {IDBKeyType} upper The value of the upper bound.
     * @param {boolean=} opt_upperOpen If true, the range excludes the upper bound
     *     value.
     * @return {!goog.db.KeyRange} The key range.
     */
    function upperBound(upper: IDBKeyType, opt_upperOpen?: boolean): goog.db.KeyRange;
}

declare module 'goog.db.Transaction' {

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

