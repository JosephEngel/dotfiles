#!/bin/bash
#
#-- Script to update non-stowed config files
#-- Vars
stowPkg="stow"
packages="git hexchat terminator tmux"
errorCount=0
#-- Do Work
if [[ $(dnf list installed|grep -c ${stowPkg}) -lt 1 ]]; then
  echo "${stowPkg} not installed.  To install, run \"sudo dnf install -y ${stowPkg}\""
  exit 1
fi
cd ~/dotfiles || ( echo "error" && exit 1 )
#-- Majority configs
for package in ${packages}; do
  if [[ $(dnf list installed|grep -c ${package}) -lt 1 ]]; then
    echo "${package} not installed.  To install, run \"sudo dnf install -y ${package}\""
    continue
    ((errorCount++))
  fi
  echo "Running: stow ${package}"
  stow ${package}
done
#-- Gnome Themes
echo "Running: stow themes"
stow themes
#-- fonts (requires sudo)
echo "To install fonts, run:"
echo -e "sudo cp -R fonts/* /usr/share/fonts\n"
#-- Firefox
echo "To add firefox custom preferences, move 'firefox/user.js' into the root directory of the firefox profile (~/.mozilla/firefox/..."
#-- Exit
echo "Complete!"
echo "Errors: ${errorCount}"
exit ${errorCount}
