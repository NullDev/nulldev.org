#!/bin/bash

echo Pulling from upstream ...
git pull

echo Removing old dist ...
rm -rf ./dist

echo Installing dependencies ...
npm i

echo Starting build ...
npm run start:build

echo Copying files ...
cp -r ./dist/* ../public_html
mkdir -p ../public_html/blog
cp -r ./blog/.vitepress/dist/* ../public_html/blog/

echo Deploy finished!
