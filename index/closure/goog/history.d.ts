// Generated Wed Apr 30 16:31:03 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/memoize.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.history' {

    /**
     * Event types for goog.history.
     * @enum {string}
     */
    enum EventType { NAVIGATE } 

    /**
     * Event object dispatched after the history state has changed.
     * @param {string} token The string identifying the new history state.
     * @param {boolean} isNavigation True if the event was triggered by a browser
     *     action, such as forward or back, clicking on a link, editing the URL, or
     *     calling {@code window.history.(go|back|forward)}.
     *     False if the token has been changed by a {@code setToken} or
     *     {@code replaceToken} call.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class Event extends goog.events.Event {
        /**
         * Event object dispatched after the history state has changed.
         * @param {string} token The string identifying the new history state.
         * @param {boolean} isNavigation True if the event was triggered by a browser
         *     action, such as forward or back, clicking on a link, editing the URL, or
         *     calling {@code window.history.(go|back|forward)}.
         *     False if the token has been changed by a {@code setToken} or
         *     {@code replaceToken} call.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(token: string, isNavigation: boolean);
    }

    /**
     * An implementation compatible with goog.History that uses the HTML5
     * history APIs.
     *
     * @param {Window=} opt_win The window to listen/dispatch history events on.
     * @param {goog.history.Html5History.TokenTransformer=} opt_transformer
     *     The token transformer that is used to create URL from the token
     *     when storing token without using hash fragment.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class Html5History extends goog.events.EventTarget {
        /**
         * An implementation compatible with goog.History that uses the HTML5
         * history APIs.
         *
         * @param {Window=} opt_win The window to listen/dispatch history events on.
         * @param {goog.history.Html5History.TokenTransformer=} opt_transformer
         *     The token transformer that is used to create URL from the token
         *     when storing token without using hash fragment.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_win?: Window, opt_transformer?: goog.history.Html5History.TokenTransformer);
    
        /**
         * Starts or stops the History.  When enabled, the History object
         * will immediately fire an event for the current location. The caller can set
         * up event listeners between the call to the constructor and the call to
         * setEnabled.
         *
         * @param {boolean} enable Whether to enable history.
         */
        setEnabled(enable: boolean): void;
    
        /**
         * Returns the current token.
         * @return {string} The current token.
         */
        getToken(): string;
    
        /**
         * Sets the history state.
         * @param {string} token The history state identifier.
         * @param {string=} opt_title Optional title to associate with history entry.
         */
        setToken(token: string, opt_title?: string): void;
    
        /**
         * Replaces the current history state without affecting the rest of the history
         * stack.
         * @param {string} token The history state identifier.
         * @param {string=} opt_title Optional title to associate with history entry.
         */
        replaceToken(token: string, opt_title?: string): void;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Sets whether to use the fragment to store tokens.
         * @param {boolean} useFragment Whether to use the fragment.
         */
        setUseFragment(useFragment: boolean): void;
    
        /**
         * Sets the path prefix to use if storing tokens in the path. The path
         * prefix should start and end with slash.
         * @param {string} pathPrefix Sets the path prefix.
         */
        setPathPrefix(pathPrefix: string): void;
    
        /**
         * Gets the path prefix.
         * @return {string} The path prefix.
         */
        getPathPrefix(): string;
    }
}

declare module 'goog.History' {

    /**
     * Whether the browser supports HTML5 history management's onhashchange event.
     * {@link http://www.w3.org/TR/html5/history.html}. IE 9 in compatibility mode
     * indicates that onhashchange is in window, but testing reveals the event
     * isn't actually fired.
     * @return {boolean} Whether onhashchange is supported.
     */
    var isOnHashChangeSupported: any /*missing*/;

    /**
     * Whether the current browser is Internet Explorer prior to version 8. Many IE
     * specific workarounds developed before version 8 are unnecessary in more
     * current versions.
     * @type {boolean}
     */
    var LEGACY_IE: boolean;

    /**
     * Whether the browser always requires the hash to be present. Internet Explorer
     * before version 8 will reload the HTML page if the hash is omitted.
     * @type {boolean}
     */
    var HASH_ALWAYS_REQUIRED: boolean;

    /**
     * Types of polling. The values are in ms of the polling interval.
     * @enum {number}
     */
    enum PollingType { NORMAL, LONG } 

    /**
     * Constant for the history change event type.
     * @param {string} token The string identifying the new history state.
     * @extends {goog.events.Event}
     * @constructor
     * @deprecated Use goog.history.Event.
     * @final
     */
    class Event extends goog.events.Event {
        /**
         * Constant for the history change event type.
         * @param {string} token The string identifying the new history state.
         * @extends {goog.events.Event}
         * @constructor
         * @deprecated Use goog.history.Event.
         * @final
         */
        constructor(token: string);
    }
}

declare module 'goog.history.Html5History' {

    /**
     * Returns whether Html5History is supported.
     * @param {Window=} opt_win Optional window to check.
     * @return {boolean} Whether html5 history is supported.
     */
    function isSupported(opt_win?: Window): boolean;

    /**
     * A token transformer that can create a URL from a history
     * token. This is used by {@code goog.history.Html5History} to create
     * URL when storing token without the hash fragment.
     *
     * Given a {@code window.location} object containing the location
     * created by {@code createUrl}, the token transformer allows
     * retrieval of the token back via {@code retrieveToken}.
     *
     * @interface
     */
    interface TokenTransformer {
        retrieveToken(pathPrefix: string, location: Location): string;
        createUrl(token: string, pathPrefix: string, location: Location): string;
    }
}

