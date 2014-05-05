#!/bin/bash

FILES=$(find lib/closure-library/ -name '*.js' | grep -v '_test.js$' | grep -v '_perf.js$')

for FILE in $FILES
do
    GOOG=${FILE%*.js}
    GOOG=${GOOG#lib/closure-library/}
    OUTPUT="index/$GOOG.d.ts"

    # Clear file
    mkdir --parents $(dirname $OUTPUT)
    echo "// Generated $(date)" > $OUTPUT
    echo "" >> $OUTPUT

    # Create reference tags
    GO_UP=$(dirname $GOOG | sed -e 's/[a-z0-9_\-]\+/../g')
    REFS=$(./scripts/calculate_deps.sh $FILE)
    REFS=$(for REF in $REFS
           do
             echo ${REF%.js}
           done)
    REFS=$(echo "$REFS" | grep -v third_party)
    REFS=$(echo "$REFS" | uniq | head -n -1)

    for REF in $REFS
    do
        WHERE=${REF#lib/closure-library/}
        RELATIVE_REF=${GO_UP}/${WHERE}
        echo "/// <reference path=\"${RELATIVE_REF}.d.ts\" />" >> $OUTPUT
    done

    # Create modules
    node scripts/jsdoc_to_ts.js $FILE >> $OUTPUT
done

rm deps-cache
rm sources-cache