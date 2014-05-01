// Generated Wed Apr 30 16:36:00 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/i18n.d.ts" />
/// <reference path="../goog/json.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/useragent.d.ts" />

declare module 'goog.format.EmailAddress' {

    /**
     * A string representing the RegExp for the local part of an email address.
     * @private {string}
     */
    var LOCAL_PART_REGEXP_STR_: any /*missing*/;

    /**
     * A string representing the RegExp for the domain part of an email address.
     * @private {string}
     */
    var DOMAIN_PART_REGEXP_STR_: any /*missing*/;

    /**
     * A RegExp to match the local part of an email address.
     * @private {RegExp}
     */
    var LOCAL_PART_: any /*missing*/;

    /**
     * A RegExp to match the domain part of an email address.
     * @private {RegExp}
     */
    var DOMAIN_PART_: any /*missing*/;

    /**
     * A RegExp to match an email address.
     * @private {RegExp}
     */
    var EMAIL_ADDRESS_: any /*missing*/;

    /**
     * Checks if the provided string is a valid email address. Supports both
     * simple email addresses (address specs) and addresses that contain display
     * names.
     * @param {string} str The email address to check.
     * @return {boolean} Whether the provided string is a valid address.
     */
    function isValidAddress(str: string): boolean;

    /**
     * Checks if the provided string is a valid address spec (local@domain.com).
     * @param {string} str The email address to check.
     * @return {boolean} Whether the provided string is a valid address spec.
     */
    function isValidAddrSpec(str: string): boolean;

    /**
     * Checks if the provided string is a valid local port (part before the '@') of
     * an email address.
     * @param {string} str The local part to check.
     * @return {boolean} Whether the provided string is a valid local part.
     */
    function isValidLocalPartSpec(str: string): boolean;

    /**
     * Checks if the provided string is a valid domain port (part after the '@') of
     * an email address.
     * @param {string} str The domain part to check.
     * @return {boolean} Whether the provided string is a valid domain part.
     */
    function isValidDomainPartSpec(str: string): boolean;

    /**
     * Parse an email address of the form "name" &lt;address&gt; into
     * an email address.
     * @param {string} addr The address string.
     * @return {!goog.format.EmailAddress} The parsed address.
     */
    function parse(addr: string): goog.format.EmailAddress;

    /**
     * Parse a string containing email addresses of the form
     * "name" &lt;address&gt; into an array of email addresses.
     * @param {string} str The address list.
     * @return {!Array.<!goog.format.EmailAddress>} The parsed emails.
     */
    function parseList(str: string): goog.format.EmailAddress[];
}

declare module 'goog.format' {

    /**
     * Formats a number of bytes in human readable form.
     * 54, 450K, 1.3M, 5G etc.
     * @param {number} bytes The number of bytes to show.
     * @param {number=} opt_decimals The number of decimals to use.  Defaults to 2.
     * @return {string} The human readable form of the byte size.
     */
    function fileSize(bytes: number, opt_decimals?: number): string;

    /**
     * Checks whether string value containing scaling units (K, M, G, T, P, m,
     * u, n) can be converted to a number.
     *
     * Where there is a decimal, there must be a digit to the left of the
     * decimal point.
     *
     * Negative numbers are valid.
     *
     * Examples:
     *   0, 1, 1.0, 10.4K, 2.3M, -0.3P, 1.2m
     *
     * @param {string} val String value to check.
     * @return {boolean} True if string could be converted to a numeric value.
     */
    function isConvertableScaledNumber(val: string): boolean;

    /**
     * Converts a string to numeric value, taking into account the units.
     * If string ends in 'B', use binary conversion.
     * @param {string} stringValue String to be converted to numeric value.
     * @return {number} Numeric value for string.
     */
    function stringToNumericValue(stringValue: string): number;

    /**
     * Converts a string to number of bytes, taking into account the units.
     * Binary conversion.
     * @param {string} stringValue String to be converted to numeric value.
     * @return {number} Numeric value for string.
     */
    function stringToNumBytes(stringValue: string): number;

    /**
     * Converts a numeric value to string representation. SI conversion.
     * @param {number} val Value to be converted.
     * @param {number=} opt_decimals The number of decimals to use.  Defaults to 2.
     * @return {string} String representation of number.
     */
    function numericValueToString(val: number, opt_decimals?: number): string;

    /**
     * Converts number of bytes to string representation. Binary conversion.
     * Default is to return the additional 'B' suffix, e.g. '10.5KB' to minimize
     * confusion with counts that are scaled by powers of 1000.
     * @param {number} val Value to be converted.
     * @param {number=} opt_decimals The number of decimals to use.  Defaults to 2.
     * @param {boolean=} opt_suffix If true, include trailing 'B' in returned
     *     string.  Default is true.
     * @param {boolean=} opt_useSeparator If true, number and scale will be
     *     separated by a no break space. Default is false.
     * @return {string} String representation of number of bytes.
     */
    function numBytesToString(val: number, opt_decimals?: number, opt_suffix?: boolean, opt_useSeparator?: boolean): string;

