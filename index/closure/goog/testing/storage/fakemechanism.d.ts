/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/mechanism.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/iterablemechanism.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />

declare module goog.testing.storage {

    /**
     * Creates a fake iterable mechanism.
     *
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    class FakeMechanism extends goog.storage.mechanism.IterableMechanism {
        /**
         * Creates a fake iterable mechanism.
         *
         * @constructor
         * @extends {goog.storage.mechanism.IterableMechanism}
         * @final
         */
        constructor();
    }
}

