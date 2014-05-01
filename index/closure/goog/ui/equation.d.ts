// Generated Wed Apr 30 16:35:11 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/a11y/aria.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/fx.d.ts" />
/// <reference path="../../goog/html.d.ts" />
/// <reference path="../../goog/i18n.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/ui.d.ts" />
/// <reference path="../../goog/uri.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.ui.equation.EquationEditor' {

    /**
     * Constants for event names.
     * @enum {string}
     */
    enum EventType { CHANGE } 
}

declare module 'goog.ui.equation.ImageRenderer' {

    /**
     * The longest equation which may be displayed, in characters.
     * @type {number}
     */
    var MAX_EQUATION_LENGTH: number;

    /**
     * Class to put on our equations IMG elements.
     * @type {string}
     */
    var EE_IMG_CLASS: string;

    /**
     * Non-standard to put on our equations IMG elements. Useful when classes need
     * to be scrubbed from the user-generated HTML, but non-standard attributes
     * can be white-listed.
     *
     * @type {string}
     */
    var EE_IMG_ATTR: string;

    /**
     * Vertical alignment for the equations IMG elements.
     * @type {string}
     */
    var EE_IMG_VERTICAL_ALIGN: string;

    /**
     * The default background color as used in the img url, which is fully
     * transparent white.
     * @type {string}
     */
    var BACKGROUND_COLOR: string;

    /**
     * The default foreground color as used in the img url, which is black.
     * @type {string}
     */
    var FOREGROUND_COLOR: string;

    /**
     * Class to put on IMG elements to keep the resize property bubble from
     * appearing. This is different from PLACEHOLDER_IMG_CLASS because it's
     * reasonable in some cases to be able to resize a placeholder (which should
     * be reflected when the placeholder is replaced with the other content).
     * @type {string}
     */
    var NO_RESIZE_IMG_CLASS: string;

    /**
     * Returns the equation image src url given the equation.
     * @param {string} equation The equation.
     * @return {string} The equation image src url (empty string in case the
     *   equation was empty).
     */
    function getImageUrl(equation: string): string;

    /**
     * Returns the equation string src for given image url.
     * @param {string} imageUrl The image url.
     * @return {string?} The equation string, null if imageUrl cannot be parsed.
     */
    function getEquationFromImageUrl(imageUrl: string): string;

    /**
     * Gets the equation string from the given equation IMG node. Returns empty
     * string if the src attribute of the is not a valid equation url.
     * @param {Element} equationNode The equation IMG element.
     * @return {string} The equation string.
     */
    function getEquationFromImage(equationNode: Element): string;

    /**
     * Checks whether given node is an equation element.
     * @param {Node} node The node to check, must be an Element.
     * @return {boolean} Whether given node is an equation element.
     */
    function isEquationElement(node: Node): boolean;

    /**
     * Returns the html for the html image tag for the given equation.
     * @param {string} equation The equation.
     * @return {string} The html code to embed in the document.
     */
    function getHtml(equation: string): string;

    /**
     * Checks whether equation is too long to be displayed.
     * @param {string} equation The equation to test.
     * @return {boolean} Whether the equation is too long.
     */
    function isEquationTooLong(equation: string): boolean;
}

declare module 'goog.ui.equation.MenuPalette' {

    /**
     * The CSS class name for the palette.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.equation.Palette' {

    /**
     * The type of possible palettes. They are made short to minimize JS size.
     * @enum {string}
     */
    enum Type { MENU, GREEK, SYMBOL, COMPARISON, MATH, ARROW } 

    /**
     * The CSS class name for the palette.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.equation.PaletteEvent' {

    /**
     * The type of events that can be fired on palettes.
     * @enum {string}
     */
    enum Type { ACTION } 
}

declare module 'goog.ui.equation.TexPane' {

    /**
     * The CSS class name for the preview container.
     * @type {string}
     */
    var PREVIEW_CONTAINER_CSS_CLASS: string;

    /**
     * The CSS class name for section titles.
     * @type {string}
     */
    var SECTION_TITLE_CSS_CLASS: string;

    /**
     * The CSS class name for section titles that float left.
     * @type {string}
     */
    var SECTION_TITLE_FLOAT_CSS_CLASS: string;

