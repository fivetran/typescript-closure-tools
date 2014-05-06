/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/zippy.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../closure/goog/async/animationdelay.d.ts" />
/// <reference path="../../../closure/goog/fx/anim/anim.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/fx/transitionbase.d.ts" />
/// <reference path="../../../closure/goog/fx/animation.d.ts" />
/// <reference path="../../../closure/goog/fx/easing.d.ts" />

declare module goog.ui {

    /**
     * Zippy widget. Expandable/collapsible container, clicking the header toggles
     * the visibility of the content.
     *
     * @param {Element|string|null} header Header element, either element
     *     reference, string id or null if no header exists.
     * @param {Element|string} content Content element, either element reference or
     *     string id.
     * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
     *     false.
     * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
     * @constructor
     * @extends {goog.ui.Zippy}
     */
    class AnimatedZippy extends goog.ui.Zippy {
        /**
         * Zippy widget. Expandable/collapsible container, clicking the header toggles
         * the visibility of the content.
         *
         * @param {Element|string|null} header Header element, either element
         *     reference, string id or null if no header exists.
         * @param {Element|string} content Content element, either element reference or
         *     string id.
         * @param {boolean=} opt_expanded Initial expanded/visibility state. Defaults to
         *     false.
         * @param {goog.dom.DomHelper=} opt_domHelper An optional DOM helper.
         * @constructor
         * @extends {goog.ui.Zippy}
         */
        constructor(header: any /*Element|string|any (null)*/, content: any /*Element|string*/, opt_expanded?: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Duration of expand/collapse animation, in milliseconds.
         * @type {number}
         */
        animationDuration: number;
    
        /**
         * Acceleration function for expand/collapse animation.
         * @type {!Function}
         */
        animationAcceleration: Function;
    
        /**
         * @return {boolean} Whether the zippy is in the process of being expanded or
         *     collapsed.
         */
        isBusy(): boolean;
    }
}

