/// <reference path="../../../globals.d.ts" />
/// <reference path="../debug/error.d.ts" />
/// <reference path="../../../third_party/closure/goog/mochikit/async/deferred.d.ts" />

declare module goog.net.jsloader {

    class Error extends Error__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Error__Class extends goog.debug.Error__Class  { 
    
            /**
             * A jsloader error.
             *
             * @param {goog.net.jsloader.ErrorCode} code The error code.
             * @param {string=} opt_message Additional message.
             * @constructor
             * @extends {goog.debug.Error}
             * @final
             */
            constructor(code: goog.net.jsloader.ErrorCode, opt_message?: string);
    
            /**
             * The code for this error.
             *
             * @type {goog.net.jsloader.ErrorCode}
             */
            code: goog.net.jsloader.ErrorCode;
    } 
    

    /**
     * The default length of time, in milliseconds, we are prepared to wait for a
     * load request to complete.
     * @type {number}
     */
    var DEFAULT_TIMEOUT: number;

    /**
     * Optional parameters for goog.net.jsloader.send.
     * timeout: The length of time, in milliseconds, we are prepared to wait
     *     for a load request to complete. Default it 5 seconds.
     * document: The HTML document under which to load the JavaScript. Default is
     *     the current document.
     * cleanupWhenDone: If true clean up the script tag after script completes to
     *     load. This is important if you just want to read data from the JavaScript
     *     and then throw it away. Default is false.
     *
     * @typedef {{
     *   timeout: (number|undefined),
     *   document: (HTMLDocument|undefined),
     *   cleanupWhenDone: (boolean|undefined)
     * }}
     */
    interface Options {
        timeout: number|any /*undefined*/;
        document: HTMLDocument|any /*undefined*/;
        cleanupWhenDone: boolean|any /*undefined*/
    }

    /**
     * Loads and evaluates the JavaScript files at the specified URIs, guaranteeing
     * the order of script loads.
     *
     * Because we have to load the scripts in serial (load script 1, exec script 1,
     * load script 2, exec script 2, and so on), this will be slower than doing
     * the network fetches in parallel.
     *
     * If you need to load a large number of scripts but dependency order doesn't
     * matter, you should just call goog.net.jsloader.load N times.
     *
     * If you need to load a large number of scripts on the same domain,
     * you may want to use goog.module.ModuleLoader.
     *
     * @param {Array.<string>} uris The URIs to load.
     * @param {goog.net.jsloader.Options=} opt_options Optional parameters. See
     *     goog.net.jsloader.options documentation for details.
     */
    function loadMany(uris: string[], opt_options?: goog.net.jsloader.Options): void;

    /**
     * Loads and evaluates a JavaScript file.
     * When the script loads, a user callback is called.
     * It is the client's responsibility to verify that the script ran successfully.
     *
     * @param {string} uri The URI of the JavaScript.
     * @param {goog.net.jsloader.Options=} opt_options Optional parameters. See
     *     goog.net.jsloader.Options documentation for details.
     * @return {!goog.async.Deferred} The deferred result, that may be used to add
     *     callbacks and/or cancel the transmission.
     *     The error callback will be called with a single goog.net.jsloader.Error
     *     parameter.
     */
    function load(uri: string, opt_options?: goog.net.jsloader.Options): goog.async.Deferred<any>;

    /**
     * Loads a JavaScript file and verifies it was evaluated successfully, using a
     * verification object.
     * The verification object is set by the loaded JavaScript at the end of the
     * script.
     * We verify this object was set and return its value in the success callback.
     * If the object is not defined we trigger an error callback.
     *
     * @param {string} uri The URI of the JavaScript.
     * @param {string} verificationObjName The name of the verification object that
     *     the loaded script should set.
     * @param {goog.net.jsloader.Options} options Optional parameters. See
     *     goog.net.jsloader.Options documentation for details.
     * @return {!goog.async.Deferred} The deferred result, that may be used to add
     *     callbacks and/or cancel the transmission.
     *     The success callback will be called with a single parameter containing
     *     the value of the verification object.
     *     The error callback will be called with a single goog.net.jsloader.Error
     *     parameter.
     */
    function loadAndVerify(uri: string, verificationObjName: string, options: goog.net.jsloader.Options): goog.async.Deferred<any>;

    /**
     * Possible error codes for jsloader.
     * @enum {number}
     */
    enum ErrorCode { LOAD_ERROR, TIMEOUT, VERIFY_ERROR, VERIFY_OBJECT_ALREADY_EXISTS } 
}
