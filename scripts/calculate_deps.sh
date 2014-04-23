#!/bin/bash
python scripts/build/closurebuilder.py \
  --root=lib/closure-library/ \
  --input "$1"
