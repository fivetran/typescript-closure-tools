/// <reference path="../../../../globals.d.ts" />
/// <reference path="./webchanneltransport.d.ts" />

declare module goog.net {

    /**
     * Create a new WebChannelTransport instance using the default implementation.
     *
     * @return {!goog.net.WebChannelTransport} the newly created transport instance.
     */
    function createWebChannelTransport(): goog.net.WebChannelTransport;
}
