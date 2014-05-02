// Generated Fri May  2 10:40:42 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/storage/mechanism/mechanism.d.ts" />
/// <reference path="../../../goog/storage/mechanism/iterablemechanism.d.ts" />

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