    /**
     * Inserts word breaks into an HTML string at a given interval.
     *
     * This method is as aggressive as possible, using a full table of Unicode
     * characters where it is legal to insert word breaks; however, this table
     * comes at a 2.5k pre-gzip (~1k post-gzip) size cost.  Consider using
     * insertWordBreaksBasic to minimize the size impact.
     *
     * @param {string} str HTML to insert word breaks into.
     * @param {number=} opt_maxlen Maximum length after which to ensure there is a
     *     break.  Default is 10 characters.
     * @return {string} The string including word breaks.
     */
    function insertWordBreaks(str: string, opt_maxlen?: number): string;

    /**
     * Inserts word breaks into an HTML string at a given interval.
     *
     * This method is less aggressive than insertWordBreaks, only inserting
     * breaks next to punctuation and between Latin or Cyrillic characters.
     * However, this is good enough for the common case of URLs.  It also
     * works for all Latin and Cyrillic languages, plus CJK has no need for word
     * breaks.  When this method is used, goog.i18n.GraphemeBreak may be dead
     * code eliminated.
     *
     * @param {string} str HTML to insert word breaks into.
     * @param {number=} opt_maxlen Maximum length after which to ensure there is a
     *     break.  Default is 10 characters.
     * @return {string} The string including word breaks.
     */
    function insertWordBreaksBasic(str: string, opt_maxlen?: number): string;

    /**
     * Constant for the WBR replacement used by insertWordBreaks.  Safari requires
     * <wbr></wbr>, Opera needs the &shy; entity, though this will give a visible
     * hyphen at breaks.  IE8 uses a zero width space.
     * Other browsers just use <wbr>.
     * @type {string}
     */
    var WORD_BREAK_HTML: string;

    /**
     * Formats an email address string for display, and allows for extraction of
     * The individual componants of the address.
     * @param {string=} opt_address The email address.
     * @param {string=} opt_name The name associated with the email address.
     * @constructor
     * @final
     */
    class EmailAddress {
        /**
         * Formats an email address string for display, and allows for extraction of
         * The individual componants of the address.
         * @param {string=} opt_address The email address.
         * @param {string=} opt_name The name associated with the email address.
         * @constructor
         * @final
         */
        constructor(opt_address?: string, opt_name?: string);
    
        /**
         * Get the name associated with the email address.
         * @return {string} The name or personal portion of the address.
         */
        getName(): string;
    
        /**
         * Get the email address.
         * @return {string} The email address.
         */
        getAddress(): string;
    
        /**
         * Set the name associated with the email address.
         * @param {string} name The name to associate.
         */
        setName(name: string): void;
    
        /**
         * Set the email address.
         * @param {string} address The email address.
         */
        setAddress(address: string): void;
    
        /**
         * Return the address in a standard format:
         *  - remove extra spaces.
         *  - Surround name with quotes if it contains special characters.
         * @return {string} The cleaned address.
         * @override
         */
        toString(): string;
    
        /**
         * Determines is the current object is a valid email address.
         * @return {boolean} Whether the email address is valid.
         */
        isValid(): boolean;
    }

    /**
     * This class formats HTML to be more human-readable.
     * TODO(user): Add hierarchical indentation.
     * @param {number=} opt_timeOutMillis Max # milliseconds to spend on #format. If
     *     this time is exceeded, return partially formatted. 0 or negative number
     *     indicates no timeout.
     * @constructor
     * @final
     */
    class HtmlPrettyPrinter {
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

    /**
     * Formats a JSON object as a string, properly indented for display.  Supports
     * displaying the string as text or html.  Users can also specify their own
     * set of delimiters for different environments.  For example, the JSON object:
     *
     * <code>{"a": 1, "b": {"c": null, "d": true, "e": [1, 2]}}</code>
     *
     * Will be displayed like this:
     *
     * <code>{
     *   "a": 1,
     *   "b": {
     *     "c": null,
     *     "d": true,
     *     "e": [
     *       1,
     *       2
     *     ]
     *   }
     * }</code>
     * @param {goog.format.JsonPrettyPrinter.TextDelimiters} delimiters Container
     *     for the various strings to use to delimit objects, arrays, newlines, and
     *     other pieces of the output.
     * @constructor
     */
    class JsonPrettyPrinter {
        /**
         * Formats a JSON object as a string, properly indented for display.  Supports
         * displaying the string as text or html.  Users can also specify their own
         * set of delimiters for different environments.  For example, the JSON object:
         *
         * <code>{"a": 1, "b": {"c": null, "d": true, "e": [1, 2]}}</code>
         *
         * Will be displayed like this:
         *
         * <code>{
         *   "a": 1,
         *   "b": {
         *     "c": null,
         *     "d": true,
         *     "e": [
         *       1,
         *       2
         *     ]
         *   }
         * }</code>
         * @param {goog.format.JsonPrettyPrinter.TextDelimiters} delimiters Container
         *     for the various strings to use to delimit objects, arrays, newlines, and
         *     other pieces of the output.
         * @constructor
         */
        constructor(delimiters: goog.format.JsonPrettyPrinter.TextDelimiters);
    
