/// <reference path="../../../../globals.d.ts" />
/// <reference path="./abstractdialog.d.ts" />
/// <reference path="../../dom/dom.d.ts" />
/// <reference path="../../editor/link.d.ts" />
/// <reference path="../../events/event.d.ts" />

declare module goog.ui.editor {

    class LinkDialog extends LinkDialog.__Class { }
    module LinkDialog {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.editor.AbstractDialog.__Class {
    
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
}

declare module goog.ui.editor.LinkDialog {

    class OkEvent extends OkEvent.__Class { }
    module OkEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class {
    
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
    }

    class BeforeTestLinkEvent extends BeforeTestLinkEvent.__Class { }
    module BeforeTestLinkEvent {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.events.Event.__Class {
    
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
     * IDs for relevant DOM elements.
     * @enum {string}
     * @private
     */
    enum Id_ { TEXT_TO_DISPLAY, ON_WEB_TAB, ON_WEB_INPUT, EMAIL_ADDRESS_TAB, EMAIL_ADDRESS_INPUT, EMAIL_WARNING, TAB_INPUT_SUFFIX } 
}
