// Generated Wed Apr 30 16:28:34 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/html.d.ts" />
/// <reference path="../goog/i18n.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/timer.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.dom' {

    /**
     * Types of ranges.
     * @enum {string}
     */
    enum RangeType { TEXT, CONTROL, MULTI } 

    /**
     * Enum of browser capabilities.
     * @enum {boolean}
     */
    enum BrowserFeature { CAN_ADD_NAME_OR_TYPE_ATTRIBUTES, CAN_USE_CHILDREN_ATTRIBUTE, CAN_USE_INNER_TEXT, CAN_USE_PARENT_ELEMENT_PROPERTY, INNER_HTML_NEEDS_SCOPED_ELEMENT } 

    /**
     * Gets the DomHelper object for the document where the element resides.
     * @param {(Node|Window)=} opt_element If present, gets the DomHelper for this
     *     element.
     * @return {!goog.dom.DomHelper} The DomHelper.
     */
    function getDomHelper(opt_element?: any /*Node|Window*/): goog.dom.DomHelper;

    /**
     * Gets the document object being used by the dom library.
     * @return {!Document} Document object.
     */
    function getDocument(): Document;

    /**
     * Gets an element from the current document by element id.
     *
     * If an Element is passed in, it is returned.
     *
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The element with the given ID, or the node passed in.
     */
    function getElement(element: any /*string|Element*/): Element;

    /**
     * Gets an element by id, asserting that the element is found.
     *
     * This is used when an element is expected to exist, and should fail with
     * an assertion error if it does not (if assertions are enabled).
     *
     * @param {string} id Element ID.
     * @return {!Element} The element with the given ID, if it exists.
     */
    function getRequiredElement(id: string): Element;

    /**
     * Alias for getElement.
     * @param {string|Element} element Element ID or a DOM node.
     * @return {Element} The element with the given ID, or the node passed in.
     * @deprecated Use {@link goog.dom.getElement} instead.
     */
    var $: any /*missing*/;

    /**
     * Looks up elements by both tag and class name, using browser native functions
     * ({@code querySelectorAll}, {@code getElementsByTagName} or
     * {@code getElementsByClassName}) where possible. This function
     * is a useful, if limited, way of collecting a list of DOM elements
     * with certain characteristics.  {@code goog.dom.query} offers a
     * more powerful and general solution which allows matching on CSS3
     * selector expressions, but at increased cost in code size. If all you
     * need is particular tags belonging to a single class, this function
     * is fast and sleek.
     *
     * Note that tag names are case sensitive in the SVG namespace, and this
     * function converts opt_tag to uppercase for comparisons. For queries in the
     * SVG namespace you should use querySelector or querySelectorAll instead.
     * https://bugzilla.mozilla.org/show_bug.cgi?id=963870
     * https://bugs.webkit.org/show_bug.cgi?id=83438
     *
     * @see {goog.dom.query}
     *
     * @param {?string=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return { {length: number} } Array-like list of elements (only a length
     *     property and numerical indices are guaranteed to exist).
     */
    function getElementsByTagNameAndClass(opt_tag?: string, opt_class?: string, opt_el?: any /*Document|Element*/): { length: number };

    /**
     * Returns a static, array-like list of the elements with the provided
     * className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {(Document|Element)=} opt_el Optional element to look in.
     * @return { {length: number} } The items found with the class name provided.
     */
    function getElementsByClass(className: string, opt_el?: any /*Document|Element*/): { length: number };

    /**
     * Returns the first element with the provided className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {Element|Document=} opt_el Optional element to look in.
     * @return {Element} The first item with the class name provided.
     */
    function getElementByClass(className: string, opt_el?: any /*Element|Document*/): Element;

    /**
     * Ensures an element with the given className exists, and then returns the
     * first element with the provided className.
     * @see {goog.dom.query}
     * @param {string} className the name of the class to look for.
     * @param {!Element|!Document=} opt_root Optional element or document to look
     *     in.
     * @return {!Element} The first item with the class name provided.
     * @throws {goog.asserts.AssertionError} Thrown if no element is found.
     */
    function getRequiredElementByClass(className: string, opt_root?: any /*Element|Document*/): Element;

    /**
     * Alias for {@code getElementsByTagNameAndClass}.
     * @param {?string=} opt_tag Element tag name.
     * @param {?string=} opt_class Optional class name.
     * @param {Element=} opt_el Optional element to look in.
     * @return { {length: number} } Array-like list of elements (only a length
     *     property and numerical indices are guaranteed to exist).
     * @deprecated Use {@link goog.dom.getElementsByTagNameAndClass} instead.
     */
    var $$: any /*missing*/;

    /**
     * Sets multiple properties on a node.
     * @param {Element} element DOM node to set properties on.
     * @param {Object} properties Hash of property:value pairs.
     */
    function setProperties(element: Element, properties: Object): void;

    /**
     * Gets the dimensions of the viewport.
     *
     * Gecko Standards mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of body element.
     *
     * docEl.clientHeight Height of viewport excluding scrollbar.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of document.
     *
     * Gecko Backwards compatible mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight Height of document.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * IE6/7 Standards mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Undefined.
     * body.clientWidth   Width of body element.
     *
     * docEl.clientHeight Height of viewport excluding scrollbar.
     * win.innerHeight    Undefined.
     * body.clientHeight  Height of document element.
     *
     * IE5 + IE6/7 Backwards compatible mode:
     * docEl.clientWidth  0.
     * win.innerWidth     Undefined.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight 0.
     * win.innerHeight    Undefined.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * Opera 9 Standards and backwards compatible mode:
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * win.innerWidth     Width of viewport including scrollbar.
     * body.clientWidth   Width of viewport excluding scrollbar.
     *
     * docEl.clientHeight Height of document.
     * win.innerHeight    Height of viewport including scrollbar.
     * body.clientHeight  Height of viewport excluding scrollbar.
     *
     * WebKit:
     * Safari 2
     * docEl.clientHeight Same as scrollHeight.
     * docEl.clientWidth  Same as innerWidth.
     * win.innerWidth     Width of viewport excluding scrollbar.
     * win.innerHeight    Height of the viewport including scrollbar.
     * frame.innerHeight  Height of the viewport exluding scrollbar.
     *
     * Safari 3 (tested in 522)
     *
     * docEl.clientWidth  Width of viewport excluding scrollbar.
     * docEl.clientHeight Height of viewport excluding scrollbar in strict mode.
     * body.clientHeight  Height of viewport excluding scrollbar in quirks mode.
     *
     * @param {Window=} opt_window Optional window element to test.
     * @return {!goog.math.Size} Object with values 'width' and 'height'.
     */
    function getViewportSize(opt_window?: Window): goog.math.Size;

    /**
     * Calculates the height of the document.
     *
     * @return {number} The height of the current document.
     */
    function getDocumentHeight(): number;

    /**
     * Gets the page scroll distance as a coordinate object.
     *
     * @param {Window=} opt_window Optional window element to test.
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     * @deprecated Use {@link goog.dom.getDocumentScroll} instead.
     */
    function getPageScroll(opt_window?: Window): goog.math.Coordinate;

    /**
     * Gets the document scroll distance as a coordinate object.
     *
     * @return {!goog.math.Coordinate} Object with values 'x' and 'y'.
     */
    function getDocumentScroll(): goog.math.Coordinate;

    /**
     * Gets the document scroll element.
     * @return {Element} Scrolling element.
     */
    function getDocumentScrollElement(): Element;

    /**
     * Gets the window object associated with the given document.
     *
     * @param {Document=} opt_doc  Document object to get window for.
     * @return {!Window} The window associated with the given document.
     */
    function getWindow(opt_doc?: Document): Window;

    /**
     * Returns a dom node with a set of attributes.  This function accepts varargs
     * for subsequent nodes to be added.  Subsequent nodes will be added to the
     * first node as childNodes.
     *
     * So:
     * <code>createDom('div', null, createDom('p'), createDom('p'));</code>
     * would return a div with two child paragraphs
     *
     * @param {string} tagName Tag to create.
     * @param {(Object|Array.<string>|string)=} opt_attributes If object, then a map
     *     of name-value pairs for attributes. If a string, then this is the
     *     className of the new element. If an array, the elements will be joined
     *     together as the className of the new element.
     * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
     *     strings for text nodes. If one of the var_args is an array or NodeList,i
     *     its elements will be added as childNodes instead.
     * @return {!Element} Reference to a DOM node.
     */
    function createDom(tagName: string, opt_attributes?: any /*Object|string[]|string*/, ...var_args: any /*Object|string|any[]|NodeList*/[]): Element;

    /**
     * Alias for {@code createDom}.
     * @param {string} tagName Tag to create.
     * @param {(string|Object)=} opt_attributes If object, then a map of name-value
     *     pairs for attributes. If a string, then this is the className of the new
     *     element.
     * @param {...(Object|string|Array|NodeList)} var_args Further DOM nodes or
     *     strings for text nodes. If one of the var_args is an array, its
     *     children will be added as childNodes instead.
     * @return {!Element} Reference to a DOM node.
     * @deprecated Use {@link goog.dom.createDom} instead.
     */
    var $dom: any /*missing*/;

    /**
     * Creates a new element.
     * @param {string} name Tag name.
     * @return {!Element} The new element.
     */
    function createElement(name: string): Element;

    /**
     * Creates a new text node.
     * @param {number|string} content Content.
     * @return {!Text} The new text node.
     */
    function createTextNode(content: any /*number|string*/): Text;

    /**
     * Create a table.
     * @param {number} rows The number of rows in the table.  Must be >= 1.
     * @param {number} columns The number of columns in the table.  Must be >= 1.
     * @param {boolean=} opt_fillWithNbsp If true, fills table entries with nsbps.
     * @return {!Element} The created table.
     */
    function createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean): Element;

    /**
     * Converts an HTML string into a document fragment. The string must be
     * sanitized in order to avoid cross-site scripting. For example
     * {@code goog.dom.htmlToDocumentFragment('&lt;img src=x onerror=alert(0)&gt;')}
     * triggers an alert in all browsers, even if the returned document fragment
     * is thrown away immediately.
     *
     * @param {string} htmlString The HTML string to convert.
     * @return {!Node} The resulting document fragment.
     */
    function htmlToDocumentFragment(htmlString: string): Node;

    /**
     * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
     * mode, false otherwise.
     * @return {boolean} True if in CSS1-compatible mode.
     */
    function isCss1CompatMode(): boolean;

    /**
     * Determines if the given node can contain children, intended to be used for
     * HTML generation.
     *
     * IE natively supports node.canHaveChildren but has inconsistent behavior.
     * Prior to IE8 the base tag allows children and in IE9 all nodes return true
     * for canHaveChildren.
     *
     * In practice all non-IE browsers allow you to add children to any node, but
     * the behavior is inconsistent:
     *
     * <pre>
     *   var a = document.createElement('br');
     *   a.appendChild(document.createTextNode('foo'));
     *   a.appendChild(document.createTextNode('bar'));
     *   console.log(a.childNodes.length);  // 2
     *   console.log(a.innerHTML);  // Chrome: "", IE9: "foobar", FF3.5: "foobar"
     * </pre>
     *
     * For more information, see:
     * http://dev.w3.org/html5/markup/syntax.html#syntax-elements
     *
     * TODO(user): Rename shouldAllowChildren() ?
     *
     * @param {Node} node The node to check.
     * @return {boolean} Whether the node can contain children.
     */
    function canHaveChildren(node: Node): boolean;

    /**
     * Appends a child to a node.
     * @param {Node} parent Parent.
     * @param {Node} child Child.
     */
    function appendChild(parent: Node, child: Node): void;

    /**
     * Appends a node with text or other nodes.
     * @param {!Node} parent The node to append nodes to.
     * @param {...goog.dom.Appendable} var_args The things to append to the node.
     *     If this is a Node it is appended as is.
     *     If this is a string then a text node is appended.
     *     If this is an array like object then fields 0 to length - 1 are appended.
     */
    function append(parent: Node, ...var_args: goog.dom.Appendable[]): void;

    /**
     * Removes all the child nodes on a DOM node.
     * @param {Node} node Node to remove children from.
     */
    function removeChildren(node: Node): void;

    /**
     * Inserts a new node before an existing reference node (i.e. as the previous
     * sibling). If the reference node has no parent, then does nothing.
     * @param {Node} newNode Node to insert.
     * @param {Node} refNode Reference node to insert before.
     */
    function insertSiblingBefore(newNode: Node, refNode: Node): void;

    /**
     * Inserts a new node after an existing reference node (i.e. as the next
     * sibling). If the reference node has no parent, then does nothing.
     * @param {Node} newNode Node to insert.
     * @param {Node} refNode Reference node to insert after.
     */
    function insertSiblingAfter(newNode: Node, refNode: Node): void;

    /**
     * Insert a child at a given index. If index is larger than the number of child
     * nodes that the parent currently has, the node is inserted as the last child
     * node.
     * @param {Element} parent The element into which to insert the child.
     * @param {Node} child The element to insert.
     * @param {number} index The index at which to insert the new child node. Must
     *     not be negative.
     */
    function insertChildAt(parent: Element, child: Node, index: number): void;

    /**
     * Removes a node from its parent.
     * @param {Node} node The node to remove.
     * @return {Node} The node removed if removed; else, null.
     */
    function removeNode(node: Node): Node;

    /**
     * Replaces a node in the DOM tree. Will do nothing if {@code oldNode} has no
     * parent.
     * @param {Node} newNode Node to insert.
     * @param {Node} oldNode Node to replace.
     */
    function replaceNode(newNode: Node, oldNode: Node): void;

    /**
     * Flattens an element. That is, removes it and replace it with its children.
     * Does nothing if the element is not in the document.
     * @param {Element} element The element to flatten.
     * @return {Element|undefined} The original element, detached from the document
     *     tree, sans children; or undefined, if the element was not in the document
     *     to begin with.
     */
    function flattenElement(element: Element): any /*Element|any (undefined)*/;

    /**
     * Returns an array containing just the element children of the given element.
     * @param {Element} element The element whose element children we want.
     * @return {!(Array|NodeList)} An array or array-like list of just the element
     *     children of the given element.
     */
    function getChildren(element: Element): any /*any[]|NodeList*/;

    /**
     * Returns the first child node that is an element.
     * @param {Node} node The node to get the first child element of.
     * @return {Element} The first child node of {@code node} that is an element.
     */
    function getFirstElementChild(node: Node): Element;

    /**
     * Returns the last child node that is an element.
     * @param {Node} node The node to get the last child element of.
     * @return {Element} The last child node of {@code node} that is an element.
     */
    function getLastElementChild(node: Node): Element;

    /**
     * Returns the first next sibling that is an element.
     * @param {Node} node The node to get the next sibling element of.
     * @return {Element} The next sibling of {@code node} that is an element.
     */
    function getNextElementSibling(node: Node): Element;

    /**
     * Returns the first previous sibling that is an element.
     * @param {Node} node The node to get the previous sibling element of.
     * @return {Element} The first previous sibling of {@code node} that is
     *     an element.
     */
    function getPreviousElementSibling(node: Node): Element;

    /**
     * Returns the next node in source order from the given node.
     * @param {Node} node The node.
     * @return {Node} The next node in the DOM tree, or null if this was the last
     *     node.
     */
    function getNextNode(node: Node): Node;

    /**
     * Returns the previous node in source order from the given node.
     * @param {Node} node The node.
     * @return {Node} The previous node in the DOM tree, or null if this was the
     *     first node.
     */
    function getPreviousNode(node: Node): Node;

    /**
     * Whether the object looks like a DOM node.
     * @param {?} obj The object being tested for node likeness.
     * @return {boolean} Whether the object looks like a DOM node.
     */
    function isNodeLike(obj: any): boolean;

    /**
     * Whether the object looks like an Element.
     * @param {?} obj The object being tested for Element likeness.
     * @return {boolean} Whether the object looks like an Element.
     */
    function isElement(obj: any): boolean;

    /**
     * Returns true if the specified value is a Window object. This includes the
     * global window for HTML pages, and iframe windows.
     * @param {?} obj Variable to test.
     * @return {boolean} Whether the variable is a window.
     */
    function isWindow(obj: any): boolean;

    /**
     * Returns an element's parent, if it's an Element.
     * @param {Element} element The DOM element.
     * @return {Element} The parent, or null if not an Element.
     */
    function getParentElement(element: Element): Element;

    /**
     * Whether a node contains another node.
     * @param {Node} parent The node that should contain the other node.
     * @param {Node} descendant The node to test presence of.
     * @return {boolean} Whether the parent node contains the descendent node.
     */
    function contains(parent: Node, descendant: Node): boolean;

    /**
     * Compares the document order of two nodes, returning 0 if they are the same
     * node, a negative number if node1 is before node2, and a positive number if
     * node2 is before node1.  Note that we compare the order the tags appear in the
     * document so in the tree <b><i>text</i></b> the B node is considered to be
     * before the I node.
     *
     * @param {Node} node1 The first node to compare.
     * @param {Node} node2 The second node to compare.
     * @return {number} 0 if the nodes are the same node, a negative number if node1
     *     is before node2, and a positive number if node2 is before node1.
     */
    function compareNodeOrder(node1: Node, node2: Node): number;

    /**
     * Find the deepest common ancestor of the given nodes.
     * @param {...Node} var_args The nodes to find a common ancestor of.
     * @return {Node} The common ancestor of the nodes, or null if there is none.
     *     null will only be returned if two or more of the nodes are from different
     *     documents.
     */
    function findCommonAncestor(...var_args: Node[]): Node;

    /**
     * Returns the owner document for a node.
     * @param {Node|Window} node The node to get the document for.
     * @return {!Document} The document owning the node.
     */
    function getOwnerDocument(node: any /*Node|Window*/): Document;

    /**
     * Cross-browser function for getting the document element of a frame or iframe.
     * @param {Element} frame Frame element.
     * @return {!Document} The frame content document.
     */
    function getFrameContentDocument(frame: Element): Document;

    /**
     * Cross-browser function for getting the window of a frame or iframe.
     * @param {Element} frame Frame element.
     * @return {Window} The window associated with the given frame.
     */
    function getFrameContentWindow(frame: Element): Window;

    /**
     * Sets the text content of a node, with cross-browser support.
     * @param {Node} node The node to change the text content of.
     * @param {string|number} text The value that should replace the node's content.
     */
    function setTextContent(node: Node, text: any /*string|number*/): void;

    /**
     * Gets the outerHTML of a node, which islike innerHTML, except that it
     * actually contains the HTML of the node itself.
     * @param {Element} element The element to get the HTML of.
     * @return {string} The outerHTML of the given element.
     */
    function getOuterHtml(element: Element): string;

    /**
     * Finds the first descendant node that matches the filter function, using
     * a depth first search. This function offers the most general purpose way
     * of finding a matching element. You may also wish to consider
     * {@code goog.dom.query} which can express many matching criteria using
     * CSS selector expressions. These expressions often result in a more
     * compact representation of the desired result.
     * @see goog.dom.query
     *
     * @param {Node} root The root of the tree to search.
     * @param {function(Node) : boolean} p The filter function.
     * @return {Node|undefined} The found node or undefined if none is found.
     */
    function findNode(root: Node, p: (_0: Node) => boolean): any /*Node|any (undefined)*/;

    /**
     * Finds all the descendant nodes that match the filter function, using a
     * a depth first search. This function offers the most general-purpose way
     * of finding a set of matching elements. You may also wish to consider
     * {@code goog.dom.query} which can express many matching criteria using
     * CSS selector expressions. These expressions often result in a more
     * compact representation of the desired result.
    
     * @param {Node} root The root of the tree to search.
     * @param {function(Node) : boolean} p The filter function.
     * @return {!Array.<!Node>} The found nodes or an empty array if none are found.
     */
    function findNodes(root: Node, p: (_0: Node) => boolean): Node[];

    /**
     * Returns true if the element has a tab index that allows it to receive
     * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
     * natively support keyboard focus, even if they have no tab index.
     * @param {Element} element Element to check.
     * @return {boolean} Whether the element has a tab index that allows keyboard
     *     focus.
     * @see http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
     */
    function isFocusableTabIndex(element: Element): boolean;

    /**
     * Enables or disables keyboard focus support on the element via its tab index.
     * Only elements for which {@link goog.dom.isFocusableTabIndex} returns true
     * (or elements that natively support keyboard focus, like form elements) can
     * receive keyboard focus.  See http://go/tabindex for more info.
     * @param {Element} element Element whose tab index is to be changed.
     * @param {boolean} enable Whether to set or remove a tab index on the element
     *     that supports keyboard focus.
     */
    function setFocusableTabIndex(element: Element, enable: boolean): void;

    /**
     * Returns true if the element can be focused, i.e. it has a tab index that
     * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
     * that natively supports keyboard focus.
     * @param {Element} element Element to check.
     * @return {boolean} Whether the element allows keyboard focus.
     */
    function isFocusable(element: Element): boolean;

    /**
     * Returns the text content of the current node, without markup and invisible
     * symbols. New lines are stripped and whitespace is collapsed,
     * such that each character would be visible.
     *
     * In browsers that support it, innerText is used.  Other browsers attempt to
     * simulate it via node traversal.  Line breaks are canonicalized in IE.
     *
     * @param {Node} node The node from which we are getting content.
     * @return {string} The text content.
     */
    function getTextContent(node: Node): string;

    /**
     * Returns the text content of the current node, without markup.
     *
     * Unlike {@code getTextContent} this method does not collapse whitespaces
     * or normalize lines breaks.
     *
     * @param {Node} node The node from which we are getting content.
     * @return {string} The raw text content.
     */
    function getRawTextContent(node: Node): string;

    /**
     * Returns the text length of the text contained in a node, without markup. This
     * is equivalent to the selection length if the node was selected, or the number
     * of cursor movements to traverse the node. Images & BRs take one space.  New
     * lines are ignored.
     *
     * @param {Node} node The node whose text content length is being calculated.
     * @return {number} The length of {@code node}'s text content.
     */
    function getNodeTextLength(node: Node): number;

    /**
     * Returns the text offset of a node relative to one of its ancestors. The text
     * length is the same as the length calculated by goog.dom.getNodeTextLength.
     *
     * @param {Node} node The node whose offset is being calculated.
     * @param {Node=} opt_offsetParent The node relative to which the offset will
     *     be calculated. Defaults to the node's owner document's body.
     * @return {number} The text offset.
     */
    function getNodeTextOffset(node: Node, opt_offsetParent?: Node): number;

    /**
     * Returns the node at a given offset in a parent node.  If an object is
     * provided for the optional third parameter, the node and the remainder of the
     * offset will stored as properties of this object.
     * @param {Node} parent The parent node.
     * @param {number} offset The offset into the parent node.
     * @param {Object=} opt_result Object to be used to store the return value. The
     *     return value will be stored in the form {node: Node, remainder: number}
     *     if this object is provided.
     * @return {Node} The node at the given offset.
     */
    function getNodeAtOffset(parent: Node, offset: number, opt_result?: Object): Node;

    /**
     * Returns true if the object is a {@code NodeList}.  To qualify as a NodeList,
     * the object must have a numeric length property and an item function (which
     * has type 'string' on IE for some reason).
     * @param {Object} val Object to test.
     * @return {boolean} Whether the object is a NodeList.
     */
    function isNodeList(val: Object): boolean;

    /**
     * Walks up the DOM hierarchy returning the first ancestor that has the passed
     * tag name and/or class name. If the passed element matches the specified
     * criteria, the element itself is returned.
     * @param {Node} element The DOM node to start with.
     * @param {?(goog.dom.TagName|string)=} opt_tag The tag name to match (or
     *     null/undefined to match only based on class name).
     * @param {?string=} opt_class The class name to match (or null/undefined to
     *     match only based on tag name).
     * @return {Element} The first ancestor that matches the passed criteria, or
     *     null if no match is found.
     */
    function getAncestorByTagNameAndClass(element: Node, opt_tag?: any /*goog.dom.TagName|string*/, opt_class?: string): Element;

    /**
     * Walks up the DOM hierarchy returning the first ancestor that has the passed
     * class name. If the passed element matches the specified criteria, the
     * element itself is returned.
     * @param {Node} element The DOM node to start with.
     * @param {string} className The class name to match.
     * @return {Element} The first ancestor that matches the passed criteria, or
     *     null if none match.
     */
    function getAncestorByClass(element: Node, className: string): Element;

    /**
     * Walks up the DOM hierarchy returning the first ancestor that passes the
     * matcher function.
     * @param {Node} element The DOM node to start with.
     * @param {function(Node) : boolean} matcher A function that returns true if the
     *     passed node matches the desired criteria.
     * @param {boolean=} opt_includeNode If true, the node itself is included in
     *     the search (the first call to the matcher will pass startElement as
     *     the node to test).
     * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
     *     dom.
     * @return {Node} DOM node that matched the matcher, or null if there was
     *     no match.
     */
    function getAncestor(element: Node, matcher: (_0: Node) => boolean, opt_includeNode?: boolean, opt_maxSearchSteps?: number): Node;

    /**
     * Determines the active element in the given document.
     * @param {Document} doc The document to look in.
     * @return {Element} The active element.
     */
    function getActiveElement(doc: Document): Element;

    /**
     * @private {number} Cached version of the devicePixelRatio.
     */
    var devicePixelRatio_: any /*missing*/;

    /**
     * Gives the devicePixelRatio, or attempts to determine if not present.
     *
     * By default, this is the same value given by window.devicePixelRatio. If
     * devicePixelRatio is not defined, the ratio is calculated with
     * window.matchMedia, if present. Otherwise, gives 1.0.
     *
     * This function is cached so that the pixel ratio is calculated only once
     * and only calculated when first requested.
     *
     * @return {number} The number of actual pixels per virtual pixel.
     */
    var getPixelRatio: any /*missing*/;

    /**
     * Typedef for use with goog.dom.createDom and goog.dom.append.
     * @typedef {Object|string|Array|NodeList}
     */
    interface Appendable { /*any (Object|string|any[]|NodeList)*/ }

    /**
     * Alias for goog.dom.form.element.getValue
     * @type {Function}
     * @deprecated Use {@link goog.dom.forms.getValue} instead.
     */
    var $F: Function;

    /**
     * Constants for the nodeType attribute in the Node interface.
     *
     * These constants match those specified in the Node interface. These are
     * usually present on the Node object in recent browsers, but not in older
     * browsers (specifically, early IEs) and thus are given here.
     *
     * In some browsers (early IEs), these are not defined on the Node object,
     * so they are provided here.
     *
     * See http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1950641247
     * @enum {number}
     */
    enum NodeType { ELEMENT, ATTRIBUTE, TEXT, CDATA_SECTION, ENTITY_REFERENCE, ENTITY, PROCESSING_INSTRUCTION, COMMENT, DOCUMENT, DOCUMENT_TYPE, DOCUMENT_FRAGMENT, NOTATION } 

    /**
     * Constants for selection endpoints.
     * @enum {number}
     */
    enum RangeEndpoint { START, END } 

    /**
     * There are three types of token:
     *  <ol>
     *    <li>{@code START_TAG} - The beginning of a tag.
     *    <li>{@code OTHER} - Any non-element node position.
     *    <li>{@code END_TAG} - The end of a tag.
     *  </ol>
     * Users of this enumeration can rely on {@code START_TAG + END_TAG = 0} and
     * that {@code OTHER = 0}.
     *
     * @enum {number}
     */
    enum TagWalkType { START_TAG, OTHER, END_TAG } 

    /**
     * Enum of all html tag names specified by the W3C HTML4.01 and HTML5
     * specifications.
     * @enum {string}
     */
    enum TagName { A, ABBR, ACRONYM, ADDRESS, APPLET, AREA, ARTICLE, ASIDE, AUDIO, B, BASE, BASEFONT, BDI, BDO, BIG, BLOCKQUOTE, BODY, BR, BUTTON, CANVAS, CAPTION, CENTER, CITE, CODE, COL, COLGROUP, COMMAND, DATA, DATALIST, DD, DEL, DETAILS, DFN, DIALOG, DIR, DIV, DL, DT, EM, EMBED, FIELDSET, FIGCAPTION, FIGURE, FONT, FOOTER, FORM, FRAME, FRAMESET, H1, H2, H3, H4, H5, H6, HEAD, HEADER, HGROUP, HR, HTML, I, IFRAME, IMG, INPUT, INS, ISINDEX, KBD, KEYGEN, LABEL, LEGEND, LI, LINK, MAP, MARK, MATH, MENU, META, METER, NAV, NOFRAMES, NOSCRIPT, OBJECT, OL, OPTGROUP, OPTION, OUTPUT, P, PARAM, PRE, PROGRESS, Q, RP, RT, RUBY, S, SAMP, SCRIPT, SECTION, SELECT, SMALL, SOURCE, SPAN, STRIKE, STRONG, STYLE, SUB, SUMMARY, SUP, SVG, TABLE, TBODY, TD, TEXTAREA, TFOOT, TH, THEAD, TIME, TITLE, TR, TRACK, TT, U, UL, VAR, VIDEO, WBR } 

    /**
     * Creates a new multi range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractRange}
     */
    class AbstractMultiRange extends goog.dom.AbstractRange {
        /**
         * Creates a new multi range with no properties.  Do not use this
         * constructor: use one of the goog.dom.Range.createFrom* methods instead.
         * @constructor
         * @extends {goog.dom.AbstractRange}
         */
        constructor();
    
        /** @override */
        containsRange(): void;
    
        /** @override */
        insertNode(): void;
    
        /** @override */
        surroundWithNodes(): void;
    }

    /**
     * Creates a new selection with no properties.  Do not use this constructor -
     * use one of the goog.dom.Range.from* methods instead.
     * @constructor
     */
    class AbstractRange {
        /**
         * Creates a new selection with no properties.  Do not use this constructor -
         * use one of the goog.dom.Range.from* methods instead.
         * @constructor
         */
        constructor();
    
        /**
         * @return {goog.dom.AbstractRange} A clone of this range.
         */
        clone: any /*missing*/;
    
        /**
         * @return {goog.dom.RangeType} The type of range represented by this object.
         */
        getType: any /*missing*/;
    
        /**
         * @return {Range|TextRange} The native browser range object.
         */
        getBrowserRangeObject: any /*missing*/;
    
        /**
         * Sets the native browser range object, overwriting any state this range was
         * storing.
         * @param {Range|TextRange} nativeRange The native browser range object.
         * @return {boolean} Whether the given range was accepted.  If not, the caller
         *     will need to call goog.dom.Range.createFromBrowserRange to create a new
         *     range object.
         */
        setBrowserRangeObject(nativeRange: any /*Range|TextRange*/): boolean;
    
        /**
         * @return {number} The number of text ranges in this range.
         */
        getTextRangeCount: any /*missing*/;
    
        /**
         * Get the i-th text range in this range.  The behavior is undefined if
         * i >= getTextRangeCount or i < 0.
         * @param {number} i The range number to retrieve.
         * @return {goog.dom.TextRange} The i-th text range.
         */
        getTextRange: any /*missing*/;
    
        /**
         * Gets an array of all text ranges this range is comprised of.  For non-multi
         * ranges, returns a single element array containing this.
         * @return {Array.<goog.dom.TextRange>} Array of text ranges.
         */
        getTextRanges(): goog.dom.TextRange[];
    
        /**
         * @return {Node} The deepest node that contains the entire range.
         */
        getContainer: any /*missing*/;
    
        /**
         * Returns the deepest element in the tree that contains the entire range.
         * @return {Element} The deepest element that contains the entire range.
         */
        getContainerElement(): Element;
    
        /**
         * @return {Node} The element or text node the range starts in.  For text
         *     ranges, the range comprises all text between the start and end position.
         *     For other types of range, start and end give bounds of the range but
         *     do not imply all nodes in those bounds are selected.
         */
        getStartNode: any /*missing*/;
    
        /**
         * @return {number} The offset into the node the range starts in.  For text
         *     nodes, this is an offset into the node value.  For elements, this is
         *     an offset into the childNodes array.
         */
        getStartOffset: any /*missing*/;
    
        /**
         * @return {goog.math.Coordinate} The coordinate of the selection start node
         *     and offset.
         */
        getStartPosition: any /*missing*/;
    
        /**
         * @return {Node} The element or text node the range ends in.
         */
        getEndNode: any /*missing*/;
    
        /**
         * @return {number} The offset into the node the range ends in.  For text
         *     nodes, this is an offset into the node value.  For elements, this is
         *     an offset into the childNodes array.
         */
        getEndOffset: any /*missing*/;
    
        /**
         * @return {goog.math.Coordinate} The coordinate of the selection end
         *     node and offset.
         */
        getEndPosition: any /*missing*/;
    
        /**
         * @return {Node} The element or text node the range is anchored at.
         */
        getAnchorNode(): Node;
    
        /**
         * @return {number} The offset into the node the range is anchored at.  For
         *     text nodes, this is an offset into the node value.  For elements, this
         *     is an offset into the childNodes array.
         */
        getAnchorOffset(): number;
    
        /**
         * @return {Node} The element or text node the range is focused at - i.e. where
         *     the cursor is.
         */
        getFocusNode(): Node;
    
        /**
         * @return {number} The offset into the node the range is focused at - i.e.
         *     where the cursor is.  For text nodes, this is an offset into the node
         *     value.  For elements, this is an offset into the childNodes array.
         */
        getFocusOffset(): number;
    
        /**
         * @return {boolean} Whether the selection is reversed.
         */
        isReversed(): boolean;
    
        /**
         * @return {Document} The document this selection is a part of.
         */
        getDocument(): Document;
    
        /**
         * @return {Window} The window this selection is a part of.
         */
        getWindow(): Window;
    
        /**
         * Tests if this range contains the given range.
         * @param {goog.dom.AbstractRange} range The range to test.
         * @param {boolean=} opt_allowPartial If true, the range can be partially
         *     contained in the selection, otherwise the range must be entirely
         *     contained.
         * @return {boolean} Whether this range contains the given range.
         */
        containsRange: any /*missing*/;
    
        /**
         * Tests if this range contains the given node.
         * @param {Node} node The node to test for.
         * @param {boolean=} opt_allowPartial If not set or false, the node must be
         *     entirely contained in the selection for this function to return true.
         * @return {boolean} Whether this range contains the given node.
         */
        containsNode(node: Node, opt_allowPartial?: boolean): boolean;
    
        /**
         * Tests whether this range is valid (i.e. whether its endpoints are still in
         * the document).  A range becomes invalid when, after this object was created,
         * either one or both of its endpoints are removed from the document.  Use of
         * an invalid range can lead to runtime errors, particularly in IE.
         * @return {boolean} Whether the range is valid.
         */
        isRangeInDocument: any /*missing*/;
    
        /**
         * @return {boolean} Whether the range is collapsed.
         */
        isCollapsed: any /*missing*/;
    
        /**
         * @return {string} The text content of the range.
         */
        getText: any /*missing*/;
    
        /**
         * Returns the HTML fragment this range selects.  This is slow on all browsers.
         * The HTML fragment may not be valid HTML, for instance if the user selects
         * from a to b inclusively in the following html:
         *
         * &gt;div&lt;a&gt;/div&lt;b
         *
         * This method will return
         *
         * a&lt;/div&gt;b
         *
         * If you need valid HTML, use {@link #getValidHtml} instead.
         *
         * @return {string} HTML fragment of the range, does not include context
         *     containing elements.
         */
        getHtmlFragment: any /*missing*/;
    
        /**
         * Returns valid HTML for this range.  This is fast on IE, and semi-fast on
         * other browsers.
         * @return {string} Valid HTML of the range, including context containing
         *     elements.
         */
        getValidHtml: any /*missing*/;
    
        /**
         * Returns pastable HTML for this range.  This guarantees that any child items
         * that must have specific ancestors will have them, for instance all TDs will
         * be contained in a TR in a TBODY in a TABLE and all LIs will be contained in
         * a UL or OL as appropriate.  This is semi-fast on all browsers.
         * @return {string} Pastable HTML of the range, including context containing
         *     elements.
         */
        getPastableHtml: any /*missing*/;
    
        /**
         * Returns a RangeIterator over the contents of the range.  Regardless of the
         * direction of the range, the iterator will move in document order.
         * @param {boolean=} opt_keys Unused for this iterator.
         * @return {goog.dom.RangeIterator} An iterator over tags in the range.
         */
        __iterator__: any /*missing*/;
    
        /**
         * Sets this range as the selection in its window.
         */
        select: any /*missing*/;
    
        /**
         * Removes the contents of the range from the document.
         */
        removeContents: any /*missing*/;
    
        /**
         * Inserts a node before (or after) the range.  The range may be disrupted
         * beyond recovery because of the way this splits nodes.
         * @param {Node} node The node to insert.
         * @param {boolean} before True to insert before, false to insert after.
         * @return {Node} The node added to the document.  This may be different
         *     than the node parameter because on IE we have to clone it.
         */
        insertNode: any /*missing*/;
    
        /**
         * Replaces the range contents with (possibly a copy of) the given node.  The
         * range may be disrupted beyond recovery because of the way this splits nodes.
         * @param {Node} node The node to insert.
         * @return {Node} The node added to the document.  This may be different
         *     than the node parameter because on IE we have to clone it.
         */
        replaceContentsWithNode(node: Node): Node;
    
        /**
         * Surrounds this range with the two given nodes.  The range may be disrupted
         * beyond recovery because of the way this splits nodes.
         * @param {Element} startNode The node to insert at the start.
         * @param {Element} endNode The node to insert at the end.
         */
        surroundWithNodes: any /*missing*/;
    
        /**
         * Saves the range so that if the start and end nodes are left alone, it can
         * be restored.
         * @return {goog.dom.SavedRange} A range representation that can be restored
         *     as long as the endpoint nodes of the selection are not modified.
         */
        saveUsingDom: any /*missing*/;
    
        /**
         * Saves the range using HTML carets. As long as the carets remained in the
         * HTML, the range can be restored...even when the HTML is copied across
         * documents.
         * @return {goog.dom.SavedCaretRange?} A range representation that can be
         *     restored as long as carets are not removed. Returns null if carets
         *     could not be created.
         */
        saveUsingCarets(): goog.dom.SavedCaretRange;
    
        /**
         * Collapses the range to one of its boundary points.
         * @param {boolean} toAnchor Whether to collapse to the anchor of the range.
         */
        collapse: any /*missing*/;
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     * @param {Node} node The node to start traversal at.  When null, creates an
     *     empty iterator.
     * @param {boolean=} opt_reverse Whether to traverse nodes in reverse.
     * @constructor
     * @extends {goog.dom.TagIterator}
     */
    class RangeIterator extends goog.dom.TagIterator {
        /**
         * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
         * adds functions to determine the portion of each text node that is selected.
         * @param {Node} node The node to start traversal at.  When null, creates an
         *     empty iterator.
         * @param {boolean=} opt_reverse Whether to traverse nodes in reverse.
         * @constructor
         * @extends {goog.dom.TagIterator}
         */
        constructor(node: Node, opt_reverse?: boolean);
    
        /**
         * @return {number} The offset into the current node, or -1 if the current node
         *     is not a text node.
         */
        getStartTextOffset: any /*missing*/;
    
        /**
         * @return {number} The end offset into the current node, or -1 if the current
         *     node is not a text node.
         */
        getEndTextOffset: any /*missing*/;
    
        /**
         * @return {Node} node The iterator's start node.
         */
        getStartNode: any /*missing*/;
    
        /**
         * @return {Node} The iterator's end node.
         */
        getEndNode: any /*missing*/;
    
        /**
         * @return {boolean} Whether a call to next will fail.
         */
        isLast: any /*missing*/;
    }

    /**
     * Creates a new BufferedViewportSizeMonitor.
     * @param {!goog.dom.ViewportSizeMonitor} viewportSizeMonitor The
     *     underlying viewport size monitor.
     * @param {number=} opt_bufferMs The buffer time, in ms. If not specified, this
     *     value defaults to {@link #RESIZE_EVENT_DELAY_MS_}.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class BufferedViewportSizeMonitor extends goog.events.EventTarget {
        /**
         * Creates a new BufferedViewportSizeMonitor.
         * @param {!goog.dom.ViewportSizeMonitor} viewportSizeMonitor The
         *     underlying viewport size monitor.
         * @param {number=} opt_bufferMs The buffer time, in ms. If not specified, this
         *     value defaults to {@link #RESIZE_EVENT_DELAY_MS_}.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(viewportSizeMonitor: goog.dom.ViewportSizeMonitor, opt_bufferMs?: number);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Returns the current size of the viewport.
         * @return {goog.math.Size?} The current viewport size.
         */
        getSize(): goog.math.Size;
    }

    /**
     * Create a new control selection with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractMultiRange}
     * @final
     */
    class ControlRange extends goog.dom.AbstractMultiRange {
        /**
         * Create a new control selection with no properties.  Do not use this
         * constructor: use one of the goog.dom.Range.createFrom* methods instead.
         * @constructor
         * @extends {goog.dom.AbstractMultiRange}
         * @final
         */
        constructor();
    
        /** @override */
        clone(): void;
    
        /** @override */
        getType(): void;
    
        /** @override */
        getBrowserRangeObject(): void;
    
        /** @override */
        setBrowserRangeObject(): void;
    
        /** @override */
        getTextRangeCount(): void;
    
        /** @override */
        getTextRange(): void;
    
        /** @override */
        getContainer(): void;
    
        /** @override */
        getStartNode(): void;
    
        /** @override */
        getStartOffset(): void;
    
        /** @override */
        getEndNode(): void;
    
        /** @override */
        getEndOffset(): void;
    
        /**
         * @return {Array.<Element>} Array of elements in the control range.
         */
        getElements(): Element[];
    
        /**
         * @return {Array.<Element>} Array of elements comprising the control range,
         *     sorted by document order.
         */
        getSortedElements(): Element[];
    
        /** @override */
        isRangeInDocument(): void;
    
        /** @override */
        isCollapsed(): void;
    
        /** @override */
        getText(): void;
    
        /** @override */
        getHtmlFragment(): void;
    
        /** @override */
        getValidHtml(): void;
    
        /** @override */
        getPastableHtml: any /*missing*/;
    
        /** @override */
        __iterator__(): void;
    
        /** @override */
        select(): void;
    
        /** @override */
        removeContents(): void;
    
        /** @override */
        replaceContentsWithNode(): void;
    
        /** @override */
        saveUsingDom(): void;
    
        /** @override */
        collapse(): void;
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {goog.dom.ControlRange?} range The range to traverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    class ControlRangeIterator extends goog.dom.RangeIterator {
        /**
         * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
         * adds functions to determine the portion of each text node that is selected.
         *
         * @param {goog.dom.ControlRange?} range The range to traverse.
         * @constructor
         * @extends {goog.dom.RangeIterator}
         * @final
         */
        constructor(range: goog.dom.ControlRange);
    
        /** @override */
        getStartTextOffset(): void;
    
        /** @override */
        getEndTextOffset(): void;
    
        /** @override */
        getStartNode(): void;
    
        /** @override */
        getEndNode(): void;
    
        /** @override */
        isLast(): void;
    
        /**
         * Move to the next position in the selection.
         * Throws {@code goog.iter.StopIteration} when it passes the end of the range.
         * @return {Node} The node at the next position.
         * @override
         */
        next(): Node;
    
        /** @override */
        copyFrom(): void;
    
        /**
         * @return {goog.dom.ControlRangeIterator} An identical iterator.
         * @override
         */
        clone(): goog.dom.ControlRangeIterator;
    }

    /**
     * Create an instance of a DOM helper with a new document object.
     * @param {Document=} opt_document Document object to associate with this
     *     DOM helper.
     * @constructor
     */
    class DomHelper {
        /**
         * Create an instance of a DOM helper with a new document object.
         * @param {Document=} opt_document Document object to associate with this
         *     DOM helper.
         * @constructor
         */
        constructor(opt_document?: Document);
    
        /**
         * Gets the dom helper object for the document where the element resides.
         * @param {Node=} opt_node If present, gets the DomHelper for this node.
         * @return {!goog.dom.DomHelper} The DomHelper.
         */
        getDomHelper: any /*missing*/;
    
        /**
         * Sets the document object.
         * @param {!Document} document Document object.
         */
        setDocument(document: Document): void;
    
        /**
         * Gets the document object being used by the dom library.
         * @return {!Document} Document object.
         */
        getDocument(): Document;
    
        /**
         * Alias for {@code getElementById}. If a DOM node is passed in then we just
         * return that.
         * @param {string|Element} element Element ID or a DOM node.
         * @return {Element} The element with the given ID, or the node passed in.
         */
        getElement(element: any /*string|Element*/): Element;
    
        /**
         * Gets an element by id, asserting that the element is found.
         *
         * This is used when an element is expected to exist, and should fail with
         * an assertion error if it does not (if assertions are enabled).
         *
         * @param {string} id Element ID.
         * @return {!Element} The element with the given ID, if it exists.
         */
        getRequiredElement(id: string): Element;
    
        /**
         * Alias for {@code getElement}.
         * @param {string|Element} element Element ID or a DOM node.
         * @return {Element} The element with the given ID, or the node passed in.
         * @deprecated Use {@link goog.dom.DomHelper.prototype.getElement} instead.
         */
        $: any /*missing*/;
    
        /**
         * Looks up elements by both tag and class name, using browser native functions
         * ({@code querySelectorAll}, {@code getElementsByTagName} or
         * {@code getElementsByClassName}) where possible. The returned array is a live
         * NodeList or a static list depending on the code path taken.
         *
         * @see goog.dom.query
         *
         * @param {?string=} opt_tag Element tag name or * for all tags.
         * @param {?string=} opt_class Optional class name.
         * @param {(Document|Element)=} opt_el Optional element to look in.
         * @return { {length: number} } Array-like list of elements (only a length
         *     property and numerical indices are guaranteed to exist).
         */
        getElementsByTagNameAndClass(opt_tag?: string, opt_class?: string, opt_el?: any /*Document|Element*/): { length: number };
    
        /**
         * Returns an array of all the elements with the provided className.
         * @see {goog.dom.query}
         * @param {string} className the name of the class to look for.
         * @param {Element|Document=} opt_el Optional element to look in.
         * @return { {length: number} } The items found with the class name provided.
         */
        getElementsByClass(className: string, opt_el?: any /*Element|Document*/): { length: number };
    
        /**
         * Returns the first element we find matching the provided class name.
         * @see {goog.dom.query}
         * @param {string} className the name of the class to look for.
         * @param {(Element|Document)=} opt_el Optional element to look in.
         * @return {Element} The first item found with the class name provided.
         */
        getElementByClass(className: string, opt_el?: any /*Element|Document*/): Element;
    
        /**
         * Ensures an element with the given className exists, and then returns the
         * first element with the provided className.
         * @see {goog.dom.query}
         * @param {string} className the name of the class to look for.
         * @param {(!Element|!Document)=} opt_root Optional element or document to look
         *     in.
         * @return {!Element} The first item found with the class name provided.
         * @throws {goog.asserts.AssertionError} Thrown if no element is found.
         */
        getRequiredElementByClass(className: string, opt_root?: any /*Element|Document*/): Element;
    
        /**
         * Alias for {@code getElementsByTagNameAndClass}.
         * @deprecated Use DomHelper getElementsByTagNameAndClass.
         * @see goog.dom.query
         *
         * @param {?string=} opt_tag Element tag name.
         * @param {?string=} opt_class Optional class name.
         * @param {Element=} opt_el Optional element to look in.
         * @return { {length: number} } Array-like list of elements (only a length
         *     property and numerical indices are guaranteed to exist).
         */
        $$: any /*missing*/;
    
        /**
         * Sets a number of properties on a node.
         * @param {Element} element DOM node to set properties on.
         * @param {Object} properties Hash of property:value pairs.
         */
        setProperties: any /*missing*/;
    
        /**
         * Gets the dimensions of the viewport.
         * @param {Window=} opt_window Optional window element to test. Defaults to
         *     the window of the Dom Helper.
         * @return {!goog.math.Size} Object with values 'width' and 'height'.
         */
        getViewportSize(opt_window?: Window): goog.math.Size;
    
        /**
         * Calculates the height of the document.
         *
         * @return {number} The height of the document.
         */
        getDocumentHeight(): number;
    
        /**
         * Returns a dom node with a set of attributes.  This function accepts varargs
         * for subsequent nodes to be added.  Subsequent nodes will be added to the
         * first node as childNodes.
         *
         * So:
         * <code>createDom('div', null, createDom('p'), createDom('p'));</code>
         * would return a div with two child paragraphs
         *
         * An easy way to move all child nodes of an existing element to a new parent
         * element is:
         * <code>createDom('div', null, oldElement.childNodes);</code>
         * which will remove all child nodes from the old element and add them as
         * child nodes of the new DIV.
         *
         * @param {string} tagName Tag to create.
         * @param {Object|string=} opt_attributes If object, then a map of name-value
         *     pairs for attributes. If a string, then this is the className of the new
         *     element.
         * @param {...goog.dom.Appendable} var_args Further DOM nodes or
         *     strings for text nodes. If one of the var_args is an array or
         *     NodeList, its elements will be added as childNodes instead.
         * @return {!Element} Reference to a DOM node.
         */
        createDom(tagName: string, opt_attributes?: any /*Object|string*/, ...var_args: goog.dom.Appendable[]): Element;
    
        /**
         * Alias for {@code createDom}.
         * @param {string} tagName Tag to create.
         * @param {(Object|string)=} opt_attributes If object, then a map of name-value
         *     pairs for attributes. If a string, then this is the className of the new
         *     element.
         * @param {...goog.dom.Appendable} var_args Further DOM nodes or strings for
         *     text nodes.  If one of the var_args is an array, its children will be
         *     added as childNodes instead.
         * @return {!Element} Reference to a DOM node.
         * @deprecated Use {@link goog.dom.DomHelper.prototype.createDom} instead.
         */
        $dom: any /*missing*/;
    
        /**
         * Creates a new element.
         * @param {string} name Tag name.
         * @return {!Element} The new element.
         */
        createElement(name: string): Element;
    
        /**
         * Creates a new text node.
         * @param {number|string} content Content.
         * @return {!Text} The new text node.
         */
        createTextNode(content: any /*number|string*/): Text;
    
        /**
         * Create a table.
         * @param {number} rows The number of rows in the table.  Must be >= 1.
         * @param {number} columns The number of columns in the table.  Must be >= 1.
         * @param {boolean=} opt_fillWithNbsp If true, fills table entries with nsbps.
         * @return {!Element} The created table.
         */
        createTable(rows: number, columns: number, opt_fillWithNbsp?: boolean): Element;
    
        /**
         * Converts an HTML string into a node or a document fragment.  A single Node
         * is used if the {@code htmlString} only generates a single node.  If the
         * {@code htmlString} generates multiple nodes then these are put inside a
         * {@code DocumentFragment}.
         *
         * @param {string} htmlString The HTML string to convert.
         * @return {!Node} The resulting node.
         */
        htmlToDocumentFragment(htmlString: string): Node;
    
        /**
         * Returns true if the browser is in "CSS1-compatible" (standards-compliant)
         * mode, false otherwise.
         * @return {boolean} True if in CSS1-compatible mode.
         */
        isCss1CompatMode(): boolean;
    
        /**
         * Gets the window object associated with the document.
         * @return {!Window} The window associated with the given document.
         */
        getWindow(): Window;
    
        /**
         * Gets the document scroll element.
         * @return {Element} Scrolling element.
         */
        getDocumentScrollElement(): Element;
    
        /**
         * Gets the document scroll distance as a coordinate object.
         * @return {!goog.math.Coordinate} Object with properties 'x' and 'y'.
         */
        getDocumentScroll(): goog.math.Coordinate;
    
        /**
         * Determines the active element in the given document.
         * @param {Document=} opt_doc The document to look in.
         * @return {Element} The active element.
         */
        getActiveElement(opt_doc?: Document): Element;
    
        /**
         * Appends a child to a node.
         * @param {Node} parent Parent.
         * @param {Node} child Child.
         */
        appendChild: any /*missing*/;
    
        /**
         * Appends a node with text or other nodes.
         * @param {!Node} parent The node to append nodes to.
         * @param {...goog.dom.Appendable} var_args The things to append to the node.
         *     If this is a Node it is appended as is.
         *     If this is a string then a text node is appended.
         *     If this is an array like object then fields 0 to length - 1 are appended.
         */
        append: any /*missing*/;
    
        /**
         * Determines if the given node can contain children, intended to be used for
         * HTML generation.
         *
         * @param {Node} node The node to check.
         * @return {boolean} Whether the node can contain children.
         */
        canHaveChildren: any /*missing*/;
    
        /**
         * Removes all the child nodes on a DOM node.
         * @param {Node} node Node to remove children from.
         */
        removeChildren: any /*missing*/;
    
        /**
         * Inserts a new node before an existing reference node (i.e., as the previous
         * sibling). If the reference node has no parent, then does nothing.
         * @param {Node} newNode Node to insert.
         * @param {Node} refNode Reference node to insert before.
         */
        insertSiblingBefore: any /*missing*/;
    
        /**
         * Inserts a new node after an existing reference node (i.e., as the next
         * sibling). If the reference node has no parent, then does nothing.
         * @param {Node} newNode Node to insert.
         * @param {Node} refNode Reference node to insert after.
         */
        insertSiblingAfter: any /*missing*/;
    
        /**
         * Insert a child at a given index. If index is larger than the number of child
         * nodes that the parent currently has, the node is inserted as the last child
         * node.
         * @param {Element} parent The element into which to insert the child.
         * @param {Node} child The element to insert.
         * @param {number} index The index at which to insert the new child node. Must
         *     not be negative.
         */
        insertChildAt: any /*missing*/;
    
        /**
         * Removes a node from its parent.
         * @param {Node} node The node to remove.
         * @return {Node} The node removed if removed; else, null.
         */
        removeNode: any /*missing*/;
    
        /**
         * Replaces a node in the DOM tree. Will do nothing if {@code oldNode} has no
         * parent.
         * @param {Node} newNode Node to insert.
         * @param {Node} oldNode Node to replace.
         */
        replaceNode: any /*missing*/;
    
        /**
         * Flattens an element. That is, removes it and replace it with its children.
         * @param {Element} element The element to flatten.
         * @return {Element|undefined} The original element, detached from the document
         *     tree, sans children, or undefined if the element was already not in the
         *     document.
         */
        flattenElement: any /*missing*/;
    
        /**
         * Returns an array containing just the element children of the given element.
         * @param {Element} element The element whose element children we want.
         * @return {!(Array|NodeList)} An array or array-like list of just the element
         *     children of the given element.
         */
        getChildren: any /*missing*/;
    
        /**
         * Returns the first child node that is an element.
         * @param {Node} node The node to get the first child element of.
         * @return {Element} The first child node of {@code node} that is an element.
         */
        getFirstElementChild: any /*missing*/;
    
        /**
         * Returns the last child node that is an element.
         * @param {Node} node The node to get the last child element of.
         * @return {Element} The last child node of {@code node} that is an element.
         */
        getLastElementChild: any /*missing*/;
    
        /**
         * Returns the first next sibling that is an element.
         * @param {Node} node The node to get the next sibling element of.
         * @return {Element} The next sibling of {@code node} that is an element.
         */
        getNextElementSibling: any /*missing*/;
    
        /**
         * Returns the first previous sibling that is an element.
         * @param {Node} node The node to get the previous sibling element of.
         * @return {Element} The first previous sibling of {@code node} that is
         *     an element.
         */
        getPreviousElementSibling: any /*missing*/;
    
        /**
         * Returns the next node in source order from the given node.
         * @param {Node} node The node.
         * @return {Node} The next node in the DOM tree, or null if this was the last
         *     node.
         */
        getNextNode: any /*missing*/;
    
        /**
         * Returns the previous node in source order from the given node.
         * @param {Node} node The node.
         * @return {Node} The previous node in the DOM tree, or null if this was the
         *     first node.
         */
        getPreviousNode: any /*missing*/;
    
        /**
         * Whether the object looks like a DOM node.
         * @param {?} obj The object being tested for node likeness.
         * @return {boolean} Whether the object looks like a DOM node.
         */
        isNodeLike: any /*missing*/;
    
        /**
         * Whether the object looks like an Element.
         * @param {?} obj The object being tested for Element likeness.
         * @return {boolean} Whether the object looks like an Element.
         */
        isElement: any /*missing*/;
    
        /**
         * Returns true if the specified value is a Window object. This includes the
         * global window for HTML pages, and iframe windows.
         * @param {?} obj Variable to test.
         * @return {boolean} Whether the variable is a window.
         */
        isWindow: any /*missing*/;
    
        /**
         * Returns an element's parent, if it's an Element.
         * @param {Element} element The DOM element.
         * @return {Element} The parent, or null if not an Element.
         */
        getParentElement: any /*missing*/;
    
        /**
         * Whether a node contains another node.
         * @param {Node} parent The node that should contain the other node.
         * @param {Node} descendant The node to test presence of.
         * @return {boolean} Whether the parent node contains the descendent node.
         */
        contains: any /*missing*/;
    
        /**
         * Compares the document order of two nodes, returning 0 if they are the same
         * node, a negative number if node1 is before node2, and a positive number if
         * node2 is before node1.  Note that we compare the order the tags appear in the
         * document so in the tree <b><i>text</i></b> the B node is considered to be
         * before the I node.
         *
         * @param {Node} node1 The first node to compare.
         * @param {Node} node2 The second node to compare.
         * @return {number} 0 if the nodes are the same node, a negative number if node1
         *     is before node2, and a positive number if node2 is before node1.
         */
        compareNodeOrder: any /*missing*/;
    
        /**
         * Find the deepest common ancestor of the given nodes.
         * @param {...Node} var_args The nodes to find a common ancestor of.
         * @return {Node} The common ancestor of the nodes, or null if there is none.
         *     null will only be returned if two or more of the nodes are from different
         *     documents.
         */
        findCommonAncestor: any /*missing*/;
    
        /**
         * Returns the owner document for a node.
         * @param {Node} node The node to get the document for.
         * @return {!Document} The document owning the node.
         */
        getOwnerDocument: any /*missing*/;
    
        /**
         * Cross browser function for getting the document element of an iframe.
         * @param {Element} iframe Iframe element.
         * @return {!Document} The frame content document.
         */
        getFrameContentDocument: any /*missing*/;
    
        /**
         * Cross browser function for getting the window of a frame or iframe.
         * @param {Element} frame Frame element.
         * @return {Window} The window associated with the given frame.
         */
        getFrameContentWindow: any /*missing*/;
    
        /**
         * Sets the text content of a node, with cross-browser support.
         * @param {Node} node The node to change the text content of.
         * @param {string|number} text The value that should replace the node's content.
         */
        setTextContent: any /*missing*/;
    
        /**
         * Gets the outerHTML of a node, which islike innerHTML, except that it
         * actually contains the HTML of the node itself.
         * @param {Element} element The element to get the HTML of.
         * @return {string} The outerHTML of the given element.
         */
        getOuterHtml: any /*missing*/;
    
        /**
         * Finds the first descendant node that matches the filter function. This does
         * a depth first search.
         * @param {Node} root The root of the tree to search.
         * @param {function(Node) : boolean} p The filter function.
         * @return {Node|undefined} The found node or undefined if none is found.
         */
        findNode: any /*missing*/;
    
        /**
         * Finds all the descendant nodes that matches the filter function. This does a
         * depth first search.
         * @param {Node} root The root of the tree to search.
         * @param {function(Node) : boolean} p The filter function.
         * @return {Array.<Node>} The found nodes or an empty array if none are found.
         */
        findNodes: any /*missing*/;
    
        /**
         * Returns true if the element has a tab index that allows it to receive
         * keyboard focus (tabIndex >= 0), false otherwise.  Note that some elements
         * natively support keyboard focus, even if they have no tab index.
         * @param {Element} element Element to check.
         * @return {boolean} Whether the element has a tab index that allows keyboard
         *     focus.
         */
        isFocusableTabIndex: any /*missing*/;
    
        /**
         * Enables or disables keyboard focus support on the element via its tab index.
         * Only elements for which {@link goog.dom.isFocusableTabIndex} returns true
         * (or elements that natively support keyboard focus, like form elements) can
         * receive keyboard focus.  See http://go/tabindex for more info.
         * @param {Element} element Element whose tab index is to be changed.
         * @param {boolean} enable Whether to set or remove a tab index on the element
         *     that supports keyboard focus.
         */
        setFocusableTabIndex: any /*missing*/;
    
        /**
         * Returns true if the element can be focused, i.e. it has a tab index that
         * allows it to receive keyboard focus (tabIndex >= 0), or it is an element
         * that natively supports keyboard focus.
         * @param {Element} element Element to check.
         * @return {boolean} Whether the element allows keyboard focus.
         */
        isFocusable: any /*missing*/;
    
        /**
         * Returns the text contents of the current node, without markup. New lines are
         * stripped and whitespace is collapsed, such that each character would be
         * visible.
         *
         * In browsers that support it, innerText is used.  Other browsers attempt to
         * simulate it via node traversal.  Line breaks are canonicalized in IE.
         *
         * @param {Node} node The node from which we are getting content.
         * @return {string} The text content.
         */
        getTextContent: any /*missing*/;
    
        /**
         * Returns the text length of the text contained in a node, without markup. This
         * is equivalent to the selection length if the node was selected, or the number
         * of cursor movements to traverse the node. Images & BRs take one space.  New
         * lines are ignored.
         *
         * @param {Node} node The node whose text content length is being calculated.
         * @return {number} The length of {@code node}'s text content.
         */
        getNodeTextLength: any /*missing*/;
    
        /**
         * Returns the text offset of a node relative to one of its ancestors. The text
         * length is the same as the length calculated by
         * {@code goog.dom.getNodeTextLength}.
         *
         * @param {Node} node The node whose offset is being calculated.
         * @param {Node=} opt_offsetParent Defaults to the node's owner document's body.
         * @return {number} The text offset.
         */
        getNodeTextOffset: any /*missing*/;
    
        /**
         * Returns the node at a given offset in a parent node.  If an object is
         * provided for the optional third parameter, the node and the remainder of the
         * offset will stored as properties of this object.
         * @param {Node} parent The parent node.
         * @param {number} offset The offset into the parent node.
         * @param {Object=} opt_result Object to be used to store the return value. The
         *     return value will be stored in the form {node: Node, remainder: number}
         *     if this object is provided.
         * @return {Node} The node at the given offset.
         */
        getNodeAtOffset: any /*missing*/;
    
        /**
         * Returns true if the object is a {@code NodeList}.  To qualify as a NodeList,
         * the object must have a numeric length property and an item function (which
         * has type 'string' on IE for some reason).
         * @param {Object} val Object to test.
         * @return {boolean} Whether the object is a NodeList.
         */
        isNodeList: any /*missing*/;
    
        /**
         * Walks up the DOM hierarchy returning the first ancestor that has the passed
         * tag name and/or class name. If the passed element matches the specified
         * criteria, the element itself is returned.
         * @param {Node} element The DOM node to start with.
         * @param {?(goog.dom.TagName|string)=} opt_tag The tag name to match (or
         *     null/undefined to match only based on class name).
         * @param {?string=} opt_class The class name to match (or null/undefined to
         *     match only based on tag name).
         * @return {Element} The first ancestor that matches the passed criteria, or
         *     null if no match is found.
         */
        getAncestorByTagNameAndClass: any /*missing*/;
    
        /**
         * Walks up the DOM hierarchy returning the first ancestor that has the passed
         * class name. If the passed element matches the specified criteria, the
         * element itself is returned.
         * @param {Node} element The DOM node to start with.
         * @param {string} class The class name to match.
         * @return {Element} The first ancestor that matches the passed criteria, or
         *     null if none match.
         */
        getAncestorByClass: any /*missing*/;
    
        /**
         * Walks up the DOM hierarchy returning the first ancestor that passes the
         * matcher function.
         * @param {Node} element The DOM node to start with.
         * @param {function(Node) : boolean} matcher A function that returns true if the
         *     passed node matches the desired criteria.
         * @param {boolean=} opt_includeNode If true, the node itself is included in
         *     the search (the first call to the matcher will pass startElement as
         *     the node to test).
         * @param {number=} opt_maxSearchSteps Maximum number of levels to search up the
         *     dom.
         * @return {Node} DOM node that matched the matcher, or null if there was
         *     no match.
         */
        getAncestor: any /*missing*/;
    }

    /**
     * This class can be used to monitor changes in font size.  Instances will
     * dispatch a {@code goog.dom.FontSizeMonitor.EventType.CHANGE} event.
     * Example usage:
     * <pre>
     * var fms = new goog.dom.FontSizeMonitor();
     * goog.events.listen(fms, goog.dom.FontSizeMonitor.EventType.CHANGE,
     *     function(e) {
     *       alert('Font size was changed');
     *     });
     * </pre>
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper object that is used to
     *     determine where to insert the DOM nodes used to determine when the font
     *     size changes.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class FontSizeMonitor extends goog.events.EventTarget {
        /**
         * This class can be used to monitor changes in font size.  Instances will
         * dispatch a {@code goog.dom.FontSizeMonitor.EventType.CHANGE} event.
         * Example usage:
         * <pre>
         * var fms = new goog.dom.FontSizeMonitor();
         * goog.events.listen(fms, goog.dom.FontSizeMonitor.EventType.CHANGE,
         *     function(e) {
         *       alert('Font size was changed');
         *     });
         * </pre>
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper object that is used to
         *     determine where to insert the DOM nodes used to determine when the font
         *     size changes.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * Creates a new multi part range with no properties.  Do not use this
     * constructor: use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractMultiRange}
     * @final
     */
    class MultiRange extends goog.dom.AbstractMultiRange {
        /**
         * Creates a new multi part range with no properties.  Do not use this
         * constructor: use one of the goog.dom.Range.createFrom* methods instead.
         * @constructor
         * @extends {goog.dom.AbstractMultiRange}
         * @final
         */
        constructor();
    
        /**
         * @return {goog.dom.MultiRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.MultiRange;
    
        /** @override */
        getType(): void;
    
        /** @override */
        getBrowserRangeObject(): void;
    
        /** @override */
        setBrowserRangeObject(): void;
    
        /** @override */
        getTextRangeCount(): void;
    
        /** @override */
        getTextRange(): void;
    
        /** @override */
        getContainer(): void;
    
        /**
         * @return {Array.<goog.dom.TextRange>} An array of sub-ranges, sorted by start
         *     point.
         */
        getSortedRanges(): goog.dom.TextRange[];
    
        /** @override */
        getStartNode(): void;
    
        /** @override */
        getStartOffset(): void;
    
        /** @override */
        getEndNode(): void;
    
        /** @override */
        getEndOffset(): void;
    
        /** @override */
        isRangeInDocument(): void;
    
        /** @override */
        isCollapsed(): void;
    
        /** @override */
        getText(): void;
    
        /** @override */
        getHtmlFragment(): void;
    
        /** @override */
        getValidHtml(): void;
    
        /** @override */
        getPastableHtml(): void;
    
        /** @override */
        __iterator__(): void;
    
        /** @override */
        select(): void;
    
        /** @override */
        removeContents(): void;
    
        /** @override */
        saveUsingDom(): void;
    
        /**
         * Collapses this range to a single point, either the first or last point
         * depending on the parameter.  This will result in the number of ranges in this
         * multi range becoming 1.
         * @param {boolean} toAnchor Whether to collapse to the anchor.
         * @override
         */
        collapse(toAnchor: boolean): void;
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {goog.dom.MultiRange} range The range to traverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    class MultiRangeIterator extends goog.dom.RangeIterator {
        /**
         * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
         * adds functions to determine the portion of each text node that is selected.
         *
         * @param {goog.dom.MultiRange} range The range to traverse.
         * @constructor
         * @extends {goog.dom.RangeIterator}
         * @final
         */
        constructor(range: goog.dom.MultiRange);
    
        /** @override */
        getStartTextOffset(): void;
    
        /** @override */
        getEndTextOffset(): void;
    
        /** @override */
        getStartNode(): void;
    
        /** @override */
        getEndNode(): void;
    
        /** @override */
        isLast(): void;
    
        /** @override */
        next(): void;
    
        /** @override */
        copyFrom(): void;
    
        /**
         * @return {goog.dom.MultiRangeIterator} An identical iterator.
         * @override
         */
        clone(): goog.dom.MultiRangeIterator;
    }

    /**
     * A DOM tree traversal iterator.
     *
     * Starting with the given node, the iterator walks the DOM in order, reporting
     * events for each node.  The iterator acts as a prefix iterator:
     *
     * <pre>
     * &lt;div&gt;1&lt;span&gt;2&lt;/span&gt;3&lt;/div&gt;
     * </pre>
     *
     * Will return the following nodes:
     *
     * <code>[div, 1, span, 2, 3]</code>
     *
     * With the following depths
     *
     * <code>[1, 1, 2, 2, 1]</code>
     *
     * Imagining <code>|</code> represents iterator position, the traversal stops at
     * each of the following locations:
     *
     * <pre>&lt;div&gt;|1|&lt;span&gt;|2|&lt;/span&gt;3|&lt;/div&gt;</pre>
     *
     * The iterator can also be used in reverse mode, which will return the nodes
     * and states in the opposite order.  The depths will be slightly different
     * since, like in normal mode, the depth is computed *after* the last move.
     *
     * Lastly, it is possible to create an iterator that is unconstrained, meaning
     * that it will continue iterating until the end of the document instead of
     * until exiting the start node.
     *
     * @param {Node=} opt_node The start node.  Defaults to an empty iterator.
     * @param {boolean=} opt_reversed Whether to traverse the tree in reverse.
     * @param {boolean=} opt_unconstrained Whether the iterator is not constrained
     *     to the starting node and its children.
     * @param {number=} opt_depth The starting tree depth.
     * @constructor
     * @extends {goog.dom.TagIterator}
     * @final
     */
    class NodeIterator extends goog.dom.TagIterator {
        /**
         * A DOM tree traversal iterator.
         *
         * Starting with the given node, the iterator walks the DOM in order, reporting
         * events for each node.  The iterator acts as a prefix iterator:
         *
         * <pre>
         * &lt;div&gt;1&lt;span&gt;2&lt;/span&gt;3&lt;/div&gt;
         * </pre>
         *
         * Will return the following nodes:
         *
         * <code>[div, 1, span, 2, 3]</code>
         *
         * With the following depths
         *
         * <code>[1, 1, 2, 2, 1]</code>
         *
         * Imagining <code>|</code> represents iterator position, the traversal stops at
         * each of the following locations:
         *
         * <pre>&lt;div&gt;|1|&lt;span&gt;|2|&lt;/span&gt;3|&lt;/div&gt;</pre>
         *
         * The iterator can also be used in reverse mode, which will return the nodes
         * and states in the opposite order.  The depths will be slightly different
         * since, like in normal mode, the depth is computed *after* the last move.
         *
         * Lastly, it is possible to create an iterator that is unconstrained, meaning
         * that it will continue iterating until the end of the document instead of
         * until exiting the start node.
         *
         * @param {Node=} opt_node The start node.  Defaults to an empty iterator.
         * @param {boolean=} opt_reversed Whether to traverse the tree in reverse.
         * @param {boolean=} opt_unconstrained Whether the iterator is not constrained
         *     to the starting node and its children.
         * @param {number=} opt_depth The starting tree depth.
         * @constructor
         * @extends {goog.dom.TagIterator}
         * @final
         */
        constructor(opt_node?: Node, opt_reversed?: boolean, opt_unconstrained?: boolean, opt_depth?: number);
    
        /**
         * Moves to the next position in the DOM tree.
         * @return {Node} Returns the next node, or throws a goog.iter.StopIteration
         *     exception if the end of the iterator's range has been reached.
         * @override
         */
        next(): Node;
    }

    /**
     * Object to store the offset from one node to another in a way that works on
     * any similar DOM structure regardless of whether it is the same actual nodes.
     * @param {Node} node The node to get the offset for.
     * @param {Node} baseNode The node to calculate the offset from.
     * @extends {goog.Disposable}
     * @constructor
     * @final
     */
    class NodeOffset extends goog.Disposable {
        /**
         * Object to store the offset from one node to another in a way that works on
         * any similar DOM structure regardless of whether it is the same actual nodes.
         * @param {Node} node The node to get the offset for.
         * @param {Node} baseNode The node to calculate the offset from.
         * @extends {goog.Disposable}
         * @constructor
         * @final
         */
        constructor(node: Node, baseNode: Node);
    
        /**
         * @return {string} A string representation of this object.
         * @override
         */
        toString(): string;
    
        /**
         * Walk the dom and find the node relative to baseNode.  Returns null on
         * failure.
         * @param {Node} baseNode The node to start walking from.  Should be equivalent
         *     to the node passed in to the constructor, in that it should have the
         *     same contents.
         * @return {Node} The node relative to baseNode, or null on failure.
         */
        findTargetNode(baseNode: Node): Node;
    
        /** @override */
        disposeInternal(): void;
    }

    /**
     * A struct for holding context about saved selections.
     * This can be used to preserve the selection and restore while the DOM is
     * manipulated, or through an asynchronous call. Use goog.dom.Range factory
     * methods to obtain an {@see goog.dom.AbstractRange} instance, and use
     * {@see goog.dom.AbstractRange#saveUsingCarets} to obtain a SavedCaretRange.
     * For editor ranges under content-editable elements or design-mode iframes,
     * prefer using {@see goog.editor.range.saveUsingNormalizedCarets}.
     * @param {goog.dom.AbstractRange} range The range being saved.
     * @constructor
     * @extends {goog.dom.SavedRange}
     */
    class SavedCaretRange extends goog.dom.SavedRange {
        /**
         * A struct for holding context about saved selections.
         * This can be used to preserve the selection and restore while the DOM is
         * manipulated, or through an asynchronous call. Use goog.dom.Range factory
         * methods to obtain an {@see goog.dom.AbstractRange} instance, and use
         * {@see goog.dom.AbstractRange#saveUsingCarets} to obtain a SavedCaretRange.
         * For editor ranges under content-editable elements or design-mode iframes,
         * prefer using {@see goog.editor.range.saveUsingNormalizedCarets}.
         * @param {goog.dom.AbstractRange} range The range being saved.
         * @constructor
         * @extends {goog.dom.SavedRange}
         */
        constructor(range: goog.dom.AbstractRange);
    
        /**
         * Gets the range that this SavedCaretRage represents, without selecting it
         * or removing the carets from the DOM.
         * @return {goog.dom.AbstractRange?} An abstract range.
         */
        toAbstractRange(): goog.dom.AbstractRange;
    
        /**
         * Gets carets.
         * @param {boolean} start If true, returns the start caret. Otherwise, get the
         *     end caret.
         * @return {Element} The start or end caret in the given document.
         */
        getCaret(start: boolean): Element;
    
        /**
         * Removes the carets from the current restoration document.
         * @param {goog.dom.AbstractRange=} opt_range A range whose offsets have already
         *     been adjusted for caret removal; it will be adjusted if it is also
         *     affected by post-removal operations, such as text node normalization.
         * @return {goog.dom.AbstractRange|undefined} The adjusted range, if opt_range
         *     was provided.
         */
        removeCarets(opt_range?: goog.dom.AbstractRange): any /*goog.dom.AbstractRange|any (undefined)*/;
    
        /**
         * Sets the document where the range will be restored.
         * @param {!Document} doc An HTML document.
         */
        setRestorationDocument(doc: Document): void;
    
        /**
         * Reconstruct the selection from the given saved range. Removes carets after
         * restoring the selection. If restore does not dispose this saved range, it may
         * only be restored a second time if innerHTML or some other mechanism is used
         * to restore the carets to the dom.
         * @return {goog.dom.AbstractRange?} Restored selection.
         * @override
         * @protected
         */
        restoreInternal(): goog.dom.AbstractRange;
    
        /**
         * Dispose the saved range and remove the carets from the DOM.
         * @override
         * @protected
         */
        disposeInternal(): void;
    }

    /**
     * Abstract interface for a saved range.
     * @constructor
     * @extends {goog.Disposable}
     */
    class SavedRange extends goog.Disposable {
        /**
         * Abstract interface for a saved range.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor();
    
        /**
         * Restores the range and by default disposes of the saved copy.  Take note:
         * this means the by default SavedRange objects are single use objects.
         * @param {boolean=} opt_stayAlive Whether this SavedRange should stay alive
         *     (not be disposed) after restoring the range. Defaults to false (dispose).
         * @return {goog.dom.AbstractRange} The restored range.
         */
        restore(opt_stayAlive?: boolean): goog.dom.AbstractRange;
    
        /**
         * Internal method to restore the saved range.
         * @return {goog.dom.AbstractRange} The restored range.
         */
        restoreInternal: any /*missing*/;
    }

    /**
     * A DOM tree traversal iterator.
     *
     * Starting with the given node, the iterator walks the DOM in order, reporting
     * events for the start and end of Elements, and the presence of text nodes. For
     * example:
     *
     * <pre>
     * &lt;div&gt;1&lt;span&gt;2&lt;/span&gt;3&lt;/div&gt;
     * </pre>
     *
     * Will return the following nodes:
     *
     * <code>[div, 1, span, 2, span, 3, div]</code>
     *
     * With the following states:
     *
     * <code>[START, OTHER, START, OTHER, END, OTHER, END]</code>
     *
     * And the following depths
     *
     * <code>[1, 1, 2, 2, 1, 1, 0]</code>
     *
     * Imagining <code>|</code> represents iterator position, the traversal stops at
     * each of the following locations:
     *
     * <pre>
     * &lt;div&gt;|1|&lt;span&gt;|2|&lt;/span&gt;|3|&lt;/div&gt;|
     * </pre>
     *
     * The iterator can also be used in reverse mode, which will return the nodes
     * and states in the opposite order.  The depths will be slightly different
     * since, like in normal mode, the depth is computed *after* the given node.
     *
     * Lastly, it is possible to create an iterator that is unconstrained, meaning
     * that it will continue iterating until the end of the document instead of
     * until exiting the start node.
     *
     * @param {Node=} opt_node The start node.  If unspecified or null, defaults to
     *     an empty iterator.
     * @param {boolean=} opt_reversed Whether to traverse the tree in reverse.
     * @param {boolean=} opt_unconstrained Whether the iterator is not constrained
     *     to the starting node and its children.
     * @param {goog.dom.TagWalkType?=} opt_tagType The type of the position.
     *     Defaults to the start of the given node for forward iterators, and
     *     the end of the node for reverse iterators.
     * @param {number=} opt_depth The starting tree depth.
     * @constructor
     * @extends {goog.iter.Iterator.<Node>}
     */
    class TagIterator extends goog.iter.Iterator<Node> {
        /**
         * A DOM tree traversal iterator.
         *
         * Starting with the given node, the iterator walks the DOM in order, reporting
         * events for the start and end of Elements, and the presence of text nodes. For
         * example:
         *
         * <pre>
         * &lt;div&gt;1&lt;span&gt;2&lt;/span&gt;3&lt;/div&gt;
         * </pre>
         *
         * Will return the following nodes:
         *
         * <code>[div, 1, span, 2, span, 3, div]</code>
         *
         * With the following states:
         *
         * <code>[START, OTHER, START, OTHER, END, OTHER, END]</code>
         *
         * And the following depths
         *
         * <code>[1, 1, 2, 2, 1, 1, 0]</code>
         *
         * Imagining <code>|</code> represents iterator position, the traversal stops at
         * each of the following locations:
         *
         * <pre>
         * &lt;div&gt;|1|&lt;span&gt;|2|&lt;/span&gt;|3|&lt;/div&gt;|
         * </pre>
         *
         * The iterator can also be used in reverse mode, which will return the nodes
         * and states in the opposite order.  The depths will be slightly different
         * since, like in normal mode, the depth is computed *after* the given node.
         *
         * Lastly, it is possible to create an iterator that is unconstrained, meaning
         * that it will continue iterating until the end of the document instead of
         * until exiting the start node.
         *
         * @param {Node=} opt_node The start node.  If unspecified or null, defaults to
         *     an empty iterator.
         * @param {boolean=} opt_reversed Whether to traverse the tree in reverse.
         * @param {boolean=} opt_unconstrained Whether the iterator is not constrained
         *     to the starting node and its children.
         * @param {goog.dom.TagWalkType?=} opt_tagType The type of the position.
         *     Defaults to the start of the given node for forward iterators, and
         *     the end of the node for reverse iterators.
         * @param {number=} opt_depth The starting tree depth.
         * @constructor
         * @extends {goog.iter.Iterator.<Node>}
         */
        constructor(opt_node?: Node, opt_reversed?: boolean, opt_unconstrained?: boolean, opt_tagType?: goog.dom.TagWalkType, opt_depth?: number);
    
        /**
         * The node this position is located on.
         * @type {Node}
         */
        node: Node;
    
        /**
         * The type of this position.
         * @type {goog.dom.TagWalkType}
         */
        tagType: goog.dom.TagWalkType;
    
        /**
         * The tree depth of this position relative to where the iterator started.  The
         * depth is considered to be the tree depth just past the current node, so if an
         * iterator is at position <pre>
         *     <div>|</div>
         * </pre>
         * (i.e. the node is the div and the type is START_TAG) its depth will be 1.
         * @type {number}
         */
        depth: number;
    
        /**
         * Whether the node iterator is moving in reverse.
         * @type {boolean}
         */
        reversed: boolean;
    
        /**
         * Whether the iterator is constrained to the starting node and its children.
         * @type {boolean}
         */
        constrained: boolean;
    
        /**
         * Set the position of the iterator.  Overwrite the tree node and the position
         * type which can be one of the {@link goog.dom.TagWalkType} token types.
         * Only overwrites the tree depth when the parameter is specified.
         * @param {Node} node The node to set the position to.
         * @param {goog.dom.TagWalkType?=} opt_tagType The type of the position
         *     Defaults to the start of the given node.
         * @param {number=} opt_depth The tree depth.
         */
        setPosition(node: Node, opt_tagType?: goog.dom.TagWalkType, opt_depth?: number): void;
    
        /**
         * Replace this iterator's values with values from another. The two iterators
         * must be of the same type.
         * @param {goog.dom.TagIterator} other The iterator to copy.
         * @protected
         */
        copyFrom(other: goog.dom.TagIterator): void;
    
        /**
         * @return {goog.dom.TagIterator} A copy of this iterator.
         */
        clone(): goog.dom.TagIterator;
    
        /**
         * Skip the current tag.
         */
        skipTag(): void;
    
        /**
         * Restart the current tag.
         */
        restartTag(): void;
    
        /**
         * Move to the next position in the DOM tree.
         * @return {Node} Returns the next node, or throws a goog.iter.StopIteration
         *     exception if the end of the iterator's range has been reached.
         * @override
         */
        next(): Node;
    
        /**
         * @return {boolean} Whether next has ever been called on this iterator.
         * @protected
         */
        isStarted(): boolean;
    
        /**
         * @return {boolean} Whether this iterator's position is a start tag position.
         */
        isStartTag(): boolean;
    
        /**
         * @return {boolean} Whether this iterator's position is an end tag position.
         */
        isEndTag(): boolean;
    
        /**
         * @return {boolean} Whether this iterator's position is not at an element node.
         */
        isNonElement(): boolean;
    
        /**
         * Test if two iterators are at the same position - i.e. if the node and tagType
         * is the same.  This will still return true if the two iterators are moving in
         * opposite directions or have different constraints.
         * @param {goog.dom.TagIterator} other The iterator to compare to.
         * @return {boolean} Whether the two iterators are at the same position.
         */
        equals(other: goog.dom.TagIterator): boolean;
    
        /**
         * Replace the current node with the list of nodes. Reset the iterator so that
         * it visits the first of the nodes next.
         * @param {...Object} var_args A list of nodes to replace the current node with.
         *     If the first argument is array-like, it will be used, otherwise all the
         *     arguments are assumed to be nodes.
         */
        splice(...var_args: Object[]): void;
    }

    /**
     * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
     * adds functions to determine the portion of each text node that is selected.
     *
     * @param {Node} startNode The starting node position.
     * @param {number} startOffset The offset in to startNode.  If startNode is
     *     an element, indicates an offset in to childNodes.  If startNode is a
     *     text node, indicates an offset in to nodeValue.
     * @param {Node} endNode The ending node position.
     * @param {number} endOffset The offset in to endNode.  If endNode is
     *     an element, indicates an offset in to childNodes.  If endNode is a
     *     text node, indicates an offset in to nodeValue.
     * @param {boolean=} opt_reverse Whether to traverse nodes in reverse.
     * @constructor
     * @extends {goog.dom.RangeIterator}
     * @final
     */
    class TextRangeIterator extends goog.dom.RangeIterator {
        /**
         * Subclass of goog.dom.TagIterator that iterates over a DOM range.  It
         * adds functions to determine the portion of each text node that is selected.
         *
         * @param {Node} startNode The starting node position.
         * @param {number} startOffset The offset in to startNode.  If startNode is
         *     an element, indicates an offset in to childNodes.  If startNode is a
         *     text node, indicates an offset in to nodeValue.
         * @param {Node} endNode The ending node position.
         * @param {number} endOffset The offset in to endNode.  If endNode is
         *     an element, indicates an offset in to childNodes.  If endNode is a
         *     text node, indicates an offset in to nodeValue.
         * @param {boolean=} opt_reverse Whether to traverse nodes in reverse.
         * @constructor
         * @extends {goog.dom.RangeIterator}
         * @final
         */
        constructor(startNode: Node, startOffset: number, endNode: Node, endOffset: number, opt_reverse?: boolean);
    
        /** @override */
        getStartTextOffset(): void;
    
        /** @override */
        getEndTextOffset(): void;
    
        /** @override */
        getStartNode(): void;
    
        /**
         * Change the start node of the iterator.
         * @param {Node} node The new start node.
         */
        setStartNode(node: Node): void;
    
        /** @override */
        getEndNode(): void;
    
        /**
         * Change the end node of the iterator.
         * @param {Node} node The new end node.
         */
        setEndNode(node: Node): void;
    
        /** @override */
        isLast(): void;
    
        /**
         * Move to the next position in the selection.
         * Throws {@code goog.iter.StopIteration} when it passes the end of the range.
         * @return {Node} The node at the next position.
         * @override
         */
        next(): Node;
    
        /** @override */
        skipTag(): void;
    
        /** @override */
        copyFrom(): void;
    
        /**
         * @return {goog.dom.TextRangeIterator} An identical iterator.
         * @override
         */
        clone(): goog.dom.TextRangeIterator;
    }

    /**
     * Create a new text selection with no properties.  Do not use this constructor:
     * use one of the goog.dom.Range.createFrom* methods instead.
     * @constructor
     * @extends {goog.dom.AbstractRange}
     * @final
     */
    class TextRange extends goog.dom.AbstractRange {
        /**
         * Create a new text selection with no properties.  Do not use this constructor:
         * use one of the goog.dom.Range.createFrom* methods instead.
         * @constructor
         * @extends {goog.dom.AbstractRange}
         * @final
         */
        constructor();
    
        /**
         * @return {goog.dom.TextRange} A clone of this range.
         * @override
         */
        clone(): goog.dom.TextRange;
    
        /** @override */
        getType(): void;
    
        /** @override */
        getBrowserRangeObject(): void;
    
        /** @override */
        setBrowserRangeObject(): void;
    
        /** @override */
        getTextRangeCount(): void;
    
        /** @override */
        getTextRange(): void;
    
        /** @override */
        getContainer(): void;
    
        /** @override */
        getStartNode(): void;
    
        /** @override */
        getStartOffset(): void;
    
        /** @override */
        getStartPosition(): void;
    
        /** @override */
        getEndNode(): void;
    
        /** @override */
        getEndOffset(): void;
    
        /** @override */
        getEndPosition(): void;
    
        /**
         * Moves a TextRange to the provided nodes and offsets.
         * @param {Node} startNode The node to start with.
         * @param {number} startOffset The offset within the node to start.
         * @param {Node} endNode The node to end with.
         * @param {number} endOffset The offset within the node to end.
         * @param {boolean} isReversed Whether the range is reversed.
         */
        moveToNodes(startNode: Node, startOffset: number, endNode: Node, endOffset: number, isReversed: boolean): void;
    
        /** @override */
        isReversed(): void;
    
        /** @override */
        containsRange(): void;
    
        /** @override */
        isRangeInDocument(): void;
    
        /** @override */
        isCollapsed(): void;
    
        /** @override */
        getText(): void;
    
        /** @override */
        getHtmlFragment(): void;
    
        /** @override */
        getValidHtml(): void;
    
        /** @override */
        getPastableHtml(): void;
    
        /**
         * Returns a TextRangeIterator over the contents of the range.  Regardless of
         * the direction of the range, the iterator will move in document order.
         * @param {boolean=} opt_keys Unused for this iterator.
         * @return {goog.dom.TextRangeIterator} An iterator over tags in the range.
         * @override
         */
        __iterator__(opt_keys?: boolean): goog.dom.TextRangeIterator;
    
        /** @override */
        select(): void;
    
        /** @override */
        removeContents(): void;
    
        /**
         * Surrounds the text range with the specified element (on Mozilla) or with a
         * clone of the specified element (on IE).  Returns a reference to the
         * surrounding element if the operation was successful; returns null if the
         * operation failed.
         * @param {Element} element The element with which the selection is to be
         *    surrounded.
         * @return {Element} The surrounding element (same as the argument on Mozilla,
         *    but not on IE), or null if unsuccessful.
         */
        surroundContents(element: Element): Element;
    
        /** @override */
        insertNode(): void;
    
        /** @override */
        surroundWithNodes(): void;
    
        /** @override */
        saveUsingDom(): void;
    
        /** @override */
        collapse(): void;
    }

    /**
     * This class can be used to monitor changes in the viewport size.  Instances
     * dispatch a {@link goog.events.EventType.RESIZE} event when the viewport size
     * changes.  Handlers can call {@link goog.dom.ViewportSizeMonitor#getSize} to
     * get the new viewport size.
     *
     * Use this class if you want to execute resize/reflow logic each time the
     * user resizes the browser window.  This class is guaranteed to only dispatch
     * {@code RESIZE} events when the pixel dimensions of the viewport change.
     * (Internet Explorer fires resize events if any element on the page is resized,
     * even if the viewport dimensions are unchanged, which can lead to infinite
     * resize loops.)
     *
     * Example usage:
     *  <pre>
     *    var vsm = new goog.dom.ViewportSizeMonitor();
     *    goog.events.listen(vsm, goog.events.EventType.RESIZE, function(e) {
     *      alert('Viewport size changed to ' + vsm.getSize());
     *    });
     *  </pre>
     *
     * Manually verified on IE6, IE7, FF2, Opera 11, Safari 4 and Chrome.
     *
     * @param {Window=} opt_window The window to monitor; defaults to the window in
     *    which this code is executing.
     * @constructor
     * @extends {goog.events.EventTarget}
     */
    class ViewportSizeMonitor extends goog.events.EventTarget {
        /**
         * This class can be used to monitor changes in the viewport size.  Instances
         * dispatch a {@link goog.events.EventType.RESIZE} event when the viewport size
         * changes.  Handlers can call {@link goog.dom.ViewportSizeMonitor#getSize} to
         * get the new viewport size.
         *
         * Use this class if you want to execute resize/reflow logic each time the
         * user resizes the browser window.  This class is guaranteed to only dispatch
         * {@code RESIZE} events when the pixel dimensions of the viewport change.
         * (Internet Explorer fires resize events if any element on the page is resized,
         * even if the viewport dimensions are unchanged, which can lead to infinite
         * resize loops.)
         *
         * Example usage:
         *  <pre>
         *    var vsm = new goog.dom.ViewportSizeMonitor();
         *    goog.events.listen(vsm, goog.events.EventType.RESIZE, function(e) {
         *      alert('Viewport size changed to ' + vsm.getSize());
         *    });
         *  </pre>
         *
         * Manually verified on IE6, IE7, FF2, Opera 11, Safari 4 and Chrome.
         *
         * @param {Window=} opt_window The window to monitor; defaults to the window in
         *    which this code is executing.
         * @constructor
         * @extends {goog.events.EventTarget}
         */
        constructor(opt_window?: Window);
    
        /**
         * Returns the most recently recorded size of the viewport, in pixels.  May
         * return null if no window resize event has been handled yet.
         * @return {goog.math.Size} The viewport dimensions, in pixels.
         */
        getSize(): goog.math.Size;
    
        /** @override */
        disposeInternal(): void;
    }
}

declare module 'goog.dom.AbstractRange' {

    /**
     * Gets the browser native selection object from the given window.
     * @param {Window} win The window to get the selection object from.
     * @return {Object} The browser native selection object, or null if it could
     *     not be retrieved.
     */
    function getBrowserSelectionForWindow(win: Window): Object;

    /**
     * Tests if the given Object is a controlRange.
     * @param {Object} range The range object to test.
     * @return {boolean} Whether the given Object is a controlRange.
     */
    function isNativeControlRange(range: Object): boolean;
}

declare module 'goog.dom.annotate' {

    /**
     * Calls {@code annotateFn} for each occurrence of a search term in text nodes
     * under {@code node}. Returns the number of hits.
     *
     * @param {Node} node  A DOM node.
     * @param {Array} terms  An array of [searchTerm, matchWholeWordOnly] tuples.
     *   The matchWholeWordOnly value is a per-term attribute because some terms
     *   may be CJK, while others are not. (For correctness, matchWholeWordOnly
     *   should always be false for CJK terms.).
     * @param {Function} annotateFn  A function that takes
     *   (1) the number of the term that is "hit",
     *   (2) the HTML string (search term) to be annotated,
     *   and returns the annotated term as an HTML string.
     * @param {*=} opt_ignoreCase  Whether to ignore the case of the query
     *   terms when looking for matches.
     * @param {Array.<string>=} opt_classesToSkip  Nodes with one of these CSS class
     *   names (and its descendants) will be skipped.
     * @param {number=} opt_maxMs  Number of milliseconds after which this function,
     *   if still annotating, should stop and return.
     *
     * @return {boolean} Whether any terms were annotated.
     */
    function annotateTerms(node: Node, terms: any[], annotateFn: Function, opt_ignoreCase?: any, opt_classesToSkip?: string[], opt_maxMs?: number): boolean;

    /**
     * Annotates occurrences of query terms in plain text. This process consists of
     * identifying all occurrences of all query terms, calling a provided function
     * to get the appropriate replacement HTML for each occurrence, and
     * HTML-escaping all the text.
     *
     * @param {string} text  The plain text to be searched.
     * @param {Array} terms  An array of
     *   [{string} searchTerm, {boolean} matchWholeWordOnly] tuples.
     *   The matchWholeWordOnly value is a per-term attribute because some terms
     *   may be CJK, while others are not. (For correctness, matchWholeWordOnly
     *   should always be false for CJK terms.).
     * @param {Function} annotateFn {function(number, string) : string} A function
     *   that takes
     *   (1) the number of the term that is "hit",
     *   (2) the HTML string (search term) to be annotated,
     *   and returns the annotated term as an HTML string.
     * @param {*=} opt_ignoreCase  Whether to ignore the case of the query
     *   terms when looking for matches.
     * @return {?string} The HTML equivalent of {@code text} with terms
     *   annotated, or null if the text did not contain any of the terms.
     */
    function annotateText(text: string, terms: any[], annotateFn: Function, opt_ignoreCase?: any): string;
}

declare module 'goog.dom.BufferedViewportSizeMonitor' {

    /**
     * Additional events to dispatch.
     * @enum {string}
     */
    enum EventType { RESIZE_HEIGHT, RESIZE_WIDTH } 
}

declare module 'goog.dom.classes' {

    /**
     * Sets the entire class name of an element.
     * @param {Node} element DOM node to set class of.
     * @param {string} className Class name(s) to apply to element.
     */
    function set(element: Node, className: string): void;

    /**
     * Gets an array of class names on an element
     * @param {Node} element DOM node to get class of.
     * @return {!Array} Class names on {@code element}. Some browsers add extra
     *     properties to the array. Do not depend on any of these!
     */
    function get(element: Node): any[];

    /**
     * Adds a class or classes to an element. Does not add multiples of class names.
     * @param {Node} element DOM node to add class to.
     * @param {...string} var_args Class names to add.
     * @return {boolean} Whether class was added (or all classes were added).
     */
    function add(element: Node, ...var_args: string[]): boolean;

    /**
     * Removes a class or classes from an element.
     * @param {Node} element DOM node to remove class from.
     * @param {...string} var_args Class name(s) to remove.
     * @return {boolean} Whether all classes in {@code var_args} were found and
     *     removed.
     */
    function remove(element: Node, ...var_args: string[]): boolean;

    /**
     * Switches a class on an element from one to another without disturbing other
     * classes. If the fromClass isn't removed, the toClass won't be added.
     * @param {Node} element DOM node to swap classes on.
     * @param {string} fromClass Class to remove.
     * @param {string} toClass Class to add.
     * @return {boolean} Whether classes were switched.
     */
    function swap(element: Node, fromClass: string, toClass: string): boolean;

    /**
     * Adds zero or more classes to an element and removes zero or more as a single
     * operation. Unlike calling {@link goog.dom.classes.add} and
     * {@link goog.dom.classes.remove} separately, this is more efficient as it only
     * parses the class property once.
     *
     * If a class is in both the remove and add lists, it will be added. Thus,
     * you can use this instead of {@link goog.dom.classes.swap} when you have
     * more than two class names that you want to swap.
     *
     * @param {Node} element DOM node to swap classes on.
     * @param {?(string|Array.<string>)} classesToRemove Class or classes to
     *     remove, if null no classes are removed.
     * @param {?(string|Array.<string>)} classesToAdd Class or classes to add, if
     *     null no classes are added.
     */
    function addRemove(element: Node, classesToRemove: any /*string|string[]*/, classesToAdd: any /*string|string[]*/): void;

    /**
     * Returns true if an element has a class.
     * @param {Node} element DOM node to test.
     * @param {string} className Class name to test for.
     * @return {boolean} Whether element has the class.
     */
    function has(element: Node, className: string): boolean;

    /**
     * Adds or removes a class depending on the enabled argument.
     * @param {Node} element DOM node to add or remove the class on.
     * @param {string} className Class name to add or remove.
     * @param {boolean} enabled Whether to add or remove the class (true adds,
     *     false removes).
     */
    function enable(element: Node, className: string, enabled: boolean): void;

    /**
     * Removes a class if an element has it, and adds it the element doesn't have
     * it.  Won't affect other classes on the node.
     * @param {Node} element DOM node to toggle class on.
     * @param {string} className Class to toggle.
     * @return {boolean} True if class was added, false if it was removed
     *     (in other words, whether element has the class after this function has
     *     been called).
     */
    function toggle(element: Node, className: string): boolean;
}

declare module 'goog.dom.classlist' {

    /**
     * Gets an array-like object of class names on an element.
     * @param {Element} element DOM node to get the classes of.
     * @return {!goog.array.ArrayLike} Class names on {@code element}.
     */
    function get(element: Element): goog.array.ArrayLike;

    /**
     * Sets the entire class name of an element.
     * @param {Element} element DOM node to set class of.
     * @param {string} className Class name(s) to apply to element.
     */
    function set(element: Element, className: string): void;

    /**
     * Returns true if an element has a class.  This method may throw a DOM
     * exception for an invalid or empty class name if DOMTokenList is used.
     * @param {Element} element DOM node to test.
     * @param {string} className Class name to test for.
     * @return {boolean} Whether element has the class.
     */
    function contains(element: Element, className: string): boolean;

    /**
     * Adds a class to an element.  Does not add multiples of class names.  This
     * method may throw a DOM exception for an invalid or empty class name if
     * DOMTokenList is used.
     * @param {Element} element DOM node to add class to.
     * @param {string} className Class name to add.
     */
    function add(element: Element, className: string): void;

    /**
     * Convenience method to add a number of class names at once.
     * @param {Element} element The element to which to add classes.
     * @param {goog.array.ArrayLike.<string>} classesToAdd An array-like object
     * containing a collection of class names to add to the element.
     * This method may throw a DOM exception if classesToAdd contains invalid
     * or empty class names.
     */
    function addAll(element: Element, classesToAdd: goog.array.ArrayLike<string>): void;

    /**
     * Removes a class from an element.  This method may throw a DOM exception
     * for an invalid or empty class name if DOMTokenList is used.
     * @param {Element} element DOM node to remove class from.
     * @param {string} className Class name to remove.
     */
    function remove(element: Element, className: string): void;

    /**
     * Removes a set of classes from an element.  Prefer this call to
     * repeatedly calling {@code goog.dom.classlist.remove} if you want to remove
     * a large set of class names at once.
     * @param {Element} element The element from which to remove classes.
     * @param {goog.array.ArrayLike.<string>} classesToRemove An array-like object
     * containing a collection of class names to remove from the element.
     * This method may throw a DOM exception if classesToRemove contains invalid
     * or empty class names.
     */
    function removeAll(element: Element, classesToRemove: goog.array.ArrayLike<string>): void;

    /**
     * Adds or removes a class depending on the enabled argument.  This method
     * may throw a DOM exception for an invalid or empty class name if DOMTokenList
     * is used.
     * @param {Element} element DOM node to add or remove the class on.
     * @param {string} className Class name to add or remove.
     * @param {boolean} enabled Whether to add or remove the class (true adds,
     *     false removes).
     */
    function enable(element: Element, className: string, enabled: boolean): void;

    /**
     * Adds or removes a set of classes depending on the enabled argument.  This
     * method may throw a DOM exception for an invalid or empty class name if
     * DOMTokenList is used.
     * @param {!Element} element DOM node to add or remove the class on.
     * @param {goog.array.ArrayLike.<string>} classesToEnable An array-like object
     *     containing a collection of class names to add or remove from the element.
     * @param {boolean} enabled Whether to add or remove the classes (true adds,
     *     false removes).
     */
    function enableAll(element: Element, classesToEnable: goog.array.ArrayLike<string>, enabled: boolean): void;

    /**
     * Switches a class on an element from one to another without disturbing other
     * classes. If the fromClass isn't removed, the toClass won't be added.  This
     * method may throw a DOM exception if the class names are empty or invalid.
     * @param {Element} element DOM node to swap classes on.
     * @param {string} fromClass Class to remove.
     * @param {string} toClass Class to add.
     * @return {boolean} Whether classes were switched.
     */
    function swap(element: Element, fromClass: string, toClass: string): boolean;

    /**
     * Removes a class if an element has it, and adds it the element doesn't have
     * it.  Won't affect other classes on the node.  This method may throw a DOM
     * exception if the class name is empty or invalid.
     * @param {Element} element DOM node to toggle class on.
     * @param {string} className Class to toggle.
     * @return {boolean} True if class was added, false if it was removed
     *     (in other words, whether element has the class after this function has
     *     been called).
     */
    function toggle(element: Element, className: string): boolean;

    /**
     * Adds and removes a class of an element.  Unlike
     * {@link goog.dom.classlist.swap}, this method adds the classToAdd regardless
     * of whether the classToRemove was present and had been removed.  This method
     * may throw a DOM exception if the class names are empty or invalid.
     *
     * @param {Element} element DOM node to swap classes on.
     * @param {string} classToRemove Class to remove.
     * @param {string} classToAdd Class to add.
     */
    function addRemove(element: Element, classToRemove: string, classToAdd: string): void;
}

declare module 'goog.dom.ControlRange' {

    /**
     * Create a new range wrapper from the given browser range object.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Object} controlRange The browser range object.
     * @return {goog.dom.ControlRange} A range wrapper object.
     */
    function createFromBrowserRange(controlRange: Object): goog.dom.ControlRange;

    /**
     * Create a new range wrapper that selects the given element.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {...Element} var_args The element(s) to select.
     * @return {goog.dom.ControlRange} A range wrapper object.
     */
    function createFromElements(...var_args: Element[]): goog.dom.ControlRange;
}

declare module 'goog.dom.dataset' {

    /**
     * Sets a custom data attribute on an element. The key should be
     * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
     * @param {Element} element DOM node to set the custom data attribute on.
     * @param {string} key Key for the custom data attribute.
     * @param {string} value Value for the custom data attribute.
     */
    function set(element: Element, key: string, value: string): void;

    /**
     * Gets a custom data attribute from an element. The key should be
     * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
     * @param {Element} element DOM node to get the custom data attribute from.
     * @param {string} key Key for the custom data attribute.
     * @return {?string} The attribute value, if it exists.
     */
    function get(element: Element, key: string): string;

    /**
     * Removes a custom data attribute from an element. The key should be
      * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
     * @param {Element} element DOM node to get the custom data attribute from.
     * @param {string} key Key for the custom data attribute.
     */
    function remove(element: Element, key: string): void;

    /**
     * Checks whether custom data attribute exists on an element. The key should be
     * in camelCase format (e.g "keyName" for the "data-key-name" attribute).
     *
     * @param {Element} element DOM node to get the custom data attribute from.
     * @param {string} key Key for the custom data attribute.
     * @return {boolean} Whether the attibute exists.
     */
    function has(element: Element, key: string): boolean;

    /**
     * Gets all custom data attributes as a string map.  The attribute names will be
     * camel cased (e.g., data-foo-bar -> dataset['fooBar']).  This operation is not
     * safe for attributes having camel-cased names clashing with already existing
     * properties (e.g., data-to-string -> dataset['toString']).
     * @param {!Element} element DOM node to get the data attributes from.
     * @return {!Object} The string map containing data attributes and their
     *     respective values.
     */
    function getAll(element: Element): Object;
}

declare module 'goog.dom.FontSizeMonitor' {

    /**
     * The event types that the FontSizeMonitor fires.
     * @enum {string}
     */
    enum EventType { CHANGE } 

    /**
     * Constant for the change event.
     * @type {string}
     * @deprecated Use {@code goog.dom.FontSizeMonitor.EventType.CHANGE} instead.
     */
    var CHANGE_EVENT: string;
}

declare module 'goog.dom.forms' {

    /**
     * Returns form data as a map of name to value arrays. This doesn't
     * support file inputs.
     * @param {HTMLFormElement} form The form.
     * @return {!goog.structs.Map} A map of the form data as form name to arrays of
     *     values.
     */
    function getFormDataMap(form: HTMLFormElement): goog.structs.Map;

    /**
     * Returns the form data as an application/x-www-url-encoded string. This
     * doesn't support file inputs.
     * @param {HTMLFormElement} form The form.
     * @return {string} An application/x-www-url-encoded string.
     */
    function getFormDataString(form: HTMLFormElement): string;

    /**
     * Whether the form has a file input.
     * @param {HTMLFormElement} form The form.
     * @return {boolean} Whether the form has a file input.
     */
    function hasFileInput(form: HTMLFormElement): boolean;

    /**
     * Enables or disables either all elements in a form or a single form element.
     * @param {Element} el The element, either a form or an element within a form.
     * @param {boolean} disabled Whether the element should be disabled.
     */
    function setDisabled(el: Element, disabled: boolean): void;

    /**
     * Focuses, and optionally selects the content of, a form element.
     * @param {Element} el The form element.
     */
    function focusAndSelect(el: Element): void;

    /**
     * Whether a form element has a value.
     * @param {Element} el The element.
     * @return {boolean} Whether the form has a value.
     */
    function hasValue(el: Element): boolean;

    /**
     * Whether a named form field has a value.
     * @param {HTMLFormElement} form The form element.
     * @param {string} name Name of an input to the form.
     * @return {boolean} Whether the form has a value.
     */
    function hasValueByName(form: HTMLFormElement, name: string): boolean;

    /**
     * Gets the current value of any element with a type.
     * @param {Element} el The element.
     * @return {string|Array.<string>|null} The current value of the element
     *     (or null).
     */
    function getValue(el: Element): any /*string|string[]|any (null)*/;

    /**
     * Returns the value of the named form field. In the case of radio buttons,
     * returns the value of the checked button with the given name.
     *
     * @param {HTMLFormElement} form The form element.
     * @param {string} name Name of an input to the form.
     *
     * @return {Array.<string>|string|null} The value of the form element, or
     *     null if the form element does not exist or has no value.
     */
    function getValueByName(form: HTMLFormElement, name: string): any /*string[]|string|any (null)*/;

    /**
     * Sets the current value of any element with a type.
     * @param {Element} el The element.
     * @param {*=} opt_value The value to give to the element, which will be coerced
     *     by the browser in the default case using toString. This value should be
     *     an array for setting the value of select multiple elements.
     */
    function setValue(el: Element, opt_value?: any): void;
}

declare module 'goog.dom.fullscreen' {

    /**
     * Event types for full screen.
     * @enum {string}
     */
    enum EventType { CHANGE } 

    /**
     * Determines if full screen is supported.
     * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper for the DOM being
     *     queried. If not provided, use the current DOM.
     * @return {boolean} True iff full screen is supported.
     */
    function isSupported(opt_domHelper?: goog.dom.DomHelper): boolean;

    /**
     * Requests putting the element in full screen.
     * @param {!Element} element The element to put full screen.
     */
    function requestFullScreen(element: Element): void;

    /**
     * Requests putting the element in full screen with full keyboard access.
     * @param {!Element} element The element to put full screen.
     */
    function requestFullScreenWithKeys(element: Element): void;

    /**
     * Exits full screen.
     * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper for the DOM being
     *     queried. If not provided, use the current DOM.
     */
    function exitFullScreen(opt_domHelper?: goog.dom.DomHelper): void;

    /**
     * Determines if the document is full screen.
     * @param {!goog.dom.DomHelper=} opt_domHelper The DomHelper for the DOM being
     *     queried. If not provided, use the current DOM.
     * @return {boolean} Whether the document is full screen.
     */
    function isFullScreen(opt_domHelper?: goog.dom.DomHelper): boolean;
}

declare module 'goog.dom.iframe' {

    /**
     * Safe source for a blank iframe.
     *
     * Intentionally not about:blank, which gives mixed content warnings in IE6
     * over HTTPS.
     *
     * @type {string}
     */
    var BLANK_SOURCE: string;

    /**
     * Safe source for a new blank iframe that may not cause a new load of the
     * iframe. This is different from {@code goog.dom.iframe.BLANK_SOURCE} in that
     * it will allow an iframe to be loaded synchronously in more browsers, notably
     * Gecko, following the javascript protocol spec.
     *
     * NOTE: This should not be used to replace the source of an existing iframe.
     * The new src value will be ignored, per the spec.
     *
     * Due to cross-browser differences, the load is not guaranteed  to be
     * synchronous. If code depends on the load of the iframe,
     * then {@code goog.net.IframeLoadMonitor} or a similar technique should be
     * used.
     *
     * According to
     * http://www.whatwg.org/specs/web-apps/current-work/multipage/webappapis.html#javascript-protocol
     * the 'javascript:""' URL should trigger a new load of the iframe, which may be
     * asynchronous. A void src, such as 'javascript:undefined', does not change
     * the browsing context document's, and thus should not trigger another load.
     *
     * Intentionally not about:blank, which also triggers a load.
     *
     * NOTE: 'javascript:' URL handling spec compliance varies per browser. IE
     * throws an error with 'javascript:undefined'. Webkit browsers will reload the
     * iframe when setting this source on an existing iframe.
     *
     * @type {string}
     */
    var BLANK_SOURCE_NEW_FRAME: string;

    /**
     * Creates a completely blank iframe element.
     *
     * The iframe will not caused mixed-content warnings for IE6 under HTTPS.
     * The iframe will also have no borders or padding, so that the styled width
     * and height will be the actual width and height of the iframe.
     *
     * This function currently only attempts to create a blank iframe.  There
     * are no guarantees to the contents of the iframe or whether it is rendered
     * in quirks mode.
     *
     * @param {goog.dom.DomHelper} domHelper The dom helper to use.
     * @param {string=} opt_styles CSS styles for the iframe.
     * @return {!HTMLIFrameElement} A completely blank iframe.
     */
    function createBlank(domHelper: goog.dom.DomHelper, opt_styles?: string): HTMLIFrameElement;

    /**
     * Writes the contents of a blank iframe that has already been inserted
     * into the document.
     * @param {!HTMLIFrameElement} iframe An iframe with no contents, such as
     *     one created by goog.dom.iframe.createBlank, but already appended to
     *     a parent document.
     * @param {string} content Content to write to the iframe, from doctype to
     *     the HTML close tag.
     */
    function writeContent(iframe: HTMLIFrameElement, content: string): void;

    /**
     * Creates a same-domain iframe containing preloaded content.
     *
     * This is primarily useful for DOM sandboxing.  One use case is to embed
     * a trusted Javascript app with potentially conflicting CSS styles.  The
     * second case is to reduce the cost of layout passes by the browser -- for
     * example, you can perform sandbox sizing of characters in an iframe while
     * manipulating a heavy DOM in the main window.  The iframe and parent frame
     * can access each others' properties and functions without restriction.
     *
     * @param {!Element} parentElement The parent element in which to append the
     *     iframe.
     * @param {string=} opt_headContents Contents to go into the iframe's head.
     * @param {string=} opt_bodyContents Contents to go into the iframe's body.
     * @param {string=} opt_styles CSS styles for the iframe itself, before adding
     *     to the parent element.
     * @param {boolean=} opt_quirks Whether to use quirks mode (false by default).
     * @return {HTMLIFrameElement} An iframe that has the specified contents.
     */
    function createWithContent(parentElement: Element, opt_headContents?: string, opt_bodyContents?: string, opt_styles?: string, opt_quirks?: boolean): HTMLIFrameElement;
}

declare module 'goog.dom.MultiRange' {

    /**
     * Creates a new range wrapper from the given browser selection object.  Do not
     * use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Selection} selection The browser selection object.
     * @return {goog.dom.MultiRange} A range wrapper object.
     */
    function createFromBrowserSelection(selection: Selection): goog.dom.MultiRange;

    /**
     * Creates a new range wrapper from the given browser ranges.  Do not
     * use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Array.<Range>} browserRanges The browser ranges.
     * @return {goog.dom.MultiRange} A range wrapper object.
     */
    function createFromBrowserRanges(browserRanges: Range[]): goog.dom.MultiRange;

    /**
     * Creates a new range wrapper from the given goog.dom.TextRange objects.  Do
     * not use this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Array.<goog.dom.TextRange>} textRanges The text range objects.
     * @return {goog.dom.MultiRange} A range wrapper object.
     */
    function createFromTextRanges(textRanges: goog.dom.TextRange[]): goog.dom.MultiRange;
}

declare module 'goog.dom.Range' {

    /**
     * Create a new selection from the given browser window's current selection.
     * Note that this object does not auto-update if the user changes their
     * selection and should be used as a snapshot.
     * @param {Window=} opt_win The window to get the selection of.  Defaults to the
     *     window this class was defined in.
     * @return {goog.dom.AbstractRange?} A range wrapper object, or null if there
     *     was an error.
     */
    function createFromWindow(opt_win?: Window): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper from the given browser selection object.  Note
     * that this object does not auto-update if the user changes their selection and
     * should be used as a snapshot.
     * @param {!Object} selection The browser selection object.
     * @return {goog.dom.AbstractRange?} A range wrapper object or null if there
     *    was an error.
     */
    function createFromBrowserSelection(selection: Object): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper from the given browser range object.
     * @param {Range|TextRange} range The browser range object.
     * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
     *     node.
     * @return {goog.dom.AbstractRange} A range wrapper object.
     */
    function createFromBrowserRange(range: any /*Range|TextRange*/, opt_isReversed?: boolean): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper that selects the given node's text.
     * @param {Node} node The node to select.
     * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
     *     node.
     * @return {goog.dom.AbstractRange} A range wrapper object.
     */
    function createFromNodeContents(node: Node, opt_isReversed?: boolean): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper that represents a caret at the given node,
     * accounting for the given offset.  This always creates a TextRange, regardless
     * of whether node is an image node or other control range type node.
     * @param {Node} node The node to place a caret at.
     * @param {number} offset The offset within the node to place the caret at.
     * @return {goog.dom.AbstractRange} A range wrapper object.
     */
    function createCaret(node: Node, offset: number): goog.dom.AbstractRange;

    /**
     * Create a new range wrapper that selects the area between the given nodes,
     * accounting for the given offsets.
     * @param {Node} anchorNode The node to anchor on.
     * @param {number} anchorOffset The offset within the node to anchor on.
     * @param {Node} focusNode The node to focus on.
     * @param {number} focusOffset The offset within the node to focus on.
     * @return {goog.dom.AbstractRange} A range wrapper object.
     */
    function createFromNodes(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): goog.dom.AbstractRange;

    /**
     * Clears the window's selection.
     * @param {Window=} opt_win The window to get the selection of.  Defaults to the
     *     window this class was defined in.
     */
    function clearSelection(opt_win?: Window): void;

    /**
     * Tests if the window has a selection.
     * @param {Window=} opt_win The window to check the selection of.  Defaults to
     *     the window this class was defined in.
     * @return {boolean} Whether the window has a selection.
     */
    function hasSelection(opt_win?: Window): boolean;

    /**
     * Returns whether the focus position occurs before the anchor position.
     * @param {Node} anchorNode The node to anchor on.
     * @param {number} anchorOffset The offset within the node to anchor on.
     * @param {Node} focusNode The node to focus on.
     * @param {number} focusOffset The offset within the node to focus on.
     * @return {boolean} Whether the focus position occurs before the anchor
     *     position.
     */
    function isReversed(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): boolean;
}

declare module 'goog.dom.safe' {

    /**
     * Assigns known-safe HTML to an element's innerHTML property.
     * @param {!Element} elem The element whose innerHTML is to be assigned to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function setInnerHtml(elem: Element, html: goog.html.SafeHtml): void;

    /**
     * Writes known-safe HTML to a document.
     * @param {!Document} doc The document to be written to.
     * @param {!goog.html.SafeHtml} html The known-safe HTML to assign.
     */
    function documentWrite(doc: Document, html: goog.html.SafeHtml): void;

    /**
     * Safely assigns a URL to an anchor element's href property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * anchor's href property.  If url is of type string however, it is first
     * sanitized using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setAnchorHref(anchorEl, url);
     * which is a safe alternative to
     *   anchorEl.href = url;
     * The latter can result in XSS vulnerabilities if url is a
     * user-/attacker-controlled value.
     *
     * @param {!HTMLAnchorElement} anchor The anchor element whose href property
     *     is to be assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setAnchorHref(anchor: HTMLAnchorElement, url: any /*string|goog.html.SafeUrl*/): void;

    /**
     * Safely assigns a URL to a Location object's href property.
     *
     * If url is of type goog.html.SafeUrl, its value is unwrapped and assigned to
     * loc's href property.  If url is of type string however, it is first sanitized
     * using goog.html.SafeUrl.sanitize.
     *
     * Example usage:
     *   goog.dom.safe.setLocationHref(document.location, redirectUrl);
     * which is a safe alternative to
     *   document.location.href = redirectUrl;
     * The latter can result in XSS vulnerabilities if redirectUrl is a
     * user-/attacker-controlled value.
     *
     * @param {!Location} loc The Location object whose href property is to be
     *     assigned to.
     * @param {string|!goog.html.SafeUrl} url The URL to assign.
     * @see goog.html.SafeUrl#sanitize
     */
    function setLocationHref(loc: Location, url: any /*string|goog.html.SafeUrl*/): void;
}

