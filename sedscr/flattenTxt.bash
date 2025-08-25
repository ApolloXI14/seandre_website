#!/bin/bash

sed -i ':loop; N; $!b loop; s/\n/ /g' $1
