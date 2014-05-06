/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/i18n/uchar.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/i18n/uchar/namefetcher.d.ts" />

declare module goog.i18n.uChar {

    /**
     * Builds the NameFetcherLocal object. This is a simple object which retrieves
     * character names from a local bundled database. This database only covers
     * invisible characters. See the goog.i18n.uChar class for more details.
     *
     * @constructor
     * @implements {goog.i18n.uChar.NameFetcher}
     * @final
     */
    class LocalNameFetcher implements goog.i18n.uChar.NameFetcher {
        /**
         * Builds the NameFetcherLocal object. This is a simple object which retrieves
         * character names from a local bundled database. This database only covers
         * invisible characters. See the goog.i18n.uChar class for more details.
         *
         * @constructor
         * @implements {goog.i18n.uChar.NameFetcher}
         * @final
         */
        constructor();
    
        /**
         * Retrieves the names of a given set of characters and stores them in a cache
         * for fast retrieval. Offline implementations can simply provide an empty
         * implementation.
         *
         * @param {string} characters The list of characters in base 88 to fetch. These
         *     lists are stored by category and subcategory in the
         *     goog.i18n.charpickerdata class.
         */
        prefetch(characters: string): void;
    
        /**
         * Retrieves the name of a particular character.
         *
         * @param {string} character The character to retrieve.
         * @param {function(?string)} callback The callback function called when the
         *     name retrieval is complete, contains a single string parameter with the
         *     codepoint name, this parameter will be null if the character name is not
         *     defined.
         */
        getName(character: string, callback: (_0: string) => any /*missing*/): void;
    
        /**
         * Tests whether the name of a given character is available to be retrieved by
         * the getName() function.
         *
         * @param {string} character The character to test.
         * @return {boolean} True if the fetcher can retrieve or has a name available
         *     for the given character.
         */
        isNameAvailable(character: string): boolean;
    }
}

