#!/bin/sh

cd ../backend
npm install
cd ../frontend
npm run build
cp -r dist ../backend
