// Generated Wed Apr 30 16:31:51 PDT 2014

/// <reference path="../goog.d.ts" />

declare module 'goog.vec.Float32Array' {

    /**
     * The number of bytes in an element (as defined by the Typed Array
     * specification).
     *
     * @type {number}
     */
    var BYTES_PER_ELEMENT: number;
}

declare module 'goog.vec.Float64Array' {

    /**
     * The number of bytes in an element (as defined by the Typed Array
     * specification).
     *
     * @type {number}
     */
    var BYTES_PER_ELEMENT: number;
}

declare module 'goog.vec.mat3d' {

    /** @typedef {goog.vec.Float64} */
    interface Type extends goog.vec.Float64 { }

    /**
     * Creates a mat3d with all elements initialized to zero.
     *
     * @return {!goog.vec.mat3d.Type} The new mat3d.
     */
    function create(): goog.vec.mat3d.Type;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setFromValues(mat: goog.vec.mat3d.Type, v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.mat3d.Type;

    /**
     * Initializes mat3d mat from mat3d src.
     *
     * @param {goog.vec.mat3d.Type} mat The destination matrix.
     * @param {goog.vec.mat3d.Type} src The source matrix.
     * @return {!goog.vec.mat3d.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat3d(mat: goog.vec.mat3d.Type, src: goog.vec.mat3d.Type): goog.vec.mat3d.Type;

    /**
     * Initializes mat3d mat from mat3f src (typed as a Float32Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.mat3d.Type} mat The destination matrix.
     * @param {Float32Array} src The source matrix.
     * @return {!goog.vec.mat3d.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat3f(mat: goog.vec.mat3d.Type, src: Float32Array): goog.vec.mat3d.Type;

    /**
     * Initializes mat3d mat from Array src.
     *
     * @param {goog.vec.mat3d.Type} mat The destination matrix.
     * @param {Array.<number>} src The source matrix.
     * @return {!goog.vec.mat3d.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromArray(mat: goog.vec.mat3d.Type, src: number[]): goog.vec.mat3d.Type;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.mat3d.Type, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setElement(mat: goog.vec.mat3d.Type, row: number, column: number, value: number): goog.vec.mat3d.Type;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to receive the values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonalValues(mat: goog.vec.mat3d.Type, v00: number, v11: number, v22: number): goog.vec.mat3d.Type;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3d.Type} vec The vector containing the values.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonal(mat: goog.vec.mat3d.Type, vec: goog.vec.vec3d.Type): goog.vec.mat3d.Type;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to recieve the values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumnValues(mat: goog.vec.mat3d.Type, column: number, v0: number, v1: number, v2: number): goog.vec.mat3d.Type;

    /**
     * Sets the specified column with the value from the supplied array.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to receive the values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.vec3d.Type} vec The vector elements for the column.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumn(mat: goog.vec.mat3d.Type, column: number, vec: goog.vec.vec3d.Type): goog.vec.mat3d.Type;

    /**
     * Retrieves the specified column from the matrix into the given vector
     * array.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix supplying the values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.vec3d.Type} vec The vector elements to receive the
     *     column.
     * @return {!goog.vec.vec3d.Type} return vec so that operations can be
     *     chained together.
     */
    function getColumn(mat: goog.vec.mat3d.Type, column: number, vec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Sets the columns of the matrix from the set of vector elements.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3d.Type} vec0 The values for column 0.
     * @param {goog.vec.vec3d.Type} vec1 The values for column 1.
     * @param {goog.vec.vec3d.Type} vec2 The values for column 2.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumns(mat: goog.vec.mat3d.Type, vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type, vec2: goog.vec.vec3d.Type): goog.vec.mat3d.Type;

    /**
     * Retrieves the column values from the given matrix into the given vector
     * elements.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix supplying the columns.
     * @param {goog.vec.vec3d.Type} vec0 The vector to receive column 0.
     * @param {goog.vec.vec3d.Type} vec1 The vector to receive column 1.
     * @param {goog.vec.vec3d.Type} vec2 The vector to receive column 2.
     */
    function getColumns(mat: goog.vec.mat3d.Type, vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type, vec2: goog.vec.vec3d.Type): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to receive the values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setRowValues(mat: goog.vec.mat3d.Type, row: number, v0: number, v1: number, v2: number): goog.vec.mat3d.Type;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to receive the row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.vec3d.Type} vec The vector containing the values.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setRow(mat: goog.vec.mat3d.Type, row: number, vec: goog.vec.vec3d.Type): goog.vec.mat3d.Type;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix supplying the values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.vec3d.Type} vec The vector to receive the row.
     * @return {!goog.vec.vec3d.Type} return vec so that operations can be
     *     chained together.
     */
    function getRow(mat: goog.vec.mat3d.Type, row: number, vec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3d.Type} vec0 The values for row 0.
     * @param {goog.vec.vec3d.Type} vec1 The values for row 1.
     * @param {goog.vec.vec3d.Type} vec2 The values for row 2.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained together.
     */
    function setRows(mat: goog.vec.mat3d.Type, vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type, vec2: goog.vec.vec3d.Type): goog.vec.mat3d.Type;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to supplying the values.
     * @param {goog.vec.vec3d.Type} vec0 The vector to receive row 0.
     * @param {goog.vec.vec3d.Type} vec1 The vector to receive row 1.
     * @param {goog.vec.vec3d.Type} vec2 The vector to receive row 2.
     */
    function getRows(mat: goog.vec.mat3d.Type, vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type, vec2: goog.vec.vec3d.Type): void;

    /**
     * Makes the given 3x3 matrix the zero matrix.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @return {!goog.vec.mat3d.Type} return mat so operations can be chained.
     */
    function makeZero(mat: goog.vec.mat3d.Type): goog.vec.mat3d.Type;

    /**
     * Makes the given 3x3 matrix the identity matrix.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @return {!goog.vec.mat3d.Type} return mat so operations can be chained.
     */
    function makeIdentity(mat: goog.vec.mat3d.Type): goog.vec.mat3d.Type;

    /**
     * Performs a per-component addition of the matrices mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.mat3d.Type} mat0 The first addend.
     * @param {goog.vec.mat3d.Type} mat1 The second addend.
     * @param {goog.vec.mat3d.Type} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function addMat(mat0: goog.vec.mat3d.Type, mat1: goog.vec.mat3d.Type, resultMat: goog.vec.mat3d.Type): goog.vec.mat3d.Type;

    /**
     * Performs a per-component subtraction of the matrices mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat3d.Type} mat0 The minuend.
     * @param {goog.vec.mat3d.Type} mat1 The subtrahend.
     * @param {goog.vec.mat3d.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function subMat(mat0: goog.vec.mat3d.Type, mat1: goog.vec.mat3d.Type, resultMat: goog.vec.mat3d.Type): goog.vec.mat3d.Type;

    /**
     * Multiplies matrix mat0 with the given scalar, storing the result
     * into resultMat.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} scalar The scalar value to multiple to each element of mat.
     * @param {goog.vec.mat3d.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat3d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multScalar(mat: goog.vec.mat3d.Type, scalar: number, resultMat: goog.vec.mat3d.Type): goog.vec.mat3d.Type;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat3d.Type} mat0 The first (left hand) matrix.
     * @param {goog.vec.mat3d.Type} mat1 The second (right hand) matrix.
     * @param {goog.vec.mat3d.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.mat3d.Type, mat1: goog.vec.mat3d.Type, resultMat: goog.vec.mat3d.Type): goog.vec.mat3d.Type;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix to transpose.
     * @param {goog.vec.mat3d.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat3d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.mat3d.Type, resultMat: goog.vec.mat3d.Type): goog.vec.mat3d.Type;

    /**
     * Computes the inverse of mat0 storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.mat3d.Type} mat0 The matrix to invert.
     * @param {goog.vec.mat3d.Type} resultMat The matrix to receive
     *     the result (may be mat0).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat0: goog.vec.mat3d.Type, resultMat: goog.vec.mat3d.Type): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.mat3d.Type} mat0 The first matrix.
     * @param {goog.vec.mat3d.Type} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.mat3d.Type, mat1: goog.vec.mat3d.Type): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed matrix into resultVec.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3d.Type} vec The vector to transform.
     * @param {goog.vec.vec3d.Type} resultVec The vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec3d.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.mat3d.Type, vec: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Makes the given 3x3 matrix a translation matrix with x and y
     * translation values.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function makeTranslate(mat: goog.vec.mat3d.Type, x: number, y: number): goog.vec.mat3d.Type;

    /**
     * Makes the given 3x3 matrix a scale matrix with x, y, and z scale factors.
     *
     * @param {goog.vec.mat3d.Type} mat The 3x3 (9-element) matrix
     *     array to receive the new scale matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function makeScale(mat: goog.vec.mat3d.Type, x: number, y: number, z: number): goog.vec.mat3d.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotate(mat: goog.vec.mat3d.Type, angle: number, ax: number, ay: number, az: number): goog.vec.mat3d.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the X axis.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateX(mat: goog.vec.mat3d.Type, angle: number): goog.vec.mat3d.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the Y axis.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateY(mat: goog.vec.mat3d.Type, angle: number): goog.vec.mat3d.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the Z axis.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateZ(mat: goog.vec.mat3d.Type, angle: number): goog.vec.mat3d.Type;

    /**
     * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
     * goog.vec.mat3d.multMat(
     *     mat,
     *     goog.vec.mat3d.makeRotate(goog.vec.mat3d.create(), angle, x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function rotate(mat: goog.vec.mat3d.Type, angle: number, x: number, y: number, z: number): goog.vec.mat3d.Type;

    /**
     * Rotate the given matrix by angle about the x axis.  Equivalent to:
     * goog.vec.mat3d.multMat(
     *     mat,
     *     goog.vec.mat3d.makeRotateX(goog.vec.mat3d.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function rotateX(mat: goog.vec.mat3d.Type, angle: number): goog.vec.mat3d.Type;

    /**
     * Rotate the given matrix by angle about the y axis.  Equivalent to:
     * goog.vec.mat3d.multMat(
     *     mat,
     *     goog.vec.mat3d.makeRotateY(goog.vec.mat3d.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function rotateY(mat: goog.vec.mat3d.Type, angle: number): goog.vec.mat3d.Type;

    /**
     * Rotate the given matrix by angle about the z axis.  Equivalent to:
     * goog.vec.mat3d.multMat(
     *     mat,
     *     goog.vec.mat3d.makeRotateZ(goog.vec.mat3d.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function rotateZ(mat: goog.vec.mat3d.Type, angle: number): goog.vec.mat3d.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix given Euler angles using
     * the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     * @return {!goog.vec.mat3d.Type} return mat so that operations can be
     *     chained.
     */
    function makeEulerZXZ(mat: goog.vec.mat3d.Type, theta1: number, theta2: number, theta3: number): goog.vec.mat3d.Type;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
     * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.mat3d.Type} mat The matrix.
     * @param {goog.vec.vec3d.Type} euler The ZXZ Euler angles in
     *     radians as [theta1, theta2, theta3].
     * @param {boolean=} opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead
     *     of the default [0, pi].
     * @return {!goog.vec.vec3d.Type} return euler so that operations can be
     *     chained together.
     */
    function toEulerZXZ(mat: goog.vec.mat3d.Type, euler: goog.vec.vec3d.Type, opt_theta2IsNegative?: boolean): goog.vec.vec3d.Type;
}

declare module 'goog.vec.mat3f' {

    /** @typedef {goog.vec.Float32} */
    interface Type extends goog.vec.Float32 { }

