/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />

declare module goog.format {

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
         * Determines is the current object is a valid email address.
         * @return {boolean} Whether the email address is valid.
         */
        isValid(): boolean;
    }
}

declare module goog.format.EmailAddress {

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

