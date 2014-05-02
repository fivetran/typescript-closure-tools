// Generated Thu May  1 16:40:03 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
/// <reference path="../../goog/editor/defines.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/object/object.d.ts" />
/// <reference path="../../goog/math/size.d.ts" />
/// <reference path="../../goog/math/rect.d.ts" />
/// <reference path="../../goog/dom/vendor.d.ts" />
/// <reference path="../../goog/dom/classes.d.ts" />
/// <reference path="../../goog/dom/tagname.d.ts" />
/// <reference path="../../goog/functions/functions.d.ts" />
/// <reference path="../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../goog/dom/dom.d.ts" />
/// <reference path="../../goog/style/style.d.ts" />
/// <reference path="../../goog/editor/icontent.d.ts" />
/// <reference path="../../goog/cssom/cssom.d.ts" />
/// <reference path="../../goog/dom/classlist.d.ts" />
/// <reference path="../../goog/cssom/iframe/style.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/editor/command.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/editor/style.d.ts" />
/// <reference path="../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../goog/dom/iter.d.ts" />
/// <reference path="../../goog/editor/node.d.ts" />
/// <reference path="../../goog/dom/savedrange.d.ts" />
/// <reference path="../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../goog/dom/textrange.d.ts" />
/// <reference path="../../goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../goog/dom/controlrange.d.ts" />
/// <reference path="../../goog/dom/multirange.d.ts" />
/// <reference path="../../goog/dom/range.d.ts" />
/// <reference path="../../goog/editor/range.d.ts" />
/// <reference path="../../goog/editor/plugin.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/async/delay.d.ts" />
/// <reference path="../../goog/editor/field.d.ts" />

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

