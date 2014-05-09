/// <reference path="../../../globals.d.ts" />

declare module goog.userAgent.product {

    /**
     * Whether the code is running on the Opera web browser.
     * @type {boolean}
     */
    var OPERA: boolean;

    /**
     * Whether the code is running on an IE web browser.
     * @type {boolean}
     */
    var IE: boolean;

    /**
     * Whether the code is running on the Firefox web browser.
     * @type {boolean}
     */
    var FIREFOX: boolean;

    /**
     * Whether the code is running on the Camino web browser.
     * @type {boolean}
     */
    var CAMINO: boolean;

    /**
     * Whether the code is running on an iPhone or iPod touch.
     * @type {boolean}
     */
    var IPHONE: boolean;

    /**
     * Whether the code is running on an iPad.
     * @type {boolean}
     */
    var IPAD: boolean;

    /**
     * Whether the code is running on the default browser on an Android phone.
     * @type {boolean}
     */
    var ANDROID: boolean;

    /**
     * Whether the code is running on the Chrome web browser.
     * @type {boolean}
     */
    var CHROME: boolean;

    /**
     * Whether the code is running on the Safari web browser.
     * @type {boolean}
     */
    var SAFARI: boolean;
}
