/// <reference path="../../../globals.d.ts" />

declare module goog.net {

    /**
     * Error codes
     * @enum {number}
     */
    enum ErrorCode { NO_ERROR, ACCESS_DENIED, FILE_NOT_FOUND, FF_SILENT_ERROR, CUSTOM_ERROR, EXCEPTION, HTTP_ERROR, ABORT, TIMEOUT, OFFLINE } 
}

declare module goog.net.ErrorCode {

    /**
     * Returns a friendly error message for an error code. These messages are for
     * debugging and are not localized.
     * @param {goog.net.ErrorCode} errorCode An error code.
     * @return {string} A message for debugging.
     */
    function getDebugMessage(errorCode: goog.net.ErrorCode): string;
}
