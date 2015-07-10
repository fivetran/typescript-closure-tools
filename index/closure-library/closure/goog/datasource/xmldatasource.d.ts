/// <reference path="../../../globals.d.ts" />
/// <reference path="./datasource.d.ts" />

declare module goog.ds {

    class XmlDataSource extends XmlDataSource__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class XmlDataSource__Class extends goog.ds.DataNode__Class  { 
    
            /**
             * Data source whose backing is an xml node
             *
             * @param {Node} node The XML node. Can be null.
             * @param {goog.ds.XmlDataSource} parent Parent of XML element. Can be null.
             * @param {string=} opt_name The name of this node relative to the parent node.
             *
             * @extends {goog.ds.DataNode}
             * @constructor
             */
            constructor(node: Node, parent: goog.ds.XmlDataSource, opt_name?: string);
    } 
    

    class XmlHttpDataSource extends XmlHttpDataSource__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class XmlHttpDataSource__Class extends goog.ds.XmlDataSource__Class  { 
    
            /**
             * Data source whose backing is an XMLHttpRequest,
             *
             * A URI of an empty string will mean that no request is made
             * and the data source will be a single, empty node.
             *
             * @param {(string,goog.Uri)} uri URL of the XMLHttpRequest.
             * @param {string} name Name of the datasource.
             *
             * implements goog.ds.XmlHttpDataSource.
             * @constructor
             * @extends {goog.ds.XmlDataSource}
             * @final
             */
            constructor(uri: any /*missing*/, name: string);
    } 
    
}
