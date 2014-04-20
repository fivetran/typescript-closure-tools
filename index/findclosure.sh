#!/bin/bash
#
# Create symlinks to every JS file in the closure library
# The closure library contains HTML demo files which screw up IDE indexing

for FILE in $(find ../lib/closure-library/closure/goog -name '*.js')
do
  LINK=$(echo $FILE | cut -c 8-)
  PARENT=$(dirname $LINK)
  RELATIVE=$(echo $PARENT | sed -e 's/[a-z\-]*/../g')

  mkdir --parents $PARENT
  ln -s $RELATIVE/$FILE $LINK
done