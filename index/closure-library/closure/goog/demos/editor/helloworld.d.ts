/// <reference path="../../../../globals.d.ts" />
/// <reference path="../../editor/plugin.d.ts" />

declare module goog.demos.editor {

    class HelloWorld extends HelloWorld.__Class { }
    module HelloWorld {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.editor.Plugin.__Class {
    
            /**
             * Plugin to insert 'Hello World!' into an editable field.
             * @constructor
             * @extends {goog.editor.Plugin}
             * @final
             */
            constructor();
        }
    }
}

declare module goog.demos.editor.HelloWorld {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum COMMAND { HELLO_WORLD } 
}
