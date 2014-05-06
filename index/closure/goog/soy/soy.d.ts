/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/string/typedstring.d.ts" />
/// <reference path="../../../closure/goog/string/const.d.ts" />
/// <reference path="../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../closure/goog/html/safeurl.d.ts" />
/// <reference path="../../../closure/goog/html/safestyle.d.ts" />
/// <reference path="../../../closure/goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/html/safehtml.d.ts" />
/// <reference path="../../../closure/goog/html/uncheckedconversions.d.ts" />
/// <reference path="../../../closure/goog/soy/data.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />

declare module goog.soy {

    /**
     * Renders a Soy template and then set the output string as
     * the innerHTML of an element. It is recommended to use this helper function
     * instead of directly setting innerHTML in your hand-written code, so that it
     * will be easier to audit the code for cross-site scripting vulnerabilities.
     *
     * @param {Element} element The element whose content we are rendering into.
     * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):*} template
     *     The Soy template defining the element's content.
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @template ARG_TYPES
     */
    function renderElement<ARG_TYPES>(element: Element, template: any /*any (null)|(_0: ARG_TYPES, _1: any (null), _2: { [key: string]: any }) => any*/, opt_templateData?: ARG_TYPES, opt_injectedData?: Object): void;

    /**
     * Renders a Soy template into a single node or a document
     * fragment. If the rendered HTML string represents a single node, then that
     * node is returned (note that this is *not* a fragment, despite them name of
     * the method). Otherwise a document fragment is returned containing the
     * rendered nodes.
     *
     * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):*} template
     *     The Soy template defining the element's content.
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper used to
     *     create DOM nodes; defaults to {@code goog.dom.getDomHelper}.
     * @return {!Node} The resulting node or document fragment.
     * @template ARG_TYPES
     */
    function renderAsFragment<ARG_TYPES>(template: any /*any (null)|(_0: ARG_TYPES, _1: any (null), _2: { [key: string]: any }) => any*/, opt_templateData?: ARG_TYPES, opt_injectedData?: Object, opt_domHelper?: goog.dom.DomHelper): Node;

    /**
     * Renders a Soy template into a single node. If the rendered
     * HTML string represents a single node, then that node is returned. Otherwise,
     * a DIV element is returned containing the rendered nodes.
     *
     * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):*} template
     *     The Soy template defining the element's content.
     * @param {ARG_TYPES=} opt_templateData The data for the template.
     * @param {Object=} opt_injectedData The injected data for the template.
     * @param {goog.dom.DomHelper=} opt_domHelper The DOM helper used to
     *     create DOM nodes; defaults to {@code goog.dom.getDomHelper}.
     * @return {!Element} Rendered template contents, wrapped in a parent DIV
     *     element if necessary.
     * @template ARG_TYPES
     */
    function renderAsElement<ARG_TYPES>(template: any /*any (null)|(_0: ARG_TYPES, _1: any (null), _2: { [key: string]: any }) => any*/, opt_templateData?: ARG_TYPES, opt_injectedData?: Object, opt_domHelper?: goog.dom.DomHelper): Element;
}

