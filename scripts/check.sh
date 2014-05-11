#!/bin/bash
# Run tsc on each declaration, redirecting errors to errors.txt
rm -f errors.txt
touch errors.txt

FILES=$(find index/closure-library -name '*.d.ts')

for FILE in $FILES
do
    echo $FILE
    tsc $FILE 2>> errors.txt
done
