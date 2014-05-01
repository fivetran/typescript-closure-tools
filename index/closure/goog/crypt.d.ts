// Generated Wed Apr 30 16:30:32 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/async.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/disposable.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/events.d.ts" />
/// <reference path="../goog/fs.d.ts" />
/// <reference path="../goog/functions.d.ts" />
/// <reference path="../goog/iter.d.ts" />
/// <reference path="../goog/labs/useragent.d.ts" />
/// <reference path="../goog/log.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/object.d.ts" />
/// <reference path="../goog/promise.d.ts" />
/// <reference path="../goog/reflect.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />
/// <reference path="../goog/testing.d.ts" />
/// <reference path="../goog/useragent.d.ts" />
/// <reference path="../lib/closure-library/third_party/closure/goog/mochikit/async.d.ts" />

declare module 'goog.crypt.base64' {

    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     * @type {string}
     */
    var ENCODED_VALS_BASE: string;

    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     * @type {string}
     */
    var ENCODED_VALS: string;

    /**
     * Our websafe alphabet.
     * @type {string}
     */
    var ENCODED_VALS_WEBSAFE: string;

    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     * @type {boolean}
     */
    var HAS_NATIVE_SUPPORT: boolean;

    /**
     * Base64-encode an array of bytes.
     *
     * @param {Array.<number>|Uint8Array} input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param {boolean=} opt_webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    function encodeByteArray(input: any /*number[]|Uint8Array*/, opt_webSafe?: boolean): string;

    /**
     * Base64-encode a string.
     *
     * @param {string} input A string to encode.
     * @param {boolean=} opt_webSafe If true, we should use the
     *     alternative alphabet.
     * @return {string} The base64 encoded string.
     */
    function encodeString(input: string, opt_webSafe?: boolean): string;

    /**
     * Base64-decode a string.
     *
     * @param {string} input to decode.
     * @param {boolean=} opt_webSafe True if we should use the
     *     alternative alphabet.
     * @return {string} string representing the decoded value.
     */
    function decodeString(input: string, opt_webSafe?: boolean): string;

    /**
     * Base64-decode a string.
     *
     * @param {string} input to decode (length not required to be a multiple of 4).
     * @param {boolean=} opt_webSafe True if we should use the
     *     alternative alphabet.
     * @return {!Array} bytes representing the decoded value.
     */
    function decodeStringToByteArray(input: string, opt_webSafe?: boolean): any[];
}

declare module 'goog.crypt.baseN' {

    /**
     * Base-2, i.e. '01'.
     * @type {string}
     */
    var BASE_BINARY: string;

    /**
     * Base-8, i.e. '01234567'.
     * @type {string}
     */
    var BASE_OCTAL: string;

    /**
     * Base-10, i.e. '0123456789'.
     * @type {string}
     */
    var BASE_DECIMAL: string;

    /**
     * Base-16 using lower case, i.e. '0123456789abcdef'.
     * @type {string}
     */
    var BASE_LOWERCASE_HEXADECIMAL: string;

    /**
     * Base-16 using upper case, i.e. '0123456789ABCDEF'.
     * @type {string}
     */
    var BASE_UPPERCASE_HEXADECIMAL: string;

    /**
     * The more-known version of the BASE-64 encoding.  Uses + and / characters.
     * @type {string}
     */
    var BASE_64: string;

    /**
     * URL-safe version of the BASE-64 encoding.
     * @type {string}
     */
    var BASE_64_URL_SAFE: string;

    /**
     * Converts a number from one numeric base to another.
     *
     * The bases are represented as strings, which list allowed digits.  Each digit
     * should be unique.  The bases can either be user defined, or any of
     * goog.crypt.baseN.BASE_xxx.
     *
     * The number is in human-readable format, most significant digit first, and is
     * a non-negative integer.  Base designators such as $, 0x, d, b or h (at end)
     * will be interpreted as digits, so avoid them.  Leading zeros will be trimmed.
     *
     * Note: for huge bases the result may be inaccurate because of overflowing
     * 64-bit doubles used by JavaScript for integer calculus.  This may happen
     * if the product of the number of digits in the input and output bases comes
     * close to 10^16, which is VERY unlikely (100M digits in each base), but
     * may be possible in the future unicode world.  (Unicode 3.2 has less than 100K
     * characters.  However, it reserves some more, close to 1M.)
     *
     * @param {string} number The number to convert.
     * @param {string} inputBase The numeric base the number is in (all digits).
     * @param {string} outputBase Requested numeric base.
     * @return {string} The converted number.
     */
    function recodeString(number: string, inputBase: string, outputBase: string): string;
}