    /**
     * The CSS id name for the link to "Learn more".
     * @type {string}
     */
    var SECTION_LEARN_MORE_CSS_ID: string;

    /**
     * The CSS class name for the Tex editor.
     * @type {string}
     */
    var TEX_EDIT_CSS_CLASS: string;

    /**
     * The CSS class name for the preview container.
     * @type {string}
     */
    var WARNING_CLASS: string;
}

declare module 'goog.ui.equation' {

    /**
     * Constructs a new arrows palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @extends {goog.ui.equation.Palette}
     * @constructor
     * @final
     */
    class ArrowPalette extends goog.ui.equation.Palette {
        /**
         * Constructs a new arrows palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }

    /**
     * Event fired when equation changes.
     * @constructor
     * @param {boolean} isValid Whether the equation is valid.
     * @extends {goog.events.Event}
     * @final
     */
    class ChangeEvent extends goog.events.Event {
        /**
         * Event fired when equation changes.
         * @constructor
         * @param {boolean} isValid Whether the equation is valid.
         * @extends {goog.events.Event}
         * @final
         */
        constructor(isValid: boolean);
    }

    /**
     * Constructs a new comparison palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @extends {goog.ui.equation.Palette}
     * @constructor
     * @final
     */
    class ComparisonPalette extends goog.ui.equation.Palette {
        /**
         * Constructs a new comparison palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }

    /**
     * An abstract equation editor tab pane.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.Component}
     */
    class EditorPane extends goog.ui.Component {
        /**
         * An abstract equation editor tab pane.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.Component}
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the visibility of this tab pane.
         * @param {boolean} visible Whether this tab should become visible.
         */
        setVisible(visible: boolean): void;
    
        /**
         * Sets the equation to show in this tab pane.
         * @param {string} equation The equation.
         */
        setEquation: any /*missing*/;
    
        /**
         * @return {string} The equation shown in this tab pane.
         */
        getEquation: any /*missing*/;
    
        /**
         * Sets the help link URL to show in this tab pane.
         * @param {string} url The help link URL.
         * @protected
         */
        setHelpUrl(url: string): void;
    
        /**
         * @return {string} The help link URL.
         * @protected
         */
        getHelpUrl(): string;
    
        /**
         * @return {boolean} Whether the equation was modified.
         * @protected
         */
        isModified: any /*missing*/;
    }

    /**
     * User interface for equation editor plugin standalone tests.
     * @constructor
     * @param {string=} opt_equation Encoded equation. If not specified, starts with
     *     an empty equation.
     * @extends {goog.ui.Dialog}
     * @final
     */
    class EquationEditorDialog extends goog.ui.Dialog {
        /**
         * User interface for equation editor plugin standalone tests.
         * @constructor
         * @param {string=} opt_equation Encoded equation. If not specified, starts with
         *     an empty equation.
         * @extends {goog.ui.Dialog}
         * @final
         */
        constructor(opt_equation?: string);
    
        /** @override */
        setVisible(): void;
    
        /**
         * Returns the encoded equation.
         * @return {string} The encoded equation.
         */
        getEquation(): string;
    
        /**
         * Sets the encoded equation.
         * @param {string} equation The encoded equation.
         */
        setEquation(equation: string): void;
    
        /**
         * @return {string} The html code to embed in the document.
         */
        getHtml(): string;
    }

    /**
     * User interface for equation editor plugin.
     * @constructor
     * @param {Object} context The context that this equation editor runs in.
     * @param {goog.dom.DomHelper=} opt_domHelper DomHelper to use.
     * @param {string=} opt_helpUrl Help document URL to use in the "Learn more"
     *     link.
     * @extends {goog.ui.Component}
     * @final
     */
    class EquationEditor extends goog.ui.Component {
        /**
         * User interface for equation editor plugin.
         * @constructor
         * @param {Object} context The context that this equation editor runs in.
         * @param {goog.dom.DomHelper=} opt_domHelper DomHelper to use.
         * @param {string=} opt_helpUrl Help document URL to use in the "Learn more"
         *     link.
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(context: Object, opt_domHelper?: goog.dom.DomHelper, opt_helpUrl?: string);
    
        /** @override */
        createDom(): void;
    
