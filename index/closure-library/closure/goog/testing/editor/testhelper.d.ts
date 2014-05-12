/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../disposable/disposable.d.ts" />

declare module goog.testing.editor {

    class TestHelper extends TestHelper.__Class { }
    module TestHelper {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
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
            findTextNode(textOrRegexp: string): Node;
            /**
             * Finds the first text node descendant of root with the given content.
             * @param {string|RegExp} textOrRegexp The text to find, or a regular
             *     expression to find a match of.
             * @return {Node} The first text node that matches, or null if none is found.
             */
            findTextNode(textOrRegexp: RegExp): Node;
    
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
            select(from: Node, fromOffset: number, opt_to?: Node, opt_toOffset?: number): void;
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
            select(from: Node, fromOffset: number, opt_to?: string, opt_toOffset?: number): void;
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
            select(from: string, fromOffset: number, opt_to?: Node, opt_toOffset?: number): void;
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
            select(from: string, fromOffset: number, opt_to?: string, opt_toOffset?: number): void;
        }
    }
}