declare module 'goog.dom.SavedCaretRange' {

    /**
     * A regex that will match all saved range carets in a string.
     * @type {RegExp}
     */
    var CARET_REGEX: RegExp;

    /**
     * Returns whether two strings of html are equal, ignoring any saved carets.
     * Thus two strings of html whose only difference is the id of their saved
     * carets will be considered equal, since they represent html with the
     * same selection.
     * @param {string} str1 The first string.
     * @param {string} str2 The second string.
     * @return {boolean} Whether two strings of html are equal, ignoring any
     *     saved carets.
     */
    function htmlEqual(str1: string, str2: string): boolean;
}

declare module 'goog.dom.selection' {

    /**
     * Sets the place where the selection should start inside a textarea or a text
     * input
     * @param {Element} textfield A textarea or text input.
     * @param {number} pos The position to set the start of the selection at.
     */
    function setStart(textfield: Element, pos: number): void;

    /**
     * Return the place where the selection starts inside a textarea or a text
     * input
     * @param {Element} textfield A textarea or text input.
     * @return {number} The position where the selection starts or 0 if it was
     *     unable to find the position or no selection exists. Note that we can't
     *     reliably tell the difference between an element that has no selection and
     *     one where it starts at 0.
     */
    function getStart(textfield: Element): number;

