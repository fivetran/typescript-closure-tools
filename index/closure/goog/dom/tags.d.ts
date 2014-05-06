/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />

declare module goog.dom.tags {

    /**
     * Checks whether the tag is void (with no contents allowed and no legal end
     * tag), for example 'br'.
     * @param {string} tagName The tag name in lower case.
     * @return {boolean}
     */
    function isVoidTag(tagName: string): boolean;
}

