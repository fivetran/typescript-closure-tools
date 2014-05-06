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
/// <reference path="../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/async/animationdelay.d.ts" />
/// <reference path="../../../closure/goog/fx/anim/anim.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/fx/transitionbase.d.ts" />
/// <reference path="../../../closure/goog/fx/animation.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />

declare module goog.fx {

    /**
     * This animation class is used to animate a CSS sprite (moving a background
     * image).  This moves through a series of images in a single image sprite and
     * loops the animation when done.  You should set up the
     * {@code background-image} and size in a CSS rule for the relevant element.
     *
     * @param {Element} element The HTML element to animate the background for.
     * @param {goog.math.Size} size The size of one image in the image sprite.
     * @param {goog.math.Box} box The box describing the layout of the sprites to
     *     use in the large image.  The sprites can be position horizontally or
     *     vertically and using a box here allows the implementation to know which
     *     way to go.
     * @param {number} time The duration in milliseconds for one iteration of the
     *     animation.  For example, if the sprite contains 4 images and the duration
     *     is set to 400ms then each sprite will be displayed for 100ms.
     * @param {function(number) : number=} opt_acc Acceleration function,
     *    returns 0-1 for inputs 0-1.  This can be used to make certain frames be
     *    shown for a longer period of time.
     *
     * @constructor
     * @extends {goog.fx.Animation}
     * @final
     */
    class CssSpriteAnimation extends goog.fx.Animation {
        /**
         * This animation class is used to animate a CSS sprite (moving a background
         * image).  This moves through a series of images in a single image sprite and
         * loops the animation when done.  You should set up the
         * {@code background-image} and size in a CSS rule for the relevant element.
         *
         * @param {Element} element The HTML element to animate the background for.
         * @param {goog.math.Size} size The size of one image in the image sprite.
         * @param {goog.math.Box} box The box describing the layout of the sprites to
         *     use in the large image.  The sprites can be position horizontally or
         *     vertically and using a box here allows the implementation to know which
         *     way to go.
         * @param {number} time The duration in milliseconds for one iteration of the
         *     animation.  For example, if the sprite contains 4 images and the duration
         *     is set to 400ms then each sprite will be displayed for 100ms.
         * @param {function(number) : number=} opt_acc Acceleration function,
         *    returns 0-1 for inputs 0-1.  This can be used to make certain frames be
         *    shown for a longer period of time.
         *
         * @constructor
         * @extends {goog.fx.Animation}
         * @final
         */
        constructor(element: Element, size: goog.math.Size, box: goog.math.Box, time: number, opt_acc?: (_0: number) => number);
    
        /**
         * Clears the background position style set directly on the element
         * by the animation. Allows to apply CSS styling for background position on the
         * same element when the sprite animation is not runniing.
         */
        clearSpritePosition(): void;
    }
}

