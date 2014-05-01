// Generated Thu May  1 12:39:23 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../goog/testing/asserts.d.ts" />

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

