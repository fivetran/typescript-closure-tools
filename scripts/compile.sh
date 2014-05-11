#!/bin/bash
# Example of minifying a set of typescript modules with closure compiler
tsc --module commonjs --outDir dist/ src/Main.ts

java -jar compiler.jar \
  --formatting PRETTY_PRINT \
  --process_common_js_modules \
  --common_js_entry_module dist/Main.js \
  --common_js_module_path_prefix dist/ \
  --compilation_level ADVANCED_OPTIMIZATIONS \
  dist/*.js > main.min.js