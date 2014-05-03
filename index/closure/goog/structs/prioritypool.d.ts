// Generated Sat May  3 12:13:02 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/structs/queue.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/structs/pool.d.ts" />
/// <reference path="../../goog/structs/node.d.ts" />
/// <reference path="../../goog/structs/heap.d.ts" />
/// <reference path="../../goog/structs/priorityqueue.d.ts" />

declare module goog.structs {

    /**
     * A generic pool class. If max is greater than min, an error is thrown.
     * @param {number=} opt_minCount Min. number of objects (Default: 1).
     * @param {number=} opt_maxCount Max. number of objects (Default: 10).
     * @constructor
     * @extends {goog.structs.Pool.<VALUE>}
     * @template VALUE
     */
    class PriorityPool<VALUE> extends goog.structs.Pool<VALUE> {
        /**
         * A generic pool class. If max is greater than min, an error is thrown.
         * @param {number=} opt_minCount Min. number of objects (Default: 1).
         * @param {number=} opt_maxCount Max. number of objects (Default: 10).
         * @constructor
         * @extends {goog.structs.Pool.<VALUE>}
         * @template VALUE
         */
        constructor(opt_minCount?: number, opt_maxCount?: number);
    }
}

