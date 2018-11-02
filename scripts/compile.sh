#!/bin/bash
# Example of minifying a set of typescript modules with closure compiler
tsc --target ES6 --module commonjs definition-generator/src/*.ts
tsc --target ES6 --module commonjs externs-generator/src/*.ts
rm -rf dist/
mkdir -p dist/
node node_modules/browserify/bin/cmd.js definition-generator/src/page.js > main.min.js

#java -jar scripts/compiler.jar \
#  --process_common_js_modules \
#  --common_js_entry_module src/page.js \
#  --common_js_module_path_prefix dist/ \
#  --compilation_level WHITESPACE_ONLY \
#  --formatting PRETTY_PRINT \
#  dist/*.js > page/main.min.js