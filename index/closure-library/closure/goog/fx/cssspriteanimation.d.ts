/// <reference path="../../../globals.d.ts" />
/// <reference path="./animation.d.ts" />
/// <reference path="../math/size.d.ts" />
/// <reference path="../math/box.d.ts" />

declare module goog.fx {

    class CssSpriteAnimation extends CssSpriteAnimation__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class CssSpriteAnimation__Class extends goog.fx.Animation__Class  { 
    
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
            constructor(element: Element, size: goog.math.Size, box: goog.math.Box, time: number, opt_acc?: { (_0: number): number });
    
            /**
             * Clears the background position style set directly on the element
             * by the animation. Allows to apply CSS styling for background position on the
             * same element when the sprite animation is not runniing.
             */
            clearSpritePosition(): void;
    } 
    
}
