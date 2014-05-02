// Generated Thu May  1 21:01:42 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/crypt/crypt.d.ts" />
/// <reference path="../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../goog/testing/asserts.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/testing/pseudorandom.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/promise/resolver.d.ts" />
/// <reference path="../../goog/testing/watchers.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/async/nexttick.d.ts" />
/// <reference path="../../goog/async/run.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/promise/promise.d.ts" />
/// <reference path="../../goog/testing/performancetimer.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/testing/performancetable.d.ts" />

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
    function runPerfTests(hashFactory: () => goog.crypt.Hash, hashName: string): void;
}

