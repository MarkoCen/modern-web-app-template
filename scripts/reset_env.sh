#!/bin/zsh

find . \( -name 'node_modules' -o -name '.turbo' -o -name '.next' -o -name 'codegen' -o -name '.swc' \) -type d -prune -print -exec rm -rf '{}' \;

pnpm i

pnpm codegen
