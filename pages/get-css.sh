#!/bin/bash


# for item in "${fruit[@]}";
#   do
#     echo $item
# done

location=(~/STEM/Dev/Projects/designo/designo-multi-page-website/designo/pages/styles)

blocks=("common.blocks" "mobile.blocks" "tablet.blocks" "desktop.blocks" "util.blocks")

writeToFile() {
    arr=("$@")
    for (( j=0; j<${#arr[@]}; j++ ))
    do
        cat "${arr[$j]}" >> ./base.css
        echo  >> ./base.css
    done
}

args=($1)

for class in "${args[@]}";
  do

    for (( i=0; i<${#blocks[@]}; i++ ))
      do
    
        files=$(find $location/blocks/${blocks[$i]}/ | grep "\/$class[-_]*\w*[-_]*\w*\.css")

        files=($files) # split the `files` string into an array by the same name

                writeToFile "${files[@]}"
                #cat $files >> ./base.css
    done
done