    /**
     * Returns the start and end points of the selection inside a textarea or a
     * text input.
     * @param {Element} textfield A textarea or text input.
     * @return {Array.<number>} An array with the start and end positions where the
     *     selection starts and ends or [0,0] if it was unable to find the
     *     positions or no selection exists. Note that we can't reliably tell the
     *     difference between an element that has no selection and one where
     *     it starts and ends at 0.
     */
    function getEndPoints(textfield: Element): number[];

    /**
     * Sets the place where the selection should end inside a text area or a text
     * input
     * @param {Element} textfield A textarea or text input.
     * @param {number} pos The position to end the selection at.
     */
    function setEnd(textfield: Element, pos: number): void;

    /**
     * Returns the place where the selection ends inside a textarea or a text input
     * @param {Element} textfield A textarea or text input.
     * @return {number} The position where the selection ends or 0 if it was
     *     unable to find the position or no selection exists.
     */
    function getEnd(textfield: Element): number;

    /**
     * Sets the cursor position within a textfield.
     * @param {Element} textfield A textarea or text input.
     * @param {number} pos The position within the text field.
     */
    function setCursorPosition(textfield: Element, pos: number): void;

    /**
     * Sets the selected text inside a textarea or a text input
     * @param {Element} textfield A textarea or text input.
     * @param {string} text The text to change the selection to.
     */
    function setText(textfield: Element, text: string): void;

