/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/editor/defines.d.ts" />
/// <reference path="../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../closure/goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../closure/goog/editor/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../closure/goog/math/box.d.ts" />
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
/// <reference path="../../../closure/goog/editor/icontent.d.ts" />
/// <reference path="../../../closure/goog/cssom/cssom.d.ts" />
/// <reference path="../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../closure/goog/cssom/iframe/style.d.ts" />
/// <reference path="../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../closure/goog/editor/command.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/editor/style.d.ts" />
/// <reference path="../../../closure/goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../closure/goog/dom/iter.d.ts" />
/// <reference path="../../../closure/goog/editor/node.d.ts" />
/// <reference path="../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractrange.d.ts" />
/// <reference path="../../../closure/goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../closure/goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../closure/goog/dom/textrange.d.ts" />
/// <reference path="../../../closure/goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../closure/goog/dom/controlrange.d.ts" />
/// <reference path="../../../closure/goog/dom/multirange.d.ts" />
/// <reference path="../../../closure/goog/dom/range.d.ts" />
/// <reference path="../../../closure/goog/editor/range.d.ts" />
/// <reference path="../../../closure/goog/editor/plugin.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/async/delay.d.ts" />
/// <reference path="../../../closure/goog/editor/field.d.ts" />

declare module goog.editor {

    /**
     * This class encapsulates an editable field that blends in with the
     * surrounding page.
     * To see events fired by this object, please see the base class.
     *
     * @param {string} id An identifer for the field. This is used to find the
     *     field and the element associated with this field.
     * @param {Document=} opt_doc The document that the element with the given
     *     id can be found it.
     * @constructor
     * @extends {goog.editor.Field}
     */
    class SeamlessField extends goog.editor.Field {
        /**
         * This class encapsulates an editable field that blends in with the
         * surrounding page.
         * To see events fired by this object, please see the base class.
         *
         * @param {string} id An identifer for the field. This is used to find the
         *     field and the element associated with this field.
         * @param {Document=} opt_doc The document that the element with the given
         *     id can be found it.
         * @constructor
         * @extends {goog.editor.Field}
         */
        constructor(id: string, opt_doc?: Document);
    
        /**
         * Sets the min height of this editable field's iframe. Only used in growing
         * mode when an iframe is used. This will cause an immediate field sizing to
         * update the field if necessary based on the new min height.
         * @param {number} height The min height specified as a number of pixels,
         *    e.g., 75.
         */
        setMinHeight(height: number): void;
    
        /**
         * @param {boolean} newVal Explicitly set whether the field should be
         *    of a fixed-height. This overrides auto-detection.
         */
        overrideFixedHeight(newVal: boolean): void;
    
        /**
         * Perform all the sizing immediately.
         */
        doFieldSizingGecko(): void;
    
        /**
         * Gets the css rules that should be used to style an iframe's body as if it
         * were the original element that we made editable.
         * @param {boolean=} opt_forceRegeneration Set to true to not read the cached
         * copy and instead completely regenerate the css rules.
         * @return {string} The string containing the css rules to use.
         */
        getIframeableCss(opt_forceRegeneration?: boolean): string;
    
        /**
         * Sets the css rules that should be used inside the editable iframe.
         * Note: to clear the css cache between makeNotEditable/makeEditable,
         * call this with "" as iframeableCss.
         * TODO(user): Unify all these css setting methods + Nick's open
         * CL.  This is getting ridiculous.
         * @param {string} iframeableCss String containing the css rules to use.
         */
        setIframeableCss(iframeableCss: string): void;
    
        /**
         * Applies CSS from the wrapper-div to the field iframe.
         */
        inheritBlendedCSS(): void;
    }
}

