// Generated Fri May  2 14:57:23 PDT 2014

/// <reference path="../../goog/base.d.ts" />
/// <reference path="../../goog/dom/nodetype.d.ts" />
/// <reference path="../../goog/debug/error.d.ts" />
/// <reference path="../../goog/string/string.d.ts" />
/// <reference path="../../goog/asserts/asserts.d.ts" />
/// <reference path="../../goog/array/array.d.ts" />
/// <reference path="../../goog/math/math.d.ts" />
/// <reference path="../../goog/math/coordinate.d.ts" />
/// <reference path="../../goog/math/box.d.ts" />
/// <reference path="../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../goog/useragent/useragent.d.ts" />
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
/// <reference path="../../goog/events/eventtype.d.ts" />
/// <reference path="../../goog/editor/defines.d.ts" />
/// <reference path="../../goog/useragent/product.d.ts" />
/// <reference path="../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../goog/editor/style.d.ts" />
/// <reference path="../../goog/iter/iter.d.ts" />
/// <reference path="../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../goog/dom/iter.d.ts" />
/// <reference path="../../goog/editor/node.d.ts" />
/// <reference path="../../goog/structs/collection.d.ts" />
/// <reference path="../../goog/structs/structs.d.ts" />
/// <reference path="../../goog/structs/map.d.ts" />
/// <reference path="../../goog/structs/set.d.ts" />
/// <reference path="../../goog/debug/debug.d.ts" />
/// <reference path="../../goog/debug/logrecord.d.ts" />
/// <reference path="../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../goog/debug/logger.d.ts" />
/// <reference path="../../goog/log/log.d.ts" />
/// <reference path="../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../goog/disposable/disposable.d.ts" />
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
/// <reference path="../../goog/events/eventid.d.ts" />
/// <reference path="../../goog/events/listenable.d.ts" />
/// <reference path="../../goog/events/listener.d.ts" />
/// <reference path="../../goog/events/listenermap.d.ts" />
/// <reference path="../../goog/events/browserfeature.d.ts" />
/// <reference path="../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../goog/events/event.d.ts" />
/// <reference path="../../goog/reflect/reflect.d.ts" />
/// <reference path="../../goog/events/browserevent.d.ts" />
/// <reference path="../../goog/events/events.d.ts" />
/// <reference path="../../goog/events/eventhandler.d.ts" />
/// <reference path="../../goog/events/keycodes.d.ts" />
/// <reference path="../../goog/editor/icontent.d.ts" />
/// <reference path="../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../goog/editor/command.d.ts" />
/// <reference path="../../goog/events/eventtarget.d.ts" />
/// <reference path="../../goog/editor/plugin.d.ts" />
/// <reference path="../../goog/timer/timer.d.ts" />
/// <reference path="../../goog/async/delay.d.ts" />
/// <reference path="../../goog/editor/field.d.ts" />

declare module goog.editor {

    /**
     * Initialize the wrapper, and begin listening to mouse events immediately.
     * @param {goog.editor.Field} fieldObj The editable field being wrapped.
     * @constructor
     * @extends {goog.Disposable}
     */
    class ClickToEditWrapper extends goog.Disposable {
        /**
         * Initialize the wrapper, and begin listening to mouse events immediately.
         * @param {goog.editor.Field} fieldObj The editable field being wrapped.
         * @constructor
         * @extends {goog.Disposable}
         */
        constructor(fieldObj: goog.editor.Field);
    
        /** @return {goog.editor.Field} The field. */
        getFieldObject(): goog.editor.Field;
    
        /** @return {goog.dom.DomHelper} The dom helper of the uneditable element. */
        getOriginalDomHelper(): goog.dom.DomHelper;
    
        /**
         * Initialize listeners when the uneditable field is added to the document.
         * Also sets up lorem ipsum text.
         */
        enterDocument(): void;
    
        /**
         * Destroy listeners when the field is removed from the document.
         */
        exitDocument(): void;
    
        /**
         * Returns the uneditable field element if the field is not yet editable
         * (equivalent to EditableField.getOriginalElement()), and the editable DOM
         * element if the field is currently editable (equivalent to
         * EditableField.getElement()).
         * @return {Element} The element containing the editable field contents.
         */
        getElement(): Element;
    
        /**
         * Focus on the field object.
         * @param {goog.editor.Field} field The field to focus.
         * @protected
         */
        focusOnFieldObj(field: goog.editor.Field): void;
    
        /**
         * Make the field object editable.
         * @param {goog.editor.Field} field The field to make editable.
         * @protected
         */
        makeFieldEditable(field: goog.editor.Field): void;
    }
}

