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

echo "---- Starting: Stow Configurations ($(date)) ----"
echo ""
echo "Running: cd ~/dotfiles"
cd ~/dotfiles || ( echo -e "Error: Dir not found. Exitting.\n" && exit 1 )

#-- Majority configs
for package in ${packages}; do
  if [[ $(dnf list installed|grep -c ${package}) -lt 1 ]]; then
    echo "${package} not installed.  To install, run \"sudo dnf install -y ${package}\""
    continue
    ((errorCount++))
  fi
  echo "Running: stow ${package}"
  stow ${package}
  echo ""
done

#-- VS Codium
echo "Stowing Codum:"
if [[ -f /usr/bin/codium ]]; then
  if [[ -f ~/.config/VSCodium/User/settings.json ]]; then
    echo "  Backing up current user settings:"
    echo "   - Running: cp ~/.config/VSCodium/User/settings.json ~/.config/VSCodium/User/settings.json-$(date +%Y%m%d)-bak"
    cp ~/.config/VSCodium/User/settings.json ~/.config/VSCodium/User/settings.json-$(date +%Y%m%d)-bak
  fi
  echo "  Running: stow VSCodium"
  stow VSCodium
else
  echo "  Error: VSCodium not installed. Skipping."
  ((errorCount++))
fi
echo ""

#-- Gnome Themes
echo "Running: stow themes"
stow themes
echo ""

#-- fonts (requires sudo)
echo "To install fonts, run:"
echo -e "sudo cp -R fonts/* /usr/share/fonts\n"
echo ""

#-- Firefox
echo "To add firefox custom preferences, move 'firefox/user.js' into the root directory of the firefox profile (~/.mozilla/firefox/..."

#-- Exit
echo -e  "\n---- Complete! ($(date))----"
echo "Errors: ${errorCount}"
exit ${errorCount}

