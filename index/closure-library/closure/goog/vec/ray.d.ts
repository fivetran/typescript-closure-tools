/// <reference path="../../../globals.d.ts" />
/// <reference path="./vec3.d.ts" />
/// <reference path="./vec.d.ts" />

declare module goog.vec {

    class Ray extends Ray__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Ray__Class  {

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
             * @type {goog.vec.Vec3.Float64}
             */
            origin: goog.vec.Vec3.Float64;
    
            /**
             * @type {goog.vec.Vec3.Float64}
             */
            dir: goog.vec.Vec3.Float64;
    
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
