/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../storage/mechanism/iterablemechanism.d.ts" />

declare module goog.testing.storage {

    class FakeMechanism extends FakeMechanism.__Class { }
    module FakeMechanism {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.storage.mechanism.IterableMechanism.__Class {
    
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
}
