/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/pattern.d.ts" />
/// <reference path="../../../../closure/goog/dom/pattern/abstractpattern.d.ts" />

declare module goog.dom.pattern {

    /**
     * Pattern object that matches any nodes at or below the current tree depth.
     *
     * @constructor
     * @extends {goog.dom.pattern.AbstractPattern}
     */
    class AllChildren extends goog.dom.pattern.AbstractPattern {
        /**
         * Pattern object that matches any nodes at or below the current tree depth.
         *
         * @constructor
         * @extends {goog.dom.pattern.AbstractPattern}
         */
        constructor();
    }
}

