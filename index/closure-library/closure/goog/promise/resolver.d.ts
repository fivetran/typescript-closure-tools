/// <reference path="../../../globals.d.ts" />

declare module goog.promise {

    interface Resolver<TYPE> {
    
        /**
          * The promise that created this resolver.
          * @const {!goog.Promise.<TYPE>}
          */
        promise: any /*missing*/;
    
        /**
          * Resolves this resolver with the specified value.
          * @const {function((TYPE|goog.Promise.<TYPE>|Thenable))}
          */
        resolve: any /*missing*/;
    
        /**
          * Rejects this resolver with the specified reason.
          * @const {function(*): void}
          */
        reject: any /*missing*/;
    }
}
