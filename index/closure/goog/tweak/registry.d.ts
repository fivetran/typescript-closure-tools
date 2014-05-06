/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
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
/// <reference path="../../../closure/goog/tweak/entries.d.ts" />

declare module goog.tweak {

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
}

declare module goog.tweak.Registry {

    /**
     * Simple parser for query params. Makes all keys lower-case.
     * @param {string} queryParams The part of the url between the ? and the #.
     * @return {!Object.<string>} map of key->value.
     */
    function parseQueryParams(queryParams: string): { [key: string]: any /*missing*/ };
}

