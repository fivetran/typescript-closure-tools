/// <reference path="../../../globals.d.ts" />
/// <reference path="./abstractrange.d.ts" />

declare module goog.dom {

    class AbstractMultiRange extends AbstractMultiRange.__Class { }
    module AbstractMultiRange {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.dom.AbstractRange.__Class {
    
            /**
             * Creates a new multi range with no properties.  Do not use this
             * constructor: use one of the goog.dom.Range.createFrom* methods instead.
             * @constructor
             * @extends {goog.dom.AbstractRange}
             */
            constructor();
        }
    }
}
