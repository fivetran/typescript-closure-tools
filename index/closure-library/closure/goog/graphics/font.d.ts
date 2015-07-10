/// <reference path="../../../globals.d.ts" />

declare module goog.graphics {

    class Font extends Font__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Font__Class  { 
    
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
             * Font size.
             * @type {number}
             */
            size: number;
    
            /**
             * The name of the font family to use, can be a comma separated string.
             * @type {string}
             */
            family: string;
    
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
