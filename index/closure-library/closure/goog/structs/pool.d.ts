/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />

declare module goog.structs {

    class Pool<T> extends Pool__Class<T> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Pool__Class<T> extends goog.Disposable__Class  { 
    
            /**
             * A generic pool class. If min is greater than max, an error is thrown.
             * @param {number=} opt_minCount Min. number of objects (Default: 1).
             * @param {number=} opt_maxCount Max. number of objects (Default: 10).
             * @constructor
             * @extends {goog.Disposable}
             * @template T
             */
            constructor(opt_minCount?: number, opt_maxCount?: number);
    
            /**
             * The minimum delay between objects being made available, in milliseconds. If
             * this is 0, no minimum delay is enforced.
             * @protected {number}
             */
            delay: any /*missing*/;
    
            /**
             * The time of the last object being made available, in milliseconds since the
             * epoch (i.e., the result of Date#toTime). If this is null, no access has
             * occurred yet.
             * @protected {number?}
             */
            lastAccess: any /*missing*/;
    
            /**
             * Sets the minimum count of the pool.
             * If min is greater than the max count of the pool, an error is thrown.
             * @param {number} min The minimum count of the pool.
             */
            setMinimumCount(min: number): void;
    
            /**
             * Sets the maximum count of the pool.
             * If max is less than the max count of the pool, an error is thrown.
             * @param {number} max The maximum count of the pool.
             */
            setMaximumCount(max: number): void;
    
            /**
             * Sets the minimum delay between objects being returned by getObject, in
             * milliseconds. This defaults to zero, meaning that no minimum delay is
             * enforced and objects may be used as soon as they're available.
             * @param {number} delay The minimum delay, in milliseconds.
             */
            setDelay(delay: number): void;
    
            /**
             * @return {T|undefined} A new object from the pool if there is one available,
             *     otherwise undefined.
             */
            getObject(): T|any /*undefined*/;
    
            /**
             * Returns an object to the pool of available objects so that it can be reused.
             * @param {T} obj The object to return to the pool of free objects.
             * @return {boolean} Whether the object was found in the Pool's set of in-use
             *     objects (in other words, whether any action was taken).
             */
            releaseObject(obj: T): boolean;
    
            /**
             * Adds an object to the collection of objects that are free. If the object can
             * not be added, then it is disposed.
             *
             * @param {T} obj The object to add to collection of free objects.
             */
            addFreeObject(obj: T): void;
    
            /**
             * Adjusts the objects held in the pool to be within the min/max constraints.
             *
             * NOTE: It is possible that the number of objects in the pool will still be
             * greater than the maximum count of objects allowed. This will be the case
             * if no more free objects can be disposed of to get below the minimum count
             * (i.e., all objects are in use).
             */
            adjustForMinMax(): void;
    
            /**
             * Should be overridden by sub-classes to return an instance of the object type
             * that is expected in the pool.
             * @return {T} The created object.
             */
            createObject(): T;
    
            /**
             * Should be overridden to dispose of an object. Default implementation is to
             * remove all its members, which should render it useless. Calls the object's
             * {@code dispose()} method, if available.
             * @param {T} obj The object to dispose.
             */
            disposeObject(obj: T): void;
    
            /**
             * Should be overridden to determine whether an object has become unusable and
             * should not be returned by getObject(). Calls the object's
             * {@code canBeReused()}  method, if available.
             * @param {T} obj The object to test.
             * @return {boolean} Whether the object can be reused.
             */
            objectCanBeReused(obj: T): boolean;
    
            /**
             * Returns true if the given object is in the pool.
             * @param {T} obj The object to check the pool for.
             * @return {boolean} Whether the pool contains the object.
             */
            contains(obj: T): boolean;
    
            /**
             * Returns the number of objects currently in the pool.
             * @return {number} Number of objects currently in the pool.
             */
            getCount(): number;
    
            /**
             * Returns the number of objects currently in use in the pool.
             * @return {number} Number of objects currently in use in the pool.
             */
            getInUseCount(): number;
    
            /**
             * Returns the number of objects currently free in the pool.
             * @return {number} Number of objects currently free in the pool.
             */
            getFreeCount(): number;
    
            /**
             * Determines if the pool contains no objects.
             * @return {boolean} Whether the pool contains no objects.
             */
            isEmpty(): boolean;
    } 
    
}