        /**
         * Sets the visibility of the editor.
         * @param {boolean} visible Whether the editor should be visible.
         */
        setVisible(visible: boolean): void;
    
        /** @override */
        decorateInternal(): void;
    
        /**
         * Returns the encoded equation.
         * @return {string} The encoded equation.
         */
        getEquation(): string;
    
        /**
         * @return {string} The html code to embed in the document.
         */
        getHtml(): string;
    
        /**
         * Checks whether the current equation is valid and can be used in a document.
         * @return {boolean} Whether the equation is valid.
         */
        isValid(): boolean;
    
        /**
         * Parse an equation and draw it.
         * Clears any previous displayed equation.
         * @param {string} equation The equation text to parse.
         */
        setEquation(equation: string): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Constructs a new Greek symbols palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @extends {goog.ui.equation.Palette}
     * @constructor
     * @final
     */
    class GreekPalette extends goog.ui.equation.Palette {
        /**
         * Constructs a new Greek symbols palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }

    /**
     * Constructs a new math palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @extends {goog.ui.equation.Palette}
     * @constructor
     * @final
     */
    class MathPalette extends goog.ui.equation.Palette {
        /**
         * Constructs a new math palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }

    /**
     * Constructs a new menu palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @extends {goog.ui.equation.Palette}
     * @constructor
     * @final
     */
    class MenuPalette extends goog.ui.equation.Palette {
        /**
         * Constructs a new menu palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    
        /**
         * Overrides the setVisible method to make menu palette always visible.
         * @param {boolean} visible Whether to show or hide the component.
         * @param {boolean=} opt_force If true, doesn't check whether the component
         *     already has the requested visibility, and doesn't dispatch any events.
         * @return {boolean} Whether the visibility was changed.
         * @override
         */
        setVisible(visible: boolean, opt_force?: boolean): boolean;
    }

    /**
     * The renderer for menu palette.
     * @extends {goog.ui.equation.PaletteRenderer}
     * @constructor
     * @final
     */
    class MenuPaletteRenderer extends goog.ui.equation.PaletteRenderer {
        /**
         * The renderer for menu palette.
         * @extends {goog.ui.equation.PaletteRenderer}
         * @constructor
         * @final
         */
        constructor();
    
        /** @override */
        getCssClass(): void;
    }

    /**
     * Constructs a new palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @param {goog.ui.equation.Palette.Type} type The type of the
     *     palette.
     * @param {number} spriteX Coordinate of first icon in sprite.
     * @param {number} spriteY Coordinate of top of all icons in sprite.
     * @param {number} itemWidth Pixel width of each palette icon.
     * @param {number} itemHeight Pixel height of each palette icon.
     * @param {Array.<string>=} opt_actions An optional action list for palette
     *     elements. The number of actions determine the number of palette
     *     elements.
     * @param {goog.ui.PaletteRenderer=} opt_renderer Optional customized renderer,
     *     defaults to {@link goog.ui.PaletteRenderer}.
     * @extends {goog.ui.Palette}
     * @constructor
     */
    class Palette extends goog.ui.Palette {
        /**
         * Constructs a new palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @param {goog.ui.equation.Palette.Type} type The type of the
         *     palette.
         * @param {number} spriteX Coordinate of first icon in sprite.
         * @param {number} spriteY Coordinate of top of all icons in sprite.
         * @param {number} itemWidth Pixel width of each palette icon.
         * @param {number} itemHeight Pixel height of each palette icon.
         * @param {Array.<string>=} opt_actions An optional action list for palette
         *     elements. The number of actions determine the number of palette
         *     elements.
         * @param {goog.ui.PaletteRenderer=} opt_renderer Optional customized renderer,
         *     defaults to {@link goog.ui.PaletteRenderer}.
         * @extends {goog.ui.Palette}
         * @constructor
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager, type: goog.ui.equation.Palette.Type, spriteX: number, spriteY: number, itemWidth: number, itemHeight: number, opt_actions?: string[], opt_renderer?: goog.ui.PaletteRenderer);
    
        /**
         * Returns the type of the palette.
         * @return {goog.ui.equation.Palette.Type} The type of the palette.
         */
        getType(): goog.ui.equation.Palette.Type;
    
