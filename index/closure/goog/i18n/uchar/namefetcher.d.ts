// Generated Thu May  1 12:42:56 PDT 2014

/// <reference path="../../../goog/base.d.ts" />

declare module goog.i18n.uChar {

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
}

