/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/graphics/path.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/graphics/stroke.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/graphics/fill.d.ts" />
/// <reference path="../../../closure/goog/graphics/solidfill.d.ts" />
/// <reference path="../../../closure/goog/graphics/affinetransform.d.ts" />
/// <reference path="../../../closure/goog/graphics/element.d.ts" />
/// <reference path="../../../closure/goog/graphics/strokeandfillelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/rectelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/pathelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/groupelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/textelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/ellipseelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/imageelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/svgelement.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/graphics/abstractgraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/lineargradient.d.ts" />
/// <reference path="../../../closure/goog/graphics/svggraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/vmlelement.d.ts" />
/// <reference path="../../../closure/goog/graphics/vmlgraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/canvaselement.d.ts" />
/// <reference path="../../../closure/goog/graphics/canvasgraphics.d.ts" />
/// <reference path="../../../closure/goog/graphics/graphics.d.ts" />

declare module goog.ui {

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
    class BaseRoundedPanel extends goog.ui._Component {
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
    class CssRoundedPanel extends goog.ui.BaseRoundedPanel {
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
    class GraphicsRoundedPanel extends goog.ui.BaseRoundedPanel {
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
     * @return {goog.ui.BaseRoundedPanel} An instance of a
     *     goog.ui.BaseRoundedPanel subclass.
     */
    function create(radius: number, borderWidth: number, borderColor: string, opt_backgroundColor?: string, opt_corners?: number, opt_domHelper?: goog.dom.DomHelper): goog.ui.BaseRoundedPanel;

    /**
     * Enum for specifying which corners to render.
     * @enum {number}
     */
    enum Corner { NONE, BOTTOM_LEFT, TOP_LEFT, LEFT, TOP_RIGHT, TOP, BOTTOM_RIGHT, BOTTOM, RIGHT, ALL } 
}

