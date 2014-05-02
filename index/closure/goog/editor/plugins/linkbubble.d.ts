// Generated Thu May  1 21:01:19 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/editor/defines.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../../goog/editor/style.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../goog/dom/iter.d.ts" />
/// <reference path="../../../goog/editor/node.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/dom/savedrange.d.ts" />
/// <reference path="../../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../goog/dom/textrange.d.ts" />
/// <reference path="../../../goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../goog/dom/controlrange.d.ts" />
/// <reference path="../../../goog/dom/multirange.d.ts" />
/// <reference path="../../../goog/dom/range.d.ts" />
/// <reference path="../../../goog/editor/range.d.ts" />
/// <reference path="../../../goog/uri/utils.d.ts" />
/// <reference path="../../../goog/editor/command.d.ts" />
/// <reference path="../../../goog/editor/link.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/events/eventwrapper.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/actioneventwrapper.d.ts" />
/// <reference path="../../../goog/editor/plugin.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/positioning/positioning.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/dom/viewportsizemonitor.d.ts" />
/// <reference path="../../../goog/ui/editor/bubble.d.ts" />
/// <reference path="../../../goog/editor/plugins/abstractbubbleplugin.d.ts" />
/// <reference path="../../../goog/window/window.d.ts" />
/// <reference path="../../../goog/ui/editor/messages.d.ts" />

declare module goog.editor.plugins {

    /**
     * Property bubble plugin for links.
     * @param {...!goog.editor.plugins.LinkBubble.Action} var_args List of
     *     extra actions supported by the bubble.
     * @constructor
     * @extends {goog.editor.plugins.AbstractBubblePlugin}
     */
    class LinkBubble extends goog.editor.plugins.AbstractBubblePlugin {
        /**
         * Property bubble plugin for links.
         * @param {...!goog.editor.plugins.LinkBubble.Action} var_args List of
         *     extra actions supported by the bubble.
         * @constructor
         * @extends {goog.editor.plugins.AbstractBubblePlugin}
         */
        constructor(...var_args: goog.editor.plugins.LinkBubble.Action[]);
    
        /**
         * Tells the plugin to stop leaking the page's url via the referrer header when
         * the link text link is clicked. When the user clicks on a link, the
         * browser makes a request for the link url, passing the url of the current page
         * in the request headers. If the user wants the current url to be kept secret
         * (e.g. an unpublished document), the owner of the url that was clicked will
         * see the secret url in the request headers, and it will no longer be a secret.
         * Calling this method will not send a referrer header in the request, just as
         * if the user had opened a blank window and typed the url in themselves.
         */
        stopReferrerLeaks(): void;
    
        /**
         * Tells the plugin whether to block URLs with schemes not in the whitelist.
         * If blocking is enabled, this plugin will not linkify the link in the bubble
         * popup.
         * @param {boolean} blockOpeningUnsafeSchemes Whether to block non-whitelisted
         *     schemes.
         */
        setBlockOpeningUnsafeSchemes(blockOpeningUnsafeSchemes: boolean): void;
    
        /**
         * Sets a whitelist of allowed URL schemes that are safe to open.
         * Schemes should all be in lowercase. If the plugin is set to block opening
         * unsafe schemes, user-entered URLs will be converted to lowercase and checked
         * against this list. The whitelist has no effect if blocking is not enabled.
         * @param {Array.<string>} schemes String array of URL schemes to allow (http,
         *     https, etc.).
         */
        setSafeToOpenSchemes(schemes: string[]): void;
    
        /**
         * Set the optional function for getting the "test" link of a url.
         * @param {function(string) : string} func The function to use.
         */
        setTestLinkUrlFn(func: (_0: string) => string): void;
    
        /**
         * Returns the target element url for the bubble.
         * @return {string} The url href.
         * @protected
         */
        getTargetUrl(): string;
    
        /**
         * Tests the link by opening it in a new tab/window. Should be used as the
         * click event handler for the test pseudo-link.
         * @protected
         */
        testLink(): void;
    
        /**
         * Returns whether the URL should be considered invalid.  This always returns
         * false in the base class, and should be overridden by subclasses that wish
         * to impose validity rules on URLs.
         * @param {string} url The url to check.
         * @return {boolean} Whether the URL should be considered invalid.
         */
        isInvalidUrl: any /*missing*/;
    
        /**
         * Checks whether the plugin should open the given url in a new window.
         * @param {string} url The url to check.
         * @return {boolean} If the plugin should open the given url in a new window.
         * @protected
         */
        shouldOpenUrl(url: string): boolean;
    }
}

declare module goog.editor.plugins.LinkBubble {

    /**
     * Constructor for extra actions that can be added to the link bubble.
     * @param {string} spanId The ID for the span showing the action.
     * @param {string} linkId The ID for the link showing the action.
     * @param {string} message The text for the link showing the action.
     * @param {function(string):boolean} toShowFn Test function to determine whether
     *     to show the action for the given URL.
     * @param {function(string):void} actionFn Action function to run when the
     *     action is clicked.  Takes the current target URL as a parameter.
     * @constructor
     * @final
     */
    class Action {
        /**
         * Constructor for extra actions that can be added to the link bubble.
         * @param {string} spanId The ID for the span showing the action.
         * @param {string} linkId The ID for the link showing the action.
         * @param {string} message The text for the link showing the action.
         * @param {function(string):boolean} toShowFn Test function to determine whether
         *     to show the action for the given URL.
         * @param {function(string):void} actionFn Action function to run when the
         *     action is clicked.  Takes the current target URL as a parameter.
         * @constructor
         * @final
         */
        constructor(spanId: string, linkId: string, message: string, toShowFn: (_0: string) => boolean, actionFn: (_0: string) => void);
    }
}

