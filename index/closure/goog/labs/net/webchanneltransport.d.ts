// Generated Thu May  1 21:07:07 PDT 2014

/// <reference path="../../../goog/base.d.ts" />

declare module goog.net {

    /**
     * A WebChannelTransport instance represents a shared context of logical
     * connectivity between a browser client and a remote origin.
     *
     * Over a single WebChannelTransport instance, multiple WebChannels may be
     * created against different URLs, which may all share the same
     * underlying connectivity (i.e. TCP connection) whenever possible.
     *
     * When multi-domains are supported, such as CORS, multiple origins may be
     * supported over a single WebChannelTransport instance at the same time.
     *
     * Sharing between different window contexts such as tabs is not addressed
     * by WebChannelTransport. Applications may choose HTML5 shared workers
     * or other techniques to access the same transport instance
     * across different window contexts.
     *
     * @interface
     */
    interface WebChannelTransport {
        createWebChannel: any /*missing*/;
    }
}

