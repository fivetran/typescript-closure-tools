/// <reference path="../../../../../globals.d.ts" />

declare module goog.text {

    class LoremIpsum extends LoremIpsum.__Class { }
    module LoremIpsum {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * Generates random strings of "lorem ipsum" text, based on the word
             * distribution of a sample text, using the words in a dictionary.
             * @constructor
             */
            constructor();
    
            /**
             * Pairs of word-lengths that can appear at the beginning of sentences.
             * @type {Array}
             */
            starts_: any[];
    
            /**
             * Sets the generator to use a given selection of words for generating
             * sentences with.
             * @param {string} dictionary The dictionary to use.
             */
            initializeDictionary_(dictionary: string): void;
    
            /**
             * Generates a single sentence, of random length.
             * @param {boolean} opt_startWithLorem Whether to start the setnence with the
             *     standard "Lorem ipsum..." first sentence.
             * @return {string} The generated sentence.
             */
            generateSentence(opt_startWithLorem: boolean): string;
    
            /**
             * Generates a single lorem ipsum paragraph, of random length.
             * @param {boolean} opt_startWithLorem Whether to start the sentence with the
             *     standard "Lorem ipsum..." first sentence.
             * @return {string} The generated sentence.
             */
            generateParagraph(opt_startWithLorem: boolean): string;
    
            /**
             * Sample that the generated text is based on .
             * @type {string}
             */
            sample_: string;
    
            /**
             * Dictionary of words.
             * @type {string}
             */
            dictionary_: string;
        }
    }
}

declare module goog.text.LoremIpsum {

    /**
     * Returns the length of an array. Written as a function so it can be used
     * as a function parameter.
     * @param {Array} array The array to check.
     * @return {number} The length of the array.
     */
    function arrayLength_(array: any[]): number;

    /**
     * Find the number in the list of values that is closest to the target.
     * @param {Array.<number>} values The values.
     * @param {number} target The target value.
     * @return {number} The closest value.
     */
    function chooseClosest(values: number[], target: number): number;

    /**
     * Picks a random element of the array.
     * @param {Array} array The array to pick from.
     * @return {*} An element from the array.
     */
    function randomChoice_(array: any[]): any;
}
