#!/bin/bash

sed -i.tmp -r -e '/^(<p>(.+)<\/p>)$/!s/^(.+)$/<p>\1<\/p>/' $1