declare module 'goog' {

    /**
     * A history management object. Can be instantiated in user-visible mode (uses
     * the address fragment to manage state) or in hidden mode. This object should
     * be created from a script in the document body before the document has
     * finished loading.
     *
     * To store the hidden states in browsers other than IE, a hidden iframe is
     * used. It must point to a valid html page on the same domain (which can and
     * probably should be blank.)
     *
     * Sample instantiation and usage:
     *
     * <pre>
     * // Instantiate history to use the address bar for state.
     * var h = new goog.History();
     * goog.events.listen(h, goog.history.EventType.NAVIGATE, navCallback);
     * h.setEnabled(true);
     *
     * // Any changes to the location hash will call the following function.
     * function navCallback(e) {
     *   alert('Navigated to state "' + e.token + '"');
     * }
     *
     * // The history token can also be set from code directly.
     * h.setToken('foo');
     * </pre>
     *
     * @param {boolean=} opt_invisible True to use hidden history states instead of
     *     the user-visible location hash.
     * @param {string=} opt_blankPageUrl A URL to a blank page on the same server.
     *     Required if opt_invisible is true.  This URL is also used as the src
     *     for the iframe used to track history state in IE (if not specified the
     *     iframe is not given a src attribute).  Access is Denied error may
     *     occur in IE7 if the window's URL's scheme is https, and this URL is
     *     not specified.
     * @param {HTMLInputElement=} opt_input The hidden input element to be used to
     *     store the history token.  If not provided, a hidden input element will
     *     be created using document.write.
     * @param {HTMLIFrameElement=} opt_iframe The hidden iframe that will be used by
     *     IE for pushing history state changes, or by all browsers if opt_invisible
     *     is true. If not provided, a hidden iframe element will be created using
     *     document.write.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class History extends goog.events.EventTarget {
        /**
         * A history management object. Can be instantiated in user-visible mode (uses
         * the address fragment to manage state) or in hidden mode. This object should
         * be created from a script in the document body before the document has
         * finished loading.
         *
         * To store the hidden states in browsers other than IE, a hidden iframe is
         * used. It must point to a valid html page on the same domain (which can and
         * probably should be blank.)
         *
         * Sample instantiation and usage:
         *
         * <pre>
         * // Instantiate history to use the address bar for state.
         * var h = new goog.History();
         * goog.events.listen(h, goog.history.EventType.NAVIGATE, navCallback);
         * h.setEnabled(true);
         *
         * // Any changes to the location hash will call the following function.
         * function navCallback(e) {
         *   alert('Navigated to state "' + e.token + '"');
         * }
         *
         * // The history token can also be set from code directly.
         * h.setToken('foo');
         * </pre>
         *
         * @param {boolean=} opt_invisible True to use hidden history states instead of
         *     the user-visible location hash.
         * @param {string=} opt_blankPageUrl A URL to a blank page on the same server.
         *     Required if opt_invisible is true.  This URL is also used as the src
         *     for the iframe used to track history state in IE (if not specified the
         *     iframe is not given a src attribute).  Access is Denied error may
         *     occur in IE7 if the window's URL's scheme is https, and this URL is
         *     not specified.
         * @param {HTMLInputElement=} opt_input The hidden input element to be used to
         *     store the history token.  If not provided, a hidden input element will
         *     be created using document.write.
         * @param {HTMLIFrameElement=} opt_iframe The hidden iframe that will be used by
         *     IE for pushing history state changes, or by all browsers if opt_invisible
         *     is true. If not provided, a hidden iframe element will be created using
         *     document.write.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_invisible?: boolean, opt_blankPageUrl?: string, opt_input?: HTMLInputElement, opt_iframe?: HTMLIFrameElement);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Starts or stops the History polling loop. When enabled, the History object
         * will immediately fire an event for the current location. The caller can set
         * up event listeners between the call to the constructor and the call to
         * setEnabled.
         *
         * On IE, actual startup may be delayed until the iframe and hidden input
         * element have been loaded and can be polled. This behavior is transparent to
         * the caller.
         *
         * @param {boolean} enable Whether to enable the history polling loop.
         */
        setEnabled(enable: boolean): void;
    
        /**
         * Callback for the window onload event in IE. This is necessary to read the
         * value of the hidden input after restoring a history session. The value of
         * input elements is not viewable until after window onload for some reason (the
         * iframe state is similarly unavailable during the loading phase.)  If
         * setEnabled is called before the iframe has completed loading, the history
         * object will actually be enabled at this point.
         * @protected
         */
        onDocumentLoaded(): void;
    
        /**
         * @return {string} The current token.
         */
        getToken(): string;
    
        /**
         * Sets the history state. When user visible states are used, the URL fragment
         * will be set to the provided token.  Sometimes it is necessary to set the
         * history token before the document title has changed, in this case IE's
         * history drop down can be out of sync with the token.  To get around this
         * problem, the app can pass in a title to use with the hidden iframe.
         * @param {string} token The history state identifier.
         * @param {string=} opt_title Optional title used when setting the hidden iframe
         *     title in IE.
         */
        setToken(token: string, opt_title?: string): void;
    
        /**
         * Replaces the current history state without affecting the rest of the history
         * stack.
         * @param {string} token The history state identifier.
         * @param {string=} opt_title Optional title used when setting the hidden iframe
         *     title in IE.
         */
        replaceToken(token: string, opt_title?: string): void;
    }
}

