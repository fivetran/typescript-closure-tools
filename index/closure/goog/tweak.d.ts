// Generated Wed Apr 30 16:37:11 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/a11y/aria.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/style.d.ts" />
/// <reference path="../goog/ui.d.ts" />
/// <reference path="../goog/uri.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.tweak.Registry' {

    /**
     * Simple parser for query params. Makes all keys lower-case.
     * @param {string} queryParams The part of the url between the ? and the #.
     * @return {!Object.<string>} map of key->value.
     */
    function parseQueryParams(queryParams: string): { [key: string]: any /*missing*/ };
}

declare module 'goog.tweak' {

    /**
     * Returns/creates the registry singleton.
     * @return {!goog.tweak.Registry} The tweak registry.
     */
    function getRegistry(): goog.tweak.Registry;

    /**
     * Type for configParams.
     * TODO(agrieve): Remove |Object when optional fields in struct types are
     *     implemented.
     * @typedef {{
     *     label:(string|undefined),
     *     validValues:(!Array.<string>|!Array.<number>|undefined),
     *     paramName:(string|undefined),
     *     restartRequired:(boolean|undefined),
     *     callback:(Function|undefined),
     *     token:(string|undefined)
     *     }|!Object}
     */
    var ConfigParams: any /*missing*/;

    /**
     * Creates and registers a group of BooleanSettings that are all set by a
     * single query parameter. A call to goog.tweak.endBooleanGroup() must be used
     * to close this group. Only goog.tweak.registerBoolean() calls are allowed with
     * the beginBooleanGroup()/endBooleanGroup().
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function beginBooleanGroup(id: string, description: string, opt_configParams?: goog.tweak.ConfigParams): void;

    /**
     * Stops adding boolean entries to the active boolean group.
     */
    function endBooleanGroup(): void;

    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: goog.tweak.ConfigParams): void;

    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: goog.tweak.ConfigParams): void;

    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: goog.tweak.ConfigParams): void;

    /**
     * Creates and registers a ButtonAction.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the action does.
     * @param {!Function} callback Function to call when the button is clicked.
     * @param {string=} opt_label The button text (instead of the ID).
     */
    function registerButton(id: string, description: string, callback: Function, opt_label?: string): void;

    /**
     * Sets a default value to use for the given tweak instead of the one passed
     * to the register* function. This function must be called before the tweak is
     * registered.
     * @param {string} id The unique string that identifies the entry.
     * @param {string|number|boolean} value The new default value for the tweak.
     */
    function overrideDefaultValue(id: string, value: any /*string|number|boolean*/): void;

    /**
     * Returns the value of the boolean setting with the given ID.
     * @param {string} id The unique string that identifies this entry.
     * @return {boolean} The value of the tweak.
     */
    function getBoolean(id: string): boolean;

    /**
     * Returns the value of the string setting with the given ID,
     * @param {string} id The unique string that identifies this entry.
     * @return {string} The value of the tweak.
     */
    function getString(id: string): string;

    /**
     * Returns the value of the numeric setting with the given ID.
     * @param {string} id The unique string that identifies this entry.
     * @return {number} The value of the tweak.
     */
    function getNumber(id: string): number;

    /**
     * Base class for all Registry entries.
     * @param {string} id The ID for the entry. Must contain only letters,
     *     numbers, underscores and periods.
     * @param {string} description A description of what the entry does.
     * @constructor
     */
    class BaseEntry {
        /**
         * Base class for all Registry entries.
         * @param {string} id The ID for the entry. Must contain only letters,
         *     numbers, underscores and periods.
         * @param {string} description A description of what the entry does.
         * @constructor
         */
        constructor(id: string, description: string);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         */
        logger: goog.log.Logger;
    
        /**
         * @return {string} Returns the entry's ID.
         */
        getId(): string;
    
        /**
         * Returns whether a restart is required for changes to the setting to take
         * effect.
         * @return {boolean} The value.
         */
        isRestartRequired(): boolean;
    
        /**
         * Sets whether a restart is required for changes to the setting to take
         * effect.
         * @param {boolean} value The new value.
         */
        setRestartRequired(value: boolean): void;
    
        /**
         * Adds a callback that should be called when the setting has changed (or when
         * an action has been clicked).
         * @param {!Function} callback The callback to add.
         */
        addCallback(callback: Function): void;
    
        /**
         * Removes a callback that was added by addCallback.
         * @param {!Function} callback The callback to add.
         */
        removeCallback(callback: Function): void;
    
        /**
         * Calls all registered callbacks.
         */
        fireCallbacks(): void;
    }

    /**
     * Base class for all tweak entries that are settings. Settings are entries
     * that are associated with a query parameter.
     * @param {string} id The ID for the setting.
     * @param {string} description A description of what the setting does.
     * @constructor
     * @extends {goog.tweak.BaseEntry}
     */
    class BaseSetting extends goog.tweak.BaseEntry {
        /**
         * Base class for all tweak entries that are settings. Settings are entries
         * that are associated with a query parameter.
         * @param {string} id The ID for the setting.
         * @param {string} description A description of what the setting does.
         * @constructor
         * @extends {goog.tweak.BaseEntry}
         */
        constructor(id: string, description: string);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * Sets the value of the entry based on the value of the query parameter. Once
         * this is called, configuration settings (associated query parameter, token,
         * etc) may not be changed.
         * @param {?string} value The part of the query param for this setting after
         *     the '='. Null if it is not present.
         * @protected
         */
        initialize: any /*missing*/;
    
        /**
         * Returns the value to be used in the query parameter for this tweak.
         * @return {?string} The encoded value. Null if the value is set to its
         *     default.
         */
        getNewValueEncoded: any /*missing*/;
    
        /**
         * Asserts that this tweak has not been initialized yet.
         * @param {string} funcName Function name to use in the assertion message.
         * @protected
         */
        assertNotInitialized(funcName: string): void;
    
        /**
         * Returns whether the setting is currently being initialized.
         * @return {boolean} Whether the setting is currently being initialized.
         * @protected
         */
        isInitializing(): boolean;
    
        /**
         * Sets the initial query parameter value for this setting. May not be called
         * after the setting has been initialized.
         * @param {string} value The inital query parameter value for this setting.
         */
        setInitialQueryParamValue(value: string): void;
    
        /**
         * Returns the name of the query parameter used for this setting.
         * @return {?string} The param name. Null if no query parameter is directly
         *     associated with the setting.
         */
        getParamName(): string;
    
        /**
         * Sets the name of the query parameter used for this setting. If null is
         * passed the the setting will not appear in the top-level query string.
         * @param {?string} value The new value.
         */
        setParamName(value: string): void;
    
        /**
         * Applies the default value or query param value if this is the first time
         * that the function has been called.
         * @protected
         */
        ensureInitialized(): void;
    }

    /**
     * Base class for all settings that wrap primitive values.
     * @param {string} id The ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {*} defaultValue The default value for this setting.
     * @constructor
     * @extends {goog.tweak.BaseSetting}
     */
    class BasePrimitiveSetting extends goog.tweak.BaseSetting {
        /**
         * Base class for all settings that wrap primitive values.
         * @param {string} id The ID for the setting.
         * @param {string} description A description of what the setting does.
         * @param {*} defaultValue The default value for this setting.
         * @constructor
         * @extends {goog.tweak.BaseSetting}
         */
        constructor(id: string, description: string, defaultValue: any);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * Returns the query param encoded representation of the setting's value.
         * @return {string} The encoded value.
         * @protected
         */
        encodeNewValue: any /*missing*/;
    
        /**
         * If the setting has the restartRequired option, then returns its inital
         * value. Otherwise, returns its current value.
         * @return {*} The value.
         */
        getValue(): any;
    
        /**
         * Returns the value of the setting to use once "Apply Tweaks" is clicked.
         * @return {*} The value.
         */
        getNewValue(): any;
    
        /**
         * Sets the value of the setting. If the setting has the restartRequired
         * option, then the value will not be changed until the "Apply Tweaks" button
         * is clicked. If it does not have the option, the value will be update
         * immediately and all registered callbacks will be called.
         * @param {*} value The value.
         */
        setValue(value: any): void;
    
        /**
         * Returns the default value for this setting.
         * @return {*} The default value.
         */
        getDefaultValue(): any;
    
        /**
         * Sets the default value for the tweak.
         * @param {*} value The new value.
         */
        setDefaultValue(value: any): void;
    
        /**
         * @override
         */
        getNewValueEncoded(): void;
    }

    /**
     * A registry setting for string values.
     * @param {string} id The ID for the setting.
     * @param {string} description A description of what the setting does.
     * @constructor
     * @extends {goog.tweak.BasePrimitiveSetting}
     * @final
     */
    class StringSetting extends goog.tweak.BasePrimitiveSetting {
        /**
         * A registry setting for string values.
         * @param {string} id The ID for the setting.
         * @param {string} description A description of what the setting does.
         * @constructor
         * @extends {goog.tweak.BasePrimitiveSetting}
         * @final
         */
        constructor(id: string, description: string);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * @override
         * @return {string} The tweaks's value.
         */
        getValue: any /*missing*/;
    
        /**
         * @override
         * @return {string} The tweaks's new value.
         */
        getNewValue: any /*missing*/;
    
        /**
         * @override
         * @param {string} value The tweaks's value.
         */
        setValue: any /*missing*/;
    
        /**
         * @override
         * @param {string} value The default value.
         */
        setDefaultValue: any /*missing*/;
    
        /**
         * @override
         * @return {string} The default value.
         */
        getDefaultValue: any /*missing*/;
    
        /**
         * @override
         */
        encodeNewValue(): void;
    
        /**
         * Sets the valid values for the setting.
         * @param {Array.<string>|undefined} values Valid values.
         */
        setValidValues(values: any /*string[]|any (undefined)*/): void;
    
        /**
         * Returns the valid values for the setting.
         * @return {Array.<string>|undefined} Valid values.
         */
        getValidValues(): any /*string[]|any (undefined)*/;
    
        /**
         * @override
         */
        initialize(): void;
    }

    /**
     * A registry setting for numeric values.
     * @param {string} id The ID for the setting.
     * @param {string} description A description of what the setting does.
     * @constructor
     * @extends {goog.tweak.BasePrimitiveSetting}
     * @final
     */
    class NumericSetting extends goog.tweak.BasePrimitiveSetting {
        /**
         * A registry setting for numeric values.
         * @param {string} id The ID for the setting.
         * @param {string} description A description of what the setting does.
         * @constructor
         * @extends {goog.tweak.BasePrimitiveSetting}
         * @final
         */
        constructor(id: string, description: string);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * @override
         * @return {number} The tweaks's value.
         */
        getValue: any /*missing*/;
    
        /**
         * @override
         * @return {number} The tweaks's new value.
         */
        getNewValue: any /*missing*/;
    
        /**
         * @override
         * @param {number} value The tweaks's value.
         */
        setValue: any /*missing*/;
    
        /**
         * @override
         * @param {number} value The default value.
         */
        setDefaultValue: any /*missing*/;
    
        /**
         * @override
         * @return {number} The default value.
         */
        getDefaultValue: any /*missing*/;
    
        /**
         * @override
         */
        encodeNewValue(): void;
    
        /**
         * Sets the valid values for the setting.
         * @param {Array.<number>|undefined} values Valid values.
         */
        setValidValues(values: any /*number[]|any (undefined)*/): void;
    
        /**
         * Returns the valid values for the setting.
         * @return {Array.<number>|undefined} Valid values.
         */
        getValidValues(): any /*number[]|any (undefined)*/;
    
        /**
         * @override
         */
        initialize(): void;
    }

    /**
     * A registry setting that can be either true of false.
     * @param {string} id The ID for the setting.
     * @param {string} description A description of what the setting does.
     * @constructor
     * @extends {goog.tweak.BasePrimitiveSetting}
     */
    class BooleanSetting extends goog.tweak.BasePrimitiveSetting {
        /**
         * A registry setting that can be either true of false.
         * @param {string} id The ID for the setting.
         * @param {string} description A description of what the setting does.
         * @constructor
         * @extends {goog.tweak.BasePrimitiveSetting}
         */
        constructor(id: string, description: string);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * @override
         * @return {boolean} The tweaks's value.
         */
        getValue: any /*missing*/;
    
        /**
         * @override
         * @return {boolean} The tweaks's new value.
         */
        getNewValue: any /*missing*/;
    
        /**
         * @override
         * @param {boolean} value The tweaks's value.
         */
        setValue: any /*missing*/;
    
        /**
         * @override
         * @param {boolean} value The default value.
         */
        setDefaultValue: any /*missing*/;
    
        /**
         * @override
         * @return {boolean} The default value.
         */
        getDefaultValue: any /*missing*/;
    
        /**
         * @override
         */
        encodeNewValue(): void;
    
        /**
         * @override
         */
        initialize(): void;
    }

    /**
     * An entry in a BooleanGroup.
     * @param {string} id The ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {!goog.tweak.BooleanGroup} group The group that this entry belongs
     *     to.
     * @constructor
     * @extends {goog.tweak.BooleanSetting}
     * @final
     */
    class BooleanInGroupSetting extends goog.tweak.BooleanSetting {
        /**
         * An entry in a BooleanGroup.
         * @param {string} id The ID for the setting.
         * @param {string} description A description of what the setting does.
         * @param {!goog.tweak.BooleanGroup} group The group that this entry belongs
         *     to.
         * @constructor
         * @extends {goog.tweak.BooleanSetting}
         * @final
         */
        constructor(id: string, description: string, group: goog.tweak.BooleanGroup);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * @override
         */
        setParamName(): void;
    
        /**
         * Sets the token to use in the query parameter.
         * @param {string} value The value.
         */
        setToken(value: string): void;
    
        /**
         * Returns the token to use in the query parameter.
         * @return {string} The value.
         */
        getToken(): string;
    
        /**
         * Returns the BooleanGroup that this setting belongs to.
         * @return {!goog.tweak.BooleanGroup} The BooleanGroup that this setting
         *     belongs to.
         */
        getGroup(): goog.tweak.BooleanGroup;
    }

    /**
     * A registry setting that contains a group of boolean subfield, where all
     * entries modify the same query parameter. For example:
     *     ?foo=setting1,-setting2
     * @param {string} id The ID for the setting.
     * @param {string} description A description of what the setting does.
     * @constructor
     * @extends {goog.tweak.BaseSetting}
     * @final
     */
    class BooleanGroup extends goog.tweak.BaseSetting {
        /**
         * A registry setting that contains a group of boolean subfield, where all
         * entries modify the same query parameter. For example:
         *     ?foo=setting1,-setting2
         * @param {string} id The ID for the setting.
         * @param {string} description A description of what the setting does.
         * @constructor
         * @extends {goog.tweak.BaseSetting}
         * @final
         */
        constructor(id: string, description: string);
    
        /**
         * The logger for this class.
         * @type {goog.log.Logger}
         * @protected
         * @override
         */
        logger: goog.log.Logger;
    
        /**
         * Returns the map of token->boolean settings.
         * @return {!Object.<!goog.tweak.BooleanSetting>} The child settings.
         */
        getChildEntries(): { [key: string]: any /*missing*/ };
    
        /**
         * Adds the given BooleanSetting to the group.
         * @param {goog.tweak.BooleanInGroupSetting} boolEntry The entry.
         */
        addChild(boolEntry: goog.tweak.BooleanInGroupSetting): void;
    
        /**
         * @override
         */
        initialize(): void;
    
        /**
         * @override
         */
        getNewValueEncoded(): void;
    }

    /**
     * A registry action (a button).
     * @param {string} id The ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {!Function} callback Function to call when the button is clicked.
     * @constructor
     * @extends {goog.tweak.BaseEntry}
     * @final
     */
    class ButtonAction extends goog.tweak.BaseEntry {
        /**
         * A registry action (a button).
         * @param {string} id The ID for the setting.
         * @param {string} description A description of what the setting does.
         * @param {!Function} callback Function to call when the button is clicked.
         * @constructor
         * @extends {goog.tweak.BaseEntry}
         * @final
         */
        constructor(id: string, description: string, callback: Function);
    }

    /**
     * Singleton that manages all tweaks. This should be instantiated only from
     * goog.tweak.getRegistry().
     * @param {string} queryParams Value of window.location.search.
     * @param {!Object.<string|number|boolean>} compilerOverrides Default value
     *     overrides set by the compiler.
     * @constructor
     * @final
     */
    class Registry {
        /**
         * Singleton that manages all tweaks. This should be instantiated only from
         * goog.tweak.getRegistry().
         * @param {string} queryParams Value of window.location.search.
         * @param {!Object.<string|number|boolean>} compilerOverrides Default value
         *     overrides set by the compiler.
         * @constructor
         * @final
         */
        constructor(queryParams: string, compilerOverrides: { [key: string]: any /*missing*/ });
    
        /**
         * Registers the given tweak setting/action.
         * @param {goog.tweak.BaseEntry} entry The entry.
         */
        register(entry: goog.tweak.BaseEntry): void;
    
        /**
         * Adds a callback to be called whenever a new tweak is added.
         * @param {!Function} func The callback.
         */
        addOnRegisterListener(func: Function): void;
    
        /**
         * @param {string} id The unique string that identifies this entry.
         * @return {boolean} Whether a tweak with the given ID is registered.
         */
        hasEntry(id: string): boolean;
    
        /**
         * Returns the BaseEntry with the given ID. Asserts if it does not exists.
         * @param {string} id The unique string that identifies this entry.
         * @return {!goog.tweak.BaseEntry} The entry.
         */
        getEntry(id: string): goog.tweak.BaseEntry;
    
        /**
         * Returns the boolean setting with the given ID. Asserts if the ID does not
         * refer to a registered entry or if it refers to one of the wrong type.
         * @param {string} id The unique string that identifies this entry.
         * @return {!goog.tweak.BooleanSetting} The entry.
         */
        getBooleanSetting(id: string): goog.tweak.BooleanSetting;
    
        /**
         * Returns the string setting with the given ID. Asserts if the ID does not
         * refer to a registered entry or if it refers to one of the wrong type.
         * @param {string} id The unique string that identifies this entry.
         * @return {!goog.tweak.StringSetting} The entry.
         */
        getStringSetting(id: string): goog.tweak.StringSetting;
    
        /**
         * Returns the numeric setting with the given ID. Asserts if the ID does not
         * refer to a registered entry or if it refers to one of the wrong type.
         * @param {string} id The unique string that identifies this entry.
         * @return {!goog.tweak.NumericSetting} The entry.
         */
        getNumericSetting(id: string): goog.tweak.NumericSetting;
    
        /**
         * Creates and returns an array of all BaseSetting objects with an associted
         * query parameter.
         * @param {boolean} excludeChildEntries Exclude BooleanInGroupSettings.
         * @param {boolean} excludeNonSettings Exclude entries that are not subclasses
         *     of BaseSetting.
         * @return {!Array.<!goog.tweak.BaseSetting>} The settings.
         */
        extractEntries(excludeChildEntries: boolean, excludeNonSettings: boolean): goog.tweak.BaseSetting[];
    
        /**
         * Returns the query part of the URL that will apply all set tweaks.
         * @param {string=} opt_existingSearchStr The part of the url between the ? and
         *     the #. Uses window.location.search if not given.
         * @return {string} The query string.
         */
        makeUrlQuery(opt_existingSearchStr?: string): string;
    
        /**
         * Sets a default value to use for the given tweak instead of the one passed
         * to the register* function. This function must be called before the tweak is
         * registered.
         * @param {string} id The unique string that identifies the entry.
         * @param {string|number|boolean} value The replacement value to be used as the
         *     default value for the setting.
         */
        overrideDefaultValue(id: string, value: any /*string|number|boolean*/): void;
    }

    /**
     * A UI for editing tweak settings / clicking tweak actions.
     * @param {!goog.tweak.Registry} registry The registry to render.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @constructor
     * @final
     */
    class TweakUi {
        /**
         * A UI for editing tweak settings / clicking tweak actions.
         * @param {!goog.tweak.Registry} registry The registry to render.
         * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
         * @constructor
         * @final
         */
        constructor(registry: goog.tweak.Registry, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {!Element} The root element. Must not be called before render().
         */
        getRootElement(): Element;
    
        /**
         * Creates the element to display when the UI is visible.
         * @return {!Element} The root element.
         */
        render(): Element;
    }

    /**
     * The body of the tweaks UI and also used for BooleanGroup.
     * @param {!Array.<!goog.tweak.BaseEntry>} entries The entries to show in the
     *     panel.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @constructor
     * @final
     */
    class EntriesPanel {
        /**
         * The body of the tweaks UI and also used for BooleanGroup.
         * @param {!Array.<!goog.tweak.BaseEntry>} entries The entries to show in the
         *     panel.
         * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
         * @constructor
         * @final
         */
        constructor(entries: goog.tweak.BaseEntry[], opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {!Element} Returns the expanded element. Must not be called before
         *     render().
         */
        getRootElement(): Element;
    
        /**
         * Creates and returns the expanded element.
         * The markup looks like:
         * <div>
         *   <a>Show Descriptions</a>
         *   <div>
         *      ...
         *      {endElement}
         *   </div>
         * </div>
         * @param {Element|DocumentFragment=} opt_endElement Element to insert after all
         *     tweak entries.
         * @return {!Element} The root element for the panel.
         */
        render(opt_endElement?: any /*Element|DocumentFragment*/): Element;
    
        /**
         * Inserts the given entry into the panel.
         * @param {!goog.tweak.BaseEntry} entry The entry to insert.
         */
        insertEntry(entry: goog.tweak.BaseEntry): void;
    
        /**
         * Show all entry descriptions (has the same effect as clicking on all ?'s).
         */
        toggleAllDescriptions(): void;
    }
}

declare module 'goog.tweak.TweakUi' {

    /**
     * Creates a TweakUi if tweaks are enabled.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @return {!Element|undefined} The root UI element or undefined if tweaks are
     *     not enabled.
     */
    function create(opt_domHelper?: goog.dom.DomHelper): any /*Element|any (undefined)*/;

    /**
     * Creates a TweakUi inside of a show/hide link.
     * @param {goog.dom.DomHelper=} opt_domHelper The DomHelper to render with.
     * @return {!Element|undefined} The root UI element or undefined if tweaks are
     *     not enabled.
     */
    function createCollapsible(opt_domHelper?: goog.dom.DomHelper): any /*Element|any (undefined)*/;
}

