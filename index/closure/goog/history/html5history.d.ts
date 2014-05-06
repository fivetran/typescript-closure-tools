/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/history/eventtype.d.ts" />
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
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/history/event.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />

declare module goog.history.Html5History {

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
    
        /**
         * Retrieves a history token given the path prefix and
         * {@code window.location} object.
         *
         * @param {string} pathPrefix The path prefix to use when storing token
         *     in a path; always begin with a slash.
         * @param {Location} location The {@code window.location} object.
         *     Treat this object as read-only.
         * @return {string} token The history token.
         */
        retrieveToken(pathPrefix: string, location: Location): string;
    
        /**
         * Creates a URL to be pushed into HTML5 history stack when storing
         * token without using hash fragment.
         *
         * @param {string} token The history token.
         * @param {string} pathPrefix The path prefix to use when storing token
         *     in a path; always begin with a slash.
         * @param {Location} location The {@code window.location} object.
         *     Treat this object as read-only.
         * @return {string} url The complete URL string from path onwards
         *     (without {@code protocol://host:port} part); must begin with a
         *     slash.
         */
        createUrl(token: string, pathPrefix: string, location: Location): string;
    }

    /**
     * Returns whether Html5History is supported.
     * @param {Window=} opt_win Optional window to check.
     * @return {boolean} Whether html5 history is supported.
     */
    function isSupported(opt_win?: Window): boolean;
}

declare module goog.history {

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

