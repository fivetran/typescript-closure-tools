#!/bin/bash
tsc --module commonjs --outDir dist/ src/Main.ts

#r.js -o name=Main out=main.js baseUrl=./dist/

#java -jar compiler.jar --compilation_level ADVANCED_OPTIMIZATIONS --js main.js > main.min.js

java -jar compiler.jar \
  --formatting PRETTY_PRINT \
  --process_common_js_modules \
  --common_js_entry_module dist/Main.js \
  --common_js_module_path_prefix dist/ \
  --compilation_level ADVANCED_OPTIMIZATIONS \
  dist/*.js > main.min.js