// Generated Fri May  2 14:58:21 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/math/integer.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />

declare module goog.net.IpAddress {

    /**
     * Parses an IP Address in a string.
     * If the string is malformed, the function will simply return null
     * instead of raising an exception.
     *
     * @param {string} address The IP Address.
     * @see {goog.net.Ipv4Address}
     * @see {goog.net.Ipv6Address}
     * @return {goog.net.IpAddress} The IP Address or null.
     */
    function fromString(address: string): goog.net.IpAddress;

    /**
     * Tries to parse a string represented as a host portion of an URI.
     * See RFC 3986 for more details on IPv6 addresses inside URI.
     * If the string is malformed, the function will simply return null
     * instead of raising an exception.
     *
     * @param {string} address A RFC 3986 encoded IP address.
     * @see {goog.net.Ipv4Address}
     * @see {goog.net.Ipv6Address}
     * @return {goog.net.IpAddress} The IP Address.
     */
    function fromUriString(address: string): goog.net.IpAddress;
}

declare module goog.net.Ipv4Address {

    /**
     * The Maximum length for a netmask (aka, the number of bits for IPv4).
     * @type {number}
     * @const
     */
    var MAX_NETMASK_LENGTH: number;
}

declare module goog.net.Ipv6Address {

    /**
     * The Maximum length for a netmask (aka, the number of bits for IPv6).
     * @type {number}
     * @const
     */
    var MAX_NETMASK_LENGTH: number;
}

declare module goog.net {

    /**
     * Abstract class defining an IP Address.
     *
     * Please use goog.net.IpAddress static methods or
     * goog.net.Ipv4Address/Ipv6Address classes.
     *
     * @param {!goog.math.Integer} address The Ip Address.
     * @param {number} version The version number (4, 6).
     * @constructor
     */
    class GoogIpAddress {
        /**
         * Abstract class defining an IP Address.
         *
         * Please use goog.net.IpAddress static methods or
         * goog.net.Ipv4Address/Ipv6Address classes.
         *
         * @param {!goog.math.Integer} address The Ip Address.
         * @param {number} version The version number (4, 6).
         * @constructor
         */
        constructor(address: goog.math.Integer, version: number);
    
        /**
         * @return {number} The IP Address version.
         */
        getVersion(): number;
    
        /**
         * @param {!goog.net.IpAddress} other The other IP Address.
         * @return {boolean} true if the IP Addresses are equal.
         */
        equals(other: goog.net.IpAddress): boolean;
    
        /**
         * @return {goog.math.Integer} The IP Address, as an Integer.
         */
        toInteger(): goog.math.Integer;
    
        /**
         * @return {string} The IP Address, as an URI string following RFC 3986.
         */
        toUriString(): string;
    }

    class IpAddress extends GoogIpAddress { }

    /**
     * Takes a string or a number and returns a IPv4 Address.
     *
     * This constructor accepts strings and instance of goog.math.Integer.
     * If you pass a goog.math.Integer, make sure that its sign is set to positive.
     * @param {(string|!goog.math.Integer)} address The address to store.
     * @extends {goog.net.IpAddress}
     * @constructor
     * @final
     */
    class Ipv4Address extends goog.net.GoogIpAddress {
        /**
         * Takes a string or a number and returns a IPv4 Address.
         *
         * This constructor accepts strings and instance of goog.math.Integer.
         * If you pass a goog.math.Integer, make sure that its sign is set to positive.
         * @param {(string|!goog.math.Integer)} address The address to store.
         * @extends {goog.net.IpAddress}
         * @constructor
         * @final
         */
        constructor(address: any /*string|goog.math.Integer*/);
    }

    /**
     * Takes a string or a number and returns an IPv6 Address.
     *
     * This constructor accepts strings and instance of goog.math.Integer.
     * If you pass a goog.math.Integer, make sure that its sign is set to positive.
     * @param {(string|!goog.math.Integer)} address The address to store.
     * @constructor
     * @extends {goog.net.IpAddress}
     * @final
     */
    class Ipv6Address extends goog.net.GoogIpAddress {
        /**
         * Takes a string or a number and returns an IPv6 Address.
         *
         * This constructor accepts strings and instance of goog.math.Integer.
         * If you pass a goog.math.Integer, make sure that its sign is set to positive.
         * @param {(string|!goog.math.Integer)} address The address to store.
         * @constructor
         * @extends {goog.net.IpAddress}
         * @final
         */
        constructor(address: any /*string|goog.math.Integer*/);
    
        /**
         * @return {boolean} true if the IPv6 contains a mapped IPv4.
         */
        isMappedIpv4Address(): boolean;
    
        /**
         * Will return the mapped IPv4 address in this IPv6 address.
         * @return {goog.net.Ipv4Address} an IPv4 or null.
         */
        getMappedIpv4Address(): goog.net.Ipv4Address;
    }
}

