// Generated Wed Apr 30 16:40:46 PDT 2014

/// <reference path="../goog.d.ts" />
/// <reference path="../goog/array.d.ts" />
/// <reference path="../goog/asserts.d.ts" />
/// <reference path="../goog/date.d.ts" />
/// <reference path="../goog/debug.d.ts" />
/// <reference path="../goog/dom.d.ts" />
/// <reference path="../goog/math.d.ts" />
/// <reference path="../goog/string.d.ts" />
/// <reference path="../goog/structs.d.ts" />

declare module 'goog.i18n.bidi' {

    /**
     * Constant that defines whether or not the current locale is a RTL locale.
     * If {@link goog.i18n.bidi.FORCE_RTL} is not true, this constant will default
     * to check that {@link goog.LOCALE} is one of a few major RTL locales.
     *
     * <p>This is designed to be a maximally efficient compile-time constant. For
     * example, for the default goog.LOCALE, compiling
     * "if (goog.i18n.bidi.IS_RTL) alert('rtl') else {}" should produce no code. It
     * is this design consideration that limits the implementation to only
     * supporting a few major RTL locales, as opposed to the broader repertoire of
     * something like goog.i18n.bidi.isRtlLanguage.
     *
     * <p>Since this constant refers to the directionality of the locale, it is up
     * to the caller to determine if this constant should also be used for the
     * direction of the UI.
     *
     * {@see goog.LOCALE}
     *
     * @type {boolean}
     *
     * TODO(user): write a test that checks that this is a compile-time constant.
     */
    var IS_RTL: boolean;

    /**
     * Unicode formatting characters and directionality string constants.
     * @enum {string}
     */
    enum Format { LRE, RLE, PDF, LRM, RLM } 

    /**
     * Directionality enum.
     * @enum {number}
     */
    enum Dir { LTR, RTL, NEUTRAL, UNKNOWN } 

    /**
     * 'right' string constant.
     * @type {string}
     */
    var RIGHT: string;

    /**
     * 'left' string constant.
     * @type {string}
     */
    var LEFT: string;

    /**
     * 'left' if locale is RTL, 'right' if not.
     * @type {string}
     */
    var I18N_RIGHT: string;

    /**
     * 'right' if locale is RTL, 'left' if not.
     * @type {string}
     */
    var I18N_LEFT: string;

