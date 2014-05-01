// Generated Wed Apr 30 16:28:11 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/html.d.ts" />
/// <reference path="../goog/i18n.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.soy.data' {

    /**
     * A type of textual content.
     *
     * This is an enum of type Object so that these values are unforgeable.
     *
     * @enum {!Object}
     */
    enum SanitizedContentKind { HTML, JS, JS_STR_CHARS, URI, ATTRIBUTES, CSS, TEXT } 

    /**
     * A string-like object that carries a content-type and a content direction.
     *
     * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
     * Instead, use a trusted, centrally reviewed library as endorsed by your team
     * to generate these objects. Otherwise, you risk accidentally creating
     * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
     * templates.
     *
     * @constructor
     */
    class SanitizedContent {
        /**
         * A string-like object that carries a content-type and a content direction.
         *
         * IMPORTANT! Do not create these directly, nor instantiate the subclasses.
         * Instead, use a trusted, centrally reviewed library as endorsed by your team
         * to generate these objects. Otherwise, you risk accidentally creating
         * SanitizedContent that is attacker-controlled and gets evaluated unescaped in
         * templates.
         *
         * @constructor
         */
        constructor();
    
        /**
         * The context in which this content is safe from XSS attacks.
         * @type {goog.soy.data.SanitizedContentKind}
         */
        contentKind: goog.soy.data.SanitizedContentKind;
    
        /**
         * The content's direction; null if unknown and thus to be estimated when
         * necessary.
         * @type {?goog.i18n.bidi.Dir}
         */
        contentDir: goog.i18n.bidi.Dir;
    
        /**
         * The already-safe content.
         * @type {string}
         */
        content: string;
    
        /** @override */
        toString(): void;
    
        /**
         * Converts sanitized content of kind TEXT or HTML into SafeHtml. HTML content
         * is converted without modification, while text content is HTML-escaped.
         * @return {!goog.html.SafeHtml}
         * @throws {Error} when the content kind is not TEXT or HTML.
         */
        toSafeHtml(): goog.html.SafeHtml;
    }
}

declare module 'goog.soy.Renderer' {

    /**
     * @typedef {Array.<{template: string, data: Object, ijData: Object}>}
     */
    interface SavedTemplateRender extends Array<{ template: string, data: Object, ijData: Object }> { }
}

declare module 'goog.soy' {

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

    /**
     * An interface for a supplier that provides Soy injected data.
     * @interface
     */
    interface InjectedDataSupplier {
        getData(): Object;
    }

    /**
     * Creates a new soy renderer. Note that the renderer will only be
     * guaranteed to work correctly within the document scope provided in
     * the DOM helper.
     *
     * @param {goog.soy.InjectedDataSupplier=} opt_injectedDataSupplier A supplier
     *     that provides an injected data.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper;
     *     defaults to that provided by {@code goog.dom.getDomHelper()}.
     * @constructor
     */
    class Renderer {
        /**
         * Creates a new soy renderer. Note that the renderer will only be
         * guaranteed to work correctly within the document scope provided in
         * the DOM helper.
         *
         * @param {goog.soy.InjectedDataSupplier=} opt_injectedDataSupplier A supplier
         *     that provides an injected data.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper;
         *     defaults to that provided by {@code goog.dom.getDomHelper()}.
         * @constructor
         */
        constructor(opt_injectedDataSupplier?: goog.soy.InjectedDataSupplier, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Renders a Soy template into a single node or a document fragment.
         * Delegates to {@code goog.soy.renderAsFragment}.
         *
         * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!Node} The resulting node or document fragment.
         * @template ARG_TYPES
         */
        renderAsFragment(template: any /*any (null)|(_0: ARG_TYPES, _1: any (null), _2: { [key: string]: any }) => any*/, opt_templateData?: ARG_TYPES): Node;
    
