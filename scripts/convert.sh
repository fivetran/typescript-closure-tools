#!/bin/bash
FILES=$(./scripts/list.sh)
node src/main.js \
  --provides symbols.tsv \
  --globals globals.d.ts \
  --input_root lib/closure-library/ \
  --output_root index/closure-library/ \
  $FILES