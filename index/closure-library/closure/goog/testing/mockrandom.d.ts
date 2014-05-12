/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />

declare module goog.testing {

    class MockRandom extends MockRandom.__Class { }
    module MockRandom {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
            /**
             * Class for unit testing code that uses Math.random.
             *
             * @param {Array.<number>} sequence The sequence of numbers to return.
             * @param {boolean=} opt_install Whether to install the MockRandom at
             *     construction time.
             * @extends {goog.Disposable}
             * @constructor
             * @final
             */
            constructor(sequence: number[], opt_install?: boolean);
    
            /**
             * Installs this MockRandom as the system number generator.
             */
            install(): void;
    
            /**
             * @return {number} The next number in the sequence. If there are no more values
             *     left, this will return a random number, unless
             *     {@code this.strictlyFromSequence_} is true, in which case an error will
             *     be thrown.
             */
            random(): number;
    
            /**
             * @return {boolean} Whether there are more numbers left in the sequence.
             */
            hasMoreValues(): boolean;
    
            /**
             * Injects new numbers into the beginning of the sequence.
             * @param {Array.<number>|number} values Number or array of numbers to inject.
             */
            inject(values: number[]): void;
            /**
             * Injects new numbers into the beginning of the sequence.
             * @param {Array.<number>|number} values Number or array of numbers to inject.
             */
            inject(values: number): void;
    
            /**
             * Uninstalls the MockRandom.
             */
            uninstall(): void;
    
            /**
             * @param {boolean} strictlyFromSequence Whether to throw an exception when
             *     Math.random() is called when there is nothing left in the sequence.
             */
            setStrictlyFromSequence(strictlyFromSequence: boolean): void;
        }
    }
}
