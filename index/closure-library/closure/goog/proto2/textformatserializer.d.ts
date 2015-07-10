/// <reference path="../../../globals.d.ts" />
/// <reference path="./serializer.d.ts" />
/// <reference path="./message.d.ts" />

declare module goog.proto2 {

    class TextFormatSerializer extends TextFormatSerializer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TextFormatSerializer__Class extends goog.proto2.Serializer__Class  { 
    
            /**
             * TextFormatSerializer, a serializer which turns Messages into the human
             * readable text format.
             * @param {boolean=} opt_ignoreMissingFields If true, then fields that cannot be
             *     found on the proto when parsing the text format will be ignored.
             * @param {boolean=} opt_useEnumValues If true, serialization code for enums
             *     will use enum integer values instead of human-readable symbolic names.
             * @constructor
             * @extends {goog.proto2.Serializer}
             * @final
             */
            constructor(opt_ignoreMissingFields?: boolean, opt_useEnumValues?: boolean);
    } 
    
}

declare module goog.proto2.TextFormatSerializer {

    class Printer_ extends Printer___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Printer___Class  { 
    
            /**
             * Helper class used by the text format serializer for pretty-printing text.
             * @constructor
             * @private
             */
            constructor();
    
            /**
             * Increases the indentation in the printer.
             */
            indent(): void;
    
            /**
             * Decreases the indentation in the printer.
             */
            dedent(): void;
    
            /**
             * Appends the given value to the printer.
             * @param {*} value The value to append.
             */
            append(value: any): void;
    
            /**
             * Appends a newline to the printer.
             */
            appendLine(): void;
    } 
    

    class Tokenizer_ extends Tokenizer___Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Tokenizer___Class  { 
    
            /**
             * Helper class for tokenizing the text format.
             * @param {string} data The string data to tokenize.
             * @param {boolean=} opt_ignoreWhitespace If true, whitespace tokens will not
             *    be reported by the tokenizer.
             * @constructor
             * @private
             */
            constructor(data: string, opt_ignoreWhitespace?: boolean);
    
            /**
             * @return {goog.proto2.TextFormatSerializer.Tokenizer_.Token} The current
             *     token.
             */
            getCurrent(): goog.proto2.TextFormatSerializer.Tokenizer_.Token;
    
            /**
             * Advances to the next token.
             * @return {boolean} True if a valid token was found, false if the end was
             *    reached or no valid token was found.
             */
            next(): boolean;
    } 
    

    class Parser extends Parser__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Parser__Class  { 
    
            /**
             * Helper class for parsing the text format.
             * @constructor
             * @final
             */
            constructor();
    
            /**
             * Parses the given data, filling the message as it goes.
             * @param {goog.proto2.Message} message The message to fill.
             * @param {string} data The text format data.
             * @param {boolean=} opt_ignoreMissingFields If true, fields missing in the
             *     proto will be ignored.
             * @return {boolean} True on success, false on failure. On failure, the
             *     getError method can be called to get the reason for failure.
             */
            parse(message: goog.proto2.Message, data: string, opt_ignoreMissingFields?: boolean): boolean;
    
            /**
             * @return {?string} The parse error, if any.
             */
            getError(): string;
    } 
    
}

declare module goog.proto2.TextFormatSerializer.Tokenizer_ {

    /**
     * @typedef {{type: goog.proto2.TextFormatSerializer.Tokenizer_.TokenTypes,
     *            value: ?string}}
     */
    interface Token {
        type: goog.proto2.TextFormatSerializer.Tokenizer_.TokenTypes;
        value: string
    }

    /**
     * An enumeration of all the token types.
     * @enum {*}
     */
    enum TokenTypes { END, IDENTIFIER, NUMBER, COMMENT, OPEN_BRACE, CLOSE_BRACE, OPEN_TAG, CLOSE_TAG, OPEN_LIST, CLOSE_LIST, STRING, COLON, COMMA, SEMI, WHITESPACE } 
}
