/// <reference path="../../../../globals.d.ts" />

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
