/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/events/inputhandler.d.ts" />
/// <reference path="../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />

declare module goog.ui {

    /**
     * Default implementation of BidiInput.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper  Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class BidiInput extends goog.ui._Component {
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

