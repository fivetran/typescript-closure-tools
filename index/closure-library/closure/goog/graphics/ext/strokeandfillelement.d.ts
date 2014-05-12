/// <reference path="../../../../globals.d.ts" />
/// <reference path="./element.d.ts" />
/// <reference path="./group.d.ts" />
/// <reference path="../strokeandfillelement.d.ts" />
/// <reference path="../fill.d.ts" />
/// <reference path="../stroke.d.ts" />

declare module goog.graphics.ext {

    class StrokeAndFillElement extends StrokeAndFillElement.__Class { }
    module StrokeAndFillElement {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.graphics.ext.Element.__Class {
    
            /**
             * Interface for a graphics element that has a stroke and fill.
             * This is the base interface for ellipse, rectangle and other
             * shape interfaces.
             * You should not construct objects from this constructor. Use a subclass.
             * @param {goog.graphics.ext.Group} group Parent for this element.
             * @param {goog.graphics.StrokeAndFillElement} wrapper The thin wrapper to wrap.
             * @constructor
             * @extends {goog.graphics.ext.Element}
             */
            constructor(group: goog.graphics.ext.Group, wrapper: goog.graphics.StrokeAndFillElement);
    
            /**
             * Sets the fill for this element.
             * @param {goog.graphics.Fill?} fill The fill object.
             */
            setFill(fill: goog.graphics.Fill): void;
    
            /**
             * Sets the stroke for this element.
             * @param {goog.graphics.Stroke?} stroke The stroke object.
             */
            setStroke(stroke: goog.graphics.Stroke): void;
        }
    }
}
