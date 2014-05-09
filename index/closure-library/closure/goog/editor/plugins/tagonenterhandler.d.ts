/// <reference path="../../../../globals.d.ts" />
/// <reference path="./enterhandler.d.ts" />
/// <reference path="../../dom/tagname.d.ts" />

declare module goog.editor.plugins {

    class TagOnEnterHandler extends goog.editor.plugins.EnterHandler {
    
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
