/// <reference path="../../../globals.d.ts" />
/// <reference path="../log/log.d.ts" />

declare module goog.tweak {

    class BaseEntry extends BaseEntry.__Class { }
    module BaseEntry {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
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
    }

    class BaseSetting extends BaseSetting.__Class { }
    module BaseSetting {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.tweak.BaseEntry.__Class {
    
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
    }

    class BasePrimitiveSetting extends BasePrimitiveSetting.__Class { }
    module BasePrimitiveSetting {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.tweak.BaseSetting.__Class {
    
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
    }

    class StringSetting extends StringSetting.__Class { }
    module StringSetting {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.tweak.BasePrimitiveSetting.__Class {
    
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
            setValidValues(values: string[]): void;
            /**
             * Sets the valid values for the setting.
             * @param {Array.<string>|undefined} values Valid values.
             */
            setValidValues(values: any /*undefined*/): void;
    
            /**
             * Returns the valid values for the setting.
             * @return {Array.<string>|undefined} Valid values.
             */
            getValidValues(): any /*string[]|any (undefined)*/;
        }
    }

    class NumericSetting extends NumericSetting.__Class { }
    module NumericSetting {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.tweak.BasePrimitiveSetting.__Class {
    
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
            setValidValues(values: number[]): void;
            /**
             * Sets the valid values for the setting.
             * @param {Array.<number>|undefined} values Valid values.
             */
            setValidValues(values: any /*undefined*/): void;
    
            /**
             * Returns the valid values for the setting.
             * @return {Array.<number>|undefined} Valid values.
             */
            getValidValues(): any /*number[]|any (undefined)*/;
        }
    }

    class BooleanSetting extends BooleanSetting.__Class { }
    module BooleanSetting {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.tweak.BasePrimitiveSetting.__Class {
    
            /**
             * A registry setting that can be either true of false.
             * @param {string} id The ID for the setting.
             * @param {string} description A description of what the setting does.
             * @constructor
             * @extends {goog.tweak.BasePrimitiveSetting}
             */
            constructor(id: string, description: string);
        }
    }

    class BooleanInGroupSetting extends BooleanInGroupSetting.__Class { }
    module BooleanInGroupSetting {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.tweak.BooleanSetting.__Class {
    
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
    }

    class BooleanGroup extends BooleanGroup.__Class { }
    module BooleanGroup {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.tweak.BaseSetting.__Class {
    
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
    }

    class ButtonAction extends ButtonAction.__Class { }
    module ButtonAction {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.tweak.BaseEntry.__Class {
    
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
}

declare module goog.tweak.BaseSetting {

    /**
     * States of initialization. Entries are initialized lazily in order to allow
     * their initialization to happen in multiple statements.
     * @enum {number}
     * @private
     */
    enum InitializeState_ { NOT_INITIALIZED, INITIALIZING, INITIALIZED } 
}
