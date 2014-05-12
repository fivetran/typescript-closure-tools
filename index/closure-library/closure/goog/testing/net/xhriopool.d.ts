/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../net/xhriopool.d.ts" />
/// <reference path="./xhrio.d.ts" />

declare module goog.testing.net {

    class XhrIoPool extends XhrIoPool.__Class { }
    module XhrIoPool {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.net.XhrIoPool.__Class {
    
            /**
             * A pool containing a single mock XhrIo object.
             *
             * @param {goog.testing.net.XhrIo=} opt_xhr The mock XhrIo object.
             * @constructor
             * @extends {goog.net.XhrIoPool}
             * @final
             */
            constructor(opt_xhr?: goog.testing.net.XhrIo);
    
            /**
             * Get the mock XhrIo used by this pool.
             *
             * @return {!goog.testing.net.XhrIo} The mock XhrIo.
             */
            getXhr(): goog.testing.net.XhrIo;
        }
    }
}
