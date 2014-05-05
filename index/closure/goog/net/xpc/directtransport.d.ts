// Generated Sun May  4 18:14:15 PDT 2014

/// <reference path="../../../goog/base.d.ts" />
/// <reference path="../../../goog/string/string.d.ts" />
/// <reference path="../../../goog/labs/useragent/util.d.ts" />
/// <reference path="../../../goog/dom/nodetype.d.ts" />
/// <reference path="../../../goog/debug/error.d.ts" />
/// <reference path="../../../goog/asserts/asserts.d.ts" />
/// <reference path="../../../goog/array/array.d.ts" />
/// <reference path="../../../goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../goog/useragent/useragent.d.ts" />
/// <reference path="../../../goog/structs/collection.d.ts" />
/// <reference path="../../../goog/object/object.d.ts" />
/// <reference path="../../../goog/structs/structs.d.ts" />
/// <reference path="../../../goog/math/math.d.ts" />
/// <reference path="../../../goog/functions/functions.d.ts" />
/// <reference path="../../../goog/iter/iter.d.ts" />
/// <reference path="../../../goog/structs/map.d.ts" />
/// <reference path="../../../goog/structs/set.d.ts" />
/// <reference path="../../../goog/debug/debug.d.ts" />
/// <reference path="../../../goog/debug/logrecord.d.ts" />
/// <reference path="../../../goog/debug/logbuffer.d.ts" />
/// <reference path="../../../goog/debug/logger.d.ts" />
/// <reference path="../../../goog/log/log.d.ts" />
/// <reference path="../../../goog/net/xpc/xpc.d.ts" />
/// <reference path="../../../goog/disposable/idisposable.d.ts" />
/// <reference path="../../../goog/disposable/disposable.d.ts" />
/// <reference path="../../../goog/events/eventid.d.ts" />
/// <reference path="../../../goog/events/listenable.d.ts" />
/// <reference path="../../../goog/events/listener.d.ts" />
/// <reference path="../../../goog/events/listenermap.d.ts" />
/// <reference path="../../../goog/events/browserfeature.d.ts" />
/// <reference path="../../../goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../goog/events/eventtype.d.ts" />
/// <reference path="../../../goog/events/event.d.ts" />
/// <reference path="../../../goog/reflect/reflect.d.ts" />
/// <reference path="../../../goog/events/browserevent.d.ts" />
/// <reference path="../../../goog/events/events.d.ts" />
/// <reference path="../../../goog/events/eventtarget.d.ts" />
/// <reference path="../../../goog/timer/timer.d.ts" />
/// <reference path="../../../goog/events/eventhandler.d.ts" />
/// <reference path="../../../goog/net/xpc/crosspagechannelrole.d.ts" />
/// <reference path="../../../goog/dom/classes.d.ts" />
/// <reference path="../../../goog/dom/tagname.d.ts" />
/// <reference path="../../../goog/math/size.d.ts" />
/// <reference path="../../../goog/dom/browserfeature.d.ts" />
/// <reference path="../../../goog/math/coordinate.d.ts" />
/// <reference path="../../../goog/dom/dom.d.ts" />
/// <reference path="../../../goog/net/xpc/transport.d.ts" />
/// <reference path="../../../goog/promise/resolver.d.ts" />
/// <reference path="../../../goog/testing/watchers.d.ts" />
/// <reference path="../../../goog/async/nexttick.d.ts" />
/// <reference path="../../../goog/async/run.d.ts" />
/// <reference path="../../../goog/promise/thenable.d.ts" />
/// <reference path="../../../goog/promise/promise.d.ts" />

declare module goog.net.xpc {

    /**
     * A direct window to window method transport.
     *
     * If the windows are in the same security context, this transport calls
     * directly into the other window without using any additional mechanism. This
     * is mainly used in scenarios where you want to optionally use a cross domain
     * transport in cross security context situations, or optionally use a direct
     * transport in same security context situations.
     *
     * Note: Global properties are exported by using this transport. One to
     * communicate with the other window by, currently crosswindowmessaging.channel,
     * and by using goog.getUid on window, currently closure_uid_[0-9]+.
     *
     * @param {!goog.net.xpc.CrossPageChannel} channel The channel this
     *     transport belongs to.
     * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
     *     finding the correct window/document. If omitted, uses the current
     *     document.
     * @constructor
     * @extends {Transport}
     */
    class DirectTransport extends Transport {
        /**
         * A direct window to window method transport.
         *
         * If the windows are in the same security context, this transport calls
         * directly into the other window without using any additional mechanism. This
         * is mainly used in scenarios where you want to optionally use a cross domain
         * transport in cross security context situations, or optionally use a direct
         * transport in same security context situations.
         *
         * Note: Global properties are exported by using this transport. One to
         * communicate with the other window by, currently crosswindowmessaging.channel,
         * and by using goog.getUid on window, currently closure_uid_[0-9]+.
         *
         * @param {!goog.net.xpc.CrossPageChannel} channel The channel this
         *     transport belongs to.
         * @param {goog.dom.DomHelper=} opt_domHelper The dom helper to use for
         *     finding the correct window/document. If omitted, uses the current
         *     document.
         * @constructor
         * @extends {Transport}
         */
        constructor(channel: goog.net.xpc.CrossPageChannel, opt_domHelper?: goog.dom.DomHelper);
    }
}

