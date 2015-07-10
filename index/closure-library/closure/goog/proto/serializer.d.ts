/// <reference path="../../../globals.d.ts" />
/// <reference path="../json/json.d.ts" />

declare module goog.proto {

    class Serializer extends Serializer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Serializer__Class extends goog.json.Serializer__Class  { 
    
            /**
             * Object that can serialize objects or values to a protocol buffer string.
             * @constructor
             * @extends {goog.json.Serializer}
             * @final
             */
            constructor();
    } 
    
}
