/// <reference path="../../../closure/goog/base.d.ts" />
/// <reference path="../../../closure/goog/dom/nodetype.d.ts" />
/// <reference path="../../../closure/goog/debug/error.d.ts" />
/// <reference path="../../../closure/goog/string/string.d.ts" />
/// <reference path="../../../closure/goog/asserts/asserts.d.ts" />
/// <reference path="../../../closure/goog/disposable/idisposable.d.ts" />
/// <reference path="../../../closure/goog/disposable/disposable.d.ts" />
/// <reference path="../../../closure/goog/events/eventid.d.ts" />
/// <reference path="../../../closure/goog/events/listenable.d.ts" />
/// <reference path="../../../closure/goog/events/listener.d.ts" />
/// <reference path="../../../closure/goog/object/object.d.ts" />
/// <reference path="../../../closure/goog/array/array.d.ts" />
/// <reference path="../../../closure/goog/events/listenermap.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/util.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/engine.d.ts" />
/// <reference path="../../../closure/goog/labs/useragent/browser.d.ts" />
/// <reference path="../../../closure/goog/useragent/useragent.d.ts" />
/// <reference path="../../../closure/goog/events/browserfeature.d.ts" />
/// <reference path="../../../closure/goog/debug/entrypointregistry.d.ts" />
/// <reference path="../../../closure/goog/events/eventtype.d.ts" />
/// <reference path="../../../closure/goog/events/event.d.ts" />
/// <reference path="../../../closure/goog/reflect/reflect.d.ts" />
/// <reference path="../../../closure/goog/events/browserevent.d.ts" />
/// <reference path="../../../closure/goog/events/events.d.ts" />
/// <reference path="../../../closure/goog/events/eventtarget.d.ts" />
/// <reference path="../../../closure/goog/timer/timer.d.ts" />
/// <reference path="../../../closure/goog/structs/collection.d.ts" />
/// <reference path="../../../closure/goog/structs/structs.d.ts" />
/// <reference path="../../../closure/goog/math/math.d.ts" />
/// <reference path="../../../closure/goog/functions/functions.d.ts" />
/// <reference path="../../../closure/goog/iter/iter.d.ts" />
/// <reference path="../../../closure/goog/structs/map.d.ts" />
/// <reference path="../../../closure/goog/structs/set.d.ts" />

declare module goog.spell {

    /**
     * Support class for spell checker components. Provides basic functionality
     * such as word lookup and caching.
     *
     * @param {Function=} opt_lookupFunction Function to use for word lookup. Must
     *     accept an array of words, an object reference and a callback function as
     *     parameters. It must also call the callback function (as a method on the
     *     object), once ready, with an array containing the original words, their
     *     spelling status and optionally an array of suggestions.
     * @param {string=} opt_language Content language.
     * @constructor
     * @extends {goog.events.EventTarget}
     * @final
     */
    class SpellCheck extends goog.events.EventTarget {
        /**
         * Support class for spell checker components. Provides basic functionality
         * such as word lookup and caching.
         *
         * @param {Function=} opt_lookupFunction Function to use for word lookup. Must
         *     accept an array of words, an object reference and a callback function as
         *     parameters. It must also call the callback function (as a method on the
         *     object), once ready, with an array containing the original words, their
         *     spelling status and optionally an array of suggestions.
         * @param {string=} opt_language Content language.
         * @constructor
         * @extends {goog.events.EventTarget}
         * @final
         */
        constructor(opt_lookupFunction?: Function, opt_language?: string);
    
        /**
         * Sets the lookup function.
         *
         * @param {Function} f Function to use for word lookup. Must accept an array of
         *     words, an object reference and a callback function as parameters.
         *     It must also call the callback function (as a method on the object),
         *     once ready, with an array containing the original words, their
         *     spelling status and optionally an array of suggestions.
         */
        setLookupFunction(f: Function): void;
    
        /**
         * Sets language.
         *
         * @param {string=} opt_language Content language.
         */
        setLanguage(opt_language?: string): void;
    
