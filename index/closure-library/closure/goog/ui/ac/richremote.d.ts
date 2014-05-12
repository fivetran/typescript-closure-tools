/// <reference path="../../../../globals.d.ts" />
/// <reference path="./remote.d.ts" />

declare module goog.ui.ac {

    class RichRemote extends RichRemote.__Class { }
    module RichRemote {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.ac.Remote.__Class {
    
            /**
             * Factory class to create a rich autocomplete widget that autocompletes an
             * inputbox or textarea from data provided via ajax.  The server returns a
             * complex data structure that is used with client-side javascript functions to
             * render the results.
             * @param {string} url The Uri which generates the auto complete matches.
             * @param {Element} input Input element or text area.
             * @param {boolean=} opt_multi Whether to allow multiple entries; defaults
             *     to false.
             * @param {boolean=} opt_useSimilar Whether to use similar matches; e.g.
             *     "gost" => "ghost".
             * @constructor
             * @extends {goog.ui.ac.Remote}
             */
            constructor(url: string, input: Element, opt_multi?: boolean, opt_useSimilar?: boolean);
    
            /**
             * Set the filter that is called before the array matches are returned.
             * @param {Function} rowFilter A function(rows) that returns an array of rows as
             *     a subset of the rows input array.
             */
            setRowFilter(rowFilter: Function): void;
        }
    }
}