    /**
     * Creates a mat3f with all elements initialized to zero.
     *
     * @return {!goog.vec.mat3f.Type} The new mat3f.
     */
    function create(): goog.vec.mat3f.Type;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setFromValues(mat: goog.vec.mat3f.Type, v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.mat3f.Type;

    /**
     * Initializes mat3f mat from mat3f src.
     *
     * @param {goog.vec.mat3f.Type} mat The destination matrix.
     * @param {goog.vec.mat3f.Type} src The source matrix.
     * @return {!goog.vec.mat3f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat3f(mat: goog.vec.mat3f.Type, src: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Initializes mat3f mat from mat3d src (typed as a Float64Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.mat3f.Type} mat The destination matrix.
     * @param {Float64Array} src The source matrix.
     * @return {!goog.vec.mat3f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat3d(mat: goog.vec.mat3f.Type, src: Float64Array): goog.vec.mat3f.Type;

    /**
     * Initializes mat3f mat from Array src.
     *
     * @param {goog.vec.mat3f.Type} mat The destination matrix.
     * @param {Array.<number>} src The source matrix.
     * @return {!goog.vec.mat3f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromArray(mat: goog.vec.mat3f.Type, src: number[]): goog.vec.mat3f.Type;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.mat3f.Type, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setElement(mat: goog.vec.mat3f.Type, row: number, column: number, value: number): goog.vec.mat3f.Type;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonalValues(mat: goog.vec.mat3f.Type, v00: number, v11: number, v22: number): goog.vec.mat3f.Type;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3f.Type} vec The vector containing the values.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonal(mat: goog.vec.mat3f.Type, vec: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to recieve the values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumnValues(mat: goog.vec.mat3f.Type, column: number, v0: number, v1: number, v2: number): goog.vec.mat3f.Type;

    /**
     * Sets the specified column with the value from the supplied array.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.vec3f.Type} vec The vector elements for the column.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumn(mat: goog.vec.mat3f.Type, column: number, vec: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Retrieves the specified column from the matrix into the given vector
     * array.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix supplying the values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.vec3f.Type} vec The vector elements to receive the
     *     column.
     * @return {!goog.vec.vec3f.Type} return vec so that operations can be
     *     chained together.
     */
    function getColumn(mat: goog.vec.mat3f.Type, column: number, vec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Sets the columns of the matrix from the set of vector elements.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3f.Type} vec0 The values for column 0.
     * @param {goog.vec.vec3f.Type} vec1 The values for column 1.
     * @param {goog.vec.vec3f.Type} vec2 The values for column 2.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumns(mat: goog.vec.mat3f.Type, vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, vec2: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Retrieves the column values from the given matrix into the given vector
     * elements.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix supplying the columns.
     * @param {goog.vec.vec3f.Type} vec0 The vector to receive column 0.
     * @param {goog.vec.vec3f.Type} vec1 The vector to receive column 1.
     * @param {goog.vec.vec3f.Type} vec2 The vector to receive column 2.
     */
    function getColumns(mat: goog.vec.mat3f.Type, vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, vec2: goog.vec.vec3f.Type): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRowValues(mat: goog.vec.mat3f.Type, row: number, v0: number, v1: number, v2: number): goog.vec.mat3f.Type;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.vec3f.Type} vec The vector containing the values.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRow(mat: goog.vec.mat3f.Type, row: number, vec: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix supplying the values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.vec3f.Type} vec The vector to receive the row.
     * @return {!goog.vec.vec3f.Type} return vec so that operations can be
     *     chained together.
     */
    function getRow(mat: goog.vec.mat3f.Type, row: number, vec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec3f.Type} vec0 The values for row 0.
     * @param {goog.vec.vec3f.Type} vec1 The values for row 1.
     * @param {goog.vec.vec3f.Type} vec2 The values for row 2.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRows(mat: goog.vec.mat3f.Type, vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, vec2: goog.vec.vec3f.Type): goog.vec.mat3f.Type;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to supplying the values.
     * @param {goog.vec.vec3f.Type} vec0 The vector to receive row 0.
     * @param {goog.vec.vec3f.Type} vec1 The vector to receive row 1.
     * @param {goog.vec.vec3f.Type} vec2 The vector to receive row 2.
     */
    function getRows(mat: goog.vec.mat3f.Type, vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, vec2: goog.vec.vec3f.Type): void;

    /**
     * Makes the given 3x3 matrix the zero matrix.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @return {!goog.vec.mat3f.Type} return mat so operations can be chained.
     */
    function makeZero(mat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix the identity matrix.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @return {!goog.vec.mat3f.Type} return mat so operations can be chained.
     */
    function makeIdentity(mat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Performs a per-component addition of the matrices mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat0 The first addend.
     * @param {goog.vec.mat3f.Type} mat1 The second addend.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function addMat(mat0: goog.vec.mat3f.Type, mat1: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Performs a per-component subtraction of the matrices mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat0 The minuend.
     * @param {goog.vec.mat3f.Type} mat1 The subtrahend.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function subMat(mat0: goog.vec.mat3f.Type, mat1: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Multiplies matrix mat0 with the given scalar, storing the result
     * into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} scalar The scalar value to multiple to each element of mat.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multScalar(mat: goog.vec.mat3f.Type, scalar: number, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat0 The first (left hand) matrix.
     * @param {goog.vec.mat3f.Type} mat1 The second (right hand) matrix.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.mat3f.Type, mat1: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix to transpose.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat3f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): goog.vec.mat3f.Type;

    /**
     * Computes the inverse of mat0 storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.mat3f.Type} mat0 The matrix to invert.
     * @param {goog.vec.mat3f.Type} resultMat The matrix to receive
     *     the result (may be mat0).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat0: goog.vec.mat3f.Type, resultMat: goog.vec.mat3f.Type): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.mat3f.Type} mat0 The first matrix.
     * @param {goog.vec.mat3f.Type} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.mat3f.Type, mat1: goog.vec.mat3f.Type): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed matrix into resultVec.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3f.Type} vec The vector to transform.
     * @param {goog.vec.vec3f.Type} resultVec The vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec3f.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.mat3f.Type, vec: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Makes the given 3x3 matrix a translation matrix with x and y
     * translation values.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeTranslate(mat: goog.vec.mat3f.Type, x: number, y: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a scale matrix with x, y, and z scale factors.
     *
     * @param {goog.vec.mat3f.Type} mat The 3x3 (9-element) matrix
     *     array to receive the new scale matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeScale(mat: goog.vec.mat3f.Type, x: number, y: number, z: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotate(mat: goog.vec.mat3f.Type, angle: number, ax: number, ay: number, az: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the X axis.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateX(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the Y axis.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateY(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the Z axis.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateZ(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
     * goog.vec.mat3f.multMat(
     *     mat,
     *     goog.vec.mat3f.makeRotate(goog.vec.mat3f.create(), angle, x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function rotate(mat: goog.vec.mat3f.Type, angle: number, x: number, y: number, z: number): goog.vec.mat3f.Type;

    /**
     * Rotate the given matrix by angle about the x axis.  Equivalent to:
     * goog.vec.mat3f.multMat(
     *     mat,
     *     goog.vec.mat3f.makeRotateX(goog.vec.mat3f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateX(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Rotate the given matrix by angle about the y axis.  Equivalent to:
     * goog.vec.mat3f.multMat(
     *     mat,
     *     goog.vec.mat3f.makeRotateY(goog.vec.mat3f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateY(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Rotate the given matrix by angle about the z axis.  Equivalent to:
     * goog.vec.mat3f.multMat(
     *     mat,
     *     goog.vec.mat3f.makeRotateZ(goog.vec.mat3f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateZ(mat: goog.vec.mat3f.Type, angle: number): goog.vec.mat3f.Type;

    /**
     * Makes the given 3x3 matrix a rotation matrix given Euler angles using
     * the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     * @return {!goog.vec.mat3f.Type} return mat so that operations can be
     *     chained.
     */
    function makeEulerZXZ(mat: goog.vec.mat3f.Type, theta1: number, theta2: number, theta3: number): goog.vec.mat3f.Type;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
     * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.mat3f.Type} mat The matrix.
     * @param {goog.vec.vec3f.Type} euler The ZXZ Euler angles in
     *     radians as [theta1, theta2, theta3].
     * @param {boolean=} opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead
     *     of the default [0, pi].
     * @return {!goog.vec.vec3f.Type} return euler so that operations can be
     *     chained together.
     */
    function toEulerZXZ(mat: goog.vec.mat3f.Type, euler: goog.vec.vec3f.Type, opt_theta2IsNegative?: boolean): goog.vec.vec3f.Type;
}

declare module 'goog.vec.Mat3' {

    /** @typedef {goog.vec.Float32} */
    interface Float32 extends goog.vec.Float32 { }

    /** @typedef {goog.vec.Float64} */
    interface Float64 extends goog.vec.Float64 { }

    /** @typedef {goog.vec.Number} */
    interface Number extends goog.vec.Number { }

    /** @typedef {goog.vec.AnyType} */
    interface AnyType extends goog.vec.AnyType { }

    /** @typedef {Float32Array} */
    interface Type extends Float32Array { }

    /** @typedef {goog.vec.ArrayType} */
    interface Mat3Like extends goog.vec.ArrayType { }

    /**
     * Creates the array representation of a 3x3 matrix of Float32.
     * The use of the array directly instead of a class reduces overhead.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat3.Float32} The new matrix.
     */
    function createFloat32(): goog.vec.Mat3.Float32;

    /**
     * Creates the array representation of a 3x3 matrix of Float64.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat3.Float64} The new matrix.
     */
    function createFloat64(): goog.vec.Mat3.Float64;

    /**
     * Creates the array representation of a 3x3 matrix of Number.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat3.Number} The new matrix.
     */
    function createNumber(): goog.vec.Mat3.Number;

    /**
     * Creates the array representation of a 3x3 matrix of Float32.
     * The returned matrix is cleared to all zeros.
     *
     * @deprecated Use createFloat32.
     * @return {!goog.vec.Mat3.Type} The new matrix.
     */
    function create(): goog.vec.Mat3.Type;

    /**
     * Creates a 3x3 identity matrix of Float32.
     *
     * @return {!goog.vec.Mat3.Float32} The new 9 element array.
     */
    function createFloat32Identity(): goog.vec.Mat3.Float32;

    /**
     * Creates a 3x3 identity matrix of Float64.
     *
     * @return {!goog.vec.Mat3.Float64} The new 9 element array.
     */
    function createFloat64Identity(): goog.vec.Mat3.Float64;

    /**
     * Creates a 3x3 identity matrix of Number.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat3.Number} The new 9 element array.
     */
    function createNumberIdentity(): goog.vec.Mat3.Number;

    /**
     * Creates the array representation of a 3x3 matrix of Float32.
     * The returned matrix is cleared to all zeros.
     *
     * @deprecated Use createFloat32Identity.
     * @return {!goog.vec.Mat3.Type} The new 9 element array.
     */
    function createIdentity(): goog.vec.Mat3.Type;

    /**
     * Creates a 3x3 matrix of Float32 initialized from the given array.
     *
     * @param {goog.vec.Mat3.AnyType} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat3.Float32} The new, nine element array.
     */
    function createFloat32FromArray(matrix: goog.vec.Mat3.AnyType): goog.vec.Mat3.Float32;

    /**
     * Creates a 3x3 matrix of Float32 initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @return {!goog.vec.Mat3.Float32} The new, nine element array.
     */
    function createFloat32FromValues(v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.Mat3.Float32;

    /**
     * Creates a clone of a 3x3 matrix of Float32.
     *
     * @param {goog.vec.Mat3.Float32} matrix The source 3x3 matrix.
     * @return {!goog.vec.Mat3.Float32} The new 3x3 element matrix.
     */
    var cloneFloat32: any /*missing*/;

    /**
     * Creates a 3x3 matrix of Float64 initialized from the given array.
     *
     * @param {goog.vec.Mat3.AnyType} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat3.Float64} The new, nine element array.
     */
    function createFloat64FromArray(matrix: goog.vec.Mat3.AnyType): goog.vec.Mat3.Float64;

    /**
     * Creates a 3x3 matrix of Float64 initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @return {!goog.vec.Mat3.Float64} The new, nine element array.
     */
    function createFloat64FromValues(v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.Mat3.Float64;

    /**
     * Creates a clone of a 3x3 matrix of Float64.
     *
     * @param {goog.vec.Mat3.Float64} matrix The source 3x3 matrix.
     * @return {!goog.vec.Mat3.Float64} The new 3x3 element matrix.
     */
    var cloneFloat64: any /*missing*/;

    /**
     * Creates a 3x3 matrix of Float32 initialized from the given array.
     *
     * @deprecated Use createFloat32FromArray.
     * @param {goog.vec.Mat3.Mat3Like} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat3.Type} The new, nine element array.
     */
    function createFromArray(matrix: goog.vec.Mat3.Mat3Like): goog.vec.Mat3.Type;

    /**
     * Creates a 3x3 matrix of Float32 initialized from the given values.
     *
     * @deprecated Use createFloat32FromValues.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @return {!goog.vec.Mat3.Type} The new, nine element array.
     */
    function createFromValues(v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.Mat3.Type;

    /**
     * Creates a clone of a 3x3 matrix of Float32.
     *
     * @deprecated Use cloneFloat32.
     * @param {goog.vec.Mat3.Mat3Like} matrix The source 3x3 matrix.
     * @return {!goog.vec.Mat3.Type} The new 3x3 element matrix.
     */
    var clone: any /*missing*/;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.Mat3.AnyType, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setElement(mat: goog.vec.Mat3.AnyType, row: number, column: number, value: number): goog.vec.Mat3.AnyType;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromValues(mat: goog.vec.Mat3.AnyType, v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.Mat3.AnyType;

    /**
     * Sets the matrix from the array of values stored in column major order.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Mat3.AnyType} values The column major ordered
     *     array of values to store in the matrix.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromArray(mat: goog.vec.Mat3.AnyType, values: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Sets the matrix from the array of values stored in row major order.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Mat3.AnyType} values The row major ordered array
     *     of values to store in the matrix.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromRowMajorArray(mat: goog.vec.Mat3.AnyType, values: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setDiagonalValues(mat: goog.vec.Mat3.AnyType, v00: number, v11: number, v22: number): goog.vec.Mat3.AnyType;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec3.AnyType} vec The vector containing the values.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setDiagonal(mat: goog.vec.Mat3.AnyType, vec: goog.vec.Vec3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to recieve the values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumnValues(mat: goog.vec.Mat3.AnyType, column: number, v0: number, v1: number, v2: number): goog.vec.Mat3.AnyType;

    /**
     * Sets the specified column with the value from the supplied array.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.Vec3.AnyType} vec The vector elements for the column.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumn(mat: goog.vec.Mat3.AnyType, column: number, vec: goog.vec.Vec3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Retrieves the specified column from the matrix into the given vector
     * array.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix supplying the values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.Vec3.AnyType} vec The vector elements to receive the
     *     column.
     * @return {goog.vec.Vec3.AnyType} return vec so that operations can be
     *     chained together.
     */
    function getColumn(mat: goog.vec.Mat3.AnyType, column: number, vec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Sets the columns of the matrix from the set of vector elements.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec3.AnyType} vec0 The values for column 0.
     * @param {goog.vec.Vec3.AnyType} vec1 The values for column 1.
     * @param {goog.vec.Vec3.AnyType} vec2 The values for column 2.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumns(mat: goog.vec.Mat3.AnyType, vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, vec2: goog.vec.Vec3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Retrieves the column values from the given matrix into the given vector
     * elements.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix supplying the columns.
     * @param {goog.vec.Vec3.AnyType} vec0 The vector to receive column 0.
     * @param {goog.vec.Vec3.AnyType} vec1 The vector to receive column 1.
     * @param {goog.vec.Vec3.AnyType} vec2 The vector to receive column 2.
     */
    function getColumns(mat: goog.vec.Mat3.AnyType, vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, vec2: goog.vec.Vec3.AnyType): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRowValues(mat: goog.vec.Mat3.AnyType, row: number, v0: number, v1: number, v2: number): goog.vec.Mat3.AnyType;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.Vec3.AnyType} vec The vector containing the values.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRow(mat: goog.vec.Mat3.AnyType, row: number, vec: goog.vec.Vec3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix supplying the values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.Vec3.AnyType} vec The vector to receive the row.
     * @return {goog.vec.Vec3.AnyType} return vec so that operations can be
     *     chained together.
     */
    function getRow(mat: goog.vec.Mat3.AnyType, row: number, vec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec3.AnyType} vec0 The values for row 0.
     * @param {goog.vec.Vec3.AnyType} vec1 The values for row 1.
     * @param {goog.vec.Vec3.AnyType} vec2 The values for row 2.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRows(mat: goog.vec.Mat3.AnyType, vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, vec2: goog.vec.Vec3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to supplying the values.
     * @param {goog.vec.Vec3.AnyType} vec0 The vector to receive row 0.
     * @param {goog.vec.Vec3.AnyType} vec1 The vector to receive row 1.
     * @param {goog.vec.Vec3.AnyType} vec2 The vector to receive row 2.
     */
    function getRows(mat: goog.vec.Mat3.AnyType, vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, vec2: goog.vec.Vec3.AnyType): void;

    /**
     * Makes the given 3x3 matrix the zero matrix.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @return {goog.vec.Mat3.AnyType} return mat so operations can be chained.
     */
    function makeZero(mat: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Makes the given 3x3 matrix the identity matrix.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @return {goog.vec.Mat3.AnyType} return mat so operations can be chained.
     */
    function makeIdentity(mat: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Performs a per-component addition of the matrices mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.Mat3.AnyType} mat0 The first addend.
     * @param {goog.vec.Mat3.AnyType} mat1 The second addend.
     * @param {goog.vec.Mat3.AnyType} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat3.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function addMat(mat0: goog.vec.Mat3.AnyType, mat1: goog.vec.Mat3.AnyType, resultMat: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Performs a per-component subtraction of the matrices mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.Mat3.AnyType} mat0 The minuend.
     * @param {goog.vec.Mat3.AnyType} mat1 The subtrahend.
     * @param {goog.vec.Mat3.AnyType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat3.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function subMat(mat0: goog.vec.Mat3.AnyType, mat1: goog.vec.Mat3.AnyType, resultMat: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Multiplies matrix mat0 with the given scalar, storing the result
     * into resultMat.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} scalar The scalar value to multiple to each element of mat.
     * @param {goog.vec.Mat3.AnyType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.Mat3.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function multScalar(mat: goog.vec.Mat3.AnyType, scalar: number, resultMat: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.Mat3.AnyType} mat0 The first (left hand) matrix.
     * @param {goog.vec.Mat3.AnyType} mat1 The second (right hand) matrix.
     * @param {goog.vec.Mat3.AnyType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat3.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.Mat3.AnyType, mat1: goog.vec.Mat3.AnyType, resultMat: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix to transpose.
     * @param {goog.vec.Mat3.AnyType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.Mat3.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.Mat3.AnyType, resultMat: goog.vec.Mat3.AnyType): goog.vec.Mat3.AnyType;

    /**
     * Computes the inverse of mat0 storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.Mat3.AnyType} mat0 The matrix to invert.
     * @param {goog.vec.Mat3.AnyType} resultMat The matrix to receive
     *     the result (may be mat0).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat0: goog.vec.Mat3.AnyType, resultMat: goog.vec.Mat3.AnyType): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.Mat3.AnyType} mat0 The first matrix.
     * @param {goog.vec.Mat3.AnyType} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.Mat3.AnyType, mat1: goog.vec.Mat3.AnyType): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed matrix into resultVec.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec3.AnyType} vec The vector to transform.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the results (may be vec).
     * @return {goog.vec.Vec3.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.Mat3.AnyType, vec: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Makes the given 3x3 matrix a translation matrix with x and y
     * translation values.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeTranslate(mat: goog.vec.Mat3.AnyType, x: number, y: number): goog.vec.Mat3.AnyType;

    /**
     * Makes the given 3x3 matrix a scale matrix with x, y, and z scale factors.
     *
     * @param {goog.vec.Mat3.AnyType} mat The 3x3 (9-element) matrix
     *     array to receive the new scale matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeScale(mat: goog.vec.Mat3.AnyType, x: number, y: number, z: number): goog.vec.Mat3.AnyType;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotate(mat: goog.vec.Mat3.AnyType, angle: number, ax: number, ay: number, az: number): goog.vec.Mat3.AnyType;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the X axis.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateX(mat: goog.vec.Mat3.AnyType, angle: number): goog.vec.Mat3.AnyType;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the Y axis.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateY(mat: goog.vec.Mat3.AnyType, angle: number): goog.vec.Mat3.AnyType;

    /**
     * Makes the given 3x3 matrix a rotation matrix with the given rotation
     * angle about the Z axis.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateZ(mat: goog.vec.Mat3.AnyType, angle: number): goog.vec.Mat3.AnyType;

    /**
     * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
     * goog.vec.Mat3.multMat(
     *     mat,
     *     goog.vec.Mat3.makeRotate(goog.vec.Mat3.create(), angle, x, y, z),
     *     mat);
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotate(mat: goog.vec.Mat3.AnyType, angle: number, x: number, y: number, z: number): goog.vec.Mat3.AnyType;

    /**
     * Rotate the given matrix by angle about the x axis.  Equivalent to:
     * goog.vec.Mat3.multMat(
     *     mat,
     *     goog.vec.Mat3.makeRotateX(goog.vec.Mat3.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateX(mat: goog.vec.Mat3.AnyType, angle: number): goog.vec.Mat3.AnyType;

    /**
     * Rotate the given matrix by angle about the y axis.  Equivalent to:
     * goog.vec.Mat3.multMat(
     *     mat,
     *     goog.vec.Mat3.makeRotateY(goog.vec.Mat3.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateY(mat: goog.vec.Mat3.AnyType, angle: number): goog.vec.Mat3.AnyType;

    /**
     * Rotate the given matrix by angle about the z axis.  Equivalent to:
     * goog.vec.Mat3.multMat(
     *     mat,
     *     goog.vec.Mat3.makeRotateZ(goog.vec.Mat3.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateZ(mat: goog.vec.Mat3.AnyType, angle: number): goog.vec.Mat3.AnyType;

    /**
     * Makes the given 3x3 matrix a rotation matrix given Euler angles using
     * the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     * @return {goog.vec.Mat3.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeEulerZXZ(mat: goog.vec.Mat3.AnyType, theta1: number, theta2: number, theta3: number): goog.vec.Mat3.AnyType;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
     * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.Mat3.AnyType} mat The matrix.
     * @param {goog.vec.Vec3.AnyType} euler The ZXZ Euler angles in
     *     radians as [theta1, theta2, theta3].
     * @param {boolean=} opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead
     *     of the default [0, pi].
     * @return {goog.vec.Vec3.AnyType} return euler so that operations can be
     *     chained together.
     */
    function toEulerZXZ(mat: goog.vec.Mat3.AnyType, euler: goog.vec.Vec3.AnyType, opt_theta2IsNegative?: boolean): goog.vec.Vec3.AnyType;
}

declare module 'goog.vec.mat4d' {

    /** @typedef {goog.vec.Float64} */
    interface Type extends goog.vec.Float64 { }

    /**
     * Creates a mat4d with all elements initialized to zero.
     *
     * @return {!goog.vec.mat4d.Type} The new mat4d.
     */
    function create(): goog.vec.mat4d.Type;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setFromValues(mat: goog.vec.mat4d.Type, v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.mat4d.Type;

    /**
     * Initializes mat4d mat from mat4d src.
     *
     * @param {goog.vec.mat4d.Type} mat The destination matrix.
     * @param {goog.vec.mat4d.Type} src The source matrix.
     * @return {!goog.vec.mat4d.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat4d(mat: goog.vec.mat4d.Type, src: goog.vec.mat4d.Type): goog.vec.mat4d.Type;

    /**
     * Initializes mat4d mat from mat4f src (typed as a Float32Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.mat4d.Type} mat The destination matrix.
     * @param {Float32Array} src The source matrix.
     * @return {!goog.vec.mat4d.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat4f(mat: goog.vec.mat4d.Type, src: Float32Array): goog.vec.mat4d.Type;

    /**
     * Initializes mat4d mat from Array src.
     *
     * @param {goog.vec.mat4d.Type} mat The destination matrix.
     * @param {Array.<number>} src The source matrix.
     * @return {!goog.vec.mat4d.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromArray(mat: goog.vec.mat4d.Type, src: number[]): goog.vec.mat4d.Type;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.mat4d.Type, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setElement(mat: goog.vec.mat4d.Type, row: number, column: number, value: number): goog.vec.mat4d.Type;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to receive the values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @param {number} v33 The values for (3, 3).
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonalValues(mat: goog.vec.mat4d.Type, v00: number, v11: number, v22: number, v33: number): goog.vec.mat4d.Type;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec4d.Type} vec The vector containing the values.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonal(mat: goog.vec.mat4d.Type, vec: goog.vec.vec4d.Type): goog.vec.mat4d.Type;

    /**
     * Gets the diagonal values of the matrix into the given vector.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix containing the values.
     * @param {goog.vec.vec4d.Type} vec The vector to receive the values.
     * @param {number=} opt_diagonal Which diagonal to get. A value of 0 selects the
     *     main diagonal, a positive number selects a super diagonal and a negative
     *     number selects a sub diagonal.
     * @return {goog.vec.vec4d.Type} return vec so that operations can be
     *     chained together.
     */
    function getDiagonal(mat: goog.vec.mat4d.Type, vec: goog.vec.vec4d.Type, opt_diagonal?: number): goog.vec.vec4d.Type;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to recieve the values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @param {number} v3 The value for row 3.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumnValues(mat: goog.vec.mat4d.Type, column: number, v0: number, v1: number, v2: number, v3: number): goog.vec.mat4d.Type;

    /**
     * Sets the specified column with the value from the supplied vector.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to receive the values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.vec4d.Type} vec The vector of elements for the column.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumn(mat: goog.vec.mat4d.Type, column: number, vec: goog.vec.vec4d.Type): goog.vec.mat4d.Type;

    /**
     * Retrieves the specified column from the matrix into the given vector.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix supplying the values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.vec4d.Type} vec The vector of elements to
     *     receive the column.
     * @return {!goog.vec.vec4d.Type} return vec so that operations can be
     *     chained together.
     */
    function getColumn(mat: goog.vec.mat4d.Type, column: number, vec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Sets the columns of the matrix from the given vectors.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec4d.Type} vec0 The values for column 0.
     * @param {goog.vec.vec4d.Type} vec1 The values for column 1.
     * @param {goog.vec.vec4d.Type} vec2 The values for column 2.
     * @param {goog.vec.vec4d.Type} vec3 The values for column 3.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumns(mat: goog.vec.mat4d.Type, vec0: goog.vec.vec4d.Type, vec1: goog.vec.vec4d.Type, vec2: goog.vec.vec4d.Type, vec3: goog.vec.vec4d.Type): goog.vec.mat4d.Type;

    /**
     * Retrieves the column values from the given matrix into the given vectors.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix supplying the columns.
     * @param {goog.vec.vec4d.Type} vec0 The vector to receive column 0.
     * @param {goog.vec.vec4d.Type} vec1 The vector to receive column 1.
     * @param {goog.vec.vec4d.Type} vec2 The vector to receive column 2.
     * @param {goog.vec.vec4d.Type} vec3 The vector to receive column 3.
     */
    function getColumns(mat: goog.vec.mat4d.Type, vec0: goog.vec.vec4d.Type, vec1: goog.vec.vec4d.Type, vec2: goog.vec.vec4d.Type, vec3: goog.vec.vec4d.Type): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to receive the values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @param {number} v3 The value for column 3.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setRowValues(mat: goog.vec.mat4d.Type, row: number, v0: number, v1: number, v2: number, v3: number): goog.vec.mat4d.Type;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to receive the row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.vec4d.Type} vec The vector containing the values.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setRow(mat: goog.vec.mat4d.Type, row: number, vec: goog.vec.vec4d.Type): goog.vec.mat4d.Type;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix supplying the values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.vec4d.Type} vec The vector to receive the row.
     * @return {!goog.vec.vec4d.Type} return vec so that operations can be
     *     chained together.
     */
    function getRow(mat: goog.vec.mat4d.Type, row: number, vec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec4d.Type} vec0 The values for row 0.
     * @param {goog.vec.vec4d.Type} vec1 The values for row 1.
     * @param {goog.vec.vec4d.Type} vec2 The values for row 2.
     * @param {goog.vec.vec4d.Type} vec3 The values for row 3.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained together.
     */
    function setRows(mat: goog.vec.mat4d.Type, vec0: goog.vec.vec4d.Type, vec1: goog.vec.vec4d.Type, vec2: goog.vec.vec4d.Type, vec3: goog.vec.vec4d.Type): goog.vec.mat4d.Type;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to supply the values.
     * @param {goog.vec.vec4d.Type} vec0 The vector to receive row 0.
     * @param {goog.vec.vec4d.Type} vec1 The vector to receive row 1.
     * @param {goog.vec.vec4d.Type} vec2 The vector to receive row 2.
     * @param {goog.vec.vec4d.Type} vec3 The vector to receive row 3.
     */
    function getRows(mat: goog.vec.mat4d.Type, vec0: goog.vec.vec4d.Type, vec1: goog.vec.vec4d.Type, vec2: goog.vec.vec4d.Type, vec3: goog.vec.vec4d.Type): void;

    /**
     * Makes the given 4x4 matrix the zero matrix.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @return {!goog.vec.mat4d.Type} return mat so operations can be chained.
     */
    function makeZero(mat: goog.vec.mat4d.Type): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix the identity matrix.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @return {!goog.vec.mat4d.Type} return mat so operations can be chained.
     */
    function makeIdentity(mat: goog.vec.mat4d.Type): goog.vec.mat4d.Type;

    /**
     * Performs a per-component addition of the matrix mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.mat4d.Type} mat0 The first addend.
     * @param {goog.vec.mat4d.Type} mat1 The second addend.
     * @param {goog.vec.mat4d.Type} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat4d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function addMat(mat0: goog.vec.mat4d.Type, mat1: goog.vec.mat4d.Type, resultMat: goog.vec.mat4d.Type): goog.vec.mat4d.Type;

    /**
     * Performs a per-component subtraction of the matrix mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat4d.Type} mat0 The minuend.
     * @param {goog.vec.mat4d.Type} mat1 The subtrahend.
     * @param {goog.vec.mat4d.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat4d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function subMat(mat0: goog.vec.mat4d.Type, mat1: goog.vec.mat4d.Type, resultMat: goog.vec.mat4d.Type): goog.vec.mat4d.Type;

    /**
     * Multiplies matrix mat with the given scalar, storing the result
     * into resultMat.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} scalar The scalar value to multiply to each element of mat.
     * @param {goog.vec.mat4d.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat4d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multScalar(mat: goog.vec.mat4d.Type, scalar: number, resultMat: goog.vec.mat4d.Type): goog.vec.mat4d.Type;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat4d.Type} mat0 The first (left hand) matrix.
     * @param {goog.vec.mat4d.Type} mat1 The second (right hand) matrix.
     * @param {goog.vec.mat4d.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat4d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.mat4d.Type, mat1: goog.vec.mat4d.Type, resultMat: goog.vec.mat4d.Type): goog.vec.mat4d.Type;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to transpose.
     * @param {goog.vec.mat4d.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat4d.Type} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.mat4d.Type, resultMat: goog.vec.mat4d.Type): goog.vec.mat4d.Type;

    /**
     * Computes the determinant of the matrix.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to compute the matrix for.
     * @return {number} The determinant of the matrix.
     */
    function determinant(mat: goog.vec.mat4d.Type): number;

    /**
     * Computes the inverse of mat storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix to invert.
     * @param {goog.vec.mat4d.Type} resultMat The matrix to receive
     *     the result (may be mat).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat: goog.vec.mat4d.Type, resultMat: goog.vec.mat4d.Type): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.mat4d.Type} mat0 The first matrix.
     * @param {goog.vec.mat4d.Type} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.mat4d.Type, mat1: goog.vec.mat4d.Type): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x4 matrix omitting the projective component.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3d.Type} vec The 3 element vector to transform.
     * @param {goog.vec.vec3d.Type} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec3d.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.mat4d.Type, vec: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x3 matrix omitting the projective component and translation
     * components.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3d.Type} vec The 3 element vector to transform.
     * @param {goog.vec.vec3d.Type} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec3d.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3NoTranslate(mat: goog.vec.mat4d.Type, vec: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * full 4x4 matrix with the homogeneous divide applied to reduce the 4 element
     * vector to a 3 element vector.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3d.Type} vec The 3 element vector to transform.
     * @param {goog.vec.vec3d.Type} resultVec The 3 element vector
     *     to receive the results (may be vec).
     * @return {!goog.vec.vec3d.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3Projective(mat: goog.vec.mat4d.Type, vec: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec4d.Type} vec The vector to transform.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec4d.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec4(mat: goog.vec.mat4d.Type, vec: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Makes the given 4x4 matrix a translation matrix with x, y and z
     * translation factors.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeTranslate(mat: goog.vec.mat4d.Type, x: number, y: number, z: number): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix as a scale matrix with x, y and z scale factors.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeScale(mat: goog.vec.mat4d.Type, x: number, y: number, z: number): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotate(mat: goog.vec.mat4d.Type, angle: number, ax: number, ay: number, az: number): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the X axis.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateX(mat: goog.vec.mat4d.Type, angle: number): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the Y axis.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateY(mat: goog.vec.mat4d.Type, angle: number): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the Z axis.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateZ(mat: goog.vec.mat4d.Type, angle: number): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix a perspective projection matrix.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeFrustum(mat: goog.vec.mat4d.Type, left: number, right: number, bottom: number, top: number, near: number, far: number): goog.vec.mat4d.Type;

    /**
     * Makse the given 4x4 matrix  perspective projection matrix given a
     * field of view and aspect ratio.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} fovy The field of view along the y (vertical) axis in
     *     radians.
     * @param {number} aspect The x (width) to y (height) aspect ratio.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makePerspective(mat: goog.vec.mat4d.Type, fovy: number, aspect: number, near: number, far: number): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix an orthographic projection matrix.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeOrtho(mat: goog.vec.mat4d.Type, left: number, right: number, bottom: number, top: number, near: number, far: number): goog.vec.mat4d.Type;

    /**
     * Makes the given 4x4 matrix a modelview matrix of a camera so that
     * the camera is 'looking at' the given center point.
     *
     * Note that unlike most other goog.vec functions where we inline
     * everything, this function does not inline various goog.vec
     * functions.  This makes the code more readable, but somewhat
     * less efficient.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {goog.vec.vec3d.Type} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.vec3d.Type} centerPt The point to aim the camera at.
     * @param {goog.vec.vec3d.Type} worldUpVec The vector that identifies
     *     the up direction for the camera.
     * @return {goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeLookAt(mat: goog.vec.mat4d.Type, eyePt: goog.vec.vec3d.Type, centerPt: goog.vec.vec3d.Type, worldUpVec: goog.vec.vec3d.Type): goog.vec.mat4d.Type;

    /**
     * Decomposes a matrix into the lookAt vectors eyePt, fwdVec and worldUpVec.
     * The matrix represents the modelview matrix of a camera. It is the inverse
     * of lookAt except for the output of the fwdVec instead of centerPt.
     * The centerPt itself cannot be recovered from a modelview matrix.
     *
     * Note that unlike most other goog.vec functions where we inline
     * everything, this function does not inline various goog.vec
     * functions.  This makes the code more readable, but somewhat
     * less efficient.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {goog.vec.vec3d.Type} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.vec3d.Type} fwdVec The vector describing where
     *     the camera points to.
     * @param {goog.vec.vec3d.Type} worldUpVec The vector that
     *     identifies the up direction for the camera.
     * @return {boolean} True if the method succeeds, false otherwise.
     *     The method can only fail if the inverse of viewMatrix is not defined.
     */
    function toLookAt(mat: goog.vec.mat4d.Type, eyePt: goog.vec.vec3d.Type, fwdVec: goog.vec.vec3d.Type, worldUpVec: goog.vec.vec3d.Type): boolean;

    /**
     * Makes the given 4x4 matrix a rotation matrix given Euler angles using
     * the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians,
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function makeEulerZXZ(mat: goog.vec.mat4d.Type, theta1: number, theta2: number, theta3: number): goog.vec.mat4d.Type;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
     * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {goog.vec.vec3d.Type} euler The ZXZ Euler angles in
     *     radians as [theta1, theta2, theta3].
     * @param {boolean=} opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead
     *     of the default [0, pi].
     * @return {!goog.vec.vec4d.Type} return euler so that operations can be
     *     chained together.
     */
    function toEulerZXZ(mat: goog.vec.mat4d.Type, euler: goog.vec.vec3d.Type, opt_theta2IsNegative?: boolean): goog.vec.vec4d.Type;

    /**
     * Translates the given matrix by x,y,z.  Equvialent to:
     * goog.vec.mat4d.multMat(
     *     mat,
     *     goog.vec.mat4d.makeTranslate(goog.vec.mat4d.create(), x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function translate(mat: goog.vec.mat4d.Type, x: number, y: number, z: number): goog.vec.mat4d.Type;

    /**
     * Scales the given matrix by x,y,z.  Equivalent to:
     * goog.vec.mat4d.multMat(
     *     mat,
     *     goog.vec.mat4d.makeScale(goog.vec.mat4d.create(), x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} x The x scale factor.
     * @param {number} y The y scale factor.
     * @param {number} z The z scale factor.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function scale(mat: goog.vec.mat4d.Type, x: number, y: number, z: number): goog.vec.mat4d.Type;

    /**
     * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
     * goog.vec.mat4d.multMat(
     *     mat,
     *     goog.vec.mat4d.makeRotate(goog.vec.mat4d.create(), angle, x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function rotate(mat: goog.vec.mat4d.Type, angle: number, x: number, y: number, z: number): goog.vec.mat4d.Type;

    /**
     * Rotate the given matrix by angle about the x axis.  Equivalent to:
     * goog.vec.mat4d.multMat(
     *     mat,
     *     goog.vec.mat4d.makeRotateX(goog.vec.mat4d.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function rotateX(mat: goog.vec.mat4d.Type, angle: number): goog.vec.mat4d.Type;

    /**
     * Rotate the given matrix by angle about the y axis.  Equivalent to:
     * goog.vec.mat4d.multMat(
     *     mat,
     *     goog.vec.mat4d.makeRotateY(goog.vec.mat4d.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function rotateY(mat: goog.vec.mat4d.Type, angle: number): goog.vec.mat4d.Type;

    /**
     * Rotate the given matrix by angle about the z axis.  Equivalent to:
     * goog.vec.mat4d.multMat(
     *     mat,
     *     goog.vec.mat4d.makeRotateZ(goog.vec.mat4d.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat4d.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat4d.Type} return mat so that operations can be
     *     chained.
     */
    function rotateZ(mat: goog.vec.mat4d.Type, angle: number): goog.vec.mat4d.Type;

    /**
     * Retrieves the translation component of the transformation matrix.
     *
     * @param {goog.vec.mat4d.Type} mat The transformation matrix.
     * @param {goog.vec.vec3d.Type} translation The vector for storing the
     *     result.
     * @return {!goog.vec.vec3d.Type} return translation so that operations can be
     *     chained.
     */
    function getTranslation(mat: goog.vec.mat4d.Type, translation: goog.vec.vec3d.Type): goog.vec.vec3d.Type;
}

declare module 'goog.vec.mat4f' {

    /** @typedef {goog.vec.Float32} */
    interface Type extends goog.vec.Float32 { }

    /**
     * Creates a mat4f with all elements initialized to zero.
     *
     * @return {!goog.vec.mat4f.Type} The new mat4f.
     */
    function create(): goog.vec.mat4f.Type;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setFromValues(mat: goog.vec.mat4f.Type, v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.mat4f.Type;

    /**
     * Initializes mat4f mat from mat4f src.
     *
     * @param {goog.vec.mat4f.Type} mat The destination matrix.
     * @param {goog.vec.mat4f.Type} src The source matrix.
     * @return {!goog.vec.mat4f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat4f(mat: goog.vec.mat4f.Type, src: goog.vec.mat4f.Type): goog.vec.mat4f.Type;

    /**
     * Initializes mat4f mat from mat4d src (typed as a Float64Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.mat4f.Type} mat The destination matrix.
     * @param {Float64Array} src The source matrix.
     * @return {!goog.vec.mat4f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromMat4d(mat: goog.vec.mat4f.Type, src: Float64Array): goog.vec.mat4f.Type;

    /**
     * Initializes mat4f mat from Array src.
     *
     * @param {goog.vec.mat4f.Type} mat The destination matrix.
     * @param {Array.<number>} src The source matrix.
     * @return {!goog.vec.mat4f.Type} Return mat so that operations can be
     *     chained together.
     */
    function setFromArray(mat: goog.vec.mat4f.Type, src: number[]): goog.vec.mat4f.Type;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.mat4f.Type, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix containing the value to
     *     retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setElement(mat: goog.vec.mat4f.Type, row: number, column: number, value: number): goog.vec.mat4f.Type;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to receive the values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @param {number} v33 The values for (3, 3).
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonalValues(mat: goog.vec.mat4f.Type, v00: number, v11: number, v22: number, v33: number): goog.vec.mat4f.Type;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec4f.Type} vec The vector containing the values.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setDiagonal(mat: goog.vec.mat4f.Type, vec: goog.vec.vec4f.Type): goog.vec.mat4f.Type;

    /**
     * Gets the diagonal values of the matrix into the given vector.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix containing the values.
     * @param {goog.vec.vec4f.Type} vec The vector to receive the values.
     * @param {number=} opt_diagonal Which diagonal to get. A value of 0 selects the
     *     main diagonal, a positive number selects a super diagonal and a negative
     *     number selects a sub diagonal.
     * @return {goog.vec.vec4f.Type} return vec so that operations can be
     *     chained together.
     */
    function getDiagonal(mat: goog.vec.mat4f.Type, vec: goog.vec.vec4f.Type, opt_diagonal?: number): goog.vec.vec4f.Type;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to recieve the values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @param {number} v3 The value for row 3.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumnValues(mat: goog.vec.mat4f.Type, column: number, v0: number, v1: number, v2: number, v3: number): goog.vec.mat4f.Type;

    /**
     * Sets the specified column with the value from the supplied vector.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to receive the values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.vec4f.Type} vec The vector of elements for the column.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumn(mat: goog.vec.mat4f.Type, column: number, vec: goog.vec.vec4f.Type): goog.vec.mat4f.Type;

    /**
     * Retrieves the specified column from the matrix into the given vector.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix supplying the values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.vec4f.Type} vec The vector of elements to
     *     receive the column.
     * @return {!goog.vec.vec4f.Type} return vec so that operations can be
     *     chained together.
     */
    function getColumn(mat: goog.vec.mat4f.Type, column: number, vec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Sets the columns of the matrix from the given vectors.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec4f.Type} vec0 The values for column 0.
     * @param {goog.vec.vec4f.Type} vec1 The values for column 1.
     * @param {goog.vec.vec4f.Type} vec2 The values for column 2.
     * @param {goog.vec.vec4f.Type} vec3 The values for column 3.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setColumns(mat: goog.vec.mat4f.Type, vec0: goog.vec.vec4f.Type, vec1: goog.vec.vec4f.Type, vec2: goog.vec.vec4f.Type, vec3: goog.vec.vec4f.Type): goog.vec.mat4f.Type;

    /**
     * Retrieves the column values from the given matrix into the given vectors.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix supplying the columns.
     * @param {goog.vec.vec4f.Type} vec0 The vector to receive column 0.
     * @param {goog.vec.vec4f.Type} vec1 The vector to receive column 1.
     * @param {goog.vec.vec4f.Type} vec2 The vector to receive column 2.
     * @param {goog.vec.vec4f.Type} vec3 The vector to receive column 3.
     */
    function getColumns(mat: goog.vec.mat4f.Type, vec0: goog.vec.vec4f.Type, vec1: goog.vec.vec4f.Type, vec2: goog.vec.vec4f.Type, vec3: goog.vec.vec4f.Type): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to receive the values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @param {number} v3 The value for column 3.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRowValues(mat: goog.vec.mat4f.Type, row: number, v0: number, v1: number, v2: number, v3: number): goog.vec.mat4f.Type;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to receive the row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.vec4f.Type} vec The vector containing the values.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRow(mat: goog.vec.mat4f.Type, row: number, vec: goog.vec.vec4f.Type): goog.vec.mat4f.Type;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix supplying the values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.vec4f.Type} vec The vector to receive the row.
     * @return {!goog.vec.vec4f.Type} return vec so that operations can be
     *     chained together.
     */
    function getRow(mat: goog.vec.mat4f.Type, row: number, vec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to receive the values.
     * @param {goog.vec.vec4f.Type} vec0 The values for row 0.
     * @param {goog.vec.vec4f.Type} vec1 The values for row 1.
     * @param {goog.vec.vec4f.Type} vec2 The values for row 2.
     * @param {goog.vec.vec4f.Type} vec3 The values for row 3.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained together.
     */
    function setRows(mat: goog.vec.mat4f.Type, vec0: goog.vec.vec4f.Type, vec1: goog.vec.vec4f.Type, vec2: goog.vec.vec4f.Type, vec3: goog.vec.vec4f.Type): goog.vec.mat4f.Type;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to supply the values.
     * @param {goog.vec.vec4f.Type} vec0 The vector to receive row 0.
     * @param {goog.vec.vec4f.Type} vec1 The vector to receive row 1.
     * @param {goog.vec.vec4f.Type} vec2 The vector to receive row 2.
     * @param {goog.vec.vec4f.Type} vec3 The vector to receive row 3.
     */
    function getRows(mat: goog.vec.mat4f.Type, vec0: goog.vec.vec4f.Type, vec1: goog.vec.vec4f.Type, vec2: goog.vec.vec4f.Type, vec3: goog.vec.vec4f.Type): void;

    /**
     * Makes the given 4x4 matrix the zero matrix.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @return {!goog.vec.mat4f.Type} return mat so operations can be chained.
     */
    function makeZero(mat: goog.vec.mat4f.Type): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix the identity matrix.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @return {!goog.vec.mat4f.Type} return mat so operations can be chained.
     */
    function makeIdentity(mat: goog.vec.mat4f.Type): goog.vec.mat4f.Type;

    /**
     * Performs a per-component addition of the matrix mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.mat4f.Type} mat0 The first addend.
     * @param {goog.vec.mat4f.Type} mat1 The second addend.
     * @param {goog.vec.mat4f.Type} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat4f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function addMat(mat0: goog.vec.mat4f.Type, mat1: goog.vec.mat4f.Type, resultMat: goog.vec.mat4f.Type): goog.vec.mat4f.Type;

    /**
     * Performs a per-component subtraction of the matrix mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat4f.Type} mat0 The minuend.
     * @param {goog.vec.mat4f.Type} mat1 The subtrahend.
     * @param {goog.vec.mat4f.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat4f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function subMat(mat0: goog.vec.mat4f.Type, mat1: goog.vec.mat4f.Type, resultMat: goog.vec.mat4f.Type): goog.vec.mat4f.Type;

    /**
     * Multiplies matrix mat with the given scalar, storing the result
     * into resultMat.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} scalar The scalar value to multiply to each element of mat.
     * @param {goog.vec.mat4f.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat4f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multScalar(mat: goog.vec.mat4f.Type, scalar: number, resultMat: goog.vec.mat4f.Type): goog.vec.mat4f.Type;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.mat4f.Type} mat0 The first (left hand) matrix.
     * @param {goog.vec.mat4f.Type} mat1 The second (right hand) matrix.
     * @param {goog.vec.mat4f.Type} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {!goog.vec.mat4f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.mat4f.Type, mat1: goog.vec.mat4f.Type, resultMat: goog.vec.mat4f.Type): goog.vec.mat4f.Type;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to transpose.
     * @param {goog.vec.mat4f.Type} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {!goog.vec.mat4f.Type} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.mat4f.Type, resultMat: goog.vec.mat4f.Type): goog.vec.mat4f.Type;

    /**
     * Computes the determinant of the matrix.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to compute the matrix for.
     * @return {number} The determinant of the matrix.
     */
    function determinant(mat: goog.vec.mat4f.Type): number;

    /**
     * Computes the inverse of mat storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix to invert.
     * @param {goog.vec.mat4f.Type} resultMat The matrix to receive
     *     the result (may be mat).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat: goog.vec.mat4f.Type, resultMat: goog.vec.mat4f.Type): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.mat4f.Type} mat0 The first matrix.
     * @param {goog.vec.mat4f.Type} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.mat4f.Type, mat1: goog.vec.mat4f.Type): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x4 matrix omitting the projective component.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3f.Type} vec The 3 element vector to transform.
     * @param {goog.vec.vec3f.Type} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec3f.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.mat4f.Type, vec: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x3 matrix omitting the projective component and translation
     * components.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3f.Type} vec The 3 element vector to transform.
     * @param {goog.vec.vec3f.Type} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec3f.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3NoTranslate(mat: goog.vec.mat4f.Type, vec: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * full 4x4 matrix with the homogeneous divide applied to reduce the 4 element
     * vector to a 3 element vector.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec3f.Type} vec The 3 element vector to transform.
     * @param {goog.vec.vec3f.Type} resultVec The 3 element vector
     *     to receive the results (may be vec).
     * @return {!goog.vec.vec3f.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3Projective(mat: goog.vec.mat4f.Type, vec: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix supplying the transformation.
     * @param {goog.vec.vec4f.Type} vec The vector to transform.
     * @param {goog.vec.vec4f.Type} resultVec The vector to
     *     receive the results (may be vec).
     * @return {!goog.vec.vec4f.Type} return resultVec so that operations can be
     *     chained together.
     */
    function multVec4(mat: goog.vec.mat4f.Type, vec: goog.vec.vec4f.Type, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Makes the given 4x4 matrix a translation matrix with x, y and z
     * translation factors.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeTranslate(mat: goog.vec.mat4f.Type, x: number, y: number, z: number): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix as a scale matrix with x, y and z scale factors.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeScale(mat: goog.vec.mat4f.Type, x: number, y: number, z: number): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotate(mat: goog.vec.mat4f.Type, angle: number, ax: number, ay: number, az: number): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the X axis.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateX(mat: goog.vec.mat4f.Type, angle: number): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the Y axis.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateY(mat: goog.vec.mat4f.Type, angle: number): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the Z axis.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeRotateZ(mat: goog.vec.mat4f.Type, angle: number): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix a perspective projection matrix.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeFrustum(mat: goog.vec.mat4f.Type, left: number, right: number, bottom: number, top: number, near: number, far: number): goog.vec.mat4f.Type;

    /**
     * Makse the given 4x4 matrix  perspective projection matrix given a
     * field of view and aspect ratio.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} fovy The field of view along the y (vertical) axis in
     *     radians.
     * @param {number} aspect The x (width) to y (height) aspect ratio.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makePerspective(mat: goog.vec.mat4f.Type, fovy: number, aspect: number, near: number, far: number): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix an orthographic projection matrix.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeOrtho(mat: goog.vec.mat4f.Type, left: number, right: number, bottom: number, top: number, near: number, far: number): goog.vec.mat4f.Type;

    /**
     * Makes the given 4x4 matrix a modelview matrix of a camera so that
     * the camera is 'looking at' the given center point.
     *
     * Note that unlike most other goog.vec functions where we inline
     * everything, this function does not inline various goog.vec
     * functions.  This makes the code more readable, but somewhat
     * less efficient.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {goog.vec.vec3f.Type} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.vec3f.Type} centerPt The point to aim the camera at.
     * @param {goog.vec.vec3f.Type} worldUpVec The vector that identifies
     *     the up direction for the camera.
     * @return {goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeLookAt(mat: goog.vec.mat4f.Type, eyePt: goog.vec.vec3f.Type, centerPt: goog.vec.vec3f.Type, worldUpVec: goog.vec.vec3f.Type): goog.vec.mat4f.Type;

    /**
     * Decomposes a matrix into the lookAt vectors eyePt, fwdVec and worldUpVec.
     * The matrix represents the modelview matrix of a camera. It is the inverse
     * of lookAt except for the output of the fwdVec instead of centerPt.
     * The centerPt itself cannot be recovered from a modelview matrix.
     *
     * Note that unlike most other goog.vec functions where we inline
     * everything, this function does not inline various goog.vec
     * functions.  This makes the code more readable, but somewhat
     * less efficient.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {goog.vec.vec3f.Type} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.vec3f.Type} fwdVec The vector describing where
     *     the camera points to.
     * @param {goog.vec.vec3f.Type} worldUpVec The vector that
     *     identifies the up direction for the camera.
     * @return {boolean} True if the method succeeds, false otherwise.
     *     The method can only fail if the inverse of viewMatrix is not defined.
     */
    function toLookAt(mat: goog.vec.mat4f.Type, eyePt: goog.vec.vec3f.Type, fwdVec: goog.vec.vec3f.Type, worldUpVec: goog.vec.vec3f.Type): boolean;

    /**
     * Makes the given 4x4 matrix a rotation matrix given Euler angles using
     * the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians,
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function makeEulerZXZ(mat: goog.vec.mat4f.Type, theta1: number, theta2: number, theta3: number): goog.vec.mat4f.Type;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
     * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {goog.vec.vec3f.Type} euler The ZXZ Euler angles in
     *     radians as [theta1, theta2, theta3].
     * @param {boolean=} opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead
     *     of the default [0, pi].
     * @return {!goog.vec.vec4f.Type} return euler so that operations can be
     *     chained together.
     */
    function toEulerZXZ(mat: goog.vec.mat4f.Type, euler: goog.vec.vec3f.Type, opt_theta2IsNegative?: boolean): goog.vec.vec4f.Type;

    /**
     * Translates the given matrix by x,y,z.  Equvialent to:
     * goog.vec.mat4f.multMat(
     *     mat,
     *     goog.vec.mat4f.makeTranslate(goog.vec.mat4f.create(), x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function translate(mat: goog.vec.mat4f.Type, x: number, y: number, z: number): goog.vec.mat4f.Type;

    /**
     * Scales the given matrix by x,y,z.  Equivalent to:
     * goog.vec.mat4f.multMat(
     *     mat,
     *     goog.vec.mat4f.makeScale(goog.vec.mat4f.create(), x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} x The x scale factor.
     * @param {number} y The y scale factor.
     * @param {number} z The z scale factor.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function scale(mat: goog.vec.mat4f.Type, x: number, y: number, z: number): goog.vec.mat4f.Type;

    /**
     * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
     * goog.vec.mat4f.multMat(
     *     mat,
     *     goog.vec.mat4f.makeRotate(goog.vec.mat4f.create(), angle, x, y, z),
     *     mat);
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function rotate(mat: goog.vec.mat4f.Type, angle: number, x: number, y: number, z: number): goog.vec.mat4f.Type;

    /**
     * Rotate the given matrix by angle about the x axis.  Equivalent to:
     * goog.vec.mat4f.multMat(
     *     mat,
     *     goog.vec.mat4f.makeRotateX(goog.vec.mat4f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateX(mat: goog.vec.mat4f.Type, angle: number): goog.vec.mat4f.Type;

    /**
     * Rotate the given matrix by angle about the y axis.  Equivalent to:
     * goog.vec.mat4f.multMat(
     *     mat,
     *     goog.vec.mat4f.makeRotateY(goog.vec.mat4f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateY(mat: goog.vec.mat4f.Type, angle: number): goog.vec.mat4f.Type;

    /**
     * Rotate the given matrix by angle about the z axis.  Equivalent to:
     * goog.vec.mat4f.multMat(
     *     mat,
     *     goog.vec.mat4f.makeRotateZ(goog.vec.mat4f.create(), angle),
     *     mat);
     *
     * @param {goog.vec.mat4f.Type} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {!goog.vec.mat4f.Type} return mat so that operations can be
     *     chained.
     */
    function rotateZ(mat: goog.vec.mat4f.Type, angle: number): goog.vec.mat4f.Type;

    /**
     * Retrieves the translation component of the transformation matrix.
     *
     * @param {goog.vec.mat4f.Type} mat The transformation matrix.
     * @param {goog.vec.vec3f.Type} translation The vector for storing the
     *     result.
     * @return {!goog.vec.vec3f.Type} return translation so that operations can be
     *     chained.
     */
    function getTranslation(mat: goog.vec.mat4f.Type, translation: goog.vec.vec3f.Type): goog.vec.vec3f.Type;
}

declare module 'goog.vec.Mat4' {

    /** @typedef {goog.vec.Float32} */
    interface Float32 extends goog.vec.Float32 { }

    /** @typedef {goog.vec.Float64} */
    interface Float64 extends goog.vec.Float64 { }

    /** @typedef {goog.vec.Number} */
    interface Number extends goog.vec.Number { }

    /** @typedef {goog.vec.AnyType} */
    interface AnyType extends goog.vec.AnyType { }

    /** @typedef {Float32Array} */
    interface Type extends Float32Array { }

    /** @typedef {goog.vec.ArrayType} */
    interface Mat4Like extends goog.vec.ArrayType { }

    /**
     * Creates the array representation of a 4x4 matrix of Float32.
     * The use of the array directly instead of a class reduces overhead.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat4.Float32} The new matrix.
     */
    function createFloat32(): goog.vec.Mat4.Float32;

    /**
     * Creates the array representation of a 4x4 matrix of Float64.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat4.Float64} The new matrix.
     */
    function createFloat64(): goog.vec.Mat4.Float64;

    /**
     * Creates the array representation of a 4x4 matrix of Number.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat4.Number} The new matrix.
     */
    function createNumber(): goog.vec.Mat4.Number;

    /**
     * Creates the array representation of a 4x4 matrix of Float32.
     * The returned matrix is cleared to all zeros.
     *
     * @deprecated Use createFloat32.
     * @return {!goog.vec.Mat4.Type} The new matrix.
     */
    function create(): goog.vec.Mat4.Type;

    /**
     * Creates a 4x4 identity matrix of Float32.
     *
     * @return {!goog.vec.Mat4.Float32} The new 16 element array.
     */
    function createFloat32Identity(): goog.vec.Mat4.Float32;

    /**
     * Creates a 4x4 identity matrix of Float64.
     *
     * @return {!goog.vec.Mat4.Float64} The new 16 element array.
     */
    function createFloat64Identity(): goog.vec.Mat4.Float64;

    /**
     * Creates a 4x4 identity matrix of Number.
     * The returned matrix is cleared to all zeros.
     *
     * @return {!goog.vec.Mat4.Number} The new 16 element array.
     */
    function createNumberIdentity(): goog.vec.Mat4.Number;

    /**
     * Creates the array representation of a 4x4 matrix of Float32.
     * The returned matrix is cleared to all zeros.
     *
     * @deprecated Use createFloat32Identity.
     * @return {!goog.vec.Mat4.Type} The new 16 element array.
     */
    function createIdentity(): goog.vec.Mat4.Type;

    /**
     * Creates a 4x4 matrix of Float32 initialized from the given array.
     *
     * @param {goog.vec.Mat4.AnyType} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat4.Float32} The new, 16 element array.
     */
    function createFloat32FromArray(matrix: goog.vec.Mat4.AnyType): goog.vec.Mat4.Float32;

    /**
     * Creates a 4x4 matrix of Float32 initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {!goog.vec.Mat4.Float32} The new, 16 element array.
     */
    function createFloat32FromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Mat4.Float32;

    /**
     * Creates a clone of a 4x4 matrix of Float32.
     *
     * @param {goog.vec.Mat4.Float32} matrix The source 4x4 matrix.
     * @return {!goog.vec.Mat4.Float32} The new 4x4 element matrix.
     */
    var cloneFloat32: any /*missing*/;

    /**
     * Creates a 4x4 matrix of Float64 initialized from the given array.
     *
     * @param {goog.vec.Mat4.AnyType} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat4.Float64} The new, nine element array.
     */
    function createFloat64FromArray(matrix: goog.vec.Mat4.AnyType): goog.vec.Mat4.Float64;

    /**
     * Creates a 4x4 matrix of Float64 initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {!goog.vec.Mat4.Float64} The new, 16 element array.
     */
    function createFloat64FromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Mat4.Float64;

    /**
     * Creates a clone of a 4x4 matrix of Float64.
     *
     * @param {goog.vec.Mat4.Float64} matrix The source 4x4 matrix.
     * @return {!goog.vec.Mat4.Float64} The new 4x4 element matrix.
     */
    var cloneFloat64: any /*missing*/;

    /**
     * Creates a 4x4 matrix of Float32 initialized from the given array.
     *
     * @deprecated Use createFloat32FromArray.
     * @param {goog.vec.Mat4.Mat4Like} matrix The array containing the
     *     matrix values in column major order.
     * @return {!goog.vec.Mat4.Type} The new, nine element array.
     */
    function createFromArray(matrix: goog.vec.Mat4.Mat4Like): goog.vec.Mat4.Type;

    /**
     * Creates a 4x4 matrix of Float32 initialized from the given values.
     *
     * @deprecated Use createFloat32FromValues.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {!goog.vec.Mat4.Type} The new, 16 element array.
     */
    function createFromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Mat4.Type;

    /**
     * Creates a clone of a 4x4 matrix of Float32.
     *
     * @deprecated Use cloneFloat32.
     * @param {goog.vec.Mat4.Mat4Like} matrix The source 4x4 matrix.
     * @return {!goog.vec.Mat4.Type} The new 4x4 element matrix.
     */
    var clone: any /*missing*/;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix containing the
     *     value to retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.Mat4.AnyType, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to set the value on.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setElement(mat: goog.vec.Mat4.AnyType, row: number, column: number, value: number): goog.vec.Mat4.AnyType;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromValues(mat: goog.vec.Mat4.AnyType, v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Mat4.AnyType;

    /**
     * Sets the matrix from the array of values stored in column major order.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Mat4.AnyType} values The column major ordered
     *     array of values to store in the matrix.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromArray(mat: goog.vec.Mat4.AnyType, values: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Sets the matrix from the array of values stored in row major order.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Mat4.AnyType} values The row major ordered array of
     *     values to store in the matrix.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setFromRowMajorArray(mat: goog.vec.Mat4.AnyType, values: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @param {number} v33 The values for (3, 3).
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setDiagonalValues(mat: goog.vec.Mat4.AnyType, v00: number, v11: number, v22: number, v33: number): goog.vec.Mat4.AnyType;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec4.AnyType} vec The vector containing the values.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setDiagonal(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Gets the diagonal values of the matrix into the given vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix containing the values.
     * @param {goog.vec.Vec4.AnyType} vec The vector to receive the values.
     * @param {number=} opt_diagonal Which diagonal to get. A value of 0 selects the
     *     main diagonal, a positive number selects a super diagonal and a negative
     *     number selects a sub diagonal.
     * @return {goog.vec.Vec4.AnyType} return vec so that operations can be
     *     chained together.
     */
    function getDiagonal(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec4.AnyType, opt_diagonal?: number): goog.vec.Vec4.AnyType;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to recieve the values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @param {number} v3 The value for row 3.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumnValues(mat: goog.vec.Mat4.AnyType, column: number, v0: number, v1: number, v2: number, v3: number): goog.vec.Mat4.AnyType;

    /**
     * Sets the specified column with the value from the supplied vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.Vec4.AnyType} vec The vector of elements for the column.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumn(mat: goog.vec.Mat4.AnyType, column: number, vec: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the specified column from the matrix into the given vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.Vec4.AnyType} vec The vector of elements to
     *     receive the column.
     * @return {goog.vec.Vec4.AnyType} return vec so that operations can be
     *     chained together.
     */
    function getColumn(mat: goog.vec.Mat4.AnyType, column: number, vec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Sets the columns of the matrix from the given vectors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec4.AnyType} vec0 The values for column 0.
     * @param {goog.vec.Vec4.AnyType} vec1 The values for column 1.
     * @param {goog.vec.Vec4.AnyType} vec2 The values for column 2.
     * @param {goog.vec.Vec4.AnyType} vec3 The values for column 3.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setColumns(mat: goog.vec.Mat4.AnyType, vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, vec2: goog.vec.Vec4.AnyType, vec3: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the column values from the given matrix into the given vectors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the columns.
     * @param {goog.vec.Vec4.AnyType} vec0 The vector to receive column 0.
     * @param {goog.vec.Vec4.AnyType} vec1 The vector to receive column 1.
     * @param {goog.vec.Vec4.AnyType} vec2 The vector to receive column 2.
     * @param {goog.vec.Vec4.AnyType} vec3 The vector to receive column 3.
     */
    function getColumns(mat: goog.vec.Mat4.AnyType, vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, vec2: goog.vec.Vec4.AnyType, vec3: goog.vec.Vec4.AnyType): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @param {number} v3 The value for column 3.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRowValues(mat: goog.vec.Mat4.AnyType, row: number, v0: number, v1: number, v2: number, v3: number): goog.vec.Mat4.AnyType;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.Vec4.AnyType} vec The vector containing the values.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRow(mat: goog.vec.Mat4.AnyType, row: number, vec: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.Vec4.AnyType} vec The vector to receive the row.
     * @return {goog.vec.Vec4.AnyType} return vec so that operations can be
     *     chained together.
     */
    function getRow(mat: goog.vec.Mat4.AnyType, row: number, vec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to receive the values.
     * @param {goog.vec.Vec4.AnyType} vec0 The values for row 0.
     * @param {goog.vec.Vec4.AnyType} vec1 The values for row 1.
     * @param {goog.vec.Vec4.AnyType} vec2 The values for row 2.
     * @param {goog.vec.Vec4.AnyType} vec3 The values for row 3.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained together.
     */
    function setRows(mat: goog.vec.Mat4.AnyType, vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, vec2: goog.vec.Vec4.AnyType, vec3: goog.vec.Vec4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to supply the values.
     * @param {goog.vec.Vec4.AnyType} vec0 The vector to receive row 0.
     * @param {goog.vec.Vec4.AnyType} vec1 The vector to receive row 1.
     * @param {goog.vec.Vec4.AnyType} vec2 The vector to receive row 2.
     * @param {goog.vec.Vec4.AnyType} vec3 The vector to receive row 3.
     */
    function getRows(mat: goog.vec.Mat4.AnyType, vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, vec2: goog.vec.Vec4.AnyType, vec3: goog.vec.Vec4.AnyType): void;

    /**
     * Makes the given 4x4 matrix the zero matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @return {!goog.vec.Mat4.AnyType} return mat so operations can be chained.
     */
    function makeZero(mat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix the identity matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @return {goog.vec.Mat4.AnyType} return mat so operations can be chained.
     */
    function makeIdentity(mat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Performs a per-component addition of the matrix mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat0 The first addend.
     * @param {goog.vec.Mat4.AnyType} mat1 The second addend.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function addMat(mat0: goog.vec.Mat4.AnyType, mat1: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Performs a per-component subtraction of the matrix mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat0 The minuend.
     * @param {goog.vec.Mat4.AnyType} mat1 The subtrahend.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function subMat(mat0: goog.vec.Mat4.AnyType, mat1: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Multiplies matrix mat with the given scalar, storing the result
     * into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} scalar The scalar value to multiply to each element of mat.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function multScalar(mat: goog.vec.Mat4.AnyType, scalar: number, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat0 The first (left hand) matrix.
     * @param {goog.vec.Mat4.AnyType} mat1 The second (right hand) matrix.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.Mat4.AnyType, mat1: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to transpose.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.Mat4.AnyType} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Computes the determinant of the matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to compute the matrix for.
     * @return {number} The determinant of the matrix.
     */
    function determinant(mat: goog.vec.Mat4.AnyType): number;

    /**
     * Computes the inverse of mat storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix to invert.
     * @param {goog.vec.Mat4.AnyType} resultMat The matrix to receive
     *     the result (may be mat).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat: goog.vec.Mat4.AnyType, resultMat: goog.vec.Mat4.AnyType): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.Mat4.AnyType} mat0 The first matrix.
     * @param {goog.vec.Mat4.AnyType} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.Mat4.AnyType, mat1: goog.vec.Mat4.AnyType): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x4 matrix omitting the projective component.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec3.AnyType} vec The 3 element vector to transform.
     * @param {goog.vec.Vec3.AnyType} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {goog.vec.Vec3.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x3 matrix omitting the projective component and translation
     * components.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec3.AnyType} vec The 3 element vector to transform.
     * @param {goog.vec.Vec3.AnyType} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {goog.vec.Vec3.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3NoTranslate(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * full 4x4 matrix with the homogeneous divide applied to reduce the 4 element
     * vector to a 3 element vector.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec3.AnyType} vec The 3 element vector to transform.
     * @param {goog.vec.Vec3.AnyType} resultVec The 3 element vector
     *     to receive the results (may be vec).
     * @return {goog.vec.Vec3.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3Projective(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix supplying the transformation.
     * @param {goog.vec.Vec4.AnyType} vec The vector to transform.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the results (may be vec).
     * @return {goog.vec.Vec4.AnyType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec4(mat: goog.vec.Mat4.AnyType, vec: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Makes the given 4x4 matrix a translation matrix with x, y and z
     * translation factors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeTranslate(mat: goog.vec.Mat4.AnyType, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix as a scale matrix with x, y and z scale factors.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeScale(mat: goog.vec.Mat4.AnyType, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotate(mat: goog.vec.Mat4.AnyType, angle: number, ax: number, ay: number, az: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the X axis.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateX(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the Y axis.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateY(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a rotation matrix with the given rotation
     * angle about the Z axis.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The rotation angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeRotateZ(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a perspective projection matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeFrustum(mat: goog.vec.Mat4.AnyType, left: number, right: number, bottom: number, top: number, near: number, far: number): goog.vec.Mat4.AnyType;

    /**
     * Makse the given 4x4 matrix  perspective projection matrix given a
     * field of view and aspect ratio.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} fovy The field of view along the y (vertical) axis in
     *     radians.
     * @param {number} aspect The x (width) to y (height) aspect ratio.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makePerspective(mat: goog.vec.Mat4.AnyType, fovy: number, aspect: number, near: number, far: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix an orthographic projection matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeOrtho(mat: goog.vec.Mat4.AnyType, left: number, right: number, bottom: number, top: number, near: number, far: number): goog.vec.Mat4.AnyType;

    /**
     * Makes the given 4x4 matrix a modelview matrix of a camera so that
     * the camera is 'looking at' the given center point.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {goog.vec.Vec3.AnyType} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.Vec3.AnyType} centerPt The point to aim the camera at.
     * @param {goog.vec.Vec3.AnyType} worldUpVec The vector that identifies
     *     the up direction for the camera.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeLookAt(mat: goog.vec.Mat4.AnyType, eyePt: goog.vec.Vec3.AnyType, centerPt: goog.vec.Vec3.AnyType, worldUpVec: goog.vec.Vec3.AnyType): goog.vec.Mat4.AnyType;

    /**
     * Decomposes a matrix into the lookAt vectors eyePt, fwdVec and worldUpVec.
     * The matrix represents the modelview matrix of a camera. It is the inverse
     * of lookAt except for the output of the fwdVec instead of centerPt.
     * The centerPt itself cannot be recovered from a modelview matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {goog.vec.Vec3.AnyType} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.Vec3.AnyType} fwdVec The vector describing where
     *     the camera points to.
     * @param {goog.vec.Vec3.AnyType} worldUpVec The vector that
     *     identifies the up direction for the camera.
     * @return {boolean} True if the method succeeds, false otherwise.
     *     The method can only fail if the inverse of viewMatrix is not defined.
     */
    function toLookAt(mat: goog.vec.Mat4.AnyType, eyePt: goog.vec.Vec3.AnyType, fwdVec: goog.vec.Vec3.AnyType, worldUpVec: goog.vec.Vec3.AnyType): boolean;

    /**
     * Makes the given 4x4 matrix a rotation matrix given Euler angles using
     * the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians,
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function makeEulerZXZ(mat: goog.vec.Mat4.AnyType, theta1: number, theta2: number, theta3: number): goog.vec.Mat4.AnyType;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention so
     * that rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * with theta1 in [0, 2 * pi], theta2 in [0, pi] and theta3 in [0, 2 * pi].
     * rotation_x(theta) means rotation around the X axis of theta radians.
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {goog.vec.Vec3.AnyType} euler The ZXZ Euler angles in
     *     radians as [theta1, theta2, theta3].
     * @param {boolean=} opt_theta2IsNegative Whether theta2 is in [-pi, 0] instead
     *     of the default [0, pi].
     * @return {goog.vec.Vec4.AnyType} return euler so that operations can be
     *     chained together.
     */
    function toEulerZXZ(mat: goog.vec.Mat4.AnyType, euler: goog.vec.Vec3.AnyType, opt_theta2IsNegative?: boolean): goog.vec.Vec4.AnyType;

    /**
     * Translates the given matrix by x,y,z.  Equvialent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeTranslate(goog.vec.Mat4.create(), x, y, z),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function translate(mat: goog.vec.Mat4.AnyType, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Scales the given matrix by x,y,z.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeScale(goog.vec.Mat4.create(), x, y, z),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} x The x scale factor.
     * @param {number} y The y scale factor.
     * @param {number} z The z scale factor.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function scale(mat: goog.vec.Mat4.AnyType, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Rotate the given matrix by angle about the x,y,z axis.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeRotate(goog.vec.Mat4.create(), angle, x, y, z),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotate(mat: goog.vec.Mat4.AnyType, angle: number, x: number, y: number, z: number): goog.vec.Mat4.AnyType;

    /**
     * Rotate the given matrix by angle about the x axis.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeRotateX(goog.vec.Mat4.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateX(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Rotate the given matrix by angle about the y axis.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeRotateY(goog.vec.Mat4.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateY(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Rotate the given matrix by angle about the z axis.  Equivalent to:
     * goog.vec.Mat4.multMat(
     *     mat,
     *     goog.vec.Mat4.makeRotateZ(goog.vec.Mat4.create(), angle),
     *     mat);
     *
     * @param {goog.vec.Mat4.AnyType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function rotateZ(mat: goog.vec.Mat4.AnyType, angle: number): goog.vec.Mat4.AnyType;

    /**
     * Retrieves the translation component of the transformation matrix.
     *
     * @param {goog.vec.Mat4.AnyType} mat The transformation matrix.
     * @param {goog.vec.Vec3.AnyType} translation The vector for storing the
     *     result.
     * @return {goog.vec.Mat4.AnyType} return mat so that operations can be
     *     chained.
     */
    function getTranslation(mat: goog.vec.Mat4.AnyType, translation: goog.vec.Vec3.AnyType): goog.vec.Mat4.AnyType;
}

declare module 'goog.vec.Matrix3' {

    /**
     * @typedef {goog.vec.ArrayType}
     */
    interface Type extends goog.vec.ArrayType { }

    /**
     * Creates the array representation of a 3x3 matrix. The use of the array
     * directly eliminates any overhead associated with the class representation
     * defined above. The returned matrix is cleared to all zeros.
     *
     * @return {goog.vec.Matrix3.Type} The new, nine element array.
     */
    function create(): goog.vec.Matrix3.Type;

    /**
     * Creates the array representation of a 3x3 matrix. The use of the array
     * directly eliminates any overhead associated with the class representation
     * defined above. The returned matrix is initialized with the identity.
     *
     * @return {goog.vec.Matrix3.Type} The new, nine element array.
     */
    function createIdentity(): goog.vec.Matrix3.Type;

    /**
     * Creates a 3x3 matrix initialized from the given array.
     *
     * @param {goog.vec.ArrayType} matrix The array containing the
     *     matrix values in column major order.
     * @return {goog.vec.Matrix3.Type} The new, nine element array.
     */
    function createFromArray(matrix: goog.vec.ArrayType): goog.vec.Matrix3.Type;

    /**
     * Creates a 3x3 matrix initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @return {goog.vec.Matrix3.Type} The new, nine element array.
     */
    function createFromValues(v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): goog.vec.Matrix3.Type;

    /**
     * Creates a clone of a 3x3 matrix.
     *
     * @param {goog.vec.Matrix3.Type} matrix The source 3x3 matrix.
     * @return {goog.vec.Matrix3.Type} The new 3x3 element matrix.
     */
    var clone: any /*missing*/;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     value to retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.ArrayType, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     value to retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     */
    function setElement(mat: goog.vec.ArrayType, row: number, column: number, value: number): void;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     */
    function setFromValues(mat: goog.vec.ArrayType, v00: number, v10: number, v20: number, v01: number, v11: number, v21: number, v02: number, v12: number, v22: number): void;

    /**
     * Sets the matrix from the array of values stored in column major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} values The column major ordered
     *     array of values to store in the matrix.
     */
    function setFromArray(mat: goog.vec.ArrayType, values: goog.vec.ArrayType): void;

    /**
     * Sets the matrix from the array of values stored in row major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} values The row major ordered array
     *     of values to store in the matrix.
     */
    function setFromRowMajorArray(mat: goog.vec.ArrayType, values: goog.vec.ArrayType): void;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     */
    function setDiagonalValues(mat: goog.vec.ArrayType, v00: number, v11: number, v22: number): void;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec The vector containing the
     *     values.
     */
    function setDiagonal(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType): void;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to recieve the
     *     values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     */
    function setColumnValues(mat: goog.vec.ArrayType, column: number, v0: number, v1: number, v2: number): void;

    /**
     * Sets the specified column with the value from the supplied array.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.ArrayType} vec The vector elements for the
     *     column.
     */
    function setColumn(mat: goog.vec.ArrayType, column: number, vec: goog.vec.ArrayType): void;

    /**
     * Retrieves the specified column from the matrix into the given vector
     * array.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.ArrayType} vec The vector elements to receive
     *     the column.
     */
    function getColumn(mat: goog.vec.ArrayType, column: number, vec: goog.vec.ArrayType): void;

    /**
     * Sets the columns of the matrix from the set of vector elements.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec0 The values for column 0.
     * @param {goog.vec.ArrayType} vec1 The values for column 1.
     * @param {goog.vec.ArrayType} vec2 The values for column 2.
     */
    function setColumns(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType): void;

    /**
     * Retrieves the column values from the given matrix into the given vector
     * elements.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     columns to retrieve.
     * @param {goog.vec.ArrayType} vec0 The vector elements to receive
     *     column 0.
     * @param {goog.vec.ArrayType} vec1 The vector elements to receive
     *     column 1.
     * @param {goog.vec.ArrayType} vec2 The vector elements to receive
     *     column 2.
     */
    function getColumns(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     */
    function setRowValues(mat: goog.vec.ArrayType, row: number, v0: number, v1: number, v2: number): void;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.ArrayType} vec The vector containing the values.
     */
    function setRow(mat: goog.vec.ArrayType, row: number, vec: goog.vec.ArrayType): void;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.ArrayType} vec The vector to receive the row.
     */
    function getRow(mat: goog.vec.ArrayType, row: number, vec: goog.vec.ArrayType): void;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec0 The values for row 0.
     * @param {goog.vec.ArrayType} vec1 The values for row 1.
     * @param {goog.vec.ArrayType} vec2 The values for row 2.
     */
    function setRows(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType): void;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.ArrayType} mat The matrix to supplying
     *     the values.
     * @param {goog.vec.ArrayType} vec0 The vector to receive row 0.
     * @param {goog.vec.ArrayType} vec1 The vector to receive row 1.
     * @param {goog.vec.ArrayType} vec2 The vector to receive row 2.
     */
    function getRows(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType): void;

    /**
     * Clears the given matrix to zero.
     *
     * @param {goog.vec.ArrayType} mat The matrix to clear.
     */
    function setZero(mat: goog.vec.ArrayType): void;

    /**
     * Sets the given matrix to the identity matrix.
     *
     * @param {goog.vec.ArrayType} mat The matrix to set.
     */
    function setIdentity(mat: goog.vec.ArrayType): void;

    /**
     * Performs a per-component addition of the matrices mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The first addend.
     * @param {goog.vec.ArrayType} mat1 The second addend.
     * @param {goog.vec.ArrayType} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function add(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Performs a per-component subtraction of the matrices mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The minuend.
     * @param {goog.vec.ArrayType} mat1 The subtrahend.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function subtract(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Performs a component-wise multiplication of mat0 with the given scalar
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The matrix to scale.
     * @param {number} scalar The scalar value to multiple to each element of mat0.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be mat0).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function scale(mat0: goog.vec.ArrayType, scalar: number, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The first (left hand) matrix.
     * @param {goog.vec.ArrayType} mat1 The second (right hand)
     *     matrix.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     * @param {goog.vec.ArrayType} mat The matrix to transpose.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Computes the inverse of mat0 storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     * @param {goog.vec.ArrayType} mat0 The matrix to invert.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the result (may be mat0).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat0: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.ArrayType} mat0 The first matrix.
     * @param {goog.vec.ArrayType} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed matrix into resultVec.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     transformation.
     * @param {goog.vec.ArrayType} vec The vector to transform.
     * @param {goog.vec.ArrayType} resultVec The vector to
     *     receive the results (may be vec).
     * @return {goog.vec.ArrayType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType, resultVec: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Initializes the given 3x3 matrix as a translation matrix with x and y
     * translation values.
     *
     * @param {goog.vec.ArrayType} mat The 3x3 (9-element) matrix
     *     array to receive the new translation matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     */
    function makeTranslate(mat: goog.vec.ArrayType, x: number, y: number): void;

    /**
     * Initializes the given 3x3 matrix as a scale matrix with x, y and z scale
     * factors.
     * @param {goog.vec.ArrayType} mat The 3x3 (9-element) matrix
     *     array to receive the new scale matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     */
    function makeScale(mat: goog.vec.ArrayType, x: number, y: number, z: number): void;

    /**
     * Initializes the given 3x3 matrix as a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     * @param {goog.vec.ArrayType} mat The 3x3 (9-element) matrix
     *     array to receive the new scale matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     */
    function makeAxisAngleRotate(mat: goog.vec.ArrayType, angle: number, ax: number, ay: number, az: number): void;
}

declare module 'goog.vec.Matrix4' {

    /**
     * @typedef {goog.vec.ArrayType}
     */
    interface Type extends goog.vec.ArrayType { }

    /**
     * Creates the array representation of a 4x4 matrix. The use of the array
     * directly eliminates any overhead associated with the class representation
     * defined above. The returned matrix is cleared to all zeros.
     *
     * @return {goog.vec.Matrix4.Type} The new, sixteen element array.
     */
    function create(): goog.vec.Matrix4.Type;

    /**
     * Creates the array representation of a 4x4 matrix. The use of the array
     * directly eliminates any overhead associated with the class representation
     * defined above. The returned matrix is initialized with the identity
     *
     * @return {goog.vec.Matrix4.Type} The new, sixteen element array.
     */
    function createIdentity(): goog.vec.Matrix4.Type;

    /**
     * Creates a 4x4 matrix initialized from the given array.
     *
     * @param {goog.vec.ArrayType} matrix The array containing the
     *     matrix values in column major order.
     * @return {goog.vec.Matrix4.Type} The new, 16 element array.
     */
    function createFromArray(matrix: goog.vec.ArrayType): goog.vec.Matrix4.Type;

    /**
     * Creates a 4x4 matrix initialized from the given values.
     *
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     * @return {goog.vec.Matrix4.Type} The new, 16 element array.
     */
    function createFromValues(v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): goog.vec.Matrix4.Type;

    /**
     * Creates a clone of a 4x4 matrix.
     *
     * @param {goog.vec.Matrix4.Type} matrix The source 4x4 matrix.
     * @return {goog.vec.Matrix4.Type} The new, 16 element matrix.
     */
    var clone: any /*missing*/;

    /**
     * Retrieves the element at the requested row and column.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     value to retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @return {number} The element value at the requested row, column indices.
     */
    function getElement(mat: goog.vec.ArrayType, row: number, column: number): number;

    /**
     * Sets the element at the requested row and column.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     value to retrieve.
     * @param {number} row The row index.
     * @param {number} column The column index.
     * @param {number} value The value to set at the requested row, column.
     */
    function setElement(mat: goog.vec.ArrayType, row: number, column: number, value: number): void;

    /**
     * Initializes the matrix from the set of values. Note the values supplied are
     * in column major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values at (0, 0).
     * @param {number} v10 The values at (1, 0).
     * @param {number} v20 The values at (2, 0).
     * @param {number} v30 The values at (3, 0).
     * @param {number} v01 The values at (0, 1).
     * @param {number} v11 The values at (1, 1).
     * @param {number} v21 The values at (2, 1).
     * @param {number} v31 The values at (3, 1).
     * @param {number} v02 The values at (0, 2).
     * @param {number} v12 The values at (1, 2).
     * @param {number} v22 The values at (2, 2).
     * @param {number} v32 The values at (3, 2).
     * @param {number} v03 The values at (0, 3).
     * @param {number} v13 The values at (1, 3).
     * @param {number} v23 The values at (2, 3).
     * @param {number} v33 The values at (3, 3).
     */
    function setFromValues(mat: goog.vec.ArrayType, v00: number, v10: number, v20: number, v30: number, v01: number, v11: number, v21: number, v31: number, v02: number, v12: number, v22: number, v32: number, v03: number, v13: number, v23: number, v33: number): void;

    /**
     * Sets the matrix from the array of values stored in column major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} values The column major ordered
     *     array of values to store in the matrix.
     */
    function setFromArray(mat: goog.vec.ArrayType, values: goog.vec.ArrayType): void;

    /**
     * Sets the matrix from the array of values stored in row major order.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} values The row major ordered array of
     *     values to store in the matrix.
     */
    function setFromRowMajorArray(mat: goog.vec.ArrayType, values: goog.vec.ArrayType): void;

    /**
     * Sets the diagonal values of the matrix from the given values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} v00 The values for (0, 0).
     * @param {number} v11 The values for (1, 1).
     * @param {number} v22 The values for (2, 2).
     * @param {number} v33 The values for (3, 3).
     */
    function setDiagonalValues(mat: goog.vec.ArrayType, v00: number, v11: number, v22: number, v33: number): void;

    /**
     * Sets the diagonal values of the matrix from the given vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec The vector containing the
     *     values.
     */
    function setDiagonal(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType): void;

    /**
     * Sets the specified column with the supplied values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to recieve the
     *     values.
     * @param {number} column The column index to set the values on.
     * @param {number} v0 The value for row 0.
     * @param {number} v1 The value for row 1.
     * @param {number} v2 The value for row 2.
     * @param {number} v3 The value for row 3.
     */
    function setColumnValues(mat: goog.vec.ArrayType, column: number, v0: number, v1: number, v2: number, v3: number): void;

    /**
     * Sets the specified column with the value from the supplied array.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} column The column index to set the values on.
     * @param {goog.vec.ArrayType} vec The vector of elements for the
     *     column.
     */
    function setColumn(mat: goog.vec.ArrayType, column: number, vec: goog.vec.ArrayType): void;

    /**
     * Retrieves the specified column from the matrix into the given vector
     * array.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     values.
     * @param {number} column The column to get the values from.
     * @param {goog.vec.ArrayType} vec The vector of elements to
     *     receive the column.
     */
    function getColumn(mat: goog.vec.ArrayType, column: number, vec: goog.vec.ArrayType): void;

    /**
     * Sets the columns of the matrix from the set of vector elements.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec0 The values for column 0.
     * @param {goog.vec.ArrayType} vec1 The values for column 1.
     * @param {goog.vec.ArrayType} vec2 The values for column 2.
     * @param {goog.vec.ArrayType} vec3 The values for column 3.
     */
    function setColumns(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType, vec3: goog.vec.ArrayType): void;

    /**
     * Retrieves the column values from the given matrix into the given vector
     * elements.
     *
     * @param {goog.vec.ArrayType} mat The matrix containing the
     *     columns to retrieve.
     * @param {goog.vec.ArrayType} vec0 The vector elements to receive
     *     column 0.
     * @param {goog.vec.ArrayType} vec1 The vector elements to receive
     *     column 1.
     * @param {goog.vec.ArrayType} vec2 The vector elements to receive
     *     column 2.
     * @param {goog.vec.ArrayType} vec3 The vector elements to receive
     *     column 3.
     */
    function getColumns(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType, vec3: goog.vec.ArrayType): void;

    /**
     * Sets the row values from the supplied values.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {number} row The index of the row to receive the values.
     * @param {number} v0 The value for column 0.
     * @param {number} v1 The value for column 1.
     * @param {number} v2 The value for column 2.
     * @param {number} v3 The value for column 3.
     */
    function setRowValues(mat: goog.vec.ArrayType, row: number, v0: number, v1: number, v2: number, v3: number): void;

    /**
     * Sets the row values from the supplied vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     row values.
     * @param {number} row The index of the row.
     * @param {goog.vec.ArrayType} vec The vector containing the
     *     values.
     */
    function setRow(mat: goog.vec.ArrayType, row: number, vec: goog.vec.ArrayType): void;

    /**
     * Retrieves the row values into the given vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     values.
     * @param {number} row The index of the row supplying the values.
     * @param {goog.vec.ArrayType} vec The vector to receive the
     *     row.
     */
    function getRow(mat: goog.vec.ArrayType, row: number, vec: goog.vec.ArrayType): void;

    /**
     * Sets the rows of the matrix from the supplied vectors.
     *
     * @param {goog.vec.ArrayType} mat The matrix to receive the
     *     values.
     * @param {goog.vec.ArrayType} vec0 The values for row 0.
     * @param {goog.vec.ArrayType} vec1 The values for row 1.
     * @param {goog.vec.ArrayType} vec2 The values for row 2.
     * @param {goog.vec.ArrayType} vec3 The values for row 3.
     */
    function setRows(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType, vec3: goog.vec.ArrayType): void;

    /**
     * Retrieves the rows of the matrix into the supplied vectors.
     *
     * @param {goog.vec.ArrayType} mat The matrix to supply the
     *     values.
     * @param {goog.vec.ArrayType} vec0 The vector to receive row 0.
     * @param {goog.vec.ArrayType} vec1 The vector to receive row 1.
     * @param {goog.vec.ArrayType} vec2 The vector to receive row 2.
     * @param {goog.vec.ArrayType} vec3 The vector to receive row 3.
     */
    function getRows(mat: goog.vec.ArrayType, vec0: goog.vec.ArrayType, vec1: goog.vec.ArrayType, vec2: goog.vec.ArrayType, vec3: goog.vec.ArrayType): void;

    /**
     * Clears the given matrix to zero.
     *
     * @param {goog.vec.ArrayType} mat The matrix to clear.
     */
    function setZero(mat: goog.vec.ArrayType): void;

    /**
     * Sets the given matrix to the identity matrix.
     *
     * @param {goog.vec.ArrayType} mat The matrix to set.
     */
    function setIdentity(mat: goog.vec.ArrayType): void;

    /**
     * Performs a per-component addition of the matrix mat0 and mat1, storing
     * the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The first addend.
     * @param {goog.vec.ArrayType} mat1 The second addend.
     * @param {goog.vec.ArrayType} resultMat The matrix to
     *     receive the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function add(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Performs a per-component subtraction of the matrix mat0 and mat1,
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The minuend.
     * @param {goog.vec.ArrayType} mat1 The subtrahend.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function subtract(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Performs a component-wise multiplication of mat0 with the given scalar
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The matrix to scale.
     * @param {number} scalar The scalar value to multiple to each element of mat0.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be mat0).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function scale(mat0: goog.vec.ArrayType, scalar: number, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Multiplies the two matrices mat0 and mat1 using matrix multiplication,
     * storing the result into resultMat.
     *
     * @param {goog.vec.ArrayType} mat0 The first (left hand) matrix.
     * @param {goog.vec.ArrayType} mat1 The second (right hand)
     *     matrix.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be either mat0 or mat1).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function multMat(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Transposes the given matrix mat storing the result into resultMat.
     * @param {goog.vec.ArrayType} mat The matrix to transpose.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the results (may be mat).
     * @return {goog.vec.ArrayType} return resultMat so that operations can be
     *     chained together.
     */
    function transpose(mat: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Computes the determinant of the matrix.
     *
     * @param {goog.vec.ArrayType} mat The matrix to compute the
     *     matrix for.
     * @return {number} The determinant of the matrix.
     */
    function determinant(mat: goog.vec.ArrayType): number;

    /**
     * Computes the inverse of mat storing the result into resultMat. If the
     * inverse is defined, this function returns true, false otherwise.
     *
     * @param {goog.vec.ArrayType} mat The matrix to invert.
     * @param {goog.vec.ArrayType} resultMat The matrix to receive
     *     the result (may be mat).
     * @return {boolean} True if the inverse is defined. If false is returned,
     *     resultMat is not modified.
     */
    function invert(mat: goog.vec.ArrayType, resultMat: goog.vec.ArrayType): boolean;

    /**
     * Returns true if the components of mat0 are equal to the components of mat1.
     *
     * @param {goog.vec.ArrayType} mat0 The first matrix.
     * @param {goog.vec.ArrayType} mat1 The second matrix.
     * @return {boolean} True if the the two matrices are equivalent.
     */
    function equals(mat0: goog.vec.ArrayType, mat1: goog.vec.ArrayType): boolean;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x4 matrix omitting the projective component.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     transformation.
     * @param {goog.vec.ArrayType} vec The 3 element vector to
     *     transform.
     * @param {goog.vec.ArrayType} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {goog.vec.ArrayType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType, resultVec: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * upper 3x3 matrix omitting the projective component and translation
     * components.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     transformation.
     * @param {goog.vec.ArrayType} vec The 3 element vector to
     *     transform.
     * @param {goog.vec.ArrayType} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {goog.vec.ArrayType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3NoTranslate(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType, resultVec: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input vector is multiplied against the
     * full 4x4 matrix with the homogeneous divide applied to reduce the 4 element
     * vector to a 3 element vector.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     transformation.
     * @param {goog.vec.ArrayType} vec The 3 element vector to
     *     transform.
     * @param {goog.vec.ArrayType} resultVec The 3 element vector
     *     to receive the results (may be vec).
     * @return {goog.vec.ArrayType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3Projective(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType, resultVec: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     transformation.
     * @param {goog.vec.ArrayType} vec The vector to transform.
     * @param {goog.vec.ArrayType} resultVec The vector to
     *     receive the results (may be vec).
     * @return {goog.vec.ArrayType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec4(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType, resultVec: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec. The input matrix is multiplied against the
     * upper 3x4 matrix omitting the projective component.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     transformation.
     * @param {goog.vec.ArrayType} vec The 3 element vector to
     *     transform.
     * @param {goog.vec.ArrayType} resultVec The 3 element vector to
     *     receive the results (may be vec).
     * @return {goog.vec.ArrayType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec3ToArray(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType, resultVec: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Transforms the given vector with the given matrix storing the resulting,
     * transformed vector into resultVec.
     *
     * @param {goog.vec.ArrayType} mat The matrix supplying the
     *     transformation.
     * @param {goog.vec.ArrayType} vec The vector to transform.
     * @param {goog.vec.ArrayType} resultVec The vector to
     *     receive the results (may be vec).
     * @return {goog.vec.ArrayType} return resultVec so that operations can be
     *     chained together.
     */
    function multVec4ToArray(mat: goog.vec.ArrayType, vec: goog.vec.ArrayType, resultVec: goog.vec.ArrayType): goog.vec.ArrayType;

    /**
     * Initializes the given 4x4 matrix as a translation matrix with x, y and z
     * translation factors.
     * @param {goog.vec.ArrayType} mat The 4x4 (16-element) matrix
     *     array to receive the new translation matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     */
    function makeTranslate(mat: goog.vec.ArrayType, x: number, y: number, z: number): void;

    /**
     * Initializes the given 4x4 matrix as a scale matrix with x, y and z scale
     * factors.
     * @param {goog.vec.ArrayType} mat The 4x4 (16-element) matrix
     *     array to receive the new translation matrix.
     * @param {number} x The scale along the x axis.
     * @param {number} y The scale along the y axis.
     * @param {number} z The scale along the z axis.
     */
    function makeScale(mat: goog.vec.ArrayType, x: number, y: number, z: number): void;

    /**
     * Initializes the given 4x4 matrix as a rotation matrix with the given rotation
     * angle about the axis defined by the vector (ax, ay, az).
     * @param {goog.vec.ArrayType} mat The 4x4 (16-element) matrix
     *     array to receive the new translation matrix.
     * @param {number} angle The rotation angle in radians.
     * @param {number} ax The x component of the rotation axis.
     * @param {number} ay The y component of the rotation axis.
     * @param {number} az The z component of the rotation axis.
     */
    function makeAxisAngleRotate(mat: goog.vec.ArrayType, angle: number, ax: number, ay: number, az: number): void;

    /**
     * Initializes the given 4x4 matrix as a perspective projection matrix.
     * @param {goog.vec.ArrayType} mat The 4x4 (16-element) matrix
     *     array to receive the new translation matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     */
    function makeFrustum(mat: goog.vec.ArrayType, left: number, right: number, bottom: number, top: number, near: number, far: number): void;

    /**
     * Initializes the given 4x4 matrix as a perspective projection matrix given a
     * field of view and aspect ratio.
     * @param {goog.vec.ArrayType} mat The 4x4 (16-element) matrix
     *     array to receive the new translation matrix.
     * @param {number} fovy The field of view along the y (vertical) axis in
     *     radians.
     * @param {number} aspect The x (width) to y (height) aspect ratio.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     */
    function makePerspective(mat: goog.vec.ArrayType, fovy: number, aspect: number, near: number, far: number): void;

    /**
     * Initializes the given 4x4 matrix as an orthographic projection matrix.
     * @param {goog.vec.ArrayType} mat The 4x4 (16-element) matrix
     *     array to receive the new translation matrix.
     * @param {number} left The coordinate of the left clipping plane.
     * @param {number} right The coordinate of the right clipping plane.
     * @param {number} bottom The coordinate of the bottom clipping plane.
     * @param {number} top The coordinate of the top clipping plane.
     * @param {number} near The distance to the near clipping plane.
     * @param {number} far The distance to the far clipping plane.
     */
    function makeOrtho(mat: goog.vec.ArrayType, left: number, right: number, bottom: number, top: number, near: number, far: number): void;

    /**
     * Updates a matrix representing the modelview matrix of a camera so that
     * the camera is 'looking at' the given center point.
     * @param {goog.vec.ArrayType} viewMatrix The matrix.
     * @param {goog.vec.ArrayType} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.ArrayType} centerPt The point to aim the camera
     *     at.
     * @param {goog.vec.ArrayType} worldUpVec The vector that
     *     identifies the up direction for the camera.
     */
    function lookAt(viewMatrix: goog.vec.ArrayType, eyePt: goog.vec.ArrayType, centerPt: goog.vec.ArrayType, worldUpVec: goog.vec.ArrayType): void;

    /**
     * Decomposes a matrix into the lookAt vectors eyePt, fwdVec and worldUpVec.
     * The matrix represents the modelview matrix of a camera. It is the inverse
     * of lookAt except for the output of the fwdVec instead of centerPt.
     * The centerPt itself cannot be recovered from a modelview matrix.
     * @param {goog.vec.ArrayType} viewMatrix The matrix.
     * @param {goog.vec.ArrayType} eyePt The position of the eye point
     *     (camera origin).
     * @param {goog.vec.ArrayType} fwdVec The vector describing where
     *     the camera points to.
     * @param {goog.vec.ArrayType} worldUpVec The vector that
     *     identifies the up direction for the camera.
     * @return {boolean} True if the method succeeds, false otherwise.
     *     The method can only fail if the inverse of viewMatrix is not defined.
     */
    function toLookAt(viewMatrix: goog.vec.ArrayType, eyePt: goog.vec.ArrayType, fwdVec: goog.vec.ArrayType, worldUpVec: goog.vec.ArrayType): boolean;

    /**
     * Constructs a rotation matrix from its Euler angles using the ZXZ convention.
     * Given the euler angles [theta1, theta2, theta3], the rotation is defined as
     * rotation = rotation_z(theta1) * rotation_x(theta2) * rotation_z(theta3),
     * where rotation_x(theta) means rotation around the X axis of theta radians.
     * @param {goog.vec.ArrayType} matrix The rotation matrix.
     * @param {number} theta1 The angle of rotation around the Z axis in radians.
     * @param {number} theta2 The angle of rotation around the X axis in radians.
     * @param {number} theta3 The angle of rotation around the Z axis in radians.
     */
    function fromEulerZXZ(matrix: goog.vec.ArrayType, theta1: number, theta2: number, theta3: number): void;

    /**
     * Decomposes a rotation matrix into Euler angles using the ZXZ convention.
     * @param {goog.vec.ArrayType} matrix The rotation matrix.
     * @param {goog.vec.ArrayType} euler The ZXZ Euler angles in
     *     radians. euler = [roll, tilt, pan].
     */
    function toEulerZXZ(matrix: goog.vec.ArrayType, euler: goog.vec.ArrayType): void;

    /**
     * Applies a translation by x,y,z to the given matrix.
     *
     * @param {goog.vec.ArrayType} mat The matrix.
     * @param {number} x The translation along the x axis.
     * @param {number} y The translation along the y axis.
     * @param {number} z The translation along the z axis.
     */
    function applyTranslate(mat: goog.vec.ArrayType, x: number, y: number, z: number): void;

    /**
     * Applies an x,y,z scale to the given matrix.
     *
     * @param {goog.vec.ArrayType} mat The matrix.
     * @param {number} x The x scale factor.
     * @param {number} y The y scale factor.
     * @param {number} z The z scale factor.
     */
    function applyScale(mat: goog.vec.ArrayType, x: number, y: number, z: number): void;

    /**
     * Applies a rotation by angle about the x,y,z axis to the given matrix.
     *
     * @param {goog.vec.ArrayType} mat The matrix.
     * @param {number} angle The angle in radians.
     * @param {number} x The x component of the rotation axis.
     * @param {number} y The y component of the rotation axis.
     * @param {number} z The z component of the rotation axis.
     */
    function applyRotate(mat: goog.vec.ArrayType, angle: number, x: number, y: number, z: number): void;
}

declare module 'goog.vec.Quaternion' {

    /** @typedef {goog.vec.Float32} */
    interface Float32 extends goog.vec.Float32 { }

    /** @typedef {goog.vec.Float64} */
    interface Float64 extends goog.vec.Float64 { }

    /** @typedef {goog.vec.Number} */
    interface Number extends goog.vec.Number { }

    /** @typedef {goog.vec.AnyType} */
    interface AnyType extends goog.vec.AnyType { }

    /**
     * Creates a Float32 quaternion, initialized to zero.
     *
     * @return {!goog.vec.Quaternion.Float32} The new quaternion.
     */
    var createFloat32: any /*missing*/;

    /**
     * Creates a Float64 quaternion, initialized to zero.
     *
     * @return {goog.vec.Quaternion.Float64} The new quaternion.
     */
    var createFloat64: any /*missing*/;

    /**
     * Creates a Number quaternion, initialized to zero.
     *
     * @return {goog.vec.Quaternion.Number} The new quaternion.
     */
    var createNumber: any /*missing*/;

    /**
     * Creates a new Float32 quaternion initialized with the values from the
     * supplied array.
     *
     * @param {goog.vec.AnyType} vec The source 4 element array.
     * @return {!goog.vec.Quaternion.Float32} The new quaternion.
     */
    var createFloat32FromArray: any /*missing*/;

    /**
     * Creates a new Float64 quaternion initialized with the values from the
     * supplied array.
     *
     * @param {goog.vec.AnyType} vec The source 4 element array.
     * @return {!goog.vec.Quaternion.Float64} The new quaternion.
     */
    var createFloat64FromArray: any /*missing*/;

    /**
     * Creates a new Float32 quaternion initialized with the supplied values.
     *
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Quaternion.Float32} The new quaternion.
     */
    var createFloat32FromValues: any /*missing*/;

    /**
     * Creates a new Float64 quaternion initialized with the supplied values.
     *
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Quaternion.Float64} The new quaternion.
     */
    var createFloat64FromValues: any /*missing*/;

    /**
     * Creates a clone of the given Float32 quaternion.
     *
     * @param {goog.vec.Quaternion.Float32} q The source quaternion.
     * @return {goog.vec.Quaternion.Float32} The new quaternion.
     */
    var cloneFloat32: any /*missing*/;

    /**
     * Creates a clone of the given Float64 quaternion.
     *
     * @param {goog.vec.Quaternion.Float64} q The source quaternion.
     * @return {goog.vec.Quaternion.Float64} The new quaternion.
     */
    var cloneFloat64: any /*missing*/;

    /**
     * Initializes the quaternion with the given values.
     *
     * @param {goog.vec.Quaternion.AnyType} q The quaternion to receive
     *     the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Vec4.AnyType} return q so that operations can be
     *     chained together.
     */
    var setFromValues: any /*missing*/;

    /**
     * Initializes the quaternion with the given array of values.
     *
     * @param {goog.vec.Quaternion.AnyType} q The quaternion to receive
     *     the values.
     * @param {goog.vec.AnyType} values The array of values.
     * @return {!goog.vec.Quaternion.AnyType} return q so that operations can be
     *     chained together.
     */
    var setFromArray: any /*missing*/;

    /**
     * Adds the two quaternions.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The first addend.
     * @param {goog.vec.Quaternion.AnyType} quat1 The second addend.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result. May be quat0 or quat1.
     */
    var add: any /*missing*/;

    /**
     * Negates a quaternion, storing the result into resultQuat.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The quaternion to negate.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result. May be quat0.
     */
    var negate: any /*missing*/;

    /**
     * Multiplies each component of quat0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The source quaternion.
     * @param {number} scalar The value to multiply with each component of quat0.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result. May be quat0.
     */
    var scale: any /*missing*/;

    /**
     * Returns the square magnitude of the given quaternion.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The quaternion.
     * @return {number} The magnitude of the quaternion.
     */
    var magnitudeSquared: any /*missing*/;

    /**
     * Returns the magnitude of the given quaternion.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The quaternion.
     * @return {number} The magnitude of the quaternion.
     */
    var magnitude: any /*missing*/;

    /**
     * Normalizes the given quaternion storing the result into resultVec.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The quaternion to
     *     normalize.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result. May be quat0.
     */
    var normalize: any /*missing*/;

    /**
     * Computes the dot (scalar) product of two quaternions.
     *
     * @param {goog.vec.Quaternion.AnyType} q0 The first quaternion.
     * @param {goog.vec.Quaternion.AnyType} q1 The second quaternion.
     * @return {number} The scalar product.
     */
    var dot: any /*missing*/;

    /**
     * Computes the conjugate of the quaternion in quat storing the result into
     * resultQuat.
     *
     * @param {goog.vec.Quaternion.AnyType} quat The source quaternion.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result.
     * @return {!goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function conjugate(quat: goog.vec.Quaternion.AnyType, resultQuat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Concatenates the two quaternions storing the result into resultQuat.
     *
     * @param {goog.vec.Quaternion.AnyType} quat0 The first quaternion.
     * @param {goog.vec.Quaternion.AnyType} quat1 The second quaternion.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result.
     * @return {!goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function concat(quat0: goog.vec.Quaternion.AnyType, quat1: goog.vec.Quaternion.AnyType, resultQuat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Generates a unit quaternion from the given angle-axis rotation pair.
     * The rotation axis is not required to be a unit vector, but should
     * have non-zero length.  The angle should be specified in radians.
     *
     * @param {number} angle The angle (in radians) to rotate about the axis.
     * @param {goog.vec.Quaternion.AnyType} axis Unit vector specifying the
     *     axis of rotation.
     * @param {goog.vec.Quaternion.AnyType} quat Unit quaternion to store the
     *     result.
     * @return {goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function fromAngleAxis(angle: number, axis: goog.vec.Quaternion.AnyType, quat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Generates an angle-axis rotation pair from a unit quaternion.
     * The quaternion is assumed to be of unit length.  The calculated
     * values are returned via the passed 'axis' object and the 'angle'
     * number returned by the function itself. The returned rotation axis
     * is a non-zero length unit vector, and the returned angle is in
     * radians in the range of [-PI, +PI].
     *
     * @param {goog.vec.Quaternion.AnyType} quat Unit quaternion to convert.
     * @param {goog.vec.Quaternion.AnyType} axis Vector to store the returned
     *     rotation axis.
     * @return {number} angle Angle (in radians) to rotate about 'axis'.
     *     The range of the returned angle is [-PI, +PI].
     */
    function toAngleAxis(quat: goog.vec.Quaternion.AnyType, axis: goog.vec.Quaternion.AnyType): number;

    /**
     * Generates the quaternion from the given rotation matrix.
     *
     * @param {goog.vec.Quaternion.AnyType} matrix The source matrix.
     * @param {goog.vec.Quaternion.AnyType} quat The resulting quaternion.
     * @return {!goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function fromRotationMatrix4(matrix: goog.vec.Quaternion.AnyType, quat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Generates the rotation matrix from the given quaternion.
     *
     * @param {goog.vec.Quaternion.AnyType} quat The source quaternion.
     * @param {goog.vec.AnyType} matrix The resulting matrix.
     * @return {!goog.vec.AnyType} Return resulting matrix so that
     *     operations can be chained together.
     */
    function toRotationMatrix4(quat: goog.vec.Quaternion.AnyType, matrix: goog.vec.AnyType): goog.vec.AnyType;

    /**
     * Computes the spherical linear interpolated value from the given quaternions
     * q0 and q1 according to the coefficient t. The resulting quaternion is stored
     * in resultQuat.
     *
     * @param {goog.vec.Quaternion.AnyType} q0 The first quaternion.
     * @param {goog.vec.Quaternion.AnyType} q1 The second quaternion.
     * @param {number} t The interpolating coefficient.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the result.
     * @return {goog.vec.Quaternion.AnyType} Return q so that
     *     operations can be chained together.
     */
    function slerp(q0: goog.vec.Quaternion.AnyType, q1: goog.vec.Quaternion.AnyType, t: number, resultQuat: goog.vec.Quaternion.AnyType): goog.vec.Quaternion.AnyType;

    /**
     * Compute the simple linear interpolation of the two quaternions q0 and q1
     * according to the coefficient t. The resulting quaternion is stored in
     * resultVec.
     *
     * @param {goog.vec.Quaternion.AnyType} q0 The first quaternion.
     * @param {goog.vec.Quaternion.AnyType} q1 The second quaternion.
     * @param {number} t The interpolation factor.
     * @param {goog.vec.Quaternion.AnyType} resultQuat The quaternion to
     *     receive the results (may be q0 or q1).
     */
    var nlerp: any /*missing*/;
}

declare module 'goog.vec.vec2d' {

    /** @typedef {goog.vec.Float64} */
    interface Type extends goog.vec.Float64 { }

    /**
     * Creates a vec2d with all elements initialized to zero.
     *
     * @return {!goog.vec.vec2d.Type} The new vec2d.
     */
    function create(): goog.vec.vec2d.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.vec2d.Type} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @return {!goog.vec.vec2d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.vec2d.Type, v0: number, v1: number): goog.vec.vec2d.Type;

    /**
     * Initializes vec2d vec from vec2d src.
     *
     * @param {goog.vec.vec2d.Type} vec The destination vector.
     * @param {goog.vec.vec2d.Type} src The source vector.
     * @return {!goog.vec.vec2d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec2d(vec: goog.vec.vec2d.Type, src: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Initializes vec2d vec from vec2f src (typed as a Float32Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.vec2d.Type} vec The destination vector.
     * @param {Float32Array} src The source vector.
     * @return {!goog.vec.vec2d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec2f(vec: goog.vec.vec2d.Type, src: Float32Array): goog.vec.vec2d.Type;

    /**
     * Initializes vec2d vec from Array src.
     *
     * @param {goog.vec.vec2d.Type} vec The destination vector.
     * @param {Array.<number>} src The source vector.
     * @return {!goog.vec.vec2d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.vec2d.Type, src: number[]): goog.vec.vec2d.Type;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The first addend.
     * @param {goog.vec.vec2d.Type} vec1 The second addend.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The minuend.
     * @param {goog.vec.vec2d.Type} vec1 The subtrahend.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The vector to negate.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The source vector.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.vec2d.Type, scalar: number, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.vec2d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.vec2d.Type): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.vec2d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.vec2d.Type): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The vector to normalize.
     * @param {goog.vec.vec2d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Returns the scalar product of vectors vec0 and vec1.
     *
     * @param {goog.vec.vec2d.Type} vec0 The first vector.
     * @param {goog.vec.vec2d.Type} vec1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type): number;

    /**
     * Returns the squared distance between two points.
     *
     * @param {goog.vec.vec2d.Type} vec0 First point.
     * @param {goog.vec.vec2d.Type} vec1 Second point.
     * @return {number} The squared distance between the points.
     */
    function distanceSquared(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type): number;

    /**
     * Returns the distance between two points.
     *
     * @param {goog.vec.vec2d.Type} vec0 First point.
     * @param {goog.vec.vec2d.Type} vec1 Second point.
     * @return {number} The distance between the points.
     */
    function distance(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type): number;

    /**
     * Returns a unit vector pointing from one point to another.
     * If the input points are equal then the result will be all zeros.
     *
     * @param {goog.vec.vec2d.Type} vec0 Origin point.
     * @param {goog.vec.vec2d.Type} vec1 Target point.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function direction(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Linearly interpolate from vec0 to vec1 according to f. The value of f should
     * be in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.vec2d.Type} vec0 The first vector.
     * @param {goog.vec.vec2d.Type} vec1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type, f: number, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The source vector.
     * @param {goog.vec.vec2d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.vec2d.Type, limit: any /*goog.vec.vec2d.Type|number*/, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.vec2d.Type} vec0 The source vector.
     * @param {goog.vec.vec2d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec2d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec2d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.vec2d.Type, limit: any /*goog.vec.vec2d.Type|number*/, resultVec: goog.vec.vec2d.Type): goog.vec.vec2d.Type;

    /**
     * Returns true if the components of vec0 are equal to the components of vec1.
     *
     * @param {goog.vec.vec2d.Type} vec0 The first vector.
     * @param {goog.vec.vec2d.Type} vec1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(vec0: goog.vec.vec2d.Type, vec1: goog.vec.vec2d.Type): boolean;
}

declare module 'goog.vec.vec2f' {

    /** @typedef {goog.vec.Float32} */
    interface Type extends goog.vec.Float32 { }

    /**
     * Creates a vec2f with all elements initialized to zero.
     *
     * @return {!goog.vec.vec2f.Type} The new vec2f.
     */
    function create(): goog.vec.vec2f.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.vec2f.Type} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @return {!goog.vec.vec2f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.vec2f.Type, v0: number, v1: number): goog.vec.vec2f.Type;

    /**
     * Initializes vec2f vec from vec2f src.
     *
     * @param {goog.vec.vec2f.Type} vec The destination vector.
     * @param {goog.vec.vec2f.Type} src The source vector.
     * @return {!goog.vec.vec2f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec2f(vec: goog.vec.vec2f.Type, src: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Initializes vec2f vec from vec2d src (typed as a Float64Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.vec2f.Type} vec The destination vector.
     * @param {Float64Array} src The source vector.
     * @return {!goog.vec.vec2f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec2d(vec: goog.vec.vec2f.Type, src: Float64Array): goog.vec.vec2f.Type;

    /**
     * Initializes vec2f vec from Array src.
     *
     * @param {goog.vec.vec2f.Type} vec The destination vector.
     * @param {Array.<number>} src The source vector.
     * @return {!goog.vec.vec2f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.vec2f.Type, src: number[]): goog.vec.vec2f.Type;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec2f.Type} vec0 The first addend.
     * @param {goog.vec.vec2f.Type} vec1 The second addend.
     * @param {goog.vec.vec2f.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.vec2f.Type, vec1: goog.vec.vec2f.Type, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec2f.Type} vec0 The minuend.
     * @param {goog.vec.vec2f.Type} vec1 The subtrahend.
     * @param {goog.vec.vec2f.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.vec2f.Type, vec1: goog.vec.vec2f.Type, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.vec2f.Type} vec0 The vector to negate.
     * @param {goog.vec.vec2f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.vec2f.Type, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.vec2f.Type} vec0 The source vector.
     * @param {goog.vec.vec2f.Type} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.vec2f.Type, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.vec2f.Type} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.vec2f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.vec2f.Type, scalar: number, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.vec2f.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.vec2f.Type): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.vec2f.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.vec2f.Type): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.vec2f.Type} vec0 The vector to normalize.
     * @param {goog.vec.vec2f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.vec2f.Type, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Returns the scalar product of vectors vec0 and vec1.
     *
     * @param {goog.vec.vec2f.Type} vec0 The first vector.
     * @param {goog.vec.vec2f.Type} vec1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(vec0: goog.vec.vec2f.Type, vec1: goog.vec.vec2f.Type): number;

    /**
     * Returns the squared distance between two points.
     *
     * @param {goog.vec.vec2f.Type} vec0 First point.
     * @param {goog.vec.vec2f.Type} vec1 Second point.
     * @return {number} The squared distance between the points.
     */
    function distanceSquared(vec0: goog.vec.vec2f.Type, vec1: goog.vec.vec2f.Type): number;

    /**
     * Returns the distance between two points.
     *
     * @param {goog.vec.vec2f.Type} vec0 First point.
     * @param {goog.vec.vec2f.Type} vec1 Second point.
     * @return {number} The distance between the points.
     */
    function distance(vec0: goog.vec.vec2f.Type, vec1: goog.vec.vec2f.Type): number;

    /**
     * Returns a unit vector pointing from one point to another.
     * If the input points are equal then the result will be all zeros.
     *
     * @param {goog.vec.vec2f.Type} vec0 Origin point.
     * @param {goog.vec.vec2f.Type} vec1 Target point.
     * @param {goog.vec.vec2f.Type} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function direction(vec0: goog.vec.vec2f.Type, vec1: goog.vec.vec2f.Type, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Linearly interpolate from vec0 to vec1 according to f. The value of f should
     * be in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.vec2f.Type} vec0 The first vector.
     * @param {goog.vec.vec2f.Type} vec1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.vec2f.Type} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(vec0: goog.vec.vec2f.Type, vec1: goog.vec.vec2f.Type, f: number, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.vec2f.Type} vec0 The source vector.
     * @param {goog.vec.vec2f.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec2f.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.vec2f.Type, limit: any /*goog.vec.vec2f.Type|number*/, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.vec2f.Type} vec0 The source vector.
     * @param {goog.vec.vec2f.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec2f.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec2f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.vec2f.Type, limit: any /*goog.vec.vec2f.Type|number*/, resultVec: goog.vec.vec2f.Type): goog.vec.vec2f.Type;

    /**
     * Returns true if the components of vec0 are equal to the components of vec1.
     *
     * @param {goog.vec.vec2f.Type} vec0 The first vector.
     * @param {goog.vec.vec2f.Type} vec1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(vec0: goog.vec.vec2f.Type, vec1: goog.vec.vec2f.Type): boolean;
}

declare module 'goog.vec.Vec2' {

    /** @typedef {goog.vec.Float32} */
    interface Float32 extends goog.vec.Float32 { }

    /** @typedef {goog.vec.Float64} */
    interface Float64 extends goog.vec.Float64 { }

    /** @typedef {goog.vec.Number} */
    interface Number extends goog.vec.Number { }

    /** @typedef {goog.vec.AnyType} */
    interface AnyType extends goog.vec.AnyType { }

    /**
     * Creates a 2 element vector of Float32. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec2.Float32} The new 2 element array.
     */
    function createFloat32(): goog.vec.Vec2.Float32;

    /**
     * Creates a 2 element vector of Float64. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec2.Float64} The new 2 element array.
     */
    function createFloat64(): goog.vec.Vec2.Float64;

    /**
     * Creates a 2 element vector of Number. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec2.Number} The new 2 element array.
     */
    function createNumber(): goog.vec.Vec2.Number;

    /**
     * Creates a new 2 element FLoat32 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec2.AnyType} vec The source 2 element array.
     * @return {!goog.vec.Vec2.Float32} The new 2 element array.
     */
    function createFloat32FromArray(vec: goog.vec.Vec2.AnyType): goog.vec.Vec2.Float32;

    /**
     * Creates a new 2 element Float32 vector initialized with the supplied values.
     *
     * @param {number} vec0 The value for element at index 0.
     * @param {number} vec1 The value for element at index 1.
     * @return {!goog.vec.Vec2.Float32} The new vector.
     */
    function createFloat32FromValues(vec0: number, vec1: number): goog.vec.Vec2.Float32;

    /**
     * Creates a clone of the given 2 element Float32 vector.
     *
     * @param {goog.vec.Vec2.Float32} vec The source 2 element vector.
     * @return {!goog.vec.Vec2.Float32} The new cloned vector.
     */
    var cloneFloat32: any /*missing*/;

    /**
     * Creates a new 2 element Float64 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec2.AnyType} vec The source 2 element array.
     * @return {!goog.vec.Vec2.Float64} The new 2 element array.
     */
    function createFloat64FromArray(vec: goog.vec.Vec2.AnyType): goog.vec.Vec2.Float64;

    /**
    * Creates a new 2 element Float64 vector initialized with the supplied values.
    *
    * @param {number} vec0 The value for element at index 0.
    * @param {number} vec1 The value for element at index 1.
    * @return {!goog.vec.Vec2.Float64} The new vector.
    */
    function createFloat64FromValues(vec0: number, vec1: number): goog.vec.Vec2.Float64;

    /**
     * Creates a clone of the given 2 element vector.
     *
     * @param {goog.vec.Vec2.Float64} vec The source 2 element vector.
     * @return {!goog.vec.Vec2.Float64} The new cloned vector.
     */
    var cloneFloat64: any /*missing*/;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.Vec2.AnyType} vec The vector to receive the values.
     * @param {number} vec0 The value for element at index 0.
     * @param {number} vec1 The value for element at index 1.
     * @return {!goog.vec.Vec2.AnyType} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.Vec2.AnyType, vec0: number, vec1: number): goog.vec.Vec2.AnyType;

    /**
     * Initializes the vector with the given array of values.
     *
     * @param {goog.vec.Vec2.AnyType} vec The vector to receive the
     *     values.
     * @param {goog.vec.Vec2.AnyType} values The array of values.
     * @return {!goog.vec.Vec2.AnyType} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.Vec2.AnyType, values: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The first addend.
     * @param {goog.vec.Vec2.AnyType} vec1 The second addend.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.Vec2.AnyType, vec1: goog.vec.Vec2.AnyType, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The minuend.
     * @param {goog.vec.Vec2.AnyType} vec1 The subtrahend.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.Vec2.AnyType, vec1: goog.vec.Vec2.AnyType, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The vector to negate.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.Vec2.AnyType, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.Vec2.AnyType, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.Vec2.AnyType, scalar: number, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.Vec2.AnyType): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.Vec2.AnyType): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The vector to normalize.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.Vec2.AnyType, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Returns the scalar product of vectors vec0 and vec1.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The first vector.
     * @param {goog.vec.Vec2.AnyType} vec1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(vec0: goog.vec.Vec2.AnyType, vec1: goog.vec.Vec2.AnyType): number;

    /**
     * Returns the squared distance between two points.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 First point.
     * @param {goog.vec.Vec2.AnyType} vec1 Second point.
     * @return {number} The squared distance between the points.
     */
    function distanceSquared(vec0: goog.vec.Vec2.AnyType, vec1: goog.vec.Vec2.AnyType): number;

    /**
     * Returns the distance between two points.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 First point.
     * @param {goog.vec.Vec2.AnyType} vec1 Second point.
     * @return {number} The distance between the points.
     */
    function distance(vec0: goog.vec.Vec2.AnyType, vec1: goog.vec.Vec2.AnyType): number;

    /**
     * Returns a unit vector pointing from one point to another.
     * If the input points are equal then the result will be all zeros.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 Origin point.
     * @param {goog.vec.Vec2.AnyType} vec1 Target point.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function direction(vec0: goog.vec.Vec2.AnyType, vec1: goog.vec.Vec2.AnyType, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Linearly interpolate from vec0 to vec1 according to f. The value of f should
     * be in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The first vector.
     * @param {goog.vec.Vec2.AnyType} vec1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(vec0: goog.vec.Vec2.AnyType, vec1: goog.vec.Vec2.AnyType, f: number, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec2.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.Vec2.AnyType, limit: any /*goog.vec.Vec2.AnyType|number*/, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec2.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec2.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec2.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.Vec2.AnyType, limit: any /*goog.vec.Vec2.AnyType|number*/, resultVec: goog.vec.Vec2.AnyType): goog.vec.Vec2.AnyType;

    /**
     * Returns true if the components of vec0 are equal to the components of vec1.
     *
     * @param {goog.vec.Vec2.AnyType} vec0 The first vector.
     * @param {goog.vec.Vec2.AnyType} vec1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(vec0: goog.vec.Vec2.AnyType, vec1: goog.vec.Vec2.AnyType): boolean;
}

declare module 'goog.vec.vec3d' {

    /** @typedef {goog.vec.Float64} */
    interface Type extends goog.vec.Float64 { }

    /**
     * Creates a vec3d with all elements initialized to zero.
     *
     * @return {!goog.vec.vec3d.Type} The new vec3d.
     */
    function create(): goog.vec.vec3d.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.vec3d.Type} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @return {!goog.vec.vec3d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.vec3d.Type, v0: number, v1: number, v2: number): goog.vec.vec3d.Type;

    /**
     * Initializes vec3d vec from vec3d src.
     *
     * @param {goog.vec.vec3d.Type} vec The destination vector.
     * @param {goog.vec.vec3d.Type} src The source vector.
     * @return {!goog.vec.vec3d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec3d(vec: goog.vec.vec3d.Type, src: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Initializes vec3d vec from vec3f src (typed as a Float32Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.vec3d.Type} vec The destination vector.
     * @param {Float32Array} src The source vector.
     * @return {!goog.vec.vec3d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec3f(vec: goog.vec.vec3d.Type, src: Float32Array): goog.vec.vec3d.Type;

    /**
     * Initializes vec3d vec from Array src.
     *
     * @param {goog.vec.vec3d.Type} vec The destination vector.
     * @param {Array.<number>} src The source vector.
     * @return {!goog.vec.vec3d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.vec3d.Type, src: number[]): goog.vec.vec3d.Type;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec3d.Type} vec0 The first addend.
     * @param {goog.vec.vec3d.Type} vec1 The second addend.
     * @param {goog.vec.vec3d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec3d.Type} vec0 The minuend.
     * @param {goog.vec.vec3d.Type} vec1 The subtrahend.
     * @param {goog.vec.vec3d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.vec3d.Type} vec0 The vector to negate.
     * @param {goog.vec.vec3d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.vec3d.Type} vec0 The source vector.
     * @param {goog.vec.vec3d.Type} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.vec3d.Type} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.vec3d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.vec3d.Type, scalar: number, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.vec3d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.vec3d.Type): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.vec3d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.vec3d.Type): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.vec3d.Type} vec0 The vector to normalize.
     * @param {goog.vec.vec3d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.vec3d.Type} v0 The first vector.
     * @param {goog.vec.vec3d.Type} v1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(v0: goog.vec.vec3d.Type, v1: goog.vec.vec3d.Type): number;

    /**
     * Computes the vector (cross) product of v0 and v1 storing the result into
     * resultVec.
     *
     * @param {goog.vec.vec3d.Type} v0 The first vector.
     * @param {goog.vec.vec3d.Type} v1 The second vector.
     * @param {goog.vec.vec3d.Type} resultVec The vector to receive the
     *     results. May be either v0 or v1.
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function cross(v0: goog.vec.vec3d.Type, v1: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Returns the squared distance between two points.
     *
     * @param {goog.vec.vec3d.Type} vec0 First point.
     * @param {goog.vec.vec3d.Type} vec1 Second point.
     * @return {number} The squared distance between the points.
     */
    function distanceSquared(vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type): number;

    /**
     * Returns the distance between two points.
     *
     * @param {goog.vec.vec3d.Type} vec0 First point.
     * @param {goog.vec.vec3d.Type} vec1 Second point.
     * @return {number} The distance between the points.
     */
    function distance(vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type): number;

    /**
     * Returns a unit vector pointing from one point to another.
     * If the input points are equal then the result will be all zeros.
     *
     * @param {goog.vec.vec3d.Type} vec0 Origin point.
     * @param {goog.vec.vec3d.Type} vec1 Target point.
     * @param {goog.vec.vec3d.Type} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function direction(vec0: goog.vec.vec3d.Type, vec1: goog.vec.vec3d.Type, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Linearly interpolate from vec0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.vec3d.Type} v0 The first vector.
     * @param {goog.vec.vec3d.Type} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.vec3d.Type} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(v0: goog.vec.vec3d.Type, v1: goog.vec.vec3d.Type, f: number, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.vec3d.Type} vec0 The source vector.
     * @param {goog.vec.vec3d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec3d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.vec3d.Type, limit: any /*goog.vec.vec3d.Type|number*/, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.vec3d.Type} vec0 The source vector.
     * @param {goog.vec.vec3d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec3d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec3d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.vec3d.Type, limit: any /*goog.vec.vec3d.Type|number*/, resultVec: goog.vec.vec3d.Type): goog.vec.vec3d.Type;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.vec3d.Type} v0 The first vector.
     * @param {goog.vec.vec3d.Type} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(v0: goog.vec.vec3d.Type, v1: goog.vec.vec3d.Type): boolean;
}

declare module 'goog.vec.vec3f' {

    /** @typedef {goog.vec.Float32} */
    interface Type extends goog.vec.Float32 { }

    /**
     * Creates a vec3f with all elements initialized to zero.
     *
     * @return {!goog.vec.vec3f.Type} The new vec3f.
     */
    function create(): goog.vec.vec3f.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.vec3f.Type} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @return {!goog.vec.vec3f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.vec3f.Type, v0: number, v1: number, v2: number): goog.vec.vec3f.Type;

    /**
     * Initializes vec3f vec from vec3f src.
     *
     * @param {goog.vec.vec3f.Type} vec The destination vector.
     * @param {goog.vec.vec3f.Type} src The source vector.
     * @return {!goog.vec.vec3f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec3f(vec: goog.vec.vec3f.Type, src: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Initializes vec3f vec from vec3d src (typed as a Float64Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.vec3f.Type} vec The destination vector.
     * @param {Float64Array} src The source vector.
     * @return {!goog.vec.vec3f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec3d(vec: goog.vec.vec3f.Type, src: Float64Array): goog.vec.vec3f.Type;

    /**
     * Initializes vec3f vec from Array src.
     *
     * @param {goog.vec.vec3f.Type} vec The destination vector.
     * @param {Array.<number>} src The source vector.
     * @return {!goog.vec.vec3f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.vec3f.Type, src: number[]): goog.vec.vec3f.Type;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec3f.Type} vec0 The first addend.
     * @param {goog.vec.vec3f.Type} vec1 The second addend.
     * @param {goog.vec.vec3f.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec3f.Type} vec0 The minuend.
     * @param {goog.vec.vec3f.Type} vec1 The subtrahend.
     * @param {goog.vec.vec3f.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.vec3f.Type} vec0 The vector to negate.
     * @param {goog.vec.vec3f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.vec3f.Type} vec0 The source vector.
     * @param {goog.vec.vec3f.Type} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.vec3f.Type} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.vec3f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.vec3f.Type, scalar: number, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.vec3f.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.vec3f.Type): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.vec3f.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.vec3f.Type): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.vec3f.Type} vec0 The vector to normalize.
     * @param {goog.vec.vec3f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.vec3f.Type} v0 The first vector.
     * @param {goog.vec.vec3f.Type} v1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(v0: goog.vec.vec3f.Type, v1: goog.vec.vec3f.Type): number;

    /**
     * Computes the vector (cross) product of v0 and v1 storing the result into
     * resultVec.
     *
     * @param {goog.vec.vec3f.Type} v0 The first vector.
     * @param {goog.vec.vec3f.Type} v1 The second vector.
     * @param {goog.vec.vec3f.Type} resultVec The vector to receive the
     *     results. May be either v0 or v1.
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function cross(v0: goog.vec.vec3f.Type, v1: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Returns the squared distance between two points.
     *
     * @param {goog.vec.vec3f.Type} vec0 First point.
     * @param {goog.vec.vec3f.Type} vec1 Second point.
     * @return {number} The squared distance between the points.
     */
    function distanceSquared(vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type): number;

    /**
     * Returns the distance between two points.
     *
     * @param {goog.vec.vec3f.Type} vec0 First point.
     * @param {goog.vec.vec3f.Type} vec1 Second point.
     * @return {number} The distance between the points.
     */
    function distance(vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type): number;

    /**
     * Returns a unit vector pointing from one point to another.
     * If the input points are equal then the result will be all zeros.
     *
     * @param {goog.vec.vec3f.Type} vec0 Origin point.
     * @param {goog.vec.vec3f.Type} vec1 Target point.
     * @param {goog.vec.vec3f.Type} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function direction(vec0: goog.vec.vec3f.Type, vec1: goog.vec.vec3f.Type, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Linearly interpolate from vec0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.vec3f.Type} v0 The first vector.
     * @param {goog.vec.vec3f.Type} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.vec3f.Type} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(v0: goog.vec.vec3f.Type, v1: goog.vec.vec3f.Type, f: number, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.vec3f.Type} vec0 The source vector.
     * @param {goog.vec.vec3f.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec3f.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.vec3f.Type, limit: any /*goog.vec.vec3f.Type|number*/, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.vec3f.Type} vec0 The source vector.
     * @param {goog.vec.vec3f.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec3f.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec3f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.vec3f.Type, limit: any /*goog.vec.vec3f.Type|number*/, resultVec: goog.vec.vec3f.Type): goog.vec.vec3f.Type;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.vec3f.Type} v0 The first vector.
     * @param {goog.vec.vec3f.Type} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(v0: goog.vec.vec3f.Type, v1: goog.vec.vec3f.Type): boolean;
}

declare module 'goog.vec.Vec3' {

    /** @typedef {goog.vec.Float32} */
    interface Float32 extends goog.vec.Float32 { }

    /** @typedef {goog.vec.Float64} */
    interface Float64 extends goog.vec.Float64 { }

    /** @typedef {goog.vec.Number} */
    interface Number extends goog.vec.Number { }

    /** @typedef {goog.vec.AnyType} */
    interface AnyType extends goog.vec.AnyType { }

    /** @typedef {Float32Array} */
    interface Type extends Float32Array { }

    /** @typedef {goog.vec.ArrayType} */
    interface Vec3Like extends goog.vec.ArrayType { }

    /**
     * Creates a 3 element vector of Float32. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec3.Float32} The new 3 element array.
     */
    function createFloat32(): goog.vec.Vec3.Float32;

    /**
     * Creates a 3 element vector of Float64. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec3.Float64} The new 3 element array.
     */
    function createFloat64(): goog.vec.Vec3.Float64;

    /**
     * Creates a 3 element vector of Number. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec3.Number} The new 3 element array.
     */
    function createNumber(): goog.vec.Vec3.Number;

    /**
     * Creates a 3 element vector of Float32Array. The array is initialized to zero.
     *
     * @deprecated Use createFloat32.
     * @return {!goog.vec.Vec3.Type} The new 3 element array.
     */
    function create(): goog.vec.Vec3.Type;

    /**
     * Creates a new 3 element FLoat32 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec3.AnyType} vec The source 3 element array.
     * @return {!goog.vec.Vec3.Float32} The new 3 element array.
     */
    function createFloat32FromArray(vec: goog.vec.Vec3.AnyType): goog.vec.Vec3.Float32;

    /**
     * Creates a new 3 element Float32 vector initialized with the supplied values.
     *
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @return {!goog.vec.Vec3.Float32} The new vector.
     */
    function createFloat32FromValues(v0: number, v1: number, v2: number): goog.vec.Vec3.Float32;

    /**
     * Creates a clone of the given 3 element Float32 vector.
     *
     * @param {goog.vec.Vec3.Float32} vec The source 3 element vector.
     * @return {!goog.vec.Vec3.Float32} The new cloned vector.
     */
    var cloneFloat32: any /*missing*/;

    /**
     * Creates a new 3 element Float64 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec3.AnyType} vec The source 3 element array.
     * @return {!goog.vec.Vec3.Float64} The new 3 element array.
     */
    function createFloat64FromArray(vec: goog.vec.Vec3.AnyType): goog.vec.Vec3.Float64;

    /**
    * Creates a new 3 element Float64 vector initialized with the supplied values.
    *
    * @param {number} v0 The value for element at index 0.
    * @param {number} v1 The value for element at index 1.
    * @param {number} v2 The value for element at index 2.
    * @return {!goog.vec.Vec3.Float64} The new vector.
    */
    function createFloat64FromValues(v0: number, v1: number, v2: number): goog.vec.Vec3.Float64;

    /**
     * Creates a clone of the given 3 element vector.
     *
     * @param {goog.vec.Vec3.Float64} vec The source 3 element vector.
     * @return {!goog.vec.Vec3.Float64} The new cloned vector.
     */
    var cloneFloat64: any /*missing*/;

    /**
     * Creates a new 3 element vector initialized with the value from the given
     * array.
     *
     * @deprecated Use createFloat32FromArray.
     * @param {goog.vec.Vec3.Vec3Like} vec The source 3 element array.
     * @return {!goog.vec.Vec3.Type} The new 3 element array.
     */
    function createFromArray(vec: goog.vec.Vec3.Vec3Like): goog.vec.Vec3.Type;

    /**
     * Creates a new 3 element vector initialized with the supplied values.
     *
     * @deprecated Use createFloat32FromValues.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @return {!goog.vec.Vec3.Type} The new vector.
     */
    function createFromValues(v0: number, v1: number, v2: number): goog.vec.Vec3.Type;

    /**
     * Creates a clone of the given 3 element vector.
     *
     * @deprecated Use cloneFloat32.
     * @param {goog.vec.Vec3.Vec3Like} vec The source 3 element vector.
     * @return {!goog.vec.Vec3.Type} The new cloned vector.
     */
    function clone(vec: goog.vec.Vec3.Vec3Like): goog.vec.Vec3.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.Vec3.AnyType} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @return {!goog.vec.Vec3.AnyType} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.Vec3.AnyType, v0: number, v1: number, v2: number): goog.vec.Vec3.AnyType;

    /**
     * Initializes the vector with the given array of values.
     *
     * @param {goog.vec.Vec3.AnyType} vec The vector to receive the
     *     values.
     * @param {goog.vec.Vec3.AnyType} values The array of values.
     * @return {!goog.vec.Vec3.AnyType} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.Vec3.AnyType, values: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The first addend.
     * @param {goog.vec.Vec3.AnyType} vec1 The second addend.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The minuend.
     * @param {goog.vec.Vec3.AnyType} vec1 The subtrahend.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The vector to negate.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.Vec3.AnyType, scalar: number, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.Vec3.AnyType): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.Vec3.AnyType): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The vector to normalize.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.Vec3.AnyType} v0 The first vector.
     * @param {goog.vec.Vec3.AnyType} v1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(v0: goog.vec.Vec3.AnyType, v1: goog.vec.Vec3.AnyType): number;

    /**
     * Computes the vector (cross) product of v0 and v1 storing the result into
     * resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} v0 The first vector.
     * @param {goog.vec.Vec3.AnyType} v1 The second vector.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results. May be either v0 or v1.
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function cross(v0: goog.vec.Vec3.AnyType, v1: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Returns the squared distance between two points.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 First point.
     * @param {goog.vec.Vec3.AnyType} vec1 Second point.
     * @return {number} The squared distance between the points.
     */
    function distanceSquared(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType): number;

    /**
     * Returns the distance between two points.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 First point.
     * @param {goog.vec.Vec3.AnyType} vec1 Second point.
     * @return {number} The distance between the points.
     */
    function distance(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType): number;

    /**
     * Returns a unit vector pointing from one point to another.
     * If the input points are equal then the result will be all zeros.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 Origin point.
     * @param {goog.vec.Vec3.AnyType} vec1 Target point.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or vec1).
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function direction(vec0: goog.vec.Vec3.AnyType, vec1: goog.vec.Vec3.AnyType, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Linearly interpolate from vec0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.Vec3.AnyType} v0 The first vector.
     * @param {goog.vec.Vec3.AnyType} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(v0: goog.vec.Vec3.AnyType, v1: goog.vec.Vec3.AnyType, f: number, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec3.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.Vec3.AnyType, limit: any /*goog.vec.Vec3.AnyType|number*/, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.Vec3.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec3.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec3.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec3.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.Vec3.AnyType, limit: any /*goog.vec.Vec3.AnyType|number*/, resultVec: goog.vec.Vec3.AnyType): goog.vec.Vec3.AnyType;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.Vec3.AnyType} v0 The first vector.
     * @param {goog.vec.Vec3.AnyType} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(v0: goog.vec.Vec3.AnyType, v1: goog.vec.Vec3.AnyType): boolean;
}

declare module 'goog.vec.vec4d' {

    /** @typedef {goog.vec.Float64} */
    interface Type extends goog.vec.Float64 { }

    /**
     * Creates a vec4d with all elements initialized to zero.
     *
     * @return {!goog.vec.vec4d.Type} The new vec4d.
     */
    function create(): goog.vec.vec4d.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.vec4d.Type} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.vec4d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.vec4d.Type, v0: number, v1: number, v2: number, v3: number): goog.vec.vec4d.Type;

    /**
     * Initializes vec4d vec from vec4d src.
     *
     * @param {goog.vec.vec4d.Type} vec The destination vector.
     * @param {goog.vec.vec4d.Type} src The source vector.
     * @return {!goog.vec.vec4d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec4d(vec: goog.vec.vec4d.Type, src: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Initializes vec4d vec from vec4f src (typed as a Float32Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.vec4d.Type} vec The destination vector.
     * @param {Float32Array} src The source vector.
     * @return {!goog.vec.vec4d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec4f(vec: goog.vec.vec4d.Type, src: Float32Array): goog.vec.vec4d.Type;

    /**
     * Initializes vec4d vec from Array src.
     *
     * @param {goog.vec.vec4d.Type} vec The destination vector.
     * @param {Array.<number>} src The source vector.
     * @return {!goog.vec.vec4d.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.vec4d.Type, src: number[]): goog.vec.vec4d.Type;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The first addend.
     * @param {goog.vec.vec4d.Type} vec1 The second addend.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.vec4d.Type, vec1: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The minuend.
     * @param {goog.vec.vec4d.Type} vec1 The subtrahend.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.vec4d.Type, vec1: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The vector to negate.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The source vector.
     * @param {goog.vec.vec4d.Type} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.vec4d.Type, scalar: number, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.vec4d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.vec4d.Type): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.vec4d.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.vec4d.Type): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The vector to normalize.
     * @param {goog.vec.vec4d.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.vec4d.Type, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.vec4d.Type} v0 The first vector.
     * @param {goog.vec.vec4d.Type} v1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(v0: goog.vec.vec4d.Type, v1: goog.vec.vec4d.Type): number;

    /**
     * Linearly interpolate from v0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.vec4d.Type} v0 The first vector.
     * @param {goog.vec.vec4d.Type} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.vec4d.Type} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(v0: goog.vec.vec4d.Type, v1: goog.vec.vec4d.Type, f: number, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The source vector.
     * @param {goog.vec.vec4d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec4d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.vec4d.Type, limit: any /*goog.vec.vec4d.Type|number*/, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.vec4d.Type} vec0 The source vector.
     * @param {goog.vec.vec4d.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec4d.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec4d.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.vec4d.Type, limit: any /*goog.vec.vec4d.Type|number*/, resultVec: goog.vec.vec4d.Type): goog.vec.vec4d.Type;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.vec4d.Type} v0 The first vector.
     * @param {goog.vec.vec4d.Type} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(v0: goog.vec.vec4d.Type, v1: goog.vec.vec4d.Type): boolean;
}

declare module 'goog.vec.vec4f' {

    /** @typedef {goog.vec.Float32} */
    interface Type extends goog.vec.Float32 { }

    /**
     * Creates a vec4f with all elements initialized to zero.
     *
     * @return {!goog.vec.vec4f.Type} The new vec4f.
     */
    function create(): goog.vec.vec4f.Type;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.vec4f.Type} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.vec4f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.vec4f.Type, v0: number, v1: number, v2: number, v3: number): goog.vec.vec4f.Type;

    /**
     * Initializes vec4f vec from vec4f src.
     *
     * @param {goog.vec.vec4f.Type} vec The destination vector.
     * @param {goog.vec.vec4f.Type} src The source vector.
     * @return {!goog.vec.vec4f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec4f(vec: goog.vec.vec4f.Type, src: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Initializes vec4f vec from vec4d src (typed as a Float64Array to
     * avoid circular goog.requires).
     *
     * @param {goog.vec.vec4f.Type} vec The destination vector.
     * @param {Float64Array} src The source vector.
     * @return {!goog.vec.vec4f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromVec4d(vec: goog.vec.vec4f.Type, src: Float64Array): goog.vec.vec4f.Type;

    /**
     * Initializes vec4f vec from Array src.
     *
     * @param {goog.vec.vec4f.Type} vec The destination vector.
     * @param {Array.<number>} src The source vector.
     * @return {!goog.vec.vec4f.Type} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.vec4f.Type, src: number[]): goog.vec.vec4f.Type;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec4f.Type} vec0 The first addend.
     * @param {goog.vec.vec4f.Type} vec1 The second addend.
     * @param {goog.vec.vec4f.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.vec4f.Type, vec1: goog.vec.vec4f.Type, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.vec4f.Type} vec0 The minuend.
     * @param {goog.vec.vec4f.Type} vec1 The subtrahend.
     * @param {goog.vec.vec4f.Type} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.vec4f.Type, vec1: goog.vec.vec4f.Type, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.vec4f.Type} vec0 The vector to negate.
     * @param {goog.vec.vec4f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.vec4f.Type, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.vec4f.Type} vec0 The source vector.
     * @param {goog.vec.vec4f.Type} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.vec4f.Type, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.vec4f.Type} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.vec4f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.vec4f.Type, scalar: number, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.vec4f.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.vec4f.Type): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.vec4f.Type} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.vec4f.Type): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.vec4f.Type} vec0 The vector to normalize.
     * @param {goog.vec.vec4f.Type} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.vec4f.Type, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.vec4f.Type} v0 The first vector.
     * @param {goog.vec.vec4f.Type} v1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(v0: goog.vec.vec4f.Type, v1: goog.vec.vec4f.Type): number;

    /**
     * Linearly interpolate from v0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.vec4f.Type} v0 The first vector.
     * @param {goog.vec.vec4f.Type} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.vec4f.Type} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(v0: goog.vec.vec4f.Type, v1: goog.vec.vec4f.Type, f: number, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.vec4f.Type} vec0 The source vector.
     * @param {goog.vec.vec4f.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec4f.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.vec4f.Type, limit: any /*goog.vec.vec4f.Type|number*/, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.vec4f.Type} vec0 The source vector.
     * @param {goog.vec.vec4f.Type|number} limit The limit vector or scalar.
     * @param {goog.vec.vec4f.Type} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.vec4f.Type} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.vec4f.Type, limit: any /*goog.vec.vec4f.Type|number*/, resultVec: goog.vec.vec4f.Type): goog.vec.vec4f.Type;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.vec4f.Type} v0 The first vector.
     * @param {goog.vec.vec4f.Type} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(v0: goog.vec.vec4f.Type, v1: goog.vec.vec4f.Type): boolean;
}

