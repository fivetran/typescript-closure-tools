// Generated Wed Apr 30 22:40:59 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/ui/registry.d.ts" />

declare module goog.ui {

    /**
     * Decorates the element with a suitable {@link goog.ui.Component} instance, if
     * a matching decorator is found.
     * @param {Element} element Element to decorate.
     * @return {goog.ui.Component?} New component instance, decorating the element.
     */
    function decorate(element: Element): goog.ui.Component;
}

