/// <reference path="../../../../globals.d.ts" />
/// <reference path="../dom.d.ts" />

declare module goog.dom.animationFrame {

    class State extends State__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class State__Class  { 
    
            /**
             * A type to represent state. Users may add properties as desired.
             * @constructor
             * @final
             */
            constructor();
    } 
    

    /**
     * @typedef {{
     *   id: number,
     *   fn: !Function,
     *   context: (!Object|undefined)
     * }}
     * @private
     */
    interface Task_ {
        id: number;
        fn: Function;
        context: Object|any /*undefined*/
    }

    /**
     * @typedef {{
     *   measureTask: goog.dom.animationFrame.Task_,
     *   mutateTask: goog.dom.animationFrame.Task_,
     *   state: (!Object|undefined),
     *   args: (!Array|undefined),
     *   isScheduled: boolean
     * }}
     * @private
     */
    interface TaskSet_ {
        measureTask: goog.dom.animationFrame.Task_;
        mutateTask: goog.dom.animationFrame.Task_;
        state: Object|any /*undefined*/;
        args: any[]|any /*undefined*/;
        isScheduled: boolean
    }

    /**
     * @typedef {{
     *   measure: (!Function|undefined),
     *   mutate: (!Function|undefined)
     * }}
     */
    interface Spec {
        measure: Function|any /*undefined*/;
        mutate: Function|any /*undefined*/
    }

    /**
     * Returns a function that schedules the two passed-in functions to be run upon
     * the next animation frame. Calling the function again during the same
     * animation frame does nothing.
     *
     * The function under the "measure" key will run first and together with all
     * other functions scheduled under this key and the function under "mutate" will
     * run after that.
     *
     * @param {!{
     *   measure: (function(this:THIS, !goog.dom.animationFrame.State)|undefined),
     *   mutate: (function(this:THIS, !goog.dom.animationFrame.State)|undefined)
     * }} spec
     * @param {THIS=} opt_context Context in which to run the function.
     * @return {function(...[?])}
     * @template THIS
     */
    function createTask<THIS>(spec: { measure: { (_0: goog.dom.animationFrame.State): any /*missing*/ }|any /*undefined*/; mutate: { (_0: goog.dom.animationFrame.State): any /*missing*/ }|any /*undefined*/ }, opt_context?: THIS): { (_0: any[][]): any /*missing*/ };
}
