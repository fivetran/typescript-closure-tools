#!/bin/bash

DIRS=$(find lib/closure-library/closure/goog -type d)

#DIRS=$(echo "$DIRS" | head -1)

for DIR in $DIRS
do
    FILES=$(ls $DIR/*.js | grep -v '_test.js$' | grep -v '_perf.js$')
    GOOG=${DIR#lib/closure-library/closure/}
    OUTPUT="index/$GOOG.d.ts"

    # Clear file
    mkdir --parents $(dirname $OUTPUT)
    echo "// Generated $(date)" > $OUTPUT
    echo "" >> $OUTPUT

    # Create reference tags
    GO_UP=$(dirname $GOOG | sed -e 's/[a-z0-9\-]\+/../g')
    REFS=$(for FILE in $FILES
           do
             ./scripts/calculate_deps.sh $FILE
           done)
    REFS=$(for REF in $REFS
           do
             dirname $REF
           done)
    REFS=$(echo "$REFS" | sort -u)
    REFS=$(echo "$REFS" | grep -v "$DIR")

    for REF in $REFS
    do
        WHERE=${REF#lib/closure-library/closure/}
        RELATIVE_REF=${GO_UP}/${WHERE}
        echo "/// <reference path=\"${RELATIVE_REF}.d.ts\" />" >> $OUTPUT
    done

    # Create modules
    node scripts/jsdoc_to_ts.js $FILES >> $OUTPUT
done