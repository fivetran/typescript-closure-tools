// Generated Thu May  1 16:43:13 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/ac/autocomplete.d.ts" />
/// <reference path="../../../goog/ui/ac/arraymatcher.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/positioning/positioning.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/async/delay.d.ts" />
/// <reference path="../../../goog/async/animationdelay.d.ts" />
/// <reference path="../../../goog/fx/anim/anim.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/fx/transitionbase.d.ts" />
/// <reference path="../../../goog/fx/animation.d.ts" />
/// <reference path="../../../goog/color/names.d.ts" />
/// <reference path="../../../goog/color/color.d.ts" />
/// <reference path="../../../goog/fx/dom.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/ui/ac/renderer.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/dom/selection.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/ac/inputhandler.d.ts" />

declare module goog.ui.ac {

    /**
     * Factory function for building a basic autocomplete widget that autocompletes
     * an inputbox or text area from a data array.
     * @param {Array} data Data array.
     * @param {Element} input Input element or text area.
     * @param {boolean=} opt_multi Whether to allow multiple entries separated with
     *     semi-colons or commas.
     * @param {boolean=} opt_useSimilar use similar matches. e.g. "gost" => "ghost".
     * @return {!goog.ui.ac.AutoComplete} A new autocomplete object.
     */
    function createSimpleAutoComplete(data: any[], input: Element, opt_multi?: boolean, opt_useSimilar?: boolean): goog.ui.ac.AutoComplete;
}