declare module 'goog.crypt.BlobHasher' {

    /**
     * Event names for hash computation events
     * @enum {string}
     */
    enum EventType { STARTED, PROGRESS, THROTTLED, COMPLETE, ABORT, ERROR } 
}

declare module 'goog.crypt' {

    /**
     * Turns a string into an array of bytes; a "byte" being a JS number in the
     * range 0-255.
     * @param {string} str String value to arrify.
     * @return {!Array.<number>} Array of numbers corresponding to the
     *     UCS character codes of each character in str.
     */
    function stringToByteArray(str: string): number[];

    /**
     * Turns an array of numbers into the string given by the concatenation of the
     * characters to which the numbers correspond.
     * @param {Array} array Array of numbers representing characters.
     * @return {string} Stringification of the array.
     */
    function byteArrayToString(array: any[]): string;

    /**
     * Turns an array of numbers into the hex string given by the concatenation of
     * the hex values to which the numbers correspond.
     * @param {Uint8Array|Int8Array|Array.<number>} array Array of numbers
     *     representing characters.
     * @return {string} Hex string.
     */
    function byteArrayToHex(array: any /*Uint8Array|Int8Array|number[]*/): string;

    /**
     * Converts a hex string into an integer array.
     * @param {string} hexString Hex string of 16-bit integers (two characters
     *     per integer).
     * @return {!Array.<number>} Array of {0,255} integers for the given string.
     */
    function hexToByteArray(hexString: string): number[];

    /**
     * Converts a JS string to a UTF-8 "byte" array.
     * @param {string} str 16-bit unicode string.
     * @return {!Array.<number>} UTF-8 byte array.
     */
    function stringToUtf8ByteArray(str: string): number[];

    /**
     * Converts a UTF-8 byte array to JavaScript's 16-bit Unicode.
     * @param {Uint8Array|Int8Array|Array.<number>} bytes UTF-8 byte array.
     * @return {string} 16-bit Unicode string.
     */
    function utf8ByteArrayToString(bytes: any /*Uint8Array|Int8Array|number[]*/): string;

    /**
     * XOR two byte arrays.
     * @param {!ArrayBufferView|!Array.<number>} bytes1 Byte array 1.
     * @param {!ArrayBufferView|!Array.<number>} bytes2 Byte array 2.
     * @return {!Array.<number>} Resulting XOR of the two byte arrays.
     */
    function xorByteArray(bytes1: any /*ArrayBufferView|number[]*/, bytes2: any /*ArrayBufferView|number[]*/): number[];

    /**
     * Interface definition for a block cipher.
     * @interface
     */
    interface BlockCipher {
        encrypt: any /*missing*/;
        decrypt: any /*missing*/;
    }

    /**
     * Implementation of AES in JavaScript.
     * See http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
     *
     * WARNING: This is ECB mode only. If you are encrypting something
     * longer than 16 bytes, or encrypting more than one value with the same key
     * (so basically, always) you need to use this with a block cipher mode of
     * operation.  See goog.crypt.Cbc.
     *
     * See http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation for more
     * information.
     *
     * @constructor
     * @implements {goog.crypt.BlockCipher}
     * @param {!Array.<number>} key The key as an array of integers in {0, 255}.
     *     The key must have lengths of 16, 24, or 32 integers for 128-,
     *     192-, or 256-bit encryption, respectively.
     * @final
     * @struct
     */
    class Aes implements goog.crypt.BlockCipher {
        /**
         * Implementation of AES in JavaScript.
         * See http://en.wikipedia.org/wiki/Advanced_Encryption_Standard
         *
         * WARNING: This is ECB mode only. If you are encrypting something
         * longer than 16 bytes, or encrypting more than one value with the same key
         * (so basically, always) you need to use this with a block cipher mode of
         * operation.  See goog.crypt.Cbc.
         *
         * See http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation for more
         * information.
         *
         * @constructor
         * @implements {goog.crypt.BlockCipher}
         * @param {!Array.<number>} key The key as an array of integers in {0, 255}.
         *     The key must have lengths of 16, 24, or 32 integers for 128-,
         *     192-, or 256-bit encryption, respectively.
         * @final
         * @struct
         */
        constructor(key: number[]);
    
