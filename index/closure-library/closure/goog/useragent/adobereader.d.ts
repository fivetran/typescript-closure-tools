/// <reference path="../../../globals.d.ts" />

declare module goog.userAgent.adobeReader {

    /**
       * Whether we detect the user has the Adobe Reader browser plugin installed.
       * @type {boolean}
       */
    var HAS_READER: boolean;

    /**
       * The version of the installed Adobe Reader plugin. Versions after 7
       * will all be reported as '7'.
       * @type {string}
       */
    var VERSION: string;

    /**
       * On certain combinations of platform/browser/plugin, a print dialog
       * can be shown for PDF files without a download dialog or making the
       * PDF visible to the user, by loading the PDF into a hidden iframe.
       *
       * Currently this variable is true if Adobe Reader version 6 or later
       * is detected on Windows.
       *
       * @type {boolean}
       */
    var SILENT_PRINT: boolean;
}
