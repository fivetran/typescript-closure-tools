/// <reference path="../../../globals.d.ts" />
/// <reference path="./jsdatasource.d.ts" />
/// <reference path="../uri/uri.d.ts" />

declare module goog.ds {

    class JsonDataSource extends JsonDataSource.__Class { }
    module JsonDataSource {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ds.JsDataSource.__Class {
    
            /**
             * Data source whose backing is a JSON-like service, in which
             * retreiving the resource specified by URL with the additional parameter
             * callback. The resource retreived is executable JavaScript that
             * makes a call to the named function with a JavaScript object literal
             * as the only parameter.
             *
             * Example URI could be:
             * http://www.google.com/data/search?q=monkey&callback=mycb
             * which might return the JS:
             * mycb({searchresults:
             *   [{uri: 'http://www.monkey.com', title: 'Site About Monkeys'}]});
             *
             * TODO(user): Evaluate using goog.net.Jsonp here.
             *
             * A URI of an empty string will mean that no request is made
             * and the data source will be a data source with no child nodes
             *
             * @param {string|goog.Uri} uri URI for the request.
             * @param {string} name Name of the datasource.
             * @param {string=} opt_callbackParamName The parameter name that is used to
             *     specify the callback. Defaults to 'callback'.
             *
             * @extends {goog.ds.JsDataSource}
             * @constructor
             * @final
             */
            constructor(uri: string, name: string, opt_callbackParamName?: string);
            /**
             * Data source whose backing is a JSON-like service, in which
             * retreiving the resource specified by URL with the additional parameter
             * callback. The resource retreived is executable JavaScript that
             * makes a call to the named function with a JavaScript object literal
             * as the only parameter.
             *
             * Example URI could be:
             * http://www.google.com/data/search?q=monkey&callback=mycb
             * which might return the JS:
             * mycb({searchresults:
             *   [{uri: 'http://www.monkey.com', title: 'Site About Monkeys'}]});
             *
             * TODO(user): Evaluate using goog.net.Jsonp here.
             *
             * A URI of an empty string will mean that no request is made
             * and the data source will be a data source with no child nodes
             *
             * @param {string|goog.Uri} uri URI for the request.
             * @param {string} name Name of the datasource.
             * @param {string=} opt_callbackParamName The parameter name that is used to
             *     specify the callback. Defaults to 'callback'.
             *
             * @extends {goog.ds.JsDataSource}
             * @constructor
             * @final
             */
            constructor(uri: goog.Uri, name: string, opt_callbackParamName?: string);
    
            /**
             * Receives data from a Json request
             * @param {Object} obj The JSON data.
             */
            receiveData(obj: Object): void;
        }
    }
}
