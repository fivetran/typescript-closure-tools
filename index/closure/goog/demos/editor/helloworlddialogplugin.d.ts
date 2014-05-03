// Generated Sat May  3 12:18:34 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/editor/defines.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../../goog/editor/style.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../goog/dom/iter.d.ts" />
/// <reference path="../../../goog/editor/node.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/dom/savedrange.d.ts" />
/// <reference path="../../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../goog/dom/textrange.d.ts" />
/// <reference path="../../../goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../goog/dom/controlrange.d.ts" />
/// <reference path="../../../goog/dom/multirange.d.ts" />
/// <reference path="../../../goog/dom/range.d.ts" />
/// <reference path="../../../goog/editor/range.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/editor/icontent.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/editor/command.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/editor/plugin.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/async/delay.d.ts" />
/// <reference path="../../../goog/editor/field.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/fx/dragger.d.ts" />
/// <reference path="../../../goog/i18n/bidi.d.ts" />
/// <reference path="../../../goog/string/typedstring.d.ts" />
/// <reference path="../../../goog/string/const.d.ts" />
/// <reference path="../../../goog/html/safeurl.d.ts" />
/// <reference path="../../../goog/dom/tags.d.ts" />
/// <reference path="../../../goog/html/safestyle.d.ts" />
/// <reference path="../../../goog/html/safehtml.d.ts" />
/// <reference path="../../../goog/dom/safe.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/dom/iframe.d.ts" />
/// <reference path="../../../goog/events/focushandler.d.ts" />
/// <reference path="../../../goog/ui/modalpopup.d.ts" />
/// <reference path="../../../goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../goog/html/legacyconversions.d.ts" />
/// <reference path="../../../goog/ui/dialog.d.ts" />
/// <reference path="../../../goog/ui/editor/abstractdialog.d.ts" />
/// <reference path="../../../goog/editor/plugins/abstractdialogplugin.d.ts" />
/// <reference path="../../../goog/demos/editor/helloworlddialog.d.ts" />

declare module goog.demos.editor {

    /**
     * A plugin that opens the hello world dialog.
     * @constructor
     * @extends {goog.editor.plugins.AbstractDialogPlugin}
     * @final
     */
    class HelloWorldDialogPlugin extends goog.editor.plugins.AbstractDialogPlugin {
        /**
         * A plugin that opens the hello world dialog.
         * @constructor
         * @extends {goog.editor.plugins.AbstractDialogPlugin}
         * @final
         */
        constructor();
    }
}

declare module goog.demos.editor.HelloWorldDialogPlugin {

    /**
     * Commands implemented by this plugin.
     * @enum {string}
     */
    enum Command { HELLO_WORLD_DIALOG } 
}

