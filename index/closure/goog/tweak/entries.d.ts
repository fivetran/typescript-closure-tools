/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />

declare module goog.tweak {

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
         * Sets the value of the entry based on the value of the query parameter. Once
         * this is called, configuration settings (associated query parameter, token,
         * etc) may not be changed.
         * @param {?string} value The part of the query param for this setting after
         *     the '='. Null if it is not present.
         * @protected
         */
        initialize(value: string): void;
    
        /**
         * Returns the value to be used in the query parameter for this tweak.
         * @return {?string} The encoded value. Null if the value is set to its
         *     default.
         */
        getNewValueEncoded(): string;
    
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
         * Returns the query param encoded representation of the setting's value.
         * @return {string} The encoded value.
         * @protected
         */
        encodeNewValue(): string;
    
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
         * Sets the valid values for the setting.
         * @param {Array.<string>|undefined} values Valid values.
         */
        setValidValues(values: any /*string[]|any (undefined)*/): void;
    
        /**
         * Returns the valid values for the setting.
         * @return {Array.<string>|undefined} Valid values.
         */
        getValidValues(): any /*string[]|any (undefined)*/;
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
         * Sets the valid values for the setting.
         * @param {Array.<number>|undefined} values Valid values.
         */
        setValidValues(values: any /*number[]|any (undefined)*/): void;
    
        /**
         * Returns the valid values for the setting.
         * @return {Array.<number>|undefined} Valid values.
         */
        getValidValues(): any /*number[]|any (undefined)*/;
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
         * Returns the map of token->boolean settings.
         * @return {!Object.<!goog.tweak.BooleanSetting>} The child settings.
         */
        getChildEntries(): { [key: string]: any /*missing*/ };
    
        /**
         * Adds the given BooleanSetting to the group.
         * @param {goog.tweak.BooleanInGroupSetting} boolEntry The entry.
         */
        addChild(boolEntry: goog.tweak.BooleanInGroupSetting): void;
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
}

