/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../storage/mechanism/iterablemechanism.d.ts" />

declare module goog.testing.storage {

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
