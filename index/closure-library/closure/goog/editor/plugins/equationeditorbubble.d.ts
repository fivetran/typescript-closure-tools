/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractbubbleplugin.d.ts" />

declare module goog.editor.plugins.equation {

    class EquationBubble extends EquationBubble.__Class { }
    module EquationBubble {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.plugins.AbstractBubblePlugin.__Class {
    
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
}
