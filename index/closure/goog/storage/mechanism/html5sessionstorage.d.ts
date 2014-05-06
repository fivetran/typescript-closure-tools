/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/mechanism.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/iterablemechanism.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/errorcode.d.ts" />
/// <reference path="../../../../closure/goog/storage/mechanism/html5webstorage.d.ts" />

declare module goog.storage.mechanism {

    /**
     * Provides a storage mechanism that uses HTML5 session storage.
     *
     * @constructor
     * @extends {goog.storage.mechanism.HTML5WebStorage}
     */
    class HTML5SessionStorage extends goog.storage.mechanism.HTML5WebStorage {
        /**
         * Provides a storage mechanism that uses HTML5 session storage.
         *
         * @constructor
         * @extends {goog.storage.mechanism.HTML5WebStorage}
         */
        constructor();
    }
}

