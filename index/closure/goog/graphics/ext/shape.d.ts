/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/graphics/ext/coordinates.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/graphics/ext/element.d.ts" />
/// <reference path="../../../../closure/goog/graphics/ext/strokeandfillelement.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/graphics/path.d.ts" />
/// <reference path="../../../../closure/goog/graphics/affinetransform.d.ts" />
/// <reference path="../../../../closure/goog/graphics/ext/path.d.ts" />

declare module goog.graphics.ext {

    /**
     * Wrapper for a graphics shape element.
     * @param {goog.graphics.ext.Group} group Parent for this element.
     * @param {!goog.graphics.ext.Path} path  The path to draw.
     * @param {boolean=} opt_autoSize Optional flag to specify the path should
     *     automatically resize to fit the element.  Defaults to false.
     * @constructor
     * @extends {goog.graphics.ext.StrokeAndFillElement}
     * @final
     */
    class Shape extends goog.graphics.ext.StrokeAndFillElement {
        /**
         * Wrapper for a graphics shape element.
         * @param {goog.graphics.ext.Group} group Parent for this element.
         * @param {!goog.graphics.ext.Path} path  The path to draw.
         * @param {boolean=} opt_autoSize Optional flag to specify the path should
         *     automatically resize to fit the element.  Defaults to false.
         * @constructor
         * @extends {goog.graphics.ext.StrokeAndFillElement}
         * @final
         */
        constructor(group: goog.graphics.ext.Group, path: goog.graphics.ext.Path, opt_autoSize?: boolean);
    
        /**
         * Get the path drawn by this shape.
         * @return {goog.graphics.Path?} The path drawn by this shape.
         */
        getPath(): goog.graphics.Path;
    
        /**
         * Set the path to draw.
         * @param {goog.graphics.ext.Path} path The path to draw.
         */
        setPath(path: goog.graphics.ext.Path): void;
    }
}

