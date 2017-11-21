#!/bin/sh

for i in *.frag
do
    get_image_glfw --output `basename $i .frag`.png $i
done