declare module 'goog.vec.Vec4' {

    /** @typedef {goog.vec.Float32} */
    interface Float32 extends goog.vec.Float32 { }

    /** @typedef {goog.vec.Float64} */
    interface Float64 extends goog.vec.Float64 { }

    /** @typedef {goog.vec.Number} */
    interface Number extends goog.vec.Number { }

    /** @typedef {goog.vec.AnyType} */
    interface AnyType extends goog.vec.AnyType { }

    /** @typedef {Float32Array} */
    interface Type extends Float32Array { }

    /** @typedef {goog.vec.ArrayType} */
    interface Vec4Like extends goog.vec.ArrayType { }

    /**
     * Creates a 4 element vector of Float32. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec4.Float32} The new 3 element array.
     */
    function createFloat32(): goog.vec.Vec4.Float32;

    /**
     * Creates a 4 element vector of Float64. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec4.Float64} The new 4 element array.
     */
    function createFloat64(): goog.vec.Vec4.Float64;

    /**
     * Creates a 4 element vector of Number. The array is initialized to zero.
     *
     * @return {!goog.vec.Vec4.Number} The new 4 element array.
     */
    function createNumber(): goog.vec.Vec4.Number;

    /**
     * Creates a 4 element vector of Float32Array. The array is initialized to zero.
     *
     * @deprecated Use createFloat32.
     * @return {!goog.vec.Vec4.Type} The new 4 element array.
     */
    function create(): goog.vec.Vec4.Type;

