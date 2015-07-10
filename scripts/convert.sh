#!/bin/bash
# Convert the entire closure library to typescript declarations
tsc --module commonjs definition-generator/src/*.ts

FILES=$(./scripts/list_input_output.sh)
node definition-generator/src/main.js \
  --provides symbols.tsv \
  --globals globals.d.ts \
  --input_root lib/closure-library/ \
  --output_root index/closure-library/ \
  $FILES