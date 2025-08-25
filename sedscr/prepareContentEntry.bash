#!/bin/bash

.wrapDocInPTags.sed $1 | ./flattenTxt.sed | ./removeRtn.sed