        /**
         * Renders a Soy template into a single node. If the rendered HTML
         * string represents a single node, then that node is returned.
         * Otherwise, a DIV element is returned containing the rendered nodes.
         * Delegates to {@code goog.soy.renderAsElement}.
         *
         * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!Element} Rendered template contents, wrapped in a parent DIV
         *     element if necessary.
         * @template ARG_TYPES
         */
        renderAsElement(template: any /*any (null)|(_0: ARG_TYPES, _1: any (null), _2: { [key: string]: any }) => any*/, opt_templateData?: ARG_TYPES): Element;
    
        /**
         * Renders a Soy template and then set the output string as the
         * innerHTML of the given element. Delegates to {@code goog.soy.renderElement}.
         *
         * @param {Element} element The element whose content we are rendering.
         * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):*} template
         *     The Soy template defining the element's content.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @template ARG_TYPES
         */
        renderElement(element: Element, template: any /*any (null)|(_0: ARG_TYPES, _1: any (null), _2: { [key: string]: any }) => any*/, opt_templateData?: ARG_TYPES): void;
    
        /**
         * Renders a Soy template and returns the output string.
         * If the template is strict, it must be of kind HTML. To render strict
         * templates of other kinds, use {@code renderText} (for {@code kind="text"}) or
         * {@code renderStrict}.
         *
         * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):*} template
         *     The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {string} The return value of rendering the template directly.
         * @template ARG_TYPES
         */
        render(template: any /*any (null)|(_0: ARG_TYPES, _1: any (null), _2: { [key: string]: any }) => any*/, opt_templateData?: ARG_TYPES): string;
    
        /**
         * Renders a strict Soy template of kind="text" and returns the output string.
         * It is an error to use renderText on non-strict templates, or strict templates
         * of kinds other than "text".
         *
         * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):
         *     goog.soy.data.SanitizedContent} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {string} The return value of rendering the template directly.
         * @template ARG_TYPES
         */
        renderText(): void;
    
        /**
         * Renders a strict Soy template and returns the output SanitizedContent object.
         *
         * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):RETURN_TYPE}
         *     template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @param {goog.soy.data.SanitizedContentKind=} opt_kind The output kind to
         *     assert. If null, the template must be of kind="html" (i.e., opt_kind
         *     defaults to goog.soy.data.SanitizedContentKind.HTML).
         * @return {RETURN_TYPE} The SanitizedContent object. This return type is
         *     generic based on the return type of the template, such as
         *     soy.SanitizedHtml.
         * @template ARG_TYPES, RETURN_TYPE
         */
        renderStrict(template: any /*any (null)|(_0: ARG_TYPES, _1: any (null), _2: { [key: string]: any }) => RETURN_TYPE*/, opt_templateData?: ARG_TYPES, opt_kind?: goog.soy.data.SanitizedContentKind): RETURN_TYPE;
    
        /**
         * Renders a strict Soy template of kind="html" and returns the result as
         * a goog.html.SafeHtml object.
         *
         * Rendering a template that is not a strict template of kind="html" results in
         * a runtime error.
         *
         * @param {null|function(ARG_TYPES, null=, Object.<string, *>=):
         *     goog.soy.data.SanitizedContent} template The Soy template to render.
         * @param {ARG_TYPES=} opt_templateData The data for the template.
         * @return {!goog.html.SafeHtml}
         * @template ARG_TYPES
         */
        renderSafeHtml(): void;
    
        /**
         * @return {!goog.soy.Renderer.SavedTemplateRender} Saved template data for
         *     the renders that have happened so far.
         */
        getSavedTemplateRenders(): goog.soy.Renderer.SavedTemplateRender;
    
        /**
         * Observes rendering of templates by this renderer.
         * @param {Node=} opt_node Relevant node, if available. The node may or may
         *     not be in the document, depending on whether Soy is creating an element
         *     or writing into an existing one.
         * @protected
         */
        handleRender: any /*missing*/;
    }
}

