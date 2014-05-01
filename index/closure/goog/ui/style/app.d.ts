// Generated Wed Apr 30 16:34:37 PDT 2014

/// <reference path="../../../goog.d.ts" />
/// <reference path="../../../goog/a11y/aria.d.ts" />
/// <reference path="../../../goog/array.d.ts" />
/// <reference path="../../../goog/asserts.d.ts" />
/// <reference path="../../../goog/debug.d.ts" />
/// <reference path="../../../goog/disposable.d.ts" />
/// <reference path="../../../goog/dom.d.ts" />
/// <reference path="../../../goog/events.d.ts" />
/// <reference path="../../../goog/functions.d.ts" />
/// <reference path="../../../goog/labs/useragent.d.ts" />
/// <reference path="../../../goog/math.d.ts" />
/// <reference path="../../../goog/object.d.ts" />
/// <reference path="../../../goog/reflect.d.ts" />
/// <reference path="../../../goog/string.d.ts" />
/// <reference path="../../../goog/style.d.ts" />
/// <reference path="../../../goog/ui.d.ts" />
/// <reference path="../../../goog/useragent.d.ts" />

declare module 'goog.ui.style.app.ButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     * @type {Array.<Array.<string>>}
     */
    var IE6_CLASS_COMBINATIONS: string[][];
}

declare module 'goog.ui.style.app.MenuButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     * @type {Array.<Array.<string>>}
     */
    var IE6_CLASS_COMBINATIONS: string[][];
}

declare module 'goog.ui.style.app.PrimaryActionButtonRenderer' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Array of arrays of CSS classes that we want composite classes added and
     * removed for in IE6 and lower as a workaround for lack of multi-class CSS
     * selector support.
     * @type {Array.<Array.<string>>}
     */
    var IE6_CLASS_COMBINATIONS: string[][];
}

declare module 'goog.ui.style.app' {

    /**
     * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
     * almost arbitrary HTML content, will flow like inline elements, but can be
     * styled like block-level elements.
     *
     * @constructor
     * @extends {goog.ui.CustomButtonRenderer}
     */
    class ButtonRenderer extends goog.ui.CustomButtonRenderer {
        /**
         * Custom renderer for {@link goog.ui.Button}s. Imageless buttons can contain
         * almost arbitrary HTML content, will flow like inline elements, but can be
         * styled like block-level elements.
         *
         * @constructor
         * @extends {goog.ui.CustomButtonRenderer}
         */
        constructor();
    
        /**
         * Returns the button's contents wrapped in the following DOM structure:
         *    <div class="goog-inline-block goog-button-base goog-button">
         *      <div class="goog-inline-block goog-button-base-outer-box">
         *        <div class="goog-button-base-inner-box">
         *          <div class="goog-button-base-pos">
         *            <div class="goog-button-base-top-shadow">&nbsp;</div>
         *            <div class="goog-button-base-content">Contents...</div>
         *          </div>
         *        </div>
         *      </div>
         *    </div>
         * @override
         */
        createDom: any /*missing*/;
    
        /** @override */
        getContentElement(): void;
    
        /**
         * Takes a text caption or existing DOM structure, and returns the content
         * wrapped in a pseudo-rounded-corner box.  Creates the following DOM structure:
         *  <div class="goog-inline-block goog-button-base-outer-box">
         *    <div class="goog-inline-block goog-button-base-inner-box">
         *      <div class="goog-button-base-pos">
         *        <div class="goog-button-base-top-shadow">&nbsp;</div>
         *        <div class="goog-button-base-content">Contents...</div>
         *      </div>
         *    </div>
         *  </div>
         * Used by both {@link #createDom} and {@link #decorate}.  To be overridden
         * by subclasses.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /**
         * Check if the button's element has a box structure.
         * @param {goog.ui.Button} button Button instance whose structure is being
         *     checked.
         * @param {Element} element Element of the button.
         * @return {boolean} Whether the element has a box structure.
         * @protected
         * @override
         */
        hasBoxStructure(button: goog.ui.Button, element: Element): boolean;
    
        /** @override */
        getCssClass(): void;
    
        /** @override */
        getStructuralCssClass(): void;
    
        /** @override */
        getIe6ClassCombinations(): void;
    }

