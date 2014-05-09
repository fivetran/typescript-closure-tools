/// <reference path="../../../globals.d.ts" />

declare module goog.math.tdma {

    /**
     * Solves a linear system where the matrix is square tri-diagonal. That is,
     * given a system of equations:
     *
     * A * result = vecRight,
     *
     * this class computes result = inv(A) * vecRight, where A has the special form
     * of a tri-diagonal matrix:
     *
     *    |dia(0) sup(0)   0    0     ...   0|
     *    |sub(0) dia(1) sup(1) 0     ...   0|
     * A =|                ...               |
     *    |0 ... 0 sub(n-2) dia(n-1) sup(n-1)|
     *    |0 ... 0    0     sub(n-1)   dia(n)|
     *
     * @param {!Array.<number>} subDiag The sub diagonal of the matrix.
     * @param {!Array.<number>} mainDiag The main diagonal of the matrix.
     * @param {!Array.<number>} supDiag The super diagonal of the matrix.
     * @param {!Array.<number>} vecRight The right vector of the system
     *     of equations.
     * @param {Array.<number>=} opt_result The optional array to store the result.
     * @return {!Array.<number>} The vector that is the solution to the system.
     */
    function solve(subDiag: number[], mainDiag: number[], supDiag: number[], vecRight: number[], opt_result?: number[]): number[];
}
