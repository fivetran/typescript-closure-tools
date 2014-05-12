/// <reference path="../../../globals.d.ts" />

declare module goog.i18n {

    class MessageFormat extends MessageFormat.__Class { }
    module MessageFormat {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Constructor of MessageFormat.
             * @param {string} pattern The pattern we parse and apply positional parameters
             *     to.
             * @constructor
             * @final
             */
            constructor(pattern: string);
    
            /**
             * Formats a message, treating '#' with special meaning representing
             * the number (plural_variable - offset).
             * @param {!Object} namedParameters Parameters that either
             *     influence the formatting or are used as actual data.
             *     I.e. in call to fmt.format({'NUM_PEOPLE': 5, 'NAME': 'Angela'}),
             *     object {'NUM_PEOPLE': 5, 'NAME': 'Angela'} holds positional parameters.
             *     1st parameter could mean 5 people, which could influence plural format,
             *     and 2nd parameter is just a data to be printed out in proper position.
             * @return {string} Formatted message.
             */
            format(namedParameters: Object): string;
    
            /**
             * Formats a message, treating '#' as literary character.
             * @param {!Object} namedParameters Parameters that either
             *     influence the formatting or are used as actual data.
             *     I.e. in call to fmt.format({'NUM_PEOPLE': 5, 'NAME': 'Angela'}),
             *     object {'NUM_PEOPLE': 5, 'NAME': 'Angela'} holds positional parameters.
             *     1st parameter could mean 5 people, which could influence plural format,
             *     and 2nd parameter is just a data to be printed out in proper position.
             * @return {string} Formatted message.
             */
            formatIgnoringPound(namedParameters: Object): string;
        }
    }
}

declare module goog.i18n.MessageFormat {

    /**
     * Marks a string and block during parsing.
     * @enum {number}
     * @private
     */
    enum Element_ { STRING, BLOCK } 

    /**
     * Block type.
     * @enum {number}
     * @private
     */
    enum BlockType_ { PLURAL, ORDINAL, SELECT, SIMPLE, STRING, UNKNOWN } 
}