        /**
         * Returns the palette manager.
         * @return {goog.ui.equation.PaletteManager} The palette manager
         *     that manages all the palette.
         */
        getPaletteManager(): goog.ui.equation.PaletteManager;
    
        /**
         * Returns actions for this palette.
         * @return {Array.<string>} The palette actions.
         */
        getActions(): string[];
    
        /**
         * Returns the action for a given index.
         * @param {number} index The index of the action to be retrieved.
         * @return {string?} The action for given index, or {@code null} if action is
         *     not found.
         */
        getAction(index: number): string;
    
        /**
         * Handles mouseup events. Overrides {@link goog.ui.Palette#handleMouseUp}
         * by dispatching a {@link goog.ui.equation.PaletteEvent}.
         * @param {goog.events.Event} e Mouse event to handle.
         * @override
         */
        handleMouseUp(e: goog.events.Event): void;
    
        /**
         * Handles mouse out events. Overrides {@link goog.ui.Palette#handleMouseOut}
         * by deactivate the palette.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @override
         */
        handleMouseOut(e: goog.events.BrowserEvent): void;
    
        /**
         * Handles mouse over events. Overrides {@link goog.ui.Palette#handleMouseOver}
         * by stop deactivating the palette. When mouse leaves the palettes, the
         * palettes will be deactivated after a centain period of time. Reentering the
         * palettes inside this time will stop the timer and cancel the deactivation.
         * @param {goog.events.BrowserEvent} e Mouse event to handle.
         * @override
         */
        handleMouseOver(e: goog.events.BrowserEvent): void;
    }

    /**
     * The event that palettes dispatches.
     * @param {string} type Type of the event.
     * @param {goog.ui.equation.Palette} palette The palette that the
     *     event is fired on.
     * @param {Element=} opt_target The optional target of the event.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class PaletteEvent extends goog.events.Event {
        /**
         * The event that palettes dispatches.
         * @param {string} type Type of the event.
         * @param {goog.ui.equation.Palette} palette The palette that the
         *     event is fired on.
         * @param {Element=} opt_target The optional target of the event.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(type: string, palette: goog.ui.equation.Palette, opt_target?: Element);
    
        /**
         * Returns the palette that this event is fired from.
         * @return {goog.ui.equation.Palette} The palette this event is
         *     fired from.
         */
        getPalette(): goog.ui.equation.Palette;
    }

    /**
     * The renderer for palette.
     * @extends {goog.ui.PaletteRenderer}
     * @constructor
     */
    class PaletteRenderer extends goog.ui.PaletteRenderer {
        /**
         * The renderer for palette.
         * @extends {goog.ui.PaletteRenderer}
         * @constructor
         */
        constructor();
    
        /** @override */
        getCssClass(): void;
    
        /**
         * Returns the CSS class name for the palette item.
         * @return {string} The CSS class name of the palette item.
         */
        getItemCssClass(): string;
    }

    /**
     * Constructs the palette manager that manages all the palettes in Equation
     * Editor.
     * @param {!goog.dom.DomHelper} domHelper The DOM helper to be used for
     *     document interaction.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class PaletteManager extends goog.events.EventTarget {
        /**
         * Constructs the palette manager that manages all the palettes in Equation
         * Editor.
         * @param {!goog.dom.DomHelper} domHelper The DOM helper to be used for
         *     document interaction.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(domHelper: goog.dom.DomHelper);
    
        /**
         * Clears the deactivation timer.  This is used to prevent palette manager
         * deactivation when mouse pointer is moved outside palettes and moved back
         * quickly inside a grace period.
         */
        stopDeactivation(): void;
    
        /**
         * Returns the palette instance of given type.
         * @param {goog.ui.equation.Palette.Type} type The type of palette
         *     to get.
         * @return {!goog.ui.equation.Palette} The palette instance of given
         *     type. A new instance will be created.  If the instance doesn't exist.
         */
        getPalette(type: goog.ui.equation.Palette.Type): goog.ui.equation.Palette;
    
