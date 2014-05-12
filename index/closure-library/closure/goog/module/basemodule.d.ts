/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />

declare module goog.module {

    class BaseModule extends BaseModule.__Class { }
    module BaseModule {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.Disposable.__Class {
    
            /**
             * A basic module object that represents a module of Javascript code that can
             * be dynamically loaded.
             *
             * @constructor
             * @extends {goog.Disposable}
             */
            constructor();
    
            /**
             * Performs any load-time initialization that the module requires.
             * @param {Object} context The module context.
             */
            initialize(context: Object): void;
        }
    }
}
