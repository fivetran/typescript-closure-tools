/// <reference path="../../../../globals.d.ts" />

declare module goog.ui.ac {

    class ArrayMatcher extends ArrayMatcher__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ArrayMatcher__Class  { 
    
            /**
             * Basic class for matching words in an array
             * @constructor
             * @param {Array} rows Dictionary of items to match.  Can be objects if they
             *     have a toString method that returns the value to match against.
             * @param {boolean=} opt_noSimilar if true, do not do similarity matches for the
             *     input token against the dictionary.
             */
            constructor(rows: any[], opt_noSimilar?: boolean);
    
            /**
             * Replaces the rows that this object searches over.
             * @param {Array} rows Dictionary of items to match.
             */
            setRows(rows: any[]): void;
    
            /**
             * Function used to pass matches to the autocomplete
             * @param {string} token Token to match.
             * @param {number} maxMatches Max number of matches to return.
             * @param {Function} matchHandler callback to execute after matching.
             * @param {string=} opt_fullString The full string from the input box.
             */
            requestMatchingRows(token: string, maxMatches: number, matchHandler: Function, opt_fullString?: string): void;
    
            /**
             * Matches the token against the start of words in the row.
             * @param {string} token Token to match.
             * @param {number} maxMatches Max number of matches to return.
             * @return {!Array} Rows that match.
             */
            getPrefixMatches(token: string, maxMatches: number): any[];
    
            /**
             * Matches the token against similar rows, by calculating "distance" between the
             * terms.
             * @param {string} token Token to match.
             * @param {number} maxMatches Max number of matches to return.
             * @return {!Array} The best maxMatches rows.
             */
            getSimilarRows(token: string, maxMatches: number): any[];
    } 
    
}

declare module goog.ui.ac.ArrayMatcher {

    /**
     * Matches the token against the specified rows, first looking for prefix
     * matches and if that fails, then looking for similar matches.
     *
     * @param {string} token Token to match.
     * @param {number} maxMatches Max number of matches to return.
     * @param {!Array} rows Rows to search for matches. Can be objects if they have
     *     a toString method that returns the value to match against.
     * @return {!Array} Rows that match.
     */
    function getMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];

    /**
     * Matches the token against the start of words in the row.
     * @param {string} token Token to match.
     * @param {number} maxMatches Max number of matches to return.
     * @param {!Array} rows Rows to search for matches. Can be objects if they have
     *     a toString method that returns the value to match against.
     * @return {!Array} Rows that match.
     */
    function getPrefixMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];

    /**
     * Matches the token against similar rows, by calculating "distance" between the
     * terms.
     * @param {string} token Token to match.
     * @param {number} maxMatches Max number of matches to return.
     * @param {!Array} rows Rows to search for matches. Can be objects if they have
     *     a toString method that returns the value to match against.
     * @return {!Array} The best maxMatches rows.
     */
    function getSimilarMatchesForRows(token: string, maxMatches: number, rows: any[]): any[];
}
