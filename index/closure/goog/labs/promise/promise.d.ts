// Generated Sun May  4 18:19:09 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/promise/resolver.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/testing/watchers.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/async/nexttick.d.ts" />
/// <reference path="../../../goog/async/run.d.ts" />
/// <reference path="../../../goog/promise/thenable.d.ts" />
/// <reference path="../../../goog/promise/promise.d.ts" />

declare module goog.labs {

    /**
     * Alias for the {@code goog.promise.Resolver} interface. This alias will be
     * removed once existing users have had a chance to migrate to the new name.
     *
     * @deprecated Use goog.promise.Resolver instead.
     * @interface
     * @template TYPE
     */
    interface Resolver<TYPE> {
    }

    /**
     * Alias for the {@code goog.Promise} class. Closure Promises were developed
     * under the temporary namespace {@code goog.labs.Promise}. This alias will be
     * removed once existing users have had a chance to migrate to the new name.
     *
     * @see goog.Promise
     *
     * @deprecated Use goog.Promise instead.
     * @param {function(
     *             this:RESOLVER_CONTEXT,
     *             function((TYPE|IThenable.<TYPE>|Thenable)),
     *             function(*)): void} resolver
     * @param {RESOLVER_CONTEXT=} opt_context
     * @constructor
     * @struct
     * @final
     * @implements {goog.Thenable.<TYPE>}
     * @template TYPE,RESOLVER_CONTEXT
     */
    class Promise<TYPE,RESOLVER_CONTEXT> implements goog.Thenable<TYPE> {
        /**
         * Alias for the {@code goog.Promise} class. Closure Promises were developed
         * under the temporary namespace {@code goog.labs.Promise}. This alias will be
         * removed once existing users have had a chance to migrate to the new name.
         *
         * @see goog.Promise
         *
         * @deprecated Use goog.Promise instead.
         * @param {function(
         *             this:RESOLVER_CONTEXT,
         *             function((TYPE|IThenable.<TYPE>|Thenable)),
         *             function(*)): void} resolver
         * @param {RESOLVER_CONTEXT=} opt_context
         * @constructor
         * @struct
         * @final
         * @implements {goog.Thenable.<TYPE>}
         * @template TYPE,RESOLVER_CONTEXT
         */
        constructor(resolver: (_0: (_0: any /*TYPE|IThenable<TYPE>|Thenable*/) => any /*missing*/, _1: (_0: any) => any /*missing*/) => void, opt_context?: RESOLVER_CONTEXT);
    }
}

