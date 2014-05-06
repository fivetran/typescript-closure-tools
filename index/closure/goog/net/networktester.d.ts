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
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />

declare module goog.net {

    /**
     * Creates an instance of goog.net.NetworkTester which can be used to test
     * for internet connectivity by seeing if an image can be loaded from
     * google.com. It can also be tested with other URLs.
     * @param {Function} callback Callback that is called when the test completes.
     *     The callback takes a single boolean parameter. True indicates the URL
     *     was reachable, false indicates it wasn't.
     * @param {Object=} opt_handler Handler object for the callback.
     * @param {goog.Uri=} opt_uri URI to use for testing.
     * @constructor
     * @final
     */
    class NetworkTester {
        /**
         * Creates an instance of goog.net.NetworkTester which can be used to test
         * for internet connectivity by seeing if an image can be loaded from
         * google.com. It can also be tested with other URLs.
         * @param {Function} callback Callback that is called when the test completes.
         *     The callback takes a single boolean parameter. True indicates the URL
         *     was reachable, false indicates it wasn't.
         * @param {Object=} opt_handler Handler object for the callback.
         * @param {goog.Uri=} opt_uri URI to use for testing.
         * @constructor
         * @final
         */
        constructor(callback: Function, opt_handler?: Object, opt_uri?: goog.Uri);
    
        /**
         * Returns the timeout in milliseconds.
         * @return {number} Timeout in milliseconds.
         */
        getTimeout(): number;
    
        /**
         * Sets the timeout in milliseconds.
         * @param {number} timeoutMs Timeout in milliseconds.
         */
        setTimeout(timeoutMs: number): void;
    
        /**
         * Returns the numer of retries to attempt.
         * @return {number} Number of retries to attempt.
         */
        getNumRetries(): number;
    
        /**
         * Sets the timeout in milliseconds.
         * @param {number} retries Number of retries to attempt.
         */
        setNumRetries(retries: number): void;
    
        /**
         * Returns the pause between retries in milliseconds.
         * @return {number} Pause between retries in milliseconds.
         */
        getPauseBetweenRetries(): number;
    
        /**
         * Sets the pause between retries in milliseconds.
         * @param {number} pauseMs Pause between retries in milliseconds.
         */
        setPauseBetweenRetries(pauseMs: number): void;
    
        /**
         * Returns the uri to use for the test.
         * @return {goog.Uri} The uri for the test.
         */
        getUri(): goog.Uri;
    
        /**
         * Sets the uri to use for the test.
         * @param {goog.Uri} uri The uri for the test.
         */
        setUri(uri: goog.Uri): void;
    
        /**
         * Returns whether the tester is currently running.
         * @return {boolean} True if it's running, false if it's not running.
         */
        isRunning(): boolean;
    
        /**
         * Starts the process of testing the network.
         */
        start(): void;
    
        /**
         * Stops the testing of the network. This is a noop if not running.
         */
        stop(): void;
    
        /**
         * Handles a successful or failed result.
         * @param {boolean} succeeded Whether the image load succeeded.
         */
        onResult(succeeded: boolean): void;
    }
}

declare module goog.net.NetworkTester {

    /**
     * Default timeout
     * @type {number}
     */
    var DEFAULT_TIMEOUT_MS: number;
}

