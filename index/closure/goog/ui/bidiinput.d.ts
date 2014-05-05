// Generated Sun May  4 18:16:52 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
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
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/events/inputhandler.d.ts" />
/// <reference path="../../goog/i18n/bidi.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />

declare module goog.ui {

    /**
     * Default implementation of BidiInput.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper  Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class BidiInput extends goog.ui.Component {
        /**
         * Default implementation of BidiInput.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper  Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Returns the direction of the input element.
         * @return {?string} Return 'rtl' for right-to-left text,
         *     'ltr' for left-to-right text, or null if the value itself is not
         *     enough to determine directionality (e.g. an empty value), and the
         *     direction is inherited from a parent element (typically the body
         *     element).
         */
        getDirection(): string;
    
        /**
         * Sets the value of the underlying input field, and sets the direction
         * according to the given value.
         * @param {string} value  The Value to set in the underlying input field.
         */
        setValue(value: string): void;
    
        /**
         * Returns the value of the underlying input field.
         * @return {string} Value of the underlying input field.
         */
        getValue(): string;
    }
}

