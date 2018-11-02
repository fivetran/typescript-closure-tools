export interface InputOutput {
    input: string;
    output: string;
}

var options: string[] = process.argv.slice(2);

function get_option(name): string {
    var index = options.indexOf('--' + name);

    if (index !== -1) {
        var value = options[index + 1];

        options.splice(index, 2);

        return value;
    }
}

export var provides = get_option('provides');
export var globals = get_option('globals');
export var inputRoot = get_option('input_root') || '';
export var outputRoot = get_option('output_root') || '';
export var includePrivate = get_option('include_private') || false;
export var todo: InputOutput[] = [];

for (var i = 0; i < options.length; i += 2) {
    todo.push({
        input: options[i],
        output: options[i + 1]
    });
}
