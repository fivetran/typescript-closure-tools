// Generated Thu May  1 16:45:16 PDT 2014

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
/// <reference path="../../goog/debug/relativetimeprovider.d.ts" />
/// <reference path="../../goog/debug/formatter.d.ts" />
/// <reference path="../../goog/structs/circularbuffer.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/debug/debugwindow.d.ts" />
/// <reference path="../../goog/i18n/bidi.d.ts" />
/// <reference path="../../goog/string/typedstring.d.ts" />
/// <reference path="../../goog/string/const.d.ts" />
/// <reference path="../../goog/html/safeurl.d.ts" />
/// <reference path="../../goog/dom/tags.d.ts" />
/// <reference path="../../goog/html/safestyle.d.ts" />
/// <reference path="../../goog/html/safehtml.d.ts" />
/// <reference path="../../goog/dom/safe.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />

declare module goog.debug.FancyWindow {

    /**
     * Constant indicating if we are able to use localStorage to persist filters
     * @type {boolean}
     */
    var HAS_LOCAL_STORE: boolean;

    /**
     * Constant defining the prefix to use when storing log levels
     * @type {string}
     */
    var LOCAL_STORE_PREFIX: string;
}

declare module goog.debug {

    /**
     * Provides a Fancy extension to the DebugWindow class.  Allows filtering based
     * on loggers and levels.
     *
     * @param {string=} opt_identifier Idenitifier for this logging class.
     * @param {string=} opt_prefix Prefix pre-pended to messages.
     * @constructor
     * @extends {goog.debug.DebugWindow}
     */
    class FancyWindow extends goog.debug.DebugWindow {
        /**
         * Provides a Fancy extension to the DebugWindow class.  Allows filtering based
         * on loggers and levels.
         *
         * @param {string=} opt_identifier Idenitifier for this logging class.
         * @param {string=} opt_prefix Prefix pre-pended to messages.
         * @constructor
         * @extends {goog.debug.DebugWindow}
         */
        constructor(opt_identifier?: string, opt_prefix?: string);
    }
}

