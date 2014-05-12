/// <reference path="../../../globals.d.ts" />

declare module goog.structs {

    interface Collection<T> {
    
        /**
          * @param {T} value Value to add to the collection.
          */
        add(value: T): void;
    
        /**
          * @param {T} value Value to remove from the collection.
          */
        remove(value: T): void;
    
        /**
          * @param {T} value Value to find in the collection.
          * @return {boolean} Whether the collection contains the specified value.
          */
        contains(value: T): boolean;
    
        /**
          * @return {number} The number of values stored in the collection.
          */
        getCount(): number;
    }
}
