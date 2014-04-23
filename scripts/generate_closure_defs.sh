#!/bin/bash
FILES=$(find lib/closure-library/closure/goog -name '*.js' | grep -v '_test.js$' | grep -v '_perf.js$')
#FILES="lib/closure-library/closure/goog/object/object.js"

for FILE in $FILES
do
  GOOG=${FILE#lib/closure-library/closure/}
  PARENT=$(dirname $GOOG)
  GO_UP=$(echo $PARENT | sed -e 's/[a-z0-9\-]*/../g')
  OUTPUT="def/${GOOG%.js}.d.ts"

  # Create parent dir
  mkdir --parents def/$PARENT
  
  # Clear file
  echo "// Generated $(date)" > $OUTPUT
  echo "" >> $OUTPUT

  # Create reference tags
  REFS=$(./scripts/calculate_deps.sh $FILE | head -n -1)
  for REF in $REFS
  do
    WHERE=${REF#lib/closure-library/closure/}
    WHERE=${WHERE%.js}
    RELATIVE_REF=${GO_UP}/${WHERE}
    echo "/// <reference path=\"${RELATIVE_REF}\" />" >> $OUTPUT
  done

  echo "" >> $OUTPUT

  # Create modules
  node scripts/jsdoc_to_ts.js $FILE >> $OUTPUT
done