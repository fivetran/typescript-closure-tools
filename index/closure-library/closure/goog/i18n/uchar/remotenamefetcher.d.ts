/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../disposable/disposable.d.ts" />
/// <reference path="./namefetcher.d.ts" />

declare module goog.i18n.uChar {

    class RemoteNameFetcher extends RemoteNameFetcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class RemoteNameFetcher__Class extends goog.Disposable__Class implements goog.i18n.uChar.NameFetcher  { 
    
            /**
             * Builds the RemoteNameFetcher object. This object retrieves codepoint names
             * from a remote data source.
             *
             * @param {string} dataSourceUri URI to the data source.
             * @constructor
             * @implements {goog.i18n.uChar.NameFetcher}
             * @extends {goog.Disposable}
             * @final
             */
            constructor(dataSourceUri: string);
    
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
            getName(character: string, callback: { (_0: string): any /*missing*/ }): void;
    
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

declare module goog.i18n.uChar.RemoteNameFetcher {

    /**
     * Enum for the different request types.
     *
     * @enum {string}
     * @private
     */
    enum RequestType_ { BASE_88, CODEPOINT } 
}
