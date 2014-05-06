/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../../closure/goog/positioning/positioning.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../../closure/goog/async/animationdelay.d.ts" />
/// <reference path="../../../../closure/goog/fx/anim/anim.d.ts" />
/// <reference path="../../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../../closure/goog/fx/transitionbase.d.ts" />
/// <reference path="../../../../closure/goog/fx/animation.d.ts" />
/// <reference path="../../../../closure/goog/color/names.d.ts" />
/// <reference path="../../../../closure/goog/color/color.d.ts" />
/// <reference path="../../../../closure/goog/fx/dom.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/autocomplete.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/renderer.d.ts" />
/// <reference path="../../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../../closure/goog/json/json.d.ts" />
/// <reference path="../../../../closure/goog/net/httpstatus.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/net/errorcode.d.ts" />
/// <reference path="../../../../closure/goog/net/xhrlike.d.ts" />
/// <reference path="../../../../closure/goog/net/xmlhttpfactory.d.ts" />
/// <reference path="../../../../closure/goog/net/wrapperxmlhttpfactory.d.ts" />
/// <reference path="../../../../closure/goog/net/xmlhttp.d.ts" />
/// <reference path="../../../../closure/goog/net/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/net/xhrio.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/remotearraymatcher.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/dom/selection.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/inputhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/remote.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/richremotearraymatcher.d.ts" />
/// <reference path="../../../../closure/goog/ui/ac/richinputhandler.d.ts" />

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

