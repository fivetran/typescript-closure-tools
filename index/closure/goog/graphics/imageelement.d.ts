// Generated Fri May  2 15:02:16 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/graphics/affinetransform.d.ts" />
/// <reference path="../../goog/graphics/element.d.ts" />

declare module goog.graphics {

    /**
     * Interface for a graphics image element.
     * You should not construct objects from this constructor. Instead,
     * you should use {@code goog.graphics.Graphics.drawImage} and it
     * will return an implementation of this interface for you.
     *
     * @param {Element} element The DOM element to wrap.
     * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
     *     this element.
     * @constructor
     * @extends {goog.graphics.Element}
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    class ImageElement extends goog.graphics.Element {
        /**
         * Interface for a graphics image element.
         * You should not construct objects from this constructor. Instead,
         * you should use {@code goog.graphics.Graphics.drawImage} and it
         * will return an implementation of this interface for you.
         *
         * @param {Element} element The DOM element to wrap.
         * @param {goog.graphics.AbstractGraphics} graphics The graphics creating
         *     this element.
         * @constructor
         * @extends {goog.graphics.Element}
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         */
        constructor(element: Element, graphics: goog.graphics.AbstractGraphics);
    
        /**
         * Update the position of the image.
         *
         * @param {number} x X coordinate (left).
         * @param {number} y Y coordinate (top).
         */
        setPosition(x: number, y: number): void;
    
        /**
         * Update the size of the image.
         *
         * @param {number} width Width of image.
         * @param {number} height Height of image.
         */
        setSize(width: number, height: number): void;
    
        /**
         * Update the source of the image.
         * @param {string} src Source of the image.
         */
        setSource(src: string): void;
    }
}

