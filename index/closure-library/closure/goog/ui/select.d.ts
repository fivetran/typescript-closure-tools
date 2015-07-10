/// <reference path="../../../globals.d.ts" />
/// <reference path="./menubutton.d.ts" />
/// <reference path="./controlcontent.d.ts" />
/// <reference path="./menu.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />
/// <reference path="./menurenderer.d.ts" />
/// <reference path="../events/event.d.ts" />
/// <reference path="./menuitem.d.ts" />
/// <reference path="./selectionmodel.d.ts" />

declare module goog.ui {

    class Select extends Select__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class Select__Class extends goog.ui.MenuButton__Class  { 
    
            /**
             * A selection control.  Extends {@link goog.ui.MenuButton} by composing a
             * menu with a selection model, and automatically updating the button's caption
             * based on the current selection.
             *
             * Select fires the following events:
             *   CHANGE - after selection changes.
             *
             * @param {goog.ui.ControlContent=} opt_caption Default caption or existing DOM
             *     structure to display as the button's caption when nothing is selected.
             *     Defaults to no caption.
             * @param {goog.ui.Menu=} opt_menu Menu containing selection options.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Renderer used to render or
             *     decorate the control; defaults to {@link goog.ui.MenuButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *     document interaction.
             * @param {!goog.ui.MenuRenderer=} opt_menuRenderer Renderer used to render or
             *     decorate the menu; defaults to {@link goog.ui.MenuRenderer}.
             * @constructor
             * @extends {goog.ui.MenuButton}
             */
            constructor(opt_caption?: goog.ui.ControlContent, opt_menu?: goog.ui.Menu, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper, opt_menuRenderer?: goog.ui.MenuRenderer);
    
            /**
             * Handles {@link goog.events.EventType.SELECT} events raised by the
             * selection model when the selection changes.  Updates the contents of the
             * select button.
             * @param {goog.events.Event} e Selection event to handle.
             */
            handleSelectionChange(e: goog.events.Event): void;
    
            /**
             * Returns the default caption to be shown when no option is selected.
             * @return {goog.ui.ControlContent} Default caption.
             */
            getDefaultCaption(): goog.ui.ControlContent;
    
            /**
             * Sets the default caption to the given string or DOM structure.
             * @param {goog.ui.ControlContent} caption Default caption to be shown
             *    when no option is selected.
             */
            setDefaultCaption(caption: goog.ui.ControlContent): void;
    
            /**
             * Selects the specified option (assumed to be in the select menu), and
             * deselects the previously selected option, if any.  A null argument clears
             * the selection.
             * @param {goog.ui.MenuItem} item Option to be selected (null to clear
             *     the selection).
             */
            setSelectedItem(item: goog.ui.MenuItem): void;
    
            /**
             * Selects the option at the specified index, or clears the selection if the
             * index is out of bounds.
             * @param {number} index Index of the option to be selected.
             */
            setSelectedIndex(index: number): void;
    
            /**
             * Returns the currently selected option.
             * @return {goog.ui.MenuItem} The currently selected option (null if none).
             */
            getSelectedItem(): goog.ui.MenuItem;
    
            /**
             * Returns the index of the currently selected option.
             * @return {number} 0-based index of the currently selected option (-1 if none).
             */
            getSelectedIndex(): number;
    
            /**
             * @return {goog.ui.SelectionModel} The selection model.
             * @protected
             */
            getSelectionModel(): goog.ui.SelectionModel;
    
            /**
             * Updates the caption to be shown in the select button.  If no option is
             * selected and a default caption is set, sets the caption to the default
             * caption; otherwise to the empty string.
             * @protected
             */
            updateCaption(): void;
    } 
    
}
