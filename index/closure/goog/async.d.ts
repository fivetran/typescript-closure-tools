// Generated Wed Apr 30 16:37:16 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.async.AnimationDelay' {

    /**
     * Default wait timeout for animations (in milliseconds).  Only used for timed
     * animation, which uses a timer (setTimeout) to schedule animation.
     *
     * @type {number}
     * @const
     */
    var TIMEOUT: number;
}

declare module 'goog.async' {

    /**
     * Fires the provided callbacks as soon as possible after the current JS
     * execution context. setTimeout(…, 0) always takes at least 5ms for legacy
     * reasons.
     * @param {function(this:SCOPE)} callback Callback function to fire as soon as
     *     possible.
     * @param {SCOPE=} opt_context Object in whose scope to call the listener.
     * @template SCOPE
     */
    function nextTick<SCOPE>(callback: () => any /*missing*/, opt_context?: SCOPE): void;

    /**
     * Throw an item without interrupting the current execution context.  For
     * example, if processing a group of items in a loop, sometimes it is useful
     * to report an error while still allowing the rest of the batch to be
     * processed.
     * @param {*} exception
     */
    function throwException(exception: any): void;

    /**
     * Fires the provided callback just before the current callstack unwinds, or as
     * soon as possible after the current JS execution context.
     * @param {function(this:THIS)} callback
     * @param {THIS=} opt_context Object to use as the "this value" when calling
     *     the provided function.
     * @template THIS
     */
    function run<THIS>(callback: () => any /*missing*/, opt_context?: THIS): void;