    /**
     * Creates a new 4 element vector initialized with the value from the given
     * array.
     *
     * @deprecated Use createFloat32FromArray.
     * @param {goog.vec.Vec4.Vec4Like} vec The source 4 element array.
     * @return {!goog.vec.Vec4.Type} The new 4 element array.
     */
    function createFromArray(vec: goog.vec.Vec4.Vec4Like): goog.vec.Vec4.Type;

    /**
     * Creates a new 4 element FLoat32 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec4.AnyType} vec The source 3 element array.
     * @return {!goog.vec.Vec4.Float32} The new 3 element array.
     */
    function createFloat32FromArray(vec: goog.vec.Vec4.AnyType): goog.vec.Vec4.Float32;

    /**
     * Creates a new 4 element Float32 vector initialized with the supplied values.
     *
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Vec4.Float32} The new vector.
     */
    function createFloat32FromValues(v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.Float32;

    /**
     * Creates a clone of the given 4 element Float32 vector.
     *
     * @param {goog.vec.Vec4.Float32} vec The source 3 element vector.
     * @return {!goog.vec.Vec4.Float32} The new cloned vector.
     */
    var cloneFloat32: any /*missing*/;

    /**
     * Creates a new 4 element Float64 vector initialized with the value from the
     * given array.
     *
     * @param {goog.vec.Vec4.AnyType} vec The source 4 element array.
     * @return {!goog.vec.Vec4.Float64} The new 4 element array.
     */
    function createFloat64FromArray(vec: goog.vec.Vec4.AnyType): goog.vec.Vec4.Float64;

    /**
    * Creates a new 4 element Float64 vector initialized with the supplied values.
    *
    * @param {number} v0 The value for element at index 0.
    * @param {number} v1 The value for element at index 1.
    * @param {number} v2 The value for element at index 2.
    * @param {number} v3 The value for element at index 3.
    * @return {!goog.vec.Vec4.Float64} The new vector.
    */
    function createFloat64FromValues(v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.Float64;

    /**
     * Creates a clone of the given 4 element vector.
     *
     * @param {goog.vec.Vec4.Float64} vec The source 4 element vector.
     * @return {!goog.vec.Vec4.Float64} The new cloned vector.
     */
    var cloneFloat64: any /*missing*/;

    /**
     * Creates a new 4 element vector initialized with the supplied values.
     *
     * @deprecated Use createFloat32FromValues.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Vec4.Type} The new vector.
     */
    function createFromValues(v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.Type;

    /**
     * Creates a clone of the given 4 element vector.
     *
     * @deprecated Use cloneFloat32.
     * @param {goog.vec.Vec4.Vec4Like} vec The source 4 element vector.
     * @return {!goog.vec.Vec4.Type} The new cloned vector.
     */
    var clone: any /*missing*/;

    /**
     * Initializes the vector with the given values.
     *
     * @param {goog.vec.Vec4.AnyType} vec The vector to receive the values.
     * @param {number} v0 The value for element at index 0.
     * @param {number} v1 The value for element at index 1.
     * @param {number} v2 The value for element at index 2.
     * @param {number} v3 The value for element at index 3.
     * @return {!goog.vec.Vec4.AnyType} Return vec so that operations can be
     *     chained together.
     */
    function setFromValues(vec: goog.vec.Vec4.AnyType, v0: number, v1: number, v2: number, v3: number): goog.vec.Vec4.AnyType;

    /**
     * Initializes the vector with the given array of values.
     *
     * @param {goog.vec.Vec4.AnyType} vec The vector to receive the
     *     values.
     * @param {goog.vec.Vec4.AnyType} values The array of values.
     * @return {!goog.vec.Vec4.AnyType} Return vec so that operations can be
     *     chained together.
     */
    function setFromArray(vec: goog.vec.Vec4.AnyType, values: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Performs a component-wise addition of vec0 and vec1 together storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The first addend.
     * @param {goog.vec.Vec4.AnyType} vec1 The second addend.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function add(vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Performs a component-wise subtraction of vec1 from vec0 storing the
     * result into resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The minuend.
     * @param {goog.vec.Vec4.AnyType} vec1 The subtrahend.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0 or vec1.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function subtract(vec0: goog.vec.Vec4.AnyType, vec1: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Negates vec0, storing the result into resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The vector to negate.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function negate(vec0: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Takes the absolute value of each component of vec0 storing the result in
     * resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to receive the result.
     *     May be vec0.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function abs(vec0: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Multiplies each component of vec0 with scalar storing the product into
     * resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The source vector.
     * @param {number} scalar The value to multiply with each component of vec0.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function scale(vec0: goog.vec.Vec4.AnyType, scalar: number, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Returns the magnitudeSquared of the given vector.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitudeSquared(vec0: goog.vec.Vec4.AnyType): number;

    /**
     * Returns the magnitude of the given vector.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The vector.
     * @return {number} The magnitude of the vector.
     */
    function magnitude(vec0: goog.vec.Vec4.AnyType): number;

    /**
     * Normalizes the given vector storing the result into resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The vector to normalize.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to
     *     receive the result. May be vec0.
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function normalize(vec0: goog.vec.Vec4.AnyType, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Returns the scalar product of vectors v0 and v1.
     *
     * @param {goog.vec.Vec4.AnyType} v0 The first vector.
     * @param {goog.vec.Vec4.AnyType} v1 The second vector.
     * @return {number} The scalar product.
     */
    function dot(v0: goog.vec.Vec4.AnyType, v1: goog.vec.Vec4.AnyType): number;

    /**
     * Linearly interpolate from v0 to v1 according to f. The value of f should be
     * in the range [0..1] otherwise the results are undefined.
     *
     * @param {goog.vec.Vec4.AnyType} v0 The first vector.
     * @param {goog.vec.Vec4.AnyType} v1 The second vector.
     * @param {number} f The interpolation factor.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to receive the
     *     results (may be v0 or v1).
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function lerp(v0: goog.vec.Vec4.AnyType, v1: goog.vec.Vec4.AnyType, f: number, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the larger values in resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec4.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function max(vec0: goog.vec.Vec4.AnyType, limit: any /*goog.vec.Vec4.AnyType|number*/, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Compares the components of vec0 with the components of another vector or
     * scalar, storing the smaller values in resultVec.
     *
     * @param {goog.vec.Vec4.AnyType} vec0 The source vector.
     * @param {goog.vec.Vec4.AnyType|number} limit The limit vector or scalar.
     * @param {goog.vec.Vec4.AnyType} resultVec The vector to receive the
     *     results (may be vec0 or limit).
     * @return {!goog.vec.Vec4.AnyType} Return resultVec so that operations can be
     *     chained together.
     */
    function min(vec0: goog.vec.Vec4.AnyType, limit: any /*goog.vec.Vec4.AnyType|number*/, resultVec: goog.vec.Vec4.AnyType): goog.vec.Vec4.AnyType;

    /**
     * Returns true if the components of v0 are equal to the components of v1.
     *
     * @param {goog.vec.Vec4.AnyType} v0 The first vector.
     * @param {goog.vec.Vec4.AnyType} v1 The second vector.
     * @return {boolean} True if the vectors are equal, false otherwise.
     */
    function equals(v0: goog.vec.Vec4.AnyType, v1: goog.vec.Vec4.AnyType): boolean;
}

declare module 'goog.vec' {

    /** @typedef {Float32Array} */
    interface Float32 extends Float32Array { }

    /** @typedef {Float64Array} */
    interface Float64 extends Float64Array { }

    /** @typedef {Array.<number>} */
    interface Number extends Array<number> { }

    /** @typedef {goog.vec.Float32|goog.vec.Float64|goog.vec.Number} */
    interface AnyType { /*any (goog.vec.Float32|goog.vec.Float64|goog.vec.Number)*/ }

    /**
     * @deprecated Use AnyType.
     * @typedef {Float32Array|Array.<number>}
     */
    interface ArrayType { /*any (Float32Array|number[])*/ }

    /**
     * For graphics work, 6 decimal places of accuracy are typically all that is
     * required.
     *
     * @type {number}
     * @const
     */
    var EPSILON: number;

    /**
     * Constructs a new Float32Array. The new array is initialized to all zeros.
     *
     * @param {goog.vec.Float32Array|Array|ArrayBuffer|number} p0
     *     The length of the array, or an array to initialize the contents of the
     *     new Float32Array.
     * @constructor
     * @final
     */
    class Float32Array {
        /**
         * Constructs a new Float32Array. The new array is initialized to all zeros.
         *
         * @param {goog.vec.Float32Array|Array|ArrayBuffer|number} p0
         *     The length of the array, or an array to initialize the contents of the
         *     new Float32Array.
         * @constructor
         * @final
         */
        constructor(p0: any /*goog.vec.Float32Array|any[]|ArrayBuffer|number*/);
    
        /**
         * The number of bytes in an element (as defined by the Typed Array
         * specification).
         *
         * @type {number}
         */
        BYTES_PER_ELEMENT: number;
    
        /**
         * Sets elements of the array.
         * @param {Array.<number>|Float32Array} values The array of values.
         * @param {number=} opt_offset The offset in this array to start.
         */
        set(values: any /*number[]|Float32Array*/, opt_offset?: number): void;
    
        /**
         * Creates a string representation of this array.
         * @return {string} The string version of this array.
         * @override
         */
        toString: any /*missing*/;
    }

    /**
     * Constructs a new Float64Array. The new array is initialized to all zeros.
     *
     * @param {goog.vec.Float64Array|Array|ArrayBuffer|number} p0
     *     The length of the array, or an array to initialize the contents of the
     *     new Float64Array.
     * @constructor
     * @final
     */
    class Float64Array {
        /**
         * Constructs a new Float64Array. The new array is initialized to all zeros.
         *
         * @param {goog.vec.Float64Array|Array|ArrayBuffer|number} p0
         *     The length of the array, or an array to initialize the contents of the
         *     new Float64Array.
         * @constructor
         * @final
         */
        constructor(p0: any /*goog.vec.Float64Array|any[]|ArrayBuffer|number*/);
    
        /**
         * The number of bytes in an element (as defined by the Typed Array
         * specification).
         *
         * @type {number}
         */
        BYTES_PER_ELEMENT: number;
    
        /**
         * Sets elements of the array.
         * @param {Array.<number>|Float64Array} values The array of values.
         * @param {number=} opt_offset The offset in this array to start.
         */
        set(values: any /*number[]|Float64Array*/, opt_offset?: number): void;
    
        /**
         * Creates a string representation of this array.
         * @return {string} The string version of this array.
         * @override
         */
        toString: any /*missing*/;
    }

    /**
     * Constructs a new ray with an optional origin and direction. If not specified,
     * the default is [0, 0, 0].
     * @param {goog.vec.Vec3.AnyType=} opt_origin The optional origin.
     * @param {goog.vec.Vec3.AnyType=} opt_dir The optional direction.
     * @constructor
     * @final
     */
    class Ray {
        /**
         * Constructs a new ray with an optional origin and direction. If not specified,
         * the default is [0, 0, 0].
         * @param {goog.vec.Vec3.AnyType=} opt_origin The optional origin.
         * @param {goog.vec.Vec3.AnyType=} opt_dir The optional direction.
         * @constructor
         * @final
         */
        constructor(opt_origin?: goog.vec.Vec3.AnyType, opt_dir?: goog.vec.Vec3.AnyType);
    
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: goog.vec.AnyType, dir: goog.vec.AnyType): void;
    
        /**
         * Sets the origin of the ray.
         * @param {goog.vec.AnyType} origin the new origin.
         */
        setOrigin(origin: goog.vec.AnyType): void;
    
        /**
         * Sets the direction of the ray.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        setDir(dir: goog.vec.AnyType): void;
    
        /**
         * Returns true if this ray is equal to the other ray.
         * @param {goog.vec.Ray} other The other ray.
         * @return {boolean} True if this ray is equal to the other ray.
         */
        equals(other: goog.vec.Ray): boolean;
    }
}

