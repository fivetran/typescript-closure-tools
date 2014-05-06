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
/// <reference path="../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../closure/goog/style/bidi.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/fx/dragger.d.ts" />
/// <reference path="../../../closure/goog/i18n/bidi.d.ts" />
/// <reference path="../../../closure/goog/string/typedstring.d.ts" />
/// <reference path="../../../closure/goog/string/const.d.ts" />
/// <reference path="../../../closure/goog/html/safeurl.d.ts" />
/// <reference path="../../../closure/goog/dom/tags.d.ts" />
/// <reference path="../../../closure/goog/html/safestyle.d.ts" />
/// <reference path="../../../closure/goog/html/safehtml.d.ts" />
/// <reference path="../../../closure/goog/dom/safe.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
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
/// <reference path="../../../closure/goog/ui/modalpopup.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/html/trustedresourceurl.d.ts" />
/// <reference path="../../../closure/goog/html/legacyconversions.d.ts" />
/// <reference path="../../../closure/goog/ui/dialog.d.ts" />

declare module goog.ui {

    /**
     * Creates an object that represents a prompt (used in place of javascript's
     * prompt). The html structure of the prompt is the same as the layout for
     * dialog.js except for the addition of a text box which is placed inside the
     * "Content area" and has the default class-name 'modal-dialog-userInput'
     *
     * @param {string} promptTitle The title of the prompt.
     * @param {string|!goog.html.SafeHtml} promptHtml The HTML body of the prompt.
     *     The variable is trusted and it should be already properly escaped.
     * @param {Function} callback The function to call when the user selects Ok or
     *     Cancel. The function should expect a single argument which represents
     *     what the user entered into the prompt. If the user presses cancel, the
     *     value of the argument will be null.
     * @param {string=} opt_defaultValue Optional default value that should be in
     *     the text box when the prompt appears.
     * @param {string=} opt_class Optional prefix for the classes.
     * @param {boolean=} opt_useIframeForIE For IE, workaround windowed controls
     *     z-index issue by using a an iframe instead of a div for bg element.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
     *    goog.ui.Component} for semantics.
     * @constructor
     * @extends {goog.ui.Dialog}
     */
    class Prompt extends goog.ui.Dialog {
        /**
         * Creates an object that represents a prompt (used in place of javascript's
         * prompt). The html structure of the prompt is the same as the layout for
         * dialog.js except for the addition of a text box which is placed inside the
         * "Content area" and has the default class-name 'modal-dialog-userInput'
         *
         * @param {string} promptTitle The title of the prompt.
         * @param {string|!goog.html.SafeHtml} promptHtml The HTML body of the prompt.
         *     The variable is trusted and it should be already properly escaped.
         * @param {Function} callback The function to call when the user selects Ok or
         *     Cancel. The function should expect a single argument which represents
         *     what the user entered into the prompt. If the user presses cancel, the
         *     value of the argument will be null.
         * @param {string=} opt_defaultValue Optional default value that should be in
         *     the text box when the prompt appears.
         * @param {string=} opt_class Optional prefix for the classes.
         * @param {boolean=} opt_useIframeForIE For IE, workaround windowed controls
         *     z-index issue by using a an iframe instead of a div for bg element.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper; see {@link
         *    goog.ui.Component} for semantics.
         * @constructor
         * @extends {goog.ui.Dialog}
         */
        constructor(promptTitle: string, promptHtml: any /*string|goog.html.SafeHtml*/, callback: Function, opt_defaultValue?: string, opt_class?: string, opt_useIframeForIE?: boolean, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the validation function that takes a string and returns true if the
         * string is accepted, false otherwise.
         * @param {function(string): boolean} fn The validation function to use on user
         *     input.
         */
        setValidationFunction(fn: (_0: string) => boolean): void;
    
        /**
         * @return {HTMLInputElement} The user input element. May be null if the Prompt
         *     has not been rendered.
         */
        getInputElement(): HTMLInputElement;
    
        /**
         * Sets an input decorator function.  This function will be called in
         * #enterDocument and will be passed the input element.  This is useful for
         * attaching handlers to the input element for specific change events,
         * for example.
         * @param {function(Element)} inputDecoratorFn A function to call on the input
         *     element on #enterDocument.
         */
        setInputDecoratorFn(inputDecoratorFn: (_0: Element) => any /*missing*/): void;
    
        /**
         * Set the number of rows in the user input element.
         * A values of 1 means use an <input> element.  If the prompt is already
         * rendered then you cannot change from <input> to <textarea> or vice versa.
         * @param {number} rows Number of rows for user input element.
         * @throws {goog.ui.Component.Error.ALREADY_RENDERED} If the component is
         *    already rendered and an attempt to change between <input> and <textarea>
         *    is made.
         */
        setRows(rows: number): void;
    
        /**
         * @return {number} The number of rows in the user input element.
         */
        getRows(): number;
    
        /**
         * Set the number of cols in the user input element.
         * @param {number} cols Number of cols for user input element.
         */
        setCols(cols: number): void;
    
        /**
         * @return {number} The number of cols in the user input element.
         */
        getCols(): number;
    
        /**
         * Sets the default value of the prompt when it is displayed.
         * @param {string} defaultValue The default value to display.
         */
        setDefaultValue(defaultValue: string): void;
    }
}

