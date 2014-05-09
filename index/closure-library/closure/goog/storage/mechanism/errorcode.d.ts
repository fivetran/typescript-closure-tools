/// <reference path="../../../../globals.d.ts" />

declare module goog.storage.mechanism {

    /**
     * Errors thrown by storage mechanisms.
     * @enum {string}
     */
    enum ErrorCode { INVALID_VALUE, QUOTA_EXCEEDED, STORAGE_DISABLED } 
}
