// Generated Thu May  1 16:44:28 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
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
/// <reference path="../../goog/graphics/strokeandfillelement.d.ts" />
/// <reference path="../../goog/graphics/rectelement.d.ts" />
/// <reference path="../../goog/graphics/pathelement.d.ts" />
/// <reference path="../../goog/graphics/groupelement.d.ts" />
/// <reference path="../../goog/graphics/textelement.d.ts" />
/// <reference path="../../goog/graphics/ellipseelement.d.ts" />
/// <reference path="../../goog/graphics/imageelement.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/graphics/svgelement.d.ts" />
/// <reference path="../../goog/graphics/path.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/graphics/fill.d.ts" />
/// <reference path="../../goog/graphics/solidfill.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/graphics/abstractgraphics.d.ts" />
/// <reference path="../../goog/graphics/lineargradient.d.ts" />
/// <reference path="../../goog/graphics/stroke.d.ts" />
/// <reference path="../../goog/graphics/svggraphics.d.ts" />
/// <reference path="../../goog/graphics/vmlelement.d.ts" />
/// <reference path="../../goog/graphics/vmlgraphics.d.ts" />
/// <reference path="../../goog/graphics/canvaselement.d.ts" />
/// <reference path="../../goog/graphics/canvasgraphics.d.ts" />

declare module goog.graphics {

    /**
     * Returns an instance of goog.graphics.AbstractGraphics that knows how to draw
     * for the current platform (A factory for the proper Graphics implementation)
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The optional coordinate width - if
     *     omitted or null, defaults to same as width.
     * @param {?number=} opt_coordHeight The optional coordinate height - if
     *     omitted or null, defaults to same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {!goog.graphics.AbstractGraphics} The created instance.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function createGraphics(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper): goog.graphics.AbstractGraphics;

    /**
     * Returns an instance of goog.graphics.AbstractGraphics that knows how to draw
     * for the current platform (A factory for the proper Graphics implementation)
     * @param {string|number} width The width in pixels.  Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {string|number} height The height in pixels.   Strings
     *     expressing percentages of parent with (e.g. '80%') are also accepted.
     * @param {?number=} opt_coordWidth The optional coordinate width, defaults to
     *     same as width.
     * @param {?number=} opt_coordHeight The optional coordinate height, defaults to
     *     same as height.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {goog.graphics.AbstractGraphics} The created instance.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function createSimpleGraphics(width: any /*string|number*/, height: any /*string|number*/, opt_coordWidth?: number, opt_coordHeight?: number, opt_domHelper?: goog.dom.DomHelper): goog.graphics.AbstractGraphics;

    /**
     * Static function to check if the current browser has Graphics support.
     * @return {boolean} True if the current browser has Graphics support.
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     */
    function isBrowserSupported(): boolean;
}

