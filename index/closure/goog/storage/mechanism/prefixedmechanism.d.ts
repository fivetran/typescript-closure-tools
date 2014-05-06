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

declare module goog.storage.mechanism {

    /**
     * Wraps an iterable storage mechanism and creates artificial namespaces.
     *
     * @param {!goog.storage.mechanism.IterableMechanism} mechanism Underlying
     *     iterable storage mechanism.
     * @param {string} prefix Prefix for creating an artificial namespace.
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    class PrefixedMechanism extends goog.storage.mechanism.IterableMechanism {
        /**
         * Wraps an iterable storage mechanism and creates artificial namespaces.
         *
         * @param {!goog.storage.mechanism.IterableMechanism} mechanism Underlying
         *     iterable storage mechanism.
         * @param {string} prefix Prefix for creating an artificial namespace.
         * @constructor
         * @extends {goog.storage.mechanism.IterableMechanism}
         * @final
         */
        constructor(mechanism: goog.storage.mechanism.IterableMechanism, prefix: string);
    }
}

