/// <reference path="../../../../closure/goog/base.d.ts" />
/// <reference path="../../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../../closure/goog/math/coordinate.d.ts" />
/// <reference path="../../../../closure/goog/math/box.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../../closure/goog/math/size.d.ts" />
/// <reference path="../../../../closure/goog/math/rect.d.ts" />
/// <reference path="../../../../closure/goog/dom/vendor.d.ts" />
/// <reference path="../../../../closure/goog/dom/classes.d.ts" />
/// <reference path="../../../../closure/goog/dom/tagname.d.ts" />
/// <reference path="../../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../../closure/goog/dom/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/dom/dom.d.ts" />
/// <reference path="../../../../closure/goog/style/style.d.ts" />
/// <reference path="../../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../../closure/goog/events/eventhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/idgenerator.d.ts" />
/// <reference path="../../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../../closure/goog/ui/component.d.ts" />
/// <reference path="../../../../closure/goog/useragent/flash.d.ts" />
/// <reference path="../../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../../closure/goog/structs/set.d.ts" />
/// <reference path="../../../../closure/goog/debug/debug.d.ts" />
/// <reference path="../../../../closure/goog/debug/logrecord.d.ts" />
/// <reference path="../../../../closure/goog/debug/logbuffer.d.ts" />
/// <reference path="../../../../closure/goog/debug/logger.d.ts" />
/// <reference path="../../../../closure/goog/log/log.d.ts" />

declare module goog.ui.media {

    /**
     * A very simple flash wrapper, that allows you to create flash object
     * programmatically, instead of embedding your own HTML. It extends
     * {@link goog.ui.Component}, which makes it very easy to be embedded on the
     * page.
     *
     * @param {string} flashUrl The flash SWF URL.
     * @param {goog.dom.DomHelper=} opt_domHelper An optional DomHelper.
     * @extends {goog.ui.Component}
     * @constructor
     */
    class FlashObject extends goog.ui._Component {
        /**
         * A very simple flash wrapper, that allows you to create flash object
         * programmatically, instead of embedding your own HTML. It extends
         * {@link goog.ui.Component}, which makes it very easy to be embedded on the
         * page.
         *
         * @param {string} flashUrl The flash SWF URL.
         * @param {goog.dom.DomHelper=} opt_domHelper An optional DomHelper.
         * @extends {goog.ui.Component}
         * @constructor
         */
        constructor(flashUrl: string, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the flash movie Wmode.
         *
         * @param {goog.ui.media.FlashObject.Wmodes} wmode the flash movie Wmode.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setWmode(wmode: goog.ui.media.FlashObject.Wmodes): goog.ui.media.FlashObject;
    
        /**
         * @return {string} Returns the flash movie wmode.
         */
        getWmode(): string;
    
        /**
         * Adds flash variables.
         *
         * @param {goog.structs.Map|Object} map A key-value map of variables.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        addFlashVars(map: any /*goog.structs.Map<any, any>|Object*/): goog.ui.media.FlashObject;
    
        /**
         * Sets a flash variable.
         *
         * @param {string} key The name of the flash variable.
         * @param {string} value The value of the flash variable.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setFlashVar(key: string, value: string): goog.ui.media.FlashObject;
    
        /**
         * Sets flash variables. You can either pass a Map of key->value pairs or you
         * can pass a key, value pair to set a specific variable.
         *
         * TODO(user, martino): Get rid of this method.
         *
         * @deprecated Use {@link #addFlashVars} or {@link #setFlashVar} instead.
         * @param {goog.structs.Map|Object|string} flashVar A map of variables (given
         *    as a goog.structs.Map or an Object literal) or a key to the optional
         *    {@code opt_value}.
         * @param {string=} opt_value The optional value for the flashVar key.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setFlashVars(flashVar: any /*goog.structs.Map<any, any>|Object|string*/, opt_value?: string): goog.ui.media.FlashObject;
    
        /**
         * @return {goog.structs.Map} The current flash variables.
         */
        getFlashVars(): goog.structs.Map<any, any>;
    
        /**
         * Sets the background color of the movie.
         *
         * @param {string} color The new color to be set.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setBackgroundColor(color: string): goog.ui.media.FlashObject;
    
        /**
         * @return {string} The background color of the movie.
         */
        getBackgroundColor(): string;
    
        /**
         * Sets the allowScriptAccess setting of the movie.
         *
         * @param {string} value The new value to be set.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setAllowScriptAccess(value: string): goog.ui.media.FlashObject;
    
        /**
         * @return {string} The allowScriptAccess setting color of the movie.
         */
        getAllowScriptAccess(): string;
    
        /**
         * Sets the width and height of the movie.
         *
         * @param {number|string} width The width of the movie.
         * @param {number|string} height The height of the movie.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setSize(width: any /*number|string*/, height: any /*number|string*/): goog.ui.media.FlashObject;
    
        /**
         * @return {?string} The flash required version.
         */
        getRequiredVersion(): string;
    
        /**
         * Sets the minimum flash required version.
         *
         * @param {?string} version The minimum required version for this movie to work,
         *     or null if you want to unset it.
         * @return {goog.ui.media.FlashObject} The flash object instance for chaining.
         */
        setRequiredVersion(version: string): goog.ui.media.FlashObject;
    
        /**
         * Returns whether this SWF has a minimum required flash version.
         *
         * @return {boolean} Whether a required version was set or not.
         */
        hasRequiredVersion(): boolean;
    
        /**
         * @return {HTMLObjectElement} The flash element or null if the element can't
         *     be found.
         */
        getFlashElement(): HTMLObjectElement;
    
        /**
         * @return {boolean} whether the SWF has finished loading or not.
         */
        isLoaded(): boolean;
    }
}

declare module goog.ui.media.FlashObject {

    /**
     * The different modes for displaying a SWF. Note that different wmodes
     * can result in different bugs in different browsers and also that
     * both OPAQUE and TRANSPARENT will result in a performance hit.
     *
     * @enum {string}
     */
    enum Wmodes { OPAQUE, TRANSPARENT, WINDOW } 

    /**
     * The different levels of allowScriptAccess.
     *
     * Talked about at:
     * http://kb2.adobe.com/cps/164/tn_16494.html
     *
     * @enum {string}
     */
    enum ScriptAccessLevel { ALWAYS, SAME_DOMAIN, NEVER } 

    /**
     * The component CSS namespace.
     *
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * The flash object CSS class.
     *
     * @type {string}
     */
    var FLASH_CSS_CLASS: string;
}

