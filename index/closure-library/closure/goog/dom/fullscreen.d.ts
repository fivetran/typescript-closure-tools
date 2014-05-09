/// <reference path="../../../globals.d.ts" />
/// <reference path="./dom.d.ts" />

declare module goog.dom.fullscreen {

    /**
     * Event types for full screen.
     * @enum {string}
     */
    enum EventType { CHANGE } 

    /**
     * Determines if full screen is supported.
     * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper for the DOM being
     *     queried. If not provided, use the current DOM.
     * @return {boolean} True iff full screen is supported.
     */
    function isSupported(opt_domHelper?: goog.dom.DomHelper): boolean;

    /**
     * Requests putting the element in full screen.
     * @param {!Element} element The element to put full screen.
     */
    function requestFullScreen(element: Element): void;

    /**
     * Requests putting the element in full screen with full keyboard access.
     * @param {!Element} element The element to put full screen.
     */
    function requestFullScreenWithKeys(element: Element): void;

    /**
     * Exits full screen.
     * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper for the DOM being
     *     queried. If not provided, use the current DOM.
     */
    function exitFullScreen(opt_domHelper?: goog.dom.DomHelper): void;

    /**
     * Determines if the document is full screen.
     * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper for the DOM being
     *     queried. If not provided, use the current DOM.
     * @return {boolean} Whether the document is full screen.
     */
    function isFullScreen(opt_domHelper?: goog.dom.DomHelper): boolean;
}
