/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />

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

