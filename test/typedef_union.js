/**
 * @typedef {string|number}
 */
example.UnionType;

/**
 * @param {example.UnionType} x
 */
example.unionFunction = function(x) { };

/**
 * @param {example.UnionType<any>} x
 */
example.genericUnionFunction = function(x) { };