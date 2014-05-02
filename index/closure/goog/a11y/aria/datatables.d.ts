// Generated Thu May  1 21:09:10 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />

declare module goog.a11y.aria {

    /**
     * A map that contains mapping between an ARIA state and the default value
     * for it. Note that not all ARIA states have default values.
     *
     * @type {Object.<!(goog.a11y.aria.State|string), (string|boolean|number)>}
     */
    var DefaultStateValueMap_: { [key: string]: any /*string|boolean|number*/ };
}

declare module goog.a11y.aria.datatables {

    /**
     * A method that creates a map that contains mapping between an ARIA state and
     * the default value for it. Note that not all ARIA states have default values.
     *
     * @return {!Object.<!(goog.a11y.aria.State|string), (string|boolean|number)>}
     *      The names for each of the notification methods.
     */
    function getDefaultValuesMap(): { [key: string]: any /*string|boolean|number*/ };
}

