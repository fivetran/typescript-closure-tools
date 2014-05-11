#!/bin/bash
# List all files in the closure library that we would like to convert
find lib/closure-library/ -name '*.js' | grep -v '_test.js$' | grep -v '_perf.js$' | grep -v 'testdata'