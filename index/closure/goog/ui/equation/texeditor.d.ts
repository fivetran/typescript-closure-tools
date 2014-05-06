/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/imagerenderer.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/ui/selectionmodel.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../../closure/goog/ui/paletterenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/control.d.ts" />
/// <reference path="../../../../closure/goog/ui/palette.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/palette.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/dom/selection.d.ts" />
/// <reference path="../../../../closure/goog/events/inputhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/changeevent.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/editorpane.d.ts" />
/// <reference path="../../../../closure/goog/ui/equation/texpane.d.ts" />

declare module goog.ui.equation {

    /**
     * User interface for equation editor plugin.
     * @constructor
     * @param {Object} context The context that this Tex editor runs in.
     * @param {string} helpUrl URL pointing to help documentation.
     * @param {goog.dom.DomHelper=} opt_domHelper DomHelper to use.
     * @extends {goog.ui.Component}
     * @final
     */
    class TexEditor extends goog.ui._Component {
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
    }
}

