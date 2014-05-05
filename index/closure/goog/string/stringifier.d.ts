// Generated Sun May  4 18:18:08 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.string {

    /**
     * An interface for serializing objects into strings.
     * @interface
     */
    interface Stringifier {
    
        /**
         * Serializes an object or a value to a string.
         * Agnostic to the particular format of object and string.
         *
         * @param {*} object The object to stringify.
         * @return {string} A string representation of the input.
         */
        stringify(object: any): string;
    }
}

