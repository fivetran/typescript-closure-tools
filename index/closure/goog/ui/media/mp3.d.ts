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

declare module goog.ui.media {

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
    }
}

declare module goog.ui.media.Mp3 {

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

