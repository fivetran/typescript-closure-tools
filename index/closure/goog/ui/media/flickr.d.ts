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
     * Subclasses a goog.ui.media.MediaRenderer to provide a FlickrSet specific
     * media renderer.
     *
     * This class knows how to parse FlickrSet URLs, and render the DOM structure
     * of flickr set players. This class is meant to be used as a singleton static
     * stateless class, that takes {@code goog.ui.media.Media} instances and renders
     * it. It expects {@code goog.ui.media.Media.getModel} to return a well formed,
     * previously constructed, set id {@see goog.ui.media.FlickrSet.parseUrl},
     * which is the data model this renderer will use to construct the DOM
     * structure. {@see goog.ui.media.FlickrSet.newControl} for a example of
     * constructing a control with this renderer.
     *
     * This design is patterned after
     * http://go/closure_control_subclassing
     *
     * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class FlickrSet extends goog.ui.media.MediaRenderer {
        /**
         * Subclasses a goog.ui.media.MediaRenderer to provide a FlickrSet specific
         * media renderer.
         *
         * This class knows how to parse FlickrSet URLs, and render the DOM structure
         * of flickr set players. This class is meant to be used as a singleton static
         * stateless class, that takes {@code goog.ui.media.Media} instances and renders
         * it. It expects {@code goog.ui.media.Media.getModel} to return a well formed,
         * previously constructed, set id {@see goog.ui.media.FlickrSet.parseUrl},
         * which is the data model this renderer will use to construct the DOM
         * structure. {@see goog.ui.media.FlickrSet.newControl} for a example of
         * constructing a control with this renderer.
         *
         * This design is patterned after
         * http://go/closure_control_subclassing
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
     * The {@code goog.ui.media.FlickrAlbum} media data model. It stores a required
     * {@code userId} and {@code setId} fields, sets the flickr Set URL, and
     * allows a few optional parameters.
     *
     * @param {string} userId The flickr userId associated with this set.
     * @param {string} setId The flickr setId associated with this set.
     * @param {string=} opt_caption An optional caption of the flickr set.
     * @param {string=} opt_description An optional description of the flickr set.
     * @constructor
     * @extends {goog.ui.media.MediaModel}
     * @final
     */
    class FlickrSetModel extends goog.ui.media.MediaModel {
        /**
         * The {@code goog.ui.media.FlickrAlbum} media data model. It stores a required
         * {@code userId} and {@code setId} fields, sets the flickr Set URL, and
         * allows a few optional parameters.
         *
         * @param {string} userId The flickr userId associated with this set.
         * @param {string} setId The flickr setId associated with this set.
         * @param {string=} opt_caption An optional caption of the flickr set.
         * @param {string=} opt_description An optional description of the flickr set.
         * @constructor
         * @extends {goog.ui.media.MediaModel}
         * @final
         */
        constructor(userId: string, setId: string, opt_caption?: string, opt_description?: string);
    
        /**
         * Gets the Flickr user id.
         * @return {string} The Flickr user id.
         */
        getUserId(): string;
    
        /**
         * Gets the Flickr set id.
         * @return {string} The Flickr set id.
         */
        getSetId(): string;
    }
}

declare module goog.ui.media.FlickrSet {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     *
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * A static convenient method to construct a goog.ui.media.Media control out of
     * a FlickrSet URL. It extracts the set id information on the URL, sets it
     * as the data model goog.ui.media.FlickrSet renderer uses, sets the states
     * supported by the renderer, and returns a Control that binds everything
     * together. This is what you should be using for constructing FlickrSet videos,
     * except if you need more fine control over the configuration.
     *
     * @param {goog.ui.media.FlickrSetModel} dataModel The Flickr Set data model.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @return {goog.ui.media.Media} A Control binded to the FlickrSet renderer.
     * @throws exception in case {@code flickrSetUrl} is an invalid flickr set URL.
     * TODO(user): use {@link goog.ui.media.MediaModel} once it is checked in.
     */
    function newControl(dataModel: goog.ui.media.FlickrSetModel, opt_domHelper?: goog.dom.DomHelper): goog.ui.media.Media;

    /**
     * A static method that sets which flash URL this class should use. Use this if
     * you want to host your own flash flickr player.
     *
     * @param {string} flashUrl The URL of the flash flickr player.
     */
    function setFlashUrl(flashUrl: string): void;
}

declare module goog.ui.media.FlickrSetModel {

    /**
     * Takes a {@code flickrSetUrl} and extracts the flickr username and set id.
     *
     * @param {string} flickrSetUrl A Flickr set URL.
     * @param {string=} opt_caption An optional caption of the flickr set.
     * @param {string=} opt_description An optional description of the flickr set.
     * @return {goog.ui.media.FlickrSetModel} The data model that represents the
     *     Flickr set.
     * @throws exception in case the parsing fails
     */
    function newInstance(flickrSetUrl: string, opt_caption?: string, opt_description?: string): goog.ui.media.FlickrSetModel;

    /**
     * Takes a flickr username and set id and returns an URL.
     *
     * @param {string} userId The owner of the set.
     * @param {string} setId The set id.
     * @return {string} The URL of the set.
     */
    function buildUrl(userId: string, setId: string): string;
}