        /**
         * Returns language.
         *
         * @return {string} Content language.
         */
        getLanguage(): string;
    
        /**
         * Checks spelling for a block of text.
         *
         * @param {string} text Block of text to spell check.
         */
        checkBlock(text: string): void;
    
        /**
         * Checks spelling for a single word. Returns the status of the supplied word,
         * or UNKNOWN if it's not cached. If it's not cached the word is added to a
         * queue and checked with the verification implementation with a short delay.
         *
         * @param {string} word Word to check spelling of.
         * @return {goog.spell.SpellCheck.WordStatus} The status of the supplied word,
         *     or UNKNOWN if it's not cached.
         */
        checkWord(word: string): goog.spell.SpellCheck.WordStatus;
    
        /**
         * Processes pending words unless a lookup operation has already been queued or
         * is in progress.
         *
         * @throws {Error}
         */
        processPending(): void;
    
        /**
         * Callback for lookup function.
         *
         * @param {Array.<Array>} data Data array. Each word is represented by an
         *     array containing the word, the status and optionally an array of
         *     suggestions. Passing null indicates that the operation failed.
         * @private
         *
         * Example:
         * obj.lookupCallback_([
         *   ['word', VALID],
         *   ['wrod', INVALID, ['word', 'wood', 'rod']]
         * ]);
         */
        lookupCallback_(data: any[][]): void;
    
        /**
         * Sets a words spelling status.
         *
         * @param {string} word Word to set status for.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @param {Array.<string>=} opt_suggestions Suggestions.
         *
         * Example:
         * obj.setWordStatus('word', VALID);
         * obj.setWordStatus('wrod', INVALID, ['word', 'wood', 'rod']);.
         */
        setWordStatus(word: string, status: goog.spell.SpellCheck.WordStatus, opt_suggestions?: string[]): void;
    
        /**
         * Returns suggestions for the given word.
         *
         * @param {string} word Word to get suggestions for.
         * @return {Array.<string>} An array of suggestions for the given word.
         */
        getSuggestions(word: string): string[];
    }
}

declare module goog.spell.SpellCheck {

    /**
     * Object representing a word changed event. Fired when the status of a word
     * changes.
     *
     * @param {goog.spell.SpellCheck} target Spellcheck object initiating event.
     * @param {string} word Word to set status for.
     * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
     * @extends {goog.events.Event}
     * @constructor
     * @final
     */
    class WordChangedEvent extends goog.events.Event {
        /**
         * Object representing a word changed event. Fired when the status of a word
         * changes.
         *
         * @param {goog.spell.SpellCheck} target Spellcheck object initiating event.
         * @param {string} word Word to set status for.
         * @param {goog.spell.SpellCheck.WordStatus} status Status of word.
         * @extends {goog.events.Event}
         * @constructor
         * @final
         */
        constructor(target: goog.spell.SpellCheck, word: string, status: goog.spell.SpellCheck.WordStatus);
    }

    /**
     * Constants for event names
     *
     * @enum {string}
     */
    enum EventType { READY, ERROR, WORD_CHANGED } 

    /**
     * Codes representing the status of an individual word.
     *
     * @enum {number}
     */
    enum WordStatus { UNKNOWN, VALID, INVALID, IGNORED, CORRECTED } 

    /**
     * Fields for word array in cache.
     *
     * @enum {number}
     */
    enum CacheIndex { STATUS, SUGGESTIONS } 

    /**
     * Regular expression for identifying word boundaries.
     *
     * @type {string}
     */
    var WORD_BOUNDARY_CHARS: string;

    /**
     * Regular expression for identifying word boundaries.
     *
     * @type {RegExp}
     */
    var WORD_BOUNDARY_REGEX: RegExp;

    /**
     * Regular expression for splitting a string into individual words and blocks of
     * separators. Matches zero or one word followed by zero or more separators.
     *
     * @type {RegExp}
     */
    var SPLIT_REGEX: RegExp;
}

