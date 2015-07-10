/// <reference path="../../../../../../globals.d.ts" />
/// <reference path="./htmlparser.d.ts" />
/// <reference path="../../../../../../closure/goog/string/stringbuffer.d.ts" />

declare module goog._string.html {

    class HtmlSanitizer extends HtmlSanitizer__Class { }
    /** Fake class which should be extended to avoid inheriting static properties */
    class HtmlSanitizer__Class extends goog.string.html.HtmlSaxHandler__Class  { 
    
            /**
             * An implementation of the {@code goog.string.HtmlSaxHandler} interface that
             * will take each of the html tags and sanitize it.
             *
             * @param {goog.string.StringBuffer} stringBuffer A string buffer, used to
             *     output the html as we sanitize it.
             * @param {?function(string):string} opt_urlPolicy An optional function to be
             *     applied in URLs.
             * @param {?function(string):string} opt_nmTokenPolicy An optional function to
             *     be applied in names.
             * @constructor
             * @extends {goog.string.html.HtmlSaxHandler}
             */
            constructor(stringBuffer: goog.string.StringBuffer, opt_urlPolicy: { (_0: string): string }, opt_nmTokenPolicy: { (_0: string): string });
    } 
    

    /**
     * Strips unsafe tags and attributes from HTML.
     *
     * @param {string} htmlText The HTML text to sanitize.
     * @param {function(string): string=} opt_urlPolicy A transform to apply to URL
     *     attribute values.
     * @param {function(string): string=} opt_nmTokenPolicy A transform to apply to
     *     names, IDs, and classes.
     * @return {string} A sanitized HTML, safe to be embedded on the page.
     */
    function htmlSanitize(htmlText: string, opt_urlPolicy?: { (_0: string): string }, opt_nmTokenPolicy?: { (_0: string): string }): string;
}

declare module goog._string.html.HtmlSanitizer {

    /**
     * The HTML types the parser supports.
     * @enum {number}
     */
    enum AttributeType { NONE, URI, URI_FRAGMENT, SCRIPT, STYLE, ID, IDREF, IDREFS, GLOBAL_NAME, LOCAL_NAME, CLASSES, FRAME_TARGET } 

    /**
     * A map of attributes to types it has.
     * @enum {number}
     */
    enum Attributes { '*::class', '*::dir', '*::id', '*::lang', '*::onclick', '*::ondblclick', '*::onkeydown', '*::onkeypress', '*::onkeyup', '*::onload', '*::onmousedown', '*::onmousemove', '*::onmouseout', '*::onmouseover', '*::onmouseup', '*::style', '*::title', '*::accesskey', '*::tabindex', '*::onfocus', '*::onblur', 'a::coords', 'a::href', 'a::hreflang', 'a::name', 'a::onblur', 'a::rel', 'a::rev', 'a::shape', 'a::target', 'a::type', 'area::accesskey', 'area::alt', 'area::coords', 'area::href', 'area::nohref', 'area::onfocus', 'area::shape', 'area::tabindex', 'area::target', 'bdo::dir', 'blockquote::cite', 'br::clear', 'button::accesskey', 'button::disabled', 'button::name', 'button::onblur', 'button::onfocus', 'button::tabindex', 'button::type', 'button::value', 'caption::align', 'col::align', 'col::char', 'col::charoff', 'col::span', 'col::valign', 'col::width', 'colgroup::align', 'colgroup::char', 'colgroup::charoff', 'colgroup::span', 'colgroup::valign', 'colgroup::width', 'del::cite', 'del::datetime', 'dir::compact', 'div::align', 'dl::compact', 'font::color', 'font::face', 'font::size', 'form::accept', 'form::action', 'form::autocomplete', 'form::enctype', 'form::method', 'form::name', 'form::onreset', 'form::onsubmit', 'form::target', 'h1::align', 'h2::align', 'h3::align', 'h4::align', 'h5::align', 'h6::align', 'hr::align', 'hr::noshade', 'hr::size', 'hr::width', 'img::align', 'img::alt', 'img::border', 'img::height', 'img::hspace', 'img::ismap', 'img::longdesc', 'img::name', 'img::src', 'img::usemap', 'img::vspace', 'img::width', 'input::accept', 'input::accesskey', 'input::autocomplete', 'input::align', 'input::alt', 'input::checked', 'input::disabled', 'input::ismap', 'input::maxlength', 'input::name', 'input::onblur', 'input::onchange', 'input::onfocus', 'input::onselect', 'input::readonly', 'input::size', 'input::src', 'input::tabindex', 'input::type', 'input::usemap', 'input::value', 'ins::cite', 'ins::datetime', 'label::accesskey', 'label::for', 'label::onblur', 'label::onfocus', 'legend::accesskey', 'legend::align', 'li::type', 'li::value', 'map::name', 'menu::compact', 'ol::compact', 'ol::start', 'ol::type', 'optgroup::disabled', 'optgroup::label', 'option::disabled', 'option::label', 'option::selected', 'option::value', 'p::align', 'pre::width', 'q::cite', 'select::disabled', 'select::multiple', 'select::name', 'select::onblur', 'select::onchange', 'select::onfocus', 'select::size', 'select::tabindex', 'table::align', 'table::bgcolor', 'table::border', 'table::cellpadding', 'table::cellspacing', 'table::frame', 'table::rules', 'table::summary', 'table::width', 'tbody::align', 'tbody::char', 'tbody::charoff', 'tbody::valign', 'td::abbr', 'td::align', 'td::axis', 'td::bgcolor', 'td::char', 'td::charoff', 'td::colspan', 'td::headers', 'td::height', 'td::nowrap', 'td::rowspan', 'td::scope', 'td::valign', 'td::width', 'textarea::accesskey', 'textarea::cols', 'textarea::disabled', 'textarea::name', 'textarea::onblur', 'textarea::onchange', 'textarea::onfocus', 'textarea::onselect', 'textarea::readonly', 'textarea::rows', 'textarea::tabindex', 'tfoot::align', 'tfoot::char', 'tfoot::charoff', 'tfoot::valign', 'th::abbr', 'th::align', 'th::axis', 'th::bgcolor', 'th::char', 'th::charoff', 'th::colspan', 'th::headers', 'th::height', 'th::nowrap', 'th::rowspan', 'th::scope', 'th::valign', 'th::width', 'thead::align', 'thead::char', 'thead::charoff', 'thead::valign', 'tr::align', 'tr::bgcolor', 'tr::char', 'tr::charoff', 'tr::valign', 'ul::compact', 'ul::type' } 
}
