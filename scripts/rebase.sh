# create backups first without branch switching. Much safer. Trust me.
./scripts/backup_branches.sh

root_commit="$(git rev-list --max-parents=0 jump-start)"

git checkout observables
git rebase --onto jump-start HEAD~5 HEAD
git branch -f observables

git checkout architecture
git rebase --onto jump-start HEAD~5 HEAD
git branch -f architecture

git checkout forms
git rebase --onto jump-start HEAD~9 HEAD
git branch -f forms

git checkout routing
git rebase --onto jump-start HEAD~5 HEAD
git branch -f routing

git checkout ngrx
git rebase --onto jump-start HEAD~8 HEAD
git branch -f ngrx

git checkout testing
git rebase --onto architecture HEAD~11 HEAD
git branch -f testing

git checkout redux
git rebase --onto "${root_commit}" HEAD~7 HEAD
git branch -f redux

git checkout jump-start
