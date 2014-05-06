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
/// <reference path="../../../../closure/goog/ui/media/media.d.ts" />
/// <reference path="../../../../closure/goog/ui/media/mediamodel.d.ts" />
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
/// <reference path="../../../../closure/goog/ui/media/flashobject.d.ts" />

declare module goog.ui.media {

    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a Vimeo specific media
     * renderer.
     *
     * This class knows how to parse Vimeo URLs, and render the DOM structure
     * of vimeo video players. This class is meant to be used as a singleton static
     * stateless class, that takes {@code goog.ui.media.Media} instances and renders
     * it. It expects {@code goog.ui.media.Media.getModel} to return a well formed,
     * previously constructed, vimeoId {@see goog.ui.media.Vimeo.parseUrl}, which is
     * the data model this renderer will use to construct the DOM structure.
     * {@see goog.ui.media.Vimeo.newControl} for a example of constructing a control
     * with this renderer.
     *
     * This design is patterned after http://go/closure_control_subclassing
     *
     * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class Vimeo extends goog.ui.media.MediaRenderer {
        /**
         * Subclasses a goog.ui.media.MediaRenderer to provide a Vimeo specific media
         * renderer.
         *
         * This class knows how to parse Vimeo URLs, and render the DOM structure
         * of vimeo video players. This class is meant to be used as a singleton static
         * stateless class, that takes {@code goog.ui.media.Media} instances and renders
         * it. It expects {@code goog.ui.media.Media.getModel} to return a well formed,
         * previously constructed, vimeoId {@see goog.ui.media.Vimeo.parseUrl}, which is
         * the data model this renderer will use to construct the DOM structure.
         * {@see goog.ui.media.Vimeo.newControl} for a example of constructing a control
         * with this renderer.
         *
         * This design is patterned after http://go/closure_control_subclassing
         *
         * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
         *
         * @constructor
         * @extends {goog.ui.media.MediaRenderer}
         * @final
         */
        constructor();
    }

    /**
     * The {@code goog.ui.media.Vimeo} media data model. It stores a required
     * {@code videoId} field, sets the vimeo URL, and allows a few optional
     * parameters.
     *
     * @param {string} videoId The vimeo video id.
     * @param {string=} opt_caption An optional caption of the vimeo video.
     * @param {string=} opt_description An optional description of the vimeo video.
     * @param {boolean=} opt_autoplay Whether to autoplay video.
     * @constructor
     * @extends {goog.ui.media.MediaModel}
     * @final
     */
    class VimeoModel extends goog.ui.media.MediaModel {
        /**
         * The {@code goog.ui.media.Vimeo} media data model. It stores a required
         * {@code videoId} field, sets the vimeo URL, and allows a few optional
         * parameters.
         *
         * @param {string} videoId The vimeo video id.
         * @param {string=} opt_caption An optional caption of the vimeo video.
         * @param {string=} opt_description An optional description of the vimeo video.
         * @param {boolean=} opt_autoplay Whether to autoplay video.
         * @constructor
         * @extends {goog.ui.media.MediaModel}
         * @final
         */
        constructor(videoId: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean);
    
        /**
         * Gets the Vimeo video id.
         * @return {string} The Vimeo video id.
         */
        getVideoId(): string;
    }
}

declare module goog.ui.media.Vimeo {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     *
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * A static convenient method to construct a goog.ui.media.Media control out of
     * a Vimeo URL. It extracts the videoId information on the URL, sets it
     * as the data model goog.ui.media.Vimeo renderer uses, sets the states
     * supported by the renderer, and returns a Control that binds everything
     * together. This is what you should be using for constructing Vimeo videos,
     * except if you need more fine control over the configuration.
     *
     * @param {goog.ui.media.VimeoModel} dataModel A vimeo video URL.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @return {goog.ui.media.Media} A Control binded to the Vimeo renderer.
     */
    function newControl(dataModel: goog.ui.media.VimeoModel, opt_domHelper?: goog.dom.DomHelper): goog.ui.media.Media;
}

declare module goog.ui.media.VimeoModel {

    /**
     * Takes a {@code vimeoUrl} and extracts the video id.
     *
     * @param {string} vimeoUrl A vimeo video URL.
     * @param {string=} opt_caption An optional caption of the vimeo video.
     * @param {string=} opt_description An optional description of the vimeo video.
     * @param {boolean=} opt_autoplay Whether to autoplay video.
     * @return {goog.ui.media.VimeoModel} The vimeo data model that represents this
     *     URL.
     * @throws exception in case the parsing fails
     */
    function newInstance(vimeoUrl: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean): goog.ui.media.VimeoModel;

    /**
     * The opposite of {@code goog.ui.media.Vimeo.parseUrl}: it takes a videoId
     * and returns a vimeo URL.
     *
     * @param {string} videoId The vimeo video ID.
     * @return {string} The vimeo URL.
     */
    function buildUrl(videoId: string): string;

    /**
     * Builds a flash url from the vimeo {@code videoId}.
     *
     * @param {string} videoId The vimeo video ID.
     * @param {boolean=} opt_autoplay Whether the flash movie should start playing
     *     as soon as it is shown, or if it should show a 'play' button.
     * @return {string} The vimeo flash URL.
     */
    function buildFlashUrl(videoId: string, opt_autoplay?: boolean): string;
}

