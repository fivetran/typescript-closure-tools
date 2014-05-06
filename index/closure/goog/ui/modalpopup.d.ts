/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/dom/iframe.d.ts" />
/// <reference path="../../../closure/goog/events/focushandler.d.ts" />

declare module goog.ui {

    /**
     * Base class for modal popup UI components. This can also be used as
     * a standalone component to render a modal popup with an empty div.
     *
     * WARNING: goog.ui.ModalPopup is only guaranteed to work when it is rendered
     * directly in the 'body' element.
     *
     * The Html structure of the modal popup is:
     * <pre>
     *  Element         Function              Class-name, goog-modalpopup = default
     * ----------------------------------------------------------------------------
     * - iframe         Iframe mask           goog-modalpopup-bg
     * - div            Background mask       goog-modalpopup-bg
     * - div            Modal popup area      goog-modalpopup
     * - span           Tab catcher
     * </pre>
     * @constructor
     * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
     *     issue by using an iframe instead of a div for bg element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *     goog.ui.Component} for semantics.
     * @extends {goog.ui.Component}
     */
    class ModalPopup extends goog.ui._Component {
        /**
         * Base class for modal popup UI components. This can also be used as
         * a standalone component to render a modal popup with an empty div.
         *
         * WARNING: goog.ui.ModalPopup is only guaranteed to work when it is rendered
         * directly in the 'body' element.
         *
         * The Html structure of the modal popup is:
         * <pre>
         *  Element         Function              Class-name, goog-modalpopup = default
         * ----------------------------------------------------------------------------
         * - iframe         Iframe mask           goog-modalpopup-bg
         * - div            Background mask       goog-modalpopup-bg
         * - div            Modal popup area      goog-modalpopup
         * - span           Tab catcher
         * </pre>
         * @constructor
         * @param {boolean=} opt_useIframeMask Work around windowed controls z-index
         *     issue by using an iframe instead of a div for bg element.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
         *     goog.ui.Component} for semantics.
         * @extends {goog.ui.Component}
         */
        constructor(opt_useIframeMask?: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * @return {string} Base CSS class for this component.
         * @protected
         */
        getCssClass(): string;
    
        /**
         * Returns the background iframe mask element, if any.
         * @return {Element} The background iframe mask element, may return
         *     null/undefined if the modal popup does not use iframe mask.
         */
        getBackgroundIframe(): Element;
    
        /**
         * Returns the background mask element.
         * @return {Element} The background mask element.
         */
        getBackgroundElement(): Element;
    
        /**
         * Allow a shift-tab from the top of the modal popup to the last tabbable
         * element by moving focus to the tab catcher. This should be called after
         * catching a wrapping shift-tab event and before allowing it to propagate, so
         * that focus will land on the last tabbable element before the tab catcher.
         * @protected
         */
        setupBackwardTabWrap(): void;
    
        /**
         * Sets the visibility of the modal popup box and focus to the popup.
         * Lazily renders the component if needed.
         * @param {boolean} visible Whether the modal popup should be visible.
         */
        setVisible(visible: boolean): void;
    
        /**
         * Sets aria-hidden of the rest of the page to restrict keyboard focus.
         * @param {boolean} hide Whether to hide or show the rest of the page.
         * @protected
         */
        setA11YDetectBackground(hide: boolean): void;
    
        /**
         * Sets the transitions to show and hide the popup and background.
         * @param {!goog.fx.Transition} popupShowTransition Transition to show the
         *     popup.
         * @param {!goog.fx.Transition} popupHideTransition Transition to hide the
         *     popup.
         * @param {!goog.fx.Transition} bgShowTransition Transition to show
         *     the background.
         * @param {!goog.fx.Transition} bgHideTransition Transition to hide
         *     the background.
         */
        setTransition(popupShowTransition: goog.fx.Transition, popupHideTransition: goog.fx.Transition, bgShowTransition: goog.fx.Transition, bgHideTransition: goog.fx.Transition): void;
    
        /**
         * Called after the popup is shown. If there is a transition, this
         * will be called after the transition completed or stopped.
         * @protected
         */
        onShow(): void;
    
        /**
         * Called after the popup is hidden. If there is a transition, this
         * will be called after the transition completed or stopped.
         * @protected
         */
        onHide(): void;
    
        /**
         * @return {boolean} Whether the modal popup is visible.
         */
        isVisible(): boolean;
    
        /**
         * Focuses on the modal popup.
         */
        focus(): void;
    
        /**
         * Centers the modal popup in the viewport, taking scrolling into account.
         */
        reposition(): void;
    
        /**
         * Handles focus events.  Makes sure that if the user tabs past the
         * elements in the modal popup, the focus wraps back to the beginning, and that
         * if the user shift-tabs past the front of the modal popup, focus wraps around
         * to the end.
         * @param {goog.events.BrowserEvent} e Browser's event object.
         * @protected
         */
        onFocus(e: goog.events.BrowserEvent): void;
    
        /**
         * Returns the magic tab catcher element used to detect when the user has
         * rolled focus off of the popup content.  It is automatically created during
         * the createDom method() and can be used by subclasses to implement custom
         * tab-loop behavior.
         * @return {Element} The tab catcher element.
         * @protected
         */
        getTabCatcherElement(): Element;
    }
}

