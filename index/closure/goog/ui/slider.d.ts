// Generated Sat May  3 12:15:43 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
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
/// <reference path="../../goog/style/bidi.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/fx/dragger.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/async/delay.d.ts" />
/// <reference path="../../goog/async/animationdelay.d.ts" />
/// <reference path="../../goog/fx/anim/anim.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/fx/transitionbase.d.ts" />
/// <reference path="../../goog/fx/animation.d.ts" />
/// <reference path="../../goog/color/names.d.ts" />
/// <reference path="../../goog/color/color.d.ts" />
/// <reference path="../../goog/fx/dom.d.ts" />
/// <reference path="../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../goog/ui/component.d.ts" />
/// <reference path="../../goog/events/keyhandler.d.ts" />
/// <reference path="../../goog/fx/animationqueue.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/events/mousewheelhandler.d.ts" />
/// <reference path="../../goog/ui/rangemodel.d.ts" />
/// <reference path="../../goog/ui/sliderbase.d.ts" />

declare module goog.ui {

    /**
     * This creates a slider object.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @param {(function(number):string)=} opt_labelFn An optional function mapping
     *     slider values to a description of the value.
     * @constructor
     * @extends {goog.ui.SliderBase}
     */
    class Slider extends goog.ui.SliderBase {
        /**
         * This creates a slider object.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @param {(function(number):string)=} opt_labelFn An optional function mapping
         *     slider values to a description of the value.
         * @constructor
         * @extends {goog.ui.SliderBase}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper, opt_labelFn?: any /*(_0: number) => string*/);
    }
}

declare module goog.ui.Slider {

    /**
     * The prefix we use for the CSS class names for the slider and its elements.
     * @type {string}
     */
    var CSS_CLASS_PREFIX: string;

    /**
     * CSS class name for the single thumb element.
     * @type {string}
     */
    var THUMB_CSS_CLASS: string;
}

