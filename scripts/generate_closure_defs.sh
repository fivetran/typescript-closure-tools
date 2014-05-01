#!/bin/bash

FILES=$(find lib/closure-library/closure/ -name '*.js' | grep -v '_test.js$' | grep -v '_perf.js$')

#DIRS=$(echo "$DIRS" | head -1)

for FILE in $FILES
do
    GOOG=${FILE%*.js}
    GOOG=${GOOG#lib/closure-library/closure/}
    OUTPUT="index/closure/$GOOG.d.ts"

    # Clear file
    mkdir --parents $(dirname $OUTPUT)
    echo "// Generated $(date)" > $OUTPUT
    echo "" >> $OUTPUT

    # Create reference tags
    GO_UP=$(dirname $GOOG | sed -e 's/[a-z0-9\-]\+/../g')
    REFS=$(./scripts/calculate_deps.sh $FILE)
    REFS=$(echo "$REFS" | grep -v third_party)
    REFS=$(echo "$REFS" | sort -u)
    REFS=$(echo "$REFS" | grep -v "$GOOG.js")

    for REF in $REFS
    do
        WHERE=${REF#lib/closure-library/closure/}
        RELATIVE_REF=${GO_UP}/${WHERE}
        echo "/// <reference path=\"${RELATIVE_REF}.d.ts\" />" >> $OUTPUT
    done

    # Create modules
    node scripts/jsdoc_to_ts.js $FILES >> $OUTPUT
done