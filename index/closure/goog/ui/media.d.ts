// Generated Wed Apr 30 16:35:01 PDT 2014

/// <reference path="../../goog.d.ts" />
/// <reference path="../../goog/a11y/aria.d.ts" />
/// <reference path="../../goog/array.d.ts" />
/// <reference path="../../goog/asserts.d.ts" />
/// <reference path="../../goog/debug.d.ts" />
/// <reference path="../../goog/disposable.d.ts" />
/// <reference path="../../goog/dom.d.ts" />
/// <reference path="../../goog/events.d.ts" />
/// <reference path="../../goog/functions.d.ts" />
/// <reference path="../../goog/iter.d.ts" />
/// <reference path="../../goog/labs/useragent.d.ts" />
/// <reference path="../../goog/log.d.ts" />
/// <reference path="../../goog/math.d.ts" />
/// <reference path="../../goog/object.d.ts" />
/// <reference path="../../goog/reflect.d.ts" />
/// <reference path="../../goog/string.d.ts" />
/// <reference path="../../goog/structs.d.ts" />
/// <reference path="../../goog/style.d.ts" />
/// <reference path="../../goog/ui.d.ts" />
/// <reference path="../../goog/useragent.d.ts" />

declare module 'goog.ui.media.FlashObject' {

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

declare module 'goog.ui.media.FlickrSet' {

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

declare module 'goog.ui.media.FlickrSetModel' {

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

declare module 'goog.ui.media.GoogleVideo' {

    /**
     * A static convenient method to construct a goog.ui.media.Media control out of
     * a GoogleVideo model. It sets it as the data model goog.ui.media.GoogleVideo
     * renderer uses, sets the states supported by the renderer, and returns a
     * Control that binds everything together. This is what you should be using for
     * constructing GoogleVideo videos, except if you need finer control over the
     * configuration.
     *
     * @param {goog.ui.media.GoogleVideoModel} dataModel The GoogleVideo data model.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @return {goog.ui.media.Media} A Control binded to the GoogleVideo renderer.
     */
    function newControl(dataModel: goog.ui.media.GoogleVideoModel, opt_domHelper?: goog.dom.DomHelper): goog.ui.media.Media;

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     *
     * @type {string}
     */
    var CSS_CLASS: string;
}

declare module 'goog.ui.media.GoogleVideoModel' {

    /**
     * A auxiliary static method that parses a GoogleVideo URL, extracting the ID of
     * the video, and builds a GoogleVideoModel.
     *
     * @param {string} googleVideoUrl A GoogleVideo video URL.
     * @param {string=} opt_caption An optional caption of the GoogleVideo video.
     * @param {string=} opt_description An optional description of the GoogleVideo
     *     video.
     * @param {boolean=} opt_autoplay Whether to autoplay video.
     * @return {goog.ui.media.GoogleVideoModel} The data model that represents the
     *     GoogleVideo URL.
     * @see goog.ui.media.GoogleVideoModel.getVideoId()
     * @throws Error in case the parsing fails.
     */
    function newInstance(googleVideoUrl: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean): goog.ui.media.GoogleVideoModel;

    /**
     * The opposite of {@code goog.ui.media.GoogleVideo.newInstance}: it takes a
     * videoId and returns a GoogleVideo URL.
     *
     * @param {string} videoId The GoogleVideo video ID.
     * @return {string} The GoogleVideo URL.
     */
    function buildUrl(videoId: string): string;

    /**
     * An auxiliary method that builds URL of the flash movie to be embedded,
     * out of the GoogleVideo video id.
     *
     * @param {string} videoId The GoogleVideo video ID.
     * @param {boolean=} opt_autoplay Whether the flash movie should start playing
     *     as soon as it is shown, or if it should show a 'play' button.
     * @return {string} The flash URL to be embedded on the page.
     */
    function buildFlashUrl(videoId: string, opt_autoplay?: boolean): string;
}

declare module 'goog.ui.media.MediaModel' {

    /**
     * The supported media mime types, a subset of the media types found here:
     * {@link http://www.iana.org/assignments/media-types/} and here
     * {@link http://en.wikipedia.org/wiki/Internet_media_type}
     * @enum {string}
     */
    enum MimeType { HTML, PLAIN, FLASH, JPEG, GIF, PNG } 

    /**
     * Supported mediums, found here:
     * {@link http://video.search.yahoo.com/mrss}
     * @enum {string}
     */
    enum Medium { IMAGE, AUDIO, VIDEO, DOCUMENT, EXECUTABLE } 

