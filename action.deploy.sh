#!/bin/bash

echo Pulling from upstream ...
git pull

echo Removing old dist ...
rm -rf ./dist
rm -rf ./blog/.vitepress/dist

echo Installing dependencies ...
bun i

echo Starting build ...
bun run build

echo Copying files ...
cp -r ./dist/* ../public_html
mkdir -p ../public_html/blog
cp -r ./blog/.vitepress/dist/* ../public_html/blog/

echo Deploy finished!
