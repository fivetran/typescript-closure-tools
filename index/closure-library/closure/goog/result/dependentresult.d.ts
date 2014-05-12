/// <reference path="../../../globals.d.ts" />
/// <reference path="./result_interface.d.ts" />

declare module goog.result {

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
