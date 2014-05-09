#!/bin/bash
FILES=$(find index/closure-library -name '*.d.ts')
REFERENCES=$(for FILE in $FILES
             do
                 echo "/// <reference path=\"${FILE#index/closure-library/}\" />"
             done)

echo "$REFERENCES" > index/closure-library/_references.ts