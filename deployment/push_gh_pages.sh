#!/bin/sh

cd ~/src/github.com/CheolminConanShin/Voldemort
cp -rf www/* docs
git config user.email "scm0226@gmail.com"
git config user.name "CheolminConanShin"
git add .
git commit -m "[skip ci]build success"
git push origin master
