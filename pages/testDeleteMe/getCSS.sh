#!/bin/bash

echo "/* CSS Buile */" > ../testDeleteMe/test.css

names=$(find /home/kwalker/STEM/Dev/Projects/designo/designo-multi-page-website/designo/pages/home | grep '.css$')
    
SAVEIFS=$IFS   # Save current IFS (Internal Field Separator)
IFS=$'\n'      # Change IFS to newline char
names=($names) # split the `names` string into an array by the same name
IFS=$SAVEIFS   # Restore original IFS

for (( i=0; i<${#names[@]}; i++ ))
do
    cat "${names[$i]}" >> ../testDeleteMe/test.css
done
