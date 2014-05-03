// Generated Sat May  3 12:19:46 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../../goog/testing/asserts.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../goog/testing/dom.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />

declare module goog.testing.ui {

    /**
     * A driver for testing renderers.
     *
     * @param {goog.ui.ControlRenderer} renderer A renderer to test.
     * @param {Element} renderParent The parent of the element where controls will
     *     be rendered.
     * @param {Element} decorateParent The parent of the element where controls will
     *     be decorated.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class RendererHarness extends goog.Disposable {
        /**
         * A driver for testing renderers.
         *
         * @param {goog.ui.ControlRenderer} renderer A renderer to test.
         * @param {Element} renderParent The parent of the element where controls will
         *     be rendered.
         * @param {Element} decorateParent The parent of the element where controls will
         *     be decorated.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(renderer: goog.ui.ControlRenderer, renderParent: Element, decorateParent: Element);
    
        /**
         * Attach a control and render its DOM.
         * @param {goog.ui.Control} control A control.
         * @return {Element} The element created.
         */
        attachControlAndRender(control: goog.ui.Control): Element;
    
        /**
         * Attach a control and decorate the element given in the constructor.
         * @param {goog.ui.Control} control A control.
         * @return {Element} The element created.
         */
        attachControlAndDecorate(control: goog.ui.Control): Element;
    
        /**
         * Assert that the rendered element and the decorated element match.
         */
        assertDomMatches(): void;
    }
}

