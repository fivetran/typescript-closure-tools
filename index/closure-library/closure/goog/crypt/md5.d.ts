/// <reference path="../../../globals.d.ts" />
/// <reference path="./hash.d.ts" />

declare module goog.crypt {

    class Md5 extends Md5.__Class { }
    module Md5 {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.crypt.Hash.__Class {
    
            /**
             * MD5 cryptographic hash constructor.
             * @constructor
             * @extends {goog.crypt.Hash}
             * @final
             * @struct
             */
            constructor();
        }
    }
}
