/// <reference path="../../../globals.d.ts" />

declare module goog.i18n {

    /**
     * The mapping of currency symbol through intl currency code.
     * The source of information is mostly from wikipedia and CLDR. Since there is
     * no authoritive source, items are judged by personal perception.
    
     * If an application need currency support that available in tier2, it
     * should extend currencyCodeMap to include tier2 data by doing this:
     *     goog.object.extend(goog.i18n.currencyCodeMap,
     *                        goog.i18n.currencyCodeMapTier2);
     *
     * @type {Object}
     * @const
     */
    var currencyCodeMap: Object;

    /**
     * This group of currency data is unlikely to be used. In case they are,
     * program need to merge it into goog.locale.CurrencyCodeMap.
     *
     * @type {Object}
     * @const
     */
    var currencyCodeMapTier2: Object;
}
