// Generated Wed Apr 30 22:45:08 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />

declare module goog.labs.userAgent.engine {

    /**
     * @return {boolean} Whether the rendering engine is Presto.
     */
    function isPresto(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is Trident.
     */
    function isTrident(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is WebKit.
     */
    function isWebKit(): boolean;

    /**
     * @return {boolean} Whether the rendering engine is Gecko.
     */
    function isGecko(): boolean;

    /**
     * @return {string} The rendering engine's version or empty string if version
     *     can't be determined.
     */
    function getVersion(): string;

    /**
     * @param {string|number} version The version to check.
     * @return {boolean} Whether the rendering engine version is higher or the same
     *     as the given version.
     */
    function isVersionOrHigher(version: any /*string|number*/): boolean;
}

