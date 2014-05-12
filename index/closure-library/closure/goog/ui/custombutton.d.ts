/// <reference path="../../../globals.d.ts" />
/// <reference path="./button.d.ts" />
/// <reference path="./buttonrenderer.d.ts" />
/// <reference path="../dom/dom.d.ts" />

declare module goog.ui {

    class CustomButton extends CustomButton.__Class { }
    module CustomButton {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.Button.__Class {
    
            /**
             * A custom button control.  Identical to {@link goog.ui.Button}, except it
             * defaults its renderer to {@link goog.ui.CustomButtonRenderer}.  One could
             * just as easily pass {@code goog.ui.CustomButtonRenderer.getInstance()} to
             * the {@link goog.ui.Button} constructor and get the same result.  Provided
             * for convenience.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *    structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *    render or decorate the button; defaults to
             *    {@link goog.ui.CustomButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(content: string, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A custom button control.  Identical to {@link goog.ui.Button}, except it
             * defaults its renderer to {@link goog.ui.CustomButtonRenderer}.  One could
             * just as easily pass {@code goog.ui.CustomButtonRenderer.getInstance()} to
             * the {@link goog.ui.Button} constructor and get the same result.  Provided
             * for convenience.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *    structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *    render or decorate the button; defaults to
             *    {@link goog.ui.CustomButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(content: Node, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A custom button control.  Identical to {@link goog.ui.Button}, except it
             * defaults its renderer to {@link goog.ui.CustomButtonRenderer}.  One could
             * just as easily pass {@code goog.ui.CustomButtonRenderer.getInstance()} to
             * the {@link goog.ui.Button} constructor and get the same result.  Provided
             * for convenience.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *    structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *    render or decorate the button; defaults to
             *    {@link goog.ui.CustomButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(content: Node[], opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
            /**
             * A custom button control.  Identical to {@link goog.ui.Button}, except it
             * defaults its renderer to {@link goog.ui.CustomButtonRenderer}.  One could
             * just as easily pass {@code goog.ui.CustomButtonRenderer.getInstance()} to
             * the {@link goog.ui.Button} constructor and get the same result.  Provided
             * for convenience.
             *
             * @param {goog.ui.ControlContent} content Text caption or existing DOM
             *    structure to display as the button's caption.
             * @param {goog.ui.ButtonRenderer=} opt_renderer Optional renderer used to
             *    render or decorate the button; defaults to
             *    {@link goog.ui.CustomButtonRenderer}.
             * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM hepler, used for
             *    document interaction.
             * @constructor
             * @extends {goog.ui.Button}
             */
            constructor(content: NodeList, opt_renderer?: goog.ui.ButtonRenderer, opt_domHelper?: goog.dom.DomHelper);
        }
    }
}
