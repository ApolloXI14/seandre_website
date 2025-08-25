#!/bin/sed -f
:loop; N; $!b loop; s/\n/ /g