    /**
     * Returns the selected text inside a textarea or a text input
     * @param {Element} textfield A textarea or text input.
     * @return {string} The selected text.
     */
    function getText(textfield: Element): string;
}

declare module 'goog.dom.tags' {

    /**
     * Checks whether the tag is void (with no contents allowed and no legal end
     * tag), for example 'br'.
     * @param {string} tagName The tag name in lower case.
     * @return {boolean}
     */
    function isVoidTag(tagName: string): boolean;
}

declare module 'goog.dom.TextRange' {

    /**
     * Create a new range wrapper from the given browser range object.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Range|TextRange} range The browser range object.
     * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
     *     node.
     * @return {goog.dom.TextRange} A range wrapper object.
     */
    function createFromBrowserRange(range: any /*Range|TextRange*/, opt_isReversed?: boolean): goog.dom.TextRange;

    /**
     * Create a new range wrapper that selects the given node's text.  Do not use
     * this method directly - please use goog.dom.Range.createFrom* instead.
     * @param {Node} node The node to select.
     * @param {boolean=} opt_isReversed Whether the focus node is before the anchor
     *     node.
     * @return {goog.dom.TextRange} A range wrapper object.
     */
    function createFromNodeContents(node: Node, opt_isReversed?: boolean): goog.dom.TextRange;