    /**
     * Constructs a thumbnail containing details of the thumbnail's image URL and
     * optionally its size.
     * @param {string} url The URL of the thumbnail's image.
     * @param {goog.math.Size=} opt_size The size of the thumbnail's image if known.
     * @constructor
     * @final
     */
    class Thumbnail {
        /**
         * Constructs a thumbnail containing details of the thumbnail's image URL and
         * optionally its size.
         * @param {string} url The URL of the thumbnail's image.
         * @param {goog.math.Size=} opt_size The size of the thumbnail's image if known.
         * @constructor
         * @final
         */
        constructor(url: string, opt_size?: goog.math.Size);
    
        /**
         * Gets the thumbnail URL.
         * @return {string} The thumbnail's image URL.
         */
        getUrl(): string;
    
        /**
         * Sets the thumbnail URL.
         * @param {string} url The thumbnail's image URL.
         * @return {goog.ui.media.MediaModel.Thumbnail} The object itself, used for
         *     chaining.
         */
        setUrl(url: string): goog.ui.media.MediaModel.Thumbnail;
    
        /**
         * Gets the thumbnail size.
         * @return {goog.math.Size} The size of the thumbnail's image if known.
         */
        getSize(): goog.math.Size;
    
        /**
         * Sets the thumbnail size.
         * @param {goog.math.Size} size The size of the thumbnail's image.
         * @return {goog.ui.media.MediaModel.Thumbnail} The object itself, used for
         *     chaining.
         */
        setSize(size: goog.math.Size): goog.ui.media.MediaModel.Thumbnail;
    }

    /**
     * Constructs a player containing details of the player's URL and
     * optionally its size.
     * @param {string} url The URL of the player.
     * @param {Object=} opt_vars Optional map of arguments to the player.
     * @param {goog.math.Size=} opt_size The size of the player if known.
     * @constructor
     * @final
     */
    class Player {
        /**
         * Constructs a player containing details of the player's URL and
         * optionally its size.
         * @param {string} url The URL of the player.
         * @param {Object=} opt_vars Optional map of arguments to the player.
         * @param {goog.math.Size=} opt_size The size of the player if known.
         * @constructor
         * @final
         */
        constructor(url: string, opt_vars?: Object, opt_size?: goog.math.Size);
    
        /**
         * Gets the player url.
         * @return {string} The thumbnail's image URL.
         */
        getUrl(): string;
    
        /**
         * Sets the player url.
         * @param {string} url The thumbnail's image URL.
         * @return {goog.ui.media.MediaModel.Player} The object itself, used for
         *     chaining.
         */
        setUrl(url: string): goog.ui.media.MediaModel.Player;
    
        /**
         * Gets the player arguments.
         * @return {Object} The media player arguments.
         */
        getVars(): Object;
    
        /**
         * Sets the player arguments.
         * @param {Object} vars The media player arguments.
         * @return {goog.ui.media.MediaModel.Player} The object itself, used for
         *     chaining.
         */
        setVars(vars: Object): goog.ui.media.MediaModel.Player;
    
        /**
         * Gets the size of the player.
         * @return {goog.math.Size} The size of the player if known.
         */
        getSize(): goog.math.Size;
    
        /**
         * Sets the size of the player.
         * @param {goog.math.Size} size The size of the player.
         * @return {goog.ui.media.MediaModel.Player} The object itself, used for
         *     chaining.
         */
        setSize(size: goog.math.Size): goog.ui.media.MediaModel.Player;
    }

    /**
     * A taxonomy to be set that gives an indication of the type of media content,
     * and its particular contents.
     * @param {string} scheme The URI that identifies the categorization scheme.
     * @param {string} value The value of the category.
     * @param {string=} opt_label The human readable label that can be displayed in
     *     end user applications.
     * @constructor
     * @final
     */
    class Category {
        /**
         * A taxonomy to be set that gives an indication of the type of media content,
         * and its particular contents.
         * @param {string} scheme The URI that identifies the categorization scheme.
         * @param {string} value The value of the category.
         * @param {string=} opt_label The human readable label that can be displayed in
         *     end user applications.
         * @constructor
         * @final
         */
        constructor(scheme: string, value: string, opt_label?: string);
    
        /**
         * Gets the category scheme.
         * @return {string} The category scheme URI.
         */
        getScheme(): string;
    
        /**
         * Sets the category scheme.
         * @param {string} scheme The category's scheme.
         * @return {goog.ui.media.MediaModel.Category} The object itself, used for
         *     chaining.
         */
        setScheme(scheme: string): goog.ui.media.MediaModel.Category;
    
