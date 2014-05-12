/// <reference path="../../../globals.d.ts" />
/// <reference path="./vec3.d.ts" />
/// <reference path="./vec.d.ts" />

declare module goog.vec {

    class Ray extends Ray.__Class { }
    module Ray {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {

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
            set(origin: goog.vec.Float32, dir: goog.vec.Float32): void;
            /**
             * Sets the origin and direction of the ray.
             * @param {goog.vec.AnyType} origin The new origin.
             * @param {goog.vec.AnyType} dir The new direction.
             */
            set(origin: goog.vec.Float32, dir: goog.vec.Number): void;
            /**
             * Sets the origin and direction of the ray.
             * @param {goog.vec.AnyType} origin The new origin.
             * @param {goog.vec.AnyType} dir The new direction.
             */
            set(origin: goog.vec.Number, dir: goog.vec.Float32): void;
            /**
             * Sets the origin and direction of the ray.
             * @param {goog.vec.AnyType} origin The new origin.
             * @param {goog.vec.AnyType} dir The new direction.
             */
            set(origin: goog.vec.Number, dir: goog.vec.Number): void;

            /**
             * Sets the origin of the ray.
             * @param {goog.vec.AnyType} origin the new origin.
             */
            setOrigin(origin: goog.vec.Float32): void;
            /**
             * Sets the origin of the ray.
             * @param {goog.vec.AnyType} origin the new origin.
             */
            setOrigin(origin: goog.vec.Number): void;

            /**
             * Sets the direction of the ray.
             * @param {goog.vec.AnyType} dir The new direction.
             */
            setDir(dir: goog.vec.Float32): void;
            /**
             * Sets the direction of the ray.
             * @param {goog.vec.AnyType} dir The new direction.
             */
            setDir(dir: goog.vec.Number): void;

            /**
             * Returns true if this ray is equal to the other ray.
             * @param {goog.vec.Ray} other The other ray.
             * @return {boolean} True if this ray is equal to the other ray.
             */
            equals(other: goog.vec.Ray): boolean;
        }
    }
}
