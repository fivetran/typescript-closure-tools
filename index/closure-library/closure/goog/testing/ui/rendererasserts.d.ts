/// <reference path="../../../../globals.d.ts" />

declare module goog.testing.ui.rendererasserts {

    /**
     * Assert that a control renderer constructor doesn't call getCssClass.
     *
     * @param {?function(new:goog.ui.ControlRenderer)} rendererClassUnderTest The
     *     renderer constructor to test.
     */
    function assertNoGetCssClassCallsInConstructor(rendererClassUnderTest: { (): any /*missing*/ }): void;
}
