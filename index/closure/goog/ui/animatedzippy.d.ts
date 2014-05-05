// Generated Sun May  4 18:15:18 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
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
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/ui/zippy.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/async/delay.d.ts" />
/// <reference path="../../goog/async/animationdelay.d.ts" />
/// <reference path="../../goog/fx/anim/anim.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/fx/transitionbase.d.ts" />
/// <reference path="../../goog/fx/animation.d.ts" />
/// <reference path="../../goog/fx/easing.d.ts" />

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

