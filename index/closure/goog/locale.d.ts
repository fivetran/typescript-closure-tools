// Generated Wed Apr 30 16:30:54 PDT 2014

/// <reference path="../goog.d.ts" />

declare module 'goog.locale' {

    /**
     * List of codes for countries valid today.
     * @type {Array}
     */
    var countries: any[];

    /**
     * Default list of locale specific country and language names
     */
    var defaultLocaleNameConstants: any /*missing*/;

    /**
     * Map from script code or language code to list of pairs of (generic name,
     * font name fallback list).
     * @type {Object}
     */
    var genericFontNamesData: Object;

    /**
     * Set currnet locale to the specified one.
     * @param {string} localeName Locale name string. We are following the usage
     *     in CLDR, but can make a few compromise for existing name compatibility.
     */
    function setLocale(localeName: string): void;

    /**
     * Retrieve the current locale
     * @return {string} Current locale name string.
     * @deprecated Use goog.LOCALE and goog.i18n instead.
     */
    function getLocale(): string;

    /**
     * Enum of resources that can be registered.
     * @enum {string}
     */
    enum Resource { DATE_TIME_CONSTANTS, NUMBER_FORMAT_CONSTANTS, TIME_ZONE_CONSTANTS, LOCAL_NAME_CONSTANTS, TIME_ZONE_SELECTED_IDS, TIME_ZONE_SELECTED_SHORT_NAMES, TIME_ZONE_SELECTED_LONG_NAMES, TIME_ZONE_ALL_LONG_NAMES } 

    /**
     * Returns the language-subtag of the given language code.
     *
     * @param {string} languageCode Language code to extract language subtag from.
     * @return {string} Language subtag (in lowercase).
     */
    function getLanguageSubTag(languageCode: string): string;

    /**
     * Returns the region-sub-tag of the given language code.
     *
     * @param {string} languageCode Language code to extract region subtag from.
     * @return {string} Region sub-tag (in uppercase).
     */
    function getRegionSubTag(languageCode: string): string;

    /**
     * Returns the script subtag of the locale with the first alphabet in uppercase
     * and the rest 3 characters in lower case.
     *
     * @param {string} languageCode Language Code to extract script subtag from.
     * @return {string} Script subtag.
     */
    function getScriptSubTag(languageCode: string): string;

    /**
     * Returns the variant-sub-tag of the given language code.
     *
     * @param {string} languageCode Language code to extract variant subtag from.
     * @return {string} Variant sub-tag.
     */
    function getVariantSubTag(languageCode: string): string;

    /**
     * Returns the country name of the provided language code in its native
     * language.
     *
     * This method depends on goog.locale.nativeNameConstants available from
     * nativenameconstants.js. User of this method has to add dependency to this.
     *
     * @param {string} countryCode Code to lookup the country name for.
     *
     * @return {string} Country name for the provided language code.
     */
    function getNativeCountryName(countryCode: string): string;

    /**
     * Returns the localized country name for the provided language code in the
     * current or provided locale symbols set.
     *
     * This method depends on goog.locale.LocaleNameConstants__<locale> available
     * from http://go/js_locale_data. User of this method has to add dependency to
     * this.
     *
     * @param {string} languageCode Language code to lookup the country name for.
     * @param {Object=} opt_localeSymbols If omitted the current locale symbol
     *     set is used.
     *
     * @return {string} Localized country name.
     */
    function getLocalizedCountryName(languageCode: string, opt_localeSymbols?: Object): string;

    /**
     * Returns the language name of the provided language code in its native
     * language.
     *
     * This method depends on goog.locale.nativeNameConstants available from
     * nativenameconstants.js. User of this method has to add dependency to this.
     *
     * @param {string} languageCode Language code to lookup the language name for.
     *
     * @return {string} Language name for the provided language code.
     */
    function getNativeLanguageName(languageCode: string): string;

    /**
     * Returns the localized language name for the provided language code in
     * the current or provided locale symbols set.
     *
     * This method depends on goog.locale.LocaleNameConstants__<locale> available
     * from http://go/js_locale_data. User of this method has to add dependency to
     * this.
     *
     * @param {string} languageCode Language code to lookup the language name for.
     * @param {Object=} opt_localeSymbols locale symbol set if given.
     *
     * @return {string} Localized language name of the provided language code.
     */
    function getLocalizedLanguageName(languageCode: string, opt_localeSymbols?: Object): string;

