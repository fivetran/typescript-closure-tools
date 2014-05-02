// Generated Thu May  1 17:26:01 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../../goog/testing/asserts.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/dom/nodeiterator.d.ts" />
/// <reference path="../../../goog/testing/dom.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/dom/iter.d.ts" />
/// <reference path="../../../goog/editor/node.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/events/eventwrapper.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/actioneventwrapper.d.ts" />
/// <reference path="../../../goog/editor/defines.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../../goog/editor/style.d.ts" />
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
/// <reference path="../../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/dom/rangeendpoint.d.ts" />
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
/// <reference path="../../../goog/editor/command.d.ts" />
/// <reference path="../../../goog/editor/plugin.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/positioning/positioning.d.ts" />
/// <reference path="../../../goog/dom/viewportsizemonitor.d.ts" />
/// <reference path="../../../goog/ui/editor/bubble.d.ts" />
/// <reference path="../../../goog/editor/plugins/abstractbubbleplugin.d.ts" />

declare module goog.testing.editor {

    /**
     * Create a new test controller.
     * @param {Element} root The root editable element.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class TestHelper extends goog.Disposable {
        /**
         * Create a new test controller.
         * @param {Element} root The root editable element.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(root: Element);
    
        /**
         * Selects a new root element.
         * @param {Element} root The root editable element.
         */
        setRoot(root: Element): void;
    
        /**
         * Make the root element editable.  Alse saves its HTML to be restored
         * in tearDown.
         */
        setUpEditableElement(): void;
    
        /**
         * Reset the element previously initialized, restoring its HTML and making it
         * non editable.
         * @suppress {accessControls} Private state of
         *     {@link goog.editor.plugins.AbstractBubblePlugin} is accessed for test
         *     purposes.
         */
        tearDownEditableElement(): void;
    
        /**
         * Assert that the html in 'root' is substantially similar to htmlPattern.
         * This method tests for the same set of styles, and for the same order of
         * nodes.  Breaking whitespace nodes are ignored.  Elements can be annotated
         * with classnames corresponding to keys in goog.userAgent and will be
         * expected to show up in that user agent and expected not to show up in
         * others.
         * @param {string} htmlPattern The pattern to match.
         */
        assertHtmlMatches(htmlPattern: string): void;
    
        /**
         * Finds the first text node descendant of root with the given content.
         * @param {string|RegExp} textOrRegexp The text to find, or a regular
         *     expression to find a match of.
         * @return {Node} The first text node that matches, or null if none is found.
         */
        findTextNode(textOrRegexp: any /*string|RegExp*/): Node;
    
        /**
         * Select from the given from offset in the given from node to the given
         * to offset in the optionally given to node. If nodes are passed in, uses them,
         * otherwise uses findTextNode to find the nodes to select. Selects a caret
         * if opt_to and opt_toOffset are not given.
         * @param {Node|string} from Node or text of the node to start the selection at.
         * @param {number} fromOffset Offset within the above node to start the
         *     selection at.
         * @param {Node|string=} opt_to Node or text of the node to end the selection
         *     at.
         * @param {number=} opt_toOffset Offset within the above node to end the
         *     selection at.
         */
        select(from: any /*Node|string*/, fromOffset: number, opt_to?: any /*Node|string*/, opt_toOffset?: number): void;
    }
}

