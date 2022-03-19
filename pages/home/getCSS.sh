#!/bin/bash

rm ./test.css

echo "/* CSS Buile */" > ./test.css

location=(~/STEM/Dev/Projects/designo/designo-multi-page-website/designo/pages/styles)

blocks=("common.blocks" "mobile.blocks" "tablet.blocks" "desktop.blocks")

writeToFile() {
    arr=("$@")
    for (( j=0; j<${#arr[@]}; j++ ))
    do
        cat "${arr[$j]}" >> ./test.css
        echo "${arr[$j]}" >> ./files.txt
    done
}


for (( i=0; i<${#blocks[@]}; i++ ))
do

  files=$(find $location/blocks/${blocks[$i]}/ | grep '.css$')

  files=($files) # split the `files` string into an array by the same name

    if [ ${blocks[$i]} == "mobile.blocks" ];
        then
        echo "@media (max-width: 689px) {" >> ./test.css
        writeToFile "${files[@]}"
        echo "}" >> ./test.css

    elif [ ${blocks[$i]} == "tablet.blocks" ];
        then
        echo "@media (min-width: 690px) {" >> ./test.css
        writeToFile "${files[@]}"
        echo "}" >> ./test.css

    elif [ ${blocks[$i]} == "desktop.blocks" ];
        then
        echo "@media (min-width: 1120px) {" >> ./test.css
        writeToFile "${files[@]}"
        echo "}" >> ./test.css

    else
        writeToFile "${files[@]}"
    fi

done



echo 