// Generated Fri May  2 10:38:15 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.messaging {

    /**
     * @interface
     */
    interface MessageChannel {
        connect(opt_connectCb?: Function): void;
        isConnected(): boolean;
        registerService(serviceName: string, callback: (_0: any /*string|Object*/) => any /*missing*/, opt_objectPayload?: boolean): void;
        registerDefaultService(callback: (_0: string, _1: any /*string|Object*/) => any /*missing*/): void;
        send(serviceName: string, payload: any /*string|Object*/): void;
    }
}

