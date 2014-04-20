#!/bin/bash
python lib/closure-library/closure/bin/build/closurebuilder.py \
  --root=lib/closure-library/ \
  --input "$1"
