/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractpattern.d.ts" />

declare module goog.dom.pattern {

    class AllChildren extends __AllChildren { }
    class __AllChildren extends goog.dom.pattern.__AbstractPattern {
    
        /**
         * Pattern object that matches any nodes at or below the current tree depth.
         *
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         */
        constructor();
    }
}
