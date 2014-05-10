/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractrange.d.ts" />

declare module goog.dom {

    class AbstractMultiRange extends __AbstractMultiRange { }
    class __AbstractMultiRange extends goog.dom.__AbstractRange {
    
        /**
         * Creates a new multi range with no properties.  Do not use this
         * constructor: use one of the goog.dom.Range.createFrom* methods instead.
         * @constructor
         * @extends {goog.dom.AbstractRange}
         */
        constructor();
    }
}
