#!/bin/sh

cd backend
gnome-terminal -- npm run dev

cd ../frontend
gnome-terminal -- npm run dev
