/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="../uri/uri.d.ts" />

declare module goog.net {

    class BulkLoaderHelper extends BulkLoaderHelper.__Class { }
    module BulkLoaderHelper {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
            /**
             * Helper class used to load multiple URIs.
             * @param {Array.<string|goog.Uri>} uris The URIs to load.
             * @constructor
             * @extends {goog.Disposable}
             * @final
             */
            constructor(uris: any /*string|goog.Uri*/[]);
    
            /**
             * Gets the URI by id.
             * @param {number} id The id.
             * @return {string|goog.Uri} The URI specified by the id.
             */
            getUri(id: number): any /*string|goog.Uri*/;
    
            /**
             * Gets the URIs.
             * @return {Array.<string|goog.Uri>} The URIs.
             */
            getUris(): any /*string|goog.Uri*/[];
    
            /**
             * Gets the response texts.
             * @return {Array.<string>} The response texts.
             */
            getResponseTexts(): string[];
    
            /**
             * Sets the response text by id.
             * @param {number} id The id.
             * @param {string} responseText The response texts.
             */
            setResponseText(id: number, responseText: string): void;
    
            /**
             * Determines if the load of the URIs is complete.
             * @return {boolean} TRUE iff the load is complete.
             */
            isLoadComplete(): boolean;
        }
    }
}
