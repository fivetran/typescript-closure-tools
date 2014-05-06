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
/// <reference path="../../../../closure/goog/dom/classlist.d.ts" />
/// <reference path="../../../../closure/goog/ui/registry.d.ts" />
/// <reference path="../../../../closure/goog/ui/decorate.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/attributes.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/datatables.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/roles.d.ts" />
/// <reference path="../../../../closure/goog/a11y/aria/aria.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlrenderer.d.ts" />
/// <reference path="../../../../closure/goog/ui/controlcontent.d.ts" />
/// <reference path="../../../../closure/goog/events/keycodes.d.ts" />
/// <reference path="../../../../closure/goog/events/keyhandler.d.ts" />
/// <reference path="../../../../closure/goog/ui/control.d.ts" />

declare module goog.ui.media {

    /**
     * Provides the control mechanism of media types.
     *
     * @param {goog.ui.media.MediaModel} dataModel The data model to be used by the
     *     renderer.
     * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or
     *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @constructor
     * @extends {goog.ui.Control}
     * @final
     */
    class Media extends goog.ui.Control {
        /**
         * Provides the control mechanism of media types.
         *
         * @param {goog.ui.media.MediaModel} dataModel The data model to be used by the
         *     renderer.
         * @param {goog.ui.ControlRenderer=} opt_renderer Renderer used to render or
         *     decorate the component; defaults to {@link goog.ui.ControlRenderer}.
         * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
         *     document interaction.
         * @constructor
         * @extends {goog.ui.Control}
         * @final
         */
        constructor(dataModel: goog.ui.media.MediaModel, opt_renderer?: goog.ui.ControlRenderer, opt_domHelper?: goog.dom.DomHelper);
    
        /**
         * Sets the media model to be used on the renderer.
         * @param {goog.ui.media.MediaModel} dataModel The media model the renderer
         *     should use.
         */
        setDataModel(dataModel: goog.ui.media.MediaModel): void;
    
        /**
         * Gets the media model renderer is using.
         * @return {goog.ui.media.MediaModel} The media model being used.
         */
        getDataModel(): goog.ui.media.MediaModel;
    }

    /**
     * Base class of all media renderers. Provides the common renderer functionality
     * of medias.
     *
     * The current common functionality shared by Medias is to have an outer frame
     * that gets highlighted on mouse hover.
     *
     * TODO(user): implement more common UI behavior, as needed.
     *
     * NOTE(user): I am not enjoying how the subclasses are changing their state
     * through setState() ... maybe provide abstract methods like
     * goog.ui.media.MediaRenderer.prototype.preview = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.play = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.minimize = goog.abstractMethod;
     * goog.ui.media.MediaRenderer.prototype.maximize = goog.abstractMethod;
     * and call them on this parent class setState ?
     *
     * @constructor
     * @extends {goog.ui.ControlRenderer}
     */
    class MediaRenderer extends goog.ui.ControlRenderer {
        /**
         * Base class of all media renderers. Provides the common renderer functionality
         * of medias.
         *
         * The current common functionality shared by Medias is to have an outer frame
         * that gets highlighted on mouse hover.
         *
         * TODO(user): implement more common UI behavior, as needed.
         *
         * NOTE(user): I am not enjoying how the subclasses are changing their state
         * through setState() ... maybe provide abstract methods like
         * goog.ui.media.MediaRenderer.prototype.preview = goog.abstractMethod;
         * goog.ui.media.MediaRenderer.prototype.play = goog.abstractMethod;
         * goog.ui.media.MediaRenderer.prototype.minimize = goog.abstractMethod;
         * goog.ui.media.MediaRenderer.prototype.maximize = goog.abstractMethod;
         * and call them on this parent class setState ?
         *
         * @constructor
         * @extends {goog.ui.ControlRenderer}
         */
        constructor();
    
        /**
         * Returns a renamable CSS class name for a numbered thumbnail. The default
         * implementation generates the class names goog-ui-media-thumbnail0,
         * goog-ui-media-thumbnail1, and the generic goog-ui-media-thumbnailn.
         * Subclasses can override this method when their media requires additional
         * specific class names (Applications are supposed to know how many thumbnails
         * media will have).
         *
         * @param {number} index The thumbnail index.
         * @return {string} CSS class name.
         * @protected
         */
        getThumbnailCssName(index: number): string;
    }
}

