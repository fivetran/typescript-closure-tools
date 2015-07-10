/// <reference path="../../../globals.d.ts" />
/// <reference path="../disposable/disposable.d.ts" />
/// <reference path="./container.d.ts" />

declare module goog.ui {

    class ContainerScroller extends ContainerScroller__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class ContainerScroller__Class extends goog.Disposable__Class  { 
    
            /**
             * Plug-on scrolling behavior for a container.
             *
             * Use this to style containers, such as pop-up menus, to be scrolling, and
             * automatically keep the highlighted element visible.
             *
             * To use this, first style your container with the desired overflow
             * properties and height to achieve vertical scrolling.  Also, the scrolling
             * div should have no vertical padding, for two reasons: it is difficult to
             * compensate for, and is generally not what you want due to the strange way
             * CSS handles padding on the scrolling dimension.
             *
             * The container must already be rendered before this may be constructed.
             *
             * @param {!goog.ui.Container} container The container to attach behavior to.
             * @constructor
             * @extends {goog.Disposable}
             * @final
             */
            constructor(container: goog.ui.Container);
    } 
    
}
