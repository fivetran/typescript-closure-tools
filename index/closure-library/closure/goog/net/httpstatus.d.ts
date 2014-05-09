/// <reference path="../../../globals.d.ts" />

declare module goog.net {

    /**
     * HTTP Status Codes defined in RFC 2616.
     * @see http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     * @enum {number}
     */
    enum HttpStatus { CONTINUE, SWITCHING_PROTOCOLS, OK, CREATED, ACCEPTED, NON_AUTHORITATIVE_INFORMATION, NO_CONTENT, RESET_CONTENT, PARTIAL_CONTENT, MULTIPLE_CHOICES, MOVED_PERMANENTLY, FOUND, SEE_OTHER, NOT_MODIFIED, USE_PROXY, TEMPORARY_REDIRECT, BAD_REQUEST, UNAUTHORIZED, PAYMENT_REQUIRED, FORBIDDEN, NOT_FOUND, METHOD_NOT_ALLOWED, NOT_ACCEPTABLE, PROXY_AUTHENTICATION_REQUIRED, REQUEST_TIMEOUT, CONFLICT, GONE, LENGTH_REQUIRED, PRECONDITION_FAILED, REQUEST_ENTITY_TOO_LARGE, REQUEST_URI_TOO_LONG, UNSUPPORTED_MEDIA_TYPE, REQUEST_RANGE_NOT_SATISFIABLE, EXPECTATION_FAILED, INTERNAL_SERVER_ERROR, NOT_IMPLEMENTED, BAD_GATEWAY, SERVICE_UNAVAILABLE, GATEWAY_TIMEOUT, HTTP_VERSION_NOT_SUPPORTED, QUIRK_IE_NO_CONTENT } 
}

declare module goog.net.HttpStatus {

    /**
     * Returns whether the given status should be considered successful.
     *
     * Successful codes are OK (200), CREATED (201), ACCEPTED (202),
     * NO CONTENT (204), PARTIAL CONTENT (206), NOT MODIFIED (304),
     * and IE's no content code (1223).
     *
     * @param {number} status The status code to test.
     * @return {boolean} Whether the status code should be considered successful.
     */
    function isSuccess(status: number): boolean;
}
