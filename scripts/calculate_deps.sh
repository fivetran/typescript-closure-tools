#!/bin/bash
python lib/closure-library/closure/bin/build/closurebuilder.py \
  --root=lib/closure-library/ \
  --root=src/scripts/model/ \
  --root=src/scripts/view/ \
  --root=src/scripts/directives/ \
  --root=src/scripts/controllers/ \
  --root=src/scripts/filters/ \
  --namespace "$1"
