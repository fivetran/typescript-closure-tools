/// <reference path="../../../globals.d.ts" />
/// <reference path="./registry.d.ts" />

declare module goog.tweak {

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
    interface ConfigParams { /*any ({ label: any (string|any (undefined)); validValues: any (string[]|number[]|any (undefined)); paramName: any (string|any (undefined)); restartRequired: any (boolean|any (undefined)); callback: any (Function|any (undefined)); token: any (string|any (undefined)) }|Object)*/ }

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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
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
    function beginBooleanGroup(id: string, description: string, opt_configParams?: Object): void;

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
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a BooleanSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {boolean=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerBoolean(id: string, description: string, opt_defaultValue?: boolean, opt_configParams?: Object): void;

    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a StringSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {string=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerString(id: string, description: string, opt_defaultValue?: string, opt_configParams?: Object): void;

    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: string; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: string[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: number[]; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: string; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: boolean; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: Function; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: string }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: { label: any /*undefined*/; validValues: any /*undefined*/; paramName: any /*undefined*/; restartRequired: any /*undefined*/; callback: any /*undefined*/; token: any /*undefined*/ }): void;
    /**
     * Creates and registers a NumericSetting.
     * @param {string} id The unique ID for the setting.
     * @param {string} description A description of what the setting does.
     * @param {number=} opt_defaultValue The default value for the setting.
     * @param {goog.tweak.ConfigParams=} opt_configParams Extra configuration
     *     parameters.
     */
    function registerNumber(id: string, description: string, opt_defaultValue?: number, opt_configParams?: Object): void;

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
    function overrideDefaultValue(id: string, value: string): void;
    /**
     * Sets a default value to use for the given tweak instead of the one passed
     * to the register* function. This function must be called before the tweak is
     * registered.
     * @param {string} id The unique string that identifies the entry.
     * @param {string|number|boolean} value The new default value for the tweak.
     */
    function overrideDefaultValue(id: string, value: number): void;
    /**
     * Sets a default value to use for the given tweak instead of the one passed
     * to the register* function. This function must be called before the tweak is
     * registered.
     * @param {string} id The unique string that identifies the entry.
     * @param {string|number|boolean} value The new default value for the tweak.
     */
    function overrideDefaultValue(id: string, value: boolean): void;

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
}
