// Generated Wed Apr 30 22:46:59 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/db/error.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/db/cursor.d.ts" />

declare module goog.db {

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
}

