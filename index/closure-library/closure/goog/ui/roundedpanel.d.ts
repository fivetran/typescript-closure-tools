/// <reference path="../../../globals.d.ts" />
/// <reference path="./component.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class BaseRoundedPanel extends BaseRoundedPanel.__Class { }
    module BaseRoundedPanel {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Component.__Class {
    
            /**
             * Base class for the hierarchy of RoundedPanel classes. Do not
             * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
             * The HTML structure for the RoundedPanel is:
             * <pre>
             * - div (Contains the background and content. Class name: goog-roundedpanel)
             *   - div (Contains the background/rounded corners. Class name:
             *       goog-roundedpanel-bg)
             *   - div (Contains the content. Class name: goog-roundedpanel-content)
             * </pre>
             * @param {number} radius The radius of the rounded corner(s), in pixels.
             * @param {number} borderWidth The thickness of the border, in pixels.
             * @param {string} borderColor The border color of the panel.
             * @param {string=} opt_backgroundColor The background color of the panel.
             * @param {number=} opt_corners The corners of the panel to be rounded. Any
             *     corners not specified will be rendered as square corners. Will default
             *     to all square corners if not specified.
             * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
             *     document we want to render in.
             * @extends {goog.ui.Component}
             * @constructor
             */
            constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
        }
    }

    class CssRoundedPanel extends CssRoundedPanel.__Class { }
    module CssRoundedPanel {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.BaseRoundedPanel.__Class {
    
            /**
             * RoundedPanel class specifically for browsers that support CSS attributes
             * for elements with rounded borders (ex. Safari 3.0+, Firefox 3.0+). Do not
             * instantiate directly. Instead, call goog.ui.RoundedPanel.create().
             * @param {number} radius The radius of the rounded corner(s), in pixels.
             * @param {number} borderWidth The thickness of the border, in pixels.
             * @param {string} borderColor The border color of the panel.
             * @param {string=} opt_backgroundColor The background color of the panel.
             * @param {number=} opt_corners The corners of the panel to be rounded. Any
             *     corners not specified will be rendered as square corners. Will
             *     default to all square corners if not specified.
             * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
             *     document we want to render in.
             * @extends {goog.ui.BaseRoundedPanel}
             * @constructor
             * @final
             */
            constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
        }
    }

    class GraphicsRoundedPanel extends GraphicsRoundedPanel.__Class { }
    module GraphicsRoundedPanel {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.BaseRoundedPanel.__Class {
    
            /**
             * RoundedPanel class that uses goog.graphics to create the rounded corners.
             * Do not instantiate directly. Instead, call goog.ui.RoundedPanel.create().
             * @param {number} radius The radius of the rounded corner(s), in pixels.
             * @param {number} borderWidth The thickness of the border, in pixels.
             * @param {string} borderColor The border color of the panel.
             * @param {string=} opt_backgroundColor The background color of the panel.
             * @param {number=} opt_corners The corners of the panel to be rounded. Any
             *     corners not specified will be rendered as square corners. Will
             *     default to all square corners if not specified.
             * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
             *     document we want to render in.
             * @extends {goog.ui.BaseRoundedPanel}
             * @constructor
             * @final
             */
            constructor(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}

declare module goog.ui.RoundedPanel {

    /**
     * Factory method that returns an instance of a BaseRoundedPanel.
     * @param {number} radius The radius of the rounded corner(s), in pixels.
     * @param {number} borderWidth The thickness of the border, in pixels.
     * @param {string} borderColor The border color of the panel.
     * @param {string=} opt_backgroundColor The background color of the panel.
     * @param {number=} opt_corners The corners of the panel to be rounded. Any
     *     corners not specified will be rendered as square corners. Will default
     *     to all square corners if not specified.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper object for the
     *     document we want to render in.
     * @return {!goog.ui.BaseRoundedPanel} An instance of a
     *     goog.ui.BaseRoundedPanel subclass.
     */
    function create(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper): goog.ui.BaseRoundedPanel;

    /**
     * Enum for specifying which corners to render.
     * @enum {number}
     */
    enum Corner { NONE, BOTTOM_LEFT, TOP_LEFT, LEFT, TOP_RIGHT, TOP, BOTTOM_RIGHT, BOTTOM, RIGHT, ALL } 

    /**
     * CSS class name suffixes for the elements comprising the RoundedPanel.
     * @enum {string}
     * @private
     */
    enum Classes_ { BACKGROUND, PANEL, CONTENT } 
}
