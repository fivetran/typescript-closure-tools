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
/// <reference path="../../../../closure/goog/ui/media/mediamodel.d.ts" />

declare module goog.ui.media {

    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a Picasa specific media
     * renderer.
     *
     * This class knows how to parse picasa URLs, and render the DOM structure
     * of picasa album players and previews. This class is meant to be used as a
     * singleton static stateless class, that takes {@code goog.ui.media.Media}
     * instances and renders it. It expects {@code goog.ui.media.Media.getModel} to
     * return a well formed, previously constructed, object with a user and album
     * fields {@see goog.ui.media.PicasaAlbum.parseUrl}, which is the data model
     * this renderer will use to construct the DOM structure.
     * {@see goog.ui.media.PicasaAlbum.newControl} for a example of constructing a
     * control with this renderer.
     *
     * goog.ui.media.PicasaAlbum currently displays a picasa-made flash slideshow
     * with the photos, but could possibly display a handwritten js photo viewer,
     * in case flash is not available.
     *
     * This design is patterned after http://go/closure_control_subclassing
     *
     * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class PicasaAlbum extends goog.ui.media.MediaRenderer {
        /**
         * Subclasses a goog.ui.media.MediaRenderer to provide a Picasa specific media
         * renderer.
         *
         * This class knows how to parse picasa URLs, and render the DOM structure
         * of picasa album players and previews. This class is meant to be used as a
         * singleton static stateless class, that takes {@code goog.ui.media.Media}
         * instances and renders it. It expects {@code goog.ui.media.Media.getModel} to
         * return a well formed, previously constructed, object with a user and album
         * fields {@see goog.ui.media.PicasaAlbum.parseUrl}, which is the data model
         * this renderer will use to construct the DOM structure.
         * {@see goog.ui.media.PicasaAlbum.newControl} for a example of constructing a
         * control with this renderer.
         *
         * goog.ui.media.PicasaAlbum currently displays a picasa-made flash slideshow
         * with the photos, but could possibly display a handwritten js photo viewer,
         * in case flash is not available.
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
     * The {@code goog.ui.media.PicasaAlbum} media data model. It stores a required
     * {@code userId} and {@code albumId} fields, sets the picasa album URL, and
     * allows a few optional parameters.
     *
     * @param {string} userId The picasa userId associated with this album.
     * @param {string} albumId The picasa albumId associated with this album.
     * @param {string=} opt_authKey An optional authentication key, used on private
     *     albums.
     * @param {string=} opt_caption An optional caption of the picasa album.
     * @param {string=} opt_description An optional description of the picasa album.
     * @param {boolean=} opt_autoplay Whether to autoplay the slideshow.
     * @constructor
     * @extends {goog.ui.media.MediaModel}
     * @final
     */
    class PicasaAlbumModel extends goog.ui.media.MediaModel {
        /**
         * The {@code goog.ui.media.PicasaAlbum} media data model. It stores a required
         * {@code userId} and {@code albumId} fields, sets the picasa album URL, and
         * allows a few optional parameters.
         *
         * @param {string} userId The picasa userId associated with this album.
         * @param {string} albumId The picasa albumId associated with this album.
         * @param {string=} opt_authKey An optional authentication key, used on private
         *     albums.
         * @param {string=} opt_caption An optional caption of the picasa album.
         * @param {string=} opt_description An optional description of the picasa album.
         * @param {boolean=} opt_autoplay Whether to autoplay the slideshow.
         * @constructor
         * @extends {goog.ui.media.MediaModel}
         * @final
         */
        constructor(userId: string, albumId: string, opt_authKey?: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean);
    
        /**
         * Gets the Picasa user id.
         * @return {string} The Picasa user id.
         */
        getUserId(): string;
    
        /**
         * Gets the Picasa album id.
         * @return {string} The Picasa album id.
         */
        getAlbumId(): string;
    
        /**
         * Gets the Picasa album authentication key.
         * @return {?string} The Picasa album authentication key.
         */
        getAuthKey(): string;
    }
}

declare module goog.ui.media.PicasaAlbum {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     *
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * A static convenient method to construct a goog.ui.media.Media control out of
     * a picasa data model. It sets it as the data model goog.ui.media.PicasaAlbum
     * renderer uses, sets the states supported by the renderer, and returns a
     * Control that binds everything together. This is what you should be using for
     * constructing Picasa albums, except if you need finer control over the
     * configuration.
     *
     * @param {goog.ui.media.PicasaAlbumModel} dataModel A picasa album data model.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @return {goog.ui.media.Media} A Control instance binded to the Picasa
     *     renderer.
     */
    function newControl(dataModel: goog.ui.media.PicasaAlbumModel, opt_domHelper?: goog.dom.DomHelper): goog.ui.media.Media;
}

declare module goog.ui.media.PicasaAlbumModel {

    /**
     * Gets a {@code picasaUrl} and extracts the user and album id.
     *
     * @param {string} picasaUrl A picasa album URL.
     * @param {string=} opt_caption An optional caption of the picasa album.
     * @param {string=} opt_description An optional description of the picasa album.
     * @param {boolean=} opt_autoplay Whether to autoplay the slideshow.
     * @return {goog.ui.media.PicasaAlbumModel} The picasa album data model that
     *     represents the picasa URL.
     * @throws exception in case the parsing fails
     */
    function newInstance(picasaUrl: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean): goog.ui.media.PicasaAlbumModel;

    /**
     * The opposite of {@code newInstance}: takes an {@code userId} and an
     * {@code albumId} and builds a URL.
     *
     * @param {string} userId The user that owns the album.
     * @param {string} albumId The album id.
     * @return {string} The URL of the album.
     */
    function buildUrl(userId: string, albumId: string): string;
}

