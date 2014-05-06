/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/debug/relativetimeprovider.d.ts" />
/// <reference path="../../../closure/goog/debug/formatter.d.ts" />
/// <reference path="../../../closure/goog/structs/circularbuffer.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/debug/debugwindow.d.ts" />
/// <reference path="../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../closure/goog/string/typedstring.d.ts" />
/// <reference path="../../../closure/goog/string/const.d.ts" />
/// <reference path="../../../closure/goog/html/safeurl.d.ts" />
/// <reference path="../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../closure/goog/html/safestyle.d.ts" />
/// <reference path="../../../closure/goog/html/safehtml.d.ts" />
/// <reference path="../../../closure/goog/dom/safe.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />

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