    /**
     * Create a new range wrapper that selects the area between the given nodes,
     * accounting for the given offsets.  Do not use this method directly - please
     * use goog.dom.Range.createFrom* instead.
     * @param {Node} anchorNode The node to start with.
     * @param {number} anchorOffset The offset within the node to start.
     * @param {Node} focusNode The node to end with.
     * @param {number} focusOffset The offset within the node to end.
     * @return {goog.dom.TextRange} A range wrapper object.
     */
    function createFromNodes(anchorNode: Node, anchorOffset: number, focusNode: Node, focusOffset: number): goog.dom.TextRange;

    /**
     * Tests if the given node is in a document.
     * @param {Node} node The node to check.
     * @return {boolean} Whether the given node is in the given document.
     */
    function isAttachedNode(node: Node): boolean;
}

declare module 'goog.dom.vendor' {

    /**
     * Returns the JS vendor prefix used in CSS properties. Different vendors
     * use different methods of changing the case of the property names.
     *
     * @return {?string} The JS vendor prefix or null if there is none.
     */
    function getVendorJsPrefix(): string;

    /**
     * Returns the vendor prefix used in CSS properties.
     *
     * @return {?string} The vendor prefix or null if there is none.
     */
    function getVendorPrefix(): string;

    /**
     * @param {string} propertyName A property name.
     * @param {!Object=} opt_object If provided, we verify if the property exists in
     *     the object.
     * @return {?string} A vendor prefixed property name, or null if it does not
     *     exist.
     */
    function getPrefixedPropertyName(propertyName: string, opt_object?: Object): string;

