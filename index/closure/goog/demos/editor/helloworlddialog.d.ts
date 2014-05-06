/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/fx/dragger.d.ts" />
/// <reference path="../../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../../closure/goog/string/typedstring.d.ts" />
/// <reference path="../../../../closure/goog/string/const.d.ts" />
/// <reference path="../../../../closure/goog/html/safeurl.d.ts" />
/// <reference path="../../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../../closure/goog/html/safestyle.d.ts" />
/// <reference path="../../../../closure/goog/html/safehtml.d.ts" />
/// <reference path="../../../../closure/goog/dom/safe.d.ts" />
/// <reference path="../../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/fx/transition.d.ts" />
/// <reference path="../../../../closure/goog/ui/popupbase.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/dom/iframe.d.ts" />
/// <reference path="../../../../closure/goog/events/focushandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/modalpopup.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../../closure/goog/html/legacyconversions.d.ts" />
/// <reference path="../../../../closure/goog/ui/dialog.d.ts" />
/// <reference path="../../../../closure/goog/ui/editor/abstractdialog.d.ts" />

declare module goog.demos.editor {

    /**
     * Creates a dialog to let the user enter a customized hello world message.
     * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
     * dialog's dom structure.
     * @constructor
     * @extends {goog.ui.editor.AbstractDialog}
     * @final
     */
    class HelloWorldDialog extends goog.ui.editor._AbstractDialog {
        /**
         * Creates a dialog to let the user enter a customized hello world message.
         * @param {goog.dom.DomHelper} domHelper DomHelper to be used to create the
         * dialog's dom structure.
         * @constructor
         * @extends {goog.ui.editor.AbstractDialog}
         * @final
         */
        constructor(domHelper: goog.dom.DomHelper);
    }
}

declare module goog.demos.editor.HelloWorldDialog {

    /**
     * OK event object for the hello world dialog.
     * @param {string} message Customized hello world message chosen by the user.
     * @constructor
     * @extends {goog.events.Event}
     * @final
     */
    class OkEvent extends goog.events.Event {
        /**
         * OK event object for the hello world dialog.
         * @param {string} message Customized hello world message chosen by the user.
         * @constructor
         * @extends {goog.events.Event}
         * @final
         */
        constructor(message: string);
    
        /**
         * Customized hello world message chosen by the user.
         * @type {string}
         */
        message: string;
    }
}