    /**
     * Renderer for {@link goog.ui.style.app.MenuButton}s.  This implementation
     * overrides {@link goog.ui.style.app.ButtonRenderer#createButton} to insert a
     * dropdown element into the content element after the specified content.
     * @constructor
     * @extends {goog.ui.style.app.ButtonRenderer}
     * @final
     */
    class MenuButtonRenderer extends goog.ui.style.app.ButtonRenderer {
        /**
         * Renderer for {@link goog.ui.style.app.MenuButton}s.  This implementation
         * overrides {@link goog.ui.style.app.ButtonRenderer#createButton} to insert a
         * dropdown element into the content element after the specified content.
         * @constructor
         * @extends {goog.ui.style.app.ButtonRenderer}
         * @final
         */
        constructor();
    
        /**
         * Returns the ARIA role to be applied to menu buttons, which
         * have a menu attached to them.
         * @return {goog.a11y.aria.Role} ARIA role.
         * @override
         */
        getAriaRole(): goog.a11y.aria.Role;
    
        /**
         * Takes the button's root element and returns the parent element of the
         * button's contents.  Overrides the superclass implementation by taking
         * the nested DIV structure of menu buttons into account.
         * @param {Element} element Root element of the button whose content element
         *     is to be returned.
         * @return {Element} The button's content element.
         * @override
         */
        getContentElement(element: Element): Element;
    
        /**
         * Takes an element, decorates it with the menu button control, and returns
         * the element.  Overrides {@link goog.ui.style.app.ButtonRenderer#decorate} by
         * looking for a child element that can be decorated by a menu, and if it
         * finds one, decorates it and attaches it to the menu button.
         * @param {goog.ui.Control} control goog.ui.MenuButton to decorate the element.
         * @param {Element} element Element to decorate.
         * @return {Element} Decorated element.
         * @override
         */
        decorate(control: goog.ui.Control, element: Element): Element;
    
        /**
         * Takes a text caption or existing DOM structure, and returns the content and
         * a dropdown arrow element wrapped in a pseudo-rounded-corner box.  Creates
         * the following DOM structure:
         *  <div class="goog-inline-block goog-button-outer-box">
         *    <div class="goog-inline-block goog-button-inner-box">
         *      <div class="goog-button-pos">
         *        <div class="goog-button-top-shadow">&nbsp;</div>
         *        <div class="goog-button-content">
         *          Contents...
         *          <div class="goog-menu-button-dropdown"> </div>
         *        </div>
         *      </div>
         *    </div>
         *  </div>
         * @param {goog.ui.ControlContent} content Text caption or DOM structure to wrap
         *     in a box.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Pseudo-rounded-corner box containing the content.
         * @override
         */
        createButton(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Element;
    
        /** @override */
        setContent(): void;
    
        /**
         * Inserts dropdown element as last child of existing content.
         * @param {goog.ui.ControlContent} content Text caption or DOM structure.
         * @param {goog.dom.DomHelper} dom DOM helper, used for document ineraction.
         * @return {Array.<Node>} DOM structure to be set as the button's content.
         */
        createContentWithDropdown(content: goog.ui.ControlContent, dom: goog.dom.DomHelper): Node[];
    
        /**
         * Returns an appropriately-styled DIV containing a dropdown arrow.
         * Creates the following DOM structure:
         *    <div class="goog-menu-button-dropdown"> </div>
         * @param {goog.dom.DomHelper} dom DOM helper, used for document interaction.
         * @return {Element} Dropdown element.
         */
        createDropdown(dom: goog.dom.DomHelper): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    
        /** @override */
        getIe6ClassCombinations(): void;
    }

    /**
     * Custom renderer for {@link goog.ui.Button}s. This renderer supports the
     * "primary action" style for buttons.
     *
     * @constructor
     * @extends {goog.ui.style.app.ButtonRenderer}
     * @final
     */
    class PrimaryActionButtonRenderer extends goog.ui.style.app.ButtonRenderer {
        /**
         * Custom renderer for {@link goog.ui.Button}s. This renderer supports the
         * "primary action" style for buttons.
         *
         * @constructor
         * @extends {goog.ui.style.app.ButtonRenderer}
         * @final
         */
        constructor();
    
        /** @override */
        getCssClass(): void;
    
        /** @override */
        getIe6ClassCombinations(): void;
    }
}