    /**
     * @param {string} eventType An event type.
     * @return {string} A lower-cased vendor prefixed event type.
     */
    function getPrefixedEventType(eventType: string): string;
}

declare module 'goog.dom.ViewportSizeMonitor' {

    /**
     * Returns a viewport size monitor for the given window.  A new one is created
     * if it doesn't exist already.  This prevents the unnecessary creation of
     * multiple spooling monitors for a window.
     * @param {Window=} opt_window The window to monitor; defaults to the window in
     *     which this code is executing.
     * @return {!goog.dom.ViewportSizeMonitor} Monitor for the given window.
     */
    function getInstanceForWindow(opt_window?: Window): goog.dom.ViewportSizeMonitor;

    /**
     * Removes and disposes a viewport size monitor for the given window if one
     * exists.
     * @param {Window=} opt_window The window whose monitor should be removed;
     *     defaults to the window in which this code is executing.
     */
    function removeInstanceForWindow(opt_window?: Window): void;
}

declare module 'goog.dom.xml' {

    /**
     * Max XML size for MSXML2.  Used to prevent potential DoS attacks.
     * @type {number}
     */
    var MAX_XML_SIZE_KB: number;

    /**
     * Max XML size for MSXML2.  Used to prevent potential DoS attacks.
     * @type {number}
     */
    var MAX_ELEMENT_DEPTH: number;

