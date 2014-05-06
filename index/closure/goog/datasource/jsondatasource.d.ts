/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/uri/utils.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/uri/uri.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/datasource/datasource.d.ts" />
/// <reference path="../../../closure/goog/datasource/expr.d.ts" />
/// <reference path="../../../closure/goog/datasource/datamanager.d.ts" />
/// <reference path="../../../closure/goog/datasource/jsdatasource.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />

declare module goog.ds {

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
    class JsonDataSource extends goog.ds.JsDataSource {
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
        constructor(uri: any /*string|goog.Uri*/, name: string, opt_callbackParamName?: string);
    
        /**
         * Receives data from a Json request
         * @param {Object} obj The JSON data.
         */
        receiveData(obj: Object): void;
    }
}