        /**
         * Formats a JSON object as a string, properly indented for display.
         * @param {*} json The object to pretty print. It could be a JSON object, a
         *     string representing a JSON object, or any other type.
         * @return {string} Returns a string of the JSON object, properly indented for
         *     display.
         */
        format(json: any): string;
    }
}

declare module 'goog.format.HtmlPrettyPrinter' {

    /**
     * Static utility function. See prototype #format.
     * @param {string} html The HTML text to pretty print.
     * @return {string} Formatted result.
     */
    function format(html: string): string;

    /**
     * This class is a buffer to which we push our output. It tracks line breaks to
     * make sure we don't add unnecessary ones.
     * @constructor
     * @final
     */
    class Buffer {
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
    
        /**
         * @return {string} String representation of tokens.
         * @override
         */
        toString(): string;
    }
}

declare module 'goog.format.JsonPrettyPrinter' {

    /**
     * A container for the delimiting characters used to display the JSON string
     * to a text display.  Each delimiter is a publicly accessible property of
     * the object, which makes it easy to tweak delimiters to specific environments.
     * @constructor
     */
    class TextDelimiters {
        /**
         * A container for the delimiting characters used to display the JSON string
         * to a text display.  Each delimiter is a publicly accessible property of
         * the object, which makes it easy to tweak delimiters to specific environments.
         * @constructor
         */
        constructor();
    
        /**
         * Represents a space character in the output.  Used to indent properties a
         * certain number of spaces, and to separate property names from property
         * values.
         * @type {string}
         */
        space: string;
    
        /**
         * Represents a newline character in the output.  Used to begin a new line.
         * @type {string}
         */
        lineBreak: string;
    
        /**
         * Represents the start of an object in the output.
         * @type {string}
         */
        objectStart: string;
    
        /**
         * Represents the end of an object in the output.
         * @type {string}
         */
        objectEnd: string;
    
        /**
         * Represents the start of an array in the output.
         * @type {string}
         */
        arrayStart: string;
    
        /**
         * Represents the end of an array in the output.
         * @type {string}
         */
        arrayEnd: string;
    
        /**
         * Represents the string used to separate properties in the output.
         * @type {string}
         */
        propertySeparator: string;
    
        /**
         * Represents the string used to separate property names from property values in
         * the output.
         * @type {string}
         */
        nameValueSeparator: string;
    
        /**
         * A string that's placed before a property name in the output.  Useful for
         * wrapping a property name in an html tag.
         * @type {string}
         */
        preName: string;
    
        /**
         * A string that's placed after a property name in the output.  Useful for
         * wrapping a property name in an html tag.
         * @type {string}
         */
        postName: string;
    
        /**
         * A string that's placed before a property value in the output.  Useful for
         * wrapping a property value in an html tag.
         * @type {string}
         */
        preValue: string;
    
        /**
         * A string that's placed after a property value in the output.  Useful for
         * wrapping a property value in an html tag.
         * @type {string}
         */
        postValue: string;
    
        /**
         * Represents the number of spaces to indent each sub-property of the JSON.
         * @type {number}
         */
        indent: number;
    }

    /**
     * A container for the delimiting characters used to display the JSON string
     * to an HTML <code>&lt;pre&gt;</code> or <code>&lt;code&gt;</code> element.
     * @constructor
     * @extends {goog.format.JsonPrettyPrinter.TextDelimiters}
     * @final
     */
    class HtmlDelimiters extends goog.format.JsonPrettyPrinter.TextDelimiters {
        /**
         * A container for the delimiting characters used to display the JSON string
         * to an HTML <code>&lt;pre&gt;</code> or <code>&lt;code&gt;</code> element.
         * @constructor
         * @extends {goog.format.JsonPrettyPrinter.TextDelimiters}
         * @final
         */
        constructor();
    
        /**
         * A <code>span</code> tag thats placed before a property name.  Used to style
         * property names with CSS.
         * @type {string}
         * @override
         */
        preName: string;
    
        /**
         * A closing <code>span</code> tag that's placed after a property name.
         * @type {string}
         * @override
         */
        postName: string;
    
        /**
         * A <code>span</code> tag thats placed before a property value.  Used to style
         * property value with CSS.  The span tag's class is in the format
         * goog-jsonprettyprinter-propertyvalue-{TYPE}, where {TYPE} is the JavaScript
         * type of the object (the {TYPE} parameter is obtained from goog.typeOf).  This
         * can be used to style different value types.
         * @type {string}
         * @override
         */
        preValue: string;
    
        /**
         * A closing <code>span</code> tag that's placed after a property value.
         * @type {string}
         * @override
         */
        postValue: string;
    }
}

