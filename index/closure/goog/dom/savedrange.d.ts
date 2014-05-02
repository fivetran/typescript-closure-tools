// Generated Thu May  1 16:39:06 PDT 2014

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
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />

declare module goog.dom {

    /**
     * Abstract interface for a saved range.
     * @constructor
     * @extends {goog.Disposable}
     */
    class SavedRange extends goog.Disposable {
        /**
         * Abstract interface for a saved range.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor();
    
        /**
         * Restores the range and by default disposes of the saved copy.  Take note:
         * this means the by default SavedRange objects are single use objects.
         * @param {boolean=} opt_stayAlive Whether this SavedRange should stay alive
         *     (not be disposed) after restoring the range. Defaults to false (dispose).
         * @return {goog.dom.AbstractRange} The restored range.
         */
        restore(opt_stayAlive?: boolean): goog.dom.AbstractRange;
    
        /**
         * Internal method to restore the saved range.
         * @return {goog.dom.AbstractRange} The restored range.
         */
        restoreInternal: any /*missing*/;
    }
}