        /**
         * @override
         */
        encrypt(): void;
    
        /**
         * @override
         */
        decrypt(): void;
    }

    /**
     * ARC4 streamcipher implementation.
     * @constructor
     * @final
     * @struct
     */
    class Arc4 {
        /**
         * ARC4 streamcipher implementation.
         * @constructor
         * @final
         * @struct
         */
        constructor();
    
        /**
         * Initialize the cipher for use with new key.
         * @param {Array.<number>} key A byte array containing the key.
         * @param {number=} opt_length Indicates # of bytes to take from the key.
         */
        setKey(key: number[], opt_length?: number): void;
    
        /**
         * Discards n bytes of the keystream.
         * These days 1536 is considered a decent amount to drop to get the key state
         * warmed-up enough for secure usage. This is not done in the constructor to
         * preserve efficiency for use cases that do not need this.
         * NOTE: Discard is identical to crypt without actually xoring any data. It's
         * unfortunate to have this code duplicated, but this was done for performance
         * reasons. Alternatives which were attempted:
         * 1. Create a temp array of the correct length and pass it to crypt. This
         *    works but needlessly allocates an array. But more importantly this
         *    requires choosing an array type (Array or Uint8Array) in discard, and
         *    choosing a different type than will be passed to crypt by the client
         *    code hurts the javascript engines ability to optimize crypt (7x hit in
         *    v8).
         * 2. Make data option in crypt so discard can pass null, this has a huge
         *    perf hit for crypt.
         * @param {number} length Number of bytes to disregard from the stream.
         */
        discard(length: number): void;
    
        /**
         * En- or decrypt (same operation for streamciphers like ARC4)
         * @param {Array.<number>|Uint8Array} data The data to be xor-ed in place.
         * @param {number=} opt_length The number of bytes to crypt.
         */
        crypt(data: any /*number[]|Uint8Array*/, opt_length?: number): void;
    }

    /**
     * Construct the hash computer.
     *
     * @param {!goog.crypt.Hash} hashFn The hash function to use.
     * @param {number=} opt_blockSize Processing block size.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class BlobHasher extends goog.events.EventTarget {
        /**
         * Construct the hash computer.
         *
         * @param {!goog.crypt.Hash} hashFn The hash function to use.
         * @param {number=} opt_blockSize Processing block size.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(hashFn: goog.crypt.Hash, opt_blockSize?: number);
    
        /**
         * Start the hash computation.
         * @param {!Blob} blob The blob of data to compute the hash for.
         */
        hash(blob: Blob): void;
    
        /**
         * Sets the maximum number of bytes to hash or Infinity for no limit. Can be
         * called before hash() to throttle the hash computation. The hash computation
         * can then be continued by repeatedly calling setHashingLimit() with greater
         * byte offsets. This is useful if you don't need the hash until some time in
         * the future, for example when uploading a file and you don't need the hash
         * until the transfer is complete.
         * @param {number} byteOffset The byte offset to compute the hash up to.
         *     Should be a non-negative integer or Infinity for no limit. Negative
         *     values are not allowed.
         */
        setHashingLimit(byteOffset: number): void;
    
        /**
         * Abort hash computation.
         */
        abort(): void;
    
        /**
         * @return {number} Number of bytes processed so far.
         */
        getBytesProcessed(): number;
    
