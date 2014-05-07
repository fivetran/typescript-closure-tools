/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/db/error.d.ts" />
/// <reference path="../../../closure/goog/promise/resolver.d.ts" />
/// <reference path="../../../closure/goog/testing/watchers.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/async/nexttick.d.ts" />
/// <reference path="../../../closure/goog/async/run.d.ts" />
/// <reference path="../../../closure/goog/promise/thenable.d.ts" />
/// <reference path="../../../closure/goog/promise/promise.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.db {

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
        next(opt_key?: any): void;
    
        /**
         * Updates the value at the current position of the cursor in the object store.
         * If the cursor points to a value that has just been deleted, a new value is
         * created.
         *
         * @param {*} value The value to be stored.
         * @return {!goog.async.Deferred} The resulting deferred request.
         */
        update(value: any): goog.async.Deferred<any>;
    
        /**
         * Deletes the value at the cursor's position, without changing the cursor's
         * position. Once the value is deleted, the cursor's value is set to null.
         *
         * @return {!goog.async.Deferred} The resulting deferred request.
         */
        remove(): goog.async.Deferred<any>;
    
        /**
         * @return {*} The value for the value at the cursor's position. Undefined
         *     if no current value, or null if value has just been deleted.
         */
        getValue(): any;
    
        /**
         * @return {IDBKeyType} The key for the value at the cursor's position. If
         *     the cursor is outside its range, this is undefined.
         */
        getKey(): any;
    }
}

declare module goog.db.Cursor {

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

