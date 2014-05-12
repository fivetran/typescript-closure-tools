/// <reference path="../../../globals.d.ts" />
/// <reference path="./datasource.d.ts" />

declare module goog.ds {

    class JsDataSource extends JsDataSource.__Class { }
    module JsDataSource {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ds.DataNode.__Class {
    
            /**
             * Data source whose backing is JavaScript data
             *
             * Names that are reserved for system use and shouldn't be used for data node
             * names: eval, toSource, toString, unwatch, valueOf, watch. Behavior is
             * undefined if these names are used.
             *
             * @param {Object} root The root JS node.
             * @param {string} dataName The name of this node relative to the parent node.
             * @param {Object=} opt_parent Optional parent of this JsDataSource.
             *
             * implements goog.ds.DataNode.
             * @constructor
             * @extends {goog.ds.DataNode}
             */
            constructor(root: Object, dataName: string, opt_parent?: Object);
    
            /**
             * The root JS object. Can be null.
             * @type {*}
             * @protected
             * @suppress {underscore|visibility}
             */
            root_: any;
    
            /**
             * Sets the root JS object
             * @param {Object} root The root JS object. Can be null.
             *
             * @protected
             */
            setRoot(root: Object): void;
        }
    }

    class JsPropertyDataSource extends JsPropertyDataSource.__Class { }
    module JsPropertyDataSource {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ds.BaseDataNode.__Class {
    
            /**
             * Data source for JavaScript properties that arent objects. Contains reference
             * to parent object so that you can set the vaule
             *
             * @param {goog.ds.DataNode} parent Parent object.
             * @param {string} dataName Name of this property.
             * @param {goog.ds.DataNode=} opt_parentDataNode The parent data node. If
             *     omitted, assumes that the parent object is the parent data node.
             *
             * @constructor
             * @extends {goog.ds.BaseDataNode}
             * @final
             */
            constructor(parent: goog.ds.DataNode, dataName: string, opt_parentDataNode?: goog.ds.DataNode);
    
            /**
             * Get the value of the node
             * @return {Object} The value of the node, or null if no value.
             */
            get(): Object;
        }
    }
}
