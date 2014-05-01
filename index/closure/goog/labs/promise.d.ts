// Generated Wed Apr 30 16:38:56 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/async.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/promise.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/testing.d.ts" />

declare module 'goog.labs' {

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
    var Promise: any /*missing*/;

    /**
     * Alias for the {@code goog.promise.Resolver} interface. This alias will be
     * removed once existing users have had a chance to migrate to the new name.
     *
     * @deprecated Use goog.promise.Resolver instead.
     * @interface
     * @template TYPE
     */
    interface Resolver {
    }
}

