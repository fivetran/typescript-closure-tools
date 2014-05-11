#!/bin/bash
# List input-file.js output-file.d.ts ...
# This format is suitable as the arguments to main.ts
FILES=$(find lib/closure-library/ -name '*.js' | grep -v '_test.js$' | grep -v '_perf.js$' | grep -v 'testdata')
for FILE in $FILES
do
    GOOG=${FILE%*.js}
    GOOG=${GOOG#lib/}
    OUTPUT="index/$GOOG.d.ts"

    echo $FILE $OUTPUT
done