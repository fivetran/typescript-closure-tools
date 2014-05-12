/// <reference path="../../../../../../globals.d.ts" />

declare module goog._string.html {

    class HtmlParser extends HtmlParser.__Class { }
    module HtmlParser {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * An Html parser: {@code parse} takes a string and calls methods on
             * {@code goog.string.html.HtmlSaxHandler} while it is visiting it.
             *
             * @constructor
             */
            constructor();
    
            /**
             * Given a SAX-like {@code goog.string.html.HtmlSaxHandler} parses a
             * {@code htmlText} and lets the {@code handler} know the structure while
             * visiting the nodes.
             *
             * @param {goog.string.html.HtmlSaxHandler} handler The HtmlSaxHandler that will
             *     receive the events.
             * @param {string} htmlText The html text.
             */
            parse(handler: goog.string.html.HtmlSaxHandler, htmlText: string): void;
        }
    }

    class HtmlSaxHandler extends HtmlSaxHandler.__Class { }
    module HtmlSaxHandler {
        /** Fake class which should be extended to avoid inheriting static properties */
        class __Class {
    
            /**
             * An interface to the {@code goog.string.html.HtmlParser} visitor, that gets
             * called while the HTML is being parsed.
             *
             * @constructor
             */
            constructor();
    
            /**
             * Handler called when the parser found a new tag.
             * @param {string} name The name of the tag that is starting.
             * @param {Array.<string>} attributes The attributes of the tag.
             */
            startTag(name: string, attributes: string[]): void;
    
            /**
             * Handler called when the parser found a closing tag.
             * @param {string} name The name of the tag that is ending.
             */
            endTag(name: string): void;
    
            /**
             * Handler called when PCDATA is found.
             * @param {string} text The PCDATA text found.
             */
            pcdata(text: string): void;
    
            /**
             * Handler called when RCDATA is found.
             * @param {string} text The RCDATA text found.
             */
            rcdata(text: string): void;
    
            /**
             * Handler called when CDATA is found.
             * @param {string} text The CDATA text found.
             */
            cdata(text: string): void;
    
            /**
             * Handler called when the parser is starting to parse the document.
             */
            startDoc: any /*missing*/;
    
            /**
             * Handler called when the parsing is done.
             */
            endDoc: any /*missing*/;
        }
    }

    /**
     * TODO(goto): why isn't this in the string package ? does this solves any
     * real problem ? move it to the goog.string package if it does.
     *
     * @param {string} str The string to lower case.
     * @return {string} The str in lower case format.
     */
    function toLowerCase(str: string): string;
}

declare module goog._string.html.HtmlParser {

    /**
     * HTML entities that are encoded/decoded.
     * TODO(user): use {@code goog.string.htmlEncode} instead.
     * @enum {string}
     */
    enum Entities { lt, gt, amp, nbsp, quot, apos } 

    /**
     * The html eflags, used internally on the parser.
     * @enum {number}
     */
    enum EFlags { OPTIONAL_ENDTAG, EMPTY, CDATA, RCDATA, UNSAFE, FOLDABLE } 

    /**
     * A map of element to a bitmap of flags it has, used internally on the parser.
     * @type {Object}
     */
    var Elements: Object;
}
