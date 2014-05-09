/// <reference path="../../../globals.d.ts" />

declare module goog.vec {

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
        set(origin: Float32Array, dir: Float32Array): void;
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: Float32Array, dir: Float64Array): void;
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: Float32Array, dir: number[]): void;
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: Float64Array, dir: Float32Array): void;
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: Float64Array, dir: Float64Array): void;
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: Float64Array, dir: number[]): void;
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: number[], dir: Float32Array): void;
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: number[], dir: Float64Array): void;
        /**
         * Sets the origin and direction of the ray.
         * @param {goog.vec.AnyType} origin The new origin.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        set(origin: number[], dir: number[]): void;
    
        /**
         * Sets the origin of the ray.
         * @param {goog.vec.AnyType} origin the new origin.
         */
        setOrigin(origin: Float32Array): void;
        /**
         * Sets the origin of the ray.
         * @param {goog.vec.AnyType} origin the new origin.
         */
        setOrigin(origin: Float64Array): void;
        /**
         * Sets the origin of the ray.
         * @param {goog.vec.AnyType} origin the new origin.
         */
        setOrigin(origin: number[]): void;
    
        /**
         * Sets the direction of the ray.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        setDir(dir: Float32Array): void;
        /**
         * Sets the direction of the ray.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        setDir(dir: Float64Array): void;
        /**
         * Sets the direction of the ray.
         * @param {goog.vec.AnyType} dir The new direction.
         */
        setDir(dir: number[]): void;
    
        /**
         * Returns true if this ray is equal to the other ray.
         * @param {goog.vec.Ray} other The other ray.
         * @return {boolean} True if this ray is equal to the other ray.
         */
        equals(other: goog.vec.Ray): boolean;
    }
}
