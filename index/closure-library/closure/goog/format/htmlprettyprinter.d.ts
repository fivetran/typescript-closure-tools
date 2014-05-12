/// <reference path="../../../globals.d.ts" />

declare module goog.format {

    class HtmlPrettyPrinter extends HtmlPrettyPrinter.__Class { }
    module HtmlPrettyPrinter {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * This class formats HTML to be more human-readable.
             * TODO(user): Add hierarchical indentation.
             * @param {number=} opt_timeOutMillis Max # milliseconds to spend on #format. If
             *     this time is exceeded, return partially formatted. 0 or negative number
             *     indicates no timeout.
             * @constructor
             * @final
             */
            constructor(opt_timeOutMillis?: number);
    
            /**
             * Breaks up HTML so it's easily readable by the user.
             * @param {string} html The HTML text to pretty print.
             * @return {string} Formatted result.
             * @throws {Error} Regex error, data loss, or endless loop detected.
             */
            format(html: string): string;
        }
    }
}

declare module goog.format.HtmlPrettyPrinter {

    class Buffer extends Buffer.__Class { }
    module Buffer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * This class is a buffer to which we push our output. It tracks line breaks to
             * make sure we don't add unnecessary ones.
             * @constructor
             * @final
             */
            constructor();
    
            /**
             * Tracks number of line breaks added.
             * @type {number}
             */
            breakCount: number;
    
            /**
             * Adds token and necessary line breaks to output buffer.
             * @param {boolean} breakBefore If true, add line break before token if
             *     necessary.
             * @param {string} token Token to push.
             * @param {boolean} breakAfter If true, add line break after token if
             *     necessary.
             */
            pushToken(breakBefore: boolean, token: string, breakAfter: boolean): void;
    
            /**
             * Append line break if we need one.
             */
            lineBreak(): void;
        }
    }

    /**
     * Static utility function. See prototype #format.
     * @param {string} html The HTML text to pretty print.
     * @return {string} Formatted result.
     */
    function format(html: string): string;
}
