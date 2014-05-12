/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractpattern.d.ts" />

declare module goog.dom.pattern {

    class AllChildren extends AllChildren.__Class { }
    module AllChildren {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.dom.pattern.AbstractPattern.__Class {
    
            /**
             * Pattern object that matches any nodes at or below the current tree depth.
             *
             * @constructor
             * @extends {goog.dom.pattern.AbstractPattern}
             */
            constructor();
        }
    }
}
