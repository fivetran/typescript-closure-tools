/// <reference path="../../../globals.d.ts" />
/// <reference path="./debug.d.ts" />

declare module goog.debug {

    class Trace_ extends Trace_.__Class { }
    module Trace_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Class used for singleton goog.debug.Trace.  Used for timing slow points in
             * the code. Based on the java Tracer class but optimized for javascript.
             * See com.google.common.tracing.Tracer.
             * @constructor
             * @private
             */
            constructor();
    
            /**
             * Maximum size of the trace before we discard events
             * @type {number}
             */
            MAX_TRACE_SIZE: number;
    
            /**
             * Add the ability to explicitly set the start time. This is useful for example
             * for measuring initial load time where you can set a variable as soon as the
             * main page of the app is loaded and then later call this function when the
             * Tracer code has been loaded.
             * @param {number} startTime The start time to set.
             */
            setStartTime(startTime: number): void;
    
            /**
             * Initializes and resets the current trace
             * @param {number} defaultThreshold The default threshold below which the
             * tracer output will be supressed. Can be overridden on a per-Tracer basis.
             */
            initCurrentTrace(defaultThreshold: number): void;
    
            /**
             * Clears the current trace
             */
            clearCurrentTrace(): void;
    
            /**
             * Resets the trace.
             * @param {number} defaultThreshold The default threshold below which the
             * tracer output will be supressed. Can be overridden on a per-Tracer basis.
             */
            reset(defaultThreshold: number): void;
    
            /**
             * Starts a tracer
             * @param {string} comment A comment used to identify the tracer. Does not
             *     need to be unique.
             * @param {string=} opt_type Type used to identify the tracer. If a Trace is
             *     given a type (the first argument to the constructor) and multiple Traces
             *     are done on that type then a "TOTAL line will be produced showing the
             *     total number of traces and the sum of the time
             *     ("TOTAL Database 2 (37 ms)" in our example). These traces should be
             *     mutually exclusive or else the sum won't make sense (the time will
             *     be double counted if the second starts before the first ends).
             * @return {number} The identifier for the tracer that should be passed to the
             *     the stopTracer method.
             */
            startTracer(comment: string, opt_type?: string): number;
    
            /**
             * Stops a tracer
             * @param {number|undefined|null} id The id of the tracer that is ending.
             * @param {number=} opt_silenceThreshold Threshold below which the tracer is
             *    silenced.
             * @return {?number} The elapsed time for the tracer or null if the tracer
             *    identitifer was not recognized.
             */
            stopTracer(id: number, opt_silenceThreshold?: number): number;
            /**
             * Stops a tracer
             * @param {number|undefined|null} id The id of the tracer that is ending.
             * @param {number=} opt_silenceThreshold Threshold below which the tracer is
             *    silenced.
             * @return {?number} The elapsed time for the tracer or null if the tracer
             *    identitifer was not recognized.
             */
            stopTracer(id: any /*undefined*/, opt_silenceThreshold?: number): number;
    
            /**
             * Sets the ActiveX object that can be used to get GC tracing in IE6.
             * @param {Object} gcTracer GCTracer ActiveX object.
             */
            setGcTracer(gcTracer: Object): void;
    
            /**
             * Returns the total number of allocations since the GC stats were reset. Only
             * works in IE.
             * @return {number} The number of allocaitons or -1 if not supported.
             */
            getTotalVarAlloc(): number;
    
            /**
             * Adds a comment to the trace. Makes it possible to see when a specific event
             * happened in relation to the traces.
             * @param {string} comment A comment that is inserted into the trace.
             * @param {?string=} opt_type Type used to identify the tracer. If a comment is
             *     given a type and multiple comments are done on that type then a "TOTAL
             *     line will be produced showing the total number of comments of that type.
             * @param {?number=} opt_timeStamp The timestamp to insert the comment. If not
             *    specified, the current time wil be used.
             */
            addComment(comment: string, opt_type?: string, opt_timeStamp?: number): void;
    
            /**
             * Returns a formatted string for the current trace
             * @return {string} A formatted string that shows the timings of the current
             *     trace.
             */
            getFormattedTrace(): string;
        }
    }

    /**
     * Singleton trace object
     * @type {goog.debug.Trace_}
     */
    var Trace: goog.debug.Trace_;
}

declare module goog.debug.Trace_ {

    class Stat_ extends Stat_.__Class { }
    module Stat_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Class to keep track of a stat of a single tracer type. Stores the count
             * and cumulative time.
             * @constructor
             * @private
             */
            constructor();
    
            /**
             * @type {string|null|undefined}
             */
            type: any /*string|any (null)|any (undefined)*/;
        }
    }

    class Event_ extends Event_.__Class { }
    module Event_ {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Private class used to encapsulate a single event, either the start or stop
             * of a tracer.
             * @constructor
             * @private
             */
            constructor();
    
            /**
             * @type {string|null|undefined}
             */
            type: any /*string|any (null)|any (undefined)*/;
    
            /**
             * Returns a formatted string for the event.
             * @param {number} startTime The start time of the trace to generate relative
             * times.
             * @param {number} prevTime The completion time of the previous event or -1.
             * @param {string} indent Extra indent for the message
             *     if there was no previous event.
             * @return {string} The formatted tracer string.
             */
            toTraceString(startTime: number, prevTime: number, indent: string): string;
        }
    }

    /**
     * Event type supported by tracer
     * @enum {number}
     */
    enum EventType { START, STOP, COMMENT } 

    /**
     * Returns the current time. Done through a wrapper function so it can be
     * overridden by application code. Gmail has an ActiveX extension that provides
     * higher precision timing info.
     * @return {number} The current time in milliseconds.
     */
    function now(): number;
}
