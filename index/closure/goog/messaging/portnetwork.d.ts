// Generated Thu May  1 17:21:20 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.messaging.PortNetwork {

    /**
     * The name of the service exported by the operator for creating a connection
     * between two callers.
     *
     * @type {string}
     * @const
     */
    var REQUEST_CONNECTION_SERVICE: string;

    /**
     * The name of the service exported by the callers for adding a connection to
     * another context.
     *
     * @type {string}
     * @const
     */
    var GRANT_CONNECTION_SERVICE: string;
}

declare module goog.messaging {

    /**
     * @interface
     */
    interface PortNetwork {
        dial(name: string): goog.messaging.MessageChannel;
    }
}

