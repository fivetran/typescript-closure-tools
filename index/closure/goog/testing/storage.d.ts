// Generated Wed Apr 30 16:40:04 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/storage/mechanism.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />

declare module 'goog.testing.storage' {

    /**
     * Creates a fake iterable mechanism.
     *
     * @constructor
     * @extends {goog.storage.mechanism.IterableMechanism}
     * @final
     */
    class FakeMechanism extends goog.storage.mechanism.IterableMechanism {
        /**
         * Creates a fake iterable mechanism.
         *
         * @constructor
         * @extends {goog.storage.mechanism.IterableMechanism}
         * @final
         */
        constructor();
    
        /** @override */
        set(): void;
    
        /** @override */
        get(): void;
    
        /** @override */
        remove(): void;
    
        /** @override */
        __iterator__(): void;
    }
}

