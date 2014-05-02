// Generated Fri May  2 11:44:13 PDT 2014

/// <reference path="../../goog/base.d.ts" />

declare module goog.disposable {

    /**
     * Interface for a disposable object.  If a instance requires cleanup
     * (references COM objects, DOM notes, or other disposable objects), it should
     * implement this interface (it may subclass goog.Disposable).
     * @interface
     */
    interface IDisposable {
        dispose(): void;
        isDisposed(): boolean;
    }
}

