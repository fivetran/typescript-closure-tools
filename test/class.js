/**
 * @constructor
 * @implements {example.Interface}
 * @param {number|string} x
 */
example.Class = function(x) {
    /** @type {string} */
    this.thisAssignment = 'x';

    /** @type {number} */
    this.thisDeclaration;
};

/**
 * @param {number|string} x
 */
example.Class.prototype.overloadedMethod = function(x) {

};

/**
 * @override
 */
example.Class.prototype.interfaceMethod = function(x) { };