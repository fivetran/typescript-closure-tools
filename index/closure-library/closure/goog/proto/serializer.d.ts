/// <reference path="../../../globals.d.ts" />
/// <reference path="../json/json.d.ts" />

declare module goog.proto {

    class Serializer extends Serializer.__Class { }
    module Serializer {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.json.Serializer.__Class {
    
            /**
             * Object that can serialize objects or values to a protocol buffer string.
             * @constructor
             * @extends {goog.json.Serializer}
             * @final
             */
            constructor();
        }
    }
}
