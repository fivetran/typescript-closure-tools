// Generated Thu May  1 16:43:14 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/positioning/positioning.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
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
/// <reference path="../../../goog/ui/ac/autocomplete.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/ui/ac/renderer.d.ts" />
/// <reference path="../../../goog/uri/utils.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/uri/uri.d.ts" />
/// <reference path="../../../goog/json/json.d.ts" />
/// <reference path="../../../goog/net/httpstatus.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/net/errorcode.d.ts" />
/// <reference path="../../../goog/net/xhrlike.d.ts" />
/// <reference path="../../../goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../goog/net/xmlhttp.d.ts" />
/// <reference path="../../../goog/net/eventtype.d.ts" />
/// <reference path="../../../goog/net/xhrio.d.ts" />
/// <reference path="../../../goog/ui/ac/remotearraymatcher.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/dom/selection.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/ac/inputhandler.d.ts" />
/// <reference path="../../../goog/ui/ac/remote.d.ts" />
/// <reference path="../../../goog/ui/ac/richremotearraymatcher.d.ts" />
/// <reference path="../../../goog/ui/ac/richinputhandler.d.ts" />

declare module goog.ui.ac {

    /**
     * Factory class to create a rich autocomplete widget that autocompletes an
     * inputbox or textarea from data provided via ajax.  The server returns a
     * complex data structure that is used with client-side javascript functions to
     * render the results.
     * @param {string} url The Uri which generates the auto complete matches.
     * @param {Element} input Input element or text area.
     * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
     *     to false.
     * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
     *     "gost" => "ghost".
     * @constructor
     * @extends {goog.ui.ac.Remote}
     */
    class RichRemote extends goog.ui.ac.Remote {
        /**
         * Factory class to create a rich autocomplete widget that autocompletes an
         * inputbox or textarea from data provided via ajax.  The server returns a
         * complex data structure that is used with client-side javascript functions to
         * render the results.
         * @param {string} url The Uri which generates the auto complete matches.
         * @param {Element} input Input element or text area.
         * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
         *     to false.
         * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
         *     "gost" => "ghost".
         * @constructor
         * @extends {goog.ui.ac.Remote}
         */
        constructor(url: string, input: Element, opt_multi?: boolean, opt_useSimilar?: boolean);
    
        /**
         * Set the filter that is called before the array matches are returned.
         * @param {Function} rowFilter A function(rows) that returns an array of rows as
         *     a subset of the rows input array.
         */
        setRowFilter(rowFilter: Function): void;
    }
}

