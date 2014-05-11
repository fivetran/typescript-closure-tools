#!/bin/bash
# Generate _references.ts, a typescript file referencing all the generated declarations
FILES=$(find index/closure-library -name '*.d.ts')
REFERENCES=$(for FILE in $FILES
             do
                 echo "/// <reference path=\"${FILE#index/closure-library/}\" />"
             done)

echo "$REFERENCES" > index/closure-library/_references.ts