/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt.hashTester {

    /**
     * Runs basic tests.
     *
     * @param {!goog.crypt.Hash} hash A hash instance.
     */
    function runBasicTests(hash: goog.crypt.Hash): void;

    /**
     * Runs block tests.
     *
     * @param {!goog.crypt.Hash} hash A hash instance.
     * @param {number} blockBytes Size of the hash block.
     */
    function runBlockTests(hash: goog.crypt.Hash, blockBytes: number): void;

    /**
     * Runs performance tests.
     *
     * @param {function():!goog.crypt.Hash} hashFactory A hash factory.
     * @param {string} hashName Name of the hashing function.
     */
    function runPerfTests(hashFactory: { (): goog.crypt.Hash }, hashName: string): void;
}
