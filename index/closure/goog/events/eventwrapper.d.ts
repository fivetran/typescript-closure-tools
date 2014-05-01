// Generated Wed Apr 30 22:43:21 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.events {

    /**
     * Interface for event wrappers.
     * @interface
     */
    interface EventWrapper {
        listen(src: goog.events.ListenableType, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler): void;
        unlisten(src: goog.events.ListenableType, listener: any /*(_0: any) => any|{ handleEvent: (_0: any) => any }|any (null)*/, opt_capt?: boolean, opt_scope?: Object, opt_eventHandler?: goog.events.EventHandler): void;
    }
}

