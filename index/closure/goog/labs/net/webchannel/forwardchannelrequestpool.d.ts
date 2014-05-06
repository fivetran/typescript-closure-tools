/// <reference path="../../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../../closure/goog/structs/set.d.ts" />

declare module goog.labs.net.webChannel {

    /**
     * This class represents the state of all forward channel requests.
     *
     * @param {number=} opt_maxPoolSize The maximum pool size.
     *
     * @constructor
     * @final
     */
    class ForwardChannelRequestPool {
        /**
         * This class represents the state of all forward channel requests.
         *
         * @param {number=} opt_maxPoolSize The maximum pool size.
         *
         * @constructor
         * @final
         */
        constructor(opt_maxPoolSize?: number);
    }
}

