/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />

declare module goog.a11y.aria {

    /**
     * Sets the role of an element. If the roleName is
     * empty string or null, the role for the element is removed.
     * We encourage clients to call the goog.a11y.aria.removeRole
     * method instead of setting null and empty string values.
     * Special handling for this case is added to ensure
     * backword compatibility with existing code.
     *
     * @param {!Element} element DOM node to set role of.
     * @param {!goog.a11y.aria.Role|string} roleName role name(s).
     */
    function setRole(element: Element, roleName: any /*goog.a11y.aria.Role|string*/): void;

    /**
     * Gets role of an element.
     * @param {!Element} element DOM element to get role of.
     * @return {!goog.a11y.aria.Role} ARIA Role name.
     */
    function getRole(element: Element): goog.a11y.aria.Role;

    /**
     * Removes role of an element.
     * @param {!Element} element DOM element to remove the role from.
     */
    function removeRole(element: Element): void;

    /**
     * Sets the state or property of an element.
     * @param {!Element} element DOM node where we set state.
     * @param {!(goog.a11y.aria.State|string)} stateName State attribute being set.
     *     Automatically adds prefix 'aria-' to the state name if the attribute is
     *     not an extra attribute.
     * @param {string|boolean|number|!goog.array.ArrayLike.<string>} value Value
     * for the state attribute.
     */
    function setState(element: Element, stateName: any /*goog.a11y.aria.State|string*/, value: any /*string|boolean|number|goog.array.ArrayLike<string>*/): void;

    /**
     * Remove the state or property for the element.
     * @param {!Element} element DOM node where we set state.
     * @param {!goog.a11y.aria.State} stateName State name.
     */
    function removeState(element: Element, stateName: goog.a11y.aria.State): void;

    /**
     * Gets value of specified state or property.
     * @param {!Element} element DOM node to get state from.
     * @param {!goog.a11y.aria.State|string} stateName State name.
     * @return {string} Value of the state attribute.
     */
    function getState(element: Element, stateName: any /*goog.a11y.aria.State|string*/): string;

    /**
     * Returns the activedescendant element for the input element by
     * using the activedescendant ARIA property of the given element.
     * @param {!Element} element DOM node to get activedescendant
     *     element for.
     * @return {?Element} DOM node of the activedescendant, if found.
     */
    function getActiveDescendant(element: Element): Element;

    /**
     * Sets the activedescendant ARIA property value for an element.
     * If the activeElement is not null, it should have an id set.
     * @param {!Element} element DOM node to set activedescendant ARIA property to.
     * @param {?Element} activeElement DOM node being set as activedescendant.
     */
    function setActiveDescendant(element: Element, activeElement: Element): void;

    /**
     * Gets the label of the given element.
     * @param {!Element} element DOM node to get label from.
     * @return {string} label The label.
     */
    function getLabel(element: Element): string;

    /**
     * Sets the label of the given element.
     * @param {!Element} element DOM node to set label to.
     * @param {string} label The label to set.
     */
    function setLabel(element: Element, label: string): void;

    /**
     * Asserts that the element has a role set if it's not an HTML element whose
     * semantics is well supported by most screen readers.
     * Only to be used internally by the ARIA library in goog.a11y.aria.*.
     * @param {!Element} element The element to assert an ARIA role set.
     * @param {!goog.array.ArrayLike.<string>} allowedRoles The child roles of
     * the roles.
     */
    function assertRoleIsSetInternalUtil(element: Element, allowedRoles: goog.array.ArrayLike<string>): void;

    /**
     * Gets the boolean value of an ARIA state/property.
     * @param {!Element} element The element to get the ARIA state for.
     * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
     * @return {?boolean} Boolean value for the ARIA state value or null if
     *     the state value is not 'true', not 'false', or not set.
     */
    function getStateBoolean(element: Element, stateName: any /*goog.a11y.aria.State|string*/): boolean;

    /**
     * Gets the number value of an ARIA state/property.
     * @param {!Element} element The element to get the ARIA state for.
     * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
     * @return {?number} Number value for the ARIA state value or null if
     *     the state value is not a number or not set.
     */
    function getStateNumber(element: Element, stateName: any /*goog.a11y.aria.State|string*/): number;

    /**
     * Gets the string value of an ARIA state/property.
     * @param {!Element} element The element to get the ARIA state for.
     * @param {!goog.a11y.aria.State|string} stateName the ARIA state name.
     * @return {?string} String value for the ARIA state value or null if
     *     the state value is empty string or not set.
     */
    function getStateString(element: Element, stateName: any /*goog.a11y.aria.State|string*/): string;

    /**
     * Gets array of strings value of the specified state or
     * property for the element.
     * Only to be used internally by the ARIA library in goog.a11y.aria.*.
     * @param {!Element} element DOM node to get state from.
     * @param {!goog.a11y.aria.State} stateName State name.
     * @return {!goog.array.ArrayLike.<string>} string Array
     *     value of the state attribute.
     */
    function getStringArrayStateInternalUtil(element: Element, stateName: goog.a11y.aria.State): goog.array.ArrayLike<string>;
}

