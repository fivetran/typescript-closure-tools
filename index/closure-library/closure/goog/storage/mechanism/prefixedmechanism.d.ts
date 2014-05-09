/// <reference path="../../../../globals.d.ts" />
/// <reference path="./iterablemechanism.d.ts" />

declare module goog.storage.mechanism {

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
