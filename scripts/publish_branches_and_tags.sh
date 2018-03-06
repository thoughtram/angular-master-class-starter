# We need the set -e to abort the script when the safetycheck fails
# http://stackoverflow.com/questions/821396/aborting-a-shell-script-if-any-command-returns-a-non-zero-value/821419#821419

set -e
./scripts/safetycheck.js

git push -f --tags origin
git push -f origin jump-start-step-0:master
git push -f origin jump-start
git push -f origin architecture
git push -f origin observables
git push -f origin forms
git push -f origin routing
git push -f origin redux
git push -f origin ngrx
git push -f origin testing
