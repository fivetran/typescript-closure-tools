/// <reference path="../../../globals.d.ts" />

declare module goog.events {

    /**
     * Key names for common characters. These should be used with keyup/keydown
     * events, since the .keyCode property on those is meant to indicate the
     * *physical key* the user held down on the keyboard. Hence the mapping uses
     * only the unshifted version of each key (e.g. no '#', since that's shift+3).
     * Keypress events on the other hand generate (mostly) ASCII codes since they
     * correspond to *characters* the user typed.
     *
     * For further reference: http://unixpapa.com/js/key.html
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non-US keyboard layouts.
     *
     * @see goog.events.KeyCodes
     * @enum {string}
     */
    enum KeyNames { 8, 9, 13, 16, 17, 18, 19, 20, 27, 32, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 59, 61, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 93, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 186, 187, 189, 188, 190, 191, 192, 219, 220, 221, 222, 224 } 
}
