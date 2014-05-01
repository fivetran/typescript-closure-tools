// Generated Wed Apr 30 16:41:33 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.a11y.aria' {

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

    /**
     * ARIA states and properties.
     * @enum {string}
     */
    enum State { ACTIVEDESCENDANT, ATOMIC, AUTOCOMPLETE, BUSY, CHECKED, CONTROLS, DESCRIBEDBY, DISABLED, DROPEFFECT, EXPANDED, FLOWTO, GRABBED, HASPOPUP, HIDDEN, INVALID, LABEL, LABELLEDBY, LEVEL, LIVE, MULTILINE, MULTISELECTABLE, ORIENTATION, OWNS, POSINSET, PRESSED, READONLY, RELEVANT, REQUIRED, SELECTED, SETSIZE, SORT, VALUEMAX, VALUEMIN, VALUENOW, VALUETEXT } 

    /**
     * ARIA state values for AutoCompleteValues.
     * @enum {string}
     */
    enum AutoCompleteValues { INLINE, LIST, BOTH, NONE } 

    /**
     * ARIA state values for DropEffectValues.
     * @enum {string}
     */
    enum DropEffectValues { COPY, MOVE, LINK, EXECUTE, POPUP, NONE } 

    /**
     * ARIA state values for LivePriority.
     * @enum {string}
     */
    enum LivePriority { OFF, POLITE, ASSERTIVE } 

    /**
     * ARIA state values for OrientationValues.
     * @enum {string}
     */
    enum OrientationValues { VERTICAL, HORIZONTAL } 

    /**
     * ARIA state values for RelevantValues.
     * @enum {string}
     */
    enum RelevantValues { ADDITIONS, REMOVALS, TEXT, ALL } 

    /**
     * ARIA state values for SortValues.
     * @enum {string}
     */
    enum SortValues { ASCENDING, DESCENDING, NONE, OTHER } 

    /**
     * ARIA state values for CheckedValues.
     * @enum {string}
     */
    enum CheckedValues { TRUE, FALSE, MIXED, UNDEFINED } 

    /**
     * ARIA state values for ExpandedValues.
     * @enum {string}
     */
    enum ExpandedValues { TRUE, FALSE, UNDEFINED } 

    /**
     * ARIA state values for GrabbedValues.
     * @enum {string}
     */
    enum GrabbedValues { TRUE, FALSE, UNDEFINED } 

    /**
     * ARIA state values for InvalidValues.
     * @enum {string}
     */
    enum InvalidValues { FALSE, TRUE, GRAMMAR, SPELLING } 

    /**
     * ARIA state values for PressedValues.
     * @enum {string}
     */
    enum PressedValues { TRUE, FALSE, MIXED, UNDEFINED } 

    /**
     * ARIA state values for SelectedValues.
     * @enum {string}
     */
    enum SelectedValues { TRUE, FALSE, UNDEFINED } 

    /**
     * A map that contains mapping between an ARIA state and the default value
     * for it. Note that not all ARIA states have default values.
     *
     * @type {Object.<!(goog.a11y.aria.State|string), (string|boolean|number)>}
     */
    var DefaultStateValueMap_: { [key: string]: any /*string|boolean|number*/ };

    /**
     * ARIA role values.
     * @enum {string}
     */
    enum Role { ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENU_ITEM, MENU_ITEM_CHECKBOX, MENU_ITEM_RADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TAB_LIST, TAB_PANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM } 

    /**
     * Class that allows messages to be spoken by assistive technologies that the
     * user may have active.
     *
     * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
     * @constructor
     * @extends {goog.Disposable}
     * @final
     */
    class Announcer extends goog.Disposable {
        /**
         * Class that allows messages to be spoken by assistive technologies that the
         * user may have active.
         *
         * @param {goog.dom.DomHelper=} opt_domHelper DOM helper.
         * @constructor
         * @extends {goog.Disposable}
         * @final
         */
        constructor(opt_domHelper?: goog.dom.DomHelper);
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * Announce a message to be read by any assistive technologies the user may
         * have active.
         * @param {string} message The message to announce to screen readers.
         * @param {goog.a11y.aria.LivePriority=} opt_priority The priority of the
         *     message. Defaults to POLITE.
         */
        say(message: string, opt_priority?: goog.a11y.aria.LivePriority): void;
    }
}

declare module 'goog.a11y.aria.datatables' {

    /**
     * A method that creates a map that contains mapping between an ARIA state and
     * the default value for it. Note that not all ARIA states have default values.
     *
     * @return {!Object.<!(goog.a11y.aria.State|string), (string|boolean|number)>}
     *      The names for each of the notification methods.
     */
    function getDefaultValuesMap(): { [key: string]: any /*string|boolean|number*/ };
}

