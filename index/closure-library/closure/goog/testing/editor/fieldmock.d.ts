/// <reference path="../../../../globals.d.ts" />
/// <reference path="../loosemock.d.ts" />
/// <reference path="../../dom/abstractrange.d.ts" />

declare module goog.testing.editor {

    class FieldMock extends FieldMock__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class FieldMock__Class extends goog.testing.LooseMock__Class  { 
    
            /**
             * Mock of goog.editor.Field.
             * @param {Window=} opt_window Window the field would edit.  Defaults to
             *     {@code window}.
             * @param {Window=} opt_appWindow "AppWindow" of the field, which can be
             *     different from {@code opt_window} when mocking a field that uses an
             *     iframe. Defaults to {@code opt_window}.
             * @param {goog.dom.AbstractRange=} opt_range An object (mock or real) to be
             *     returned by getRange(). If ommitted, a new goog.dom.Range is created
             *     from the window every time getRange() is called.
             * @constructor
             * @extends {goog.testing.LooseMock}
             * @suppress {missingProperties} Mocks do not fit in the type system well.
             * @final
             */
            constructor(opt_window?: Window, opt_appWindow?: Window, opt_range?: goog.dom.AbstractRange);
    
            /**
             * @return {boolean} Whether we're in modal interaction mode.
             */
            inModalMode(): boolean;
    
            /**
             * @param {boolean} mode Sets whether we're in modal interaction mode.
             */
            setModalMode(mode: boolean): void;
    } 
    
}
