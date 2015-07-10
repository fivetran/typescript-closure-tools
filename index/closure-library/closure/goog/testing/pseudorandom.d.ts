/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />

declare module goog.testing {

    class PseudoRandom extends PseudoRandom__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class PseudoRandom__Class extends goog.Disposable__Class  { 
    
            /**
             * Class for unit testing code that uses Math.random. Generates deterministic
             * random numbers.
             *
             * @param {number=} opt_seed The seed to use.
             * @param {boolean=} opt_install Whether to install the PseudoRandom at
             *     construction time.
             * @extends {goog.Disposable}
             * @constructor
             * @final
             */
            constructor(opt_seed?: number, opt_install?: boolean);
    
            /**
             * Installs this PseudoRandom as the system number generator.
             */
            install(): void;
    
            /**
             * Uninstalls the PseudoRandom.
             */
            uninstall(): void;
    
            /**
             * Seed the generator.
             *
             * @param {number=} seed The seed to use.
             */
            seed(seed?: number): void;
    
            /**
             * @return {number} The next number in the sequence.
             */
            random(): number;
    } 
    
}

declare module goog.testing.PseudoRandom {

    /**
     * Constant used as part of the algorithm.
     * @type {number}
     */
    var A: number;

    /**
     * Constant used as part of the algorithm. 2^31 - 1.
     * @type {number}
     */
    var M: number;

    /**
     * Constant used as part of the algorithm. It is equal to M / A.
     * @type {number}
     */
    var Q: number;

    /**
     * Constant used as part of the algorithm. It is equal to M % A.
     * @type {number}
     */
    var R: number;

    /**
     * Constant used as part of the algorithm to get values from range [0, 1).
     * @type {number}
     */
    var ONE_OVER_M_MINUS_ONE: number;
}
