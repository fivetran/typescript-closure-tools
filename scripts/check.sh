#!/bin/bash
# Run tsc on each declaration

FILES=$(find index/closure-library -name '*.d.ts')

tsc $FILES