    /**
     * Register a resource object for certain locale.
     * @param {Object} dataObj The resource object being registered.
     * @param {goog.locale.Resource|string} resourceName String that represents
     *     the type of resource.
     * @param {string} localeName Locale ID.
     */
    function registerResource(dataObj: Object, resourceName: any /*goog.locale.Resource|string*/, localeName: string): void;

    /**
     * Returns true if the required resource has already been registered.
     * @param {goog.locale.Resource|string} resourceName String that represents
     *     the type of resource.
     * @param {string} localeName Locale ID.
     * @return {boolean} Whether the required resource has already been registered.
     */
    function isResourceRegistered(resourceName: any /*goog.locale.Resource|string*/, localeName: string): boolean;

    /**
     * Registers the timezone constants object for a given locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     * @deprecated Use goog.i18n.TimeZone, no longer need this.
     */
    function registerTimeZoneConstants(dataObj: Object, localeName: string): void;

    /**
     * Registers the LocaleNameConstants constants object for a given locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    function registerLocaleNameConstants(dataObj: Object, localeName: string): void;

    /**
     * Registers the TimeZoneSelectedIds constants object for a given locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    function registerTimeZoneSelectedIds(dataObj: Object, localeName: string): void;

    /**
     * Registers the TimeZoneSelectedShortNames constants object for a given
     *     locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    function registerTimeZoneSelectedShortNames(dataObj: Object, localeName: string): void;

    /**
     * Registers the TimeZoneSelectedLongNames constants object for a given locale
     *     name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    function registerTimeZoneSelectedLongNames(dataObj: Object, localeName: string): void;

    /**
     * Registers the TimeZoneAllLongNames constants object for a given locale name.
     * @param {Object} dataObj The resource object.
     * @param {string} localeName Locale ID.
     */
    function registerTimeZoneAllLongNames(dataObj: Object, localeName: string): void;

    /**
     * Retrieve specified resource for certain locale.
     * @param {string} resourceName String that represents the type of resource.
     * @param {string=} opt_locale Locale ID, if not given, current locale
     *     will be assumed.
     * @return {Object|undefined} The resource object that hold all the resource
     *     data, or undefined if not available.
     */
    function getResource(resourceName: string, opt_locale?: string): any /*Object|any (undefined)*/;

    /**
     * Retrieve specified resource for certain locale with fallback. For example,
     * request of 'zh_CN' will be resolved in following order: zh_CN, zh, en.
     * If none of the above succeeds, of if the resource as indicated by
     * resourceName does not exist at all, undefined will be returned.
     *
     * @param {string} resourceName String that represents the type of resource.
     * @param {string=} opt_locale locale ID, if not given, current locale
     *     will be assumed.
     * @return {Object|undefined} The resource object for desired locale.
     */
    function getResourceWithFallback(resourceName: string, opt_locale?: string): any /*Object|any (undefined)*/;

    /**
     * Native country and language names
     * @type {Object}
     */
    var nativeNameConstants: Object;

    /**
     * The script code to list of language codes map.
     * @type {Object}
     */
    var scriptToLanguages: Object;

    /**
     * Time zone fingerprint mapping to time zone list.
     * @enum {Array.<string>}
     */
    enum TimeZoneFingerprint { 919994368, 6, 8, 839516172, 983564836, 487587858, 20, 22, 24, 25, 26, 28, 931091802, 30, 32, 34, 35, 941621262, 37, 38, 39, 40, 626175324, 42, 44, 46, 48, 570425352, 50, 52, 54, 56, 58, 60, 62, 64, 66, 67, 68, 70, 72, 49938444, 905969678, 626339164, 939579406, 487915538, 937427058, 778043508, 474655352, 269133956, 948087430, 671787146, 617261764, 830603252, 805300897, 805312524, 984437412, 850043558, 29, 710950176, 617786052, 105862464, 581567010, 1294772902, 483044050, 491433170, 36, 626175196, 919994592, 946339336, 1037565906, 670913918, 41, 572522538, 403351686, 626338524, 411740806, 635437856, 617261788, 947956358, 12, 626306268, 497024903, 456480044, 312471854, 626347356, 897537370, 680176266, 1465210176, 805312908, 492088530, 901076366, 943019406, 928339288, 939480410, 626392412, 559943005, 592794974, 76502378, 838860812, 931091834, 662525310, 1465865536, 495058823, 599086472, 805337484, 1001739662, 836894706, 599086512, 836894708, 41025476, 501219282, 970325971, 769654750, 1286253222, 1373765610, 973078513, 838860786, 970326003, 771751924, 952805774, 483699410 } 

