/// <reference path="../../../globals.d.ts" />
/// <reference path="../events/eventtarget.d.ts" />

declare module goog {

    class Timer extends Timer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Timer__Class extends goog.events.EventTarget__Class  { 
    
            /**
             * Class for handling timing events.
             *
             * @param {number=} opt_interval Number of ms between ticks (Default: 1ms).
             * @param {Object=} opt_timerObject  An object that has setTimeout, setInterval,
             *     clearTimeout and clearInterval (eg Window).
             * @constructor
             * @extends {goog.events.EventTarget}
             */
            constructor(opt_interval?: number, opt_timerObject?: Object);
    
            /**
             * Whether this timer is enabled
             * @type {boolean}
             */
            enabled: boolean;
    
            /**
             * Gets the interval of the timer.
             * @return {number} interval Number of ms between ticks.
             */
            getInterval(): number;
    
            /**
             * Sets the interval of the timer.
             * @param {number} interval Number of ms between ticks.
             */
            setInterval(interval: number): void;
    
            /**
             * Dispatches the TICK event. This is its own method so subclasses can override.
             */
            dispatchTick(): void;
    
            /**
             * Starts the timer.
             */
            start(): void;
    
            /**
             * Stops the timer.
             */
            stop(): void;
    } 
    
}

declare module goog.Timer {

    /**
     * An object that implements setTimout, setInterval, clearTimeout and
     * clearInterval. We default to the global object. Changing
     * goog.Timer.defaultTimerObject changes the object for all timer instances
     * which can be useful if your environment has some other implementation of
     * timers you'd like to use.
     * @type {Object}
     */
    var defaultTimerObject: Object;

    /**
     * A variable that controls the timer error correction. If the
     * timer is called before the requested interval times
     * intervalScale, which often happens on mozilla, the timer is
     * rescheduled. See also this.last_
     * @type {number}
     */
    var intervalScale: number;

    /**
     * Constant for the timer's event type
     * @type {string}
     */
    var TICK: string;

    /**
     * Calls the given function once, after the optional pause.
     *
     * The function is always called asynchronously, even if the delay is 0. This
     * is a common trick to schedule a function to run after a batch of browser
     * event processing.
     *
     * @param {function(this:SCOPE)|{handleEvent:function()}|null} listener Function
     *     or object that has a handleEvent method.
     * @param {number=} opt_delay Milliseconds to wait; default is 0.
     * @param {SCOPE=} opt_handler Object in whose scope to call the listener.
     * @return {number} A handle to the timer ID.
     * @template SCOPE
     */
    function callOnce<SCOPE>(listener: { (): any /*missing*/ }|{ handleEvent: { (): any /*missing*/ } }|any /*null*/, opt_delay?: number, opt_handler?: SCOPE): number;

    /**
     * Clears a timeout initiated by callOnce
     * @param {?number} timerId a timer ID.
     */
    function clear(timerId: number): void;
}
