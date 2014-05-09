/// <reference path="../../../globals.d.ts" />
/// <reference path="./browserevent.d.ts" />

declare module goog.events {

    /**
     * Key codes for common characters.
     *
     * This list is not localized and therefore some of the key codes are not
     * correct for non US keyboard layouts. See comments below.
     *
     * @enum {number}
     */
    enum KeyCodes { WIN_KEY_FF_LINUX, MAC_ENTER, BACKSPACE, TAB, NUM_CENTER, ENTER, SHIFT, CTRL, ALT, PAUSE, CAPS_LOCK, ESC, SPACE, PAGE_UP, PAGE_DOWN, END, HOME, LEFT, UP, RIGHT, DOWN, PRINT_SCREEN, INSERT, DELETE, ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE, FF_SEMICOLON, FF_EQUALS, FF_DASH, QUESTION_MARK, A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z, META, WIN_KEY_RIGHT, CONTEXT_MENU, NUM_ZERO, NUM_ONE, NUM_TWO, NUM_THREE, NUM_FOUR, NUM_FIVE, NUM_SIX, NUM_SEVEN, NUM_EIGHT, NUM_NINE, NUM_MULTIPLY, NUM_PLUS, NUM_MINUS, NUM_PERIOD, NUM_DIVISION, F1, F2, F3, F4, F5, F6, F7, F8, F9, F10, F11, F12, NUMLOCK, SCROLL_LOCK, FIRST_MEDIA_KEY, LAST_MEDIA_KEY, SEMICOLON, DASH, EQUALS, COMMA, PERIOD, SLASH, APOSTROPHE, TILDE, SINGLE_QUOTE, OPEN_SQUARE_BRACKET, BACKSLASH, CLOSE_SQUARE_BRACKET, WIN_KEY, MAC_FF_META, MAC_WK_CMD_LEFT, MAC_WK_CMD_RIGHT, WIN_IME, PHANTOM } 
}

declare module goog.events.KeyCodes {

    /**
     * Returns true if the event contains a text modifying key.
     * @param {goog.events.BrowserEvent} e A key event.
     * @return {boolean} Whether it's a text modifying key.
     */
    function isTextModifyingKeyEvent(e: goog.events.BrowserEvent): boolean;

    /**
     * Returns true if the key fires a keypress event in the current browser.
     *
     * Accoridng to MSDN [1] IE only fires keypress events for the following keys:
     * - Letters: A - Z (uppercase and lowercase)
     * - Numerals: 0 - 9
     * - Symbols: ! @ # $ % ^ & * ( ) _ - + = < [ ] { } , . / ? \ | ' ` " ~
     * - System: ESC, SPACEBAR, ENTER
     *
     * That's not entirely correct though, for instance there's no distinction
     * between upper and lower case letters.
     *
     * [1] http://msdn2.microsoft.com/en-us/library/ms536939(VS.85).aspx)
     *
     * Safari is similar to IE, but does not fire keypress for ESC.
     *
     * Additionally, IE6 does not fire keydown or keypress events for letters when
     * the control or alt keys are held down and the shift key is not. IE7 does
     * fire keydown in these cases, though, but not keypress.
     *
     * @param {number} keyCode A key code.
     * @param {number=} opt_heldKeyCode Key code of a currently-held key.
     * @param {boolean=} opt_shiftKey Whether the shift key is held down.
     * @param {boolean=} opt_ctrlKey Whether the control key is held down.
     * @param {boolean=} opt_altKey Whether the alt key is held down.
     * @return {boolean} Whether it's a key that fires a keypress event.
     */
    function firesKeyPressEvent(keyCode: number, opt_heldKeyCode?: number, opt_shiftKey?: boolean, opt_ctrlKey?: boolean, opt_altKey?: boolean): boolean;

    /**
     * Returns true if the key produces a character.
     * This does not cover characters on non-US keyboards (Russian, Hebrew, etc.).
     *
     * @param {number} keyCode A key code.
     * @return {boolean} Whether it's a character key.
     */
    function isCharacterKey(keyCode: number): boolean;

    /**
     * Normalizes key codes from OS/Browser-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeKeyCode(keyCode: number): number;

    /**
     * Normalizes key codes from their Gecko-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeGeckoKeyCode(keyCode: number): number;

    /**
     * Normalizes key codes from their Mac WebKit-specific value to the general one.
     * @param {number} keyCode The native key code.
     * @return {number} The normalized key code.
     */
    function normalizeMacWebKitKeyCode(keyCode: number): number;
}
