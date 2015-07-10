/// <reference path="../../../../globals.d.ts" />
/// <reference path="./enterhandler.d.ts" />
/// <reference path="../../dom/tagname.d.ts" />

declare module goog.editor.plugins {

    class TagOnEnterHandler extends TagOnEnterHandler__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class TagOnEnterHandler__Class extends goog.editor.plugins.EnterHandler__Class  { 
    
            /**
             * Plugin to handle enter keys. This subclass normalizes all browsers to use
             * the given block tag on enter.
             * @param {goog.dom.TagName} tag The type of tag to add on enter.
             * @constructor
             * @extends {goog.editor.plugins.EnterHandler}
             */
            constructor(tag: goog.dom.TagName);
    } 
    
}
