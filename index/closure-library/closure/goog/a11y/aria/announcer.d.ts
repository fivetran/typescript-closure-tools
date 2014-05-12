/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../disposable/disposable.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="./attributes.d.ts" />

declare module goog.a11y.aria {

    class Announcer extends Announcer.__Class { }
    module Announcer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
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
}