        /**
         * @return {Array.<number>} The computed hash value or null if not ready.
         */
        getHash(): number[];
    }

    /**
     * Implements the CBC mode for block ciphers. See
     * http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation
     * #Cipher-block_chaining_.28CBC.29
     *
     * @param {!goog.crypt.BlockCipher} cipher The block cipher to use.
     * @param {number=} opt_blockSize The block size of the cipher in bytes.
     *     Defaults to 16 bytes.
     * @constructor
     * @final
     * @struct
     */
    class Cbc {
        /**
         * Implements the CBC mode for block ciphers. See
         * http://en.wikipedia.org/wiki/Block_cipher_modes_of_operation
         * #Cipher-block_chaining_.28CBC.29
         *
         * @param {!goog.crypt.BlockCipher} cipher The block cipher to use.
         * @param {number=} opt_blockSize The block size of the cipher in bytes.
         *     Defaults to 16 bytes.
         * @constructor
         * @final
         * @struct
         */
        constructor(cipher: goog.crypt.BlockCipher, opt_blockSize?: number);
    
        /**
         * Encrypt a message.
         *
         * @param {!Array.<number>} plainText Message to encrypt. An array of bytes.
         *     The length should be a multiple of the block size.
         * @param {!Array.<number>} initialVector Initial vector for the CBC mode.
         *     An array of bytes with the same length as the block size.
         * @return {!Array.<number>} Encrypted message.
         */
        encrypt(plainText: number[], initialVector: number[]): number[];
    
        /**
         * Decrypt a message.
         *
         * @param {!Array.<number>} cipherText Message to decrypt. An array of bytes.
         *     The length should be a multiple of the block size.
         * @param {!Array.<number>} initialVector Initial vector for the CBC mode.
         *     An array of bytes with the same length as the block size.
         * @return {!Array.<number>} Decrypted message.
         */
        decrypt(cipherText: number[], initialVector: number[]): number[];
    }

    /**
     * Create a cryptographic hash instance.
     *
     * @constructor
     * @struct
     */
    class Hash {
        /**
         * Create a cryptographic hash instance.
         *
         * @constructor
         * @struct
         */
        constructor();
    
        /**
         * Resets the internal accumulator.
         */
        reset: any /*missing*/;
    
        /**
         * Adds a byte array (array with values in [0-255] range) or a string (might
         * only contain 8-bit, i.e., Latin1 characters) to the internal accumulator.
         *
         * Many hash functions operate on blocks of data and implement optimizations
         * when a full chunk of data is readily available. Hence it is often preferable
         * to provide large chunks of data (a kilobyte or more) than to repeatedly
         * call the update method with few tens of bytes. If this is not possible, or
         * not feasible, it might be good to provide data in multiplies of hash block
         * size (often 64 bytes). Please see the implementation and performance tests
         * of your favourite hash.
         *
         * @param {Array.<number>|Uint8Array|string} bytes Data used for the update.
         * @param {number=} opt_length Number of bytes to use.
         */
        update: any /*missing*/;
    
        /**
         * @return {!Array.<number>} The finalized hash computed
         *     from the internal accumulator.
         */
        digest: any /*missing*/;
    }

    /**
     * @constructor
     * @param {!goog.crypt.Hash} hasher An object to serve as a hash function.
     * @param {Array.<number>} key The secret key to use to calculate the hmac.
     *     Should be an array of not more than {@code blockSize} integers in
           {0, 255}.
     * @param {number=} opt_blockSize Optional. The block size {@code hasher} uses.
     *     If not specified, uses the block size from the hasher, or 16 if it is
     *     not specified.
     * @extends {goog.crypt.Hash}
     * @final
     * @struct
     */
    class Hmac extends goog.crypt.Hash {
        /**
         * @constructor
         * @param {!goog.crypt.Hash} hasher An object to serve as a hash function.
         * @param {Array.<number>} key The secret key to use to calculate the hmac.
         *     Should be an array of not more than {@code blockSize} integers in
         {0, 255}.
         * @param {number=} opt_blockSize Optional. The block size {@code hasher} uses.
         *     If not specified, uses the block size from the hasher, or 16 if it is
         *     not specified.
         * @extends {goog.crypt.Hash}
         * @final
         * @struct
         */
        constructor(hasher: goog.crypt.Hash, key: number[], opt_blockSize?: number);
    
        /** @override */
        reset(): void;
    
        /** @override */
        update(): void;
    
        /** @override */
        digest(): void;
    
        /**
         * Calculates an HMAC for a given message.
         *
         * @param {Array.<number>} message  An array of integers in {0, 255}.
         * @return {!Array.<number>} the digest of the given message.
         */
        getHmac(message: number[]): number[];
    }

    /**
     * MD5 cryptographic hash constructor.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @final
     * @struct
     */
    class Md5 extends goog.crypt.Hash {
        /**
         * MD5 cryptographic hash constructor.
         * @constructor
         * @extends {goog.crypt.Hash}
         * @final
         * @struct
         */
        constructor();
    
        /** @override */
        reset(): void;
    
        /** @override */
        update(): void;
    
        /** @override */
        digest(): void;
    }

    /**
     * SHA-1 cryptographic hash constructor.
     *
     * The properties declared here are discussed in the above algorithm document.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @final
     * @struct
     */
    class Sha1 extends goog.crypt.Hash {
        /**
         * SHA-1 cryptographic hash constructor.
         *
         * The properties declared here are discussed in the above algorithm document.
         * @constructor
         * @extends {goog.crypt.Hash}
         * @final
         * @struct
         */
        constructor();
    
        /** @override */
        reset(): void;
    
        /** @override */
        update(): void;
    
        /** @override */
        digest(): void;
    }

    /**
     * SHA-224 cryptographic hash constructor.
     *
     * @constructor
     * @extends {goog.crypt.Sha2}
     * @final
     * @struct
     */
    class Sha224 extends goog.crypt.Sha2 {
        /**
         * SHA-224 cryptographic hash constructor.
         *
         * @constructor
         * @extends {goog.crypt.Sha2}
         * @final
         * @struct
         */
        constructor();
    
        /** @override */
        reset(): void;
    }

    /**
     * SHA-256 cryptographic hash constructor.
     *
     * @constructor
     * @extends {goog.crypt.Sha2}
     * @final
     * @struct
     */
    class Sha256 extends goog.crypt.Sha2 {
        /**
         * SHA-256 cryptographic hash constructor.
         *
         * @constructor
         * @extends {goog.crypt.Sha2}
         * @final
         * @struct
         */
        constructor();
    
        /** @override */
        reset(): void;
    }

    /**
     * Constructs a SHA-2 64-bit cryptographic hash.
     * This constructor should not be used directly to create the object. Rather,
     * one should use the constructor of one of its subclasses.
     * @constructor
     * @param {number} numHashBlocks The size of the output in 16-byte blocks
     * @param {!Array.<number>} initHashBlocks The hash-specific initialization
     *     vector, as a sequence of 32-bit numbers.
     * @extends {goog.crypt.Hash}
     * @struct
     */
    class Sha2_64bit extends goog.crypt.Hash {
        /**
         * Constructs a SHA-2 64-bit cryptographic hash.
         * This constructor should not be used directly to create the object. Rather,
         * one should use the constructor of one of its subclasses.
         * @constructor
         * @param {number} numHashBlocks The size of the output in 16-byte blocks
         * @param {!Array.<number>} initHashBlocks The hash-specific initialization
         *     vector, as a sequence of 32-bit numbers.
         * @extends {goog.crypt.Hash}
         * @struct
         */
        constructor(numHashBlocks: number, initHashBlocks: number[]);
    
        /**
         * Resets this hash function.
         */
        reset(): void;
    
        /** @override */
        update(): void;
    
        /** @override */
        digest(): void;
    }

    /**
     * SHA-2 cryptographic hash constructor.
     * This constructor should not be used directly to create the object. Rather,
     * one should use the constructor of the sub-classes.
     * @constructor
     * @extends {goog.crypt.Hash}
     * @struct
     */
    class Sha2 extends goog.crypt.Hash {
        /**
         * SHA-2 cryptographic hash constructor.
         * This constructor should not be used directly to create the object. Rather,
         * one should use the constructor of the sub-classes.
         * @constructor
         * @extends {goog.crypt.Hash}
         * @struct
         */
        constructor();
    
        /** @override */
        reset: any /*missing*/;
    
        /** @override */
        update(): void;
    
        /** @override */
        digest(): void;
    }

    /**
     * Constructs a SHA-384 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    class Sha384 extends goog.crypt.Sha2_64bit {
        /**
         * Constructs a SHA-384 cryptographic hash.
         *
         * @constructor
         * @extends {goog.crypt.Sha2_64bit}
         * @final
         * @struct
         */
        constructor();
    }

    /**
     * Constructs a SHA-512/256 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    class Sha512_256 extends goog.crypt.Sha2_64bit {
        /**
         * Constructs a SHA-512/256 cryptographic hash.
         *
         * @constructor
         * @extends {goog.crypt.Sha2_64bit}
         * @final
         * @struct
         */
        constructor();
    }

    /**
     * Constructs a SHA-512 cryptographic hash.
     *
     * @constructor
     * @extends {goog.crypt.Sha2_64bit}
     * @final
     * @struct
     */
    class Sha512 extends goog.crypt.Sha2_64bit {
        /**
         * Constructs a SHA-512 cryptographic hash.
         *
         * @constructor
         * @extends {goog.crypt.Sha2_64bit}
         * @final
         * @struct
         */
        constructor();
    }
}

