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
     * Subclasses a goog.ui.media.MediaRenderer to provide a Youtube specific media
     * renderer.
     *
     * This class knows how to parse youtube urls, and render the DOM structure
     * of youtube video players and previews. This class is meant to be used as a
     * singleton static stateless class, that takes {@code goog.ui.media.Media}
     * instances and renders it. It expects {@code goog.ui.media.Media.getModel} to
     * return a well formed, previously constructed, youtube video id, which is the
     * data model this renderer will use to construct the DOM structure.
     * {@see goog.ui.media.Youtube.newControl} for a example of constructing a
     * control with this renderer.
     *
     * goog.ui.media.Youtube currently supports all {@link goog.ui.Component.State}.
     * It will change its DOM structure between SELECTED and !SELECTED, and rely on
     * CSS definitions on the others. On !SELECTED, the renderer will render a
     * youtube static <img>, with a thumbnail of the video. On SELECTED, the
     * renderer will append to the DOM a flash object, that contains the youtube
     * video.
     *
     * This design is patterned after http://go/closure_control_subclassing
     *
     * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class Youtube extends goog.ui.media.MediaRenderer {
        /**
         * Subclasses a goog.ui.media.MediaRenderer to provide a Youtube specific media
         * renderer.
         *
         * This class knows how to parse youtube urls, and render the DOM structure
         * of youtube video players and previews. This class is meant to be used as a
         * singleton static stateless class, that takes {@code goog.ui.media.Media}
         * instances and renders it. It expects {@code goog.ui.media.Media.getModel} to
         * return a well formed, previously constructed, youtube video id, which is the
         * data model this renderer will use to construct the DOM structure.
         * {@see goog.ui.media.Youtube.newControl} for a example of constructing a
         * control with this renderer.
         *
         * goog.ui.media.Youtube currently supports all {@link goog.ui.Component.State}.
         * It will change its DOM structure between SELECTED and !SELECTED, and rely on
         * CSS definitions on the others. On !SELECTED, the renderer will render a
         * youtube static <img>, with a thumbnail of the video. On SELECTED, the
         * renderer will append to the DOM a flash object, that contains the youtube
         * video.
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
     * The {@code goog.ui.media.Youtube} media data model. It stores a required
     * {@code videoId} field, sets the youtube URL, and allows a few optional
     * parameters.
     *
     * @param {string} videoId The youtube video id.
     * @param {string=} opt_caption An optional caption of the youtube video.
     * @param {string=} opt_description An optional description of the youtube
     *     video.
     * @constructor
     * @extends {goog.ui.media.MediaModel}
     * @final
     */
    class YoutubeModel extends goog.ui.media.MediaModel {
        /**
         * The {@code goog.ui.media.Youtube} media data model. It stores a required
         * {@code videoId} field, sets the youtube URL, and allows a few optional
         * parameters.
         *
         * @param {string} videoId The youtube video id.
         * @param {string=} opt_caption An optional caption of the youtube video.
         * @param {string=} opt_description An optional description of the youtube
         *     video.
         * @constructor
         * @extends {goog.ui.media.MediaModel}
         * @final
         */
        constructor(videoId: string, opt_caption?: string, opt_description?: string);
    
        /**
         * Gets the Youtube video id.
         * @return {string} The Youtube video id.
         */
        getVideoId(): string;
    }
}

declare module goog.ui.media.Youtube {

    /**
     * A static convenient method to construct a goog.ui.media.Media control out of
     * a youtube model. It sets it as the data model goog.ui.media.Youtube renderer
     * uses, sets the states supported by the renderer, and returns a Control that
     * binds everything together. This is what you should be using for constructing
     * Youtube videos, except if you need finer control over the configuration.
     *
     * @param {goog.ui.media.YoutubeModel} youtubeModel The youtube data model.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @return {goog.ui.media.Media} A Control binded to the youtube renderer.
     */
    function newControl(youtubeModel: goog.ui.media.YoutubeModel, opt_domHelper?: goog.dom.DomHelper): goog.ui.media.Media;

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module goog.ui.media.YoutubeModel {

    /**
     * A auxiliary static method that parses a youtube URL, extracting the ID of the
     * video, and builds a YoutubeModel.
     *
     * @param {string} youtubeUrl A youtube URL.
     * @param {string=} opt_caption An optional caption of the youtube video.
     * @param {string=} opt_description An optional description of the youtube
     *     video.
     * @return {goog.ui.media.YoutubeModel} The data model that represents the
     *     youtube URL.
     * @see goog.ui.media.YoutubeModel.getVideoId()
     * @throws Error in case the parsing fails.
     */
    function newInstance(youtubeUrl: string, opt_caption?: string, opt_description?: string): goog.ui.media.YoutubeModel;

    /**
     * The opposite of {@code goog.ui.media.Youtube.newInstance}: it takes a videoId
     * and returns a youtube URL.
     *
     * @param {string} videoId The youtube video ID.
     * @return {string} The youtube URL.
     */
    function buildUrl(videoId: string): string;

    /**
     * A static auxiliary method that builds a static image URL with a preview of
     * the youtube video.
     *
     * NOTE(user): patterned after Gmail's gadgets/youtube,
     *
     * TODO(user): how do I specify the width/height of the resulting image on the
     * url ? is there an official API for http://ytimg.com ?
     *
     * @param {string} youtubeId The youtube video ID.
     * @return {string} An URL that contains an image with a preview of the youtube
     *     movie.
     */
    function getThumbnailUrl(youtubeId: string): string;

    /**
     * A static auxiliary method that builds URL of the flash movie to be embedded,
     * out of the youtube video id.
     *
     * @param {string} videoId The youtube video ID.
     * @param {boolean=} opt_autoplay Whether the flash movie should start playing
     *     as soon as it is shown, or if it should show a 'play' button.
     * @return {string} The flash URL to be embedded on the page.
     */
    function getFlashUrl(videoId: string, opt_autoplay?: boolean): string;
}

