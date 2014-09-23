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

    /**
     * @type {number}
     * @private
     */
    this.privateAssignment = 1;

    /**
     * @type {number}
     * @private
     */
    this.privateDeclaration;

    /**
     * @type {number}
     * @private {number}
     */
    this.weirdPrivateAnnotation = 1;
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