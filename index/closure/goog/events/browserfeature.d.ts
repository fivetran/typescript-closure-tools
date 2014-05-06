/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />

declare module goog.events {

    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    enum BrowserFeature { HAS_W3C_BUTTON, HAS_W3C_EVENT_SUPPORT, SET_KEY_CODE_TO_PREVENT_DEFAULT, HAS_NAVIGATOR_ONLINE_PROPERTY, HAS_HTML5_NETWORK_EVENT_SUPPORT, HTML5_NETWORK_EVENTS_FIRE_ON_BODY, TOUCH_ENABLED } 
}