        /**
         * Gets the categor's value.
         * @return {string} The category's value.
         */
        getValue(): string;
    
        /**
         * Sets the category value.
         * @param {string} value The category value to be set.
         * @return {goog.ui.media.MediaModel.Category} The object itself, used for
         *     chaining.
         */
        setValue(value: string): goog.ui.media.MediaModel.Category;
    
        /**
         * Gets the label of the category.
         * @return {string} The label of the category.
         */
        getLabel(): string;
    
        /**
         * Sets the label of the category.
         * @param {string} label The label of the category.
         * @return {goog.ui.media.MediaModel.Category} The object itself, used for
         *     chaining.
         */
        setLabel(label: string): goog.ui.media.MediaModel.Category;
    }

    /**
     * Indicates an entity that has contributed to a media object. Based on
     * 'media.credit' in the rss spec.
     * @param {string} value The name of the entity being credited.
     * @param {goog.ui.media.MediaModel.Credit.Role=} opt_role The role the entity
     *     played.
     * @param {goog.ui.media.MediaModel.Credit.Scheme=} opt_scheme The URI that
     *     identifies the role scheme.
     * @constructor
     * @final
     */
    class Credit {
        /**
         * Indicates an entity that has contributed to a media object. Based on
         * 'media.credit' in the rss spec.
         * @param {string} value The name of the entity being credited.
         * @param {goog.ui.media.MediaModel.Credit.Role=} opt_role The role the entity
         *     played.
         * @param {goog.ui.media.MediaModel.Credit.Scheme=} opt_scheme The URI that
         *     identifies the role scheme.
         * @constructor
         * @final
         */
        constructor(value: string, opt_role?: goog.ui.media.MediaModel.Credit.Role, opt_scheme?: goog.ui.media.MediaModel.Credit.Scheme);
    
        /**
         * Gets the name of the entity being credited.
         * @return {string} The name of the entity.
         */
        getValue(): string;
    
        /**
         * Sets the value of the credit object.
         * @param {string} value The value.
         * @return {goog.ui.media.MediaModel.Credit} The object itself.
         */
        setValue(value: string): goog.ui.media.MediaModel.Credit;
    
        /**
         * Gets the role of the entity being credited.
         * @return {goog.ui.media.MediaModel.Credit.Role|undefined} The role of the
         *     entity.
         */
        getRole(): any /*goog.ui.media.MediaModel.Credit.Role|any (undefined)*/;
    
        /**
         * Sets the role of the credit object.
         * @param {goog.ui.media.MediaModel.Credit.Role} role The role.
         * @return {goog.ui.media.MediaModel.Credit} The object itself.
         */
        setRole(role: goog.ui.media.MediaModel.Credit.Role): goog.ui.media.MediaModel.Credit;
    
        /**
         * Gets the scheme of the credit object.
         * @return {goog.ui.media.MediaModel.Credit.Scheme|undefined} The URI that
         *     identifies the role scheme.
         */
        getScheme(): any /*goog.ui.media.MediaModel.Credit.Scheme|any (undefined)*/;
    
        /**
         * Sets the scheme of the credit object.
         * @param {goog.ui.media.MediaModel.Credit.Scheme} scheme The scheme.
         * @return {goog.ui.media.MediaModel.Credit} The object itself.
         */
        setScheme(scheme: goog.ui.media.MediaModel.Credit.Scheme): goog.ui.media.MediaModel.Credit;
    }

    /**
     * A reference to the subtitle URI for a media object.
     * Implements the 'media.subTitle' in the rss spec.
     *
     * @param {string} href The subtitle's URI.
     *     to fetch the subtitle file.
     * @param {string} lang An RFC 3066 language.
     * @param {string} type The MIME type of the URI.
     * @constructor
     * @final
     */
    class SubTitle {
        /**
         * A reference to the subtitle URI for a media object.
         * Implements the 'media.subTitle' in the rss spec.
         *
         * @param {string} href The subtitle's URI.
         *     to fetch the subtitle file.
         * @param {string} lang An RFC 3066 language.
         * @param {string} type The MIME type of the URI.
         * @constructor
         * @final
         */
        constructor(href: string, lang: string, type: string);
    
        /**
         * Sets the href for the subtitle object.
         * @param {string} href The subtitle's URI.
         * @return {goog.ui.media.MediaModel.SubTitle} The object itself.
         */
        setHref(href: string): goog.ui.media.MediaModel.SubTitle;
    
