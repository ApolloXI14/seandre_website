#!/bin/sed -f
:loop; N; $!b loop; s/[\r\n]/<\/br>/g
