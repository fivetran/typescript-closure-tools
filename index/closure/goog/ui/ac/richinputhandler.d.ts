// Generated Fri May  2 15:00:54 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/dom/selection.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/ac/inputhandler.d.ts" />

declare module goog.ui.ac {

    /**
     * Class for managing the interaction between an autocomplete object and a
     * text-input or textarea.
     * @param {?string=} opt_separators Seperators to split multiple entries.
     * @param {?string=} opt_literals Characters used to delimit text literals.
     * @param {?boolean=} opt_multi Whether to allow multiple entries
     *     (Default: true).
     * @param {?number=} opt_throttleTime Number of milliseconds to throttle
     *     keyevents with (Default: 150).
     * @constructor
     * @extends {goog.ui.ac.InputHandler}
     */
    class RichInputHandler extends goog.ui.ac.InputHandler {
        /**
         * Class for managing the interaction between an autocomplete object and a
         * text-input or textarea.
         * @param {?string=} opt_separators Seperators to split multiple entries.
         * @param {?string=} opt_literals Characters used to delimit text literals.
         * @param {?boolean=} opt_multi Whether to allow multiple entries
         *     (Default: true).
         * @param {?number=} opt_throttleTime Number of milliseconds to throttle
         *     keyevents with (Default: 150).
         * @constructor
         * @extends {goog.ui.ac.InputHandler}
         */
        constructor(opt_separators?: string, opt_literals?: string, opt_multi?: boolean, opt_throttleTime?: number);
    }
}

