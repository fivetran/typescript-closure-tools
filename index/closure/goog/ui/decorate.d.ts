/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/ui/registry.d.ts" />

declare module goog.ui {

    /**
     * Decorates the element with a suitable {@link goog.ui.Component} instance, if
     * a matching decorator is found.
     * @param {Element} element Element to decorate.
     * @return {goog.ui.Component?} New component instance, decorating the element.
     */
    function decorate(element: Element): goog.ui.Component;
}

