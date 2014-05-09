/// <reference path="../../../../../globals.d.ts" />

declare module goog.labs.net.webChannel {

    class ForwardChannelRequestPool {
    
        /**
         * This class represents the state of all forward channel requests.
         *
         * @param {number=} opt_maxPoolSize The maximum pool size.
         *
         * @constructor
         * @final
         */
        constructor(opt_maxPoolSize?: number);
    }
}
