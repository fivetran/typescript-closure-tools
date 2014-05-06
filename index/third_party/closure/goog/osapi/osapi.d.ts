// Generated Mon May  5 21:16:40 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />

declare module osapi {

    /** @type {Function} */
    var callback: Function;
}

declare module goog.osapi {

    /**
     * Dispatch a JSON-RPC batch request to services defined in the osapi namespace
     * @param {Array.<Object>} requests an array of rpc requests.
     */
    function handleGadgetRpcMethod(requests: Object[]): void;

    /**
     * Initializes container side osapi binding.
     */
    function init(): void;
}

