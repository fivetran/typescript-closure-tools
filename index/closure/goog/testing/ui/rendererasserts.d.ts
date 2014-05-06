// Generated Mon May  5 21:15:24 PDT 2014

/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/testing/stacktrace.d.ts" />
/// <reference path="../../../../closure/goog/testing/asserts.d.ts" />

declare module goog.testing.ui.rendererasserts {

    /**
     * Assert that a control renderer constructor doesn't call getCssClass.
     *
     * @param {?function(new:goog.ui.ControlRenderer)} rendererClassUnderTest The
     *     renderer constructor to test.
     */
    function assertNoGetCssClassCallsInConstructor(rendererClassUnderTest: () => any /*missing*/): void;
}

