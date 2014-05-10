/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./abstractrange.d.ts" />

declare module goog.dom {

    class SavedRange extends __SavedRange { }
    class __SavedRange extends goog.__Disposable {
    
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
        restoreInternal(): goog.dom.AbstractRange;
    }
}
