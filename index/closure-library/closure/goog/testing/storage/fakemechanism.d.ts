/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../storage/mechanism/iterablemechanism.d.ts" />

declare module goog.testing.storage {

    class FakeMechanism extends FakeMechanism__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FakeMechanism__Class extends goog.storage.mechanism.IterableMechanism__Class  { 
    
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
