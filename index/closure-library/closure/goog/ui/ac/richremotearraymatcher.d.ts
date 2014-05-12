/// <reference path="../../../../globals.d.ts" />
/// <reference path="./remotearraymatcher.d.ts" />

declare module goog.ui.ac {

    class RichRemoteArrayMatcher extends RichRemoteArrayMatcher.__Class { }
    module RichRemoteArrayMatcher {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ac.RemoteArrayMatcher.__Class {
    
            /**
             * An array matcher that requests rich matches via ajax and converts them into
             * rich rows.
             * @param {string} url The Uri which generates the auto complete matches.  The
             *     search term is passed to the server as the 'token' query param.
             * @param {boolean=} opt_noSimilar If true, request that the server does not do
             *     similarity matches for the input token against the dictionary.
             *     The value is sent to the server as the 'use_similar' query param which is
             *     either "1" (opt_noSimilar==false) or "0" (opt_noSimilar==true).
             * @constructor
             * @extends {goog.ui.ac.RemoteArrayMatcher}
             */
            constructor(url: string, opt_noSimilar?: boolean);
    
            /**
             * Set the filter that is called before the array matches are returned.
             * @param {Function} rowFilter A function(rows) that returns an array of rows as
             *     a subset of the rows input array.
             */
            setRowFilter(rowFilter: Function): void;
        }
    }
}