        /**
         * Get the href for the subtitle object.
         * @return {string} href The subtitle's URI.
         */
        getHref(): string;
    
        /**
         * Sets the language for the subtitle object.
         * @param {string} lang The RFC 3066 language.
         * @return {goog.ui.media.MediaModel.SubTitle} The object itself.
         */
        setLang(lang: string): goog.ui.media.MediaModel.SubTitle;
    
        /**
         * Get the lang for the subtitle object.
         * @return {string} lang The RFC 3066 language.
         */
        getLang(): string;
    
        /**
         * Sets the type for the subtitle object.
         * @param {string} type The MIME type.
         * @return {goog.ui.media.MediaModel.SubTitle} The object itself.
         */
        setType(type: string): goog.ui.media.MediaModel.SubTitle;
    
        /**
         * Get the type for the subtitle object.
         * @return {string} type The MIME type.
         */
        getType(): string;
    }
}

declare module 'goog.ui.media.MediaModel.Credit' {

    /**
     * The types of known roles.
     * @enum {string}
     */
    enum Role { UPLOADER, OWNER } 

    /**
     * The types of known schemes.
     * @enum {string}
     */
    enum Scheme { EUROPEAN_BROADCASTING, YAHOO, YOUTUBE } 
}

declare module 'goog.ui.media.Mp3' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     *
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * Regular expression to check if a given URL is a valid mp3 URL.
     *
     * Copied from http://go/markdownlite.js.
    
     *
     * NOTE(user): although it would be easier to use goog.string.endsWith('.mp3'),
     * in the future, we want to provide media inlining, which is basically getting
     * a text and replacing all mp3 references with an mp3 player, so it makes sense
     * to share the same regular expression to match everything.
     *
     * @type {RegExp}
     */
    var MATCHER: RegExp;

    /**
     * A static convenient method to construct a goog.ui.media.Media control out of
     * a mp3 URL. It checks the mp3 URL, sets it as the data model
     * goog.ui.media.Mp3 renderer uses, sets the states supported by the renderer,
     * and returns a Control that binds everything together. This is what you
     * should be using for constructing Mp3 videos, except if you need more fine
     * control over the configuration.
     *
     * @param {goog.ui.media.MediaModel} dataModel A media model that must contain
     *     an mp3 url on {@code dataModel.getUrl}.
     * @param {goog.dom.DomHelper=} opt_domHelper Optional DOM helper, used for
     *     document interaction.
     * @return {goog.ui.media.Media} A goog.ui.Control subclass with the mp3
     *     renderer.
     */
    function newControl(dataModel: goog.ui.media.MediaModel, opt_domHelper?: goog.dom.DomHelper): goog.ui.media.Media;

    /**
     * A static method that sets which flash URL this class should use. Use this if
     * you want to host your own flash mp3 player.
     *
     * @param {string} flashUrl The URL of the flash mp3 player.
     */
    function setFlashUrl(flashUrl: string): void;

    /**
     * A static method that builds a URL that will contain the flash player that
     * will play the {@code mp3Url}.
     *
     * @param {string} mp3Url The URL of the mp3 music.
     * @return {string} An URL of a flash player that will know how to play the
     *     given {@code mp3Url}.
     */
    function buildFlashUrl(mp3Url: string): string;
}

declare module 'goog.ui.media.Photo' {

    /**
     * Default CSS class to be applied to the root element of components rendered
     * by this renderer.
     *
     * @type {string}
     */
    var CSS_CLASS: string;

    /**
     * A static convenient method to construct a goog.ui.media.Media control out of
     * a photo {@code goog.ui.media.MediaModel}. It sets it as the data model
     * goog.ui.media.Photo renderer uses, sets the states supported by the renderer,
     * and returns a Control that binds everything together. This is what you
     * should be using for constructing Photos, except if you need finer control
     * over the configuration.
     *
     * @param {goog.ui.media.MediaModel} dataModel The photo data model.
     * @return {goog.ui.media.Media} A goog.ui.Control subclass with the photo
     *     renderer.
     */
    function newControl(dataModel: goog.ui.media.MediaModel): goog.ui.media.Media;
}

declare module 'goog.ui.media.PicasaAlbum' {

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

declare module 'goog.ui.media.PicasaAlbumModel' {

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

declare module 'goog.ui.media.Vimeo' {

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

declare module 'goog.ui.media.VimeoModel' {

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

declare module 'goog.ui.media.Youtube' {

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

declare module 'goog.ui.media.YoutubeModel' {

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

declare module 'goog.ui.media' {

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
    class FlashObject extends goog.ui.Component {
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
        addFlashVars(map: any /*goog.structs.Map|Object*/): goog.ui.media.FlashObject;
    
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
        setFlashVars(flashVar: any /*goog.structs.Map|Object|string*/, opt_value?: string): goog.ui.media.FlashObject;
    