declare module 'goog.crypt.hash32' {

    /**
     * Default seed used during hashing, digits of pie.
     * See SEED32 in http://go/base.hash.java
     * @type {number}
     */
    var SEED32: number;

    /**
     * Arbitrary constant used during hashing.
     * See CONSTANT32 in http://go/base.hash.java
     * @type {number}
     */
    var CONSTANT32: number;

    /**
     * Hashes a string to a 32-bit value.
     * @param {string} str String to hash.
     * @return {number} 32-bit hash.
     */
    function encodeString(str: string): number;

    /**
     * Hashes a string to a 32-bit value, converting the string to UTF-8 before
     * doing the encoding.
     * @param {string} str String to hash.
     * @return {number} 32-bit hash.
     */
    function encodeStringUtf8(str: string): number;

    /**
     * Hashes an integer to a 32-bit value.
     * @param {number} value Number to hash.
     * @return {number} 32-bit hash.
     */
    function encodeInteger(value: number): number;

    /**
     * Hashes a "byte" array to a 32-bit value using the supplied seed.
     * @param {Array.<number>} bytes Array of bytes.
     * @param {number=} opt_offset The starting position to use for hash
     * computation.
     * @param {number=} opt_length Number of bytes that are used for hashing.
     * @param {number=} opt_seed The seed.
     * @return {number} 32-bit hash.
     */
    function encodeByteArray(bytes: number[], opt_offset?: number, opt_length?: number, opt_seed?: number): number;
}