    /**
     * Creates an XML document appropriate for the current JS runtime
     * @param {string=} opt_rootTagName The root tag name.
     * @param {string=} opt_namespaceUri Namespace URI of the document element.
     * @return {Document} The new document.
     */
    function createDocument(opt_rootTagName?: string, opt_namespaceUri?: string): Document;

    /**
     * Creates an XML document from a string
     * @param {string} xml The text.
     * @return {Document} XML document from the text.
     */
    function loadXml(xml: string): Document;

    /**
     * Serializes an XML document or subtree to string.
     * @param {Document|Element} xml The document or the root node of the subtree.
     * @return {string} The serialized XML.
     */
    function serialize(xml: any /*Document|Element*/): string;

    /**
     * Selects a single node using an Xpath expression and a root node
     * @param {Node} node The root node.
     * @param {string} path Xpath selector.
     * @return {Node} The selected node, or null if no matching node.
     */
    function selectSingleNode(node: Node, path: string): Node;

    /**
     * Selects multiple nodes using an Xpath expression and a root node
     * @param {Node} node The root node.
     * @param {string} path Xpath selector.
     * @return {(NodeList,Array.<Node>)} The selected nodes, or empty array if no
     *     matching nodes.
     */
    function selectNodes(node: Node, path: string): void;

