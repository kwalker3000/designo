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
        echo >> ./base.css
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

            if [[ ${blocks[$i]} == "mobile.blocks" && ${#files} != 0 ]];
                then
                echo  >> ./base.css
                echo "@media (max-width: 689px) {" >> ./base.css
                writeToFile "${files[@]}"
                #cat $files >> ./base.css
                echo "}" >> ./base.css
                

            elif [[ ${blocks[$i]} == "tablet.blocks" && ${#files} != 0 ]];
                then
                echo  >> ./base.css
                echo "@media (min-width: 690px) {" >> ./base.css
                writeToFile "${files[@]}"
                #cat $files >> ./base.css
                echo "}" >> ./base.css
                

            elif [[ ${blocks[$i]} == "desktop.blocks" && ${#files} != 0 ]];
                then
                echo  >> ./base.css
                echo "@media (min-width: 1120px) {" >> ./base.css
                writeToFile "${files[@]}"
                #cat $files >> ./base.css
                echo "}" >> ./base.css
                

            else
                writeToFile "${files[@]}"
                #cat $files >> ./base.css
            fi
    done
done



