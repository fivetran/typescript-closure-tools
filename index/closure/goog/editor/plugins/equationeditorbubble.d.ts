// Generated Wed Apr 30 22:39:19 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/uri/utils.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/dom/classlist.d.ts" />
/// <reference path="../../../goog/ui/equation/imagerenderer.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/math/box.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/math/rect.d.ts" />
/// <reference path="../../../goog/dom/vendor.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/style/style.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/ui/idgenerator.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/ui/component.d.ts" />
/// <reference path="../../../goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../goog/events/eventwrapper.d.ts" />
/// <reference path="../../../goog/events/keycodes.d.ts" />
/// <reference path="../../../goog/events/actioneventwrapper.d.ts" />
/// <reference path="../../../goog/editor/defines.d.ts" />
/// <reference path="../../../goog/useragent/product.d.ts" />
/// <reference path="../../../goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../goog/editor/browserfeature.d.ts" />
/// <reference path="../../../goog/editor/style.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/dom/tagiterator.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/dom/savedrange.d.ts" />
/// <reference path="../../../goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../goog/dom/abstractrange.d.ts" />
/// <reference path="../../../goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../goog/string/stringbuffer.d.ts" />
/// <reference path="../../../goog/dom/rangeendpoint.d.ts" />
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
/// <reference path="../../../goog/editor/command.d.ts" />
/// <reference path="../../../goog/editor/plugin.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/fx/transition.d.ts" />
/// <reference path="../../../goog/ui/popupbase.d.ts" />
/// <reference path="../../../goog/style/bidi.d.ts" />
/// <reference path="../../../goog/positioning/positioning.d.ts" />
/// <reference path="../../../goog/dom/viewportsizemonitor.d.ts" />
/// <reference path="../../../goog/ui/editor/bubble.d.ts" />
/// <reference path="../../../goog/editor/plugins/abstractbubbleplugin.d.ts" />

declare module goog.editor.plugins.equation {

    /**
     * Property bubble plugin for equations.
     *
     * @constructor
     * @extends {goog.editor.plugins.AbstractBubblePlugin}
     * @final
     */
    class EquationBubble extends goog.editor.plugins.AbstractBubblePlugin {
        /**
         * Property bubble plugin for equations.
         *
         * @constructor
         * @extends {goog.editor.plugins.AbstractBubblePlugin}
         * @final
         */
        constructor();
    }
}

