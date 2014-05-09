/// <reference path="../../../globals.d.ts" />
/// <reference path="./mechanism/iterablemechanism.d.ts" />
/// <reference path="../testing/mockclock.d.ts" />
/// <reference path="./collectablestorage.d.ts" />

declare module goog.storage.collectableStorageTester {

    /**
     * Tests basic operation: expiration and collection of collectable storage.
     *
     * @param {goog.storage.mechanism.IterableMechanism} mechanism
     * @param {goog.testing.MockClock} clock
     * @param {goog.storage.CollectableStorage} storage
      */
    function runBasicTests(mechanism: goog.storage.mechanism.IterableMechanism, clock: goog.testing.MockClock, storage: goog.storage.CollectableStorage): void;
}