    /**
     * A delayed callback that pegs to the next animation frame
     * instead of a user configurable timeout. By design, this should have
     * the same interface as goog.async.Delay.
     *
     * Uses requestAnimationFrame and friends when available, but falls
     * back to a timeout of goog.async.AnimationDelay.TIMEOUT.
     *
     * For more on requestAnimationFrame and how you can use it to create smoother
     * animations, see:
     * @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
     *
     * @param {function(number)} listener Function to call when the delay completes.
     *     Will be passed the timestamp when it's called, in unix ms.
     * @param {Window=} opt_window The window object to execute the delay in.
     *     Defaults to the global object.
     * @param {Object=} opt_handler The object scope to invoke the function in.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class AnimationDelay extends goog.Disposable {
        /**
         * A delayed callback that pegs to the next animation frame
         * instead of a user configurable timeout. By design, this should have
         * the same interface as goog.async.Delay.
         *
         * Uses requestAnimationFrame and friends when available, but falls
         * back to a timeout of goog.async.AnimationDelay.TIMEOUT.
         *
         * For more on requestAnimationFrame and how you can use it to create smoother
         * animations, see:
         * @see http://paulirish.com/2011/requestanimationframe-for-smart-animating/
         *
         * @param {function(number)} listener Function to call when the delay completes.
         *     Will be passed the timestamp when it's called, in unix ms.
         * @param {Window=} opt_window The window object to execute the delay in.
         *     Defaults to the global object.
         * @param {Object=} opt_handler The object scope to invoke the function in.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(listener: (_0: number) => any /*missing*/, opt_window?: Window, opt_handler?: Object);
    
        /**
         * Starts the delay timer. The provided listener function will be called
         * before the next animation frame.
         */
        start(): void;
    
        /**
         * Stops the delay timer if it is active. No action is taken if the timer is not
         * in use.
         */
        stop(): void;
    
        /**
         * Fires delay's action even if timer has already gone off or has not been
         * started yet; guarantees action firing. Stops the delay timer.
         */
        fire(): void;
    
        /**
         * Fires delay's action only if timer is currently active. Stops the delay
         * timer.
         */
        fireIfActive(): void;
    
        /**
         * @return {boolean} True if the delay is currently active, false otherwise.
         */
        isActive(): boolean;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A ConditionalDelay object invokes the associated function after a specified
     * interval delay and checks its return value. If the function returns
     * {@code true} the conditional delay is cancelled and {@see #onSuccess}
     * is called. Otherwise this object keeps to invoke the deferred function until
     * either it returns {@code true} or the timeout is exceeded. In the latter case
     * the {@see #onFailure} method will be called.
     *
     * The interval duration and timeout can be specified each time the delay is
     * started. Calling start on an active delay will reset the timer.
     *
     * @param {function():boolean} listener Function to call when the delay
     *     completes. Should return a value that type-converts to {@code true} if
     *     the call succeeded and this delay should be stopped.
     * @param {Object=} opt_handler The object scope to invoke the function in.
     * @constructor
     * @extends {goog.Disposable}
     */
    class ConditionalDelay extends goog.Disposable {
        /**
         * A ConditionalDelay object invokes the associated function after a specified
         * interval delay and checks its return value. If the function returns
         * {@code true} the conditional delay is cancelled and {@see #onSuccess}
         * is called. Otherwise this object keeps to invoke the deferred function until
         * either it returns {@code true} or the timeout is exceeded. In the latter case
         * the {@see #onFailure} method will be called.
         *
         * The interval duration and timeout can be specified each time the delay is
         * started. Calling start on an active delay will reset the timer.
         *
         * @param {function():boolean} listener Function to call when the delay
         *     completes. Should return a value that type-converts to {@code true} if
         *     the call succeeded and this delay should be stopped.
         * @param {Object=} opt_handler The object scope to invoke the function in.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(listener: () => boolean, opt_handler?: Object);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Starts the delay timer. The provided listener function will be called
         * repeatedly after the specified interval until the function returns
         * {@code true} or the timeout is exceeded. Calling start on an active timer
         * will stop the timer first.
         * @param {number=} opt_interval The time interval between the function
         *     invocations (in milliseconds). Default is 0.
         * @param {number=} opt_timeout The timeout interval (in milliseconds). Takes
         *     precedence over the {@code opt_interval}, i.e. if the timeout is less
         *     than the invocation interval, the function will be called when the
         *     timeout is exceeded. A negative value means no timeout. Default is 0.
         */
        start(opt_interval?: number, opt_timeout?: number): void;
    
        /**
         * Stops the delay timer if it is active. No action is taken if the timer is not
         * in use.
         */
        stop(): void;
    
        /**
         * @return {boolean} True if the delay is currently active, false otherwise.
         */
        isActive(): boolean;
    
        /**
         * @return {boolean} True if the listener has been executed and returned
         *     {@code true} since the last call to {@see #start}.
         */
        isDone(): boolean;
    
        /**
         * Called when the listener has been successfully executed and returned
         * {@code true}. The {@see #isDone} method should return {@code true} by now.
         * Designed for inheritance, should be overridden by subclasses or on the
         * instances if they care.
         */
        onSuccess(): void;
    
        /**
         * Called when this delayed call is cancelled because the timeout has been
         * exceeded, and the listener has never returned {@code true}.
         * Designed for inheritance, should be overridden by subclasses or on the
         * instances if they care.
         */
        onFailure(): void;
    }

    /**
     * A Delay object invokes the associated function after a specified delay. The
     * interval duration can be specified once in the constructor, or can be defined
     * each time the delay is started. Calling start on an active delay will reset
     * the timer.
     *
     * @param {Function} listener Function to call when the delay completes.
     * @param {number=} opt_interval The default length of the invocation delay (in
     *     milliseconds).
     * @param {Object=} opt_handler The object scope to invoke the function in.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class Delay extends goog.Disposable {
        /**
         * A Delay object invokes the associated function after a specified delay. The
         * interval duration can be specified once in the constructor, or can be defined
         * each time the delay is started. Calling start on an active delay will reset
         * the timer.
         *
         * @param {Function} listener Function to call when the delay completes.
         * @param {number=} opt_interval The default length of the invocation delay (in
         *     milliseconds).
         * @param {Object=} opt_handler The object scope to invoke the function in.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(listener: Function, opt_interval?: number, opt_handler?: Object);
    
        /**
         * Disposes of the object, cancelling the timeout if it is still outstanding and
         * removing all object references.
         * @override
         * @protected
         */
        disposeInternal(): void;
    
        /**
         * Starts the delay timer. The provided listener function will be called after
         * the specified interval. Calling start on an active timer will reset the
         * delay interval.
         * @param {number=} opt_interval If specified, overrides the object's default
         *     interval with this one (in milliseconds).
         */
        start(opt_interval?: number): void;
    
        /**
         * Stops the delay timer if it is active. No action is taken if the timer is not
         * in use.
         */
        stop(): void;
    
        /**
         * Fires delay's action even if timer has already gone off or has not been
         * started yet; guarantees action firing. Stops the delay timer.
         */
        fire(): void;
    
        /**
         * Fires delay's action only if timer is currently active. Stops the delay
         * timer.
         */
        fireIfActive(): void;
    
        /**
         * @return {boolean} True if the delay is currently active, false otherwise.
         */
        isActive(): boolean;
    }

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
    class Throttle extends goog.Disposable {
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
    
        /** @override */
        disposeInternal(): void;
    }
}

declare module 'goog.async.run' {

    /** @private {boolean} */
    var workQueueScheduled_: any /*missing*/;

    /** @private {!Array.<!goog.async.run.WorkItem_>} */
    var workQueue_: any /*missing*/;

    /**
     * Run any pending goog.async.run work items. This function is not intended
     * for general use, but for use by entry point handlers to run items ahead of
     * goog.async.nextTick.
     */
    function processWorkQueue(): void;
}

declare module 'goog' {

    /**
     * A deprecated alias.
     * @deprecated Use goog.async.Delay instead.
     * @constructor
     * @final
     */
    class Delay {
        /**
         * A deprecated alias.
         * @deprecated Use goog.async.Delay instead.
         * @constructor
         * @final
         */
        constructor();
    }

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

