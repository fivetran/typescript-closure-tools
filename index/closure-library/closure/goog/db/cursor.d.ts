/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />
/// <reference path="./keyrange.d.ts" />

declare module goog.db {

    class Cursor extends Cursor__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Cursor__Class extends goog.events.EventTarget__Class  { 
    
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
            getKey(): IDBKeyType;
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
    function openCursor(source: IDBObjectStore|IDBIndex, opt_range?: goog.db.KeyRange, opt_direction?: goog.db.Cursor.Direction): goog.db.Cursor;

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