    /**
     * Returns the displayable list of short timezone names paired with its id for
     * the current locale, selected based on the region or language provided.
     *
     * This method depends on goog.locale.TimeZone*__<locale> available
     * from http://go/js_locale_data. Users of this method must add a dependency on
     * this.
     *
     * @param {string=} opt_regionOrLang If region tag is provided, timezone ids
     *    specific this region are considered. If language is provided, all regions
     *    for which this language is defacto official is considered. If
     *    this parameter is not speficied, current locale is used to
     *    extract this information.
     *
     * @return {Array.<Object>} Localized and relevant list of timezone names
     *    and ids.
     */
    function getTimeZoneSelectedShortNames(opt_regionOrLang?: string): Object[];

    /**
     * Returns the displayable list of long timezone names paired with its id for
     * the current locale, selected based on the region or language provided.
     *
     * This method depends on goog.locale.TimeZone*__<locale> available
     * from http://go/js_locale_data. Users of this method must add a dependency on
     * this.
     *
     * @param {string=} opt_regionOrLang If region tag is provided, timezone ids
     *    specific this region are considered. If language is provided, all regions
     *    for which this language is defacto official is considered. If
     *    this parameter is not speficied, current locale is used to
     *    extract this information.
     *
     * @return {Array.<Object>} Localized and relevant list of timezone names
     *    and ids.
     */
    function getTimeZoneSelectedLongNames(opt_regionOrLang?: string): Object[];

    /**
     * Returns the displayable list of long timezone names paired with its id for
     * the current locale.
     *
     * This method depends on goog.locale.TimeZoneAllLongNames__<locale> available
     * from http://go/js_locale_data. Users of this method must add a dependency on
     * this.
     *
     * @return {Array.<Object>} localized and relevant list of timezone names
     *    and ids.
     */
    function getTimeZoneAllLongNames(): Object[];
}

declare module 'goog.locale.genericFontNames' {

    /**
     * Gets the list of fonts and their generic names for the given locale.
     * @param {string} locale The locale for which font lists and font family names
     *     to be produced. The expected locale id is as described in
     *     http://wiki/Main/IIISynonyms in all lowercase for easy matching.
     *     Smallest possible id is expected.
     *     Examples: 'zh', 'zh-tw', 'iw' instead of 'zh-CN', 'zh-Hant-TW', 'he'.
     * @return {Array.<Object>} List of objects with generic name as 'caption' and
     *     corresponding font name lists as 'value' property.
     */
    function getList(locale: string): Object[];
}

declare module 'goog.locale.timeZoneDetection' {

    /**
     * Calculates time zone fingerprint by poking time zone offsets for 13
     * preselected time points.
     * See {@link goog.locale.timeZoneDetection.TZ_POKE_POINTS_}
     * @param {Date} date Date for calculating the fingerprint.
     * @return {number} Fingerprint of user's time zone setting.
     */
    function getFingerprint(date: Date): number;

    /**
     * Detects browser's time zone setting. If user's country is known, a better
     * time zone choice could be guessed.
     * @param {string=} opt_country Two-letter ISO 3166 country code.
     * @param {Date=} opt_date Date for calculating the fingerprint. Defaults to the
     *     current date.
     * @return {string} Time zone ID of best guess.
     */
    function detectTimeZone(opt_country?: string, opt_date?: Date): string;

    /**
     * Returns an array of time zones that are consistent with user's platform
     * setting. If user's country is given, only the time zone for that country is
     * returned.
     * @param {string=} opt_country 2 letter ISO 3166 country code. Helps in making
     *     a better guess for user's time zone.
     * @param {Date=} opt_date Date for retrieving timezone list. Defaults to the
     *     current date.
     * @return {!Array.<string>} Array of time zone IDs.
     */
    function getTimeZoneList(opt_country?: string, opt_date?: Date): string[];
}