    /**
     * Sets multiple attributes on an element. Differs from goog.dom.setProperties
     * in that it exclusively uses the element's setAttributes method. Use this
     * when you need to ensure that the exact property is available as an attribute
     * and can be read later by the native getAttribute method.
     * @param {!Element} element XML or DOM element to set attributes on.
     * @param {!Object.<string, string>} attributes Map of property:value pairs.
     */
    function setAttributes(element: Element, attributes: { [key: string]: string }): void;
}

declare module 'goog.dom.iter' {

    /**
     * Iterator over a Node's siblings.
     * @param {Node} node The node to start with.
     * @param {boolean=} opt_includeNode Whether to return the given node as the
     *     first return value from next.
     * @param {boolean=} opt_reverse Whether to traverse siblings in reverse
     *     document order.
     * @constructor
     * @extends {goog.iter.Iterator}
     */
    class SiblingIterator extends goog.iter.Iterator {
        /**
         * Iterator over a Node's siblings.
         * @param {Node} node The node to start with.
         * @param {boolean=} opt_includeNode Whether to return the given node as the
         *     first return value from next.
         * @param {boolean=} opt_reverse Whether to traverse siblings in reverse
         *     document order.
         * @constructor
         * @extends {goog.iter.Iterator}
         */
        constructor(node: Node, opt_includeNode?: boolean, opt_reverse?: boolean);
    
        /** @override */
        next(): void;
    }

    /**
     * Iterator over an Element's children.
     * @param {Element} element The element to iterate over.
     * @param {boolean=} opt_reverse Optionally traverse children from last to
     *     first.
     * @param {number=} opt_startIndex Optional starting index.
     * @constructor
     * @extends {goog.dom.iter.SiblingIterator}
     * @final
     */
    class ChildIterator extends goog.dom.iter.SiblingIterator {
        /**
         * Iterator over an Element's children.
         * @param {Element} element The element to iterate over.
         * @param {boolean=} opt_reverse Optionally traverse children from last to
         *     first.
         * @param {number=} opt_startIndex Optional starting index.
         * @constructor
         * @extends {goog.dom.iter.SiblingIterator}
         * @final
         */
        constructor(element: Element, opt_reverse?: boolean, opt_startIndex?: number);
    }

    /**
     * Iterator over a Node's ancestors, stopping after the document body.
     * @param {Node} node The node to start with.
     * @param {boolean=} opt_includeNode Whether to return the given node as the
     *     first return value from next.
     * @constructor
     * @extends {goog.iter.Iterator}
     * @final
     */
    class AncestorIterator extends goog.iter.Iterator {
        /**
         * Iterator over a Node's ancestors, stopping after the document body.
         * @param {Node} node The node to start with.
         * @param {boolean=} opt_includeNode Whether to return the given node as the
         *     first return value from next.
         * @constructor
         * @extends {goog.iter.Iterator}
         * @final
         */
        constructor(node: Node, opt_includeNode?: boolean);
    
        /** @override */
        next(): void;
    }
}

