#!/bin/bash
# Generate symbols.tsv, a tab-separated-value file listing input-file.js exported.symbol
rm symbols.tsv
touch symbols.tsv

FILES=$(./scripts/list_files.sh)

for FILE in $FILES
do
    PROVIDES=$(grep 'goog.provide' ${FILE} | sed -e "s/goog.provide('\(.\+\)');/\1/")

    for PROVIDE in $PROVIDES
    do
        echo -e "$FILE\t$PROVIDE" >> symbols.tsv
    done
done
