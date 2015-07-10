/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />

declare module goog.async {

    class Throttle<T> extends Throttle__Class<T> { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Throttle__Class<T> extends goog.Disposable__Class  { 
    
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
            constructor(listener: { (): any /*missing*/ }, interval: number, opt_handler?: T);
    
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

    class Throttle extends Throttle__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Throttle__Class  { 
    
            /**
             * A deprecated alias.
             * @deprecated Use goog.async.Throttle instead.
             * @constructor
             * @final
             */
            constructor();
    } 
    
}
