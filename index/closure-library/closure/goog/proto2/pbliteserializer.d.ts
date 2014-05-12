/// <reference path="../../../globals.d.ts" />
/// <reference path="./lazydeserializer.d.ts" />

declare module goog.proto2 {

    class PbLiteSerializer extends PbLiteSerializer.__Class { }
    module PbLiteSerializer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.proto2.LazyDeserializer.__Class {
    
            /**
             * PB-Lite serializer.
             *
             * @constructor
             * @extends {goog.proto2.LazyDeserializer}
             */
            constructor();
    
            /**
             * By default, the proto tag with id 1 will have index 1 in the serialized
             * array.
             *
             * If the serializer is set to use zero-indexing, the tag with id 1 will have
             * index 0.
             *
             * @param {boolean} zeroIndexing Whether this serializer should deal with
             *     0-indexed protos.
             */
            setZeroIndexed(zeroIndexing: boolean): void;
        }
    }
}
