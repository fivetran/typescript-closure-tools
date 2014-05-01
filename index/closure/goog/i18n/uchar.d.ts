// Generated Wed Apr 30 16:41:15 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/i18n.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/json.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/net.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/timer.d.ts" />
/// <reference path="../../goog/uri.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.i18n.uChar' {

    /**
     * NameFetcher interface. Implementations of this interface are used to retrieve
     * Unicode character names.
     *
     * @interface
     */
    interface NameFetcher {
        prefetch(characters: string): void;
        getName(character: string, callback: (_0: string) => any /*missing*/): void;
        isNameAvailable(character: string): boolean;
    }

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
    
        /** @override */
        prefetch(): void;
    
        /** @override */
        getName(): void;
    
        /** @override */
        isNameAvailable(): void;
    }

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
    class RemoteNameFetcher extends goog.Disposable implements goog.i18n.uChar.NameFetcher {
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
    
        /** @override */
        disposeInternal(): void;
    
        /** @override */
        prefetch(): void;
    
        /** @override */
        getName(): void;
    
        /** @override */
        isNameAvailable(): void;
    }
}

