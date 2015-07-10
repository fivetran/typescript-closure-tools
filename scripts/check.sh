#!/bin/bash
# Run tsc on each declaration, redirecting errors to errors.txt
rm -f errors.txt
touch errors.txt

FILES=$(find index/closure-library -name '*.d.ts')

tsc $FILES