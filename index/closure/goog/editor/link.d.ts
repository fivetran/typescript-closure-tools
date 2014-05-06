/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/editor/defines.d.ts" />
/// <reference path="../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../closure/goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../closure/goog/editor/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/editor/style.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../closure/goog/dom/iter.d.ts" />
/// <reference path="../../../closure/goog/editor/node.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractrange.d.ts" />
/// <reference path="../../../closure/goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../closure/goog/dom/textrange.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../closure/goog/dom/controlrange.d.ts" />
/// <reference path="../../../closure/goog/dom/multirange.d.ts" />
/// <reference path="../../../closure/goog/dom/range.d.ts" />
/// <reference path="../../../closure/goog/editor/range.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/editor/command.d.ts" />

declare module goog.editor {

    /**
     * Wrap an editable link.
     * @param {HTMLAnchorElement} anchor The anchor element.
     * @param {boolean} isNew Whether this is a new link.
     * @constructor
     * @final
     */
    class Link {
        /**
         * Wrap an editable link.
         * @param {HTMLAnchorElement} anchor The anchor element.
         * @param {boolean} isNew Whether this is a new link.
         * @constructor
         * @final
         */
        constructor(anchor: HTMLAnchorElement, isNew: boolean);
    
        /**
         * @return {HTMLAnchorElement} The anchor element.
         */
        getAnchor(): HTMLAnchorElement;
    
        /**
         * @return {!Array.<HTMLAnchorElement>} The extra anchor elements, if any,
         *     created by the browser from a selection.
         */
        getExtraAnchors(): HTMLAnchorElement[];
    
        /**
         * @return {string} The inner text for the anchor.
         */
        getCurrentText(): string;
    
        /**
         * @return {boolean} Whether the link is new.
         */
        isNew(): boolean;
    
        /**
         * Set the url without affecting the isNew() status of the link.
         * @param {string} url A URL.
         */
        initializeUrl(url: string): void;
    
        /**
         * Removes the link, leaving its contents in the document.  Note that this
         * object will no longer be usable/useful after this call.
         */
        removeLink(): void;
    
        /**
         * Change the link.
         * @param {string} newText New text for the link. If the link contains all its
         *     text in one descendent, newText will only replace the text in that
         *     one node. Otherwise, we'll change the innerHTML of the whole
         *     link to newText.
         * @param {string} newUrl A new URL.
         */
        setTextAndUrl(newText: string, newUrl: string): void;
    
        /**
         * Places the cursor to the right of the anchor.
         * Note that this is different from goog.editor.range's placeCursorNextTo
         * in that it specifically handles the placement of a cursor in browsers
         * that trap you in links, by adding a space when necessary and placing the
         * cursor after that space.
         */
        placeCursorRightOf(): void;
    
        /**
         * @return {string?} The modified string for the link if the link
         *     text appears to be a valid link. Returns null if this is not
         *     a valid link address.
         */
        getValidLinkFromText(): string;
    
        /**
         * After link creation, finish creating the link depending on the type
         * of link being created.
         * @param {goog.editor.Field} field The field where this link is being created.
         */
        finishLinkCreation(field: goog.editor.Field): void;
    }
}

declare module goog.editor.Link {

    /**
     * Initialize a new link.
     * @param {HTMLAnchorElement} anchor The anchor element.
     * @param {string} url The initial URL.
     * @param {string=} opt_target The target.
     * @param {Array.<HTMLAnchorElement>=} opt_extraAnchors Extra anchors created
     *     by the browser when parsing a selection.
     * @return {!goog.editor.Link} The link.
     */
    function createNewLink(anchor: HTMLAnchorElement, url: string, opt_target?: string, opt_extraAnchors?: HTMLAnchorElement[]): goog.editor.Link;

    /**
     * Returns true if str could be a URL, false otherwise
     *
     * Ex: TR_Util.isLikelyUrl_("http://www.google.com") == true
     *     TR_Util.isLikelyUrl_("www.google.com") == true
     *
     * @param {string} str String to check if it looks like a URL.
     * @return {boolean} Whether str could be a URL.
     */
    function isLikelyUrl(str: string): boolean;

    /**
     * Returns true if str could be an email address, false otherwise
     *
     * Ex: goog.editor.Link.isLikelyEmailAddress_("some word") == false
     *     goog.editor.Link.isLikelyEmailAddress_("foo@foo.com") == true
     *
     * @param {string} str String to test for being email address.
     * @return {boolean} Whether "str" looks like an email address.
     */
    function isLikelyEmailAddress(str: string): boolean;

    /**
     * Determines whether or not a url is an email link.
     * @param {string} url A url.
     * @return {boolean} Whether the url is a mailto link.
     */
    function isMailto(url: string): boolean;
}

