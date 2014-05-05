/// <reference path="../../../closure/goog/base.d.ts" />

declare module goog {

    module _string {

        /**
         * An interface for parsing strings into objects.
         * @interface
         */
        interface Parser {

            /**
             * Parses a string into an object and returns the result.
             * Agnostic to the format of string and object.
             *
             * @param {string} s The string to parse.
             * @return {*} The object generated from the string.
             */
            parse(s: string): any;
        }
    }
}

