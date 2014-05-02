// Generated Thu May  1 21:03:29 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/dom/selection.d.ts" />
/// <reference path="../../../goog/editor/focus.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
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
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../goog/ui/buttonside.d.ts" />
/// <reference path="../../../goog/ui/buttonrenderer.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/ui/nativebuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/registry.d.ts" />
/// <reference path="../../../goog/events/keyhandler.d.ts" />
/// <reference path="../../../goog/ui/decorate.d.ts" />
/// <reference path="../../../goog/ui/controlcontent.d.ts" />
/// <reference path="../../../goog/ui/control.d.ts" />
/// <reference path="../../../goog/ui/button.d.ts" />
/// <reference path="../../../goog/ui/tabrenderer.d.ts" />
/// <reference path="../../../goog/ui/tab.d.ts" />
/// <reference path="../../../goog/ui/containerrenderer.d.ts" />
/// <reference path="../../../goog/ui/tabbarrenderer.d.ts" />
/// <reference path="../../../goog/ui/container.d.ts" />
/// <reference path="../../../goog/ui/tabbar.d.ts" />
/// <reference path="../../../goog/ui/editor/tabpane.d.ts" />
/// <reference path="../../../goog/ui/cssnames.d.ts" />
/// <reference path="../../../goog/ui/flatbuttonrenderer.d.ts" />
/// <reference path="../../../goog/ui/linkbuttonrenderer.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/events/inputhandler.d.ts" />
/// <reference path="../../../goog/ui/editor/messages.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/fx/dragger.d.ts" />
/// <reference path="../../../goog/i18n/bidi.d.ts" />
/// <reference path="../../../goog/string/typedstring.d.ts" />
/// <reference path="../../../goog/string/const.d.ts" />
/// <reference path="../../../goog/html/safeurl.d.ts" />
/// <reference path="../../../goog/dom/tags.d.ts" />
/// <reference path="../../../goog/html/safestyle.d.ts" />
/// <reference path="../../../goog/html/safehtml.d.ts" />
/// <reference path="../../../goog/dom/safe.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/dom/iframe.d.ts" />
/// <reference path="../../../goog/events/focushandler.d.ts" />
/// <reference path="../../../goog/ui/modalpopup.d.ts" />
/// <reference path="../../../goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../goog/html/legacyconversions.d.ts" />
/// <reference path="../../../goog/ui/dialog.d.ts" />
/// <reference path="../../../goog/ui/editor/abstractdialog.d.ts" />
/// <reference path="../../../goog/window/window.d.ts" />

declare module goog.ui.editor.LinkDialog {

    /**
     * Events specific to the link dialog.
     * @enum {string}
     */
    enum EventType { BEFORE_TEST_LINK } 

    /**
     * Checks if {@code str} contains {@code "nofollow"} as a separate word.
     * @param {string} str String to be tested.  This is usually {@code rel}
     *     attribute of an {@code HTMLAnchorElement} object.
     * @return {boolean} {@code true} if {@code str} contains {@code nofollow}.
     */
    function hasNoFollow(str: string): boolean;

    /**
     * Removes {@code "nofollow"} from {@code rel} if it's present as a separate
     * word.
     * @param {string} rel Input string.  This is usually {@code rel} attribute of
     *     an {@code HTMLAnchorElement} object.
     * @return {string} {@code rel} with any {@code "nofollow"} removed.
     */
    function removeNoFollow(rel: string): string;

    /**
     * OK event object for the link dialog.
     * @param {string} linkText Text the user chose to display for the link.
     * @param {string} linkUrl Url the user chose for the link to point to.
     * @param {boolean} openInNewWindow Whether the link should open in a new window
     *     when clicked.
     * @param {boolean} noFollow Whether the link should have 'rel=nofollow'
     *     attribute.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class OkEvent extends goog.events.Event {
        /**
         * OK event object for the link dialog.
         * @param {string} linkText Text the user chose to display for the link.
         * @param {string} linkUrl Url the user chose for the link to point to.
         * @param {boolean} openInNewWindow Whether the link should open in a new window
         *     when clicked.
         * @param {boolean} noFollow Whether the link should have 'rel=nofollow'
         *     attribute.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(linkText: string, linkUrl: string, openInNewWindow: boolean, noFollow: boolean);
    }

    /**
     * Event fired before testing a link by opening it in another window.
     * Calling preventDefault will stop the link from being opened.
     * @param {string} url Url of the link being tested.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class BeforeTestLinkEvent extends goog.events.Event {
        /**
         * Event fired before testing a link by opening it in another window.
         * Calling preventDefault will stop the link from being opened.
         * @param {string} url Url of the link being tested.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(url: string);
    }
}

declare module goog.ui.editor {

    /**
     * A type of goog.ui.editor.AbstractDialog for editing/creating a link.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     *     dialog's dom structure.
     * @param {goog.editor.Link} link The target link.
     * @constructor
     * @extends {goog.ui.editor.AbstractDialog}
     * @final
     */
    class LinkDialog extends goog.ui.editor.AbstractDialog {
        /**
         * A type of goog.ui.editor.AbstractDialog for editing/creating a link.
         * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
         *     dialog's dom structure.
         * @param {goog.editor.Link} link The target link.
         * @constructor
         * @extends {goog.ui.editor.AbstractDialog}
         * @final
         */
        constructor(domHelper: goog.dom.DomHelper, link: goog.editor.Link);
    
        /**
         * Sets the warning message to show to users about including email addresses on
         * public web pages.
         * @param {string} emailWarning Warning message to show users about including
         *     email addresses on the web.
         */
        setEmailWarning(emailWarning: string): void;
    
        /**
         * Tells the dialog to show a checkbox where the user can choose to have the
         * link open in a new window.
         * @param {boolean} startChecked Whether to check the checkbox the first
         *     time the dialog is shown. Subesquent times the checkbox will remember its
         *     previous state.
         */
        showOpenLinkInNewWindow(startChecked: boolean): void;
    
        /**
         * Tells the dialog to show a checkbox where the user can choose to add
         * 'rel=nofollow' attribute to the link.
         */
        showRelNoFollow(): void;
    
        /**
         * Tells the dialog whether to show the 'text to display' div.
         * When the target element of the dialog is an image, there is no link text
         * to modify. This function can be used for this kind of situations.
         * @param {boolean} visible Whether to make 'text to display' div visible.
         */
        setTextToDisplayVisible(visible: boolean): void;
    
        /**
         * Tells the plugin whether to stop leaking the page's url via the referrer
         * header when the "test this link" link is clicked.
         * @param {boolean} stop Whether to stop leaking the referrer.
         */
        setStopReferrerLeaks(stop: boolean): void;
    
        /**
         * Tells the dialog whether the autogeneration of text to display is to be
         * enabled.
         * @param {boolean} enable Whether to enable the feature.
         */
        setAutogenFeatureEnabled(enable: boolean): void;
    }
}

