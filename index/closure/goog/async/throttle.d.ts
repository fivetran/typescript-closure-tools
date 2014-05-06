/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
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

declare module goog.async {

    /**
     * Throttle will perform an action that is passed in no more than once
     * per interval (specified in milliseconds). If it gets multiple signals
     * to perform the action while it is waiting, it will only perform the action
     * once at the end of the interval.
     * @param {function(this: T)} listener Function to callback when the action is
     *     triggered.
     * @param {number} interval Interval over which to throttle. The listener can
     *     only be called once per interval.
     * @param {T=} opt_handler Object in whose scope to call the listener.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     * @template T
     */
    class Throttle<T> extends goog.Disposable {
        /**
         * Throttle will perform an action that is passed in no more than once
         * per interval (specified in milliseconds). If it gets multiple signals
         * to perform the action while it is waiting, it will only perform the action
         * once at the end of the interval.
         * @param {function(this: T)} listener Function to callback when the action is
         *     triggered.
         * @param {number} interval Interval over which to throttle. The listener can
         *     only be called once per interval.
         * @param {T=} opt_handler Object in whose scope to call the listener.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         * @template T
         */
        constructor(listener: () => any /*missing*/, interval: number, opt_handler?: T);
    
        /**
         * Notifies the throttle that the action has happened. It will throttle the call
         * so that the callback is not called too often according to the interval
         * parameter passed to the constructor.
         */
        fire(): void;
    
        /**
         * Cancels any pending action callback. The throttle can be restarted by
         * calling {@link #fire}.
         */
        stop(): void;
    
        /**
         * Pauses the throttle.  All pending and future action callbacks will be
         * delayed until the throttle is resumed.  Pauses can be nested.
         */
        pause(): void;
    
        /**
         * Resumes the throttle.  If doing so drops the pausing count to zero, pending
         * action callbacks will be executed as soon as possible, but still no sooner
         * than an interval's delay after the previous call.  Future action callbacks
         * will be executed as normal.
         */
        resume(): void;
    }
}

declare module goog {

    /**
     * A deprecated alias.
     * @deprecated Use goog.async.Throttle instead.
     * @constructor
     * @final
     */
    class Throttle {
        /**
         * A deprecated alias.
         * @deprecated Use goog.async.Throttle instead.
         * @constructor
         * @final
         */
        constructor();
    }
}

