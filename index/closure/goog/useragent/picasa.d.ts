// Generated Sat May  3 12:17:42 PDT 2014

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

declare module goog.userAgent.picasa {

    /**
       * Whether we detect the user has Picasa installed.
       * @type {boolean}
       */
    var HAS_PICASA: boolean;

    /**
       * The installed version of Picasa. If Picasa is detected, this means it is
       * version 2 or later. The precise version number is not yet available to the
       * browser, this is a placeholder for later versions of Picasa.
       * @type {string}
       */
    var VERSION: string;

    /**
     * Whether the installed Picasa version is as new or newer than a given version.
     * This is not yet relevant, we can't detect the true Picasa version number yet,
     * but this may be possible in future Picasa releases.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed Picasa version is as new or newer
     *     than a given version.
     */
    function isVersion(version: string): boolean;
}

