/// <reference path="../../../closure/goog/base.d.ts" />

declare module goog.graphics {

    /**
     * This class represents a font to be used with a renderer.
     * @param {number} size  The font size.
     * @param {string} family  The font family.
     * @constructor
     * @deprecated goog.graphics is deprecated. It existed to abstract over browser
     *     differences before the canvas tag was widely supported.  See
     *     http://en.wikipedia.org/wiki/Canvas_element for details.
     * @final
     */
    class Font {
        /**
         * This class represents a font to be used with a renderer.
         * @param {number} size  The font size.
         * @param {string} family  The font family.
         * @constructor
         * @deprecated goog.graphics is deprecated. It existed to abstract over browser
         *     differences before the canvas tag was widely supported.  See
         *     http://en.wikipedia.org/wiki/Canvas_element for details.
         * @final
         */
        constructor(size: number, family: string);
    
        /**
         * Indication if text should be bolded
         * @type {boolean}
         */
        bold: boolean;
    
        /**
         * Indication if text should be in italics
         * @type {boolean}
         */
        italic: boolean;
    }
}

