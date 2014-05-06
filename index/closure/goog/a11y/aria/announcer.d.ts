/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />

declare module goog.a11y.aria {

    /**
     * Class that allows messages to be spoken by assistive technologies that the
     * user may have active.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class Announcer extends goog.Disposable {
        /**
         * Class that allows messages to be spoken by assistive technologies that the
         * user may have active.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Announce a message to be read by any assistive technologies the user may
         * have active.
         * @param {string} message The message to announce to screen readers.
         * @param {goog.a11y.aria.LivePriority=} opt_priority The priority of the
         *     message. Defaults to POLITE.
         */
        say(message: string, opt_priority?: goog.a11y.aria.LivePriority): void;
    }
}

