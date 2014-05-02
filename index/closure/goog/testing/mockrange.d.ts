// Generated Thu May  1 17:26:37 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/dom/savedrange.d.ts" />
/// <reference path="../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../goog/testing/mockinterface.d.ts" />
/// <reference path="../../goog/testing/stacktrace.d.ts" />
/// <reference path="../../goog/testing/asserts.d.ts" />
/// <reference path="../../goog/testing/mockmatchers.d.ts" />
/// <reference path="../../goog/testing/mock.d.ts" />
/// <reference path="../../goog/testing/loosemock.d.ts" />

declare module goog.testing {

    /**
     * LooseMock of goog.dom.AbstractRange. Useful because the mock framework cannot
     * simply create a mock out of an abstract class, and cannot create a mock out
     * of classes that implements __iterator__ because it relies on the default
     * behavior of iterating through all of an object's properties.
     * @constructor
     * @extends {goog.testing.LooseMock}
     * @final
     */
    class MockRange extends goog.testing.LooseMock {
        /**
         * LooseMock of goog.dom.AbstractRange. Useful because the mock framework cannot
         * simply create a mock out of an abstract class, and cannot create a mock out
         * of classes that implements __iterator__ because it relies on the default
         * behavior of iterating through all of an object's properties.
         * @constructor
         * @extends {goog.testing.LooseMock}
         * @final
         */
        constructor();
    }
}

