///<reference path="../index/references.ts" />

import http = require('http');
import chai = require('chai');
import doctrine = require('doctrine');
import assert = require('assert');

var expect = chai.expect;

//describe('doctrine', () => {
//    describe('parse', () => {
//        var input =
//            '/** \
//            * Implementation of a binary search algorithm which knows how to use both \
//            * comparison functions and evaluators. If an evaluator is provided, will call \
//            * the evaluator with the given optional data object, conforming to the \
//            * interface defined in binarySelect. Otherwise, if a comparison function is \
//            * provided, will call the comparison function against the given data object. \
//            * \
//            * This implementation purposefully does not use goog.bind or goog.partial for \
//                * performance reasons. \
//            * \
//            * Runtime: O(log n) \
//            * \
//            * @param {Array.<VALUE>|goog.array.ArrayLike} arr The array to be searched. \
//            * @param {function(TARGET, VALUE): number| \
//            *         function(this:THIS, VALUE, number, ?): number} compareFn Either an \
//            *     evaluator or a comparison function, as defined by binarySearch \
//            *     and binarySelect above. \
//            * @param {boolean} isEvaluator Whether the function is an evaluator or a \
//            *     comparison function. \
//            * @param {TARGET=} opt_target If the function is a comparison function, then \
//            *     this is the target to binary search for. \
//            * @param {THIS=} opt_selfObj If the function is an evaluator, this is an \
//            *    optional this object for the evaluator. \
//            * @return {number} Lowest index of the target value if found, otherwise \
//            *     (-(insertion point) - 1). The insertion point is where the value should \
//            *     be inserted into arr to preserve the sorted property.  Return value >= 0 \
//            *     iff target is found. \
//            * @template THIS, VALUE, TARGET \
//            * @private \
//            */';
//        var output = doctrine.parse(input);
//        var tagNames = output.tags.map(tag => tag.name);
//        var expected = [
//            'param',
//            'param',
//            'param',
//            'param',
//            'param',
//            'return',
//            'template',
//            'private',
//        ];
//
//        expect({a: 1}).equal({a: 2});
////        expect(tagNames).equals(expected);
//    });
//});

describe('foo', function() {
    it('bar', function() {
        expect({a: 1}).equal({a: 2});
    });
});

//describe('1', () => {
//    it('should equal 1', () => {
//        expect(1).equals(2);
//    });
//
//    it('should equal 1 again', () => {
//        expect(1).equals(3);
//    });
//});