        /**
         * @return {goog.structs.Map} The current flash variables.
         */
        getFlashVars(): goog.structs.Map;
    
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
         * Writes the Flash embedding {@code HTMLObjectElement} to this components root
         * element and adds listeners for all events to handle them consistently.
         * @override
         */
        enterDocument(): void;
    
        /**
         * Creates the DOM structure.
         *
         * @override
         */
        createDom(): void;
    
        /**
         * @return {HTMLObjectElement} The flash element or null if the element can't
         *     be found.
         */
        getFlashElement(): HTMLObjectElement;
    
        /** @override */
        disposeInternal(): void;
    
        /**
         * @return {boolean} whether the SWF has finished loading or not.
         */
        isLoaded(): boolean;
    }

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
    
        /**
         * Creates the initial DOM structure of the flickr set, which is basically a
         * the flash object pointing to a flickr set player.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {Element} The DOM structure that represents this control.
         * @override
         */
        createDom(c: goog.ui.Control): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
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

    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a GoogleVideo specific
     * media renderer.
     *
     * This class knows how to parse GoogleVideo URLs, and render the DOM structure
     * of GoogleVideo video players. This class is meant to be used as a singleton
     * static stateless class, that takes {@code goog.ui.media.Media} instances and
     * renders it. It expects {@code goog.ui.media.Media.getModel} to return a well
     * formed, previously constructed, GoogleVideo video id, which is the data model
     * this renderer will use to construct the DOM structure.
     * {@see goog.ui.media.GoogleVideo.newControl} for a example of constructing a
     * control with this renderer.
     *
     * This design is patterned after http://go/closure_control_subclassing
     *
     * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class GoogleVideo extends goog.ui.media.MediaRenderer {
        /**
         * Subclasses a goog.ui.media.MediaRenderer to provide a GoogleVideo specific
         * media renderer.
         *
         * This class knows how to parse GoogleVideo URLs, and render the DOM structure
         * of GoogleVideo video players. This class is meant to be used as a singleton
         * static stateless class, that takes {@code goog.ui.media.Media} instances and
         * renders it. It expects {@code goog.ui.media.Media.getModel} to return a well
         * formed, previously constructed, GoogleVideo video id, which is the data model
         * this renderer will use to construct the DOM structure.
         * {@see goog.ui.media.GoogleVideo.newControl} for a example of constructing a
         * control with this renderer.
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
    
        /**
         * Creates the initial DOM structure of the GoogleVideo video, which is
         * basically a the flash object pointing to a GoogleVideo video player.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {Element} The DOM structure that represents this control.
         * @override
         */
        createDom(c: goog.ui.Control): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         *
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * The {@code goog.ui.media.GoogleVideo} media data model. It stores a required
     * {@code videoId} field, sets the GoogleVideo URL, and allows a few optional
     * parameters.
     *
     * @param {string} videoId The GoogleVideo video id.
     * @param {string=} opt_caption An optional caption of the GoogleVideo video.
     * @param {string=} opt_description An optional description of the GoogleVideo
     *     video.
     * @param {boolean=} opt_autoplay Whether to autoplay video.
     * @constructor
     * @extends {goog.ui.media.MediaModel}
     * @final
     */
    class GoogleVideoModel extends goog.ui.media.MediaModel {
        /**
         * The {@code goog.ui.media.GoogleVideo} media data model. It stores a required
         * {@code videoId} field, sets the GoogleVideo URL, and allows a few optional
         * parameters.
         *
         * @param {string} videoId The GoogleVideo video id.
         * @param {string=} opt_caption An optional caption of the GoogleVideo video.
         * @param {string=} opt_description An optional description of the GoogleVideo
         *     video.
         * @param {boolean=} opt_autoplay Whether to autoplay video.
         * @constructor
         * @extends {goog.ui.media.MediaModel}
         * @final
         */
        constructor(videoId: string, opt_caption?: string, opt_description?: string, opt_autoplay?: boolean);
    
        /**
         * Gets the GoogleVideo video id.
         * @return {string} The GoogleVideo video id.
         */
        getVideoId(): string;
    }

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
         * Builds the common DOM structure of medias. Builds an outer div, and appends
         * a child div with the {@code goog.ui.Control.getContent} content. Marks the
         * caption with a {@code this.getClassClass()} + '-caption' css flag, so that
         * specific renderers can hide/show the caption as desired.
         *
         * @param {goog.ui.Control} control The control instance.
         * @return {Element} The DOM structure that represents control.
         * @override
         */
        createDom(control: goog.ui.Control): Element;
    
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

    /**
     * An base data value class for all media data models.
     *
     * MediaModels are exact matches to the fields defined in the Yahoo RSS media
     * specification {@link http://search.yahoo.com/mrss/}.
     *
     * The current common data shared by medias is to have URLs, mime types,
     * captions, descriptions, thumbnails and players. Some of these may not be
     * available, or applications may not want to render them, so {@code null}
     * values are allowed. {@code goog.ui.media.MediaRenderer} checks whether the
     * values are available before creating DOMs for them.
     *
     * TODO(user): support asynchronous data models by subclassing
     * {@link goog.events.EventTarget} or {@link goog.ds.DataNode}. Understand why
     * {@link http://goto/datanode} is not available in closure. Add setters to
     * MediaModel once this is supported.
     *
     * @param {string=} opt_url An optional URL of the media.
     * @param {string=} opt_caption An optional caption of the media.
     * @param {string=} opt_description An optional description of the media.
     * @param {goog.ui.media.MediaModel.MimeType=} opt_type The type of the media.
     * @param {goog.ui.media.MediaModel.Medium=} opt_medium The medium of the media.
     * @param {number=} opt_duration The duration of the media in seconds.
     * @param {number=} opt_width The width of the media in pixels.
     * @param {number=} opt_height The height of the media in pixels.
     * @constructor
     */
    class MediaModel {
        /**
         * An base data value class for all media data models.
         *
         * MediaModels are exact matches to the fields defined in the Yahoo RSS media
         * specification {@link http://search.yahoo.com/mrss/}.
         *
         * The current common data shared by medias is to have URLs, mime types,
         * captions, descriptions, thumbnails and players. Some of these may not be
         * available, or applications may not want to render them, so {@code null}
         * values are allowed. {@code goog.ui.media.MediaRenderer} checks whether the
         * values are available before creating DOMs for them.
         *
         * TODO(user): support asynchronous data models by subclassing
         * {@link goog.events.EventTarget} or {@link goog.ds.DataNode}. Understand why
         * {@link http://goto/datanode} is not available in closure. Add setters to
         * MediaModel once this is supported.
         *
         * @param {string=} opt_url An optional URL of the media.
         * @param {string=} opt_caption An optional caption of the media.
         * @param {string=} opt_description An optional description of the media.
         * @param {goog.ui.media.MediaModel.MimeType=} opt_type The type of the media.
         * @param {goog.ui.media.MediaModel.Medium=} opt_medium The medium of the media.
         * @param {number=} opt_duration The duration of the media in seconds.
         * @param {number=} opt_width The width of the media in pixels.
         * @param {number=} opt_height The height of the media in pixels.
         * @constructor
         */
        constructor(opt_url?: string, opt_caption?: string, opt_description?: string, opt_type?: goog.ui.media.MediaModel.MimeType, opt_medium?: goog.ui.media.MediaModel.Medium, opt_duration?: number, opt_width?: number, opt_height?: number);
    
        /**
         * Gets the URL of this media.
         * @return {string|undefined} The URL of the media.
         */
        getUrl(): any /*string|any (undefined)*/;
    
        /**
         * Sets the URL of this media.
         * @param {string} url The URL of the media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setUrl(url: string): goog.ui.media.MediaModel;
    
        /**
         * Gets the caption of this media.
         * @return {string|undefined} The caption of the media.
         */
        getCaption(): any /*string|any (undefined)*/;
    
        /**
         * Sets the caption of this media.
         * @param {string} caption The caption of the media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setCaption(caption: string): goog.ui.media.MediaModel;
    
        /**
         * Gets the media mime type.
         * @return {goog.ui.media.MediaModel.MimeType|undefined} The media mime type.
         */
        getType(): any /*goog.ui.media.MediaModel.MimeType|any (undefined)*/;
    
        /**
         * Sets the media mime type.
         * @param {goog.ui.media.MediaModel.MimeType} type The media mime type.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setType(type: goog.ui.media.MediaModel.MimeType): goog.ui.media.MediaModel;
    
        /**
         * Gets the media medium.
         * @return {goog.ui.media.MediaModel.Medium|undefined} The media medium.
         */
        getMedium(): any /*goog.ui.media.MediaModel.Medium|any (undefined)*/;
    
        /**
         * Sets the media medium.
         * @param {goog.ui.media.MediaModel.Medium} medium The media medium.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setMedium(medium: goog.ui.media.MediaModel.Medium): goog.ui.media.MediaModel;
    
        /**
         * Gets the description of this media.
         * @return {string|undefined} The description of the media.
         */
        getDescription(): any /*string|any (undefined)*/;
    
        /**
         * Sets the description of this media.
         * @param {string} description The description of the media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setDescription(description: string): goog.ui.media.MediaModel;
    
        /**
         * Gets the thumbnail urls.
         * @return {Array.<goog.ui.media.MediaModel.Thumbnail>} The list of thumbnails.
         */
        getThumbnails(): goog.ui.media.MediaModel.Thumbnail[];
    
        /**
         * Sets the thumbnail list.
         * @param {Array.<goog.ui.media.MediaModel.Thumbnail>} thumbnails The list of
         *     thumbnail.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setThumbnails(thumbnails: goog.ui.media.MediaModel.Thumbnail[]): goog.ui.media.MediaModel;
    
        /**
         * Gets the duration of the media.
         * @return {number|undefined} The duration in seconds.
         */
        getDuration(): any /*number|any (undefined)*/;
    
        /**
         * Sets duration of the media.
         * @param {number} duration The duration of the media, in seconds.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setDuration(duration: number): goog.ui.media.MediaModel;
    
        /**
         * Gets the width of the media in pixels.
         * @return {number|undefined} The width in pixels.
         */
        getWidth(): any /*number|any (undefined)*/;
    
        /**
         * Sets the width of the media.
         * @param {number} width The width of the media, in pixels.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setWidth(width: number): goog.ui.media.MediaModel;
    
        /**
         * Gets the height of the media in pixels.
         * @return {number|undefined} The height in pixels.
         */
        getHeight(): any /*number|any (undefined)*/;
    
        /**
         * Sets the height of the media.
         * @param {number} height The height of the media, in pixels.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setHeight(height: number): goog.ui.media.MediaModel;
    
        /**
         * Gets the player data.
         * @return {goog.ui.media.MediaModel.Player|undefined} The media player data.
         */
        getPlayer(): any /*goog.ui.media.MediaModel.Player|any (undefined)*/;
    
        /**
         * Sets the player data.
         * @param {goog.ui.media.MediaModel.Player} player The media player data.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setPlayer(player: goog.ui.media.MediaModel.Player): goog.ui.media.MediaModel;
    
        /**
         * Gets the categories of the media.
         * @return {Array.<goog.ui.media.MediaModel.Category>} The categories of the
         *     media.
         */
        getCategories(): goog.ui.media.MediaModel.Category[];
    
        /**
         * Sets the categories of the media
         * @param {Array.<goog.ui.media.MediaModel.Category>} categories The categories
         *     of the media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setCategories(categories: goog.ui.media.MediaModel.Category[]): goog.ui.media.MediaModel;
    
        /**
         * Finds the first category with the given scheme.
         * @param {string} scheme The scheme to search for.
         * @return {goog.ui.media.MediaModel.Category} The category that has the
         *     given scheme. May be null.
         */
        findCategoryWithScheme(scheme: string): goog.ui.media.MediaModel.Category;
    
        /**
         * Gets the credits of the media.
         * @return {!Array.<goog.ui.media.MediaModel.Credit>} The credits of the media.
         */
        getCredits(): goog.ui.media.MediaModel.Credit[];
    
        /**
         * Sets the credits of the media
         * @param {!Array.<goog.ui.media.MediaModel.Credit>} credits The credits of the
         *     media.
         * @return {!goog.ui.media.MediaModel} The object itself, used for chaining.
         */
        setCredits(credits: goog.ui.media.MediaModel.Credit[]): goog.ui.media.MediaModel;
    
        /**
         * Finds all credits with the given role.
         * @param {string} role The role to search for.
         * @return {!Array.<!goog.ui.media.MediaModel.Credit>} An array of credits
         *     with the given role. May be empty.
         */
        findCreditsWithRole(role: string): goog.ui.media.MediaModel.Credit[];
    
        /**
         * Gets the subtitles for the media.
         * @return {Array.<goog.ui.media.MediaModel.SubTitle>} The subtitles.
         */
        getSubTitles(): goog.ui.media.MediaModel.SubTitle[];
    
        /**
         * Sets the subtitles for the media
         * @param {Array.<goog.ui.media.MediaModel.SubTitle>} subtitles The subtitles.
         * @return {!goog.ui.media.MediaModel} The object itself.
         */
        setSubTitles(subtitles: goog.ui.media.MediaModel.SubTitle[]): goog.ui.media.MediaModel;
    }

    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a Mp3 specific media
     * renderer.
     *
     * This class knows how to parse mp3 URLs, and render the DOM structure
     * of mp3 flash players. This class is meant to be used as a singleton static
     * stateless class, that takes {@code goog.ui.media.Media} instances and renders
     * it. It expects {@code goog.ui.media.Media.getModel} to return a well formed,
     * previously checked, mp3 URL {@see goog.ui.media.PicasaAlbum.parseUrl},
     * which is the data model this renderer will use to construct the DOM
     * structure. {@see goog.ui.media.PicasaAlbum.newControl} for an example of
     * constructing a control with this renderer.
     *
     * This design is patterned after http://go/closure_control_subclassing
     *
     * It uses {@link goog.ui.media.FlashObject} to embed the flash object.
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class Mp3 extends goog.ui.media.MediaRenderer {
        /**
         * Subclasses a goog.ui.media.MediaRenderer to provide a Mp3 specific media
         * renderer.
         *
         * This class knows how to parse mp3 URLs, and render the DOM structure
         * of mp3 flash players. This class is meant to be used as a singleton static
         * stateless class, that takes {@code goog.ui.media.Media} instances and renders
         * it. It expects {@code goog.ui.media.Media.getModel} to return a well formed,
         * previously checked, mp3 URL {@see goog.ui.media.PicasaAlbum.parseUrl},
         * which is the data model this renderer will use to construct the DOM
         * structure. {@see goog.ui.media.PicasaAlbum.newControl} for an example of
         * constructing a control with this renderer.
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
    
        /**
         * Creates the initial DOM structure of a mp3 video, which is basically a
         * the flash object pointing to a flash mp3 player.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {Element} A DOM structure that represents the control.
         * @override
         */
        createDom(c: goog.ui.Control): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

    /**
     * Subclasses a goog.ui.media.MediaRenderer to provide a Photo specific media
     * renderer. Provides a base class for any other renderer that wants to display
     * photos.
     *
     * This class is meant to be used as a singleton static stateless class, that
     * takes {@code goog.ui.media.Media} instances and renders it.
     *
     * This design is patterned after
     * http://go/closure_control_subclassing
     *
     * @constructor
     * @extends {goog.ui.media.MediaRenderer}
     * @final
     */
    class Photo extends goog.ui.media.MediaRenderer {
        /**
         * Subclasses a goog.ui.media.MediaRenderer to provide a Photo specific media
         * renderer. Provides a base class for any other renderer that wants to display
         * photos.
         *
         * This class is meant to be used as a singleton static stateless class, that
         * takes {@code goog.ui.media.Media} instances and renders it.
         *
         * This design is patterned after
         * http://go/closure_control_subclassing
         *
         * @constructor
         * @extends {goog.ui.media.MediaRenderer}
         * @final
         */
        constructor();
    
        /**
         * Creates the initial DOM structure of a photo.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {Element} A DOM structure that represents the control.
         * @override
         */
        createDom(c: goog.ui.Control): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
    }

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
    
        /**
         * Creates the initial DOM structure of the picasa album, which is basically a
         * the flash object pointing to a flash picasa album player.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {Element} The DOM structure that represents the control.
         * @override
         */
        createDom(c: goog.ui.Control): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
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
    
        /**
         * Creates the initial DOM structure of the vimeo video, which is basically a
         * the flash object pointing to a vimeo video player.
         *
         * @param {goog.ui.Control} c The media control.
         * @return {Element} The DOM structure that represents this control.
         * @override
         */
        createDom(c: goog.ui.Control): Element;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
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
    
        /**
         * Changes the state of a {@code control}. Currently only changes the DOM
         * structure when the youtube movie is SELECTED (by default fired by a MOUSEUP
         * on the thumbnail), which means we have to embed the youtube flash video and
         * play it.
         *
         * @param {goog.ui.Control} c The media control.
         * @param {goog.ui.Component.State} state The state to be set or cleared.
         * @param {boolean} enable Whether the state is enabled or disabled.
         * @override
         */
        setState(c: goog.ui.Control, state: goog.ui.Component.State, enable: boolean): void;
    
        /**
         * Returns the CSS class to be applied to the root element of components
         * rendered using this renderer.
         *
         * @return {string} Renderer-specific CSS class.
         * @override
         */
        getCssClass(): string;
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

