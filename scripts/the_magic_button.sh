# We need the set -e to abort the script when the safetycheck fails
# http://stackoverflow.com/questions/821396/aborting-a-shell-script-if-any-command-returns-a-non-zero-value/821419#821419

set -e

./scripts/rebase.sh
./scripts/retag.sh
./scripts/publish_branches_and_tags.sh
./scripts/publish_starter.sh
./scripts/backup_to_meta.sh