/// <reference path="../../../../globals.d.ts" />
/// <reference path="./mechanism.d.ts" />

declare module goog.storage.mechanism {

    class ErrorHandlingMechanism extends ErrorHandlingMechanism__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ErrorHandlingMechanism__Class extends goog.storage.mechanism.Mechanism__Class  { 
    
            /**
             * Wraps a storage mechanism with a custom error handler.
             *
             * @param {!goog.storage.mechanism.Mechanism} mechanism Underlying storage
             *     mechanism.
             * @param {goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler}
             *     errorHandler An error handler.
             * @constructor
             * @extends {goog.storage.mechanism.Mechanism}
             * @final
             */
            constructor(mechanism: goog.storage.mechanism.Mechanism, errorHandler: goog.storage.mechanism.ErrorHandlingMechanism.ErrorHandler);
    } 
    
}

declare module goog.storage.mechanism.ErrorHandlingMechanism {

    /**
     * Valid storage mechanism operations.
     * @enum {string}
     */
    enum Operation { SET, GET, REMOVE } 

    /**
     * A function that handles errors raised in goog.storage.  Since some places in
     * the goog.storage codebase throw strings instead of Error objects, we accept
     * these as a valid parameter type.  It supports the following arguments:
     *
     * 1) The raised error (either in Error or string form);
     * 2) The operation name which triggered the error, as defined per the
     *    ErrorHandlingMechanism.Operation enum;
     * 3) The key that is passed to a storage method;
     * 4) An optional value that is passed to a storage method (only used in set
     *    operations).
     *
     * @typedef {function(
     *   (!Error|string),
     *   goog.storage.mechanism.ErrorHandlingMechanism.Operation,
     *   string,
     *   *=)}
     */
    interface ErrorHandler {
        (_0: Error|string, _1: goog.storage.mechanism.ErrorHandlingMechanism.Operation, _2: string, _3: any): any /*missing*/
    }
}
