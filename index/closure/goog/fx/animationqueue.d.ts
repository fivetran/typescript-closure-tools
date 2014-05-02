// Generated Fri May  2 14:56:18 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/fx/transition.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/fx/transitionbase.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />

declare module goog.fx {

    /**
     * Constructor for AnimationQueue object.
     *
     * @constructor
     * @extends {goog.fx.TransitionBase}
     */
    class AnimationQueue extends goog.fx.TransitionBase {
        /**
         * Constructor for AnimationQueue object.
         *
         * @constructor
         * @extends {goog.fx.TransitionBase}
         */
        constructor();
    
        /**
         * Pushes an Animation to the end of the queue.
         * @param {goog.fx.TransitionBase} animation The animation to add to the queue.
         */
        add(animation: goog.fx.TransitionBase): void;
    
        /**
         * Removes an Animation from the queue.
         * @param {goog.fx.Animation} animation The animation to remove.
         */
        remove(animation: goog.fx.Animation): void;
    
        /**
         * Handles the event that an animation has finished.
         * @param {goog.events.Event} e The finishing event.
         * @protected
         */
        onAnimationFinish(e: goog.events.Event): void;
    }

    /**
     * Constructor for AnimationParallelQueue object.
     * @constructor
     * @extends {goog.fx.AnimationQueue}
     */
    class AnimationParallelQueue extends goog.fx.AnimationQueue {
        /**
         * Constructor for AnimationParallelQueue object.
         * @constructor
         * @extends {goog.fx.AnimationQueue}
         */
        constructor();
    }

    /**
     * Constructor for AnimationSerialQueue object.
     * @constructor
     * @extends {goog.fx.AnimationQueue}
     */
    class AnimationSerialQueue extends goog.fx.AnimationQueue {
        /**
         * Constructor for AnimationSerialQueue object.
         * @constructor
         * @extends {goog.fx.AnimationQueue}
         */
        constructor();
    }
}

