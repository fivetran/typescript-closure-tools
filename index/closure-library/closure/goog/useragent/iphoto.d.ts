/// <reference path="../../../globals.d.ts" />

declare module goog.userAgent.iphoto {

    /**
       * Whether we can detect that the user has iPhoto installed.
       * @type {boolean}
       */
    var HAS_IPHOTO: boolean;

    /**
       * The version of iPhoto installed if found.
       * @type {string}
       */
    var VERSION: string;

    /**
     * Whether the installed version of iPhoto is as new or newer than a given
     * version.
     * @param {string} version The version to check.
     * @return {boolean} Whether the installed version of iPhoto is as new or newer
     *     than a given version.
     */
    function isVersion(version: string): boolean;
}
