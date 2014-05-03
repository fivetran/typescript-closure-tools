// Generated Sat May  3 12:17:39 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />

declare module goog.userAgent.product {

    /**
     * The version of the user agent. This is a string because it might contain
     * 'b' (as in beta) as well as multiple dots.
     * @type {string}
     */
    var VERSION: string;

    /**
     * Whether the user agent product version is higher or the same as the given
     * version.
     *
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the user agent product version is higher or the
     *     same as the given version.
     */
    function isVersion(version: any /*string|number*/): boolean;
}

