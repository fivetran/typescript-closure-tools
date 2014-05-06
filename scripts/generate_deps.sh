#!/bin/bash
FILES=$(find lib/closure-library/ -name '*.js' | grep -v '_test.js$' | grep -v '_perf.js$')

for FILE in $FILES
do
    echo $FILE

    GOOG=${FILE%*.js}
    GOOG=${GOOG#lib/closure-library/}
    OUTPUT="dependencies/$GOOG.txt"
    mkdir --parents $(dirname $OUTPUT)

    ./scripts/calculate_deps.sh $FILE > $OUTPUT
done

rm deps-cache
rm sources-cache