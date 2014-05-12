/// <reference path="../../../globals.d.ts" />

declare module goog.disposable {

    interface IDisposable {
    
        /**
          * Disposes of the object and its resources.
          * @return {void} Nothing.
          */
        dispose(): void;
    
        /**
          * @return {boolean} Whether the object has been disposed of.
          */
        isDisposed(): boolean;
    }
}
