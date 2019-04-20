#!/bin/bash
# Script to create symlinks to local dotfiles and copy various themes to local machine

shopt -s expand_aliases dotglob

# cd into dotfiles repo directory
cd "$(dirname "$0")/files"

FILES="*"

# Iterate through the files directory
for x in $FILES; do
  if [ -d "$x" ]; then
    echo "Folder: $x"
  else
    echo "File: $x"
  fi

  if [ -e "$HOME/$x" ]; then
    echo "$HOME/$x already exists.  Do you want to overwrite? (y/n)?"
    read CHOICE

    if [ "$CHOICE" == "Y" ] || [ "$CHOICE" == "y" ]; then
      cp -faTs "$(pwd)/$x" "$HOME/$x"
      echo "$x symlinked to $HOME/$x"
      echo ""
    elif [ "$CHOICE" == "N" ] || [ "$CHOICE" == "n" ]; then
      echo "Skipping.."
      echo ""
    else
      echo "Invalid input. Skipping.."
      echo ""
    fi

  else
    cp -faTs "$(pwd)/$x" "$HOME/$x"
    echo "$x symlinked to $HOME/$x"
    echo ""
  fi
done
