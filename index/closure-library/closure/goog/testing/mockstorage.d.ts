/// <reference path="../../../globals.d.ts" />

declare module goog.testing {

    class MockStorage extends MockStorage__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class MockStorage__Class implements Storage  { 
    
            /**
             * A JS storage instance, implementing the HMTL5 Storage interface.
             * See http://www.w3.org/TR/webstorage/ for details.
             *
             * @constructor
             * @implements {Storage}
             * @final
             */
            constructor();
    
            /**
             * The number of elements in the storage.
             * @type {number}
             */
            length: number;
            getItem(key: string): any;
            [key: string]: any;
            setItem(key: string, data: string): void;
            clear(): void;
            removeItem(key: string): void;
            key(index: number): string;
            [index: number]: any;
            remainingSpace: number;
    } 
    
}
