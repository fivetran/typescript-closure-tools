/// <reference path="../../../globals.d.ts" />

declare module goog.net {

    /**
     * Event names for network events
     * @enum {string}
     */
    enum EventType { COMPLETE, SUCCESS, ERROR, ABORT, READY, READY_STATE_CHANGE, TIMEOUT, INCREMENTAL_DATA, PROGRESS } 
}
