/// <reference path="../../../../globals.d.ts" />
/// <reference path="./media.d.ts" />
/// <reference path="./mediamodel.d.ts" />
/// <reference path="../../dom/dom.d.ts" />

declare module goog.ui.media {

    class FlickrSet extends FlickrSet.__Class { }
    module FlickrSet {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.media.MediaRenderer.__Class {
    
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
    }

    class FlickrSetModel extends FlickrSetModel.__Class { }
    module FlickrSetModel {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class extends goog.ui.media.MediaModel.__Class {
    
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
     * @return {!goog.ui.media.Media} A Control binded to the FlickrSet renderer.
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
     * @return {!goog.ui.media.FlickrSetModel} The data model that represents the
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