declare module 'goog.crypt.hashTester' {

    /**
     * Runs basic tests.
     *
     * @param {!goog.crypt.Hash} hash A hash instance.
     */
    function runBasicTests(hash: goog.crypt.Hash): void;

    /**
     * Runs block tests.
     *
     * @param {!goog.crypt.Hash} hash A hash instance.
     * @param {number} blockBytes Size of the hash block.
     */
    function runBlockTests(hash: goog.crypt.Hash, blockBytes: number): void;

    /**
     * Runs performance tests.
     *
     * @param {function():!goog.crypt.Hash} hashFactory A hash factory.
     * @param {string} hashName Name of the hashing function.
     */
    function runPerfTests(hashFactory: () => goog.crypt.Hash, hashName: string): void;
}

declare module 'goog.crypt.pbkdf2' {

    /**
     * Derives key from password using PBKDF2-SHA1
     * @param {!Array.<number>} password Byte array representation of the password
     *     from which the key is derived.
     * @param {!Array.<number>} initialSalt Byte array representation of the salt.
     * @param {number} iterations Number of interations when computing the key.
     * @param {number} keyLength Length of the output key in bits.
     *     Must be multiple of 8.
     * @return {!Array.<number>} Byte array representation of the output key.
     */
    function deriveKeySha1(password: number[], initialSalt: number[], iterations: number, keyLength: number): number[];
}

declare module 'goog.crypt.Sha2_64bit' {

    /**
     * Constants used in SHA-512 variants
     * @const
     * @private {!Array.<!goog.math.Long>}
     */
    var K_: any /*missing*/;
}

declare module 'goog.crypt.Sha2' {

    /**
     * Constants used in SHA-2.
     * @const
     * @private {!Array.<number>}
     */
    var K_: any /*missing*/;
}

