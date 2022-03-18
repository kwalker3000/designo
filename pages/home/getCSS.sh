#!/bin/bash

rm ./home.css

names=$(find $PWD | grep '.css$')
    
SAVEIFS=$IFS   # Save current IFS (Internal Field Separator)
IFS=$'\n'      # Change IFS to newline char
names=($names) # split the `names` string into an array by the same name
IFS=$SAVEIFS   # Restore original IFS

echo "/* CSS Buile */" > ./home.css

for (( i=0; i<${#names[@]}; i++ ))
do
    cat "${names[$i]}" >> ./home.css
done