    /**
     * Convert a directionality given in various formats to a goog.i18n.bidi.Dir
     * constant. Useful for interaction with different standards of directionality
     * representation.
     *
     * @param {goog.i18n.bidi.Dir|number|boolean|null} givenDir Directionality given
     *     in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LTR, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     * @param {boolean=} opt_noNeutral Whether a givenDir of zero or
     *     goog.i18n.bidi.Dir.NEUTRAL should be treated as null, i.e. unknown, in
     *     order to preserve legacy behavior.
     * @return {?goog.i18n.bidi.Dir} A goog.i18n.bidi.Dir constant matching the
     *     given directionality. If given null, returns null (i.e. unknown).
     */
    function toDir(givenDir: any /*goog.i18n.bidi.Dir|number|boolean|any (null)*/, opt_noNeutral?: boolean): goog.i18n.bidi.Dir;

    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains RTL characters.
     */
    function hasAnyRtl(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Test whether the given string has any RTL characters in it.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the string contains RTL characters.
     * @deprecated Use hasAnyRtl.
     */
    var hasRtlChar: any /*missing*/;

    /**
     * Test whether the given string has any LTR characters in it.
     * @param {string} str The given string that need to be tested.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether the string contains LTR characters.
     */
    function hasAnyLtr(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the first character in the string is RTL or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an RTL char.
     */
    function isRtlChar(str: string): boolean;

    /**
     * Check if the first character in the string is LTR or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is an LTR char.
     */
    function isLtrChar(str: string): boolean;

    /**
     * Check if the first character in the string is neutral or not.
     * @param {string} str The given string that need to be tested.
     * @return {boolean} Whether the first character in str is a neutral char.
     */
    function isNeutralChar(str: string): boolean;

    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     */
    function startsWithRtl(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check whether the first strongly directional character (if any) is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithRtl.
     */
    var isRtlText: any /*missing*/;

    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     */
    function startsWithLtr(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check whether the first strongly directional character (if any) is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR directionality is detected using the first
     *     strongly-directional character method.
     * @deprecated Use startsWithLtr.
     */
    var isLtrText: any /*missing*/;

    /**
     * Check whether the input string either contains no strongly directional
     * characters or looks like a url.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether neutral directionality is detected.
     */
    function isNeutralText(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     */
    function endsWithLtr(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the exit directionality a piece of text is LTR, i.e. if the last
     * strongly-directional character in the string is LTR.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether LTR exit directionality was detected.
     * @deprecated Use endsWithLtr.
     */
    var isLtrExitText: any /*missing*/;

    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     */
    function endsWithRtl(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Check if the exit directionality a piece of text is RTL, i.e. if the last
     * strongly-directional character in the string is RTL.
     * @param {string} str String being checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether RTL exit directionality was detected.
     * @deprecated Use endsWithRtl.
     */
    var isRtlExitText: any /*missing*/;

    /**
     * Check if a BCP 47 / III language code indicates an RTL language, i.e. either:
     * - a language code explicitly specifying one of the right-to-left scripts,
     *   e.g. "az-Arab", or<p>
     * - a language code specifying one of the languages normally written in a
     *   right-to-left script, e.g. "fa" (Farsi), except ones explicitly specifying
     *   Latin or Cyrillic script (which are the usual LTR alternatives).<p>
     * The list of right-to-left scripts appears in the 100-199 range in
     * http://www.unicode.org/iso15924/iso15924-num.html, of which Arabic and
     * Hebrew are by far the most widely used. We also recognize Thaana, N'Ko, and
     * Tifinagh, which also have significant modern usage. The rest (Syriac,
     * Samaritan, Mandaic, etc.) seem to have extremely limited or no modern usage
     * and are not recognized to save on code size.
     * The languages usually written in a right-to-left script are taken as those
     * with Suppress-Script: Hebr|Arab|Thaa|Nkoo|Tfng  in
     * http://www.iana.org/assignments/language-subtag-registry,
     * as well as Central (or Sorani) Kurdish (ckb), Sindhi (sd) and Uyghur (ug).
     * Other subtags of the language code, e.g. regions like EG (Egypt), are
     * ignored.
     * @param {string} lang BCP 47 (a.k.a III) language code.
     * @return {boolean} Whether the language code is an RTL language.
     */
    function isRtlLanguage(lang: string): boolean;

    /**
     * Apply bracket guard using html span tag. This is to address the problem of
     * messy bracket display frequently happens in RTL layout.
     * @param {string} s The string that need to be processed.
     * @param {boolean=} opt_isRtlContext specifies default direction (usually
     *     direction of the UI).
     * @return {string} The processed string, with all bracket guarded.
     */
    function guardBracketInHtml(s: string, opt_isRtlContext?: boolean): string;

    /**
     * Apply bracket guard using LRM and RLM. This is to address the problem of
     * messy bracket display frequently happens in RTL layout.
     * This version works for both plain text and html. But it does not work as
     * good as guardBracketInHtml in some cases.
     * @param {string} s The string that need to be processed.
     * @param {boolean=} opt_isRtlContext specifies default direction (usually
     *     direction of the UI).
     * @return {string} The processed string, with all bracket guarded.
     */
    function guardBracketInText(s: string, opt_isRtlContext?: boolean): string;

    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    function enforceRtlInHtml(html: string): string;

    /**
     * Enforce RTL on both end of the given text piece using unicode BiDi formatting
     * characters RLE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    function enforceRtlInText(text: string): string;

    /**
     * Enforce the html snippet in RTL directionality regardless overall context.
     * If the html piece was enclosed by tag, dir will be applied to existing
     * tag, otherwise a span tag will be added as wrapper. For this reason, if
     * html snippet start with with tag, this tag must enclose the whole piece. If
     * the tag already has a dir specified, this new one will override existing
     * one in behavior (tested on FF and IE).
     * @param {string} html The string that need to be processed.
     * @return {string} The processed string, with directionality enforced to RTL.
     */
    function enforceLtrInHtml(html: string): string;

    /**
     * Enforce LTR on both end of the given text piece using unicode BiDi formatting
     * characters LRE and PDF.
     * @param {string} text The piece of text that need to be wrapped.
     * @return {string} The wrapped string after process.
     */
    function enforceLtrInText(text: string): string;

    /**
     * Swap location parameters and 'left'/'right' in CSS specification. The
     * processed string will be suited for RTL layout. Though this function can
     * cover most cases, there are always exceptions. It is suggested to put
     * those exceptions in separate group of CSS string.
     * @param {string} cssStr CSS spefication string.
     * @return {string} Processed CSS specification string.
     */
    function mirrorCSS(cssStr: string): string;

    /**
     * Replace the double and single quote directly after a Hebrew character with
     * GERESH and GERSHAYIM. In such case, most likely that's user intention.
     * @param {string} str String that need to be processed.
     * @return {string} Processed string with double/single quote replaced.
     */
    function normalizeHebrewQuote(str: string): string;

    /**
     * Estimates the directionality of a string based on relative word counts.
     * If the number of RTL words is above a certain percentage of the total number
     * of strongly directional words, returns RTL.
     * Otherwise, if any words are strongly or weakly LTR, returns LTR.
     * Otherwise, returns UNKNOWN, which is used to mean "neutral".
     * Numbers are counted as weakly LTR.
     * @param {string} str The string to be checked.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {goog.i18n.bidi.Dir} Estimated overall directionality of {@code str}.
     */
    function estimateDirection(str: string, opt_isHtml?: boolean): goog.i18n.bidi.Dir;

    /**
     * Check the directionality of a piece of text, return true if the piece of
     * text should be laid out in RTL direction.
     * @param {string} str The piece of text that need to be detected.
     * @param {boolean=} opt_isHtml Whether str is HTML / HTML-escaped.
     *     Default: false.
     * @return {boolean} Whether this piece of text should be laid out in RTL.
     */
    function detectRtlDirectionality(str: string, opt_isHtml?: boolean): boolean;

    /**
     * Sets text input element's directionality and text alignment based on a
     * given directionality. Does nothing if the given directionality is unknown or
     * neutral.
     * @param {Element} element Input field element to set directionality to.
     * @param {goog.i18n.bidi.Dir|number|boolean|null} dir Desired directionality,
     *     given in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant.
     *     2. A number (positive = LRT, negative = RTL, 0 = neutral).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     */
    function setElementDirAndAlign(element: Element, dir: any /*goog.i18n.bidi.Dir|number|boolean|any (null)*/): void;

    /**
     * Strings that have an (optional) known direction.
     *
     * Implementations of this interface are string-like objects that carry an
     * attached direction, if known.
     * @interface
     */
    interface DirectionalString {
        implementsGoogI18nBidiDirectionalString: boolean;
        getDirection: any /*missing*/;
    }
}

declare module 'goog.i18n.CharPickerData' {

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SYMBOL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ARROWS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BRAILLE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CONTROL_PICTURES: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CURRENCY: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_EMOTICONS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GAME_PIECES: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GENDER_AND_GENEALOGICAL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GEOMETRIC_SHAPES: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_KEYBOARD_AND_UI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LATIN_1_SUPPLEMENT: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MATH: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MATH_ALPHANUMERIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MISCELLANEOUS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MUSICAL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_STARS_ASTERISKS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SUBSCRIPT: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SUPERSCRIPT: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TECHNICAL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TRANSPORT_AND_MAP: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_WEATHER_AND_ASTROLOGICAL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_YIJING_TAI_XUAN_JING: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HISTORIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_COMPATIBILITY: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_EMOJI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_PEOPLE_AND_EMOTIONS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ANIMALS_PLANTS_AND_FOOD: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OBJECTS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SPORTS_CELEBRATIONS_AND_ACTIVITIES: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TRANSPORT_MAPS_AND_SIGNAGE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_WEATHER_SCENES_AND_ZODIAC_SIGNS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ENCLOSED: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MARKS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SYMBOLS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_PUNCTUATION: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ASCII_BASED: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_DASH_CONNECTOR: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OTHER: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_PAIRED: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_NUMBER: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_DECIMAL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ENCLOSED_DOTTED: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_FRACTIONS_RELATED: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_FORMAT_WHITESPACE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_FORMAT: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_VARIATION_SELECTOR: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_WHITESPACE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MODIFIER: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ENCLOSING: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_NONSPACING: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SPACING: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LATIN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_COMMON: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_FLIPPED_MIRRORED: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_PHONETICS_IPA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_PHONETICS_X_IPA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OTHER_EUROPEAN_SCRIPTS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ARMENIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CYRILLIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GEORGIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GREEK: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CYPRIOT: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GLAGOLITIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GOTHIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LINEAR_B: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OGHAM: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OLD_ITALIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_RUNIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SHAVIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_AMERICAN_SCRIPTS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CANADIAN_ABORIGINAL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CHEROKEE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_DESERET: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_AFRICAN_SCRIPTS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_EGYPTIAN_HIEROGLYPHS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ETHIOPIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MEROITIC_CURSIVE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MEROITIC_HIEROGLYPHS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_NKO: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TIFINAGH: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_VAI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BAMUM: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_COPTIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OSMANYA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MIDDLE_EASTERN_SCRIPTS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ARABIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HEBREW: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_IMPERIAL_ARAMAIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_INSCRIPTIONAL_PAHLAVI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_INSCRIPTIONAL_PARTHIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MANDAIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OLD_SOUTH_ARABIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SAMARITAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SYRIAC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_AVESTAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CARIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CUNEIFORM: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LYCIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LYDIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OLD_PERSIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_PHOENICIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_UGARITIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SOUTH_ASIAN_SCRIPTS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BENGALI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CHAKMA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_DEVANAGARI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GUJARATI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_GURMUKHI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_KANNADA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LEPCHA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LIMBU: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MALAYALAM: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MEETEI_MAYEK: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OL_CHIKI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_ORIYA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SAURASHTRA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SINHALA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SORA_SOMPENG: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TAMIL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TELUGU: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_THAANA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TIBETAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BRAHMI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_KAITHI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_KHAROSHTHI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SHARADA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SYLOTI_NAGRI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TAKRI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SOUTHEAST_ASIAN_SCRIPTS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BALINESE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BATAK: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CHAM: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_JAVANESE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_KAYAH_LI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_KHMER: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LAO: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MYANMAR: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_NEW_TAI_LUE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TAI_LE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TAI_THAM: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TAI_VIET: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_THAI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BUGINESE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BUHID: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HANUNOO: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_REJANG: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_SUNDANESE: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TAGALOG: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_TAGBANWA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HANGUL: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OTHER_EAST_ASIAN_SCRIPTS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_BOPOMOFO: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HIRAGANA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_KATAKANA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LISU: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MIAO: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_MONGOLIAN: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_OLD_TURKIC: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_PHAGS_PA: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_YI: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_1_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_LESS_COMMON: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_2_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_3_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_4_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_5_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_6_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_7_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_8_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_9_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_10_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_11_17_STROKE_RADICALS: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_HAN_OTHER: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_CJK_STROKES: string;

    /**
     * @desc Name for a symbol or character category. Used in a pull-down list
     *   shown to a  document editing user trying to insert a special character.
     *   Newlines are not allowed; translation should be a noun and as consise as
     *   possible. More details:
     *   docs/fileview?id=0B8NbxddKsFtwYjExMGJjNzgtYjkzOS00NjdiLTlmOGQtOGVhZDkyZDU5YjM4.
     * @type {string}
     */
    var MSG_CP_IDEOGRAPHIC_DESCRIPTION: string;

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_SYMBOL: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_SYMBOL: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_EMOJI: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_EMOJI: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_PUNCTUATION: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_PUNCTUATION: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_NUMBER: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_NUMBER: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_FORMAT_WHITESPACE: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_FORMAT_WHITESPACE: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_MODIFIER: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_MODIFIER: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_LATIN: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_LATIN: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_OTHER_EUROPEAN_SCRIPTS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_OTHER_EUROPEAN_SCRIPTS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_AMERICAN_SCRIPTS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_AMERICAN_SCRIPTS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_AFRICAN_SCRIPTS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_AFRICAN_SCRIPTS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_MIDDLE_EASTERN_SCRIPTS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_MIDDLE_EASTERN_SCRIPTS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_SOUTH_ASIAN_SCRIPTS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_SOUTH_ASIAN_SCRIPTS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_SOUTHEAST_ASIAN_SCRIPTS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_SOUTHEAST_ASIAN_SCRIPTS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HANGUL: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HANGUL: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_OTHER_EAST_ASIAN_SCRIPTS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_OTHER_EAST_ASIAN_SCRIPTS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_1_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_1_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_2_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_2_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_3_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_3_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_4_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_4_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_5_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_5_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_6_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_6_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_7_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_7_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_8_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_8_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_9_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_9_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_10_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_10_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_11_17_STROKE_RADICALS: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_11_17_STROKE_RADICALS: string[];

    /**
     * Names of subcategories. Each message this array is the
     * name for the corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}.
     * @type {Array.<string>}
     */
    var SUBCATEGORY_NAMES_OF_HAN_OTHER: string[];

    /**
     * List of characters in base88 encoding scheme. Each base88 encoded
     * charater string represents corresponding subcategory specified in
     * {@code goog.i18n.CharPickerData.subcategories}. Encoding
     * scheme is described in {@code goog.i18n.CharListDecompressor}.
     * @type {Array.<string>}
     */
    var CHARLIST_OF_HAN_OTHER: string[];
}

declare module 'goog.i18n.collation' {

    /**
     * Returns the comparator for a locale. If a locale is not explicitly specified,
     * a comparator for the user's locale will be returned. Note that if the browser
     * does not support locale-sensitive string comparisons, the comparator returned
     * will be a simple codepoint comparator.
     *
     * @param {string=} opt_locale the locale that the comparator is used for.
     * @return {function(string, string): number} The locale-specific comparator.
     */
    function createComparator(opt_locale?: string): (_0: string, _1: string) => number;

    /**
     * Returns true if a locale-sensitive comparator is available for a locale. If
     * a locale is not explicitly specified, the user's locale is used instead.
     *
     * @param {string=} opt_locale The locale to be checked.
     * @return {boolean} Whether there is a locale-sensitive comparator available
     *     for the locale.
     */
    function hasNativeComparator(opt_locale?: string): boolean;
}

declare module 'goog.i18n' {

    /**
     * Compact number formatting symbols for locale aa.
     */
    var CompactNumberFormatSymbols_aa: any /*missing*/;

    /**
     * Compact number formatting symbols for locale aa_DJ.
     */
    var CompactNumberFormatSymbols_aa_DJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale aa_ER.
     */
    var CompactNumberFormatSymbols_aa_ER: any /*missing*/;

    /**
     * Compact number formatting symbols for locale aa_ET.
     */
    var CompactNumberFormatSymbols_aa_ET: any /*missing*/;

    /**
     * Compact number formatting symbols for locale af_NA.
     */
    var CompactNumberFormatSymbols_af_NA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale agq.
     */
    var CompactNumberFormatSymbols_agq: any /*missing*/;

    /**
     * Compact number formatting symbols for locale agq_CM.
     */
    var CompactNumberFormatSymbols_agq_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ak.
     */
    var CompactNumberFormatSymbols_ak: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ak_GH.
     */
    var CompactNumberFormatSymbols_ak_GH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_AE.
     */
    var CompactNumberFormatSymbols_ar_AE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_BH.
     */
    var CompactNumberFormatSymbols_ar_BH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_DJ.
     */
    var CompactNumberFormatSymbols_ar_DJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_DZ.
     */
    var CompactNumberFormatSymbols_ar_DZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_EG.
     */
    var CompactNumberFormatSymbols_ar_EG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_EH.
     */
    var CompactNumberFormatSymbols_ar_EH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_ER.
     */
    var CompactNumberFormatSymbols_ar_ER: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_IL.
     */
    var CompactNumberFormatSymbols_ar_IL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_IQ.
     */
    var CompactNumberFormatSymbols_ar_IQ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_JO.
     */
    var CompactNumberFormatSymbols_ar_JO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_KM.
     */
    var CompactNumberFormatSymbols_ar_KM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_KW.
     */
    var CompactNumberFormatSymbols_ar_KW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_LB.
     */
    var CompactNumberFormatSymbols_ar_LB: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_LY.
     */
    var CompactNumberFormatSymbols_ar_LY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_MA.
     */
    var CompactNumberFormatSymbols_ar_MA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_MR.
     */
    var CompactNumberFormatSymbols_ar_MR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_OM.
     */
    var CompactNumberFormatSymbols_ar_OM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_PS.
     */
    var CompactNumberFormatSymbols_ar_PS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_QA.
     */
    var CompactNumberFormatSymbols_ar_QA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_SA.
     */
    var CompactNumberFormatSymbols_ar_SA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_SD.
     */
    var CompactNumberFormatSymbols_ar_SD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_SO.
     */
    var CompactNumberFormatSymbols_ar_SO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_SS.
     */
    var CompactNumberFormatSymbols_ar_SS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_SY.
     */
    var CompactNumberFormatSymbols_ar_SY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_TD.
     */
    var CompactNumberFormatSymbols_ar_TD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_TN.
     */
    var CompactNumberFormatSymbols_ar_TN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_YE.
     */
    var CompactNumberFormatSymbols_ar_YE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale as.
     */
    var CompactNumberFormatSymbols_as: any /*missing*/;

    /**
     * Compact number formatting symbols for locale as_IN.
     */
    var CompactNumberFormatSymbols_as_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale asa.
     */
    var CompactNumberFormatSymbols_asa: any /*missing*/;

    /**
     * Compact number formatting symbols for locale asa_TZ.
     */
    var CompactNumberFormatSymbols_asa_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ast.
     */
    var CompactNumberFormatSymbols_ast: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ast_ES.
     */
    var CompactNumberFormatSymbols_ast_ES: any /*missing*/;

    /**
     * Compact number formatting symbols for locale az_Cyrl.
     */
    var CompactNumberFormatSymbols_az_Cyrl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale az_Latn.
     */
    var CompactNumberFormatSymbols_az_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bas.
     */
    var CompactNumberFormatSymbols_bas: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bas_CM.
     */
    var CompactNumberFormatSymbols_bas_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale be.
     */
    var CompactNumberFormatSymbols_be: any /*missing*/;

    /**
     * Compact number formatting symbols for locale be_BY.
     */
    var CompactNumberFormatSymbols_be_BY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bem.
     */
    var CompactNumberFormatSymbols_bem: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bem_ZM.
     */
    var CompactNumberFormatSymbols_bem_ZM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bez.
     */
    var CompactNumberFormatSymbols_bez: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bez_TZ.
     */
    var CompactNumberFormatSymbols_bez_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bm.
     */
    var CompactNumberFormatSymbols_bm: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bm_ML.
     */
    var CompactNumberFormatSymbols_bm_ML: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bn_IN.
     */
    var CompactNumberFormatSymbols_bn_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bo.
     */
    var CompactNumberFormatSymbols_bo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bo_CN.
     */
    var CompactNumberFormatSymbols_bo_CN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bo_IN.
     */
    var CompactNumberFormatSymbols_bo_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale brx.
     */
    var CompactNumberFormatSymbols_brx: any /*missing*/;

    /**
     * Compact number formatting symbols for locale brx_IN.
     */
    var CompactNumberFormatSymbols_brx_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bs.
     */
    var CompactNumberFormatSymbols_bs: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bs_Cyrl.
     */
    var CompactNumberFormatSymbols_bs_Cyrl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bs_Cyrl_BA.
     */
    var CompactNumberFormatSymbols_bs_Cyrl_BA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bs_Latn.
     */
    var CompactNumberFormatSymbols_bs_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bs_Latn_BA.
     */
    var CompactNumberFormatSymbols_bs_Latn_BA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale byn.
     */
    var CompactNumberFormatSymbols_byn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale byn_ER.
     */
    var CompactNumberFormatSymbols_byn_ER: any /*missing*/;

    /**
     * Compact number formatting symbols for locale cgg.
     */
    var CompactNumberFormatSymbols_cgg: any /*missing*/;

    /**
     * Compact number formatting symbols for locale cgg_UG.
     */
    var CompactNumberFormatSymbols_cgg_UG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ckb.
     */
    var CompactNumberFormatSymbols_ckb: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ckb_Arab.
     */
    var CompactNumberFormatSymbols_ckb_Arab: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ckb_Arab_IQ.
     */
    var CompactNumberFormatSymbols_ckb_Arab_IQ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ckb_Arab_IR.
     */
    var CompactNumberFormatSymbols_ckb_Arab_IR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ckb_IQ.
     */
    var CompactNumberFormatSymbols_ckb_IQ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ckb_IR.
     */
    var CompactNumberFormatSymbols_ckb_IR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ckb_Latn.
     */
    var CompactNumberFormatSymbols_ckb_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ckb_Latn_IQ.
     */
    var CompactNumberFormatSymbols_ckb_Latn_IQ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dav.
     */
    var CompactNumberFormatSymbols_dav: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dav_KE.
     */
    var CompactNumberFormatSymbols_dav_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale de_LI.
     */
    var CompactNumberFormatSymbols_de_LI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dje.
     */
    var CompactNumberFormatSymbols_dje: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dje_NE.
     */
    var CompactNumberFormatSymbols_dje_NE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dua.
     */
    var CompactNumberFormatSymbols_dua: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dua_CM.
     */
    var CompactNumberFormatSymbols_dua_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dyo.
     */
    var CompactNumberFormatSymbols_dyo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dyo_SN.
     */
    var CompactNumberFormatSymbols_dyo_SN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dz.
     */
    var CompactNumberFormatSymbols_dz: any /*missing*/;

    /**
     * Compact number formatting symbols for locale dz_BT.
     */
    var CompactNumberFormatSymbols_dz_BT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ebu.
     */
    var CompactNumberFormatSymbols_ebu: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ebu_KE.
     */
    var CompactNumberFormatSymbols_ebu_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ee.
     */
    var CompactNumberFormatSymbols_ee: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ee_GH.
     */
    var CompactNumberFormatSymbols_ee_GH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ee_TG.
     */
    var CompactNumberFormatSymbols_ee_TG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale el_CY.
     */
    var CompactNumberFormatSymbols_el_CY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_150.
     */
    var CompactNumberFormatSymbols_en_150: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_AG.
     */
    var CompactNumberFormatSymbols_en_AG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_AI.
     */
    var CompactNumberFormatSymbols_en_AI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_BB.
     */
    var CompactNumberFormatSymbols_en_BB: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_BE.
     */
    var CompactNumberFormatSymbols_en_BE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_BM.
     */
    var CompactNumberFormatSymbols_en_BM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_BS.
     */
    var CompactNumberFormatSymbols_en_BS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_BW.
     */
    var CompactNumberFormatSymbols_en_BW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_BZ.
     */
    var CompactNumberFormatSymbols_en_BZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_CA.
     */
    var CompactNumberFormatSymbols_en_CA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_CC.
     */
    var CompactNumberFormatSymbols_en_CC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_CK.
     */
    var CompactNumberFormatSymbols_en_CK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_CM.
     */
    var CompactNumberFormatSymbols_en_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_CX.
     */
    var CompactNumberFormatSymbols_en_CX: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_DM.
     */
    var CompactNumberFormatSymbols_en_DM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_Dsrt.
     */
    var CompactNumberFormatSymbols_en_Dsrt: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_ER.
     */
    var CompactNumberFormatSymbols_en_ER: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_FJ.
     */
    var CompactNumberFormatSymbols_en_FJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_FK.
     */
    var CompactNumberFormatSymbols_en_FK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_GD.
     */
    var CompactNumberFormatSymbols_en_GD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_GG.
     */
    var CompactNumberFormatSymbols_en_GG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_GH.
     */
    var CompactNumberFormatSymbols_en_GH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_GI.
     */
    var CompactNumberFormatSymbols_en_GI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_GM.
     */
    var CompactNumberFormatSymbols_en_GM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_GY.
     */
    var CompactNumberFormatSymbols_en_GY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_HK.
     */
    var CompactNumberFormatSymbols_en_HK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_IM.
     */
    var CompactNumberFormatSymbols_en_IM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_JE.
     */
    var CompactNumberFormatSymbols_en_JE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_JM.
     */
    var CompactNumberFormatSymbols_en_JM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_KE.
     */
    var CompactNumberFormatSymbols_en_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_KI.
     */
    var CompactNumberFormatSymbols_en_KI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_KN.
     */
    var CompactNumberFormatSymbols_en_KN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_KY.
     */
    var CompactNumberFormatSymbols_en_KY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_LC.
     */
    var CompactNumberFormatSymbols_en_LC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_LR.
     */
    var CompactNumberFormatSymbols_en_LR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_LS.
     */
    var CompactNumberFormatSymbols_en_LS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_MG.
     */
    var CompactNumberFormatSymbols_en_MG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_MO.
     */
    var CompactNumberFormatSymbols_en_MO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_MS.
     */
    var CompactNumberFormatSymbols_en_MS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_MT.
     */
    var CompactNumberFormatSymbols_en_MT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_MU.
     */
    var CompactNumberFormatSymbols_en_MU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_MW.
     */
    var CompactNumberFormatSymbols_en_MW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_NA.
     */
    var CompactNumberFormatSymbols_en_NA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_NF.
     */
    var CompactNumberFormatSymbols_en_NF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_NG.
     */
    var CompactNumberFormatSymbols_en_NG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_NR.
     */
    var CompactNumberFormatSymbols_en_NR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_NU.
     */
    var CompactNumberFormatSymbols_en_NU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_NZ.
     */
    var CompactNumberFormatSymbols_en_NZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_PG.
     */
    var CompactNumberFormatSymbols_en_PG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_PH.
     */
    var CompactNumberFormatSymbols_en_PH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_PK.
     */
    var CompactNumberFormatSymbols_en_PK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_PN.
     */
    var CompactNumberFormatSymbols_en_PN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_RW.
     */
    var CompactNumberFormatSymbols_en_RW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SB.
     */
    var CompactNumberFormatSymbols_en_SB: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SC.
     */
    var CompactNumberFormatSymbols_en_SC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SD.
     */
    var CompactNumberFormatSymbols_en_SD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SH.
     */
    var CompactNumberFormatSymbols_en_SH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SL.
     */
    var CompactNumberFormatSymbols_en_SL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SS.
     */
    var CompactNumberFormatSymbols_en_SS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SX.
     */
    var CompactNumberFormatSymbols_en_SX: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SZ.
     */
    var CompactNumberFormatSymbols_en_SZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_TK.
     */
    var CompactNumberFormatSymbols_en_TK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_TO.
     */
    var CompactNumberFormatSymbols_en_TO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_TT.
     */
    var CompactNumberFormatSymbols_en_TT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_TV.
     */
    var CompactNumberFormatSymbols_en_TV: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_TZ.
     */
    var CompactNumberFormatSymbols_en_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_UG.
     */
    var CompactNumberFormatSymbols_en_UG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_VC.
     */
    var CompactNumberFormatSymbols_en_VC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_VU.
     */
    var CompactNumberFormatSymbols_en_VU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_WS.
     */
    var CompactNumberFormatSymbols_en_WS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_ZM.
     */
    var CompactNumberFormatSymbols_en_ZM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale eo.
     */
    var CompactNumberFormatSymbols_eo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale eo_001.
     */
    var CompactNumberFormatSymbols_eo_001: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_AR.
     */
    var CompactNumberFormatSymbols_es_AR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_BO.
     */
    var CompactNumberFormatSymbols_es_BO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_CL.
     */
    var CompactNumberFormatSymbols_es_CL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_CO.
     */
    var CompactNumberFormatSymbols_es_CO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_CR.
     */
    var CompactNumberFormatSymbols_es_CR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_CU.
     */
    var CompactNumberFormatSymbols_es_CU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_DO.
     */
    var CompactNumberFormatSymbols_es_DO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_EC.
     */
    var CompactNumberFormatSymbols_es_EC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_GQ.
     */
    var CompactNumberFormatSymbols_es_GQ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_GT.
     */
    var CompactNumberFormatSymbols_es_GT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_HN.
     */
    var CompactNumberFormatSymbols_es_HN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_MX.
     */
    var CompactNumberFormatSymbols_es_MX: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_NI.
     */
    var CompactNumberFormatSymbols_es_NI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_PA.
     */
    var CompactNumberFormatSymbols_es_PA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_PE.
     */
    var CompactNumberFormatSymbols_es_PE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_PH.
     */
    var CompactNumberFormatSymbols_es_PH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_PR.
     */
    var CompactNumberFormatSymbols_es_PR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_PY.
     */
    var CompactNumberFormatSymbols_es_PY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_SV.
     */
    var CompactNumberFormatSymbols_es_SV: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_US.
     */
    var CompactNumberFormatSymbols_es_US: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_UY.
     */
    var CompactNumberFormatSymbols_es_UY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_VE.
     */
    var CompactNumberFormatSymbols_es_VE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ewo.
     */
    var CompactNumberFormatSymbols_ewo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ewo_CM.
     */
    var CompactNumberFormatSymbols_ewo_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fa_AF.
     */
    var CompactNumberFormatSymbols_fa_AF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ff.
     */
    var CompactNumberFormatSymbols_ff: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ff_SN.
     */
    var CompactNumberFormatSymbols_ff_SN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fo.
     */
    var CompactNumberFormatSymbols_fo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fo_FO.
     */
    var CompactNumberFormatSymbols_fo_FO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_BE.
     */
    var CompactNumberFormatSymbols_fr_BE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_BF.
     */
    var CompactNumberFormatSymbols_fr_BF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_BI.
     */
    var CompactNumberFormatSymbols_fr_BI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_BJ.
     */
    var CompactNumberFormatSymbols_fr_BJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_CD.
     */
    var CompactNumberFormatSymbols_fr_CD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_CF.
     */
    var CompactNumberFormatSymbols_fr_CF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_CG.
     */
    var CompactNumberFormatSymbols_fr_CG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_CH.
     */
    var CompactNumberFormatSymbols_fr_CH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_CI.
     */
    var CompactNumberFormatSymbols_fr_CI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_CM.
     */
    var CompactNumberFormatSymbols_fr_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_DJ.
     */
    var CompactNumberFormatSymbols_fr_DJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_DZ.
     */
    var CompactNumberFormatSymbols_fr_DZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_GA.
     */
    var CompactNumberFormatSymbols_fr_GA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_GN.
     */
    var CompactNumberFormatSymbols_fr_GN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_GQ.
     */
    var CompactNumberFormatSymbols_fr_GQ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_HT.
     */
    var CompactNumberFormatSymbols_fr_HT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_KM.
     */
    var CompactNumberFormatSymbols_fr_KM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_LU.
     */
    var CompactNumberFormatSymbols_fr_LU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_MA.
     */
    var CompactNumberFormatSymbols_fr_MA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_MG.
     */
    var CompactNumberFormatSymbols_fr_MG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_ML.
     */
    var CompactNumberFormatSymbols_fr_ML: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_MR.
     */
    var CompactNumberFormatSymbols_fr_MR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_MU.
     */
    var CompactNumberFormatSymbols_fr_MU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_NC.
     */
    var CompactNumberFormatSymbols_fr_NC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_NE.
     */
    var CompactNumberFormatSymbols_fr_NE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_PF.
     */
    var CompactNumberFormatSymbols_fr_PF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_RW.
     */
    var CompactNumberFormatSymbols_fr_RW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_SC.
     */
    var CompactNumberFormatSymbols_fr_SC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_SN.
     */
    var CompactNumberFormatSymbols_fr_SN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_SY.
     */
    var CompactNumberFormatSymbols_fr_SY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_TD.
     */
    var CompactNumberFormatSymbols_fr_TD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_TG.
     */
    var CompactNumberFormatSymbols_fr_TG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_TN.
     */
    var CompactNumberFormatSymbols_fr_TN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_VU.
     */
    var CompactNumberFormatSymbols_fr_VU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_WF.
     */
    var CompactNumberFormatSymbols_fr_WF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fur.
     */
    var CompactNumberFormatSymbols_fur: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fur_IT.
     */
    var CompactNumberFormatSymbols_fur_IT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ga.
     */
    var CompactNumberFormatSymbols_ga: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ga_IE.
     */
    var CompactNumberFormatSymbols_ga_IE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gd.
     */
    var CompactNumberFormatSymbols_gd: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gd_GB.
     */
    var CompactNumberFormatSymbols_gd_GB: any /*missing*/;

    /**
     * Compact number formatting symbols for locale guz.
     */
    var CompactNumberFormatSymbols_guz: any /*missing*/;

    /**
     * Compact number formatting symbols for locale guz_KE.
     */
    var CompactNumberFormatSymbols_guz_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gv.
     */
    var CompactNumberFormatSymbols_gv: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gv_IM.
     */
    var CompactNumberFormatSymbols_gv_IM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ha.
     */
    var CompactNumberFormatSymbols_ha: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ha_Latn.
     */
    var CompactNumberFormatSymbols_ha_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ha_Latn_GH.
     */
    var CompactNumberFormatSymbols_ha_Latn_GH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ha_Latn_NE.
     */
    var CompactNumberFormatSymbols_ha_Latn_NE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ha_Latn_NG.
     */
    var CompactNumberFormatSymbols_ha_Latn_NG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hr_BA.
     */
    var CompactNumberFormatSymbols_hr_BA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ia.
     */
    var CompactNumberFormatSymbols_ia: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ia_FR.
     */
    var CompactNumberFormatSymbols_ia_FR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ig.
     */
    var CompactNumberFormatSymbols_ig: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ig_NG.
     */
    var CompactNumberFormatSymbols_ig_NG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ii.
     */
    var CompactNumberFormatSymbols_ii: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ii_CN.
     */
    var CompactNumberFormatSymbols_ii_CN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale it_CH.
     */
    var CompactNumberFormatSymbols_it_CH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale jgo.
     */
    var CompactNumberFormatSymbols_jgo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale jgo_CM.
     */
    var CompactNumberFormatSymbols_jgo_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale jmc.
     */
    var CompactNumberFormatSymbols_jmc: any /*missing*/;

    /**
     * Compact number formatting symbols for locale jmc_TZ.
     */
    var CompactNumberFormatSymbols_jmc_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kab.
     */
    var CompactNumberFormatSymbols_kab: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kab_DZ.
     */
    var CompactNumberFormatSymbols_kab_DZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kam.
     */
    var CompactNumberFormatSymbols_kam: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kam_KE.
     */
    var CompactNumberFormatSymbols_kam_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kde.
     */
    var CompactNumberFormatSymbols_kde: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kde_TZ.
     */
    var CompactNumberFormatSymbols_kde_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kea.
     */
    var CompactNumberFormatSymbols_kea: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kea_CV.
     */
    var CompactNumberFormatSymbols_kea_CV: any /*missing*/;

    /**
     * Compact number formatting symbols for locale khq.
     */
    var CompactNumberFormatSymbols_khq: any /*missing*/;

    /**
     * Compact number formatting symbols for locale khq_ML.
     */
    var CompactNumberFormatSymbols_khq_ML: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ki.
     */
    var CompactNumberFormatSymbols_ki: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ki_KE.
     */
    var CompactNumberFormatSymbols_ki_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kk_Cyrl.
     */
    var CompactNumberFormatSymbols_kk_Cyrl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kkj.
     */
    var CompactNumberFormatSymbols_kkj: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kkj_CM.
     */
    var CompactNumberFormatSymbols_kkj_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kl.
     */
    var CompactNumberFormatSymbols_kl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kl_GL.
     */
    var CompactNumberFormatSymbols_kl_GL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kln.
     */
    var CompactNumberFormatSymbols_kln: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kln_KE.
     */
    var CompactNumberFormatSymbols_kln_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ko_KP.
     */
    var CompactNumberFormatSymbols_ko_KP: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kok.
     */
    var CompactNumberFormatSymbols_kok: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kok_IN.
     */
    var CompactNumberFormatSymbols_kok_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ks.
     */
    var CompactNumberFormatSymbols_ks: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ks_Arab.
     */
    var CompactNumberFormatSymbols_ks_Arab: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ks_Arab_IN.
     */
    var CompactNumberFormatSymbols_ks_Arab_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ksb.
     */
    var CompactNumberFormatSymbols_ksb: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ksb_TZ.
     */
    var CompactNumberFormatSymbols_ksb_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ksf.
     */
    var CompactNumberFormatSymbols_ksf: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ksf_CM.
     */
    var CompactNumberFormatSymbols_ksf_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ksh.
     */
    var CompactNumberFormatSymbols_ksh: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ksh_DE.
     */
    var CompactNumberFormatSymbols_ksh_DE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kw.
     */
    var CompactNumberFormatSymbols_kw: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kw_GB.
     */
    var CompactNumberFormatSymbols_kw_GB: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ky_Cyrl.
     */
    var CompactNumberFormatSymbols_ky_Cyrl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lag.
     */
    var CompactNumberFormatSymbols_lag: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lag_TZ.
     */
    var CompactNumberFormatSymbols_lag_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lg.
     */
    var CompactNumberFormatSymbols_lg: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lg_UG.
     */
    var CompactNumberFormatSymbols_lg_UG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lkt.
     */
    var CompactNumberFormatSymbols_lkt: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lkt_US.
     */
    var CompactNumberFormatSymbols_lkt_US: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ln_AO.
     */
    var CompactNumberFormatSymbols_ln_AO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ln_CF.
     */
    var CompactNumberFormatSymbols_ln_CF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ln_CG.
     */
    var CompactNumberFormatSymbols_ln_CG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lu.
     */
    var CompactNumberFormatSymbols_lu: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lu_CD.
     */
    var CompactNumberFormatSymbols_lu_CD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale luo.
     */
    var CompactNumberFormatSymbols_luo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale luo_KE.
     */
    var CompactNumberFormatSymbols_luo_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale luy.
     */
    var CompactNumberFormatSymbols_luy: any /*missing*/;

    /**
     * Compact number formatting symbols for locale luy_KE.
     */
    var CompactNumberFormatSymbols_luy_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mas.
     */
    var CompactNumberFormatSymbols_mas: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mas_KE.
     */
    var CompactNumberFormatSymbols_mas_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mas_TZ.
     */
    var CompactNumberFormatSymbols_mas_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mer.
     */
    var CompactNumberFormatSymbols_mer: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mer_KE.
     */
    var CompactNumberFormatSymbols_mer_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mfe.
     */
    var CompactNumberFormatSymbols_mfe: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mfe_MU.
     */
    var CompactNumberFormatSymbols_mfe_MU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mg.
     */
    var CompactNumberFormatSymbols_mg: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mg_MG.
     */
    var CompactNumberFormatSymbols_mg_MG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mgh.
     */
    var CompactNumberFormatSymbols_mgh: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mgh_MZ.
     */
    var CompactNumberFormatSymbols_mgh_MZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mgo.
     */
    var CompactNumberFormatSymbols_mgo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mgo_CM.
     */
    var CompactNumberFormatSymbols_mgo_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mn_Cyrl.
     */
    var CompactNumberFormatSymbols_mn_Cyrl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ms_Latn.
     */
    var CompactNumberFormatSymbols_ms_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ms_Latn_BN.
     */
    var CompactNumberFormatSymbols_ms_Latn_BN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ms_Latn_SG.
     */
    var CompactNumberFormatSymbols_ms_Latn_SG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mua.
     */
    var CompactNumberFormatSymbols_mua: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mua_CM.
     */
    var CompactNumberFormatSymbols_mua_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale naq.
     */
    var CompactNumberFormatSymbols_naq: any /*missing*/;

    /**
     * Compact number formatting symbols for locale naq_NA.
     */
    var CompactNumberFormatSymbols_naq_NA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nd.
     */
    var CompactNumberFormatSymbols_nd: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nd_ZW.
     */
    var CompactNumberFormatSymbols_nd_ZW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ne_IN.
     */
    var CompactNumberFormatSymbols_ne_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nl_AW.
     */
    var CompactNumberFormatSymbols_nl_AW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nl_BE.
     */
    var CompactNumberFormatSymbols_nl_BE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nl_BQ.
     */
    var CompactNumberFormatSymbols_nl_BQ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nl_CW.
     */
    var CompactNumberFormatSymbols_nl_CW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nl_SR.
     */
    var CompactNumberFormatSymbols_nl_SR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nl_SX.
     */
    var CompactNumberFormatSymbols_nl_SX: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nmg.
     */
    var CompactNumberFormatSymbols_nmg: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nmg_CM.
     */
    var CompactNumberFormatSymbols_nmg_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nn.
     */
    var CompactNumberFormatSymbols_nn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nn_NO.
     */
    var CompactNumberFormatSymbols_nn_NO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nnh.
     */
    var CompactNumberFormatSymbols_nnh: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nnh_CM.
     */
    var CompactNumberFormatSymbols_nnh_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nr.
     */
    var CompactNumberFormatSymbols_nr: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nr_ZA.
     */
    var CompactNumberFormatSymbols_nr_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nso.
     */
    var CompactNumberFormatSymbols_nso: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nso_ZA.
     */
    var CompactNumberFormatSymbols_nso_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nus.
     */
    var CompactNumberFormatSymbols_nus: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nus_SD.
     */
    var CompactNumberFormatSymbols_nus_SD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nyn.
     */
    var CompactNumberFormatSymbols_nyn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nyn_UG.
     */
    var CompactNumberFormatSymbols_nyn_UG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale om.
     */
    var CompactNumberFormatSymbols_om: any /*missing*/;

    /**
     * Compact number formatting symbols for locale om_ET.
     */
    var CompactNumberFormatSymbols_om_ET: any /*missing*/;

    /**
     * Compact number formatting symbols for locale om_KE.
     */
    var CompactNumberFormatSymbols_om_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale os.
     */
    var CompactNumberFormatSymbols_os: any /*missing*/;

    /**
     * Compact number formatting symbols for locale os_GE.
     */
    var CompactNumberFormatSymbols_os_GE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale os_RU.
     */
    var CompactNumberFormatSymbols_os_RU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pa_Arab.
     */
    var CompactNumberFormatSymbols_pa_Arab: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pa_Arab_PK.
     */
    var CompactNumberFormatSymbols_pa_Arab_PK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pa_Guru.
     */
    var CompactNumberFormatSymbols_pa_Guru: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ps.
     */
    var CompactNumberFormatSymbols_ps: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ps_AF.
     */
    var CompactNumberFormatSymbols_ps_AF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_AO.
     */
    var CompactNumberFormatSymbols_pt_AO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_CV.
     */
    var CompactNumberFormatSymbols_pt_CV: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_GW.
     */
    var CompactNumberFormatSymbols_pt_GW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_MO.
     */
    var CompactNumberFormatSymbols_pt_MO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_MZ.
     */
    var CompactNumberFormatSymbols_pt_MZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_ST.
     */
    var CompactNumberFormatSymbols_pt_ST: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_TL.
     */
    var CompactNumberFormatSymbols_pt_TL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rm.
     */
    var CompactNumberFormatSymbols_rm: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rm_CH.
     */
    var CompactNumberFormatSymbols_rm_CH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rn.
     */
    var CompactNumberFormatSymbols_rn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rn_BI.
     */
    var CompactNumberFormatSymbols_rn_BI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ro_MD.
     */
    var CompactNumberFormatSymbols_ro_MD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rof.
     */
    var CompactNumberFormatSymbols_rof: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rof_TZ.
     */
    var CompactNumberFormatSymbols_rof_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ru_BY.
     */
    var CompactNumberFormatSymbols_ru_BY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ru_KG.
     */
    var CompactNumberFormatSymbols_ru_KG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ru_KZ.
     */
    var CompactNumberFormatSymbols_ru_KZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ru_MD.
     */
    var CompactNumberFormatSymbols_ru_MD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ru_UA.
     */
    var CompactNumberFormatSymbols_ru_UA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rw.
     */
    var CompactNumberFormatSymbols_rw: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rw_RW.
     */
    var CompactNumberFormatSymbols_rw_RW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rwk.
     */
    var CompactNumberFormatSymbols_rwk: any /*missing*/;

    /**
     * Compact number formatting symbols for locale rwk_TZ.
     */
    var CompactNumberFormatSymbols_rwk_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sah.
     */
    var CompactNumberFormatSymbols_sah: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sah_RU.
     */
    var CompactNumberFormatSymbols_sah_RU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale saq.
     */
    var CompactNumberFormatSymbols_saq: any /*missing*/;

    /**
     * Compact number formatting symbols for locale saq_KE.
     */
    var CompactNumberFormatSymbols_saq_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sbp.
     */
    var CompactNumberFormatSymbols_sbp: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sbp_TZ.
     */
    var CompactNumberFormatSymbols_sbp_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale se.
     */
    var CompactNumberFormatSymbols_se: any /*missing*/;

    /**
     * Compact number formatting symbols for locale se_FI.
     */
    var CompactNumberFormatSymbols_se_FI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale se_NO.
     */
    var CompactNumberFormatSymbols_se_NO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale seh.
     */
    var CompactNumberFormatSymbols_seh: any /*missing*/;

    /**
     * Compact number formatting symbols for locale seh_MZ.
     */
    var CompactNumberFormatSymbols_seh_MZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ses.
     */
    var CompactNumberFormatSymbols_ses: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ses_ML.
     */
    var CompactNumberFormatSymbols_ses_ML: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sg.
     */
    var CompactNumberFormatSymbols_sg: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sg_CF.
     */
    var CompactNumberFormatSymbols_sg_CF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale shi.
     */
    var CompactNumberFormatSymbols_shi: any /*missing*/;

    /**
     * Compact number formatting symbols for locale shi_Latn.
     */
    var CompactNumberFormatSymbols_shi_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale shi_Latn_MA.
     */
    var CompactNumberFormatSymbols_shi_Latn_MA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale shi_Tfng.
     */
    var CompactNumberFormatSymbols_shi_Tfng: any /*missing*/;

    /**
     * Compact number formatting symbols for locale shi_Tfng_MA.
     */
    var CompactNumberFormatSymbols_shi_Tfng_MA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sn.
     */
    var CompactNumberFormatSymbols_sn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sn_ZW.
     */
    var CompactNumberFormatSymbols_sn_ZW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale so.
     */
    var CompactNumberFormatSymbols_so: any /*missing*/;

    /**
     * Compact number formatting symbols for locale so_DJ.
     */
    var CompactNumberFormatSymbols_so_DJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale so_ET.
     */
    var CompactNumberFormatSymbols_so_ET: any /*missing*/;

    /**
     * Compact number formatting symbols for locale so_KE.
     */
    var CompactNumberFormatSymbols_so_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale so_SO.
     */
    var CompactNumberFormatSymbols_so_SO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sq_MK.
     */
    var CompactNumberFormatSymbols_sq_MK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sq_XK.
     */
    var CompactNumberFormatSymbols_sq_XK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Cyrl.
     */
    var CompactNumberFormatSymbols_sr_Cyrl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Cyrl_BA.
     */
    var CompactNumberFormatSymbols_sr_Cyrl_BA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Cyrl_ME.
     */
    var CompactNumberFormatSymbols_sr_Cyrl_ME: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Cyrl_XK.
     */
    var CompactNumberFormatSymbols_sr_Cyrl_XK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Latn.
     */
    var CompactNumberFormatSymbols_sr_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Latn_BA.
     */
    var CompactNumberFormatSymbols_sr_Latn_BA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Latn_ME.
     */
    var CompactNumberFormatSymbols_sr_Latn_ME: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Latn_RS.
     */
    var CompactNumberFormatSymbols_sr_Latn_RS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Latn_XK.
     */
    var CompactNumberFormatSymbols_sr_Latn_XK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ss.
     */
    var CompactNumberFormatSymbols_ss: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ss_SZ.
     */
    var CompactNumberFormatSymbols_ss_SZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ss_ZA.
     */
    var CompactNumberFormatSymbols_ss_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ssy.
     */
    var CompactNumberFormatSymbols_ssy: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ssy_ER.
     */
    var CompactNumberFormatSymbols_ssy_ER: any /*missing*/;

    /**
     * Compact number formatting symbols for locale st.
     */
    var CompactNumberFormatSymbols_st: any /*missing*/;

    /**
     * Compact number formatting symbols for locale st_LS.
     */
    var CompactNumberFormatSymbols_st_LS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale st_ZA.
     */
    var CompactNumberFormatSymbols_st_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sv_AX.
     */
    var CompactNumberFormatSymbols_sv_AX: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sv_FI.
     */
    var CompactNumberFormatSymbols_sv_FI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sw_KE.
     */
    var CompactNumberFormatSymbols_sw_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sw_UG.
     */
    var CompactNumberFormatSymbols_sw_UG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale swc.
     */
    var CompactNumberFormatSymbols_swc: any /*missing*/;

    /**
     * Compact number formatting symbols for locale swc_CD.
     */
    var CompactNumberFormatSymbols_swc_CD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ta_LK.
     */
    var CompactNumberFormatSymbols_ta_LK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ta_MY.
     */
    var CompactNumberFormatSymbols_ta_MY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ta_SG.
     */
    var CompactNumberFormatSymbols_ta_SG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale teo.
     */
    var CompactNumberFormatSymbols_teo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale teo_KE.
     */
    var CompactNumberFormatSymbols_teo_KE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale teo_UG.
     */
    var CompactNumberFormatSymbols_teo_UG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tg.
     */
    var CompactNumberFormatSymbols_tg: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tg_Cyrl.
     */
    var CompactNumberFormatSymbols_tg_Cyrl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tg_Cyrl_TJ.
     */
    var CompactNumberFormatSymbols_tg_Cyrl_TJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ti.
     */
    var CompactNumberFormatSymbols_ti: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ti_ER.
     */
    var CompactNumberFormatSymbols_ti_ER: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ti_ET.
     */
    var CompactNumberFormatSymbols_ti_ET: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tig.
     */
    var CompactNumberFormatSymbols_tig: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tig_ER.
     */
    var CompactNumberFormatSymbols_tig_ER: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tn.
     */
    var CompactNumberFormatSymbols_tn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tn_BW.
     */
    var CompactNumberFormatSymbols_tn_BW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tn_ZA.
     */
    var CompactNumberFormatSymbols_tn_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale to.
     */
    var CompactNumberFormatSymbols_to: any /*missing*/;

    /**
     * Compact number formatting symbols for locale to_TO.
     */
    var CompactNumberFormatSymbols_to_TO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tr_CY.
     */
    var CompactNumberFormatSymbols_tr_CY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ts.
     */
    var CompactNumberFormatSymbols_ts: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ts_ZA.
     */
    var CompactNumberFormatSymbols_ts_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale twq.
     */
    var CompactNumberFormatSymbols_twq: any /*missing*/;

    /**
     * Compact number formatting symbols for locale twq_NE.
     */
    var CompactNumberFormatSymbols_twq_NE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tzm.
     */
    var CompactNumberFormatSymbols_tzm: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tzm_Latn.
     */
    var CompactNumberFormatSymbols_tzm_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tzm_Latn_MA.
     */
    var CompactNumberFormatSymbols_tzm_Latn_MA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ur_IN.
     */
    var CompactNumberFormatSymbols_ur_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uz_Arab.
     */
    var CompactNumberFormatSymbols_uz_Arab: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uz_Arab_AF.
     */
    var CompactNumberFormatSymbols_uz_Arab_AF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uz_Cyrl.
     */
    var CompactNumberFormatSymbols_uz_Cyrl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uz_Cyrl_UZ.
     */
    var CompactNumberFormatSymbols_uz_Cyrl_UZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uz_Latn.
     */
    var CompactNumberFormatSymbols_uz_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vai.
     */
    var CompactNumberFormatSymbols_vai: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vai_Latn.
     */
    var CompactNumberFormatSymbols_vai_Latn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vai_Latn_LR.
     */
    var CompactNumberFormatSymbols_vai_Latn_LR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vai_Vaii.
     */
    var CompactNumberFormatSymbols_vai_Vaii: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vai_Vaii_LR.
     */
    var CompactNumberFormatSymbols_vai_Vaii_LR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ve.
     */
    var CompactNumberFormatSymbols_ve: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ve_ZA.
     */
    var CompactNumberFormatSymbols_ve_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vo.
     */
    var CompactNumberFormatSymbols_vo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vo_001.
     */
    var CompactNumberFormatSymbols_vo_001: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vun.
     */
    var CompactNumberFormatSymbols_vun: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vun_TZ.
     */
    var CompactNumberFormatSymbols_vun_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale wae.
     */
    var CompactNumberFormatSymbols_wae: any /*missing*/;

    /**
     * Compact number formatting symbols for locale wae_CH.
     */
    var CompactNumberFormatSymbols_wae_CH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale wal.
     */
    var CompactNumberFormatSymbols_wal: any /*missing*/;

    /**
     * Compact number formatting symbols for locale wal_ET.
     */
    var CompactNumberFormatSymbols_wal_ET: any /*missing*/;

    /**
     * Compact number formatting symbols for locale xh.
     */
    var CompactNumberFormatSymbols_xh: any /*missing*/;

    /**
     * Compact number formatting symbols for locale xh_ZA.
     */
    var CompactNumberFormatSymbols_xh_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale xog.
     */
    var CompactNumberFormatSymbols_xog: any /*missing*/;

    /**
     * Compact number formatting symbols for locale xog_UG.
     */
    var CompactNumberFormatSymbols_xog_UG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale yav.
     */
    var CompactNumberFormatSymbols_yav: any /*missing*/;

    /**
     * Compact number formatting symbols for locale yav_CM.
     */
    var CompactNumberFormatSymbols_yav_CM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale yo.
     */
    var CompactNumberFormatSymbols_yo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale yo_BJ.
     */
    var CompactNumberFormatSymbols_yo_BJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale yo_NG.
     */
    var CompactNumberFormatSymbols_yo_NG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zgh.
     */
    var CompactNumberFormatSymbols_zgh: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zgh_MA.
     */
    var CompactNumberFormatSymbols_zgh_MA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hans.
     */
    var CompactNumberFormatSymbols_zh_Hans: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hans_HK.
     */
    var CompactNumberFormatSymbols_zh_Hans_HK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hans_MO.
     */
    var CompactNumberFormatSymbols_zh_Hans_MO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hans_SG.
     */
    var CompactNumberFormatSymbols_zh_Hans_SG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hant.
     */
    var CompactNumberFormatSymbols_zh_Hant: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hant_HK.
     */
    var CompactNumberFormatSymbols_zh_Hant_HK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hant_MO.
     */
    var CompactNumberFormatSymbols_zh_Hant_MO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hant_TW.
     */
    var CompactNumberFormatSymbols_zh_Hant_TW: any /*missing*/;

    /**
     * Selected compact number formatting symbols by locale.
     */
    var CompactNumberFormatSymbols: any /*missing*/;

    /**
     * Compact number formatting symbols for locale af.
     */
    var CompactNumberFormatSymbols_af: any /*missing*/;

    /**
     * Compact number formatting symbols for locale af_ZA.
     */
    var CompactNumberFormatSymbols_af_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale am.
     */
    var CompactNumberFormatSymbols_am: any /*missing*/;

    /**
     * Compact number formatting symbols for locale am_ET.
     */
    var CompactNumberFormatSymbols_am_ET: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar.
     */
    var CompactNumberFormatSymbols_ar: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ar_001.
     */
    var CompactNumberFormatSymbols_ar_001: any /*missing*/;

    /**
     * Compact number formatting symbols for locale az.
     */
    var CompactNumberFormatSymbols_az: any /*missing*/;

    /**
     * Compact number formatting symbols for locale az_Cyrl_AZ.
     */
    var CompactNumberFormatSymbols_az_Cyrl_AZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale az_Latn_AZ.
     */
    var CompactNumberFormatSymbols_az_Latn_AZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bg.
     */
    var CompactNumberFormatSymbols_bg: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bg_BG.
     */
    var CompactNumberFormatSymbols_bg_BG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bn.
     */
    var CompactNumberFormatSymbols_bn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale bn_BD.
     */
    var CompactNumberFormatSymbols_bn_BD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale br.
     */
    var CompactNumberFormatSymbols_br: any /*missing*/;

    /**
     * Compact number formatting symbols for locale br_FR.
     */
    var CompactNumberFormatSymbols_br_FR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ca.
     */
    var CompactNumberFormatSymbols_ca: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ca_AD.
     */
    var CompactNumberFormatSymbols_ca_AD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ca_ES.
     */
    var CompactNumberFormatSymbols_ca_ES: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ca_FR.
     */
    var CompactNumberFormatSymbols_ca_FR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ca_IT.
     */
    var CompactNumberFormatSymbols_ca_IT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale chr.
     */
    var CompactNumberFormatSymbols_chr: any /*missing*/;

    /**
     * Compact number formatting symbols for locale chr_US.
     */
    var CompactNumberFormatSymbols_chr_US: any /*missing*/;

    /**
     * Compact number formatting symbols for locale cs.
     */
    var CompactNumberFormatSymbols_cs: any /*missing*/;

    /**
     * Compact number formatting symbols for locale cs_CZ.
     */
    var CompactNumberFormatSymbols_cs_CZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale cy.
     */
    var CompactNumberFormatSymbols_cy: any /*missing*/;

    /**
     * Compact number formatting symbols for locale cy_GB.
     */
    var CompactNumberFormatSymbols_cy_GB: any /*missing*/;

    /**
     * Compact number formatting symbols for locale da.
     */
    var CompactNumberFormatSymbols_da: any /*missing*/;

    /**
     * Compact number formatting symbols for locale da_DK.
     */
    var CompactNumberFormatSymbols_da_DK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale da_GL.
     */
    var CompactNumberFormatSymbols_da_GL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale de.
     */
    var CompactNumberFormatSymbols_de: any /*missing*/;

    /**
     * Compact number formatting symbols for locale de_AT.
     */
    var CompactNumberFormatSymbols_de_AT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale de_BE.
     */
    var CompactNumberFormatSymbols_de_BE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale de_CH.
     */
    var CompactNumberFormatSymbols_de_CH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale de_DE.
     */
    var CompactNumberFormatSymbols_de_DE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale de_LU.
     */
    var CompactNumberFormatSymbols_de_LU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale el.
     */
    var CompactNumberFormatSymbols_el: any /*missing*/;

    /**
     * Compact number formatting symbols for locale el_GR.
     */
    var CompactNumberFormatSymbols_el_GR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en.
     */
    var CompactNumberFormatSymbols_en: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_001.
     */
    var CompactNumberFormatSymbols_en_001: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_AS.
     */
    var CompactNumberFormatSymbols_en_AS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_AU.
     */
    var CompactNumberFormatSymbols_en_AU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_DG.
     */
    var CompactNumberFormatSymbols_en_DG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_Dsrt_US.
     */
    var CompactNumberFormatSymbols_en_Dsrt_US: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_FM.
     */
    var CompactNumberFormatSymbols_en_FM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_GB.
     */
    var CompactNumberFormatSymbols_en_GB: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_GU.
     */
    var CompactNumberFormatSymbols_en_GU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_IE.
     */
    var CompactNumberFormatSymbols_en_IE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_IN.
     */
    var CompactNumberFormatSymbols_en_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_IO.
     */
    var CompactNumberFormatSymbols_en_IO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_MH.
     */
    var CompactNumberFormatSymbols_en_MH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_MP.
     */
    var CompactNumberFormatSymbols_en_MP: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_PR.
     */
    var CompactNumberFormatSymbols_en_PR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_PW.
     */
    var CompactNumberFormatSymbols_en_PW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_SG.
     */
    var CompactNumberFormatSymbols_en_SG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_TC.
     */
    var CompactNumberFormatSymbols_en_TC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_UM.
     */
    var CompactNumberFormatSymbols_en_UM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_US.
     */
    var CompactNumberFormatSymbols_en_US: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_VG.
     */
    var CompactNumberFormatSymbols_en_VG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_VI.
     */
    var CompactNumberFormatSymbols_en_VI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_ZA.
     */
    var CompactNumberFormatSymbols_en_ZA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale en_ZW.
     */
    var CompactNumberFormatSymbols_en_ZW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es.
     */
    var CompactNumberFormatSymbols_es: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_419.
     */
    var CompactNumberFormatSymbols_es_419: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_EA.
     */
    var CompactNumberFormatSymbols_es_EA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_ES.
     */
    var CompactNumberFormatSymbols_es_ES: any /*missing*/;

    /**
     * Compact number formatting symbols for locale es_IC.
     */
    var CompactNumberFormatSymbols_es_IC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale et.
     */
    var CompactNumberFormatSymbols_et: any /*missing*/;

    /**
     * Compact number formatting symbols for locale et_EE.
     */
    var CompactNumberFormatSymbols_et_EE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale eu.
     */
    var CompactNumberFormatSymbols_eu: any /*missing*/;

    /**
     * Compact number formatting symbols for locale eu_ES.
     */
    var CompactNumberFormatSymbols_eu_ES: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fa.
     */
    var CompactNumberFormatSymbols_fa: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fa_IR.
     */
    var CompactNumberFormatSymbols_fa_IR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fi.
     */
    var CompactNumberFormatSymbols_fi: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fi_FI.
     */
    var CompactNumberFormatSymbols_fi_FI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fil.
     */
    var CompactNumberFormatSymbols_fil: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fil_PH.
     */
    var CompactNumberFormatSymbols_fil_PH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr.
     */
    var CompactNumberFormatSymbols_fr: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_BL.
     */
    var CompactNumberFormatSymbols_fr_BL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_CA.
     */
    var CompactNumberFormatSymbols_fr_CA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_FR.
     */
    var CompactNumberFormatSymbols_fr_FR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_GF.
     */
    var CompactNumberFormatSymbols_fr_GF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_GP.
     */
    var CompactNumberFormatSymbols_fr_GP: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_MC.
     */
    var CompactNumberFormatSymbols_fr_MC: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_MF.
     */
    var CompactNumberFormatSymbols_fr_MF: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_MQ.
     */
    var CompactNumberFormatSymbols_fr_MQ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_PM.
     */
    var CompactNumberFormatSymbols_fr_PM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_RE.
     */
    var CompactNumberFormatSymbols_fr_RE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale fr_YT.
     */
    var CompactNumberFormatSymbols_fr_YT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gl.
     */
    var CompactNumberFormatSymbols_gl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gl_ES.
     */
    var CompactNumberFormatSymbols_gl_ES: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gsw.
     */
    var CompactNumberFormatSymbols_gsw: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gsw_CH.
     */
    var CompactNumberFormatSymbols_gsw_CH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gsw_LI.
     */
    var CompactNumberFormatSymbols_gsw_LI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gu.
     */
    var CompactNumberFormatSymbols_gu: any /*missing*/;

    /**
     * Compact number formatting symbols for locale gu_IN.
     */
    var CompactNumberFormatSymbols_gu_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale haw.
     */
    var CompactNumberFormatSymbols_haw: any /*missing*/;

    /**
     * Compact number formatting symbols for locale haw_US.
     */
    var CompactNumberFormatSymbols_haw_US: any /*missing*/;

    /**
     * Compact number formatting symbols for locale he.
     */
    var CompactNumberFormatSymbols_he: any /*missing*/;

    /**
     * Compact number formatting symbols for locale he_IL.
     */
    var CompactNumberFormatSymbols_he_IL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hi.
     */
    var CompactNumberFormatSymbols_hi: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hi_IN.
     */
    var CompactNumberFormatSymbols_hi_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hr.
     */
    var CompactNumberFormatSymbols_hr: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hr_HR.
     */
    var CompactNumberFormatSymbols_hr_HR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hu.
     */
    var CompactNumberFormatSymbols_hu: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hu_HU.
     */
    var CompactNumberFormatSymbols_hu_HU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hy.
     */
    var CompactNumberFormatSymbols_hy: any /*missing*/;

    /**
     * Compact number formatting symbols for locale hy_AM.
     */
    var CompactNumberFormatSymbols_hy_AM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale id.
     */
    var CompactNumberFormatSymbols_id: any /*missing*/;

    /**
     * Compact number formatting symbols for locale id_ID.
     */
    var CompactNumberFormatSymbols_id_ID: any /*missing*/;

    /**
     * Compact number formatting symbols for locale in.
     */
    var CompactNumberFormatSymbols_in: any /*missing*/;

    /**
     * Compact number formatting symbols for locale is.
     */
    var CompactNumberFormatSymbols_is: any /*missing*/;

    /**
     * Compact number formatting symbols for locale is_IS.
     */
    var CompactNumberFormatSymbols_is_IS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale it.
     */
    var CompactNumberFormatSymbols_it: any /*missing*/;

    /**
     * Compact number formatting symbols for locale it_IT.
     */
    var CompactNumberFormatSymbols_it_IT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale it_SM.
     */
    var CompactNumberFormatSymbols_it_SM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale iw.
     */
    var CompactNumberFormatSymbols_iw: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ja.
     */
    var CompactNumberFormatSymbols_ja: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ja_JP.
     */
    var CompactNumberFormatSymbols_ja_JP: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ka.
     */
    var CompactNumberFormatSymbols_ka: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ka_GE.
     */
    var CompactNumberFormatSymbols_ka_GE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kk.
     */
    var CompactNumberFormatSymbols_kk: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kk_Cyrl_KZ.
     */
    var CompactNumberFormatSymbols_kk_Cyrl_KZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale km.
     */
    var CompactNumberFormatSymbols_km: any /*missing*/;

    /**
     * Compact number formatting symbols for locale km_KH.
     */
    var CompactNumberFormatSymbols_km_KH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kn.
     */
    var CompactNumberFormatSymbols_kn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale kn_IN.
     */
    var CompactNumberFormatSymbols_kn_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ko.
     */
    var CompactNumberFormatSymbols_ko: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ko_KR.
     */
    var CompactNumberFormatSymbols_ko_KR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ky.
     */
    var CompactNumberFormatSymbols_ky: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ky_Cyrl_KG.
     */
    var CompactNumberFormatSymbols_ky_Cyrl_KG: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ln.
     */
    var CompactNumberFormatSymbols_ln: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ln_CD.
     */
    var CompactNumberFormatSymbols_ln_CD: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lo.
     */
    var CompactNumberFormatSymbols_lo: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lo_LA.
     */
    var CompactNumberFormatSymbols_lo_LA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lt.
     */
    var CompactNumberFormatSymbols_lt: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lt_LT.
     */
    var CompactNumberFormatSymbols_lt_LT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lv.
     */
    var CompactNumberFormatSymbols_lv: any /*missing*/;

    /**
     * Compact number formatting symbols for locale lv_LV.
     */
    var CompactNumberFormatSymbols_lv_LV: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mk.
     */
    var CompactNumberFormatSymbols_mk: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mk_MK.
     */
    var CompactNumberFormatSymbols_mk_MK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ml.
     */
    var CompactNumberFormatSymbols_ml: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ml_IN.
     */
    var CompactNumberFormatSymbols_ml_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mn.
     */
    var CompactNumberFormatSymbols_mn: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mn_Cyrl_MN.
     */
    var CompactNumberFormatSymbols_mn_Cyrl_MN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mr.
     */
    var CompactNumberFormatSymbols_mr: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mr_IN.
     */
    var CompactNumberFormatSymbols_mr_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ms.
     */
    var CompactNumberFormatSymbols_ms: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ms_Latn_MY.
     */
    var CompactNumberFormatSymbols_ms_Latn_MY: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mt.
     */
    var CompactNumberFormatSymbols_mt: any /*missing*/;

    /**
     * Compact number formatting symbols for locale mt_MT.
     */
    var CompactNumberFormatSymbols_mt_MT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale my.
     */
    var CompactNumberFormatSymbols_my: any /*missing*/;

    /**
     * Compact number formatting symbols for locale my_MM.
     */
    var CompactNumberFormatSymbols_my_MM: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nb.
     */
    var CompactNumberFormatSymbols_nb: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nb_NO.
     */
    var CompactNumberFormatSymbols_nb_NO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nb_SJ.
     */
    var CompactNumberFormatSymbols_nb_SJ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ne.
     */
    var CompactNumberFormatSymbols_ne: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ne_NP.
     */
    var CompactNumberFormatSymbols_ne_NP: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nl.
     */
    var CompactNumberFormatSymbols_nl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale nl_NL.
     */
    var CompactNumberFormatSymbols_nl_NL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale no.
     */
    var CompactNumberFormatSymbols_no: any /*missing*/;

    /**
     * Compact number formatting symbols for locale no_NO.
     */
    var CompactNumberFormatSymbols_no_NO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale or.
     */
    var CompactNumberFormatSymbols_or: any /*missing*/;

    /**
     * Compact number formatting symbols for locale or_IN.
     */
    var CompactNumberFormatSymbols_or_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pa.
     */
    var CompactNumberFormatSymbols_pa: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pa_Guru_IN.
     */
    var CompactNumberFormatSymbols_pa_Guru_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pl.
     */
    var CompactNumberFormatSymbols_pl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pl_PL.
     */
    var CompactNumberFormatSymbols_pl_PL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt.
     */
    var CompactNumberFormatSymbols_pt: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_BR.
     */
    var CompactNumberFormatSymbols_pt_BR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale pt_PT.
     */
    var CompactNumberFormatSymbols_pt_PT: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ro.
     */
    var CompactNumberFormatSymbols_ro: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ro_RO.
     */
    var CompactNumberFormatSymbols_ro_RO: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ru.
     */
    var CompactNumberFormatSymbols_ru: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ru_RU.
     */
    var CompactNumberFormatSymbols_ru_RU: any /*missing*/;

    /**
     * Compact number formatting symbols for locale si.
     */
    var CompactNumberFormatSymbols_si: any /*missing*/;

    /**
     * Compact number formatting symbols for locale si_LK.
     */
    var CompactNumberFormatSymbols_si_LK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sk.
     */
    var CompactNumberFormatSymbols_sk: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sk_SK.
     */
    var CompactNumberFormatSymbols_sk_SK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sl.
     */
    var CompactNumberFormatSymbols_sl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sl_SI.
     */
    var CompactNumberFormatSymbols_sl_SI: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sq.
     */
    var CompactNumberFormatSymbols_sq: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sq_AL.
     */
    var CompactNumberFormatSymbols_sq_AL: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr.
     */
    var CompactNumberFormatSymbols_sr: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sr_Cyrl_RS.
     */
    var CompactNumberFormatSymbols_sr_Cyrl_RS: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sv.
     */
    var CompactNumberFormatSymbols_sv: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sv_SE.
     */
    var CompactNumberFormatSymbols_sv_SE: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sw.
     */
    var CompactNumberFormatSymbols_sw: any /*missing*/;

    /**
     * Compact number formatting symbols for locale sw_TZ.
     */
    var CompactNumberFormatSymbols_sw_TZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ta.
     */
    var CompactNumberFormatSymbols_ta: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ta_IN.
     */
    var CompactNumberFormatSymbols_ta_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale te.
     */
    var CompactNumberFormatSymbols_te: any /*missing*/;

    /**
     * Compact number formatting symbols for locale te_IN.
     */
    var CompactNumberFormatSymbols_te_IN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale th.
     */
    var CompactNumberFormatSymbols_th: any /*missing*/;

    /**
     * Compact number formatting symbols for locale th_TH.
     */
    var CompactNumberFormatSymbols_th_TH: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tl.
     */
    var CompactNumberFormatSymbols_tl: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tr.
     */
    var CompactNumberFormatSymbols_tr: any /*missing*/;

    /**
     * Compact number formatting symbols for locale tr_TR.
     */
    var CompactNumberFormatSymbols_tr_TR: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uk.
     */
    var CompactNumberFormatSymbols_uk: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uk_UA.
     */
    var CompactNumberFormatSymbols_uk_UA: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ur.
     */
    var CompactNumberFormatSymbols_ur: any /*missing*/;

    /**
     * Compact number formatting symbols for locale ur_PK.
     */
    var CompactNumberFormatSymbols_ur_PK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uz.
     */
    var CompactNumberFormatSymbols_uz: any /*missing*/;

    /**
     * Compact number formatting symbols for locale uz_Latn_UZ.
     */
    var CompactNumberFormatSymbols_uz_Latn_UZ: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vi.
     */
    var CompactNumberFormatSymbols_vi: any /*missing*/;

    /**
     * Compact number formatting symbols for locale vi_VN.
     */
    var CompactNumberFormatSymbols_vi_VN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh.
     */
    var CompactNumberFormatSymbols_zh: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_CN.
     */
    var CompactNumberFormatSymbols_zh_CN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_HK.
     */
    var CompactNumberFormatSymbols_zh_HK: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_Hans_CN.
     */
    var CompactNumberFormatSymbols_zh_Hans_CN: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zh_TW.
     */
    var CompactNumberFormatSymbols_zh_TW: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zu.
     */
    var CompactNumberFormatSymbols_zu: any /*missing*/;

    /**
     * Compact number formatting symbols for locale zu_ZA.
     */
    var CompactNumberFormatSymbols_zu_ZA: any /*missing*/;

    /**
     * The mapping of currency symbol through intl currency code.
     * The source of information is mostly from wikipedia and CLDR. Since there is
     * no authoritive source, items are judged by personal perception.
    
     * If an application need currency support that available in tier2, it
     * should extend currencyCodeMap to include tier2 data by doing this:
     *     goog.object.extend(goog.i18n.currencyCodeMap,
     *                        goog.i18n.currencyCodeMapTier2);
     *
     * @type {Object}
     * @const
     */
    var currencyCodeMap: Object;

    /**
     * This group of currency data is unlikely to be used. In case they are,
     * program need to merge it into goog.locale.CurrencyCodeMap.
     *
     * @type {Object}
     * @const
     */
    var currencyCodeMapTier2: Object;

    /**
     * Extended set of localized date/time patterns for locale af_NA.
     */
    var DateTimePatterns_af_NA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale af_ZA.
     */
    var DateTimePatterns_af_ZA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale agq.
     */
    var DateTimePatterns_agq: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale agq_CM.
     */
    var DateTimePatterns_agq_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ak.
     */
    var DateTimePatterns_ak: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ak_GH.
     */
    var DateTimePatterns_ak_GH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale am_ET.
     */
    var DateTimePatterns_am_ET: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_001.
     */
    var DateTimePatterns_ar_001: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_AE.
     */
    var DateTimePatterns_ar_AE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_BH.
     */
    var DateTimePatterns_ar_BH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_DJ.
     */
    var DateTimePatterns_ar_DJ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_DZ.
     */
    var DateTimePatterns_ar_DZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_EG.
     */
    var DateTimePatterns_ar_EG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_EH.
     */
    var DateTimePatterns_ar_EH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_ER.
     */
    var DateTimePatterns_ar_ER: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_IL.
     */
    var DateTimePatterns_ar_IL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_IQ.
     */
    var DateTimePatterns_ar_IQ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_JO.
     */
    var DateTimePatterns_ar_JO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_KM.
     */
    var DateTimePatterns_ar_KM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_KW.
     */
    var DateTimePatterns_ar_KW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_LB.
     */
    var DateTimePatterns_ar_LB: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_LY.
     */
    var DateTimePatterns_ar_LY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_MA.
     */
    var DateTimePatterns_ar_MA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_MR.
     */
    var DateTimePatterns_ar_MR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_OM.
     */
    var DateTimePatterns_ar_OM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_PS.
     */
    var DateTimePatterns_ar_PS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_QA.
     */
    var DateTimePatterns_ar_QA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_SA.
     */
    var DateTimePatterns_ar_SA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_SD.
     */
    var DateTimePatterns_ar_SD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_SO.
     */
    var DateTimePatterns_ar_SO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_SS.
     */
    var DateTimePatterns_ar_SS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_SY.
     */
    var DateTimePatterns_ar_SY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_TD.
     */
    var DateTimePatterns_ar_TD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_TN.
     */
    var DateTimePatterns_ar_TN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar_YE.
     */
    var DateTimePatterns_ar_YE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale as.
     */
    var DateTimePatterns_as: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale as_IN.
     */
    var DateTimePatterns_as_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale asa.
     */
    var DateTimePatterns_asa: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale asa_TZ.
     */
    var DateTimePatterns_asa_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale az_Cyrl.
     */
    var DateTimePatterns_az_Cyrl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale az_Cyrl_AZ.
     */
    var DateTimePatterns_az_Cyrl_AZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale az_Latn.
     */
    var DateTimePatterns_az_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale az_Latn_AZ.
     */
    var DateTimePatterns_az_Latn_AZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bas.
     */
    var DateTimePatterns_bas: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bas_CM.
     */
    var DateTimePatterns_bas_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale be.
     */
    var DateTimePatterns_be: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale be_BY.
     */
    var DateTimePatterns_be_BY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bem.
     */
    var DateTimePatterns_bem: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bem_ZM.
     */
    var DateTimePatterns_bem_ZM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bez.
     */
    var DateTimePatterns_bez: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bez_TZ.
     */
    var DateTimePatterns_bez_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bg_BG.
     */
    var DateTimePatterns_bg_BG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bm.
     */
    var DateTimePatterns_bm: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bm_ML.
     */
    var DateTimePatterns_bm_ML: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bn_BD.
     */
    var DateTimePatterns_bn_BD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bn_IN.
     */
    var DateTimePatterns_bn_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bo.
     */
    var DateTimePatterns_bo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bo_CN.
     */
    var DateTimePatterns_bo_CN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bo_IN.
     */
    var DateTimePatterns_bo_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale br_FR.
     */
    var DateTimePatterns_br_FR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale brx.
     */
    var DateTimePatterns_brx: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale brx_IN.
     */
    var DateTimePatterns_brx_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bs.
     */
    var DateTimePatterns_bs: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bs_Cyrl.
     */
    var DateTimePatterns_bs_Cyrl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bs_Cyrl_BA.
     */
    var DateTimePatterns_bs_Cyrl_BA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bs_Latn.
     */
    var DateTimePatterns_bs_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bs_Latn_BA.
     */
    var DateTimePatterns_bs_Latn_BA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ca_AD.
     */
    var DateTimePatterns_ca_AD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ca_ES.
     */
    var DateTimePatterns_ca_ES: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ca_FR.
     */
    var DateTimePatterns_ca_FR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ca_IT.
     */
    var DateTimePatterns_ca_IT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale cgg.
     */
    var DateTimePatterns_cgg: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale cgg_UG.
     */
    var DateTimePatterns_cgg_UG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale chr_US.
     */
    var DateTimePatterns_chr_US: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale cs_CZ.
     */
    var DateTimePatterns_cs_CZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale cy_GB.
     */
    var DateTimePatterns_cy_GB: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale da_DK.
     */
    var DateTimePatterns_da_DK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale da_GL.
     */
    var DateTimePatterns_da_GL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dav.
     */
    var DateTimePatterns_dav: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dav_KE.
     */
    var DateTimePatterns_dav_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale de_BE.
     */
    var DateTimePatterns_de_BE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale de_DE.
     */
    var DateTimePatterns_de_DE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale de_LI.
     */
    var DateTimePatterns_de_LI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale de_LU.
     */
    var DateTimePatterns_de_LU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dje.
     */
    var DateTimePatterns_dje: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dje_NE.
     */
    var DateTimePatterns_dje_NE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dua.
     */
    var DateTimePatterns_dua: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dua_CM.
     */
    var DateTimePatterns_dua_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dyo.
     */
    var DateTimePatterns_dyo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dyo_SN.
     */
    var DateTimePatterns_dyo_SN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dz.
     */
    var DateTimePatterns_dz: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale dz_BT.
     */
    var DateTimePatterns_dz_BT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ebu.
     */
    var DateTimePatterns_ebu: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ebu_KE.
     */
    var DateTimePatterns_ebu_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ee.
     */
    var DateTimePatterns_ee: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ee_GH.
     */
    var DateTimePatterns_ee_GH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ee_TG.
     */
    var DateTimePatterns_ee_TG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale el_CY.
     */
    var DateTimePatterns_el_CY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale el_GR.
     */
    var DateTimePatterns_el_GR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_001.
     */
    var DateTimePatterns_en_001: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_150.
     */
    var DateTimePatterns_en_150: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_AG.
     */
    var DateTimePatterns_en_AG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_AI.
     */
    var DateTimePatterns_en_AI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_AS.
     */
    var DateTimePatterns_en_AS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_BB.
     */
    var DateTimePatterns_en_BB: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_BE.
     */
    var DateTimePatterns_en_BE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_BM.
     */
    var DateTimePatterns_en_BM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_BS.
     */
    var DateTimePatterns_en_BS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_BW.
     */
    var DateTimePatterns_en_BW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_BZ.
     */
    var DateTimePatterns_en_BZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_CA.
     */
    var DateTimePatterns_en_CA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_CC.
     */
    var DateTimePatterns_en_CC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_CK.
     */
    var DateTimePatterns_en_CK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_CM.
     */
    var DateTimePatterns_en_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_CX.
     */
    var DateTimePatterns_en_CX: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_DG.
     */
    var DateTimePatterns_en_DG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_DM.
     */
    var DateTimePatterns_en_DM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_ER.
     */
    var DateTimePatterns_en_ER: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_FJ.
     */
    var DateTimePatterns_en_FJ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_FK.
     */
    var DateTimePatterns_en_FK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_FM.
     */
    var DateTimePatterns_en_FM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_GD.
     */
    var DateTimePatterns_en_GD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_GG.
     */
    var DateTimePatterns_en_GG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_GH.
     */
    var DateTimePatterns_en_GH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_GI.
     */
    var DateTimePatterns_en_GI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_GM.
     */
    var DateTimePatterns_en_GM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_GU.
     */
    var DateTimePatterns_en_GU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_GY.
     */
    var DateTimePatterns_en_GY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_HK.
     */
    var DateTimePatterns_en_HK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_IM.
     */
    var DateTimePatterns_en_IM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_IO.
     */
    var DateTimePatterns_en_IO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_JE.
     */
    var DateTimePatterns_en_JE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_JM.
     */
    var DateTimePatterns_en_JM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_KE.
     */
    var DateTimePatterns_en_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_KI.
     */
    var DateTimePatterns_en_KI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_KN.
     */
    var DateTimePatterns_en_KN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_KY.
     */
    var DateTimePatterns_en_KY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_LC.
     */
    var DateTimePatterns_en_LC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_LR.
     */
    var DateTimePatterns_en_LR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_LS.
     */
    var DateTimePatterns_en_LS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_MG.
     */
    var DateTimePatterns_en_MG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_MH.
     */
    var DateTimePatterns_en_MH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_MO.
     */
    var DateTimePatterns_en_MO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_MP.
     */
    var DateTimePatterns_en_MP: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_MS.
     */
    var DateTimePatterns_en_MS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_MT.
     */
    var DateTimePatterns_en_MT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_MU.
     */
    var DateTimePatterns_en_MU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_MW.
     */
    var DateTimePatterns_en_MW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_NA.
     */
    var DateTimePatterns_en_NA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_NF.
     */
    var DateTimePatterns_en_NF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_NG.
     */
    var DateTimePatterns_en_NG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_NR.
     */
    var DateTimePatterns_en_NR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_NU.
     */
    var DateTimePatterns_en_NU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_NZ.
     */
    var DateTimePatterns_en_NZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_PG.
     */
    var DateTimePatterns_en_PG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_PH.
     */
    var DateTimePatterns_en_PH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_PK.
     */
    var DateTimePatterns_en_PK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_PN.
     */
    var DateTimePatterns_en_PN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_PR.
     */
    var DateTimePatterns_en_PR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_PW.
     */
    var DateTimePatterns_en_PW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_RW.
     */
    var DateTimePatterns_en_RW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SB.
     */
    var DateTimePatterns_en_SB: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SC.
     */
    var DateTimePatterns_en_SC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SD.
     */
    var DateTimePatterns_en_SD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SH.
     */
    var DateTimePatterns_en_SH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SL.
     */
    var DateTimePatterns_en_SL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SS.
     */
    var DateTimePatterns_en_SS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SX.
     */
    var DateTimePatterns_en_SX: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SZ.
     */
    var DateTimePatterns_en_SZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_TC.
     */
    var DateTimePatterns_en_TC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_TK.
     */
    var DateTimePatterns_en_TK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_TO.
     */
    var DateTimePatterns_en_TO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_TT.
     */
    var DateTimePatterns_en_TT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_TV.
     */
    var DateTimePatterns_en_TV: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_TZ.
     */
    var DateTimePatterns_en_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_UG.
     */
    var DateTimePatterns_en_UG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_UM.
     */
    var DateTimePatterns_en_UM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_US_POSIX.
     */
    var DateTimePatterns_en_US_POSIX: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_VC.
     */
    var DateTimePatterns_en_VC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_VG.
     */
    var DateTimePatterns_en_VG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_VI.
     */
    var DateTimePatterns_en_VI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_VU.
     */
    var DateTimePatterns_en_VU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_WS.
     */
    var DateTimePatterns_en_WS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_ZM.
     */
    var DateTimePatterns_en_ZM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_ZW.
     */
    var DateTimePatterns_en_ZW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale eo.
     */
    var DateTimePatterns_eo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_AR.
     */
    var DateTimePatterns_es_AR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_BO.
     */
    var DateTimePatterns_es_BO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_CL.
     */
    var DateTimePatterns_es_CL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_CO.
     */
    var DateTimePatterns_es_CO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_CR.
     */
    var DateTimePatterns_es_CR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_CU.
     */
    var DateTimePatterns_es_CU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_DO.
     */
    var DateTimePatterns_es_DO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_EA.
     */
    var DateTimePatterns_es_EA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_EC.
     */
    var DateTimePatterns_es_EC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_GQ.
     */
    var DateTimePatterns_es_GQ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_GT.
     */
    var DateTimePatterns_es_GT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_HN.
     */
    var DateTimePatterns_es_HN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_IC.
     */
    var DateTimePatterns_es_IC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_MX.
     */
    var DateTimePatterns_es_MX: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_NI.
     */
    var DateTimePatterns_es_NI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_PA.
     */
    var DateTimePatterns_es_PA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_PE.
     */
    var DateTimePatterns_es_PE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_PH.
     */
    var DateTimePatterns_es_PH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_PR.
     */
    var DateTimePatterns_es_PR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_PY.
     */
    var DateTimePatterns_es_PY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_SV.
     */
    var DateTimePatterns_es_SV: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_US.
     */
    var DateTimePatterns_es_US: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_UY.
     */
    var DateTimePatterns_es_UY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_VE.
     */
    var DateTimePatterns_es_VE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale et_EE.
     */
    var DateTimePatterns_et_EE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale eu_ES.
     */
    var DateTimePatterns_eu_ES: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ewo.
     */
    var DateTimePatterns_ewo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ewo_CM.
     */
    var DateTimePatterns_ewo_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fa_AF.
     */
    var DateTimePatterns_fa_AF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fa_IR.
     */
    var DateTimePatterns_fa_IR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ff.
     */
    var DateTimePatterns_ff: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ff_SN.
     */
    var DateTimePatterns_ff_SN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fi_FI.
     */
    var DateTimePatterns_fi_FI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fil_PH.
     */
    var DateTimePatterns_fil_PH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fo.
     */
    var DateTimePatterns_fo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fo_FO.
     */
    var DateTimePatterns_fo_FO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_BE.
     */
    var DateTimePatterns_fr_BE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_BF.
     */
    var DateTimePatterns_fr_BF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_BI.
     */
    var DateTimePatterns_fr_BI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_BJ.
     */
    var DateTimePatterns_fr_BJ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_BL.
     */
    var DateTimePatterns_fr_BL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_CD.
     */
    var DateTimePatterns_fr_CD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_CF.
     */
    var DateTimePatterns_fr_CF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_CG.
     */
    var DateTimePatterns_fr_CG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_CH.
     */
    var DateTimePatterns_fr_CH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_CI.
     */
    var DateTimePatterns_fr_CI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_CM.
     */
    var DateTimePatterns_fr_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_DJ.
     */
    var DateTimePatterns_fr_DJ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_DZ.
     */
    var DateTimePatterns_fr_DZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_FR.
     */
    var DateTimePatterns_fr_FR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_GA.
     */
    var DateTimePatterns_fr_GA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_GF.
     */
    var DateTimePatterns_fr_GF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_GN.
     */
    var DateTimePatterns_fr_GN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_GP.
     */
    var DateTimePatterns_fr_GP: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_GQ.
     */
    var DateTimePatterns_fr_GQ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_HT.
     */
    var DateTimePatterns_fr_HT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_KM.
     */
    var DateTimePatterns_fr_KM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_LU.
     */
    var DateTimePatterns_fr_LU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_MA.
     */
    var DateTimePatterns_fr_MA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_MC.
     */
    var DateTimePatterns_fr_MC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_MF.
     */
    var DateTimePatterns_fr_MF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_MG.
     */
    var DateTimePatterns_fr_MG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_ML.
     */
    var DateTimePatterns_fr_ML: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_MQ.
     */
    var DateTimePatterns_fr_MQ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_MR.
     */
    var DateTimePatterns_fr_MR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_MU.
     */
    var DateTimePatterns_fr_MU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_NC.
     */
    var DateTimePatterns_fr_NC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_NE.
     */
    var DateTimePatterns_fr_NE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_PF.
     */
    var DateTimePatterns_fr_PF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_PM.
     */
    var DateTimePatterns_fr_PM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_RE.
     */
    var DateTimePatterns_fr_RE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_RW.
     */
    var DateTimePatterns_fr_RW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_SC.
     */
    var DateTimePatterns_fr_SC: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_SN.
     */
    var DateTimePatterns_fr_SN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_SY.
     */
    var DateTimePatterns_fr_SY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_TD.
     */
    var DateTimePatterns_fr_TD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_TG.
     */
    var DateTimePatterns_fr_TG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_TN.
     */
    var DateTimePatterns_fr_TN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_VU.
     */
    var DateTimePatterns_fr_VU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_WF.
     */
    var DateTimePatterns_fr_WF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_YT.
     */
    var DateTimePatterns_fr_YT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ga.
     */
    var DateTimePatterns_ga: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ga_IE.
     */
    var DateTimePatterns_ga_IE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gl_ES.
     */
    var DateTimePatterns_gl_ES: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gsw_CH.
     */
    var DateTimePatterns_gsw_CH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gsw_LI.
     */
    var DateTimePatterns_gsw_LI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gu_IN.
     */
    var DateTimePatterns_gu_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale guz.
     */
    var DateTimePatterns_guz: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale guz_KE.
     */
    var DateTimePatterns_guz_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gv.
     */
    var DateTimePatterns_gv: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gv_IM.
     */
    var DateTimePatterns_gv_IM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ha.
     */
    var DateTimePatterns_ha: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ha_Latn.
     */
    var DateTimePatterns_ha_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ha_Latn_GH.
     */
    var DateTimePatterns_ha_Latn_GH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ha_Latn_NE.
     */
    var DateTimePatterns_ha_Latn_NE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ha_Latn_NG.
     */
    var DateTimePatterns_ha_Latn_NG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale haw_US.
     */
    var DateTimePatterns_haw_US: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale he_IL.
     */
    var DateTimePatterns_he_IL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hi_IN.
     */
    var DateTimePatterns_hi_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hr_BA.
     */
    var DateTimePatterns_hr_BA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hr_HR.
     */
    var DateTimePatterns_hr_HR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hu_HU.
     */
    var DateTimePatterns_hu_HU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hy_AM.
     */
    var DateTimePatterns_hy_AM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale id_ID.
     */
    var DateTimePatterns_id_ID: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ig.
     */
    var DateTimePatterns_ig: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ig_NG.
     */
    var DateTimePatterns_ig_NG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ii.
     */
    var DateTimePatterns_ii: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ii_CN.
     */
    var DateTimePatterns_ii_CN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale is_IS.
     */
    var DateTimePatterns_is_IS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale it_CH.
     */
    var DateTimePatterns_it_CH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale it_IT.
     */
    var DateTimePatterns_it_IT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale it_SM.
     */
    var DateTimePatterns_it_SM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ja_JP.
     */
    var DateTimePatterns_ja_JP: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale jgo.
     */
    var DateTimePatterns_jgo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale jgo_CM.
     */
    var DateTimePatterns_jgo_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale jmc.
     */
    var DateTimePatterns_jmc: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale jmc_TZ.
     */
    var DateTimePatterns_jmc_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ka_GE.
     */
    var DateTimePatterns_ka_GE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kab.
     */
    var DateTimePatterns_kab: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kab_DZ.
     */
    var DateTimePatterns_kab_DZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kam.
     */
    var DateTimePatterns_kam: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kam_KE.
     */
    var DateTimePatterns_kam_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kde.
     */
    var DateTimePatterns_kde: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kde_TZ.
     */
    var DateTimePatterns_kde_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kea.
     */
    var DateTimePatterns_kea: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kea_CV.
     */
    var DateTimePatterns_kea_CV: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale khq.
     */
    var DateTimePatterns_khq: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale khq_ML.
     */
    var DateTimePatterns_khq_ML: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ki.
     */
    var DateTimePatterns_ki: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ki_KE.
     */
    var DateTimePatterns_ki_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kk_Cyrl.
     */
    var DateTimePatterns_kk_Cyrl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kk_Cyrl_KZ.
     */
    var DateTimePatterns_kk_Cyrl_KZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kkj.
     */
    var DateTimePatterns_kkj: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kkj_CM.
     */
    var DateTimePatterns_kkj_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kl.
     */
    var DateTimePatterns_kl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kl_GL.
     */
    var DateTimePatterns_kl_GL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kln.
     */
    var DateTimePatterns_kln: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kln_KE.
     */
    var DateTimePatterns_kln_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale km_KH.
     */
    var DateTimePatterns_km_KH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kn_IN.
     */
    var DateTimePatterns_kn_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ko_KP.
     */
    var DateTimePatterns_ko_KP: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ko_KR.
     */
    var DateTimePatterns_ko_KR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kok.
     */
    var DateTimePatterns_kok: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kok_IN.
     */
    var DateTimePatterns_kok_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ks.
     */
    var DateTimePatterns_ks: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ks_Arab.
     */
    var DateTimePatterns_ks_Arab: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ks_Arab_IN.
     */
    var DateTimePatterns_ks_Arab_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ksb.
     */
    var DateTimePatterns_ksb: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ksb_TZ.
     */
    var DateTimePatterns_ksb_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ksf.
     */
    var DateTimePatterns_ksf: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ksf_CM.
     */
    var DateTimePatterns_ksf_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kw.
     */
    var DateTimePatterns_kw: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kw_GB.
     */
    var DateTimePatterns_kw_GB: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ky_Cyrl.
     */
    var DateTimePatterns_ky_Cyrl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ky_Cyrl_KG.
     */
    var DateTimePatterns_ky_Cyrl_KG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lag.
     */
    var DateTimePatterns_lag: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lag_TZ.
     */
    var DateTimePatterns_lag_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lg.
     */
    var DateTimePatterns_lg: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lg_UG.
     */
    var DateTimePatterns_lg_UG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lkt.
     */
    var DateTimePatterns_lkt: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lkt_US.
     */
    var DateTimePatterns_lkt_US: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ln_AO.
     */
    var DateTimePatterns_ln_AO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ln_CD.
     */
    var DateTimePatterns_ln_CD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ln_CF.
     */
    var DateTimePatterns_ln_CF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ln_CG.
     */
    var DateTimePatterns_ln_CG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lo_LA.
     */
    var DateTimePatterns_lo_LA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lt_LT.
     */
    var DateTimePatterns_lt_LT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lu.
     */
    var DateTimePatterns_lu: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lu_CD.
     */
    var DateTimePatterns_lu_CD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale luo.
     */
    var DateTimePatterns_luo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale luo_KE.
     */
    var DateTimePatterns_luo_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale luy.
     */
    var DateTimePatterns_luy: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale luy_KE.
     */
    var DateTimePatterns_luy_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lv_LV.
     */
    var DateTimePatterns_lv_LV: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mas.
     */
    var DateTimePatterns_mas: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mas_KE.
     */
    var DateTimePatterns_mas_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mas_TZ.
     */
    var DateTimePatterns_mas_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mer.
     */
    var DateTimePatterns_mer: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mer_KE.
     */
    var DateTimePatterns_mer_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mfe.
     */
    var DateTimePatterns_mfe: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mfe_MU.
     */
    var DateTimePatterns_mfe_MU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mg.
     */
    var DateTimePatterns_mg: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mg_MG.
     */
    var DateTimePatterns_mg_MG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mgh.
     */
    var DateTimePatterns_mgh: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mgh_MZ.
     */
    var DateTimePatterns_mgh_MZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mgo.
     */
    var DateTimePatterns_mgo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mgo_CM.
     */
    var DateTimePatterns_mgo_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mk_MK.
     */
    var DateTimePatterns_mk_MK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ml_IN.
     */
    var DateTimePatterns_ml_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mn_Cyrl.
     */
    var DateTimePatterns_mn_Cyrl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mn_Cyrl_MN.
     */
    var DateTimePatterns_mn_Cyrl_MN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mr_IN.
     */
    var DateTimePatterns_mr_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ms_Latn.
     */
    var DateTimePatterns_ms_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ms_Latn_BN.
     */
    var DateTimePatterns_ms_Latn_BN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ms_Latn_MY.
     */
    var DateTimePatterns_ms_Latn_MY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ms_Latn_SG.
     */
    var DateTimePatterns_ms_Latn_SG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mt_MT.
     */
    var DateTimePatterns_mt_MT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mua.
     */
    var DateTimePatterns_mua: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mua_CM.
     */
    var DateTimePatterns_mua_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale my_MM.
     */
    var DateTimePatterns_my_MM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale naq.
     */
    var DateTimePatterns_naq: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale naq_NA.
     */
    var DateTimePatterns_naq_NA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nb_NO.
     */
    var DateTimePatterns_nb_NO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nb_SJ.
     */
    var DateTimePatterns_nb_SJ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nd.
     */
    var DateTimePatterns_nd: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nd_ZW.
     */
    var DateTimePatterns_nd_ZW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ne_IN.
     */
    var DateTimePatterns_ne_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ne_NP.
     */
    var DateTimePatterns_ne_NP: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nl_AW.
     */
    var DateTimePatterns_nl_AW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nl_BE.
     */
    var DateTimePatterns_nl_BE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nl_BQ.
     */
    var DateTimePatterns_nl_BQ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nl_CW.
     */
    var DateTimePatterns_nl_CW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nl_NL.
     */
    var DateTimePatterns_nl_NL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nl_SR.
     */
    var DateTimePatterns_nl_SR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nl_SX.
     */
    var DateTimePatterns_nl_SX: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nmg.
     */
    var DateTimePatterns_nmg: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nmg_CM.
     */
    var DateTimePatterns_nmg_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nn.
     */
    var DateTimePatterns_nn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nn_NO.
     */
    var DateTimePatterns_nn_NO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nnh.
     */
    var DateTimePatterns_nnh: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nnh_CM.
     */
    var DateTimePatterns_nnh_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nus.
     */
    var DateTimePatterns_nus: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nus_SD.
     */
    var DateTimePatterns_nus_SD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nyn.
     */
    var DateTimePatterns_nyn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nyn_UG.
     */
    var DateTimePatterns_nyn_UG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale om.
     */
    var DateTimePatterns_om: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale om_ET.
     */
    var DateTimePatterns_om_ET: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale om_KE.
     */
    var DateTimePatterns_om_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale or_IN.
     */
    var DateTimePatterns_or_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pa_Arab.
     */
    var DateTimePatterns_pa_Arab: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pa_Arab_PK.
     */
    var DateTimePatterns_pa_Arab_PK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pa_Guru.
     */
    var DateTimePatterns_pa_Guru: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pa_Guru_IN.
     */
    var DateTimePatterns_pa_Guru_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pl_PL.
     */
    var DateTimePatterns_pl_PL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ps.
     */
    var DateTimePatterns_ps: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ps_AF.
     */
    var DateTimePatterns_ps_AF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_AO.
     */
    var DateTimePatterns_pt_AO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_CV.
     */
    var DateTimePatterns_pt_CV: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_GW.
     */
    var DateTimePatterns_pt_GW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_MO.
     */
    var DateTimePatterns_pt_MO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_MZ.
     */
    var DateTimePatterns_pt_MZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_ST.
     */
    var DateTimePatterns_pt_ST: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_TL.
     */
    var DateTimePatterns_pt_TL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rm.
     */
    var DateTimePatterns_rm: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rm_CH.
     */
    var DateTimePatterns_rm_CH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rn.
     */
    var DateTimePatterns_rn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rn_BI.
     */
    var DateTimePatterns_rn_BI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ro_MD.
     */
    var DateTimePatterns_ro_MD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ro_RO.
     */
    var DateTimePatterns_ro_RO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rof.
     */
    var DateTimePatterns_rof: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rof_TZ.
     */
    var DateTimePatterns_rof_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ru_BY.
     */
    var DateTimePatterns_ru_BY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ru_KG.
     */
    var DateTimePatterns_ru_KG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ru_KZ.
     */
    var DateTimePatterns_ru_KZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ru_MD.
     */
    var DateTimePatterns_ru_MD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ru_RU.
     */
    var DateTimePatterns_ru_RU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ru_UA.
     */
    var DateTimePatterns_ru_UA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rw.
     */
    var DateTimePatterns_rw: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rw_RW.
     */
    var DateTimePatterns_rw_RW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rwk.
     */
    var DateTimePatterns_rwk: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale rwk_TZ.
     */
    var DateTimePatterns_rwk_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale saq.
     */
    var DateTimePatterns_saq: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale saq_KE.
     */
    var DateTimePatterns_saq_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sbp.
     */
    var DateTimePatterns_sbp: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sbp_TZ.
     */
    var DateTimePatterns_sbp_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale seh.
     */
    var DateTimePatterns_seh: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale seh_MZ.
     */
    var DateTimePatterns_seh_MZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ses.
     */
    var DateTimePatterns_ses: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ses_ML.
     */
    var DateTimePatterns_ses_ML: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sg.
     */
    var DateTimePatterns_sg: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sg_CF.
     */
    var DateTimePatterns_sg_CF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale shi.
     */
    var DateTimePatterns_shi: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale shi_Latn.
     */
    var DateTimePatterns_shi_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale shi_Latn_MA.
     */
    var DateTimePatterns_shi_Latn_MA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale shi_Tfng.
     */
    var DateTimePatterns_shi_Tfng: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale shi_Tfng_MA.
     */
    var DateTimePatterns_shi_Tfng_MA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale si_LK.
     */
    var DateTimePatterns_si_LK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sk_SK.
     */
    var DateTimePatterns_sk_SK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sl_SI.
     */
    var DateTimePatterns_sl_SI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sn.
     */
    var DateTimePatterns_sn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sn_ZW.
     */
    var DateTimePatterns_sn_ZW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale so.
     */
    var DateTimePatterns_so: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale so_DJ.
     */
    var DateTimePatterns_so_DJ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale so_ET.
     */
    var DateTimePatterns_so_ET: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale so_KE.
     */
    var DateTimePatterns_so_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale so_SO.
     */
    var DateTimePatterns_so_SO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sq_AL.
     */
    var DateTimePatterns_sq_AL: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sq_MK.
     */
    var DateTimePatterns_sq_MK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sq_XK.
     */
    var DateTimePatterns_sq_XK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Cyrl.
     */
    var DateTimePatterns_sr_Cyrl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Cyrl_BA.
     */
    var DateTimePatterns_sr_Cyrl_BA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Cyrl_ME.
     */
    var DateTimePatterns_sr_Cyrl_ME: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Cyrl_RS.
     */
    var DateTimePatterns_sr_Cyrl_RS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Cyrl_XK.
     */
    var DateTimePatterns_sr_Cyrl_XK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Latn.
     */
    var DateTimePatterns_sr_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Latn_BA.
     */
    var DateTimePatterns_sr_Latn_BA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Latn_ME.
     */
    var DateTimePatterns_sr_Latn_ME: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Latn_RS.
     */
    var DateTimePatterns_sr_Latn_RS: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr_Latn_XK.
     */
    var DateTimePatterns_sr_Latn_XK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sv_AX.
     */
    var DateTimePatterns_sv_AX: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sv_FI.
     */
    var DateTimePatterns_sv_FI: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sv_SE.
     */
    var DateTimePatterns_sv_SE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sw_KE.
     */
    var DateTimePatterns_sw_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sw_TZ.
     */
    var DateTimePatterns_sw_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sw_UG.
     */
    var DateTimePatterns_sw_UG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale swc.
     */
    var DateTimePatterns_swc: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale swc_CD.
     */
    var DateTimePatterns_swc_CD: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ta_IN.
     */
    var DateTimePatterns_ta_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ta_LK.
     */
    var DateTimePatterns_ta_LK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ta_MY.
     */
    var DateTimePatterns_ta_MY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ta_SG.
     */
    var DateTimePatterns_ta_SG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale te_IN.
     */
    var DateTimePatterns_te_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale teo.
     */
    var DateTimePatterns_teo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale teo_KE.
     */
    var DateTimePatterns_teo_KE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale teo_UG.
     */
    var DateTimePatterns_teo_UG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale th_TH.
     */
    var DateTimePatterns_th_TH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ti.
     */
    var DateTimePatterns_ti: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ti_ER.
     */
    var DateTimePatterns_ti_ER: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ti_ET.
     */
    var DateTimePatterns_ti_ET: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale to.
     */
    var DateTimePatterns_to: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale to_TO.
     */
    var DateTimePatterns_to_TO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale tr_CY.
     */
    var DateTimePatterns_tr_CY: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale tr_TR.
     */
    var DateTimePatterns_tr_TR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale twq.
     */
    var DateTimePatterns_twq: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale twq_NE.
     */
    var DateTimePatterns_twq_NE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale tzm.
     */
    var DateTimePatterns_tzm: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale tzm_Latn.
     */
    var DateTimePatterns_tzm_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale tzm_Latn_MA.
     */
    var DateTimePatterns_tzm_Latn_MA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uk_UA.
     */
    var DateTimePatterns_uk_UA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ur_IN.
     */
    var DateTimePatterns_ur_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ur_PK.
     */
    var DateTimePatterns_ur_PK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uz_Arab.
     */
    var DateTimePatterns_uz_Arab: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uz_Arab_AF.
     */
    var DateTimePatterns_uz_Arab_AF: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uz_Cyrl.
     */
    var DateTimePatterns_uz_Cyrl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uz_Cyrl_UZ.
     */
    var DateTimePatterns_uz_Cyrl_UZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uz_Latn.
     */
    var DateTimePatterns_uz_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uz_Latn_UZ.
     */
    var DateTimePatterns_uz_Latn_UZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vai.
     */
    var DateTimePatterns_vai: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vai_Latn.
     */
    var DateTimePatterns_vai_Latn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vai_Latn_LR.
     */
    var DateTimePatterns_vai_Latn_LR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vai_Vaii.
     */
    var DateTimePatterns_vai_Vaii: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vai_Vaii_LR.
     */
    var DateTimePatterns_vai_Vaii_LR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vi_VN.
     */
    var DateTimePatterns_vi_VN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vun.
     */
    var DateTimePatterns_vun: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vun_TZ.
     */
    var DateTimePatterns_vun_TZ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale xog.
     */
    var DateTimePatterns_xog: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale xog_UG.
     */
    var DateTimePatterns_xog_UG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale yav.
     */
    var DateTimePatterns_yav: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale yav_CM.
     */
    var DateTimePatterns_yav_CM: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale yo.
     */
    var DateTimePatterns_yo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale yo_BJ.
     */
    var DateTimePatterns_yo_BJ: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale yo_NG.
     */
    var DateTimePatterns_yo_NG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zgh.
     */
    var DateTimePatterns_zgh: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zgh_MA.
     */
    var DateTimePatterns_zgh_MA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hans.
     */
    var DateTimePatterns_zh_Hans: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hans_CN.
     */
    var DateTimePatterns_zh_Hans_CN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hans_HK.
     */
    var DateTimePatterns_zh_Hans_HK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hans_MO.
     */
    var DateTimePatterns_zh_Hans_MO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hans_SG.
     */
    var DateTimePatterns_zh_Hans_SG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hant.
     */
    var DateTimePatterns_zh_Hant: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hant_HK.
     */
    var DateTimePatterns_zh_Hant_HK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hant_MO.
     */
    var DateTimePatterns_zh_Hant_MO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_Hant_TW.
     */
    var DateTimePatterns_zh_Hant_TW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zu_ZA.
     */
    var DateTimePatterns_zu_ZA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale af.
     */
    var DateTimePatterns_af: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale am.
     */
    var DateTimePatterns_am: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ar.
     */
    var DateTimePatterns_ar: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale az.
     */
    var DateTimePatterns_az: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bg.
     */
    var DateTimePatterns_bg: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale bn.
     */
    var DateTimePatterns_bn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale br.
     */
    var DateTimePatterns_br: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ca.
     */
    var DateTimePatterns_ca: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale chr.
     */
    var DateTimePatterns_chr: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale cs.
     */
    var DateTimePatterns_cs: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale cy.
     */
    var DateTimePatterns_cy: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale da.
     */
    var DateTimePatterns_da: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale de.
     */
    var DateTimePatterns_de: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale de_AT.
     */
    var DateTimePatterns_de_AT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale de_CH.
     */
    var DateTimePatterns_de_CH: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale el.
     */
    var DateTimePatterns_el: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en.
     */
    var DateTimePatterns_en: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_AU.
     */
    var DateTimePatterns_en_AU: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_GB.
     */
    var DateTimePatterns_en_GB: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_IE.
     */
    var DateTimePatterns_en_IE: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_IN.
     */
    var DateTimePatterns_en_IN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_SG.
     */
    var DateTimePatterns_en_SG: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_US.
     */
    var DateTimePatterns_en_US: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale en_ZA.
     */
    var DateTimePatterns_en_ZA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es.
     */
    var DateTimePatterns_es: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_419.
     */
    var DateTimePatterns_es_419: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale es_ES.
     */
    var DateTimePatterns_es_ES: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale et.
     */
    var DateTimePatterns_et: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale eu.
     */
    var DateTimePatterns_eu: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fa.
     */
    var DateTimePatterns_fa: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fi.
     */
    var DateTimePatterns_fi: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fil.
     */
    var DateTimePatterns_fil: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr.
     */
    var DateTimePatterns_fr: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale fr_CA.
     */
    var DateTimePatterns_fr_CA: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gl.
     */
    var DateTimePatterns_gl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gsw.
     */
    var DateTimePatterns_gsw: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale gu.
     */
    var DateTimePatterns_gu: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale haw.
     */
    var DateTimePatterns_haw: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale he.
     */
    var DateTimePatterns_he: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hi.
     */
    var DateTimePatterns_hi: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hr.
     */
    var DateTimePatterns_hr: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hu.
     */
    var DateTimePatterns_hu: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale hy.
     */
    var DateTimePatterns_hy: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale id.
     */
    var DateTimePatterns_id: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale in.
     */
    var DateTimePatterns_in: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale is.
     */
    var DateTimePatterns_is: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale it.
     */
    var DateTimePatterns_it: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale iw.
     */
    var DateTimePatterns_iw: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ja.
     */
    var DateTimePatterns_ja: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ka.
     */
    var DateTimePatterns_ka: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kk.
     */
    var DateTimePatterns_kk: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale km.
     */
    var DateTimePatterns_km: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale kn.
     */
    var DateTimePatterns_kn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ko.
     */
    var DateTimePatterns_ko: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ky.
     */
    var DateTimePatterns_ky: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ln.
     */
    var DateTimePatterns_ln: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lo.
     */
    var DateTimePatterns_lo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lt.
     */
    var DateTimePatterns_lt: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale lv.
     */
    var DateTimePatterns_lv: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mk.
     */
    var DateTimePatterns_mk: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ml.
     */
    var DateTimePatterns_ml: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mn.
     */
    var DateTimePatterns_mn: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mo.
     */
    var DateTimePatterns_mo: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mr.
     */
    var DateTimePatterns_mr: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ms.
     */
    var DateTimePatterns_ms: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale mt.
     */
    var DateTimePatterns_mt: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale my.
     */
    var DateTimePatterns_my: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nb.
     */
    var DateTimePatterns_nb: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ne.
     */
    var DateTimePatterns_ne: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale nl.
     */
    var DateTimePatterns_nl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale no.
     */
    var DateTimePatterns_no: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale no_NO.
     */
    var DateTimePatterns_no_NO: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale or.
     */
    var DateTimePatterns_or: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pa.
     */
    var DateTimePatterns_pa: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pl.
     */
    var DateTimePatterns_pl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt.
     */
    var DateTimePatterns_pt: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_BR.
     */
    var DateTimePatterns_pt_BR: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale pt_PT.
     */
    var DateTimePatterns_pt_PT: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ro.
     */
    var DateTimePatterns_ro: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ru.
     */
    var DateTimePatterns_ru: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sh.
     */
    var DateTimePatterns_sh: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale si.
     */
    var DateTimePatterns_si: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sk.
     */
    var DateTimePatterns_sk: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sl.
     */
    var DateTimePatterns_sl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sq.
     */
    var DateTimePatterns_sq: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sr.
     */
    var DateTimePatterns_sr: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sv.
     */
    var DateTimePatterns_sv: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale sw.
     */
    var DateTimePatterns_sw: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ta.
     */
    var DateTimePatterns_ta: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale te.
     */
    var DateTimePatterns_te: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale th.
     */
    var DateTimePatterns_th: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale tl.
     */
    var DateTimePatterns_tl: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale tr.
     */
    var DateTimePatterns_tr: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uk.
     */
    var DateTimePatterns_uk: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale ur.
     */
    var DateTimePatterns_ur: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale uz.
     */
    var DateTimePatterns_uz: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale vi.
     */
    var DateTimePatterns_vi: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh.
     */
    var DateTimePatterns_zh: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_CN.
     */
    var DateTimePatterns_zh_CN: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_HK.
     */
    var DateTimePatterns_zh_HK: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zh_TW.
     */
    var DateTimePatterns_zh_TW: any /*missing*/;

    /**
     * Extended set of localized date/time patterns for locale zu.
     */
    var DateTimePatterns_zu: any /*missing*/;

    /**
    /* Select date/time pattern by locale.
     */
    var DateTimePatterns: any /*missing*/;

    /**
     * Date/time formatting symbols for locale aa.
     */
    var DateTimeSymbols_aa: any /*missing*/;

    /**
     * Date/time formatting symbols for locale aa_DJ.
     */
    var DateTimeSymbols_aa_DJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale aa_ER.
     */
    var DateTimeSymbols_aa_ER: any /*missing*/;

    /**
     * Date/time formatting symbols for locale aa_ET.
     */
    var DateTimeSymbols_aa_ET: any /*missing*/;

    /**
     * Date/time formatting symbols for locale af_NA.
     */
    var DateTimeSymbols_af_NA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale af_ZA.
     */
    var DateTimeSymbols_af_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale agq.
     */
    var DateTimeSymbols_agq: any /*missing*/;

    /**
     * Date/time formatting symbols for locale agq_CM.
     */
    var DateTimeSymbols_agq_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ak.
     */
    var DateTimeSymbols_ak: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ak_GH.
     */
    var DateTimeSymbols_ak_GH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale am_ET.
     */
    var DateTimeSymbols_am_ET: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_001.
     */
    var DateTimeSymbols_ar_001: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_AE.
     */
    var DateTimeSymbols_ar_AE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_BH.
     */
    var DateTimeSymbols_ar_BH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_DJ.
     */
    var DateTimeSymbols_ar_DJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_DZ.
     */
    var DateTimeSymbols_ar_DZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_EG.
     */
    var DateTimeSymbols_ar_EG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_EH.
     */
    var DateTimeSymbols_ar_EH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_ER.
     */
    var DateTimeSymbols_ar_ER: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_IL.
     */
    var DateTimeSymbols_ar_IL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_IQ.
     */
    var DateTimeSymbols_ar_IQ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_JO.
     */
    var DateTimeSymbols_ar_JO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_KM.
     */
    var DateTimeSymbols_ar_KM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_KW.
     */
    var DateTimeSymbols_ar_KW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_LB.
     */
    var DateTimeSymbols_ar_LB: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_LY.
     */
    var DateTimeSymbols_ar_LY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_MA.
     */
    var DateTimeSymbols_ar_MA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_MR.
     */
    var DateTimeSymbols_ar_MR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_OM.
     */
    var DateTimeSymbols_ar_OM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_PS.
     */
    var DateTimeSymbols_ar_PS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_QA.
     */
    var DateTimeSymbols_ar_QA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_SA.
     */
    var DateTimeSymbols_ar_SA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_SD.
     */
    var DateTimeSymbols_ar_SD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_SO.
     */
    var DateTimeSymbols_ar_SO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_SS.
     */
    var DateTimeSymbols_ar_SS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_SY.
     */
    var DateTimeSymbols_ar_SY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_TD.
     */
    var DateTimeSymbols_ar_TD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_TN.
     */
    var DateTimeSymbols_ar_TN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar_YE.
     */
    var DateTimeSymbols_ar_YE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale as.
     */
    var DateTimeSymbols_as: any /*missing*/;

    /**
     * Date/time formatting symbols for locale as_IN.
     */
    var DateTimeSymbols_as_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale asa.
     */
    var DateTimeSymbols_asa: any /*missing*/;

    /**
     * Date/time formatting symbols for locale asa_TZ.
     */
    var DateTimeSymbols_asa_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ast.
     */
    var DateTimeSymbols_ast: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ast_ES.
     */
    var DateTimeSymbols_ast_ES: any /*missing*/;

    /**
     * Date/time formatting symbols for locale az_Cyrl.
     */
    var DateTimeSymbols_az_Cyrl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale az_Cyrl_AZ.
     */
    var DateTimeSymbols_az_Cyrl_AZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale az_Latn.
     */
    var DateTimeSymbols_az_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale az_Latn_AZ.
     */
    var DateTimeSymbols_az_Latn_AZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bas.
     */
    var DateTimeSymbols_bas: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bas_CM.
     */
    var DateTimeSymbols_bas_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale be.
     */
    var DateTimeSymbols_be: any /*missing*/;

    /**
     * Date/time formatting symbols for locale be_BY.
     */
    var DateTimeSymbols_be_BY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bem.
     */
    var DateTimeSymbols_bem: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bem_ZM.
     */
    var DateTimeSymbols_bem_ZM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bez.
     */
    var DateTimeSymbols_bez: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bez_TZ.
     */
    var DateTimeSymbols_bez_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bg_BG.
     */
    var DateTimeSymbols_bg_BG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bm.
     */
    var DateTimeSymbols_bm: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bm_ML.
     */
    var DateTimeSymbols_bm_ML: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bn_BD.
     */
    var DateTimeSymbols_bn_BD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bn_IN.
     */
    var DateTimeSymbols_bn_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bo.
     */
    var DateTimeSymbols_bo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bo_CN.
     */
    var DateTimeSymbols_bo_CN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bo_IN.
     */
    var DateTimeSymbols_bo_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale br_FR.
     */
    var DateTimeSymbols_br_FR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale brx.
     */
    var DateTimeSymbols_brx: any /*missing*/;

    /**
     * Date/time formatting symbols for locale brx_IN.
     */
    var DateTimeSymbols_brx_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bs.
     */
    var DateTimeSymbols_bs: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bs_Cyrl.
     */
    var DateTimeSymbols_bs_Cyrl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bs_Cyrl_BA.
     */
    var DateTimeSymbols_bs_Cyrl_BA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bs_Latn.
     */
    var DateTimeSymbols_bs_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bs_Latn_BA.
     */
    var DateTimeSymbols_bs_Latn_BA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale byn.
     */
    var DateTimeSymbols_byn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale byn_ER.
     */
    var DateTimeSymbols_byn_ER: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ca_AD.
     */
    var DateTimeSymbols_ca_AD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ca_ES.
     */
    var DateTimeSymbols_ca_ES: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ca_FR.
     */
    var DateTimeSymbols_ca_FR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ca_IT.
     */
    var DateTimeSymbols_ca_IT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale cgg.
     */
    var DateTimeSymbols_cgg: any /*missing*/;

    /**
     * Date/time formatting symbols for locale cgg_UG.
     */
    var DateTimeSymbols_cgg_UG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale chr_US.
     */
    var DateTimeSymbols_chr_US: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ckb.
     */
    var DateTimeSymbols_ckb: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ckb_Arab.
     */
    var DateTimeSymbols_ckb_Arab: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ckb_Arab_IQ.
     */
    var DateTimeSymbols_ckb_Arab_IQ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ckb_Arab_IR.
     */
    var DateTimeSymbols_ckb_Arab_IR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ckb_IQ.
     */
    var DateTimeSymbols_ckb_IQ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ckb_IR.
     */
    var DateTimeSymbols_ckb_IR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ckb_Latn.
     */
    var DateTimeSymbols_ckb_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ckb_Latn_IQ.
     */
    var DateTimeSymbols_ckb_Latn_IQ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale cs_CZ.
     */
    var DateTimeSymbols_cs_CZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale cy_GB.
     */
    var DateTimeSymbols_cy_GB: any /*missing*/;

    /**
     * Date/time formatting symbols for locale da_DK.
     */
    var DateTimeSymbols_da_DK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale da_GL.
     */
    var DateTimeSymbols_da_GL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dav.
     */
    var DateTimeSymbols_dav: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dav_KE.
     */
    var DateTimeSymbols_dav_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale de_BE.
     */
    var DateTimeSymbols_de_BE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale de_DE.
     */
    var DateTimeSymbols_de_DE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale de_LI.
     */
    var DateTimeSymbols_de_LI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale de_LU.
     */
    var DateTimeSymbols_de_LU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dje.
     */
    var DateTimeSymbols_dje: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dje_NE.
     */
    var DateTimeSymbols_dje_NE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dua.
     */
    var DateTimeSymbols_dua: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dua_CM.
     */
    var DateTimeSymbols_dua_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dyo.
     */
    var DateTimeSymbols_dyo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dyo_SN.
     */
    var DateTimeSymbols_dyo_SN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dz.
     */
    var DateTimeSymbols_dz: any /*missing*/;

    /**
     * Date/time formatting symbols for locale dz_BT.
     */
    var DateTimeSymbols_dz_BT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ebu.
     */
    var DateTimeSymbols_ebu: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ebu_KE.
     */
    var DateTimeSymbols_ebu_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ee.
     */
    var DateTimeSymbols_ee: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ee_GH.
     */
    var DateTimeSymbols_ee_GH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ee_TG.
     */
    var DateTimeSymbols_ee_TG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale el_CY.
     */
    var DateTimeSymbols_el_CY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale el_GR.
     */
    var DateTimeSymbols_el_GR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_001.
     */
    var DateTimeSymbols_en_001: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_150.
     */
    var DateTimeSymbols_en_150: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_AG.
     */
    var DateTimeSymbols_en_AG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_AI.
     */
    var DateTimeSymbols_en_AI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_AS.
     */
    var DateTimeSymbols_en_AS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_BB.
     */
    var DateTimeSymbols_en_BB: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_BE.
     */
    var DateTimeSymbols_en_BE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_BM.
     */
    var DateTimeSymbols_en_BM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_BS.
     */
    var DateTimeSymbols_en_BS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_BW.
     */
    var DateTimeSymbols_en_BW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_BZ.
     */
    var DateTimeSymbols_en_BZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_CA.
     */
    var DateTimeSymbols_en_CA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_CC.
     */
    var DateTimeSymbols_en_CC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_CK.
     */
    var DateTimeSymbols_en_CK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_CM.
     */
    var DateTimeSymbols_en_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_CX.
     */
    var DateTimeSymbols_en_CX: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_DG.
     */
    var DateTimeSymbols_en_DG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_DM.
     */
    var DateTimeSymbols_en_DM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_Dsrt.
     */
    var DateTimeSymbols_en_Dsrt: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_Dsrt_US.
     */
    var DateTimeSymbols_en_Dsrt_US: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_ER.
     */
    var DateTimeSymbols_en_ER: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_FJ.
     */
    var DateTimeSymbols_en_FJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_FK.
     */
    var DateTimeSymbols_en_FK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_FM.
     */
    var DateTimeSymbols_en_FM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_GD.
     */
    var DateTimeSymbols_en_GD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_GG.
     */
    var DateTimeSymbols_en_GG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_GH.
     */
    var DateTimeSymbols_en_GH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_GI.
     */
    var DateTimeSymbols_en_GI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_GM.
     */
    var DateTimeSymbols_en_GM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_GU.
     */
    var DateTimeSymbols_en_GU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_GY.
     */
    var DateTimeSymbols_en_GY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_HK.
     */
    var DateTimeSymbols_en_HK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_IM.
     */
    var DateTimeSymbols_en_IM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_IO.
     */
    var DateTimeSymbols_en_IO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_JE.
     */
    var DateTimeSymbols_en_JE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_JM.
     */
    var DateTimeSymbols_en_JM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_KE.
     */
    var DateTimeSymbols_en_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_KI.
     */
    var DateTimeSymbols_en_KI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_KN.
     */
    var DateTimeSymbols_en_KN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_KY.
     */
    var DateTimeSymbols_en_KY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_LC.
     */
    var DateTimeSymbols_en_LC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_LR.
     */
    var DateTimeSymbols_en_LR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_LS.
     */
    var DateTimeSymbols_en_LS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_MG.
     */
    var DateTimeSymbols_en_MG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_MH.
     */
    var DateTimeSymbols_en_MH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_MO.
     */
    var DateTimeSymbols_en_MO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_MP.
     */
    var DateTimeSymbols_en_MP: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_MS.
     */
    var DateTimeSymbols_en_MS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_MT.
     */
    var DateTimeSymbols_en_MT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_MU.
     */
    var DateTimeSymbols_en_MU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_MW.
     */
    var DateTimeSymbols_en_MW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_NA.
     */
    var DateTimeSymbols_en_NA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_NF.
     */
    var DateTimeSymbols_en_NF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_NG.
     */
    var DateTimeSymbols_en_NG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_NR.
     */
    var DateTimeSymbols_en_NR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_NU.
     */
    var DateTimeSymbols_en_NU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_NZ.
     */
    var DateTimeSymbols_en_NZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_PG.
     */
    var DateTimeSymbols_en_PG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_PH.
     */
    var DateTimeSymbols_en_PH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_PK.
     */
    var DateTimeSymbols_en_PK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_PN.
     */
    var DateTimeSymbols_en_PN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_PR.
     */
    var DateTimeSymbols_en_PR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_PW.
     */
    var DateTimeSymbols_en_PW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_RW.
     */
    var DateTimeSymbols_en_RW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SB.
     */
    var DateTimeSymbols_en_SB: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SC.
     */
    var DateTimeSymbols_en_SC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SD.
     */
    var DateTimeSymbols_en_SD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SH.
     */
    var DateTimeSymbols_en_SH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SL.
     */
    var DateTimeSymbols_en_SL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SS.
     */
    var DateTimeSymbols_en_SS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SX.
     */
    var DateTimeSymbols_en_SX: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SZ.
     */
    var DateTimeSymbols_en_SZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_TC.
     */
    var DateTimeSymbols_en_TC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_TK.
     */
    var DateTimeSymbols_en_TK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_TO.
     */
    var DateTimeSymbols_en_TO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_TT.
     */
    var DateTimeSymbols_en_TT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_TV.
     */
    var DateTimeSymbols_en_TV: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_TZ.
     */
    var DateTimeSymbols_en_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_UG.
     */
    var DateTimeSymbols_en_UG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_UM.
     */
    var DateTimeSymbols_en_UM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_VC.
     */
    var DateTimeSymbols_en_VC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_VG.
     */
    var DateTimeSymbols_en_VG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_VI.
     */
    var DateTimeSymbols_en_VI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_VU.
     */
    var DateTimeSymbols_en_VU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_WS.
     */
    var DateTimeSymbols_en_WS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_ZM.
     */
    var DateTimeSymbols_en_ZM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_ZW.
     */
    var DateTimeSymbols_en_ZW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale eo.
     */
    var DateTimeSymbols_eo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale eo_001.
     */
    var DateTimeSymbols_eo_001: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_AR.
     */
    var DateTimeSymbols_es_AR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_BO.
     */
    var DateTimeSymbols_es_BO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_CL.
     */
    var DateTimeSymbols_es_CL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_CO.
     */
    var DateTimeSymbols_es_CO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_CR.
     */
    var DateTimeSymbols_es_CR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_CU.
     */
    var DateTimeSymbols_es_CU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_DO.
     */
    var DateTimeSymbols_es_DO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_EA.
     */
    var DateTimeSymbols_es_EA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_EC.
     */
    var DateTimeSymbols_es_EC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_GQ.
     */
    var DateTimeSymbols_es_GQ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_GT.
     */
    var DateTimeSymbols_es_GT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_HN.
     */
    var DateTimeSymbols_es_HN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_IC.
     */
    var DateTimeSymbols_es_IC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_MX.
     */
    var DateTimeSymbols_es_MX: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_NI.
     */
    var DateTimeSymbols_es_NI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_PA.
     */
    var DateTimeSymbols_es_PA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_PE.
     */
    var DateTimeSymbols_es_PE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_PH.
     */
    var DateTimeSymbols_es_PH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_PR.
     */
    var DateTimeSymbols_es_PR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_PY.
     */
    var DateTimeSymbols_es_PY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_SV.
     */
    var DateTimeSymbols_es_SV: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_US.
     */
    var DateTimeSymbols_es_US: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_UY.
     */
    var DateTimeSymbols_es_UY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_VE.
     */
    var DateTimeSymbols_es_VE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale et_EE.
     */
    var DateTimeSymbols_et_EE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale eu_ES.
     */
    var DateTimeSymbols_eu_ES: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ewo.
     */
    var DateTimeSymbols_ewo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ewo_CM.
     */
    var DateTimeSymbols_ewo_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fa_AF.
     */
    var DateTimeSymbols_fa_AF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fa_IR.
     */
    var DateTimeSymbols_fa_IR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ff.
     */
    var DateTimeSymbols_ff: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ff_SN.
     */
    var DateTimeSymbols_ff_SN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fi_FI.
     */
    var DateTimeSymbols_fi_FI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fil_PH.
     */
    var DateTimeSymbols_fil_PH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fo.
     */
    var DateTimeSymbols_fo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fo_FO.
     */
    var DateTimeSymbols_fo_FO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_BE.
     */
    var DateTimeSymbols_fr_BE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_BF.
     */
    var DateTimeSymbols_fr_BF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_BI.
     */
    var DateTimeSymbols_fr_BI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_BJ.
     */
    var DateTimeSymbols_fr_BJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_BL.
     */
    var DateTimeSymbols_fr_BL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_CD.
     */
    var DateTimeSymbols_fr_CD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_CF.
     */
    var DateTimeSymbols_fr_CF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_CG.
     */
    var DateTimeSymbols_fr_CG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_CH.
     */
    var DateTimeSymbols_fr_CH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_CI.
     */
    var DateTimeSymbols_fr_CI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_CM.
     */
    var DateTimeSymbols_fr_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_DJ.
     */
    var DateTimeSymbols_fr_DJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_DZ.
     */
    var DateTimeSymbols_fr_DZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_FR.
     */
    var DateTimeSymbols_fr_FR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_GA.
     */
    var DateTimeSymbols_fr_GA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_GF.
     */
    var DateTimeSymbols_fr_GF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_GN.
     */
    var DateTimeSymbols_fr_GN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_GP.
     */
    var DateTimeSymbols_fr_GP: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_GQ.
     */
    var DateTimeSymbols_fr_GQ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_HT.
     */
    var DateTimeSymbols_fr_HT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_KM.
     */
    var DateTimeSymbols_fr_KM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_LU.
     */
    var DateTimeSymbols_fr_LU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_MA.
     */
    var DateTimeSymbols_fr_MA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_MC.
     */
    var DateTimeSymbols_fr_MC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_MF.
     */
    var DateTimeSymbols_fr_MF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_MG.
     */
    var DateTimeSymbols_fr_MG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_ML.
     */
    var DateTimeSymbols_fr_ML: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_MQ.
     */
    var DateTimeSymbols_fr_MQ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_MR.
     */
    var DateTimeSymbols_fr_MR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_MU.
     */
    var DateTimeSymbols_fr_MU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_NC.
     */
    var DateTimeSymbols_fr_NC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_NE.
     */
    var DateTimeSymbols_fr_NE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_PF.
     */
    var DateTimeSymbols_fr_PF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_PM.
     */
    var DateTimeSymbols_fr_PM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_RE.
     */
    var DateTimeSymbols_fr_RE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_RW.
     */
    var DateTimeSymbols_fr_RW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_SC.
     */
    var DateTimeSymbols_fr_SC: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_SN.
     */
    var DateTimeSymbols_fr_SN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_SY.
     */
    var DateTimeSymbols_fr_SY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_TD.
     */
    var DateTimeSymbols_fr_TD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_TG.
     */
    var DateTimeSymbols_fr_TG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_TN.
     */
    var DateTimeSymbols_fr_TN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_VU.
     */
    var DateTimeSymbols_fr_VU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_WF.
     */
    var DateTimeSymbols_fr_WF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_YT.
     */
    var DateTimeSymbols_fr_YT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fur.
     */
    var DateTimeSymbols_fur: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fur_IT.
     */
    var DateTimeSymbols_fur_IT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ga.
     */
    var DateTimeSymbols_ga: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ga_IE.
     */
    var DateTimeSymbols_ga_IE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gd.
     */
    var DateTimeSymbols_gd: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gd_GB.
     */
    var DateTimeSymbols_gd_GB: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gl_ES.
     */
    var DateTimeSymbols_gl_ES: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gsw_CH.
     */
    var DateTimeSymbols_gsw_CH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gsw_LI.
     */
    var DateTimeSymbols_gsw_LI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gu_IN.
     */
    var DateTimeSymbols_gu_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale guz.
     */
    var DateTimeSymbols_guz: any /*missing*/;

    /**
     * Date/time formatting symbols for locale guz_KE.
     */
    var DateTimeSymbols_guz_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gv.
     */
    var DateTimeSymbols_gv: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gv_IM.
     */
    var DateTimeSymbols_gv_IM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ha.
     */
    var DateTimeSymbols_ha: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ha_Latn.
     */
    var DateTimeSymbols_ha_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ha_Latn_GH.
     */
    var DateTimeSymbols_ha_Latn_GH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ha_Latn_NE.
     */
    var DateTimeSymbols_ha_Latn_NE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ha_Latn_NG.
     */
    var DateTimeSymbols_ha_Latn_NG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale haw_US.
     */
    var DateTimeSymbols_haw_US: any /*missing*/;

    /**
     * Date/time formatting symbols for locale he_IL.
     */
    var DateTimeSymbols_he_IL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hi_IN.
     */
    var DateTimeSymbols_hi_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hr_BA.
     */
    var DateTimeSymbols_hr_BA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hr_HR.
     */
    var DateTimeSymbols_hr_HR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hu_HU.
     */
    var DateTimeSymbols_hu_HU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hy_AM.
     */
    var DateTimeSymbols_hy_AM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ia.
     */
    var DateTimeSymbols_ia: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ia_FR.
     */
    var DateTimeSymbols_ia_FR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale id_ID.
     */
    var DateTimeSymbols_id_ID: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ig.
     */
    var DateTimeSymbols_ig: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ig_NG.
     */
    var DateTimeSymbols_ig_NG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ii.
     */
    var DateTimeSymbols_ii: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ii_CN.
     */
    var DateTimeSymbols_ii_CN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale is_IS.
     */
    var DateTimeSymbols_is_IS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale it_CH.
     */
    var DateTimeSymbols_it_CH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale it_IT.
     */
    var DateTimeSymbols_it_IT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale it_SM.
     */
    var DateTimeSymbols_it_SM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ja_JP.
     */
    var DateTimeSymbols_ja_JP: any /*missing*/;

    /**
     * Date/time formatting symbols for locale jgo.
     */
    var DateTimeSymbols_jgo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale jgo_CM.
     */
    var DateTimeSymbols_jgo_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale jmc.
     */
    var DateTimeSymbols_jmc: any /*missing*/;

    /**
     * Date/time formatting symbols for locale jmc_TZ.
     */
    var DateTimeSymbols_jmc_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ka_GE.
     */
    var DateTimeSymbols_ka_GE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kab.
     */
    var DateTimeSymbols_kab: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kab_DZ.
     */
    var DateTimeSymbols_kab_DZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kam.
     */
    var DateTimeSymbols_kam: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kam_KE.
     */
    var DateTimeSymbols_kam_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kde.
     */
    var DateTimeSymbols_kde: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kde_TZ.
     */
    var DateTimeSymbols_kde_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kea.
     */
    var DateTimeSymbols_kea: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kea_CV.
     */
    var DateTimeSymbols_kea_CV: any /*missing*/;

    /**
     * Date/time formatting symbols for locale khq.
     */
    var DateTimeSymbols_khq: any /*missing*/;

    /**
     * Date/time formatting symbols for locale khq_ML.
     */
    var DateTimeSymbols_khq_ML: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ki.
     */
    var DateTimeSymbols_ki: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ki_KE.
     */
    var DateTimeSymbols_ki_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kk_Cyrl.
     */
    var DateTimeSymbols_kk_Cyrl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kk_Cyrl_KZ.
     */
    var DateTimeSymbols_kk_Cyrl_KZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kkj.
     */
    var DateTimeSymbols_kkj: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kkj_CM.
     */
    var DateTimeSymbols_kkj_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kl.
     */
    var DateTimeSymbols_kl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kl_GL.
     */
    var DateTimeSymbols_kl_GL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kln.
     */
    var DateTimeSymbols_kln: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kln_KE.
     */
    var DateTimeSymbols_kln_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale km_KH.
     */
    var DateTimeSymbols_km_KH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kn_IN.
     */
    var DateTimeSymbols_kn_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ko_KP.
     */
    var DateTimeSymbols_ko_KP: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ko_KR.
     */
    var DateTimeSymbols_ko_KR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kok.
     */
    var DateTimeSymbols_kok: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kok_IN.
     */
    var DateTimeSymbols_kok_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ks.
     */
    var DateTimeSymbols_ks: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ks_Arab.
     */
    var DateTimeSymbols_ks_Arab: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ks_Arab_IN.
     */
    var DateTimeSymbols_ks_Arab_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ksb.
     */
    var DateTimeSymbols_ksb: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ksb_TZ.
     */
    var DateTimeSymbols_ksb_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ksf.
     */
    var DateTimeSymbols_ksf: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ksf_CM.
     */
    var DateTimeSymbols_ksf_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ksh.
     */
    var DateTimeSymbols_ksh: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ksh_DE.
     */
    var DateTimeSymbols_ksh_DE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kw.
     */
    var DateTimeSymbols_kw: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kw_GB.
     */
    var DateTimeSymbols_kw_GB: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ky_Cyrl.
     */
    var DateTimeSymbols_ky_Cyrl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ky_Cyrl_KG.
     */
    var DateTimeSymbols_ky_Cyrl_KG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lag.
     */
    var DateTimeSymbols_lag: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lag_TZ.
     */
    var DateTimeSymbols_lag_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lg.
     */
    var DateTimeSymbols_lg: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lg_UG.
     */
    var DateTimeSymbols_lg_UG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lkt.
     */
    var DateTimeSymbols_lkt: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lkt_US.
     */
    var DateTimeSymbols_lkt_US: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ln_AO.
     */
    var DateTimeSymbols_ln_AO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ln_CD.
     */
    var DateTimeSymbols_ln_CD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ln_CF.
     */
    var DateTimeSymbols_ln_CF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ln_CG.
     */
    var DateTimeSymbols_ln_CG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lo_LA.
     */
    var DateTimeSymbols_lo_LA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lt_LT.
     */
    var DateTimeSymbols_lt_LT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lu.
     */
    var DateTimeSymbols_lu: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lu_CD.
     */
    var DateTimeSymbols_lu_CD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale luo.
     */
    var DateTimeSymbols_luo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale luo_KE.
     */
    var DateTimeSymbols_luo_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale luy.
     */
    var DateTimeSymbols_luy: any /*missing*/;

    /**
     * Date/time formatting symbols for locale luy_KE.
     */
    var DateTimeSymbols_luy_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lv_LV.
     */
    var DateTimeSymbols_lv_LV: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mas.
     */
    var DateTimeSymbols_mas: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mas_KE.
     */
    var DateTimeSymbols_mas_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mas_TZ.
     */
    var DateTimeSymbols_mas_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mer.
     */
    var DateTimeSymbols_mer: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mer_KE.
     */
    var DateTimeSymbols_mer_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mfe.
     */
    var DateTimeSymbols_mfe: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mfe_MU.
     */
    var DateTimeSymbols_mfe_MU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mg.
     */
    var DateTimeSymbols_mg: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mg_MG.
     */
    var DateTimeSymbols_mg_MG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mgh.
     */
    var DateTimeSymbols_mgh: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mgh_MZ.
     */
    var DateTimeSymbols_mgh_MZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mgo.
     */
    var DateTimeSymbols_mgo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mgo_CM.
     */
    var DateTimeSymbols_mgo_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mk_MK.
     */
    var DateTimeSymbols_mk_MK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ml_IN.
     */
    var DateTimeSymbols_ml_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mn_Cyrl.
     */
    var DateTimeSymbols_mn_Cyrl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mn_Cyrl_MN.
     */
    var DateTimeSymbols_mn_Cyrl_MN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mr_IN.
     */
    var DateTimeSymbols_mr_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ms_Latn.
     */
    var DateTimeSymbols_ms_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ms_Latn_BN.
     */
    var DateTimeSymbols_ms_Latn_BN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ms_Latn_MY.
     */
    var DateTimeSymbols_ms_Latn_MY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ms_Latn_SG.
     */
    var DateTimeSymbols_ms_Latn_SG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mt_MT.
     */
    var DateTimeSymbols_mt_MT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mua.
     */
    var DateTimeSymbols_mua: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mua_CM.
     */
    var DateTimeSymbols_mua_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale my_MM.
     */
    var DateTimeSymbols_my_MM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale naq.
     */
    var DateTimeSymbols_naq: any /*missing*/;

    /**
     * Date/time formatting symbols for locale naq_NA.
     */
    var DateTimeSymbols_naq_NA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nb_NO.
     */
    var DateTimeSymbols_nb_NO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nb_SJ.
     */
    var DateTimeSymbols_nb_SJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nd.
     */
    var DateTimeSymbols_nd: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nd_ZW.
     */
    var DateTimeSymbols_nd_ZW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ne_IN.
     */
    var DateTimeSymbols_ne_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ne_NP.
     */
    var DateTimeSymbols_ne_NP: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nl_AW.
     */
    var DateTimeSymbols_nl_AW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nl_BE.
     */
    var DateTimeSymbols_nl_BE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nl_BQ.
     */
    var DateTimeSymbols_nl_BQ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nl_CW.
     */
    var DateTimeSymbols_nl_CW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nl_NL.
     */
    var DateTimeSymbols_nl_NL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nl_SR.
     */
    var DateTimeSymbols_nl_SR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nl_SX.
     */
    var DateTimeSymbols_nl_SX: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nmg.
     */
    var DateTimeSymbols_nmg: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nmg_CM.
     */
    var DateTimeSymbols_nmg_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nn.
     */
    var DateTimeSymbols_nn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nn_NO.
     */
    var DateTimeSymbols_nn_NO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nnh.
     */
    var DateTimeSymbols_nnh: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nnh_CM.
     */
    var DateTimeSymbols_nnh_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nr.
     */
    var DateTimeSymbols_nr: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nr_ZA.
     */
    var DateTimeSymbols_nr_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nso.
     */
    var DateTimeSymbols_nso: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nso_ZA.
     */
    var DateTimeSymbols_nso_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nus.
     */
    var DateTimeSymbols_nus: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nus_SD.
     */
    var DateTimeSymbols_nus_SD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nyn.
     */
    var DateTimeSymbols_nyn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nyn_UG.
     */
    var DateTimeSymbols_nyn_UG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale om.
     */
    var DateTimeSymbols_om: any /*missing*/;

    /**
     * Date/time formatting symbols for locale om_ET.
     */
    var DateTimeSymbols_om_ET: any /*missing*/;

    /**
     * Date/time formatting symbols for locale om_KE.
     */
    var DateTimeSymbols_om_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale or_IN.
     */
    var DateTimeSymbols_or_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale os.
     */
    var DateTimeSymbols_os: any /*missing*/;

    /**
     * Date/time formatting symbols for locale os_GE.
     */
    var DateTimeSymbols_os_GE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale os_RU.
     */
    var DateTimeSymbols_os_RU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pa_Arab.
     */
    var DateTimeSymbols_pa_Arab: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pa_Arab_PK.
     */
    var DateTimeSymbols_pa_Arab_PK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pa_Guru.
     */
    var DateTimeSymbols_pa_Guru: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pa_Guru_IN.
     */
    var DateTimeSymbols_pa_Guru_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pl_PL.
     */
    var DateTimeSymbols_pl_PL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ps.
     */
    var DateTimeSymbols_ps: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ps_AF.
     */
    var DateTimeSymbols_ps_AF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_AO.
     */
    var DateTimeSymbols_pt_AO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_CV.
     */
    var DateTimeSymbols_pt_CV: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_GW.
     */
    var DateTimeSymbols_pt_GW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_MO.
     */
    var DateTimeSymbols_pt_MO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_MZ.
     */
    var DateTimeSymbols_pt_MZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_ST.
     */
    var DateTimeSymbols_pt_ST: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_TL.
     */
    var DateTimeSymbols_pt_TL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rm.
     */
    var DateTimeSymbols_rm: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rm_CH.
     */
    var DateTimeSymbols_rm_CH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rn.
     */
    var DateTimeSymbols_rn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rn_BI.
     */
    var DateTimeSymbols_rn_BI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ro_MD.
     */
    var DateTimeSymbols_ro_MD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ro_RO.
     */
    var DateTimeSymbols_ro_RO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rof.
     */
    var DateTimeSymbols_rof: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rof_TZ.
     */
    var DateTimeSymbols_rof_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ru_BY.
     */
    var DateTimeSymbols_ru_BY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ru_KG.
     */
    var DateTimeSymbols_ru_KG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ru_KZ.
     */
    var DateTimeSymbols_ru_KZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ru_MD.
     */
    var DateTimeSymbols_ru_MD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ru_RU.
     */
    var DateTimeSymbols_ru_RU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ru_UA.
     */
    var DateTimeSymbols_ru_UA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rw.
     */
    var DateTimeSymbols_rw: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rw_RW.
     */
    var DateTimeSymbols_rw_RW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rwk.
     */
    var DateTimeSymbols_rwk: any /*missing*/;

    /**
     * Date/time formatting symbols for locale rwk_TZ.
     */
    var DateTimeSymbols_rwk_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sah.
     */
    var DateTimeSymbols_sah: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sah_RU.
     */
    var DateTimeSymbols_sah_RU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale saq.
     */
    var DateTimeSymbols_saq: any /*missing*/;

    /**
     * Date/time formatting symbols for locale saq_KE.
     */
    var DateTimeSymbols_saq_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sbp.
     */
    var DateTimeSymbols_sbp: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sbp_TZ.
     */
    var DateTimeSymbols_sbp_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale se.
     */
    var DateTimeSymbols_se: any /*missing*/;

    /**
     * Date/time formatting symbols for locale se_FI.
     */
    var DateTimeSymbols_se_FI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale se_NO.
     */
    var DateTimeSymbols_se_NO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale seh.
     */
    var DateTimeSymbols_seh: any /*missing*/;

    /**
     * Date/time formatting symbols for locale seh_MZ.
     */
    var DateTimeSymbols_seh_MZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ses.
     */
    var DateTimeSymbols_ses: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ses_ML.
     */
    var DateTimeSymbols_ses_ML: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sg.
     */
    var DateTimeSymbols_sg: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sg_CF.
     */
    var DateTimeSymbols_sg_CF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale shi.
     */
    var DateTimeSymbols_shi: any /*missing*/;

    /**
     * Date/time formatting symbols for locale shi_Latn.
     */
    var DateTimeSymbols_shi_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale shi_Latn_MA.
     */
    var DateTimeSymbols_shi_Latn_MA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale shi_Tfng.
     */
    var DateTimeSymbols_shi_Tfng: any /*missing*/;

    /**
     * Date/time formatting symbols for locale shi_Tfng_MA.
     */
    var DateTimeSymbols_shi_Tfng_MA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale si_LK.
     */
    var DateTimeSymbols_si_LK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sk_SK.
     */
    var DateTimeSymbols_sk_SK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sl_SI.
     */
    var DateTimeSymbols_sl_SI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sn.
     */
    var DateTimeSymbols_sn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sn_ZW.
     */
    var DateTimeSymbols_sn_ZW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale so.
     */
    var DateTimeSymbols_so: any /*missing*/;

    /**
     * Date/time formatting symbols for locale so_DJ.
     */
    var DateTimeSymbols_so_DJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale so_ET.
     */
    var DateTimeSymbols_so_ET: any /*missing*/;

    /**
     * Date/time formatting symbols for locale so_KE.
     */
    var DateTimeSymbols_so_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale so_SO.
     */
    var DateTimeSymbols_so_SO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sq_AL.
     */
    var DateTimeSymbols_sq_AL: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sq_MK.
     */
    var DateTimeSymbols_sq_MK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sq_XK.
     */
    var DateTimeSymbols_sq_XK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Cyrl.
     */
    var DateTimeSymbols_sr_Cyrl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Cyrl_BA.
     */
    var DateTimeSymbols_sr_Cyrl_BA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Cyrl_ME.
     */
    var DateTimeSymbols_sr_Cyrl_ME: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Cyrl_RS.
     */
    var DateTimeSymbols_sr_Cyrl_RS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Cyrl_XK.
     */
    var DateTimeSymbols_sr_Cyrl_XK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Latn.
     */
    var DateTimeSymbols_sr_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Latn_BA.
     */
    var DateTimeSymbols_sr_Latn_BA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Latn_ME.
     */
    var DateTimeSymbols_sr_Latn_ME: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Latn_RS.
     */
    var DateTimeSymbols_sr_Latn_RS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr_Latn_XK.
     */
    var DateTimeSymbols_sr_Latn_XK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ss.
     */
    var DateTimeSymbols_ss: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ss_SZ.
     */
    var DateTimeSymbols_ss_SZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ss_ZA.
     */
    var DateTimeSymbols_ss_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ssy.
     */
    var DateTimeSymbols_ssy: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ssy_ER.
     */
    var DateTimeSymbols_ssy_ER: any /*missing*/;

    /**
     * Date/time formatting symbols for locale st.
     */
    var DateTimeSymbols_st: any /*missing*/;

    /**
     * Date/time formatting symbols for locale st_LS.
     */
    var DateTimeSymbols_st_LS: any /*missing*/;

    /**
     * Date/time formatting symbols for locale st_ZA.
     */
    var DateTimeSymbols_st_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sv_AX.
     */
    var DateTimeSymbols_sv_AX: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sv_FI.
     */
    var DateTimeSymbols_sv_FI: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sv_SE.
     */
    var DateTimeSymbols_sv_SE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sw_KE.
     */
    var DateTimeSymbols_sw_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sw_TZ.
     */
    var DateTimeSymbols_sw_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sw_UG.
     */
    var DateTimeSymbols_sw_UG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale swc.
     */
    var DateTimeSymbols_swc: any /*missing*/;

    /**
     * Date/time formatting symbols for locale swc_CD.
     */
    var DateTimeSymbols_swc_CD: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ta_IN.
     */
    var DateTimeSymbols_ta_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ta_LK.
     */
    var DateTimeSymbols_ta_LK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ta_MY.
     */
    var DateTimeSymbols_ta_MY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ta_SG.
     */
    var DateTimeSymbols_ta_SG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale te_IN.
     */
    var DateTimeSymbols_te_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale teo.
     */
    var DateTimeSymbols_teo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale teo_KE.
     */
    var DateTimeSymbols_teo_KE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale teo_UG.
     */
    var DateTimeSymbols_teo_UG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tg.
     */
    var DateTimeSymbols_tg: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tg_Cyrl.
     */
    var DateTimeSymbols_tg_Cyrl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tg_Cyrl_TJ.
     */
    var DateTimeSymbols_tg_Cyrl_TJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale th_TH.
     */
    var DateTimeSymbols_th_TH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ti.
     */
    var DateTimeSymbols_ti: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ti_ER.
     */
    var DateTimeSymbols_ti_ER: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ti_ET.
     */
    var DateTimeSymbols_ti_ET: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tig.
     */
    var DateTimeSymbols_tig: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tig_ER.
     */
    var DateTimeSymbols_tig_ER: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tn.
     */
    var DateTimeSymbols_tn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tn_BW.
     */
    var DateTimeSymbols_tn_BW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tn_ZA.
     */
    var DateTimeSymbols_tn_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale to.
     */
    var DateTimeSymbols_to: any /*missing*/;

    /**
     * Date/time formatting symbols for locale to_TO.
     */
    var DateTimeSymbols_to_TO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tr_CY.
     */
    var DateTimeSymbols_tr_CY: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tr_TR.
     */
    var DateTimeSymbols_tr_TR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ts.
     */
    var DateTimeSymbols_ts: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ts_ZA.
     */
    var DateTimeSymbols_ts_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale twq.
     */
    var DateTimeSymbols_twq: any /*missing*/;

    /**
     * Date/time formatting symbols for locale twq_NE.
     */
    var DateTimeSymbols_twq_NE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tzm.
     */
    var DateTimeSymbols_tzm: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tzm_Latn.
     */
    var DateTimeSymbols_tzm_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tzm_Latn_MA.
     */
    var DateTimeSymbols_tzm_Latn_MA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uk_UA.
     */
    var DateTimeSymbols_uk_UA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ur_IN.
     */
    var DateTimeSymbols_ur_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ur_PK.
     */
    var DateTimeSymbols_ur_PK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uz_Arab.
     */
    var DateTimeSymbols_uz_Arab: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uz_Arab_AF.
     */
    var DateTimeSymbols_uz_Arab_AF: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uz_Cyrl.
     */
    var DateTimeSymbols_uz_Cyrl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uz_Cyrl_UZ.
     */
    var DateTimeSymbols_uz_Cyrl_UZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uz_Latn.
     */
    var DateTimeSymbols_uz_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uz_Latn_UZ.
     */
    var DateTimeSymbols_uz_Latn_UZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vai.
     */
    var DateTimeSymbols_vai: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vai_Latn.
     */
    var DateTimeSymbols_vai_Latn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vai_Latn_LR.
     */
    var DateTimeSymbols_vai_Latn_LR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vai_Vaii.
     */
    var DateTimeSymbols_vai_Vaii: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vai_Vaii_LR.
     */
    var DateTimeSymbols_vai_Vaii_LR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ve.
     */
    var DateTimeSymbols_ve: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ve_ZA.
     */
    var DateTimeSymbols_ve_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vi_VN.
     */
    var DateTimeSymbols_vi_VN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vo.
     */
    var DateTimeSymbols_vo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vo_001.
     */
    var DateTimeSymbols_vo_001: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vun.
     */
    var DateTimeSymbols_vun: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vun_TZ.
     */
    var DateTimeSymbols_vun_TZ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale wae.
     */
    var DateTimeSymbols_wae: any /*missing*/;

    /**
     * Date/time formatting symbols for locale wae_CH.
     */
    var DateTimeSymbols_wae_CH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale wal.
     */
    var DateTimeSymbols_wal: any /*missing*/;

    /**
     * Date/time formatting symbols for locale wal_ET.
     */
    var DateTimeSymbols_wal_ET: any /*missing*/;

    /**
     * Date/time formatting symbols for locale xh.
     */
    var DateTimeSymbols_xh: any /*missing*/;

    /**
     * Date/time formatting symbols for locale xh_ZA.
     */
    var DateTimeSymbols_xh_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale xog.
     */
    var DateTimeSymbols_xog: any /*missing*/;

    /**
     * Date/time formatting symbols for locale xog_UG.
     */
    var DateTimeSymbols_xog_UG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale yav.
     */
    var DateTimeSymbols_yav: any /*missing*/;

    /**
     * Date/time formatting symbols for locale yav_CM.
     */
    var DateTimeSymbols_yav_CM: any /*missing*/;

    /**
     * Date/time formatting symbols for locale yo.
     */
    var DateTimeSymbols_yo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale yo_BJ.
     */
    var DateTimeSymbols_yo_BJ: any /*missing*/;

    /**
     * Date/time formatting symbols for locale yo_NG.
     */
    var DateTimeSymbols_yo_NG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zgh.
     */
    var DateTimeSymbols_zgh: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zgh_MA.
     */
    var DateTimeSymbols_zgh_MA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hans.
     */
    var DateTimeSymbols_zh_Hans: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hans_CN.
     */
    var DateTimeSymbols_zh_Hans_CN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hans_HK.
     */
    var DateTimeSymbols_zh_Hans_HK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hans_MO.
     */
    var DateTimeSymbols_zh_Hans_MO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hans_SG.
     */
    var DateTimeSymbols_zh_Hans_SG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hant.
     */
    var DateTimeSymbols_zh_Hant: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hant_HK.
     */
    var DateTimeSymbols_zh_Hant_HK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hant_MO.
     */
    var DateTimeSymbols_zh_Hant_MO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_Hant_TW.
     */
    var DateTimeSymbols_zh_Hant_TW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zu_ZA.
     */
    var DateTimeSymbols_zu_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_ISO.
     */
    var DateTimeSymbols_en_ISO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale af.
     */
    var DateTimeSymbols_af: any /*missing*/;

    /**
     * Date/time formatting symbols for locale am.
     */
    var DateTimeSymbols_am: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ar.
     */
    var DateTimeSymbols_ar: any /*missing*/;

    /**
     * Date/time formatting symbols for locale az.
     */
    var DateTimeSymbols_az: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bg.
     */
    var DateTimeSymbols_bg: any /*missing*/;

    /**
     * Date/time formatting symbols for locale bn.
     */
    var DateTimeSymbols_bn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale br.
     */
    var DateTimeSymbols_br: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ca.
     */
    var DateTimeSymbols_ca: any /*missing*/;

    /**
     * Date/time formatting symbols for locale chr.
     */
    var DateTimeSymbols_chr: any /*missing*/;

    /**
     * Date/time formatting symbols for locale cs.
     */
    var DateTimeSymbols_cs: any /*missing*/;

    /**
     * Date/time formatting symbols for locale cy.
     */
    var DateTimeSymbols_cy: any /*missing*/;

    /**
     * Date/time formatting symbols for locale da.
     */
    var DateTimeSymbols_da: any /*missing*/;

    /**
     * Date/time formatting symbols for locale de.
     */
    var DateTimeSymbols_de: any /*missing*/;

    /**
     * Date/time formatting symbols for locale de_AT.
     */
    var DateTimeSymbols_de_AT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale de_CH.
     */
    var DateTimeSymbols_de_CH: any /*missing*/;

    /**
     * Date/time formatting symbols for locale el.
     */
    var DateTimeSymbols_el: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en.
     */
    var DateTimeSymbols_en: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_AU.
     */
    var DateTimeSymbols_en_AU: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_GB.
     */
    var DateTimeSymbols_en_GB: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_IE.
     */
    var DateTimeSymbols_en_IE: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_IN.
     */
    var DateTimeSymbols_en_IN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_SG.
     */
    var DateTimeSymbols_en_SG: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_US.
     */
    var DateTimeSymbols_en_US: any /*missing*/;

    /**
     * Date/time formatting symbols for locale en_ZA.
     */
    var DateTimeSymbols_en_ZA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es.
     */
    var DateTimeSymbols_es: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_419.
     */
    var DateTimeSymbols_es_419: any /*missing*/;

    /**
     * Date/time formatting symbols for locale es_ES.
     */
    var DateTimeSymbols_es_ES: any /*missing*/;

    /**
     * Date/time formatting symbols for locale et.
     */
    var DateTimeSymbols_et: any /*missing*/;

    /**
     * Date/time formatting symbols for locale eu.
     */
    var DateTimeSymbols_eu: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fa.
     */
    var DateTimeSymbols_fa: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fi.
     */
    var DateTimeSymbols_fi: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fil.
     */
    var DateTimeSymbols_fil: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr.
     */
    var DateTimeSymbols_fr: any /*missing*/;

    /**
     * Date/time formatting symbols for locale fr_CA.
     */
    var DateTimeSymbols_fr_CA: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gl.
     */
    var DateTimeSymbols_gl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gsw.
     */
    var DateTimeSymbols_gsw: any /*missing*/;

    /**
     * Date/time formatting symbols for locale gu.
     */
    var DateTimeSymbols_gu: any /*missing*/;

    /**
     * Date/time formatting symbols for locale haw.
     */
    var DateTimeSymbols_haw: any /*missing*/;

    /**
     * Date/time formatting symbols for locale he.
     */
    var DateTimeSymbols_he: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hi.
     */
    var DateTimeSymbols_hi: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hr.
     */
    var DateTimeSymbols_hr: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hu.
     */
    var DateTimeSymbols_hu: any /*missing*/;

    /**
     * Date/time formatting symbols for locale hy.
     */
    var DateTimeSymbols_hy: any /*missing*/;

    /**
     * Date/time formatting symbols for locale id.
     */
    var DateTimeSymbols_id: any /*missing*/;

    /**
     * Date/time formatting symbols for locale in.
     */
    var DateTimeSymbols_in: any /*missing*/;

    /**
     * Date/time formatting symbols for locale is.
     */
    var DateTimeSymbols_is: any /*missing*/;

    /**
     * Date/time formatting symbols for locale it.
     */
    var DateTimeSymbols_it: any /*missing*/;

    /**
     * Date/time formatting symbols for locale iw.
     */
    var DateTimeSymbols_iw: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ja.
     */
    var DateTimeSymbols_ja: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ka.
     */
    var DateTimeSymbols_ka: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kk.
     */
    var DateTimeSymbols_kk: any /*missing*/;

    /**
     * Date/time formatting symbols for locale km.
     */
    var DateTimeSymbols_km: any /*missing*/;

    /**
     * Date/time formatting symbols for locale kn.
     */
    var DateTimeSymbols_kn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ko.
     */
    var DateTimeSymbols_ko: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ky.
     */
    var DateTimeSymbols_ky: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ln.
     */
    var DateTimeSymbols_ln: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lo.
     */
    var DateTimeSymbols_lo: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lt.
     */
    var DateTimeSymbols_lt: any /*missing*/;

    /**
     * Date/time formatting symbols for locale lv.
     */
    var DateTimeSymbols_lv: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mk.
     */
    var DateTimeSymbols_mk: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ml.
     */
    var DateTimeSymbols_ml: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mn.
     */
    var DateTimeSymbols_mn: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mr.
     */
    var DateTimeSymbols_mr: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ms.
     */
    var DateTimeSymbols_ms: any /*missing*/;

    /**
     * Date/time formatting symbols for locale mt.
     */
    var DateTimeSymbols_mt: any /*missing*/;

    /**
     * Date/time formatting symbols for locale my.
     */
    var DateTimeSymbols_my: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nb.
     */
    var DateTimeSymbols_nb: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ne.
     */
    var DateTimeSymbols_ne: any /*missing*/;

    /**
     * Date/time formatting symbols for locale nl.
     */
    var DateTimeSymbols_nl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale no.
     */
    var DateTimeSymbols_no: any /*missing*/;

    /**
     * Date/time formatting symbols for locale no_NO.
     */
    var DateTimeSymbols_no_NO: any /*missing*/;

    /**
     * Date/time formatting symbols for locale or.
     */
    var DateTimeSymbols_or: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pa.
     */
    var DateTimeSymbols_pa: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pl.
     */
    var DateTimeSymbols_pl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt.
     */
    var DateTimeSymbols_pt: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_BR.
     */
    var DateTimeSymbols_pt_BR: any /*missing*/;

    /**
     * Date/time formatting symbols for locale pt_PT.
     */
    var DateTimeSymbols_pt_PT: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ro.
     */
    var DateTimeSymbols_ro: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ru.
     */
    var DateTimeSymbols_ru: any /*missing*/;

    /**
     * Date/time formatting symbols for locale si.
     */
    var DateTimeSymbols_si: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sk.
     */
    var DateTimeSymbols_sk: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sl.
     */
    var DateTimeSymbols_sl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sq.
     */
    var DateTimeSymbols_sq: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sr.
     */
    var DateTimeSymbols_sr: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sv.
     */
    var DateTimeSymbols_sv: any /*missing*/;

    /**
     * Date/time formatting symbols for locale sw.
     */
    var DateTimeSymbols_sw: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ta.
     */
    var DateTimeSymbols_ta: any /*missing*/;

    /**
     * Date/time formatting symbols for locale te.
     */
    var DateTimeSymbols_te: any /*missing*/;

    /**
     * Date/time formatting symbols for locale th.
     */
    var DateTimeSymbols_th: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tl.
     */
    var DateTimeSymbols_tl: any /*missing*/;

    /**
     * Date/time formatting symbols for locale tr.
     */
    var DateTimeSymbols_tr: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uk.
     */
    var DateTimeSymbols_uk: any /*missing*/;

    /**
     * Date/time formatting symbols for locale ur.
     */
    var DateTimeSymbols_ur: any /*missing*/;

    /**
     * Date/time formatting symbols for locale uz.
     */
    var DateTimeSymbols_uz: any /*missing*/;

    /**
     * Date/time formatting symbols for locale vi.
     */
    var DateTimeSymbols_vi: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh.
     */
    var DateTimeSymbols_zh: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_CN.
     */
    var DateTimeSymbols_zh_CN: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_HK.
     */
    var DateTimeSymbols_zh_HK: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zh_TW.
     */
    var DateTimeSymbols_zh_TW: any /*missing*/;

    /**
     * Date/time formatting symbols for locale zu.
     */
    var DateTimeSymbols_zu: any /*missing*/;

    /**
     * Number formatting symbols for locale aa.
     * @enum {string}
     */
    enum NumberFormatSymbols_aa { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale aa_DJ.
     * @enum {string}
     */
    enum NumberFormatSymbols_aa_DJ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale aa_ER.
     * @enum {string}
     */
    enum NumberFormatSymbols_aa_ER { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale af_NA.
     * @enum {string}
     */
    enum NumberFormatSymbols_af_NA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale agq.
     * @enum {string}
     */
    enum NumberFormatSymbols_agq { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ak.
     * @enum {string}
     */
    enum NumberFormatSymbols_ak { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_AE.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_AE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_BH.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_BH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_DJ.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_DJ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_DZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_DZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_EG.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_EG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_EH.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_EH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_ER.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_ER { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_IL.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_IL { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_IQ.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_IQ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_JO.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_JO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_KM.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_KM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_KW.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_KW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_LB.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_LB { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_LY.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_LY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_MA.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_MA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_MR.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_MR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_OM.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_OM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_PS.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_PS { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_QA.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_QA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_SA.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_SA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_SD.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_SD { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_SO.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_SO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_SS.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_SS { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_SY.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_SY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_TD.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_TD { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_TN.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_TN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar_YE.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar_YE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale as.
     * @enum {string}
     */
    enum NumberFormatSymbols_as { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale asa.
     * @enum {string}
     */
    enum NumberFormatSymbols_asa { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ast.
     * @enum {string}
     */
    enum NumberFormatSymbols_ast { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale az_Cyrl.
     * @enum {string}
     */
    enum NumberFormatSymbols_az_Cyrl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale az_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_az_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bas.
     * @enum {string}
     */
    enum NumberFormatSymbols_bas { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale be.
     * @enum {string}
     */
    enum NumberFormatSymbols_be { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bem.
     * @enum {string}
     */
    enum NumberFormatSymbols_bem { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bez.
     * @enum {string}
     */
    enum NumberFormatSymbols_bez { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bm.
     * @enum {string}
     */
    enum NumberFormatSymbols_bm { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bn_IN.
     * @enum {string}
     */
    enum NumberFormatSymbols_bn_IN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bo.
     * @enum {string}
     */
    enum NumberFormatSymbols_bo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bo_IN.
     * @enum {string}
     */
    enum NumberFormatSymbols_bo_IN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale brx.
     * @enum {string}
     */
    enum NumberFormatSymbols_brx { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bs.
     * @enum {string}
     */
    enum NumberFormatSymbols_bs { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bs_Cyrl.
     * @enum {string}
     */
    enum NumberFormatSymbols_bs_Cyrl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bs_Cyrl_BA.
     * @enum {string}
     */
    enum NumberFormatSymbols_bs_Cyrl_BA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bs_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_bs_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale byn.
     * @enum {string}
     */
    enum NumberFormatSymbols_byn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale cgg.
     * @enum {string}
     */
    enum NumberFormatSymbols_cgg { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ckb.
     * @enum {string}
     */
    enum NumberFormatSymbols_ckb { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ckb_Arab.
     * @enum {string}
     */
    enum NumberFormatSymbols_ckb_Arab { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ckb_Arab_IR.
     * @enum {string}
     */
    enum NumberFormatSymbols_ckb_Arab_IR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ckb_IR.
     * @enum {string}
     */
    enum NumberFormatSymbols_ckb_IR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ckb_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_ckb_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale dav.
     * @enum {string}
     */
    enum NumberFormatSymbols_dav { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale de_LI.
     * @enum {string}
     */
    enum NumberFormatSymbols_de_LI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale dje.
     * @enum {string}
     */
    enum NumberFormatSymbols_dje { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale dua.
     * @enum {string}
     */
    enum NumberFormatSymbols_dua { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale dyo.
     * @enum {string}
     */
    enum NumberFormatSymbols_dyo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale dz.
     * @enum {string}
     */
    enum NumberFormatSymbols_dz { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ebu.
     * @enum {string}
     */
    enum NumberFormatSymbols_ebu { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ee.
     * @enum {string}
     */
    enum NumberFormatSymbols_ee { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ee_TG.
     * @enum {string}
     */
    enum NumberFormatSymbols_ee_TG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale el_CY.
     * @enum {string}
     */
    enum NumberFormatSymbols_el_CY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_150.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_150 { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_AG.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_AG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_AI.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_AI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_BB.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_BB { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_BE.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_BE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_BM.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_BM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_BS.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_BS { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_BW.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_BW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_BZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_BZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_CA.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_CA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_CC.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_CC { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_CK.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_CK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_CM.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_CM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_CX.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_CX { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_DM.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_DM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_Dsrt.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_Dsrt { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_ER.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_ER { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_FJ.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_FJ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_FK.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_FK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_GD.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_GD { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_GG.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_GG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_GH.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_GH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_GI.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_GI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_GM.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_GM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_GY.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_GY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_HK.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_HK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_IM.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_IM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_JE.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_JE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_JM.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_JM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_KE.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_KE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_KI.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_KI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_KN.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_KN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_KY.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_KY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_LC.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_LC { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_LR.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_LR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_LS.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_LS { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_MG.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_MG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_MO.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_MO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_MS.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_MS { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_MT.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_MT { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_MU.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_MU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_MW.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_MW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_NA.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_NA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_NF.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_NF { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_NG.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_NG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_NR.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_NR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_NU.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_NU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_NZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_NZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_PG.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_PG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_PH.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_PH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_PK.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_PK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_PN.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_PN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_RW.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_RW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SB.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SB { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SC.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SC { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SD.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SD { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SH.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SL.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SL { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SS.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SS { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SX.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SX { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_TK.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_TK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_TO.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_TO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_TT.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_TT { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_TV.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_TV { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_TZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_TZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_UG.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_UG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_VC.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_VC { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_VU.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_VU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_WS.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_WS { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_ZM.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_ZM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale eo.
     * @enum {string}
     */
    enum NumberFormatSymbols_eo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_AR.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_AR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_BO.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_BO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_CL.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_CL { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_CO.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_CO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_CR.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_CR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_CU.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_CU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_DO.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_DO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_EC.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_EC { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_GQ.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_GQ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_GT.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_GT { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_HN.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_HN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_MX.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_MX { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_NI.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_NI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_PA.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_PA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_PE.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_PE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_PH.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_PH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_PR.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_PR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_PY.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_PY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_SV.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_SV { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_US.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_US { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_UY.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_UY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_VE.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_VE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ewo.
     * @enum {string}
     */
    enum NumberFormatSymbols_ewo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fa_AF.
     * @enum {string}
     */
    enum NumberFormatSymbols_fa_AF { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ff.
     * @enum {string}
     */
    enum NumberFormatSymbols_ff { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fo.
     * @enum {string}
     */
    enum NumberFormatSymbols_fo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_BE.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_BE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_BF.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_BF { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_BI.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_BI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_BJ.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_BJ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_CD.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_CD { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_CF.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_CF { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_CG.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_CG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_CH.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_CH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_CI.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_CI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_CM.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_CM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_DJ.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_DJ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_DZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_DZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_GA.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_GA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_GN.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_GN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_GQ.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_GQ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_HT.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_HT { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_KM.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_KM { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_LU.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_LU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_MA.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_MA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_MG.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_MG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_ML.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_ML { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_MR.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_MR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_MU.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_MU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_NC.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_NC { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_NE.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_NE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_PF.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_PF { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_RW.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_RW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_SC.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_SC { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_SN.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_SN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_SY.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_SY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_TD.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_TD { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_TG.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_TG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_TN.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_TN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_VU.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_VU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_WF.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_WF { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fur.
     * @enum {string}
     */
    enum NumberFormatSymbols_fur { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ga.
     * @enum {string}
     */
    enum NumberFormatSymbols_ga { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale gd.
     * @enum {string}
     */
    enum NumberFormatSymbols_gd { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale guz.
     * @enum {string}
     */
    enum NumberFormatSymbols_guz { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale gv.
     * @enum {string}
     */
    enum NumberFormatSymbols_gv { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ha.
     * @enum {string}
     */
    enum NumberFormatSymbols_ha { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ha_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_ha_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ha_Latn_GH.
     * @enum {string}
     */
    enum NumberFormatSymbols_ha_Latn_GH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ha_Latn_NE.
     * @enum {string}
     */
    enum NumberFormatSymbols_ha_Latn_NE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale hr_BA.
     * @enum {string}
     */
    enum NumberFormatSymbols_hr_BA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ia.
     * @enum {string}
     */
    enum NumberFormatSymbols_ia { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ig.
     * @enum {string}
     */
    enum NumberFormatSymbols_ig { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ii.
     * @enum {string}
     */
    enum NumberFormatSymbols_ii { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale it_CH.
     * @enum {string}
     */
    enum NumberFormatSymbols_it_CH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale jgo.
     * @enum {string}
     */
    enum NumberFormatSymbols_jgo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale jmc.
     * @enum {string}
     */
    enum NumberFormatSymbols_jmc { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kab.
     * @enum {string}
     */
    enum NumberFormatSymbols_kab { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kam.
     * @enum {string}
     */
    enum NumberFormatSymbols_kam { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kde.
     * @enum {string}
     */
    enum NumberFormatSymbols_kde { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kea.
     * @enum {string}
     */
    enum NumberFormatSymbols_kea { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale khq.
     * @enum {string}
     */
    enum NumberFormatSymbols_khq { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ki.
     * @enum {string}
     */
    enum NumberFormatSymbols_ki { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kk_Cyrl.
     * @enum {string}
     */
    enum NumberFormatSymbols_kk_Cyrl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kkj.
     * @enum {string}
     */
    enum NumberFormatSymbols_kkj { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kl.
     * @enum {string}
     */
    enum NumberFormatSymbols_kl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kln.
     * @enum {string}
     */
    enum NumberFormatSymbols_kln { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ko_KP.
     * @enum {string}
     */
    enum NumberFormatSymbols_ko_KP { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kok.
     * @enum {string}
     */
    enum NumberFormatSymbols_kok { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ks.
     * @enum {string}
     */
    enum NumberFormatSymbols_ks { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ks_Arab.
     * @enum {string}
     */
    enum NumberFormatSymbols_ks_Arab { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ksb.
     * @enum {string}
     */
    enum NumberFormatSymbols_ksb { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ksf.
     * @enum {string}
     */
    enum NumberFormatSymbols_ksf { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ksh.
     * @enum {string}
     */
    enum NumberFormatSymbols_ksh { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kw.
     * @enum {string}
     */
    enum NumberFormatSymbols_kw { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ky_Cyrl.
     * @enum {string}
     */
    enum NumberFormatSymbols_ky_Cyrl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale lag.
     * @enum {string}
     */
    enum NumberFormatSymbols_lag { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale lg.
     * @enum {string}
     */
    enum NumberFormatSymbols_lg { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale lkt.
     * @enum {string}
     */
    enum NumberFormatSymbols_lkt { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ln_AO.
     * @enum {string}
     */
    enum NumberFormatSymbols_ln_AO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ln_CF.
     * @enum {string}
     */
    enum NumberFormatSymbols_ln_CF { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ln_CG.
     * @enum {string}
     */
    enum NumberFormatSymbols_ln_CG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale lu.
     * @enum {string}
     */
    enum NumberFormatSymbols_lu { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale luo.
     * @enum {string}
     */
    enum NumberFormatSymbols_luo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale luy.
     * @enum {string}
     */
    enum NumberFormatSymbols_luy { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mas.
     * @enum {string}
     */
    enum NumberFormatSymbols_mas { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mas_TZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_mas_TZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mer.
     * @enum {string}
     */
    enum NumberFormatSymbols_mer { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mfe.
     * @enum {string}
     */
    enum NumberFormatSymbols_mfe { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mg.
     * @enum {string}
     */
    enum NumberFormatSymbols_mg { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mgh.
     * @enum {string}
     */
    enum NumberFormatSymbols_mgh { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mgo.
     * @enum {string}
     */
    enum NumberFormatSymbols_mgo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mn_Cyrl.
     * @enum {string}
     */
    enum NumberFormatSymbols_mn_Cyrl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ms_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_ms_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ms_Latn_BN.
     * @enum {string}
     */
    enum NumberFormatSymbols_ms_Latn_BN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ms_Latn_SG.
     * @enum {string}
     */
    enum NumberFormatSymbols_ms_Latn_SG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mua.
     * @enum {string}
     */
    enum NumberFormatSymbols_mua { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale naq.
     * @enum {string}
     */
    enum NumberFormatSymbols_naq { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nd.
     * @enum {string}
     */
    enum NumberFormatSymbols_nd { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ne_IN.
     * @enum {string}
     */
    enum NumberFormatSymbols_ne_IN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nl_AW.
     * @enum {string}
     */
    enum NumberFormatSymbols_nl_AW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nl_BE.
     * @enum {string}
     */
    enum NumberFormatSymbols_nl_BE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nl_BQ.
     * @enum {string}
     */
    enum NumberFormatSymbols_nl_BQ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nl_CW.
     * @enum {string}
     */
    enum NumberFormatSymbols_nl_CW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nl_SR.
     * @enum {string}
     */
    enum NumberFormatSymbols_nl_SR { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nl_SX.
     * @enum {string}
     */
    enum NumberFormatSymbols_nl_SX { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nmg.
     * @enum {string}
     */
    enum NumberFormatSymbols_nmg { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nn.
     * @enum {string}
     */
    enum NumberFormatSymbols_nn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nnh.
     * @enum {string}
     */
    enum NumberFormatSymbols_nnh { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nr.
     * @enum {string}
     */
    enum NumberFormatSymbols_nr { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nso.
     * @enum {string}
     */
    enum NumberFormatSymbols_nso { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nus.
     * @enum {string}
     */
    enum NumberFormatSymbols_nus { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nyn.
     * @enum {string}
     */
    enum NumberFormatSymbols_nyn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale om.
     * @enum {string}
     */
    enum NumberFormatSymbols_om { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale om_KE.
     * @enum {string}
     */
    enum NumberFormatSymbols_om_KE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale os.
     * @enum {string}
     */
    enum NumberFormatSymbols_os { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale os_RU.
     * @enum {string}
     */
    enum NumberFormatSymbols_os_RU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pa_Arab.
     * @enum {string}
     */
    enum NumberFormatSymbols_pa_Arab { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pa_Guru.
     * @enum {string}
     */
    enum NumberFormatSymbols_pa_Guru { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ps.
     * @enum {string}
     */
    enum NumberFormatSymbols_ps { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt_AO.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt_AO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt_CV.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt_CV { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt_GW.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt_GW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt_MO.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt_MO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt_MZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt_MZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt_ST.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt_ST { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt_TL.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt_TL { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale rm.
     * @enum {string}
     */
    enum NumberFormatSymbols_rm { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale rn.
     * @enum {string}
     */
    enum NumberFormatSymbols_rn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ro_MD.
     * @enum {string}
     */
    enum NumberFormatSymbols_ro_MD { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale rof.
     * @enum {string}
     */
    enum NumberFormatSymbols_rof { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ru_BY.
     * @enum {string}
     */
    enum NumberFormatSymbols_ru_BY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ru_KG.
     * @enum {string}
     */
    enum NumberFormatSymbols_ru_KG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ru_KZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_ru_KZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ru_MD.
     * @enum {string}
     */
    enum NumberFormatSymbols_ru_MD { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ru_UA.
     * @enum {string}
     */
    enum NumberFormatSymbols_ru_UA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale rw.
     * @enum {string}
     */
    enum NumberFormatSymbols_rw { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale rwk.
     * @enum {string}
     */
    enum NumberFormatSymbols_rwk { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sah.
     * @enum {string}
     */
    enum NumberFormatSymbols_sah { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale saq.
     * @enum {string}
     */
    enum NumberFormatSymbols_saq { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sbp.
     * @enum {string}
     */
    enum NumberFormatSymbols_sbp { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale se.
     * @enum {string}
     */
    enum NumberFormatSymbols_se { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale se_FI.
     * @enum {string}
     */
    enum NumberFormatSymbols_se_FI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale seh.
     * @enum {string}
     */
    enum NumberFormatSymbols_seh { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ses.
     * @enum {string}
     */
    enum NumberFormatSymbols_ses { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sg.
     * @enum {string}
     */
    enum NumberFormatSymbols_sg { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale shi.
     * @enum {string}
     */
    enum NumberFormatSymbols_shi { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale shi_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_shi_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale shi_Tfng.
     * @enum {string}
     */
    enum NumberFormatSymbols_shi_Tfng { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sn.
     * @enum {string}
     */
    enum NumberFormatSymbols_sn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale so.
     * @enum {string}
     */
    enum NumberFormatSymbols_so { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale so_DJ.
     * @enum {string}
     */
    enum NumberFormatSymbols_so_DJ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale so_ET.
     * @enum {string}
     */
    enum NumberFormatSymbols_so_ET { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale so_KE.
     * @enum {string}
     */
    enum NumberFormatSymbols_so_KE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sq_MK.
     * @enum {string}
     */
    enum NumberFormatSymbols_sq_MK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sq_XK.
     * @enum {string}
     */
    enum NumberFormatSymbols_sq_XK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sr_Cyrl.
     * @enum {string}
     */
    enum NumberFormatSymbols_sr_Cyrl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sr_Cyrl_BA.
     * @enum {string}
     */
    enum NumberFormatSymbols_sr_Cyrl_BA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sr_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_sr_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sr_Latn_BA.
     * @enum {string}
     */
    enum NumberFormatSymbols_sr_Latn_BA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sr_Latn_RS.
     * @enum {string}
     */
    enum NumberFormatSymbols_sr_Latn_RS { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ss.
     * @enum {string}
     */
    enum NumberFormatSymbols_ss { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ss_SZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_ss_SZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ssy.
     * @enum {string}
     */
    enum NumberFormatSymbols_ssy { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale st.
     * @enum {string}
     */
    enum NumberFormatSymbols_st { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sv_AX.
     * @enum {string}
     */
    enum NumberFormatSymbols_sv_AX { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sv_FI.
     * @enum {string}
     */
    enum NumberFormatSymbols_sv_FI { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sw_KE.
     * @enum {string}
     */
    enum NumberFormatSymbols_sw_KE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sw_UG.
     * @enum {string}
     */
    enum NumberFormatSymbols_sw_UG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale swc.
     * @enum {string}
     */
    enum NumberFormatSymbols_swc { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ta_LK.
     * @enum {string}
     */
    enum NumberFormatSymbols_ta_LK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ta_MY.
     * @enum {string}
     */
    enum NumberFormatSymbols_ta_MY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ta_SG.
     * @enum {string}
     */
    enum NumberFormatSymbols_ta_SG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale teo.
     * @enum {string}
     */
    enum NumberFormatSymbols_teo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale teo_KE.
     * @enum {string}
     */
    enum NumberFormatSymbols_teo_KE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tg.
     * @enum {string}
     */
    enum NumberFormatSymbols_tg { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tg_Cyrl.
     * @enum {string}
     */
    enum NumberFormatSymbols_tg_Cyrl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ti.
     * @enum {string}
     */
    enum NumberFormatSymbols_ti { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ti_ER.
     * @enum {string}
     */
    enum NumberFormatSymbols_ti_ER { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tig.
     * @enum {string}
     */
    enum NumberFormatSymbols_tig { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tn.
     * @enum {string}
     */
    enum NumberFormatSymbols_tn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tn_BW.
     * @enum {string}
     */
    enum NumberFormatSymbols_tn_BW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale to.
     * @enum {string}
     */
    enum NumberFormatSymbols_to { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tr_CY.
     * @enum {string}
     */
    enum NumberFormatSymbols_tr_CY { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ts.
     * @enum {string}
     */
    enum NumberFormatSymbols_ts { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale twq.
     * @enum {string}
     */
    enum NumberFormatSymbols_twq { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tzm.
     * @enum {string}
     */
    enum NumberFormatSymbols_tzm { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tzm_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_tzm_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ur_IN.
     * @enum {string}
     */
    enum NumberFormatSymbols_ur_IN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale uz_Arab.
     * @enum {string}
     */
    enum NumberFormatSymbols_uz_Arab { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale uz_Cyrl.
     * @enum {string}
     */
    enum NumberFormatSymbols_uz_Cyrl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale uz_Cyrl_UZ.
     * @enum {string}
     */
    enum NumberFormatSymbols_uz_Cyrl_UZ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale uz_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_uz_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale vai.
     * @enum {string}
     */
    enum NumberFormatSymbols_vai { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale vai_Latn.
     * @enum {string}
     */
    enum NumberFormatSymbols_vai_Latn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale vai_Vaii.
     * @enum {string}
     */
    enum NumberFormatSymbols_vai_Vaii { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ve.
     * @enum {string}
     */
    enum NumberFormatSymbols_ve { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale vo.
     * @enum {string}
     */
    enum NumberFormatSymbols_vo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale vun.
     * @enum {string}
     */
    enum NumberFormatSymbols_vun { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale wae.
     * @enum {string}
     */
    enum NumberFormatSymbols_wae { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale wal.
     * @enum {string}
     */
    enum NumberFormatSymbols_wal { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale xh.
     * @enum {string}
     */
    enum NumberFormatSymbols_xh { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale xog.
     * @enum {string}
     */
    enum NumberFormatSymbols_xog { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale yav.
     * @enum {string}
     */
    enum NumberFormatSymbols_yav { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale yo.
     * @enum {string}
     */
    enum NumberFormatSymbols_yo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale yo_BJ.
     * @enum {string}
     */
    enum NumberFormatSymbols_yo_BJ { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zgh.
     * @enum {string}
     */
    enum NumberFormatSymbols_zgh { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_Hans.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_Hans { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_Hans_HK.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_Hans_HK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_Hans_MO.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_Hans_MO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_Hans_SG.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_Hans_SG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_Hant.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_Hant { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_Hant_HK.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_Hant_HK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_Hant_MO.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_Hant_MO { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale af.
     * @enum {string}
     */
    enum NumberFormatSymbols_af { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale am.
     * @enum {string}
     */
    enum NumberFormatSymbols_am { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ar.
     * @enum {string}
     */
    enum NumberFormatSymbols_ar { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale az.
     * @enum {string}
     */
    enum NumberFormatSymbols_az { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bg.
     * @enum {string}
     */
    enum NumberFormatSymbols_bg { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale bn.
     * @enum {string}
     */
    enum NumberFormatSymbols_bn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale br.
     * @enum {string}
     */
    enum NumberFormatSymbols_br { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ca.
     * @enum {string}
     */
    enum NumberFormatSymbols_ca { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale chr.
     * @enum {string}
     */
    enum NumberFormatSymbols_chr { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale cs.
     * @enum {string}
     */
    enum NumberFormatSymbols_cs { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale cy.
     * @enum {string}
     */
    enum NumberFormatSymbols_cy { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale da.
     * @enum {string}
     */
    enum NumberFormatSymbols_da { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale de.
     * @enum {string}
     */
    enum NumberFormatSymbols_de { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale de_AT.
     * @enum {string}
     */
    enum NumberFormatSymbols_de_AT { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale de_CH.
     * @enum {string}
     */
    enum NumberFormatSymbols_de_CH { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale el.
     * @enum {string}
     */
    enum NumberFormatSymbols_el { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en.
     * @enum {string}
     */
    enum NumberFormatSymbols_en { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_AU.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_AU { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_GB.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_GB { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_IE.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_IE { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_IN.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_IN { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_SG.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_SG { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale en_ZA.
     * @enum {string}
     */
    enum NumberFormatSymbols_en_ZA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es.
     * @enum {string}
     */
    enum NumberFormatSymbols_es { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale es_419.
     * @enum {string}
     */
    enum NumberFormatSymbols_es_419 { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale et.
     * @enum {string}
     */
    enum NumberFormatSymbols_et { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale eu.
     * @enum {string}
     */
    enum NumberFormatSymbols_eu { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fa.
     * @enum {string}
     */
    enum NumberFormatSymbols_fa { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fi.
     * @enum {string}
     */
    enum NumberFormatSymbols_fi { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fil.
     * @enum {string}
     */
    enum NumberFormatSymbols_fil { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale fr_CA.
     * @enum {string}
     */
    enum NumberFormatSymbols_fr_CA { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale gl.
     * @enum {string}
     */
    enum NumberFormatSymbols_gl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale gsw.
     * @enum {string}
     */
    enum NumberFormatSymbols_gsw { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale gu.
     * @enum {string}
     */
    enum NumberFormatSymbols_gu { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale haw.
     * @enum {string}
     */
    enum NumberFormatSymbols_haw { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale he.
     * @enum {string}
     */
    enum NumberFormatSymbols_he { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale hi.
     * @enum {string}
     */
    enum NumberFormatSymbols_hi { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale hr.
     * @enum {string}
     */
    enum NumberFormatSymbols_hr { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale hu.
     * @enum {string}
     */
    enum NumberFormatSymbols_hu { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale hy.
     * @enum {string}
     */
    enum NumberFormatSymbols_hy { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale id.
     * @enum {string}
     */
    enum NumberFormatSymbols_id { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale in.
     * @enum {string}
     */
    enum NumberFormatSymbols_in { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale is.
     * @enum {string}
     */
    enum NumberFormatSymbols_is { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale it.
     * @enum {string}
     */
    enum NumberFormatSymbols_it { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale iw.
     * @enum {string}
     */
    enum NumberFormatSymbols_iw { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ja.
     * @enum {string}
     */
    enum NumberFormatSymbols_ja { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ka.
     * @enum {string}
     */
    enum NumberFormatSymbols_ka { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kk.
     * @enum {string}
     */
    enum NumberFormatSymbols_kk { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale km.
     * @enum {string}
     */
    enum NumberFormatSymbols_km { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale kn.
     * @enum {string}
     */
    enum NumberFormatSymbols_kn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ko.
     * @enum {string}
     */
    enum NumberFormatSymbols_ko { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ky.
     * @enum {string}
     */
    enum NumberFormatSymbols_ky { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ln.
     * @enum {string}
     */
    enum NumberFormatSymbols_ln { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale lo.
     * @enum {string}
     */
    enum NumberFormatSymbols_lo { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale lt.
     * @enum {string}
     */
    enum NumberFormatSymbols_lt { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale lv.
     * @enum {string}
     */
    enum NumberFormatSymbols_lv { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mk.
     * @enum {string}
     */
    enum NumberFormatSymbols_mk { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ml.
     * @enum {string}
     */
    enum NumberFormatSymbols_ml { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mn.
     * @enum {string}
     */
    enum NumberFormatSymbols_mn { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mr.
     * @enum {string}
     */
    enum NumberFormatSymbols_mr { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ms.
     * @enum {string}
     */
    enum NumberFormatSymbols_ms { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale mt.
     * @enum {string}
     */
    enum NumberFormatSymbols_mt { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale my.
     * @enum {string}
     */
    enum NumberFormatSymbols_my { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nb.
     * @enum {string}
     */
    enum NumberFormatSymbols_nb { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ne.
     * @enum {string}
     */
    enum NumberFormatSymbols_ne { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale nl.
     * @enum {string}
     */
    enum NumberFormatSymbols_nl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale no.
     * @enum {string}
     */
    enum NumberFormatSymbols_no { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale or.
     * @enum {string}
     */
    enum NumberFormatSymbols_or { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pa.
     * @enum {string}
     */
    enum NumberFormatSymbols_pa { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pl.
     * @enum {string}
     */
    enum NumberFormatSymbols_pl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale pt_PT.
     * @enum {string}
     */
    enum NumberFormatSymbols_pt_PT { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ro.
     * @enum {string}
     */
    enum NumberFormatSymbols_ro { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ru.
     * @enum {string}
     */
    enum NumberFormatSymbols_ru { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale si.
     * @enum {string}
     */
    enum NumberFormatSymbols_si { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sk.
     * @enum {string}
     */
    enum NumberFormatSymbols_sk { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sl.
     * @enum {string}
     */
    enum NumberFormatSymbols_sl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sq.
     * @enum {string}
     */
    enum NumberFormatSymbols_sq { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sr.
     * @enum {string}
     */
    enum NumberFormatSymbols_sr { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sv.
     * @enum {string}
     */
    enum NumberFormatSymbols_sv { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale sw.
     * @enum {string}
     */
    enum NumberFormatSymbols_sw { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ta.
     * @enum {string}
     */
    enum NumberFormatSymbols_ta { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale te.
     * @enum {string}
     */
    enum NumberFormatSymbols_te { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale th.
     * @enum {string}
     */
    enum NumberFormatSymbols_th { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tl.
     * @enum {string}
     */
    enum NumberFormatSymbols_tl { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale tr.
     * @enum {string}
     */
    enum NumberFormatSymbols_tr { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale uk.
     * @enum {string}
     */
    enum NumberFormatSymbols_uk { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale ur.
     * @enum {string}
     */
    enum NumberFormatSymbols_ur { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale uz.
     * @enum {string}
     */
    enum NumberFormatSymbols_uz { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale vi.
     * @enum {string}
     */
    enum NumberFormatSymbols_vi { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_HK.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_HK { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zh_TW.
     * @enum {string}
     */
    enum NumberFormatSymbols_zh_TW { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Number formatting symbols for locale zu.
     * @enum {string}
     */
    enum NumberFormatSymbols_zu { DECIMAL_SEP, GROUP_SEP, PERCENT, ZERO_DIGIT, PLUS_SIGN, MINUS_SIGN, EXP_SYMBOL, PERMILL, INFINITY, NAN, DECIMAL_PATTERN, SCIENTIFIC_PATTERN, PERCENT_PATTERN, CURRENCY_PATTERN, DEF_CURRENCY_CODE } 

    /**
     * Selected number formatting symbols by locale.
     */
    var NumberFormatSymbols: any /*missing*/;

    /**
     * Utility class for formatting text for display in a potentially
     * opposite-directionality context without garbling. Provides the following
     * functionality:
     *
     * 1. BiDi Wrapping
     * When text in one language is mixed into a document in another, opposite-
     * directionality language, e.g. when an English business name is embedded in a
     * Hebrew web page, both the inserted string and the text following it may be
     * displayed incorrectly unless the inserted string is explicitly separated
     * from the surrounding text in a "wrapper" that declares its directionality at
     * the start and then resets it back at the end. This wrapping can be done in
     * HTML mark-up (e.g. a 'span dir="rtl"' tag) or - only in contexts where
     * mark-up can not be used - in Unicode BiDi formatting codes (LRE|RLE and PDF).
     * Providing such wrapping services is the basic purpose of the BiDi formatter.
     *
     * 2. Directionality estimation
     * How does one know whether a string about to be inserted into surrounding
     * text has the same directionality? Well, in many cases, one knows that this
     * must be the case when writing the code doing the insertion, e.g. when a
     * localized message is inserted into a localized page. In such cases there is
     * no need to involve the BiDi formatter at all. In the remaining cases, e.g.
     * when the string is user-entered or comes from a database, the language of
     * the string (and thus its directionality) is not known a priori, and must be
     * estimated at run-time. The BiDi formatter does this automatically.
     *
     * 3. Escaping
     * When wrapping plain text - i.e. text that is not already HTML or HTML-
     * escaped - in HTML mark-up, the text must first be HTML-escaped to prevent XSS
     * attacks and other nasty business. This of course is always true, but the
     * escaping can not be done after the string has already been wrapped in
     * mark-up, so the BiDi formatter also serves as a last chance and includes
     * escaping services.
     *
     * Thus, in a single call, the formatter will escape the input string as
     * specified, determine its directionality, and wrap it as necessary. It is
     * then up to the caller to insert the return value in the output.
     *
     * See http://wiki/Main/TemplatesAndBiDi for more information.
     *
     * @param {goog.i18n.bidi.Dir|number|boolean|null} contextDir The context
     *     directionality, in one of the following formats:
     *     1. A goog.i18n.bidi.Dir constant. NEUTRAL is treated the same as null,
     *        i.e. unknown, for backward compatibility with legacy calls.
     *     2. A number (positive = LTR, negative = RTL, 0 = unknown).
     *     3. A boolean (true = RTL, false = LTR).
     *     4. A null for unknown directionality.
     * @param {boolean=} opt_alwaysSpan Whether {@link #spanWrap} should always
     *     use a 'span' tag, even when the input directionality is neutral or
     *     matches the context, so that the DOM structure of the output does not
     *     depend on the combination of directionalities. Default: false.
     * @constructor
     * @final
     */
    class BidiFormatter {
        /**
         * Utility class for formatting text for display in a potentially
         * opposite-directionality context without garbling. Provides the following
         * functionality:
         *
         * 1. BiDi Wrapping
         * When text in one language is mixed into a document in another, opposite-
         * directionality language, e.g. when an English business name is embedded in a
         * Hebrew web page, both the inserted string and the text following it may be
         * displayed incorrectly unless the inserted string is explicitly separated
         * from the surrounding text in a "wrapper" that declares its directionality at
         * the start and then resets it back at the end. This wrapping can be done in
         * HTML mark-up (e.g. a 'span dir="rtl"' tag) or - only in contexts where
         * mark-up can not be used - in Unicode BiDi formatting codes (LRE|RLE and PDF).
         * Providing such wrapping services is the basic purpose of the BiDi formatter.
         *
         * 2. Directionality estimation
         * How does one know whether a string about to be inserted into surrounding
         * text has the same directionality? Well, in many cases, one knows that this
         * must be the case when writing the code doing the insertion, e.g. when a
         * localized message is inserted into a localized page. In such cases there is
         * no need to involve the BiDi formatter at all. In the remaining cases, e.g.
         * when the string is user-entered or comes from a database, the language of
         * the string (and thus its directionality) is not known a priori, and must be
         * estimated at run-time. The BiDi formatter does this automatically.
         *
         * 3. Escaping
         * When wrapping plain text - i.e. text that is not already HTML or HTML-
         * escaped - in HTML mark-up, the text must first be HTML-escaped to prevent XSS
         * attacks and other nasty business. This of course is always true, but the
         * escaping can not be done after the string has already been wrapped in
         * mark-up, so the BiDi formatter also serves as a last chance and includes
         * escaping services.
         *
         * Thus, in a single call, the formatter will escape the input string as
         * specified, determine its directionality, and wrap it as necessary. It is
         * then up to the caller to insert the return value in the output.
         *
         * See http://wiki/Main/TemplatesAndBiDi for more information.
         *
         * @param {goog.i18n.bidi.Dir|number|boolean|null} contextDir The context
         *     directionality, in one of the following formats:
         *     1. A goog.i18n.bidi.Dir constant. NEUTRAL is treated the same as null,
         *        i.e. unknown, for backward compatibility with legacy calls.
         *     2. A number (positive = LTR, negative = RTL, 0 = unknown).
         *     3. A boolean (true = RTL, false = LTR).
         *     4. A null for unknown directionality.
         * @param {boolean=} opt_alwaysSpan Whether {@link #spanWrap} should always
         *     use a 'span' tag, even when the input directionality is neutral or
         *     matches the context, so that the DOM structure of the output does not
         *     depend on the combination of directionalities. Default: false.
         * @constructor
         * @final
         */
        constructor(contextDir: any /*goog.i18n.bidi.Dir|number|boolean|any (null)*/, opt_alwaysSpan?: boolean);
    
        /**
         * @return {?goog.i18n.bidi.Dir} The context directionality.
         */
        getContextDir(): goog.i18n.bidi.Dir;
    
        /**
         * @return {boolean} Whether alwaysSpan is set.
         */
        getAlwaysSpan(): boolean;
    
        /**
         * @param {goog.i18n.bidi.Dir|number|boolean|null} contextDir The context
         *     directionality, in one of the following formats:
         *     1. A goog.i18n.bidi.Dir constant. NEUTRAL is treated the same as null,
         *        i.e. unknown.
         *     2. A number (positive = LTR, negative = RTL, 0 = unknown).
         *     3. A boolean (true = RTL, false = LTR).
         *     4. A null for unknown directionality.
         */
        setContextDir(contextDir: any /*goog.i18n.bidi.Dir|number|boolean|any (null)*/): void;
    
        /**
         * @param {boolean} alwaysSpan Whether {@link #spanWrap} should always use a
         *     'span' tag, even when the input directionality is neutral or matches the
         *     context, so that the DOM structure of the output does not depend on the
         *     combination of directionalities.
         */
        setAlwaysSpan(alwaysSpan: boolean): void;
    
        /**
         * Returns the directionality of input argument {@code str}.
         * Identical to {@link goog.i18n.bidi.estimateDirection}.
         *
         * @param {string} str The input text.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @return {goog.i18n.bidi.Dir} Estimated overall directionality of {@code str}.
         */
        estimateDirection: any /*missing*/;
    
        /**
         * Returns "rtl" if {@code str}'s estimated directionality is RTL, and "ltr" if
         * it is LTR. In case it's NEUTRAL, returns "rtl" if the context directionality
         * is RTL, and "ltr" otherwise.
         * Needed for GXP, which can't handle dirAttr.
         * Example use case:
         * &lt;td expr:dir='bidiFormatter.dirAttrValue(foo)'&gt;
         *   &lt;gxp:eval expr='foo'&gt;
         * &lt;/td&gt;
         *
         * @param {string} str Text whose directionality is to be estimated.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @return {string} "rtl" or "ltr", according to the logic described above.
         */
        dirAttrValue(str: string, opt_isHtml?: boolean): string;
    
        /**
         * Returns "rtl" if the given directionality is RTL, and "ltr" if it is LTR. In
         * case it's NEUTRAL, returns "rtl" if the context directionality is RTL, and
         * "ltr" otherwise.
         *
         * @param {goog.i18n.bidi.Dir} dir A directionality.
         * @return {string} "rtl" or "ltr", according to the logic described above.
         */
        knownDirAttrValue(dir: goog.i18n.bidi.Dir): string;
    
        /**
         * Returns 'dir="ltr"' or 'dir="rtl"', depending on {@code str}'s estimated
         * directionality, if it is not the same as the context directionality.
         * Otherwise, returns the empty string.
         *
         * @param {string} str Text whose directionality is to be estimated.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @return {string} 'dir="rtl"' for RTL text in non-RTL context; 'dir="ltr"' for
         *     LTR text in non-LTR context; else, the empty string.
         */
        dirAttr(str: string, opt_isHtml?: boolean): string;
    
        /**
         * Returns 'dir="ltr"' or 'dir="rtl"', depending on the given directionality, if
         * it is not the same as the context directionality. Otherwise, returns the
         * empty string.
         *
         * @param {goog.i18n.bidi.Dir} dir A directionality.
         * @return {string} 'dir="rtl"' for RTL text in non-RTL context; 'dir="ltr"' for
         *     LTR text in non-LTR context; else, the empty string.
         */
        knownDirAttr(dir: goog.i18n.bidi.Dir): string;
    
        /**
         * Formats a string of unknown directionality for use in HTML output of the
         * context directionality, so an opposite-directionality string is neither
         * garbled nor garbles what follows it.
         * The algorithm: estimates the directionality of input argument {@code str}. In
         * case its directionality doesn't match the context directionality, wraps it
         * with a 'span' tag and adds a "dir" attribute (either 'dir="rtl"' or
         * 'dir="ltr"'). If setAlwaysSpan(true) was used, the input is always wrapped
         * with 'span', skipping just the dir attribute when it's not needed.
         *
         * If {@code opt_dirReset}, and if the overall directionality or the exit
         * directionality of {@code str} are opposite to the context directionality, a
         * trailing unicode BiDi mark matching the context directionality is appened
         * (LRM or RLM).
         *
         * If !{@code opt_isHtml}, HTML-escapes {@code str} regardless of wrapping.
         *
         * @param {string} str The input text.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @param {boolean=} opt_dirReset Whether to append a trailing unicode bidi mark
         *     matching the context directionality, when needed, to prevent the possible
         *     garbling of whatever may follow {@code str}. Default: true.
         * @return {string} Input text after applying the above processing.
         */
        spanWrap(str: string, opt_isHtml?: boolean, opt_dirReset?: boolean): string;
    
        /**
         * Formats a string of given directionality for use in HTML output of the
         * context directionality, so an opposite-directionality string is neither
         * garbled nor garbles what follows it.
         * The algorithm: If {@code dir} doesn't match the context directionality, wraps
         * {@code str} with a 'span' tag and adds a "dir" attribute (either 'dir="rtl"'
         * or 'dir="ltr"'). If setAlwaysSpan(true) was used, the input is always wrapped
         * with 'span', skipping just the dir attribute when it's not needed.
         *
         * If {@code opt_dirReset}, and if {@code dir} or the exit directionality of
         * {@code str} are opposite to the context directionality, a trailing unicode
         * BiDi mark matching the context directionality is appened (LRM or RLM).
         *
         * If !{@code opt_isHtml}, HTML-escapes {@code str} regardless of wrapping.
         *
         * @param {?goog.i18n.bidi.Dir} dir {@code str}'s overall directionality, or
         *     null if unknown and needs to be estimated.
         * @param {string} str The input text.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @param {boolean=} opt_dirReset Whether to append a trailing unicode bidi mark
         *     matching the context directionality, when needed, to prevent the possible
         *     garbling of whatever may follow {@code str}. Default: true.
         * @return {string} Input text after applying the above processing.
         */
        spanWrapWithKnownDir(dir: goog.i18n.bidi.Dir, str: string, opt_isHtml?: boolean, opt_dirReset?: boolean): string;
    
        /**
         * Formats a string of unknown directionality for use in plain-text output of
         * the context directionality, so an opposite-directionality string is neither
         * garbled nor garbles what follows it.
         * As opposed to {@link #spanWrap}, this makes use of unicode BiDi formatting
         * characters. In HTML, its *only* valid use is inside of elements that do not
         * allow mark-up, e.g. an 'option' tag.
         * The algorithm: estimates the directionality of input argument {@code str}.
         * In case it doesn't match  the context directionality, wraps it with Unicode
         * BiDi formatting characters: RLE{@code str}PDF for RTL text, and
         * LRE{@code str}PDF for LTR text.
         *
         * If {@code opt_dirReset}, and if the overall directionality or the exit
         * directionality of {@code str} are opposite to the context directionality, a
         * trailing unicode BiDi mark matching the context directionality is appended
         * (LRM or RLM).
         *
         * Does *not* do HTML-escaping regardless of the value of {@code opt_isHtml}.
         * The return value can be HTML-escaped as necessary.
         *
         * @param {string} str The input text.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @param {boolean=} opt_dirReset Whether to append a trailing unicode bidi mark
         *     matching the context directionality, when needed, to prevent the possible
         *     garbling of whatever may follow {@code str}. Default: true.
         * @return {string} Input text after applying the above processing.
         */
        unicodeWrap(str: string, opt_isHtml?: boolean, opt_dirReset?: boolean): string;
    
        /**
         * Formats a string of given directionality for use in plain-text output of the
         * context directionality, so an opposite-directionality string is neither
         * garbled nor garbles what follows it.
         * As opposed to {@link #spanWrapWithKnownDir}, makes use of unicode BiDi
         * formatting characters. In HTML, its *only* valid use is inside of elements
         * that do not allow mark-up, e.g. an 'option' tag.
         * The algorithm: If {@code dir} doesn't match the context directionality, wraps
         * {@code str} with Unicode BiDi formatting characters: RLE{@code str}PDF for
         * RTL text, and LRE{@code str}PDF for LTR text.
         *
         * If {@code opt_dirReset}, and if the overall directionality or the exit
         * directionality of {@code str} are opposite to the context directionality, a
         * trailing unicode BiDi mark matching the context directionality is appended
         * (LRM or RLM).
         *
         * Does *not* do HTML-escaping regardless of the value of {@code opt_isHtml}.
         * The return value can be HTML-escaped as necessary.
         *
         * @param {?goog.i18n.bidi.Dir} dir {@code str}'s overall directionality, or
         *     null if unknown and needs to be estimated.
         * @param {string} str The input text.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @param {boolean=} opt_dirReset Whether to append a trailing unicode bidi mark
         *     matching the context directionality, when needed, to prevent the possible
         *     garbling of whatever may follow {@code str}. Default: true.
         * @return {string} Input text after applying the above processing.
         */
        unicodeWrapWithKnownDir(dir: goog.i18n.bidi.Dir, str: string, opt_isHtml?: boolean, opt_dirReset?: boolean): string;
    
        /**
         * Returns a Unicode BiDi mark matching the context directionality (LRM or RLM)
         * if the directionality or the exit directionality of {@code str} are opposite
         * to the context directionality. Otherwise returns the empty string.
         *
         * @param {string} str The input text.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @return {string} A Unicode bidi mark matching the global directionality or
         *     the empty string.
         */
        markAfter(str: string, opt_isHtml?: boolean): string;
    
        /**
         * Returns a Unicode BiDi mark matching the context directionality (LRM or RLM)
         * if the given directionality or the exit directionality of {@code str} are
         * opposite to the context directionality. Otherwise returns the empty string.
         *
         * @param {?goog.i18n.bidi.Dir} dir {@code str}'s overall directionality, or
         *     null if unknown and needs to be estimated.
         * @param {string} str The input text.
         * @param {boolean=} opt_isHtml Whether {@code str} is HTML / HTML-escaped.
         *     Default: false.
         * @return {string} A Unicode bidi mark matching the global directionality or
         *     the empty string.
         */
        markAfterKnownDir(dir: goog.i18n.bidi.Dir, str: string, opt_isHtml?: boolean): string;
    
        /**
         * Returns the Unicode BiDi mark matching the context directionality (LRM for
         * LTR context directionality, RLM for RTL context directionality), or the
         * empty string for neutral / unknown context directionality.
         *
         * @return {string} LRM for LTR context directionality and RLM for RTL context
         *     directionality.
         */
        mark(): string;
    
        /**
         * Returns 'right' for RTL context directionality. Otherwise (LTR or neutral /
         * unknown context directionality) returns 'left'.
         *
         * @return {string} 'right' for RTL context directionality and 'left' for other
         *     context directionality.
         */
        startEdge(): string;
    
        /**
         * Returns 'left' for RTL context directionality. Otherwise (LTR or neutral /
         * unknown context directionality) returns 'right'.
         *
         * @return {string} 'left' for RTL context directionality and 'right' for other
         *     context directionality.
         */
        endEdge(): string;
    }

    /**
     * Class to decompress base88 compressed character list.
     * @constructor
     * @final
     */
    class CharListDecompressor {
        /**
         * Class to decompress base88 compressed character list.
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Gets the list of characters specified in the given string by base 88 scheme.
         * @param {string} str The string encoding character list.
         * @return {!Array.<string>} The list of characters specified by the given
         *     string in base 88 scheme.
         */
        toCharList(str: string): string[];
    }

    /**
     * Object holding two level character organization and character listing.
     * @constructor
     */
    class CharPickerData {
        /**
         * Object holding two level character organization and character listing.
         * @constructor
         */
        constructor();
    
        /**
         * Top catagory names of character organization.
         * @type {Array.<string>}
         */
        categories: string[];
    
        /**
         * Subcategory names. Each subarray in this array is a list of subcategory
         * names for the corresponding category specified in
         * {@code goog.i18n.CharPickerData.categories}.
         * @type {Array.<Array.<string>>}
         */
        subcategories: string[][];
    
        /**
         * Character lists in base88 encoding scheme. Each subarray is a list of
         * base88 encoded charater strings representing corresponding subcategory
         * specified in {@code goog.i18n.CharPickerData.categories}. Encoding
         * scheme is described in {@code goog.i18n.CharListDecompressor}.
         * @type {Array.<Array.<string>>}
         */
        charList: string[][];
    }

    /**
     * Construct a DateTimeFormat object based on current locale.
     * @constructor
     * @param {string|number} pattern pattern specification or pattern type.
     * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use for this
     *     instance rather than the global symbols.
     * @final
     */
    class DateTimeFormat {
        /**
         * Construct a DateTimeFormat object based on current locale.
         * @constructor
         * @param {string|number} pattern pattern specification or pattern type.
         * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use for this
         *     instance rather than the global symbols.
         * @final
         */
        constructor(pattern: any /*string|number*/, opt_dateTimeSymbols?: Object);
    
        /**
         * Format the given date object according to preset pattern and current lcoale.
         * @param {goog.date.DateLike} date The Date object that is being formatted.
         * @param {goog.i18n.TimeZone=} opt_timeZone optional, if specified, time
         *    related fields will be formatted based on its setting. When this field
         *    is not specified, "undefined" will be pass around and those function
         *    that really need time zone service will create a default one.
         * @return {string} Formatted string for the given date.
         *    Throws an error if the date is null or if one tries to format a date-only
         *    object (for instance goog.date.Date) using a pattern with time fields.
         */
        format(date: goog.date.DateLike, opt_timeZone?: goog.i18n.TimeZone): string;
    }

    /**
     * Construct a DateTimeParse based on current locale.
     * @param {string|number} pattern pattern specification or pattern type.
     * @constructor
     * @final
     */
    class DateTimeParse {
        /**
         * Construct a DateTimeParse based on current locale.
         * @param {string|number} pattern pattern specification or pattern type.
         * @constructor
         * @final
         */
        constructor(pattern: any /*string|number*/);
    
        /**
         * Parse the given string and fill info into date object. This version does
         * not validate the input.
         * @param {string} text The string being parsed.
         * @param {goog.date.DateLike} date The Date object to hold the parsed date.
         * @param {number=} opt_start The position from where parse should begin.
         * @return {number} How many characters parser advanced.
         */
        parse(text: string, date: goog.date.DateLike, opt_start?: number): number;
    
        /**
         * Parse the given string and fill info into date object. This version will
         * validate the input and make sure it is a validate date/time.
         * @param {string} text The string being parsed.
         * @param {goog.date.DateLike} date The Date object to hold the parsed date.
         * @param {number=} opt_start The position from where parse should begin.
         * @return {number} How many characters parser advanced.
         */
        strictParse(text: string, date: goog.date.DateLike, opt_start?: number): number;
    }

    /**
     * Constructor of MessageFormat.
     * @param {string} pattern The pattern we parse and apply positional parameters
     *     to.
     * @constructor
     * @final
     */
    class MessageFormat {
        /**
         * Constructor of MessageFormat.
         * @param {string} pattern The pattern we parse and apply positional parameters
         *     to.
         * @constructor
         * @final
         */
        constructor(pattern: string);
    
        /**
         * Formats a message, treating '#' with special meaning representing
         * the number (plural_variable - offset).
         * @param {!Object} namedParameters Parameters that either
         *     influence the formatting or are used as actual data.
         *     I.e. in call to fmt.format({'NUM_PEOPLE': 5, 'NAME': 'Angela'}),
         *     object {'NUM_PEOPLE': 5, 'NAME': 'Angela'} holds positional parameters.
         *     1st parameter could mean 5 people, which could influence plural format,
         *     and 2nd parameter is just a data to be printed out in proper position.
         * @return {string} Formatted message.
         */
        format(namedParameters: Object): string;
    
        /**
         * Formats a message, treating '#' as literary character.
         * @param {!Object} namedParameters Parameters that either
         *     influence the formatting or are used as actual data.
         *     I.e. in call to fmt.format({'NUM_PEOPLE': 5, 'NAME': 'Angela'}),
         *     object {'NUM_PEOPLE': 5, 'NAME': 'Angela'} holds positional parameters.
         *     1st parameter could mean 5 people, which could influence plural format,
         *     and 2nd parameter is just a data to be printed out in proper position.
         * @return {string} Formatted message.
         */
        formatIgnoringPound(namedParameters: Object): string;
    }

    /**
     * Constructor of NumberFormat.
     * @param {number|string} pattern The number that indicates a predefined
     *     number format pattern.
     * @param {string=} opt_currency Optional international currency
     *     code. This determines the currency code/symbol used in format/parse. If
     *     not given, the currency code for current locale will be used.
     * @param {number=} opt_currencyStyle currency style, value defined in
     *        goog.i18n.NumberFormat.CurrencyStyle.
     * @constructor
     */
    class NumberFormat {
        /**
         * Constructor of NumberFormat.
         * @param {number|string} pattern The number that indicates a predefined
         *     number format pattern.
         * @param {string=} opt_currency Optional international currency
         *     code. This determines the currency code/symbol used in format/parse. If
         *     not given, the currency code for current locale will be used.
         * @param {number=} opt_currencyStyle currency style, value defined in
         *        goog.i18n.NumberFormat.CurrencyStyle.
         * @constructor
         */
        constructor(pattern: any /*number|string*/, opt_currency?: string, opt_currencyStyle?: number);
    
        /**
         * Sets minimum number of fraction digits.
         * @param {number} min the minimum.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setMinimumFractionDigits(min: number): goog.i18n.NumberFormat;
    
        /**
         * Sets maximum number of fraction digits.
         * @param {number} max the maximum.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setMaximumFractionDigits(max: number): goog.i18n.NumberFormat;
    
        /**
         * Sets number of significant digits to show. Only fractions will be rounded.
         * @param {number} number The number of significant digits to include.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setSignificantDigits(number: number): goog.i18n.NumberFormat;
    
        /**
         * Gets number of significant digits to show. Only fractions will be rounded.
         * @return {number} The number of significant digits to include.
         */
        getSignificantDigits(): number;
    
        /**
         * Sets whether trailing fraction zeros should be shown when significantDigits_
         * is positive. If this is true and significantDigits_ is 2, 1 will be formatted
         * as '1.0'.
         * @param {boolean} showTrailingZeros Whether trailing zeros should be shown.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setShowTrailingZeros(showTrailingZeros: boolean): goog.i18n.NumberFormat;
    
        /**
         * Sets a number to base the formatting on when compact style formatting is
         * used. If this is null, the formatting should be based only on the number to
         * be formatting.
         *
         * This base formatting number can be used to format the target number as
         * another number would be formatted. For example, 100,000 is normally formatted
         * as "100K" in the COMPACT_SHORT format. To instead format it as '0.1M', the
         * base number could be set to 1,000,000 in order to force all numbers to be
         * formatted in millions. Similarly, 1,000,000,000 would normally be formatted
         * as '1B' and setting the base formatting number to 1,000,000, would cause it
         * to be formatted instead as '1,000M'.
         *
         * @param {?number} baseFormattingNumber The number to base formatting on, or
         * null if formatting should not be based on another number.
         * @return {!goog.i18n.NumberFormat} Reference to this NumberFormat object.
         */
        setBaseFormatting(baseFormattingNumber: number): goog.i18n.NumberFormat;
    
        /**
         * Gets the number on which compact formatting is currently based, or null if
         * no such number is set. See setBaseFormatting() for more information.
         * @return {?number}
         */
        getBaseFormatting(): number;
    
        /**
         * Parses text string to produce a Number.
         *
         * This method attempts to parse text starting from position "opt_pos" if it
         * is given. Otherwise the parse will start from the beginning of the text.
         * When opt_pos presents, opt_pos will be updated to the character next to where
         * parsing stops after the call. If an error occurs, opt_pos won't be updated.
         *
         * @param {string} text The string to be parsed.
         * @param {Array.<number>=} opt_pos Position to pass in and get back.
         * @return {number} Parsed number. This throws an error if the text cannot be
         *     parsed.
         */
        parse(text: string, opt_pos?: number[]): number;
    
        /**
         * Formats a Number to produce a string.
         *
         * @param {number} number The Number to be formatted.
         * @return {string} The formatted number string.
         */
        format(number: number): string;
    
        /**
         * Checks if the currency symbol comes before the value ($12) or after (12$)
         * Handy for applications that need to have separate UI fields for the currency
         * value and symbol, especially for input: Price: [USD] [123.45]
         * The currency symbol might be a combo box, or a label.
         *
         * @return {boolean} true if currency is before value.
         */
        isCurrencyCodeBeforeValue(): boolean;
    }

    /**
     * TimeZone class implemented a time zone resolution and name information
     * source for client applications. The time zone object is initiated from
     * a time zone information object. Application can initiate a time zone
     * statically, or it may choose to initiate from a data obtained from server.
     * Each time zone information array is small, but the whole set of data
     * is too much for client application to download. If end user is allowed to
     * change time zone setting, dynamic retrieval should be the method to use.
     * In case only time zone offset is known, there is a decent fallback
     * that only use the time zone offset to create a TimeZone object.
     * A whole set of time zone information array was available under
     * http://go/js_locale_data. It is generated based on CLDR and
     * Olson time zone data base (through pytz), and will be updated timely.
     *
     * @constructor
     * @final
     */
    class TimeZone {
        /**
         * TimeZone class implemented a time zone resolution and name information
         * source for client applications. The time zone object is initiated from
         * a time zone information object. Application can initiate a time zone
         * statically, or it may choose to initiate from a data obtained from server.
         * Each time zone information array is small, but the whole set of data
         * is too much for client application to download. If end user is allowed to
         * change time zone setting, dynamic retrieval should be the method to use.
         * In case only time zone offset is known, there is a decent fallback
         * that only use the time zone offset to create a TimeZone object.
         * A whole set of time zone information array was available under
         * http://go/js_locale_data. It is generated based on CLDR and
         * Olson time zone data base (through pytz), and will be updated timely.
         *
         * @constructor
         * @final
         */
        constructor();
    
        /**
         * Convert the contents of time zone object to a timeZoneData object, suitable
         * for passing to goog.i18n.TimeZone.createTimeZone.
         * @return {!Object} A timeZoneData object (see the documentation for
         *     goog.i18n.TimeZone.createTimeZone).
         */
        getTimeZoneData(): Object;
    
        /**
         * Return the DST adjustment to the time zone offset for a given time.
         * While Daylight Saving Time is in effect, this number is positive.
         * Otherwise, it is zero.
         * @param {goog.date.DateLike} date The time to check.
         * @return {number} The DST adjustment in minutes EAST of UTC.
         */
        getDaylightAdjustment(date: goog.date.DateLike): number;
    
        /**
         * Return the GMT representation of this time zone object.
         * @param {goog.date.DateLike} date The date for which time to retrieve
         *     GMT string.
         * @return {string} GMT representation string.
         */
        getGMTString(date: goog.date.DateLike): string;
    
        /**
         * Get the long time zone name for a given date/time.
         * @param {goog.date.DateLike} date The time for which to retrieve
         *     the long time zone name.
         * @return {string} The long time zone name.
         */
        getLongName(date: goog.date.DateLike): string;
    
        /**
         * Get the time zone offset in minutes WEST of UTC for a given date/time.
         * @param {goog.date.DateLike} date The time for which to retrieve
         *     the time zone offset.
         * @return {number} The time zone offset in minutes WEST of UTC.
         */
        getOffset(date: goog.date.DateLike): number;
    
        /**
         * Get the RFC representation of the time zone for a given date/time.
         * @param {goog.date.DateLike} date The time for which to retrieve the
         *     RFC time zone string.
         * @return {string} The RFC time zone string.
         */
        getRFCTimeZoneString(date: goog.date.DateLike): string;
    
        /**
         * Get the short time zone name for given date/time.
         * @param {goog.date.DateLike} date The time for which to retrieve
         *     the short time zone name.
         * @return {string} The short time zone name.
         */
        getShortName(date: goog.date.DateLike): string;
    
        /**
         * Return the time zone ID for this time zone.
         * @return {string} The time zone ID.
         */
        getTimeZoneId(): string;
    
        /**
         * Check if Daylight Saving Time is in effect at a given time in this time zone.
         * @param {goog.date.DateLike} date The time to check.
         * @return {boolean} True if Daylight Saving Time is in effect.
         */
        isDaylightTime(date: goog.date.DateLike): boolean;
    }
}

declare module 'goog.i18n.currency' {

    /**
     * This function will add tier2 currency support. Be default, only tier1
     * (most popular currencies) are supported. If an application really needs
     * to support some of the rarely used currencies, it should call this function
     * before any other functions in this namespace.
     */
    function addTier2Support(): void;

    /**
     * Global currency pattern always uses ISO-4217 currency code as prefix. Local
     * currency sign is added if it is different from currency code. Each currency
     * is unique in this form. The negative side is that ISO code looks weird in
     * some countries as people normally do not use it. Local currency sign
     * alleviates the problem, but also makes it a little verbose.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Global currency pattern string for given currency.
     */
    function getGlobalCurrencyPattern(currencyCode: string): string;

    /**
     * Return global currency sign string for those applications
     * that want to handle currency sign themselves.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Global currency sign for given currency.
     */
    function getGlobalCurrencySign(currencyCode: string): string;

    /**
     * Local currency pattern is the most frequently used pattern in currency's
     * native region. It does not care about how it is distinguished from other
     * currencies.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Local currency pattern string for given currency.
     */
    function getLocalCurrencyPattern(currencyCode: string): string;

    /**
     * Returns local currency sign string for those applications that need to
     * handle currency sign separately.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Local currency sign for given currency.
     */
    function getLocalCurrencySign(currencyCode: string): string;

    /**
     * Portable currency pattern is a compromise between local and global. It is
     * not a mere blend or mid-way between the two. Currency sign is chosen so that
     * it looks familiar to native users. It also has enough information to
     * distinguish itself from other popular currencies in its native region.
     * In this pattern, currency sign symbols that has availability problem in
     * popular fonts are also avoided.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Portable currency pattern string for given currency.
     */
    function getPortableCurrencyPattern(currencyCode: string): string;

    /**
     * Return portable currency sign string for those applications that need to
     * handle currency sign themselves.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {string} Portable currency sign for given currency.
     */
    function getPortableCurrencySign(currencyCode: string): string;

    /**
     * This function returns the default currency sign position. Some applications
     * may want to handle currency sign and currency amount separately. This
     * function can be used in such situations to correctly position the currency
     * sign relative to the amount.
     *
     * To match the behavior of ICU, position is not determined by display locale.
     *
     * @param {string} currencyCode ISO-4217 3-letter currency code.
     * @return {boolean} true if currency should be positioned before amount field.
     */
    function isPrefixSignPosition(currencyCode: string): boolean;

    /**
     * Modify currency pattern string by adjusting precision for given currency.
     * Standard currency pattern will have 2 digit after decimal point.
     * Examples:
     *   $#,##0.00 ->  $#,##0    (precision == 0)
     *   $#,##0.00 ->  $#,##0.0  (precision == 1)
     *   $#,##0.00 ->  $#,##0.000  (precision == 3)
     *
     * @param {string} pattern currency pattern string.
     * @param {string} currencyCode 3-letter currency code.
     * @return {string} modified currency pattern string.
     */
    function adjustPrecision(pattern: string, currencyCode: string): string;

    /**
     * Tier 1 currency information.
     *
     * The first number in the array is a combination of the precision mask and
     * other flags. The precision mask indicates how many decimal places to show for
     * the currency. Valid values are [0..7]. The position flag indicates whether
     * the currency sign should be positioned after the number. Valid values are 0
     * (before the number) or 16 (after the number). The space flag indicates
     * whether a space should be inserted between the currency sign and number.
     * Valid values are 0 (no space) and 32 (space).
     *
     * The number in the array is calculated by adding together the mask and flag
     * values. For example:
     *
     * 0: no precision (0), currency sign first (0), no space (0)
     * 2: two decimals precision (2), currency sign first (0), no space (0)
     * 18: two decimals precision (2), currency sign last (16), no space (0)
     * 50: two decimals precision (2), currency sign last (16), space (32)
     *
     * @type {!Object.<!Array>}
     */
    var CurrencyInfo: { [key: string]: any /*missing*/ };

    /**
     * Tier 2 currency information.
     * @type {!Object.<!Array>}
     */
    var CurrencyInfoTier2: { [key: string]: any /*missing*/ };
}

declare module 'goog.i18n.DateTimeFormat' {

    /**
     * Enum to identify predefined Date/Time format pattern.
     * @enum {number}
     */
    enum Format { FULL_DATE, LONG_DATE, MEDIUM_DATE, SHORT_DATE, FULL_TIME, LONG_TIME, MEDIUM_TIME, SHORT_TIME, FULL_DATETIME, LONG_DATETIME, MEDIUM_DATETIME, SHORT_DATETIME } 

    /**
     * Localizes a string potentially containing numbers, replacing ASCII digits
     * with native digits if specified so by the locale. Leaves other characters.
     * @param {number|string} input the string to be localized, using ASCII digits.
     * @param {!Object=} opt_dateTimeSymbols Optional symbols to use use rather than
     *     the global symbols.
     * @return {string} localized string, potentially using native digits.
     */
    function localizeNumbers(input: any /*number|string*/, opt_dateTimeSymbols?: Object): string;
}

declare module 'goog.i18n.DateTimeParse' {

    /**
     * Number of years prior to now that the century used to
     * disambiguate two digit years will begin
     *
     * @type {number}
     */
    var ambiguousYearCenturyStart: number;
}

declare module 'goog.i18n.GraphemeBreak' {

    /**
     * Enum for all Grapheme Cluster Break properties.
     * These enums directly corresponds to Grapheme_Cluster_Break property values
     * mentioned in http://unicode.org/reports/tr29 table 2. VIRAMA and
     * INDIC_CONSONANT are for the Virama × Base tailoring mentioned in the notes.
     *
     * CR and LF are moved to the bottom of the list because they occur only once
     * and so good candidates to take 2 decimal digit values.
     * @enum {number}
     * @protected
     */
    enum property { ANY, CONTROL, EXTEND, PREPEND, SPACING_MARK, INDIC_CONSONANT, VIRAMA, L, V, T, LV, LVT, CR, LF, REGIONAL_INDICATOR } 

    /**
     * There are two kinds of grapheme clusters: 1) Legacy 2)Extended. This method
     * is to check for both using a boolean flag to switch between them.
     * @param {number} a The code point value of the first character.
     * @param {number} b The code point value of the second character.
     * @param {boolean=} opt_extended If true, indicates extended grapheme cluster;
     *     If false, indicates legacy cluster.
     * @return {boolean} True if a & b do not form a cluster; False otherwise.
     */
    function hasGraphemeBreak(a: number, b: number, opt_extended?: boolean): boolean;
}

declare module 'goog.i18n.mime' {

    /**
     * Encodes a string for inclusion in a MIME header. The string is encoded
     * in UTF-8 according to RFC 1522, using quoted-printable form.
     * @param {string} str The string to encode.
     * @param {boolean=} opt_noquote Whether double-quote characters should also
     *     be escaped (should be true if the result will be placed inside a
     *     quoted string for a parameter value in a MIME header).
     * @return {string} The encoded string.
     */
    function encode(str: string, opt_noquote?: boolean): string;

    /**
     * Get an array of UTF-8 hex codes for a given character.
     * @param {string} c The matched character.
     * @return {!Array.<string>} A hex array representing the character.
     */
    function getHexCharArray(c: string): string[];
}

declare module 'goog.i18n.NumberFormat' {

    /**
     * Standard number formatting patterns.
     * @enum {number}
     */
    enum Format { DECIMAL, SCIENTIFIC, PERCENT, CURRENCY, COMPACT_SHORT, COMPACT_LONG } 

    /**
     * Currency styles.
     * @enum {number}
     */
    enum CurrencyStyle { LOCAL, PORTABLE, GLOBAL } 

    /**
     * Compacting styles.
     * @enum {number}
     */
    enum CompactStyle { NONE, SHORT, LONG } 

    /**
     * Set if the usage of Ascii digits in formatting should be enforced.
     * @param {boolean} doEnforce Boolean value about if Ascii digits should be
     *     enforced.
     */
    function setEnforceAsciiDigits(doEnforce: boolean): void;

    /**
     * Return if Ascii digits is enforced.
     * @return {boolean} If Ascii digits is enforced.
     */
    function isEnforceAsciiDigits(): boolean;

    /**
     * Alias for the compact format 'unit' object.
     * @typedef {{
     *     prefix: string,
     *     suffix: string,
     *     divisorBase: number
     * }}
     */
    var CompactNumberUnit: any /*missing*/;

    /**
     * The empty unit, corresponding to a base of 0.
     * @private {!goog.i18n.NumberFormat.CompactNumberUnit}
     */
    var NULL_UNIT_: any /*missing*/;
}

declare module 'goog.i18n.ordinalRules' {

    /**
     * Ordinal pattern keyword
     * @enum {string}
     */
    enum Keyword { ZERO, ONE, TWO, FEW, MANY, OTHER } 

    /**
     * Selected Ordinal rules by locale.
     */
    var select: any /*missing*/;
}

declare module 'goog.i18n.pluralRules' {

    /**
     * Plural pattern keyword
     * @enum {string}
     */
    enum Keyword { ZERO, ONE, TWO, FEW, MANY, OTHER } 

    /**
     * Selected Plural rules by locale.
     */
    var select: any /*missing*/;
}

declare module 'goog.i18n.TimeZone' {

    /**
     * Indices into the array of time zone names.
     * @enum {number}
     */
    enum NameType { STD_SHORT_NAME, STD_LONG_NAME, DLT_SHORT_NAME, DLT_LONG_NAME } 

    /**
     * This factory method creates a time zone instance.  It takes either an object
     * containing complete time zone information, or a single number representing a
     * constant time zone offset.  If the latter form is used, DST functionality is
     * not available.
     *
     * @param {number|Object} timeZoneData If this parameter is a number, it should
     *     indicate minutes WEST of UTC to be used as a constant time zone offset.
     *     Otherwise, it should be an object with these four fields:
     *     <ul>
     *     <li>id: A string ID for the time zone.
     *     <li>std_offset: The standard time zone offset in minutes EAST of UTC.
     *     <li>names: An array of four names (standard short name, standard long
     *           name, daylight short name, daylight long, name)
     *     <li>transitions: An array of numbers which are interpreted in pairs:
     *           [time1, adjustment1, time2, adjustment2, ...] where each time is
     *           a DST transition point given as a number of hours since 00:00 UTC,
     *           January 1, 1970, and each adjustment is the adjustment to apply
     *           for times after the DST transition, given as minutes EAST of UTC.
     *     </ul>
     * @return {!goog.i18n.TimeZone} A goog.i18n.TimeZone object for the given
     *     time zone data.
     */
    function createTimeZone(timeZoneData: any /*number|Object*/): goog.i18n.TimeZone;
}

declare module 'goog.i18n.uChar' {

    /**
     * Gets the U+ notation string of a Unicode character. Ex: 'U+0041' for 'A'.
     * @param {string} ch The given character.
     * @return {string} The U+ notation of the given character.
     */
    function toHexString(ch: string): string;

    /**
     * Gets Unicode value of the given character.
     * @param {string} ch The given character, which in the case of a supplementary
     * character is actually a surrogate pair. The remainder of the string is
     * ignored.
     * @return {number} The Unicode value of the character.
     */
    function toCharCode(ch: string): number;

    /**
     * Gets a character from the given Unicode value. If the given code point is not
     * a valid Unicode code point, null is returned.
     * @param {number} code The Unicode value of the character.
     * @return {?string} The character corresponding to the given Unicode value.
     */
    function fromCharCode(code: number): string;

    /**
     * Returns the Unicode code point at the specified index.
     *
     * If the char value specified at the given index is in the leading-surrogate
     * range, and the following index is less than the length of {@code string}, and
     * the char value at the following index is in the trailing-surrogate range,
     * then the supplementary code point corresponding to this surrogate pair is
     * returned.
     *
     * If the char value specified at the given index is in the trailing-surrogate
     * range, and the preceding index is not before the start of {@code string}, and
     * the char value at the preceding index is in the leading-surrogate range, then
     * the negated supplementary code point corresponding to this surrogate pair is
     * returned.
     *
     * The negation allows the caller to differentiate between the case where the
     * given index is at the leading surrogate and the one where it is at the
     * trailing surrogate, and thus deduce where the next character starts and
     * preceding character ends.
     *
     * Otherwise, the char value at the given index is returned. Thus, a leading
     * surrogate is returned when it is not followed by a trailing surrogate, and a
     * trailing surrogate is returned when it is not preceded by a leading
     * surrogate.
     *
     * @param {!string} string The string.
     * @param {number} index The index from which the code point is to be retrieved.
     * @return {number} The code point at the given index. If the given index is
     * that of the start (i.e. lead surrogate) of a surrogate pair, returns the code
     * point encoded by the pair. If the given index is that of the end (i.e. trail
     * surrogate) of a surrogate pair, returns the negated code pointed encoded by
     * the pair.
     */
    function getCodePointAround(string: string, index: number): number;

    /**
     * Determines the length of the string needed to represent the specified
     * Unicode code point.
     * @param {number} codePoint
     * @return {number} 2 if codePoint is a supplementary character, 1 otherwise.
     */
    function charCount(codePoint: number): number;

    /**
     * Determines whether the specified Unicode code point is in the supplementary
     * Unicode characters range.
     * @param {number} codePoint
     * @return {boolean} Whether then given code point is a supplementary character.
     */
    function isSupplementaryCodePoint(codePoint: number): boolean;

    /**
     * Gets whether the given code point is a leading surrogate character.
     * @param {number} codePoint
     * @return {boolean} Whether the given code point is a leading surrogate
     * character.
     */
    function isLeadSurrogateCodePoint(codePoint: number): boolean;

    /**
     * Gets whether the given code point is a trailing surrogate character.
     * @param {number} codePoint
     * @return {boolean} Whether the given code point is a trailing surrogate
     * character.
     */
    function isTrailSurrogateCodePoint(codePoint: number): boolean;

    /**
     * Composes a supplementary Unicode code point from the given UTF-16 surrogate
     * pair. If leadSurrogate isn't a leading surrogate code point or trailSurrogate
     * isn't a trailing surrogate code point, null is returned.
     * @param {number} lead The leading surrogate code point.
     * @param {number} trail The trailing surrogate code point.
     * @return {?number} The supplementary Unicode code point obtained by decoding
     * the given UTF-16 surrogate pair.
     */
    function buildSupplementaryCodePoint(lead: number, trail: number): number;

    /**
     * Gets the name of a character, if available, returns null otherwise.
     * @param {string} ch The character.
     * @return {?string} The name of the character.
     */
    function toName(ch: string): string;

    /**
     * Sets up the character map, lazily.  Some characters are indexed by their
     * decimal value.
     * @protected
     */
    function createCharData(): void;
}

