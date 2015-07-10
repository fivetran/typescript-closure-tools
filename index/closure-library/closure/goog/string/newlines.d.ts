/// <reference path="../../../globals.d.ts" />

declare module goog._string.newlines {

    class Line extends Line__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Line__Class  { 
    
            /**
             * Line metadata class that records the start/end indicies of lines
             * in a string.  Can be used to implement common newline use cases such as
             * splitLines() or determining line/column of an index in a string.
             * Also implements methods to get line contents.
             *
             * Indexes are expressed as string indicies into string.substring(), inclusive
             * at the start, exclusive at the end.
             *
             * Create an array of these with goog.string.newlines.getLines().
             * @param {string} string The original string.
             * @param {number} startLineIndex The index of the start of the line.
             * @param {number} endContentIndex The index of the end of the line, excluding
             *     newlines.
             * @param {number} endLineIndex The index of the end of the line, index
             *     newlines.
             * @constructor
             * @struct
             * @final
             */
            constructor(string: string, startLineIndex: number, endContentIndex: number, endLineIndex: number);
    
            /**
             * The original string.
             * @type {string}
             */
            string: string;
    
            /**
             * Index of the start of the line.
             * @type {number}
             */
            startLineIndex: number;
    
            /**
             * Index of the end of the line, excluding any newline characters.
             * Index is the first character after the line, suitable for
             * String.substring().
             * @type {number}
             */
            endContentIndex: number;
    
            /**
             * Index of the end of the line, excluding any newline characters.
             * Index is the first character after the line, suitable for
             * String.substring().
             * @type {number}
             */
            endLineIndex: number;
    
            /**
             * @return {string} The content of the line, excluding any newline characters.
             */
            getContent(): string;
    
            /**
             * @return {string} The full line, including any newline characters.
             */
            getFullLine(): string;
    
            /**
             * @return {string} The newline characters, if any ('\n', \r', '\r\n', '', etc).
             */
            getNewline(): string;
    } 
    

    /**
     * Splits a string into lines, properly handling universal newlines.
     * @param {string} str String to split.
     * @param {boolean=} opt_keepNewlines Whether to keep the newlines in the
     *     resulting strings. Defaults to false.
     * @return {!Array.<string>} String split into lines.
     */
    function splitLines(str: string, opt_keepNewlines?: boolean): string[];

    /**
     * Splits a string into an array of line metadata.
     * @param {string} str String to split.
     * @return {!Array.<!goog.string.newlines.Line>} Array of line metadata.
     */
    function getLines(str: string): goog.string.newlines.Line[];
}
