#!/bin/bash
FILES=$(find index/closure -name '*.d.ts')
echo "// Generated $(date)" > index/closure/references.ts

for FILE in $FILES
do
    echo "/// <reference path=\"${FILE#index/closure/}\"/>" >> index/closure/references.ts
done
