// Generated Wed Apr 30 22:44:36 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
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
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />

declare module goog.demos {

    /**
     * A simple box that changes colour when clicked. This class demonstrates the
     * goog.ui.Component API, and is keyboard accessible, as per
     * http://wiki/Main/ClosureKeyboardAccessible
     *
     * @param {string=} opt_label A label to display. Defaults to "Click Me" if none
     *     provided.
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper to use.
     *
     * @extends {goog.ui.Component}
     * @constructor
     * @final
     */
    class SampleComponent extends goog.ui.Component {
        /**
         * A simple box that changes colour when clicked. This class demonstrates the
         * goog.ui.Component API, and is keyboard accessible, as per
         * http://wiki/Main/ClosureKeyboardAccessible
         *
         * @param {string=} opt_label A label to display. Defaults to "Click Me" if none
         *     provided.
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper to use.
         *
         * @extends {goog.ui.Component}
         * @constructor
         * @final
         */
        constructor(opt_label?: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Gets the current label text.
         *
         * @return {string} The current text set into the label, or empty string if
         *     none set.
         */
        getLabelText(): string;
    
        /**
         * Sets the current label text. Has no effect if component is not rendered.
         *
         * @param {string} text The text to set as the label.
         */
        setLabelText(text: string): void;
    }
}