        /**
         * Sets the palette instance of given type to be the active one.
         * @param {goog.ui.equation.Palette.Type} type The type of the
         *     palette to set active.
         * @return {!goog.ui.equation.Palette} The palette instance of given
         *     type. A new instance will be created, if the instance doesn't exist.
         */
        setActive(type: goog.ui.equation.Palette.Type): goog.ui.equation.Palette;
    
        /**
         * Returns the active palette.
         * @return {goog.ui.equation.Palette} The active palette.
         */
        getActive(): goog.ui.equation.Palette;
    
        /**
         * Starts the deactivation of open palette.
         * This method has a slight delay before doing the real deactivation.  This
         * helps prevent sudden disappearing of palettes when user moves mouse outside
         * them just briefly (and maybe accidentally).  If you really want to deactivate
         * the active palette, use {@link #deactivateNow()} instead.
         */
        deactivate(): void;
    
        /**
         * Deactivate the open palette immediately.
         */
        deactivateNow(): void;
    
        /**
         * @return {!goog.dom.DomHelper} This object's DOM helper.
         */
        getDomHelper(): goog.dom.DomHelper;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Constructs a new symbols palette.
     * @param {goog.ui.equation.PaletteManager} paletteManager The
     *     manager of the palette.
     * @extends {goog.ui.equation.Palette}
     * @constructor
     * @final
     */
    class SymbolPalette extends goog.ui.equation.Palette {
        /**
         * Constructs a new symbols palette.
         * @param {goog.ui.equation.PaletteManager} paletteManager The
         *     manager of the palette.
         * @extends {goog.ui.equation.Palette}
         * @constructor
         * @final
         */
        constructor(paletteManager: goog.ui.equation.PaletteManager);
    }

    /**
     * User interface for equation editor plugin.
     * @constructor
     * @param {Object} context The context that this Tex editor runs in.
     * @param {string} helpUrl URL pointing to help documentation.
     * @param {goog.dom.DomHelper=} opt_domHelper DomHelper to use.
     * @extends {goog.ui.Component}
     * @final
     */
    class TexEditor extends goog.ui.Component {
        /**
         * User interface for equation editor plugin.
         * @constructor
         * @param {Object} context The context that this Tex editor runs in.
         * @param {string} helpUrl URL pointing to help documentation.
         * @param {goog.dom.DomHelper=} opt_domHelper DomHelper to use.
         * @extends {goog.ui.Component}
         * @final
         */
        constructor(context: Object, helpUrl: string, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        createDom(): void;
    
        /** @override */
        decorateInternal(): void;
    
        /**
         * Returns the encoded equation.
         * @return {string} The encoded equation.
         */
        getEquation(): string;
    
        /**
         * Parse an equation and draw it.
         * Clears any previous displayed equation.
         * @param {string} equation The equation text to parse.
         */
        setEquation(equation: string): void;
    
        /**
         * @return {string} The html code to embed in the document.
         */
        getHtml(): string;
    
        /**
         * Checks whether the current equation is valid and can be used in a document.
         * @return {boolean} Whether the equation valid.
         */
        isValid(): boolean;
    
        /**
         * Sets the visibility of the editor.
         * @param {boolean} visible Whether the editor should be visible.
         */
        setVisible(visible: boolean): void;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * User interface for TeX equation editor tab pane.
     * @param {Object} context The context this Tex editor pane runs in.
     * @param {string} helpUrl The help link URL.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
     * @constructor
     * @extends {goog.ui.equation.EditorPane}
     * @final
     */
    class TexPane extends goog.ui.equation.EditorPane {
        /**
         * User interface for TeX equation editor tab pane.
         * @param {Object} context The context this Tex editor pane runs in.
         * @param {string} helpUrl The help link URL.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper.
         * @constructor
         * @extends {goog.ui.equation.EditorPane}
         * @final
         */
        constructor(context: Object, helpUrl: string, opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        createDom(): void;
    
        /** @override */
        enterDocument(): void;
    
        /** @override */
        setVisible(): void;
    
        /** @override */
        getEquation(): void;
    
        /** @override */
        setEquation(): void;
    
        /** @override */
        disposeInternal(): void;
    }
}

