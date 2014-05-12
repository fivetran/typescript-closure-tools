/// <reference path="../../../globals.d.ts" />
/// <reference path="../structs/prioritypool.d.ts" />
/// <reference path="../structs/map.d.ts" />

declare module goog.net {

    class XhrIoPool extends XhrIoPool.__Class { }
    module XhrIoPool {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.structs.PriorityPool.__Class<any> {
    
            /**
             * A pool of XhrIo objects.
             * @param {goog.structs.Map=} opt_headers Map of default headers to add to every
             *     request.
             * @param {number=} opt_minCount Minimum number of objects (Default: 1).
             * @param {number=} opt_maxCount Maximum number of objects (Default: 10).
             * @constructor
             * @extends {goog.structs.PriorityPool}
             */
            constructor(opt_headers?: goog.structs.Map<any, any>, opt_minCount?: number, opt_maxCount?: number);
        }
    }
}
