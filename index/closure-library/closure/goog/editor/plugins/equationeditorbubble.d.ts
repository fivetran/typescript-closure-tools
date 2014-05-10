/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractbubbleplugin.d.ts" />

declare module goog.editor.plugins.equation {

    class EquationBubble extends __EquationBubble { }
    class __EquationBubble extends goog.editor.plugins.__AbstractBubblePlugin {
    
        /**
         * Property bubble plugin for equations.
         *
         * @constructor
         * @extends {goog.editor.plugins.AbstractBubblePlugin}
         * @final
         */
        constructor();
    }
}
