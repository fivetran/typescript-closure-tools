#!/bin/bash
find lib/closure-library/ -name '*.js' | grep -v '_test.js$' | grep -v '_perf.js$' | grep -v 'testdata'