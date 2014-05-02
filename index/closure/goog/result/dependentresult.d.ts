// Generated Fri May  2 15:04:21 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/promise/thenable.d.ts" />
/// <reference path="../../goog/result/result_interface.d.ts" />

declare module goog.result {

    /**
     * A DependentResult represents a Result whose eventual value depends on the
     * value of one or more other Results. For example, the Result returned by
     * @see goog.result.chain or @see goog.result.combine is dependent on the
     * Results given as arguments.
     * @interface
     * @extends {goog.result.Result}
     * @deprecated Use {@link goog.Promise} instead - http://go/promisemigration
     */
    interface DependentResult extends goog.result.Result {
    
        /**
         *
         * @return {!Array.<!goog.result.Result>} A list of Results which will affect
         *     the eventual value of this Result. The returned Results may themselves
         *     have parent results, which would be grandparents of this Result;
         *     grandparents (and any other ancestors) are not included in this list.
         */
        getParentResults(): goog.result.Result[];
    }
}

