/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />

declare module goog.testing {

    /**
     * A JS storage instance, implementing the HMTL5 Storage interface.
     * See http://www.w3.org/TR/webstorage/ for details.
     *
     * @constructor
     * @implements {Storage}
     * @final
     */
    class MockStorage implements Storage {
        /**
         * A JS storage instance, implementing the HMTL5 Storage interface.
         * See http://www.w3.org/TR/webstorage/ for details.
         *
         * @constructor
         * @implements {Storage}
         * @final
         */
        constructor();

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

