import parser = require('./parser');
import combine = require('./combine');
import generate = require('./generate');
import pretty_print = require('./pretty_print');

export function convert(text: string): string {
    var docs = parser.jsdoc(text);
    var symbols = combine.members(docs);
    var out = generate.defs(symbols);
    var text = pretty_print.pretty(out);

    return text;
}

window['convert'] = convert;