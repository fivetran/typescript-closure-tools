/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
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
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/editor/defines.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product.d.ts" />
/// <reference path="../../../../closure/goog/useragent/product_isversion.d.ts" />
/// <reference path="../../../../closure/goog/editor/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/editor/style.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/dom/rangeendpoint.d.ts" />
/// <reference path="../../../../closure/goog/dom/iter.d.ts" />
/// <reference path="../../../../closure/goog/editor/node.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/dom/savedrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/savedcaretrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagiterator.d.ts" />
/// <reference path="../../../../closure/goog/dom/abstractrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/textrangeiterator.d.ts" />
/// <reference path="../../../../closure/goog/string/stringbuffer.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/abstractrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/w3crange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/webkitrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/ierange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/geckorange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/operarange.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserrange/browserrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/textrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/abstractmultirange.d.ts" />
/// <reference path="../../../../closure/goog/dom/controlrange.d.ts" />
/// <reference path="../../../../closure/goog/dom/multirange.d.ts" />
/// <reference path="../../../../closure/goog/dom/range.d.ts" />
/// <reference path="../../../../closure/goog/editor/range.d.ts" />
/// <reference path="../../../../closure/goog/editor/table.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/editor/command.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/editor/plugin.d.ts" />

declare module goog.editor.plugins {

    /**
     * Plugin that adds support for table creation and editing commands.
     * @constructor
     * @extends {goog.editor.Plugin}
     * @final
     */
    class TableEditor extends goog.editor.Plugin {
        /**
         * Plugin that adds support for table creation and editing commands.
         * @constructor
         * @extends {goog.editor.Plugin}
         * @final
         */
        constructor();
    
        /**
         * Adds a function to filter out non-user-editable tables.
         * @param {function(Element):boolean} func A function to decide whether the
         *   table element could be editable by the user or not.
         */
        addIsTableEditableFunction(func: (_0: Element) => boolean): void;
    }
}

declare module goog.editor.plugins.TableEditor {

    /**
     * Commands supported by goog.editor.plugins.TableEditor.
     * @enum {string}
     */
    enum COMMAND { TABLE, INSERT_ROW_AFTER, INSERT_ROW_BEFORE, INSERT_COLUMN_AFTER, INSERT_COLUMN_BEFORE, REMOVE_ROWS, REMOVE_COLUMNS, SPLIT_CELL, MERGE_CELLS, REMOVE_TABLE } 
}

