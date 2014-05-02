// Generated Fri May  2 11:43:12 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../goog/testing/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/testing/testcase.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />

declare module goog.testing.ShardingTestCase {

    /**
     * Shards tests based on the test filename. Assumes that the filename is
     * formatted like 'foo_1of5_test.html'.
     * @param {string=} opt_name A descriptive name for the test case.
     */
    function shardByFileName(opt_name?: string): void;
}

declare module goog.testing {

    /**
     * A test case that runs tests in per-file shards.
     * @param {number} shardIndex Shard index for this page,
     *     <strong>1-indexed</strong>.
     * @param {number} numShards Number of shards to split up test cases into.
     * @extends {goog.testing.TestCase}
     * @constructor
     * @final
     */
    class ShardingTestCase extends goog.testing.TestCase {
        /**
         * A test case that runs tests in per-file shards.
         * @param {number} shardIndex Shard index for this page,
         *     <strong>1-indexed</strong>.
         * @param {number} numShards Number of shards to split up test cases into.
         * @extends {goog.testing.TestCase}
         * @constructor
         * @final
         */
        constructor(shardIndex: number, numShards: number);
    }
}

