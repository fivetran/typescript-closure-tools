/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/net/channeldebug.d.ts" />

declare module goog.net.tmpnetwork {

    /**
     * Default timeout to allow for google.com pings.
     * @type {number}
     */
    var GOOGLECOM_TIMEOUT: number;

    /**
     * Pings the network to check if an error is a server error or user's network
     * error.
     *
     * @param {Function} callback The function to call back with results.
     * @param {goog.Uri?=} opt_imageUri The URI of an image to use for the network
     *     test. You *must* provide an image URI; the default behavior is provided
     *     for compatibility with existing code, but the search team does not want
     *     people using images served off of google.com for this purpose. The
     *     default will go away when all usages have been changed.
     */
    function testGoogleCom(callback: Function, opt_imageUri?: goog.Uri): void;

    /**
     * Test loading the given image, retrying if necessary.
     * @param {string} url URL to the iamge.
     * @param {number} timeout Milliseconds before giving up.
     * @param {Function} callback Function to call with results.
     * @param {number} retries The number of times to retry.
     * @param {number=} opt_pauseBetweenRetriesMS Optional number of milliseconds
     *     between retries - defaults to 0.
     */
    function testLoadImageWithRetries(url: string, timeout: number, callback: Function, retries: number, opt_pauseBetweenRetriesMS?: number): void;

    /**
     * Test loading the given image.
     * @param {string} url URL to the iamge.
     * @param {number} timeout Milliseconds before giving up.
     * @param {Function} callback Function to call with results.
     */
    function testLoadImage(url: string, timeout: number, callback: Function): void;
}

